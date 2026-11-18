#!/usr/bin/env python3
"""
Inclusive Design Tool - Schema Validator
Validates all YAML/Markdown cards against JSON Schemas.

Usage:
    python validate.py [--fix] [--path PATH]

Exit codes:
    0 - all valid
    1 - validation errors found
    2 - usage error / missing dependencies
"""

import sys
import os
import yaml
import json
import glob
import argparse
from pathlib import Path
from typing import Dict, List, Tuple, Any
import frontmatter


# ANSI color codes
class Colors:
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    BOLD = '\033[1m'
    RESET = '\033[0m'


def print_color(msg: str, color: str = Colors.RESET):
    print(f"{color}{msg}{Colors.RESET}")


def load_schema(schema_path: Path) -> Dict:
    """Load a JSON schema file."""
    with open(schema_path, 'r', encoding='utf-8') as f:
        return json.load(f)


def load_all_schemas(schema_dir: Path) -> Dict[str, Dict]:
    """Load all schema files from schema directory."""
    schemas = {}
    for schema_file in schema_dir.glob('*.schema.json'):
        name = schema_file.stem.replace('.schema', '')
        try:
            schemas[name] = load_schema(schema_file)
            print_color(f"  Loaded schema: {name}", Colors.GREEN)
        except Exception as e:
            print_color(f"  Failed to load {schema_file}: {e}", Colors.RED)
    return schemas


def validate_yaml_file(file_path: Path, schema: Dict, schema_name: str) -> Tuple[bool, List[str]]:
    """Validate a YAML file against a JSON schema.
    
    Registry files (registry/*.yaml) contain arrays of objects - validate each item.
    Individual card files (markdown with front-matter) contain single objects.
    """
    errors = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Parse front-matter if markdown
        if file_path.suffix in ['.md', '.markdown']:
            post = frontmatter.loads(content)
            data = post.metadata
            items = [data] if data else []
        else:
            # YAML registry files - could be array or single object
            data = yaml.safe_load(content)
            if data is None:
                errors.append(f"Empty or invalid YAML")
                return False, errors
            items = data if isinstance(data, list) else [data]
            
    except yaml.YAMLError as e:
        errors.append(f"YAML parse error: {e}")
        return False, errors
    except Exception as e:
        errors.append(f"Read error: {e}")
        return False, errors

    # Validate each item against schema
    try:
        import jsonschema
        for i, item in enumerate(items):
            try:
                jsonschema.validate(instance=item, schema=schema)
            except jsonschema.exceptions.ValidationError as e:
                path_info = f" (item {i}, path: {' -> '.join(str(p) for p in e.absolute_path)})"
                errors.append(f"Schema validation failed: {e.message}{path_info}")
    except jsonschema.exceptions.SchemaError as e:
        errors.append(f"Invalid schema: {e.message}")
    except ImportError:
        errors.append("jsonschema library not installed. Run: pip install jsonschema")
    except Exception as e:
        errors.append(f"Validation error: {e}")

    return len(errors) == 0, errors


def find_files_for_schema(schema_name: str, root: Path) -> List[Path]:
    """Find all files that should be validated against a given schema."""
    patterns = {
        'factor': ['knowledge/factors/*.md'],
        'rule': ['registry/rules.yaml'],
        'metric': ['registry/metrics.yaml'],
        'guide': ['knowledge/guides/*.md'],
        'standard': ['registry/standards.yaml', 'knowledge/standards/*.md'],
        'case': ['knowledge/cases/*.md'],
        # N+1-② 描述器：结构校验挂入门禁（与 profile 契约的一致性由
        # scripts/validate_profile_contract.py 单独把关）
        'descriptor': ['registry/descriptor.yaml'],
        # N+2-① facet：因素细分层（P1 试点 WHO-F-001）
        'facet': ['registry/facets.yaml'],
        # 多语言补译工程：i18n 覆盖层（每语言一个文件；id 存在性由 build-data.mjs 门禁校验）
        'i18n': ['registry/i18n/*.yaml'],
    }
    
    files = []
    for pattern in patterns.get(schema_name, []):
        files.extend(root.glob(pattern))
    return files


