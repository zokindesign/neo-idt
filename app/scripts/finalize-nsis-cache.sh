#!/usr/bin/env bash
# finalize-nsis-cache.sh —— 手动补齐 Tauri NSIS 工具链缓存（绕开国内 GitHub 直连问题）
# 依据：tauri-bundler v2.12.4 源码 crates/tauri-bundler/src/bundle/windows/nsis/mod.rs
#   1. extract_zip(nsis-3.13.zip) → %LOCALAPPDATA%\tauri\ → rename nsis-3.13 → NSIS
#   2. 下载 nsis_tauri_utils.dll v0.5.3 → NSIS/Plugins/x86-unicode/additional/
#   3. 之后构建器校验 13 个必需文件 + 2 个 SHA1 → 全过即跳过下载直接打包
# 用法：bash app/scripts/finalize-nsis-cache.sh   （缓存就绪后直接跑 npm run desktop）
set -euo pipefail

PROXY="${HTTPS_PROXY:-http://127.0.0.1:7897}"
TAURI_DIR="$LOCALAPPDATA/tauri"
NSIS_DIR="$TAURI_DIR/NSIS"
ZIP="$TAURI_DIR/nsis-3.13.zip"
ZIP_SHA1_EXPECTED="DB14F8AF2EA346B786C6AE19343F61AAF5E09B8E"
DLL_SHA1_EXPECTED="75197FEE3C6A814FE035788D1C34EAD39349B860"

mkdir -p "$TAURI_DIR"

# 1. NSIS 基础包（已有则校验，缺则经代理下载）
if [ ! -f "$ZIP" ]; then
  echo "下载 nsis-3.13.zip（经代理 $PROXY）..."
  curl -sL -x "$PROXY" --max-time 240 -o "$ZIP" \
    "https://github.com/tauri-apps/binary-releases/releases/download/nsis-3.13/nsis-3.13.zip"
fi
GOT=$(sha1sum "$ZIP" | awk '{print toupper($1)}')
[ "$GOT" = "$ZIP_SHA1_EXPECTED" ] || { echo "✗ nsis-3.13.zip SHA1 不符：$GOT（重删后重跑）"; exit 1; }
echo "✓ nsis-3.13.zip SHA1 匹配"

# 2. 解压 + 重命名为 NSIS（构建器约定）
if [ ! -d "$NSIS_DIR" ]; then
  unzip -q "$ZIP" -d "$TAURI_DIR"
  mv "$TAURI_DIR/nsis-3.13" "$NSIS_DIR"
  echo "✓ NSIS 解压就位"
else
  echo "· NSIS 目录已存在，跳过解压"
fi

# 3. nsis_tauri_utils.dll v0.5.3
DLL="$NSIS_DIR/Plugins/x86-unicode/additional/nsis_tauri_utils.dll"
if [ ! -f "$DLL" ]; then
  mkdir -p "$(dirname "$DLL")"
  curl -sL -x "$PROXY" --max-time 120 -o "$DLL" \
    "https://github.com/tauri-apps/nsis-tauri-utils/releases/download/nsis_tauri_utils-v0.5.3/nsis_tauri_utils.dll"
fi
GOT=$(sha1sum "$DLL" | awk '{print toupper($1)}')
[ "$GOT" = "$DLL_SHA1_EXPECTED" ] || { echo "✗ nsis_tauri_utils.dll SHA1 不符：$GOT"; exit 1; }
echo "✓ nsis_tauri_utils.dll SHA1 匹配"

# 4. 必需文件自检（与构建器 NSIS_REQUIRED_FILES 一致）
MISSING=0
for f in makensis.exe Bin/makensis.exe Stubs/lzma-x86-unicode Stubs/lzma_solid-x86-unicode \
         "Plugins/x86-unicode/additional/nsis_tauri_utils.dll" Include/MUI2.nsh \
         Include/FileFunc.nsh Include/x64.nsh Include/nsDialogs.nsh Include/WinMessages.nsh \
         Include/Win/COM.nsh Include/Win/Propkey.nsh Include/Win/RestartManager.nsh; do
  [ -f "$NSIS_DIR/$f" ] || { echo "✗ 缺 $f"; MISSING=1; }
done
[ "$MISSING" = "0" ] && echo "✅ NSIS 缓存完整——下一步：cd app && npm run desktop" || exit 1
