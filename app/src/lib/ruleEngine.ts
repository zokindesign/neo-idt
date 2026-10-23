// lib/ruleEngine.ts — 前端 ACT 规则引擎（数据驱动，安全子集解释器）
// 条件表达式支持：== != > < >= <= && || () 以及字段访问 task.xxx device.xxx interaction.xxx
// 无 eval，手写递归下降解析器（极简，仅 ACT 9 条需要的子集）

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
  return expr
    .replace(/==|!=|>=|<=|>|<|&&|\|\||\(|\)/g, ' $& ')
    .split(/\s+/)
    .filter(t => t.length > 0)
}

type Token = string | number | boolean | undefined

function evaluateExpression(expr: string, profile: Profile): boolean {
  const tokens = tokenize(expr)
  let pos = 0

  function peek(): string { return tokens[pos] }
  function consume(): string { return tokens[pos++] }

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
    const left = parsePrimary()
    const op = peek()
    if (['==', '!=', '>', '<', '>=', '<='].includes(op)) {
      consume()
      const right = parsePrimary()
      const l = left as any, r = right as any
      switch (op) {
        case '==': return l == r
        case '!=': return l != r
        case '>': return l > r
        case '<': return l < r
        case '>=': return l >= r
        case '<=': return l <= r
      }
    }
    return Boolean(left)
  }

  function parsePrimary(): Token {
    const tok = consume()
    if (tok === '(') {
      const val = parseOr()
      if (peek() === ')') consume()
      return val
    }
    // 字符串字面量
    if ((tok.startsWith('"') && tok.endsWith('"')) || (tok.startsWith("'") && tok.endsWith("'"))) {
      return tok.slice(1, -1)
    }
    // 数字
    if (!isNaN(Number(tok))) return Number(tok)
    // 布尔
    if (tok === 'true') return true
    if (tok === 'false') return false
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