def cross_registry_check(root: Path, verbose: bool = False) -> Tuple[bool, List[str]]:
    """Cross-registry referential integrity checks (not expressible in JSON Schema):
    1. Every STD-* id referenced by factor cards / metrics / rules exists in standards.yaml
    2. Every M-* id in factor card 'metrics' exists in metrics.yaml
    3. Every metric's factor_id exists in factors.yaml (non-RUL) or factors.yaml RUL entries
    4. Every rule's factor refs exist in factors.yaml
    Returns (ok, errors).
    """
    errors = []

    def load_yaml(p):
        try:
            with open(p, 'r', encoding='utf-8') as f:
                return yaml.safe_load(f) or []
        except Exception:
            return []

    reg_dir = root / 'registry'
    factors_reg = load_yaml(reg_dir / 'factors.yaml')
    metrics_reg = load_yaml(reg_dir / 'metrics.yaml')
    standards_reg = load_yaml(reg_dir / 'standards.yaml')
    rules_reg = load_yaml(reg_dir / 'rules.yaml')

    factor_ids = {e.get('id') for e in factors_reg if isinstance(e, dict)}
    metric_ids = {e.get('id') for e in metrics_reg if isinstance(e, dict)}
    std_ids = {e.get('id') for e in standards_reg if isinstance(e, dict)}
    std_ids = {s.split(':')[0] for s in std_ids if s}

    # 1+2. Scan factor cards
    cards_dir = root / 'knowledge' / 'factors'
    for card in sorted(cards_dir.glob('*.md')):
        try:
            with open(card, 'r', encoding='utf-8') as f:
                content = f.read()
            post = frontmatter.loads(content)
            fm = post.metadata
        except Exception:
            continue
        cid = fm.get('id', '?')
        for ref in (fm.get('refs') or {}).get('standards') or []:
            base = str(ref).split(':')[0]
            if base not in std_ids:
                errors.append(f"{card.name}: standards ref '{ref}' not in standards.yaml")
        for mid in fm.get('metrics') or []:
            if mid not in metric_ids:
                errors.append(f"{card.name}: metrics ref '{mid}' not in metrics.yaml")

    # 3. Metrics -> factors
    for m in metrics_reg:
        if not isinstance(m, dict):
            continue
        fid = m.get('factor_id')
        if fid and fid not in factor_ids:
            errors.append(f"metrics.yaml: {m.get('id')} factor_id '{fid}' not in factors.yaml")

    # 3b. Metric related_standards refs
    for m in metrics_reg:
        if not isinstance(m, dict):
            continue
        for ref in m.get('related_standards') or []:
            base = str(ref).split(':')[0]
            if base not in std_ids:
                errors.append(f"metrics.yaml: {m.get('id')} related_standards ref '{ref}' not in standards.yaml")

    # 4. Rules -> factors
    for r in rules_reg:
        if not isinstance(r, dict):
            continue
        for key in ('factors', 'factor_ids', 'related_factors'):
            for fid in r.get(key) or []:
                if fid not in factor_ids:
                    errors.append(f"rules.yaml: {r.get('id')} factor ref '{fid}' not in factors.yaml")

    # 5. Cases -> factors + guides -> cases
    cases_dir = root / 'knowledge' / 'cases'
    case_ids = set()
    for case_file in sorted(cases_dir.glob('*.md')):
        try:
            post = frontmatter.loads(case_file.read_text(encoding='utf-8'))
            fm = dict(post.metadata or {})
            cid = fm.get('id')
            if cid:
                case_ids.add(cid)
        except Exception:
            continue
        for fid in fm.get('factor_coverage') or []:
            if fid not in factor_ids:
                errors.append(f"{case_file.name}: factor_coverage ref '{fid}' not in factors.yaml")

    guides_dir = root / 'knowledge' / 'guides'
    for gfile in sorted(guides_dir.glob('*.md')):
        try:
            post = frontmatter.loads(gfile.read_text(encoding='utf-8'))
            fm = dict(post.metadata or {})
        except Exception:
            continue
        for c in fm.get('cases') or []:
            if isinstance(c, dict):
                cid = c.get('id')
                if cid and cid not in case_ids:
                    errors.append(f"{gfile.name}: case ref '{cid}' not in 05_Cases/")
            elif isinstance(c, str):
                if c not in case_ids:
                    errors.append(f"{gfile.name}: case ref '{c}' not in 05_Cases/")

    # 6. Facets（N+2-①）：factor_id / metrics / standards 外键 + 因素引用双向一致
    facets_reg = load_yaml(reg_dir / 'facets.yaml')
    facet_by_id = {}
    for fc in facets_reg:
        if not isinstance(fc, dict) or not fc.get('id'):
            continue
        fid = fc['id']
        if fid in facet_by_id:
            errors.append(f"facets.yaml: 重复的 facet id '{fid}'")
        facet_by_id[fid] = fc
        pid = fc.get('factor_id')
        if pid not in factor_ids:
            errors.append(f"facets.yaml: {fid} factor_id '{pid}' not in factors.yaml")
        for mid in fc.get('metrics') or []:
            if mid not in metric_ids:
                errors.append(f"facets.yaml: {fid} metrics ref '{mid}' not in metrics.yaml")
        for sref in (fc.get('refs') or {}).get('standards') or []:
            base = str(sref).split(':')[0]
            if base not in std_ids:
                errors.append(f"facets.yaml: {fid} standards ref '{sref}' not in standards.yaml")
    for e in factors_reg:
        if not isinstance(e, dict):
            continue
        for fcid in e.get('facets') or []:
            row = facet_by_id.get(fcid)
            if row is None:
                errors.append(f"factors.yaml: {e.get('id')} facets 引用不存在的 '{fcid}'")
            elif row.get('factor_id') != e.get('id'):
                errors.append(f"factors.yaml: {e.get('id')} facets 引用 '{fcid}' 但其 factor_id 是 '{row.get('factor_id')}'")

    ok = not errors
    return ok, errors


