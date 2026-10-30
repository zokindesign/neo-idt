#!/usr/bin/env node
// make-latest-json.mjs —— 生成 Tauri updater 端点清单（latest.json）
// 用法：node scripts/make-latest-json.mjs --artifact <nsis安装包路径> --sig <sig文件路径> --url <下载URL前缀> --notes "更新说明"
// 输出：latest.json（放到 tauri.conf.json plugins.updater.endpoints 指向的 URL）
// 端点格式依据：https://v2.tauri.app/plugin/updater/ （2026-10 核验）
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

const conf = JSON.parse(readFileSync(new URL('../src-tauri/tauri.conf.json', import.meta.url), 'utf8'));
const artifact = opt('artifact') || 'src-tauri/target/release/bundle/nsis/';
const sigPath = opt('sig');
const urlPrefix = (opt('url') || 'https://releases.inclusivedesign.org/desktop/').replace(/\/$/, '');
const notes = opt('notes') || '';

const sig = sigPath ? readFileSync(sigPath, 'utf8').trim()
  : (() => { console.error('✗ 需要 --sig（构建产物 .sig 文件，createUpdaterArtifacts 生成）'); process.exit(1); })();

const artifactUrl = `${urlPrefix}/${basename(artifact)}`;

const manifest = {
  version: conf.version,
  notes,
  pub_date: new Date().toISOString(),
  platforms: {
    'windows-x86_64': {
      signature: sig,
      url: artifactUrl,
    },
  },
};

writeFileSync('latest.json', JSON.stringify(manifest, null, 2));
console.log(`✅ latest.json 已生成：v${conf.version}`);
console.log(`   签名长度: ${sig.length} 字符`);
console.log(`   安装包 URL: ${artifactUrl}`);
console.log(`   → 上传 ${basename(artifact)} 与 latest.json 至 ${urlPrefix}`);
