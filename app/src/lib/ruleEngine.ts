// lib/ruleEngine.ts — 前端 ACT 规则引擎（数据驱动，安全子集解释器）
// 条件表达式支持：== != > < >= <= && || () + - * / 以及
//   contains（数组含值，ACT-004: environment.contexts contains 'public-space'）
//   in（值在数组字面量内，descriptor applies_when: domain in ['digital','service']）
// 字段访问 task.xxx device.xxx interaction.xxx environment.xxx
// 无 eval，手写递归下降解析器（仅 ACT 规则与描述器 applies_when 需要的子集）
//
// 注意：算术曾缺失——ACT-008 的 `task.deadline < task.estimated_duration * 1.2`
// 在旧解析器里 `* 1.2` 被静默忽略（语义漂移），N+1-③ 起补齐乘除。

export interface Profile {
  domain: string
  taskType?: string
  taskCategory?: string
  interaction?: { mode?: string }
  device?: { type?: string }
  audience?: string[]
  constraints?: Record<string, any>
  [key: string]: any
}

export interface ActivatedFactor {
  factorId: string
  ruleId: string
  ruleDescription: string
}

function tokenize(expr: string): string[] {
  // 引号感知：先掩蔽字符串字面量再切分——否则值内连字符（'public-space'、'data-entry'）
  // 会被 `-` 切分规则撕碎，导致比较恒 false（N+1-③ 实测踩坑）
  const lits: string[] = []
  const masked = expr.replace(/'[^']*'|"[^"]*"/g, (m) => {
    lits.push(m)
    return `\u0000${lits.length - 1}\u0000`
  })
  const ops = masked
    .replace(/==|!=|>=|<=|>|<|&&|\|\||\(|\)|\[|\]|,|\*|\/|\+|-/g, ' $& ')
    .split(/\s+/)
    .filter(t => t.length > 0)
  return ops.map(t => {
    const m = t.match(/^\u0000(\d+)\u0000$/)
    return m ? lits[Number(m[1])] : t
  })
}

type Token = string | number | boolean | undefined | Token[]

function evaluateExpression(expr: string, profile: Profile): boolean {
  const tokens = tokenize(expr)
  let pos = 0

  function peek(): string { return tokens[pos] as any }
  function consume(): string { return tokens[pos++] as any }

  function parseOr(): boolean {
    let left = parseAnd()
    while (peek() === '||') {
      consume()
      const right = parseAnd()
      left = left || right
    }
    return left
  }

  function parseAnd(): boolean {
    let left = parseComparison()
    while (peek() === '&&') {
      consume()
      const right = parseComparison()
      left = left && right
    }
    return left
  }

  function parseComparison(): boolean {
    const left = parseAdditive()
    const op = peek()
    if (['==', '!=', '>', '<', '>=', '<=', 'contains', 'in'].includes(op)) {
      consume()
      const right = parseAdditive()
      const l = left as any, r = right as any
      switch (op) {
        case '==': return l == r
        case '!=': return l != r
        case '>': return l > r
        case '<': return l < r
        case '>=': return l >= r
        case '<=': return l <= r
        case 'contains': return Array.isArray(l) ? l.includes(r) : false
        case 'in': return Array.isArray(r) ? r.includes(l) : false
      }
    }
    return Boolean(left)
  }

  // 加减/乘除：规则条件需要算术（ACT-008 的 * 1.2）
  function parseAdditive(): Token {
    let left = parseMultiplicative()
    while (peek() === '+' || peek() === '-') {
      const op = consume()
      const right = parseMultiplicative()
      if (op === '+') left = (left as any) + (right as any)
      else left = (left as any) - (right as any)
    }
    return left
  }

  function parseMultiplicative(): Token {
    let left = parsePrimary()
    while (peek() === '*' || peek() === '/') {
      const op = consume()
      const right = parsePrimary()
      if (op === '*') left = (left as any) * (right as any)
      else left = (left as any) / (right as any)
    }
    return left
  }

  function parseScalar(): Token {
    const tok = consume()
    if ((tok.startsWith('"') && tok.endsWith('"')) || (tok.startsWith("'") && tok.endsWith("'"))) {
      return tok.slice(1, -1)
    }
    if (!isNaN(Number(tok))) return Number(tok)
    if (tok === 'true') return true
    if (tok === 'false') return false
    return undefined
  }

  function parsePrimary(): Token {
    const tok = consume()
    if (tok === '(') {
      const val: Token = parseOr() as any
      if (peek() === ')') consume()
      return val
    }
    // 数组字面量（in 算子的右侧）：['a', 'b']
    if (tok === '[') {
      const arr: Token[] = []
      while (peek() !== ']' && pos < tokens.length) {
        if (peek() === ',') { consume(); continue }
        arr.push(parseScalar())
      }
      if (peek() === ']') consume()
      return arr
    }
    // 字符串/数字/布尔字面量
    if ((tok.startsWith('"') && tok.endsWith('"')) || (tok.startsWith("'") && tok.endsWith("'"))) {
      return tok.slice(1, -1)
    }
    if (!isNaN(Number(tok))) return Number(tok)
    if (tok === 'true') return true
    if (tok === 'false') return false
    // 一元负号（掩蔽后裸 '-' 只可能是负号）
    if (tok === '-') {
      const v = Number(consume())
      return isNaN(v) ? undefined : -v
    }
    // 字段访问：task.category, device.type, interaction.mode 等
    return getField(profile, tok)
  }

  function getField(obj: any, path: string): any {
    const parts = path.split('.')
    let cur = obj
    for (const p of parts) {
      if (cur === null || cur === undefined) return undefined
      cur = cur[p]
    }
    return cur
  }

  return parseOr()
}

