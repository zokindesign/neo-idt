#!/usr/bin/env node
// build-data.mjs — 构建期：registry/*.yaml → data-pack-<hash>.json（ADR-005）
// 运行：node app/scripts/build-data.mjs
// 产物：app/public/data/data-pack-<hash>.json（SPA 版本化拉取）
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'js-yaml';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..');              // repo root
const REG = join(ROOT, 'registry');
const OUT_DIR = join(__dirname, '..', 'public', 'data');
mkdirSync(OUT_DIR, { recursive: true });

function readYaml(name) {
  return load(readFileSync(join(REG, name + '.yaml'), 'utf8'));
}

// ---------- 1. 解析四注册表 ----------
const factors = readYaml('factors');      // List[61]
const metrics = readYaml('metrics');      // List[65]
const rules = readYaml('rules');          // List[34]
const standards = readYaml('standards');  // List[25]

// ---------- 2. 规则引擎用子集（ACT 9 条 + 条件表达式安全化） ----------
const actRules = rules
  .filter(r => r.type === 'activate')
  .map(r => ({
    id: r.id,
    condition: r.condition,           // 如 "task.category == 'online-communication'"
    activates: r.activates || [],     // ["HOW-F-001"]
    description: r.description
  }));

// ---------- 3. 指标三层 + 阈值结构（前端只读） ----------
const metricsByFactor = {};
for (const m of metrics) {
  const key = m.factor_id;
  if (!metricsByFactor[key]) metricsByFactor[key] = [];
  metricsByFactor[key].push({
    id: m.id,
    name: m.name,
    name_en: m.name_en,
    category: m.category,              // auto / audit / user-test
    description: m.description,
    measurement_method: m.measurement_method,
    data_source: m.data_source || [],
    thresholds: m.thresholds || {},    // { minimum, good, excellent }
    unit: m.unit,
    applicable_domains: m.applicable_domains || [],
    limitations: m.limitations,
    evidence_grade: m.evidence_grade
  });
}

// ---------- 4. 标准卡精简索引（wiki 跳转用） ----------
const standardsIndex = standards.map(s => ({
  id: s.id,
  org: s.org,
  code: s.code,
  title: s.title,
  edition: s.edition,
  url: s.url,
  scope: s.scope || [],
  status: s.status
}));

// ---------- 5. 因素卡精简（推荐器/浏览器用） ----------
const factorsIndex = factors.map(f => ({
  id: f.id,
  name: f.name,
  name_en: f.name_en,
  slug: f.slug,
  dimension: f.dimension,
  type: f.type,
  response: f.response,
  status: f.status
}));

// ---------- 6. 指南/案例摘要（从 vault 读取 front-matter，仅模式/反模式名 + id） ----------
const guidesSummary = [];   // 暂留空，MVP 直接外链 wiki；后续 generate_cards.py 可生成
const casesSummary = [];

// ---------- 7. 组装数据包 ----------
const pack = {
  version: '1.0',
  generatedAt: new Date().toISOString(),
  factors: factorsIndex,
  metricsByFactor,
  rules: actRules,              // 前端只需 ACT 即时规则
  standards: standardsIndex,
  guidesSummary,
  casesSummary,
  meta: {
    factorsCount: factorsIndex.length,
    metricsCount: metrics.length,
    actRulesCount: actRules.length,
    standardsCount: standardsIndex.length
  }
};

// ---------- 8. 内容 hash + 写入 ----------
const json = JSON.stringify(pack, null, 2);
const hash = createHash('sha256').update(json).digest('hex').slice(0, 12);
const filename = `data-pack-${hash}.json`;
const filepath = join(OUT_DIR, filename);
writeFileSync(filepath, json, 'utf8');
console.log(`✅ 数据包已生成: ${filename}`);
console.log(`   因素 ${pack.meta.factorsCount} | 指标 ${pack.meta.metricsCount} | ACT ${pack.meta.actRulesCount} | 标准 ${pack.meta.standardsCount}`);
console.log(`   产物路径: ${filepath}`);

// ---------- 9. 同时写 latest 指针（SPA 启动时先拉 latest，比对 hash） ----------
writeFileSync(join(OUT_DIR, 'data-pack-latest.json'), json, 'utf8');
console.log(`   latest 指针已更新: data-pack-latest.json`);