def main():
    parser = argparse.ArgumentParser(description='Validate inclusive design cards against schemas')
    parser.add_argument('--fix', action='store_true', help='Attempt to fix common issues (not implemented)')
    parser.add_argument('--path', type=str, default='.', help='Project root path')
    parser.add_argument('--schema', type=str, help='Validate only specific schema (factor/rule/metric/guide/standard/case)')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose output')
    args = parser.parse_args()

    root = Path(args.path).resolve()
    schema_dir = root / 'schema'

    if not schema_dir.exists():
        print_color(f"Schema directory not found: {schema_dir}", Colors.RED)
        return 2

    print_color(f"\n{'='*60}", Colors.BOLD)
    print_color(f"Inclusive Design Tool - Schema Validator", Colors.BOLD)
    print_color(f"Project root: {root}", Colors.BLUE)
    print_color(f"{'='*60}\n", Colors.BOLD)

    # Load schemas
    schemas = load_all_schemas(schema_dir)
    if not schemas:
        print_color("No schemas loaded!", Colors.RED)
        return 2

    # Filter schema if requested
    if args.schema:
        if args.schema not in schemas:
            print_color(f"Schema '{args.schema}' not found. Available: {list(schemas.keys())}", Colors.RED)
            return 2
        schemas = {args.schema: schemas[args.schema]}

    # Validate each schema
    total_files = 0
    total_errors = 0
    all_passed = True

    for schema_name, schema in schemas.items():
        print_color(f"\n--- Validating {schema_name} ---", Colors.BLUE)
        files = find_files_for_schema(schema_name, root)
        
        if not files:
            print_color(f"  No files found for {schema_name}", Colors.YELLOW)
            continue

        for file_path in files:
            total_files += 1
            rel_path = file_path.relative_to(root)
            valid, errors = validate_yaml_file(file_path, schema, schema_name)
            
            if valid:
                if args.verbose:
                    print_color(f"  ✓ {rel_path}", Colors.GREEN)
            else:
                all_passed = False
                total_errors += len(errors)
                print_color(f"  ✗ {rel_path}", Colors.RED)
                for err in errors:
                    print_color(f"      {err}", Colors.RED)

    # Cross-registry referential integrity
    print_color(f"\n--- Cross-registry integrity ---", Colors.BLUE)
    xok, xerrs = cross_registry_check(root, args.verbose)
    total_files += 0  # cross-check doesn't add files, only errors
    if not xok:
        all_passed = False
        total_errors += len(xerrs)
        for err in xerrs:
            print_color(f"  ✗ {err}", Colors.RED)
    else:
        print_color(f"  ✓ referential integrity OK (cards↔metrics↔factors↔standards↔rules)", Colors.GREEN)

    # Summary
    print_color(f"\n{'='*60}", Colors.BOLD)
    if all_passed:
        print_color(f"✓ ALL VALIDATIONS PASSED ({total_files} files checked)", Colors.GREEN)
    else:
        print_color(f"✗ VALIDATION FAILED: {total_errors} errors in {total_files} files", Colors.RED)
    print_color(f"{'='*60}\n", Colors.BOLD)

    return 0 if all_passed else 1


if __name__ == '__main__':
    sys.exit(main())