// 供描述器 applies_when 复用同一求值器（条件语言单一来源）
export { evaluateExpression }

// ---------- L2 关系闭包（N+2-②：DEP 依赖 / MOD 调节 / CNF 冲突 / CMP 补偿） ----------
// 种子集 = L1 激活因素 ∪ 用户勾选因素；DEP 需「锚因素在种子集 && profile 条件成立」，
// MOD/CMP 锚在种子集即传播，CNF 只在双方同时在种子集时记录冲突（不增删因素）。

export interface L2Addition {
  factorId: string
  viaRule: string
  rel: string          // depend | moderate | compensate
  from: string         // 锚因素 ID
  direction?: string   // moderate: amplify | dampen
}

export interface L2Conflict {
  ruleId: string
  description: string
  factorA: string
  factorB: string
  priorityRule?: string
}

export function computeL2Closure(
  l2Rules: any[],
  profile: Profile,
  seedIds: string[]
): { added: L2Addition[]; conflicts: L2Conflict[] } {
  const inSet = new Set(seedIds)
  const added: L2Addition[] = []
  const conflicts: L2Conflict[] = []
  let changed = true
  let guard = 0
  while (changed && guard++ < 10) {   // 收敛保护：25 条规则有限传播
    changed = false
    for (const r of l2Rules) {
      try {
        if (r.type === 'conflict') {
          const a = r.pair?.[0], b = r.pair?.[1]
          if (a && b && inSet.has(a) && inSet.has(b) && !conflicts.some(c => c.ruleId === r.id)) {
            conflicts.push({
              ruleId: r.id, description: r.description,
              factorA: a, factorB: b, priorityRule: r.priority_rule
            })
          }
          continue
        }
        if (!r.anchor || !inSet.has(r.anchor)) continue
        if (r.condition && r.condition !== 'always' && !evaluateExpression(r.condition, profile)) continue
        for (const t of r.targets || []) {
          if (t && !inSet.has(t)) {
            inSet.add(t)
            added.push({
              factorId: t, viaRule: r.id,
              rel: r.type === 'depend' ? 'depend' : r.type === 'moderate' ? 'moderate' : 'compensate',
              from: r.anchor, direction: r.direction
            })
            changed = true
          }
        }
      } catch (e) {
        console.warn(`L2 规则 ${r.id} 求值失败:`, e)
      }
    }
  }
  return { added, conflicts }
}

// ---------- L3 全覆盖评分（N+2-③，决议 2/3：排序取代过滤） ----------
// 分数 = 结构分（权重 0.7 + 证据 0.3）+ 规则加成（L1 +0.35 / L2 +0.2 / facet 命中 +0.15）
// 置信分级（L4 诚实边界）：L1=高（可解释到规则与字段）；L2/facet=中；仅权重+证据=低（推断，待人工判定）
// 受众重合组件：因素侧无受众数据，本阶段不参与打分（不发明映射）

