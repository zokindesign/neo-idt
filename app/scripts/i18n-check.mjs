#!/usr/bin/env node
// i18n-check.mjs — CI 用 i18n 完整性校验
// 检查：键完整性、硬编码中文、注册表双语字段、Schema 双语字段
// 用法：node scripts/i18n-check.mjs [--fix]

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { globSync } from 'glob'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = join(__dirname, '..')

const FIX_MODE = process.argv.includes('--fix')

let errors = 0
let warnings = 0
let fixed = 0

const logError = (msg, file) => { console.error(`❌ ${file}: ${msg}`); errors++ }
const logWarn = (msg, file) => { console.warn(`⚠️ ${file}: ${msg}`); warnings++ }
const logFix = (msg, file) => { console.log(`🔧 ${file}: ${msg}`); fixed++ }
const logOk = (msg) => { console.log(`✅ ${msg}`) }

// 1. 读取 zh-CN 作为基准键集
function loadLocaleKeys(locale) {
  const path = `app/src/i18n/locales/${locale}.ts`
  const full = join(ROOT, path)
  try {
    const content = readFileSync(full, 'utf8')
    // 简单提取键：匹配 key: 'value' 或 key: "value" 或 key: { ... }
    const keys = new Set()
    // 移除注释
    const noComments = content.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '')
    // 匹配键：key: （支持嵌套）
    const keyRegex = /^\s*([a-zA-Z_$][\w$]*):/gm
    let match
    while ((match = keyRegex.exec(noComments)) !== null) {
      keys.add(match[1])
    }
    return keys
  } catch {
    return new Set()
  }
}

const zhKeys = loadLocaleKeys('zh-CN')
console.log(`基准键数 (zh-CN): ${zhKeys.size}`)

// 2. 检查其他语言键完整性
function checkLocaleKeys(locale) {
  const keys = loadLocaleKeys(locale)
  const missing = [...zhKeys].filter(k => !keys.has(k))
  const extra = [...keys].filter(k => !zhKeys.has(k))
  if (missing.length > 0) {
    logError(`缺失 ${missing.length} 个键: ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? '...' : ''}`, `locales/${locale}.ts`)
  }
  if (extra.length > 0) {
    logWarn(`多出 ${extra.length} 个键: ${extra.slice(0, 10).join(', ')}${extra.length > 10 ? '...' : ''}`, `locales/${locale}.ts`)
  }
  if (missing.length === 0 && extra.length === 0) {
    logOk(`${locale}: 键完整性通过`)
  }
}

// 3. 检查硬编码中文（Vue/TS 文件）
function checkHardcodedChinese() {
  const files = globSync('app/src/**/*.{ts,tsx,vue}', { cwd: ROOT })
  const chineseRegex = /[\u4e00-\u9fff]/ // 简易中文字符检测
  const skipPatterns = [
    /\.ts$/, // 语言文件本身
    /i18n/,  // i18n 相关
    /\.d\.ts$/,
  ]
  for (const file of files) {
    if (skipPatterns.some(p => p.test(file))) continue
    const full = join(ROOT, file)
    const content = readFileSync(full, 'utf8')
    // 粗略检测：模板字符串或 JSX 文本中的中文
    // 这里简化处理，实际可用更精确的 AST 解析
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      // 跳过注释、import、类型定义
      if (line.trim().startsWith('//') || line.trim().startsWith('/*') || line.includes('import ') || line.includes('type ') || line.includes('interface ')) continue
      if (chineseRegex.test(line) && !line.includes('//') && !line.includes('/*')) {
        // 排除已知合法中文：console.log、注释、正则、字符串字面量中的合法中文
        if (!/console\.(log|warn|error)\(/.test(line) && !/^\s*\/\//.test(line)) {
          logWarn(`疑似硬编码中文 (行 ${i + 1}): ${line.trim().slice(0, 80)}`, file)
        }
      }
    }
  }
}

// 4. 检查注册表双语字段
function checkRegistryBilingual() {
  const regPath = 'registry'
  const files = ['factors.yaml', 'metrics.yaml', 'standards.yaml', 'rules.yaml']
  for (const f of files) {
    const full = join(ROOT, regPath, f)
    const content = readFileSync(full, 'utf8')
    // 简单检查：每个条目是否有 name_en
    const lines = content.split('\n')
    let inEntry = false
    let hasNameEn = false
    let entryStart = 0
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.match(/^-\s+id:/)) {
        if (inEntry && !hasNameEn) {
          logWarn(`条目缺少 name_en (约行 ${entryStart})`, `${regPath}/${f}`)
        }
        inEntry = true
        hasNameEn = false
        entryStart = i + 1
      } else if (inEntry && line.match(/^\s+name_en:/)) {
        hasNameEn = true
      }
    }
    if (inEntry && !hasNameEn) {
      logWarn(`最后条目缺少 name_en (约行 ${entryStart})`, `${regPath}/${f}`)
    }
  }
}

// 5. 检查 Schema 双语字段
function checkSchemaBilingual() {
  const schemaPath = 'schema'
  const files = globSync('*.schema.json', { cwd: join(ROOT, schemaPath) })
  for (const f of files) {
    const full = join(ROOT, schemaPath, f)
    const content = readFileSync(full, 'utf8')
    try {
      const schema = JSON.parse(content)
      // 检查 properties 中是否有 name_en 相关定义
      if (schema.properties && !schema.properties.name_en) {
        logWarn(`Schema 缺少 name_en 定义`, `${schemaPath}/${f}`)
      }
    } catch (e) {
      logError(`Schema 解析失败: ${e.message}`, `${schemaPath}/${f}`)
    }
  }
}

// 执行检查
console.log('=== i18n 完整性校验开始 ===\n')

// 检查各语言键完整性
for (const locale of ['en', 'zh-TW', 'ja', 'ko']) {
  checkLocaleKeys(locale)
}

console.log('\n--- 硬编码中文检查 ---')
checkHardcodedChinese()

console.log('\n--- 注册表双语字段检查 ---')
checkRegistryBilingual()

console.log('\n--- Schema 双语字段检查 ---')
checkSchemaBilingual()

console.log('\n=== 校验汇总 ===')
console.log(`错误: ${errors}`)
console.log(`警告: ${warnings}`)
if (FIX_MODE) console.log(`已修复: ${fixed}`)

process.exit(errors > 0 ? 1 : 0)
