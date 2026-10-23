#!/usr/bin/env node
// build-wp.mjs —— 构建 SPA 并组装 WordPress 插件资产
// 产物：wp-plugin/inclusive-design-tool/assets/app/（incl-app.js / incl-app.css / data/）
// 运行：npm run build:wp（先跑 vue-tsc 类型检查，再 vite build，再复制）
import { execSync } from 'node:child_process';
import { cpSync, rmSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = join(__dirname, '..');
const DIST = join(APP, 'dist');
const TARGET = join(APP, '..', 'wp-plugin', 'inclusive-design-tool', 'assets', 'app');

function run(cmd, opts = {}) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: APP, shell: true, ...opts });
}

// 1. 类型检查 + 构建
run('npx vue-tsc -b');
run('npx vite build');
if (!existsSync(join(DIST, 'incl-app.js'))) {
  console.error('✗ dist/incl-app.js 未生成（rollup entryFileNames 配置失效？）');
  process.exit(1);
}

// 2. 清空目标并复制
rmSync(TARGET, { recursive: true, force: true });
mkdirSync(TARGET, { recursive: true });
cpSync(DIST, TARGET, { recursive: true });

// 3. 数据包（含 latest 指针）随插件分发
cpSync(join(APP, 'public', 'data'), join(TARGET, 'data'), { recursive: true });

// 4. 结果报告
const js = readdirSync(TARGET).join(', ');
console.log(`\n✅ WP 插件资产已生成 → ${TARGET}`);
console.log(`   ${js}`);
console.log(`   数据包: data/（${readdirSync(join(TARGET, 'data')).length} 个文件）`);