export interface L3Weights { coverage: number; frequency: number; effort: number }

export interface L3Row {
  factorId: string
  score: number            // 0..1
  pct: number              // 0..100
  provenance: 'l1' | 'l2' | 'facet' | 'inferred'
  confidence: 'high' | 'medium' | 'low'
  l1Rules: string[]        // 命中的 ACT 规则
  l2Via: { rule: string; rel: string; from: string; direction?: string }[]
  facetHits: string[]      // 命中的 facet ID
  weights: { coverage: string; frequency: string; effort: string }
  evidence: string
}

const W_MAP: Record<string, number> = { high: 1, medium: 0.5, low: 0 }
const E_MAP: Record<string, number> = { A: 1, B: 0.75, C: 0.5, D: 0.25 }

export function computeL3Scores(input: {
  factors: any[]
  l1Activated: ActivatedFactor[]
  l2Added: L2Addition[]
  facets: any[]
  profile: Profile
  weights: L3Weights
}): L3Row[] {
  const { factors, l1Activated, l2Added, facets, profile, weights } = input
  const l1Map: Record<string, string[]> = {}
  for (const a of l1Activated) (l1Map[a.factorId] ||= []).push(a.ruleId)
  const l2Map: Record<string, L2Addition[]> = {}
  for (const a of l2Added) (l2Map[a.factorId] ||= []).push(a)
  const facetsByFactor: Record<string, any[]> = {}
  for (const fc of facets || []) (facetsByFactor[fc.factor_id] ||= []).push(fc)

  const wSum = (weights.coverage + weights.frequency + weights.effort) || 1

  const rows: L3Row[] = factors.map(f => {
    const w = f.weights || {}
    const weightScore = (
      (weights.coverage || 0) * (W_MAP[w.coverage] ?? 0.5) +
      (weights.frequency || 0) * (W_MAP[w.frequency] ?? 0.5) +
      (weights.effort || 0) * (W_MAP[w.effort] ?? 0.5)
    ) / wSum
    const evidenceScore = E_MAP[f.evidence] ?? 0.5
    let score = weightScore * 0.7 + evidenceScore * 0.3

    const l1Rules = l1Map[f.id] || []
    const l2Via = l2Map[f.id] || []
    const facetHits: string[] = []
    for (const fc of facetsByFactor[f.id] || []) {
      if (fc.applies_when) {
        try {
          if (evaluateExpression(fc.applies_when, profile)) facetHits.push(fc.id)
        } catch { /* facet 条件求值失败视为未命中 */ }
      }
    }

    let provenance: L3Row['provenance'] = 'inferred'
    let confidence: L3Row['confidence'] = 'low'
    if (l1Rules.length) {
      score = Math.min(1, score + 0.35)
      provenance = 'l1'; confidence = 'high'
    } else if (l2Via.length) {
      score = Math.min(1, score + 0.2)
      provenance = 'l2'; confidence = 'medium'
    }
    if (facetHits.length) {
      score = Math.min(1, score + 0.15)
      if (provenance === 'inferred') { provenance = 'facet'; confidence = 'medium' }
    }

    return {
      factorId: f.id,
      score,
      pct: Math.round(score * 100),
      provenance,
      confidence,
      l1Rules,
      l2Via: l2Via.map(a => ({ rule: a.viaRule, rel: a.rel, from: a.from, direction: a.direction })),
      facetHits,
      weights: { coverage: w.coverage || 'medium', frequency: w.frequency || 'medium', effort: w.effort || 'medium' },
      evidence: f.evidence || 'C'
    }
  })

  // 排序：分数降序，同分按 ID 保证确定性
  rows.sort((a, b) => b.score - a.score || (a.factorId < b.factorId ? -1 : 1))
  return rows
}

export function evaluateActRules(rules: any[], profile: Profile): ActivatedFactor[] {
  const activated: ActivatedFactor[] = []
  for (const rule of rules) {
    try {
      if (evaluateExpression(rule.condition, profile)) {
        for (const fid of rule.activates) {
          activated.push({
            factorId: fid,
            ruleId: rule.id,
            ruleDescription: rule.description
          })
        }
      }
    } catch (e) {
      console.warn(`规则 ${rule.id} 求值失败:`, e)
    }
  }
  // 去重
  const seen = new Set()
  return activated.filter(a => {
    const k = a.factorId
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}