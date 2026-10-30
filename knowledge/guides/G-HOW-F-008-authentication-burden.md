---
id: G-HOW-F-008
factor_id: HOW-F-008
name: "认证无障碍指南"
name_en: Authentication Accessibility Guide
patterns:
  - name: "双路径认证底线"
    description: "至少两条能力要求不同的独立认证路径（如密码+生物识别），用户按自身能力选择"
    domain: digital
    example: "密码（认知负荷）与指纹（运动要求）二选一"
    refs: ["STD-W3C-WCAG22:3.3.8"]
  - name: "认知测试豁免"
    description: "认证不强制认知功能测试（记忆密码/拼图/算术）；恢复流程同样豁免——改用受信任联系人/设备/硬件密钥"
    domain: digital
    example: "忘记密码 → 向受信任设备推送确认，而非安全问题"
  - name: "管理器友好"
    description: "密码管理器自动填充零阻断（不设 autocomplete=off）、表单语义正确（type=password + id）"
    domain: digital
    example: "登录表单允许粘贴与自动填充——这是功能不是漏洞"
  - name: "会话人性化"
    description: "会话时长按任务需求设置并可延长；不因认知/运动缓慢导致中途掉线重认证"
    domain: digital
    example: "阅读长文时静默续期，绝不弹『重新登录』打断"
anti_patterns:
  - name: "单一认证强推"
    description: "只提供一种认证方式并强制所有人使用"
    consequence: "WCAG 3.3.8 直接违反——认知障碍者记不住复杂密码、运动障碍者按不了指纹，认证即成了过滤器"
  - name: "恢复死亡谷"
    description: "账号恢复依赖安全问题/上传证件等高门槛"
    consequence: "被锁在门外的用户最脆弱时刻遇到最高墙——恢复路径的可用性要求高于日常登录"
cases: []
cross_domain_mapping:
  digital:
    summary: "双路径认证、认知豁免、管理器兼容"
  industrial:
    summary: "NFC 配对、物理按键确认"
  architecture:
    summary: "多模态门禁、访客临时授权"
  fashion:
    summary: "免认证基础功能、物理按钮配对"
status: draft
version: '1.0'
---

# 认证无障碍指南 (Authentication Accessibility Guide)

> 关联因素：[[HOW-F-008-authentication-burden|HOW-F-008 认证与身份负担]] ｜ 指南 ID：`G-HOW-F-008`

## 设计模式（正模式）

### ✅ 双路径认证底线

至少两条能力要求不同的独立认证路径（如密码+生物识别），用户按自身能力选择

**示例**：密码（认知负荷）与指纹（运动要求）二选一

**标准依据**：`STD-W3C-WCAG22:3.3.8`

### ✅ 认知测试豁免

认证不强制认知功能测试（记忆密码/拼图/算术）；恢复流程同样豁免——改用受信任联系人/设备/硬件密钥

**示例**：忘记密码 → 向受信任设备推送确认，而非安全问题

### ✅ 管理器友好

密码管理器自动填充零阻断（不设 autocomplete=off）、表单语义正确（type=password + id）

**示例**：登录表单允许粘贴与自动填充——这是功能不是漏洞

### ✅ 会话人性化

会话时长按任务需求设置并可延长；不因认知/运动缓慢导致中途掉线重认证

**示例**：阅读长文时静默续期，绝不弹『重新登录』打断

## 反模式（常见错误）

### ❌ 单一认证强推

只提供一种认证方式并强制所有人使用

**排斥后果**：WCAG 3.3.8 直接违反——认知障碍者记不住复杂密码、运动障碍者按不了指纹，认证即成了过滤器

### ❌ 恢复死亡谷

账号恢复依赖安全问题/上传证件等高门槛

**排斥后果**：被锁在门外的用户最脆弱时刻遇到最高墙——恢复路径的可用性要求高于日常登录

## 跨领域映射

| 领域 | 落地表现 |
|------|----------|
| 数字产品 | 双路径认证、认知豁免、管理器兼容 |
| 工业设计 | NFC 配对、物理按键确认 |
| 建筑设计 | 多模态门禁、访客临时授权 |
| 服装设计 | 免认证基础功能、物理按钮配对 |

---
*指南卡片：认证无障碍指南 ｜ v1.0 ｜ 状态：draft*
