#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""应用图标生成器（纯 stdlib：zlib + struct 手写 PNG，无 PIL 依赖）
设计：靛蓝渐变圆角方 + 白色同心圆环 + 中心点（聚焦/包容隐喻）
产物：1024x1024 RGBA PNG → src-tauri/icons/app-icon.png
"""
import zlib, struct, math

W = H = 1024
OUT = "app/src-tauri/icons/app-icon.png"

# 圆角半径与颜色（静态分析逐像素绘制）
R = 180  # 圆角
CX = CY = W / 2

# 渐变：左上 #4F46E5 (indigo-600) → 右下 #7C3AED (violet-600)
def bg_color(x: float, y: float):
    t = (x + y) / (2 * (W - 1))
    r = int(0x4F + (0x7C - 0x4F) * t)
    g = int(0x46 + (0x3A - 0x46) * t)
    b = int(0xE5 + (0xED - 0xE5) * t)
    return r, g, b

# 圆角方内测试（signed distance，带 2px 抗锯齿带）
def inside_rounded_rect(x, y):
    dx = max(abs(x - W / 2) - (W / 2 - R), 0)
    dy = max(abs(y - H / 2) - (H / 2 - R), 0)
    d = math.hypot(dx, dy)
    return d - R  # <0 在内，>0 在外

# 白色图形：外环（半径 300±22）+ 中心实心圆（半径 78）
def glyph_alpha(x, y):
    d = math.hypot(x - CX, y - CY)
    # 外环：284~322 像素区间，边缘 2px 抗锯齿
    if 286 <= d <= 318:
        edge = min(d - 286, 318 - d)
        return max(0, min(255, int(edge * 255 / 2 + 128)))
    if d <= 76:
        return max(0, min(255, int((76 - d) * 255 / 2 + 128)))
    return 0

rows = []
for y in range(H):
    row = bytearray([0])  # filter type 0
    for x in range(W):
        br, bg, bb = bg_color(x, y)
        rr = inside_rounded_rect(x + 0.5, y + 0.5)
        if rr < -1:
            shape_a = 255
        elif rr < 1:
            shape_a = int((1 - rr) * 255 / 2)
        else:
            shape_a = 0
        g = glyph_alpha(x, y)
        # 图形白 × 图形 alpha 混合背景
        r = (255 * g + br * (255 - g)) // 255
        gc = (255 * g + bg * (255 - g)) // 255
        b = (255 * g + bb * (255 - g)) // 255
        row += struct.pack("4B", r, gc, b, shape_a)
        if shape_a == 0:
            rows_set = True
    rows.append(bytes(row))

def chunk(tag, data):
    c = struct.pack(">I", len(data)) + tag + data
    c += struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
    return c

png = b"\x89PNG\r\n\x1a\n"
png += chunk(b"IHDR", struct.pack(">IIBBBBB", W, H, 8, 6, 0, 0, 0))
raw = b"".join(rows)
png += chunk(b"IDAT", zlib.compress(raw, 9))
png += chunk(b"IEND", b"")

import os
os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "wb") as f:
    f.write(png)
print(f"icon written: {OUT} ({len(png)} bytes, {W}x{H})")
