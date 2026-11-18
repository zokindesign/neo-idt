#!/usr/bin/env node
// build-data.mjs — 构建期：registry/*.yaml + knowledge卡片 → data-pack-<hash>.json（ADR-005）
// 运行：node app/scripts/build-data.mjs
// 产物：app/public/data/data-pack-<hash>.json（SPA 版本化拉取）
// N+1-①：因素改为「注册表薄字段 + 卡片厚字段」合并构建，指南/案例全量入包
//        （evidence/weights/refs/guides/metrics 界面可见的前提）
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'js-yaml';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..');              // repo root
const REG = join(ROOT, 'registry');
const VAULT = join(ROOT, 'knowledge', 'obsidian_vault');
const OUT_DIR = join(__dirname, '..', 'public', 'data');
mkdirSync(OUT_DIR, { recursive: true });

function readYaml(name) {
  return load(readFileSync(join(REG, name + '.yaml'), 'utf8'));
}

// 卡片 front-matter 解析（Obsidian --- 块；正文不读，包里只放结构化字段）
function readFrontMatter(filePath) {
  const text = readFileSync(filePath, 'utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  return load(m[1]);
}

// ---------- 1. 解析四注册表 ----------
const factors = readYaml('factors');      // List[65]
const metrics = readYaml('metrics');      // List[65]
const rules = readYaml('rules');          // List[34]
const standards = readYaml('standards');  // List[25]
const facets = readYaml('facets');        // N+2-①：因素细分层（P1 试点 WHO-F-001，4 条）
const descriptor = readYaml('descriptor'); // 描述器定义（INCL-NEXT-001 §3.2，N+1-②）：表单结构即数据

// ---------- 1b. i18n 覆盖层（多语言补译工程 v0.1） ----------
// 译文只落注册表层（registry/i18n/<lang>.yaml），不写生成视图（卡片重跑不覆盖译文）；
// 构建期把译文挂到对应实体的 i18n 节点，前端按 locale 取词（app/src/lib/kbtext.ts）。
const I18N_DIR = join(REG, 'i18n');
const overlays = {};
// 只忽略「目录不存在」（= 尚未开始补译）；覆盖层解析失败必须报错——
// 曾因宽 catch 吞掉 js-yaml 的重复键异常，导致覆盖层被当成空、译文整体静默消失而构建仍「成功」
if (existsSync(I18N_DIR)) {
  for (const fname of readdirSync(I18N_DIR).filter(x => /\.ya?ml$/i.test(x))) {
    const lang = fname.replace(/\.ya?ml$/i, '');
    try {
      overlays[lang] = load(readFileSync(join(I18N_DIR, fname), 'utf8')) || {};
    } catch (e) {
      throw new Error(`i18n 覆盖层解析失败: registry/i18n/${fname} — ${e.message}`);
    }
  }
}
function i18nNode(kind, id) {
  const node = {};
  for (const lang of Object.keys(overlays)) {
    const e = overlays[lang]?.[kind]?.[id];
    if (e && typeof e === 'object') node[lang] = e;
  }
  return Object.keys(node).length ? node : null;
}
function withI18n(kind, id, obj) {
  const node = i18nNode(kind, id);
  if (node) obj.i18n = node;
  return obj;
}

// ---------- 2. 规则引擎用子集（ACT 9 条 + 条件表达式安全化） ----------
const actRules = rules
  .filter(r => r.type === 'activate')
  .map(r => ({
    id: r.id,
    condition: r.condition,           // 如 "task.category == 'online-communication'"
    activates: r.activates || [],     // ["HOW-F-001"]
    description: r.description
  }));

// ---------- 2b. L2 关系规则（N+2-②：DEP/MOD/CNF/CMP 25 条入引擎） ----------
// 保留原始字段（DefineView 冲突面板读 factor_a/factor_b），另加归一化
// anchor/targets 供 computeL2Closure 统一传播
const l2Rules = rules
  .filter(r => r.type !== 'activate')
  .map(r => {
    const base = {
      id: r.id,
      type: r.type,
      description: r.description,
      condition: r.condition || ''
    }
    if (r.type === 'depend') {
      base.anchor = r.dependency
      base.targets = [r.dependent]
      base.dependent = r.dependent
      base.dependency = r.dependency
    } else if (r.type === 'moderate') {
      base.anchor = r.moderator
      base.targets = [r.target]
      base.moderator = r.moderator
      base.target = r.target
      base.direction = r.direction
    } else if (r.type === 'compensate') {
      base.anchor = r.unavailable
      base.targets = r.compensates || []
      base.unavailable = r.unavailable
      base.compensates = r.compensates || []
    } else if (r.type === 'conflict') {
      base.pair = [r.factor_a, r.factor_b]
      base.factor_a = r.factor_a
      base.factor_b = r.factor_b
      base.priority_rule = r.priority_rule
    }
    return base
  })

// ---------- 3. 指标三层 + 阈值结构（前端只读） ----------
const metricsByFactor = {};
for (const m of metrics) {
  const key = m.factor_id;
  if (!metricsByFactor[key]) metricsByFactor[key] = [];
  metricsByFactor[key].push(withI18n('metrics', m.id, {
    id: m.id,
    name: m.name,
    name_en: m.name_en,
    category: m.category,              // auto / audit / user-test
    description: m.description,
    description_en: m.description_en,
    measurement_method: m.measurement_method,
    // FIX-i18n-01：英文字段随包下发（additive；界面按 locale 取词，缺省回退中文）
    measurement_method_en: m.measurement_method_en,
    data_source: m.data_source || [],
    thresholds: m.thresholds || {},    // { minimum, good, excellent }
    thresholds_en: m.thresholds_en || {},  // { minimum, good, excellent }（英文版）
    unit: m.unit,
    applicable_domains: m.applicable_domains || [],
    limitations: m.limitations,
    evidence_grade: m.evidence_grade
  }));
}

// ---------- 4. 标准卡精简索引（wiki 跳转用） ----------
const standardsIndex = standards.map(s => withI18n('standards', s.id, {
  id: s.id,
  org: s.org,
  code: s.code,
  title: s.title,
  edition: s.edition,
  url: s.url,
  scope: s.scope || [],
  status: s.status
}));

// ---------- 5. 因素：注册表薄字段 + 卡片厚字段合并（N+1-①） ----------
// 注册表是 id/name/dimension/type/response/status/slug 的权威源；
// 卡片（生成视图）提供 evidence/weights/refs/guides/metrics/rules 等厚字段。
const cardByFactor = {};
for (const fname of readdirSync(join(VAULT, '01_Factors')).filter(x => x.endsWith('.md'))) {
  const fm = readFrontMatter(join(VAULT, '01_Factors', fname));
  if (fm?.id) cardByFactor[fm.id] = fm;
}
// id 集合必须一致——不一致说明生成链路漂移，构建期立即报错而非静默缺字段
const regIds = new Set(factors.map(f => f.id));
const cardIds = new Set(Object.keys(cardByFactor));
const regOnly = [...regIds].filter(id => !cardIds.has(id));
const cardOnly = [...cardIds].filter(id => !regIds.has(id));
if (regOnly.length || cardOnly.length) {
  throw new Error(`因素注册表与卡片 id 集不一致: registry-only=[${regOnly}] card-only=[${cardOnly}]`);
}
const factorsIndex = factors.map(f => withI18n('factors', f.id, {
  ...(cardByFactor[f.id] || {}),
  ...f,   // 注册表薄字段最后覆盖，保持权威
}));

// ---------- 6. 指南全量 + 案例摘要（N+1-①：卡片内容入包，界面可见） ----------
const guides = readdirSync(join(VAULT, '04_Guides'))
  .filter(x => x.endsWith('.md'))
  .sort()
  .map(fname => readFrontMatter(join(VAULT, '04_Guides', fname)))
  .filter(fm => fm?.id)
  .map(fm => withI18n('guides', fm.id, {
    id: fm.id,
    factor_id: fm.factor_id,
    name: fm.name,
    name_en: fm.name_en,
    patterns: fm.patterns || [],
    anti_patterns: fm.anti_patterns || [],
  }));

const cases = readdirSync(join(VAULT, '05_Cases'))
  .filter(x => x.endsWith('.md'))
  .sort()
  .map(fname => readFrontMatter(join(VAULT, '05_Cases', fname)))
  .filter(fm => fm?.id)
  .map(fm => withI18n('cases', fm.id, {
    id: fm.id,
    title: fm.title,
    title_en: fm.title_en,
    domain: fm.domain,
    type: fm.type,
    summary: fm.summary,
    factor_coverage: fm.factor_coverage || [],
    outcome: fm.outcome,
    verified: fm.verified ?? false,
  }));

// ---------- 6b. i18n 覆盖层门禁 ----------
// 写错 id / 写错类别会让译文静默不生效，故构建期直接报错（幂等：无覆盖层时零开销）
const kindIds = {
  metrics: new Set(metrics.map(m => m.id)),
  factors: new Set(factors.map(f => f.id)),
  facets: new Set(facets.map(fc => fc.id)),
  guides: new Set(guides.map(g => g.id)),
  cases: new Set(cases.map(c => c.id)),
  standards: new Set(standards.map(s => s.id)),
};
const overlayErrs = [];
for (const [lang, doc] of Object.entries(overlays)) {
  for (const [kind, entries] of Object.entries(doc)) {
    if (kind === 'locale' || kind === 'glossary') continue;   // 元数据/术语表，不挂实体
    const known = kindIds[kind];
    if (!known) { overlayErrs.push(`${lang}: 未知实体类别 '${kind}'`); continue; }
    for (const id of Object.keys(entries || {})) {
      if (!known.has(id)) overlayErrs.push(`${lang}.${kind}: 未知 id '${id}'`);
    }
  }
}
if (overlayErrs.length) throw new Error(`i18n 覆盖层校验失败:\n  ${overlayErrs.join('\n  ')}`);

// ---------- 7. 组装数据包 ----------
const pack = {
  version: '1.1',             // N+1-①：因素含卡片厚字段 + guides/cases 全量（additive-only）
  generatedAt: new Date().toISOString(),
  factors: factorsIndex,
  metricsByFactor,
  rules: actRules,              // L1 即时激活（ACT 9 条）——保持既有消费方兼容
  l2Rules,                      // N+2-②：L2 关系规则（DEP 7 / MOD 7 / CNF 7 / CMP 4）
  standards: standardsIndex,
  descriptor,                   // N+1-②：描述器结构（表单渲染数据源），标签仍走 i18n
  facets: facets.map(fc => withI18n('facets', fc.id, { ...fc })),  // N+2-①：facet 全量（含 applies_when，L3 评分接入用）
  guides,                       // N+1-①：64 张指南卡（patterns/anti_patterns 全量）
  cases,                        // N+1-①：8 张案例卡（摘要级）
  meta: {
    factorsCount: factorsIndex.length,
    metricsCount: metrics.length,
    actRulesCount: actRules.length,
    l2RulesCount: l2Rules.length,
    standardsCount: standardsIndex.length,
    descriptorQuestions: descriptor.stages.reduce((n, s) => n + (s.questions?.length || 0), 0),
    facetsCount: facets.length,
    guidesCount: guides.length,
    casesCount: cases.length,
    evidenceDistribution: factorsIndex.reduce((acc, f) => {
      if (f.evidence) acc[f.evidence] = (acc[f.evidence] || 0) + 1;
      return acc;
    }, {})
  }
};

// ---------- 8. 内容 hash + 写入 ----------
const json = JSON.stringify(pack, null, 2);
const hash = createHash('sha256').update(json).digest('hex').slice(0, 12);
const filename = `data-pack-${hash}.json`;
const filepath = join(OUT_DIR, filename);
writeFileSync(filepath, json, 'utf8');
console.log(`✅ 数据包已生成: ${filename}`);
console.log(`   因素 ${pack.meta.factorsCount} | 指标 ${pack.meta.metricsCount} | ACT ${pack.meta.actRulesCount} | 标准 ${pack.meta.standardsCount} | 指南 ${pack.meta.guidesCount} | 案例 ${pack.meta.casesCount}`);
console.log(`   证据分布: ${JSON.stringify(pack.meta.evidenceDistribution)}`);
console.log(`   产物路径: ${filepath}`);

// ---------- 9. 同时写 latest 指针（SPA 启动时先拉 latest，比对 hash） ----------
writeFileSync(join(OUT_DIR, 'data-pack-latest.json'), json, 'utf8');
console.log(`   latest 指针已更新: data-pack-latest.json`);

