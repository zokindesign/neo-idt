# 部署手册草案 v0.1：单 VPS Docker Compose + GitHub Pages 双轨

**研究编号**：INCL-DEPLOY-001
**版本**：v0.1（草案——MVP 期实际走 Pages 轨；VPS 轨在 v2 引入 Supabase 后启用）
**日期**：2026-10-12
**依据**：早期规划、架构文档 v1.0 §五

---

## 轨道 A：MVP 静态托管（GitHub Pages，零成本）

MVP 无后端（ADR-002），SPA + wiki 均为纯静态产物。

### A.1 产物与路径

| 产物 | 路径 | 来源 |
|------|------|------|
| 应用 SPA | `/` | `app/` 构建产物 dist |
| 知识库 wiki | `/docs/` | `npx quartz build` → public |
| 数据包 | `/data/data-pack-<hash>.json` | build-data.mjs 产物（SPA 拉取） |

### A.2 发布流程（一次配置，之后全自动）

```
git push tag v0.x.y
  → GitHub Actions:
     1. validate（python schema/validate.py，失败即中止）
     2. build-data（node app/scripts/build-data.mjs）
     3. build-app（npm ci && npm run build）
     4. build-wiki（npx quartz build）
     5. deploy-pages（合并产物 → Pages）
```

### A.3 新 VPS/新域名迁移

产物是纯静态文件：任何静态托管（Netlify/Vercel/Cloudflare Pages/国内 CDN）皆可承接，迁移 = 改 baseUrl 配置重发布。

---

## 轨道 B：VPS Docker Compose（v2+ 引入 Supabase 后）

### B.1 目标机器基线

- 2C4G VPS（早期规划 量级），Ubuntu 22.04+
- Docker Engine ≥24 + docker compose v2
- 域名 + HTTPS（Caddy 自动签发）

### B.2 编排草案（v2 定稿前仅作容量规划）

```yaml
# docker-compose.yml（草案骨架）
services:
  caddy:
    image: caddy:2
    ports: ["80:80", "443:443"]
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./dist:/srv/app           # SPA + /docs 静态产物
      - caddy_data:/data
  supabase:
    # 官方 self-host 或云版；v2 决策时按 ADR-006 再定
    # 含 postgres / auth / edge-functions
volumes:
  caddy_data:
```

### B.3 运维流程

| 操作 | 命令/步骤 |
|------|----------|
| 发布 | `git pull && docker compose build && docker compose up -d` |
| 备份 | `pg_dump` 每日 cron → 对象存储；vault = git 远端（知识资产零备份负担） |
| 升级回滚 | 镜像 tag 制；`docker compose down && git checkout <tag> && up -d` |
| 监控 | MVP：uptime 探针；v2：Supabase 日志 + caddy access log |

### B.3.1 升级检查清单（复现性验收）

- [ ] `python schema/validate.py` 全绿
- [ ] data-pack hash 变更已入产物
- [ ] SPA 冒烟：四阶段各走一步
- [ ] wiki 抽查 3 卡（新增/修改/双链跳转）
- [ ] 回滚演练一次/季度

---

## CNAME 与域名

wiki `baseUrl` 需与最终域名一致（PoC 用 localhost，正式发布前改配重跑）。

---

## 标签

#部署 #W6 #INCL-DEPLOY-001

