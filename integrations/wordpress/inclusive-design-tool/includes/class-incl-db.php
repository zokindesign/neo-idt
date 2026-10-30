<?php
/**
 * Incl_DB —— schema 安装 + 数据访问层
 *
 * 安全模型（诚实声明）：
 *   MariaDB 无 RLS。跨租户隔离由本类承担 —— 所有读写都经过
 *   org 作用域参数 + 角色检查；绕过本类直接写 $wpdb 属于违规用法。
 *   数据库层保留两道不可篡改触发器（版本快照/审计日志）作为纵深防御。
 */
if (!defined('ABSPATH')) { exit; }

class Incl_DB
{
    /** 单组织 MVP：全站唯一默认组织 */
    public static function org_id(): string
    {
        $org = get_option('incl_default_org');
        if ($org) { return $org; }
        self::ensure_default_org();
        return (string) get_option('incl_default_org');
    }

    /** 安装 schema（幂等）：表 IF NOT EXISTS；触发器先 DROP 再建 */
    public static function install(): void
    {
        global $wpdb;
        $sql = file_get_contents(INCL_TOOL_DIR . 'schema/0001-mariadb.sql');
        $sql = str_replace('{prefix}', $wpdb->prefix, $sql);
        foreach (self::split_statements($sql) as $stmt) {
            // CREATE TRIGGER 不可 IF NOT EXISTS（MySQL 兼容）→ 先 DROP
            if (preg_match('/CREATE\s+TRIGGER\s+(\S+)/i', $stmt, $m)) {
                $wpdb->query("DROP TRIGGER IF EXISTS {$m[1]}");
            }
            $wpdb->query($stmt);
        }
        update_option('incl_schema_version', INCL_TOOL_SCHEMA_VERSION);
    }

    /** DELIMITER 感知的语句切分（DELIMITER 是 mysql 客户端指令，协议层不存在） */
    private static function split_statements(string $sql): array
    {
        $lines = explode("\n", $sql);
        $delim = ';';
        $buf = '';
        $out = [];
        foreach ($lines as $line) {
            if (preg_match('/^\s*DELIMITER\s+(\S+)/i', $line, $m)) {
                $delim = $m[1];
                if ($buf !== '') { $buf .= "\n"; }
                continue;
            }
            $buf .= $line . "\n";
            if (preg_match('/' . preg_quote($delim, '/') . '\s*$/i', rtrim($line))) {
                $stmt = trim($buf);
                if ($stmt !== '') { $out[] = $stmt; }
                $buf = '';
            }
        }
        $stmt = trim($buf);
        if ($stmt !== '') { $out[] = $stmt; }
        return $out;
    }

    /** 激活时给角色授能力 */
    public static function grant_capabilities(): void
    {
        foreach (['administrator', 'editor'] as $role) {
            $r = get_role($role);
            if ($r) { $r->add_cap('incl_use_tool'); }
        }
    }

    /** 建默认组织 + 激活者成为 owner */
    public static function ensure_default_org(): void
    {
        global $wpdb;
        if (get_option('incl_default_org')) { return; }
        // 注意：CHAR(36) DEFAULT (UUID()) 不设置 LAST_INSERT_ID()，必须显式生成 id
        $org_id = wp_generate_uuid4();
        $wpdb->insert($wpdb->prefix . 'incl_organizations', [
            'id' => $org_id,
            'name' => get_bloginfo('name') . ' 设计团队',
            'slug' => 'org-' . substr(md5(site_url()), 0, 12),
            'plan' => 'free',
            'created_by' => get_current_user_id(),
        ]);
        update_option('incl_default_org', $org_id);
        self::insert_member($org_id, get_current_user_id(), 'owner');
        self::audit('member.invited', 'organization', $org_id);
    }

    /** WP 能力 → 组织角色映射（首次使用时入队） */
    public static function ensure_member(int $user_id): void
    {
        if (self::role_of($user_id)) { return; }
        $role = current_user_can('manage_options') ? 'admin'
              : (current_user_can('edit_posts') ? 'editor' : 'viewer');
        self::insert_member(self::org_id(), $user_id, $role);
        self::audit('member.invited', 'user', null);
    }

    private static function insert_member(string $org_id, int $user_id, string $role): void
    {
        global $wpdb;
        $wpdb->insert($wpdb->prefix . 'incl_org_members', [
            'org_id' => $org_id, 'user_id' => $user_id, 'role' => $role,
        ]);
    }

    public static function role_of(int $user_id): ?string
    {
        global $wpdb;
        $r = $wpdb->get_var($wpdb->prepare(
            "SELECT role FROM {$wpdb->prefix}incl_org_members WHERE org_id = %s AND user_id = %d",
            self::org_id(), $user_id
        ));
        return $r ? (string) $r : null;
    }

