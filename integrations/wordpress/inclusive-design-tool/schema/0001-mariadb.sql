-- ============================================================
-- InclusiveDesign WP 插件 schema（MariaDB / MySQL 兼容版）
-- 移植自 app/saas/supabase/migrations/0001_init.sql（Postgres）
-- 兼容目标：MariaDB ≥ 10.2（表达式 DEFAULT），InnoDB，utf8mb4
-- 已实测：MariaDB 11.x（见 tests/wp/verify-mariadb.sql 结果）
-- 差异声明（诚实标注）：
--   1. 无 RLS → 租户隔离移入 PHP 数据层（class-incl-db.php），
--      数据库层仅保留"不可篡改"触发器作为纵深防御
--   2. 快照版本号自增由应用 SQL（version = version + 1）承担，
--      因为 MySQL/MariaDB 触发器不允许更新触发它的表
--   3. UUID 用 CHAR(36) + DEFAULT (UUID())，WP 用户 ID 用 BIGINT UNSIGNED
-- 表名占位符：{prefix} → 由安装器替换为 $wpdb->prefix
-- ============================================================

-- ---------- 组织 ----------
CREATE TABLE IF NOT EXISTS {prefix}incl_organizations (
  id          CHAR(36)     NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  name        VARCHAR(190) NOT NULL,
  slug        VARCHAR(64)  NOT NULL UNIQUE,
  plan        VARCHAR(20)  NOT NULL DEFAULT 'free',
  created_by  BIGINT UNSIGNED NOT NULL DEFAULT 0,
  created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- 成员与角色 ----------
CREATE TABLE IF NOT EXISTS {prefix}incl_org_members (
  org_id     CHAR(36)  NOT NULL,
  user_id    BIGINT UNSIGNED NOT NULL,
  role       ENUM('owner','admin','editor','viewer','auditor') NOT NULL DEFAULT 'viewer',
  created_at DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (org_id, user_id),
  CONSTRAINT fk_members_org FOREIGN KEY (org_id)
    REFERENCES {prefix}incl_organizations (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- 项目 ----------
CREATE TABLE IF NOT EXISTS {prefix}incl_projects (
  id              CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  organization_id CHAR(36) NOT NULL,
  name            VARCHAR(190) NOT NULL,
  profile         LONGTEXT NOT NULL CHECK (JSON_VALID(profile)),
  created_by      BIGINT UNSIGNED NOT NULL DEFAULT 0,
  created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_projects_org (organization_id),
  CONSTRAINT fk_projects_org FOREIGN KEY (organization_id)
    REFERENCES {prefix}incl_organizations (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- 边界文档 ----------
CREATE TABLE IF NOT EXISTS {prefix}incl_boundary_docs (
  id              CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  project_id      CHAR(36) NOT NULL UNIQUE,
  organization_id CHAR(36) NOT NULL,
  doc             LONGTEXT NOT NULL CHECK (JSON_VALID(doc)),
  version         INT UNSIGNED NOT NULL DEFAULT 1,
  approval_status ENUM('draft','in_review','approved','rejected') NOT NULL DEFAULT 'draft',
  created_by      BIGINT UNSIGNED NOT NULL DEFAULT 0,
  created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_boundary_org (organization_id),
  CONSTRAINT fk_boundary_org FOREIGN KEY (organization_id)
    REFERENCES {prefix}incl_organizations (id) ON DELETE CASCADE,
  CONSTRAINT fk_boundary_project FOREIGN KEY (project_id)
    REFERENCES {prefix}incl_projects (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- 版本快照（不可变：仅 INSERT） ----------
CREATE TABLE IF NOT EXISTS {prefix}incl_boundary_doc_versions (
  id         CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  doc_id     CHAR(36) NOT NULL,
  version    INT UNSIGNED NOT NULL,
  doc        LONGTEXT NOT NULL CHECK (JSON_VALID(doc)),
  created_by BIGINT UNSIGNED NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_doc_version (doc_id, version),
  CONSTRAINT fk_versions_doc FOREIGN KEY (doc_id)
    REFERENCES {prefix}incl_boundary_docs (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------- 审计日志（不可篡改：仅 INSERT） ----------
CREATE TABLE IF NOT EXISTS {prefix}incl_audit_log (
  id              CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  organization_id CHAR(36) NOT NULL,
  actor           BIGINT UNSIGNED NOT NULL,
  action          VARCHAR(40) NOT NULL,
  target_type     VARCHAR(40) NOT NULL,
  target_id       CHAR(36) NULL,
  before_doc      LONGTEXT NULL,
  after_doc       LONGTEXT NULL,
  created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_audit_org_time (organization_id, created_at),
  CONSTRAINT fk_audit_org FOREIGN KEY (organization_id)
    REFERENCES {prefix}incl_organizations (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 触发器
-- ============================================================
DELIMITER //

-- 不可篡改：版本快照表禁止 UPDATE/DELETE（RLS 缺失的数据库层补偿）
CREATE TRIGGER {prefix}incl_bdv_no_update BEFORE UPDATE ON {prefix}incl_boundary_doc_versions
FOR EACH ROW
BEGIN
  SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'boundary_doc_versions is append-only';
END//

CREATE TRIGGER {prefix}incl_bdv_no_delete BEFORE DELETE ON {prefix}incl_boundary_doc_versions
FOR EACH ROW
BEGIN
  SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'boundary_doc_versions is append-only';
END//

-- 不可篡改：审计日志禁止 UPDATE/DELETE
CREATE TRIGGER {prefix}incl_audit_no_update BEFORE UPDATE ON {prefix}incl_audit_log
FOR EACH ROW
BEGIN
  SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'audit_log is append-only';
END//

CREATE TRIGGER {prefix}incl_audit_no_delete BEFORE DELETE ON {prefix}incl_audit_log
FOR EACH ROW
BEGIN
  SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'audit_log is append-only';
END//

-- 版本快照：INSERT v1（应用保证初值 version=1）
CREATE TRIGGER {prefix}incl_boundary_snap_insert AFTER INSERT ON {prefix}incl_boundary_docs
FOR EACH ROW
BEGIN
  INSERT INTO {prefix}incl_boundary_doc_versions (doc_id, version, doc, created_by)
  VALUES (NEW.id, NEW.version, NEW.doc, NEW.created_by);
END//

-- 版本快照：UPDATE 时应用先执行 version = version + 1，触发器落新版本
CREATE TRIGGER {prefix}incl_boundary_snap_update AFTER UPDATE ON {prefix}incl_boundary_docs
FOR EACH ROW
BEGIN
  INSERT INTO {prefix}incl_boundary_doc_versions (doc_id, version, doc, created_by)
  VALUES (NEW.id, NEW.version, NEW.doc, NEW.created_by);
END//

DELIMITER ;
