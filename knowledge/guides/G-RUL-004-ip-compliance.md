---
id: G-RUL-004
factor_id: RUL-004
name: "知识产权合规指南"
name_en: IP Compliance Guide
patterns:
  - name: "SBOM 全量管理"
    description: "软件物料清单（SBOM）按 SPDX 标准维护：全部依赖的许可证、版本、来源机器可读"
    domain: digital
    example: "CI 自动生成 SBOM，新依赖许可证扫描门禁"
    refs: [STD-SPDX]
  - name: "素材授权台账"
    description: "图片/字体/音频逐项登记授权来源与许可范围；『网上找的』不是授权"
    domain: universal
    example: "素材库每项附授权凭证（购买记录/授权书/许可证链接）"
  - name: "传染性隔离"
    description: "GPL 等传染性许可证组件的引入有独立评审流程：链接方式、分发边界、义务清单"
    domain: digital
    example: "新依赖含 GPL 系许可证触发法务评审工单"
  - name: "许可证声明规范"
    description: "全部开源组件按许可证要求保留版权声明与 LICENSE 文件；发布物附许可清单"
    domain: digital
    example: "发行包内完整第三方许可声明文件"
anti_patterns:
  - name: "无照依赖"
    description: "复制粘贴未标注许可的代码/使用无授权素材"
    consequence: "下架、索赔、企业尽调不过——一次侵权清零全部成本优势"
  - name: "许可即同意"
    description: "以为开源=随便用"
    consequence: "开源许可证是授权不是无条款——GPL 传染性、署名要求、商用限制各不相同，违反即侵权"
cases: []
cross_domain_mapping:
  digital:
    summary: "SBOM/SPDX、许可扫描、声明规范"
  industrial:
    summary: "专利检索、标准必要专利评估"
  architecture:
    summary: "设计版权、图纸授权"
  fashion:
    summary: "图案版权、面料专利筛查"
status: draft
version: '1.0'
---

# 知识产权合规指南 (IP Compliance Guide)

> 关联因素：[[RUL-004-ip-compliance|RUL-004 知识产权合规]] ｜ 指南 ID：`G-RUL-004`

## 设计模式（正模式）

### ✅ SBOM 全量管理

软件物料清单（SBOM）按 SPDX 标准维护：全部依赖的许可证、版本、来源机器可读

**示例**：CI 自动生成 SBOM，新依赖许可证扫描门禁

**标准依据**：`STD-SPDX`

### ✅ 素材授权台账

图片/字体/音频逐项登记授权来源与许可范围；『网上找的』不是授权

**示例**：素材库每项附授权凭证（购买记录/授权书/许可证链接）

### ✅ 传染性隔离

GPL 等传染性许可证组件的引入有独立评审流程：链接方式、分发边界、义务清单

**示例**：新依赖含 GPL 系许可证触发法务评审工单

### ✅ 许可证声明规范

全部开源组件按许可证要求保留版权声明与 LICENSE 文件；发布物附许可清单

**示例**：发行包内完整第三方许可声明文件

## 反模式（常见错误）

### ❌ 无照依赖

复制粘贴未标注许可的代码/使用无授权素材

**排斥后果**：下架、索赔、企业尽调不过——一次侵权清零全部成本优势

### ❌ 许可即同意

以为开源=随便用

**排斥后果**：开源许可证是授权不是无条款——GPL 传染性、署名要求、商用限制各不相同，违反即侵权

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | SBOM/SPDX、许可扫描、声明规范 |
| 工业设计 | 专利检索、标准必要专利评估 |
| 建筑设计 | 设计版权、图纸授权 |
| 服装设计 | 图案版权、面料专利筛查 |

---
*指南卡片：知识产权合规指南 ｜ v1.0 ｜ 状态：draft*