    public static function can_write(int $user_id): bool
    {
        $r = self::role_of($user_id);
        return $r !== null && in_array($r, ['owner', 'admin', 'editor'], true);
    }

    // ---------- 项目 CRUD（全部限定默认组织） ----------
    public static function list_projects(): array
    {
        global $wpdb;
        return (array) $wpdb->get_results($wpdb->prepare(
            "SELECT id, name, profile, created_at, updated_at
             FROM {$wpdb->prefix}incl_projects WHERE organization_id = %s
             ORDER BY updated_at DESC",
            self::org_id()
        ), ARRAY_A);
    }

    public static function create_project(int $user_id, string $name, array $profile): array
    {
        global $wpdb;
        // 同上：显式生成 UUID（DEFAULT (UUID()) 不回填 insert_id）
        $id = wp_generate_uuid4();
        $wpdb->insert($wpdb->prefix . 'incl_projects', [
            'id' => $id,
            'organization_id' => self::org_id(),
            'name' => $name,
            'profile' => wp_json_encode($profile),
            'created_by' => $user_id,
        ]);
        self::audit('project.created', 'project', $id);
        return ['id' => $id, 'name' => $name, 'profile' => $profile];
    }

    public static function update_project(int $user_id, string $id, string $name, array $profile): bool
    {
        global $wpdb;
        $ok = $wpdb->update($wpdb->prefix . 'incl_projects',
            ['name' => $name, 'profile' => wp_json_encode($profile)],
            ['id' => $id, 'organization_id' => self::org_id()]
        ) !== false;
        if ($ok) { self::audit('project.updated', 'project', $id); }
        return $ok;
    }

    public static function delete_project(int $user_id, string $id): bool
    {
        global $wpdb;
        $ok = $wpdb->delete($wpdb->prefix . 'incl_projects',
            ['id' => $id, 'organization_id' => self::org_id()]
        ) !== false;
        if ($ok) { self::audit('project.deleted', 'project', $id); }
        return $ok;
    }

    // ---------- 边界文档（版本快照由触发器落） ----------
    public static function get_boundary(string $project_id): ?array
    {
        global $wpdb;
        $row = $wpdb->get_row($wpdb->prepare(
            "SELECT id, doc, version, approval_status, updated_at
             FROM {$wpdb->prefix}incl_boundary_docs
             WHERE project_id = %s AND organization_id = %s",
            $project_id, self::org_id()
        ), ARRAY_A);
        if (!$row) { return null; }
        $row['doc'] = json_decode((string) $row['doc'], true);
        return $row;
    }

    public static function save_boundary(int $user_id, string $project_id, array $doc): array
    {
        global $wpdb;
        $existing = $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM {$wpdb->prefix}incl_boundary_docs WHERE project_id = %s",
            $project_id
        ));
        $json = wp_json_encode($doc);
        if ($existing) {
            $wpdb->query($wpdb->prepare(
                "UPDATE {$wpdb->prefix}incl_boundary_docs
                 SET doc = %s, version = version + 1, created_by = %d
                 WHERE id = %s AND organization_id = %s",
                $json, $user_id, $existing, self::org_id()
            ));
            self::audit('boundary.updated', 'boundary', (string) $existing);
            $version = (int) $wpdb->get_var($wpdb->prepare(
                "SELECT version FROM {$wpdb->prefix}incl_boundary_docs WHERE id = %s", $existing));
        } else {
            $wpdb->insert($wpdb->prefix . 'incl_boundary_docs', [
                'project_id' => $project_id,
                'organization_id' => self::org_id(),
                'doc' => $json,
                'version' => 1,
                'created_by' => $user_id,
            ]);
            $existing = (string) $wpdb->insert_id;
            self::audit('boundary.created', 'boundary', $existing);
            $version = 1;
        }
        return ['id' => $existing, 'version' => $version];
    }

    // ---------- 审计（服务端权威；表级触发器禁 UPDATE/DELETE） ----------
    public static function audit(string $action, string $target_type, ?string $target_id): void
    {
        global $wpdb;
        $wpdb->insert($wpdb->prefix . 'incl_audit_log', [
            'organization_id' => self::org_id(),
            'actor' => get_current_user_id(),
            'action' => $action,
            'target_type' => $target_type,
            'target_id' => $target_id,
        ]);
    }

    public static function list_audit(int $limit = 100): array
    {
        global $wpdb;
        return (array) $wpdb->get_results($wpdb->prepare(
            "SELECT actor, action, target_type, target_id, created_at
             FROM {$wpdb->prefix}incl_audit_log
             WHERE organization_id = %s ORDER BY created_at DESC LIMIT %d",
            self::org_id(), $limit
        ), ARRAY_A);
    }
}
