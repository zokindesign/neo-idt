<?php
/**
 * Incl_REST —— REST API（/wp-json/incl/v1）
 * 权限模型：cookie 认证 + X-WP-Nonce；读写分离（viewer 只读）。
 */
if (!defined('ABSPATH')) { exit; }

class Incl_REST
{
    public const NS = 'incl/v1';

    public static function register_routes(): void
    {
        // 会话（公开：前端据此判断登录态）
        register_rest_route(self::NS, '/session', [
            'methods' => 'GET',
            'permission_callback' => '__return_true',
            'callback' => [self::class, 'session'],
        ]);

        // 项目
        register_rest_route(self::NS, '/projects', [
            'methods' => 'GET',
            'permission_callback' => [self::class, 'perm_use'],
            'callback' => [self::class, 'list_projects'],
        ]);
        register_rest_route(self::NS, '/projects', [
            'methods' => 'POST',
            'permission_callback' => [self::class, 'perm_write'],
            'callback' => [self::class, 'create_project'],
        ]);
        register_rest_route(self::NS, '/projects/(?P<id>[\w-]+)', [
            'methods' => 'PUT',
            'permission_callback' => [self::class, 'perm_write'],
            'callback' => [self::class, 'update_project'],
        ]);
        register_rest_route(self::NS, '/projects/(?P<id>[\w-]+)', [
            'methods' => 'DELETE',
            'permission_callback' => [self::class, 'perm_write'],
            'callback' => [self::class, 'delete_project'],
        ]);

        // 边界文档
        register_rest_route(self::NS, '/projects/(?P<id>[\w-]+)/boundary', [
            'methods' => 'GET',
            'permission_callback' => [self::class, 'perm_use'],
            'callback' => [self::class, 'get_boundary'],
        ]);
        register_rest_route(self::NS, '/projects/(?P<id>[\w-]+)/boundary', [
            'methods' => 'PUT',
            'permission_callback' => [self::class, 'perm_write'],
            'callback' => [self::class, 'save_boundary'],
        ]);

        // 审计日志（只读）
        register_rest_route(self::NS, '/audit', [
            'methods' => 'GET',
            'permission_callback' => [self::class, 'perm_admin'],
            'callback' => [self::class, 'list_audit'],
        ]);
    }

    // ---------- 权限回调 ----------
    public static function perm_use($req)
    {
        return current_user_can('incl_use_tool');
    }
    public static function perm_write($req)
    {
        if (!current_user_can('incl_use_tool')) { return new WP_Error('incl_forbidden', '无权限', ['status' => 403]); }
        Incl_DB::ensure_member(get_current_user_id());
        if (!Incl_DB::can_write(get_current_user_id())) {
            return new WP_Error('incl_readonly', '当前角色只读（viewer）', ['status' => 403]);
        }
        return true;
    }
    public static function perm_admin($req)
    {
        if (!current_user_can('incl_use_tool')) { return new WP_Error('incl_forbidden', '无权限', ['status' => 403]); }
        $role = Incl_DB::role_of(get_current_user_id());
        return in_array($role, ['owner', 'admin'], true)
            ? true
            : new WP_Error('incl_admin_only', '仅组织管理员可读审计日志', ['status' => 403]);
    }

    // ---------- 处理器 ----------
    public static function session($req)
    {
        $logged = is_user_logged_in();
        $role = $logged ? Incl_DB::role_of(get_current_user_id()) : null;
        return rest_ensure_response([
            'logged_in' => $logged,
            'user' => $logged ? [
                'id' => get_current_user_id(),
                'name' => wp_get_current_user()->display_name,
            ] : null,
            'org' => $logged && current_user_can('incl_use_tool') ? Incl_DB::org_id() : null,
            'role' => $role,
            'can_write' => $logged && Incl_DB::can_write(get_current_user_id()),
            'login_url' => wp_login_url(),
            'org_name' => get_bloginfo('name'),
        ]);
    }

    public static function list_projects($req)
    {
        Incl_DB::ensure_member(get_current_user_id());
        $rows = Incl_DB::list_projects();
        foreach ($rows as &$r) {
            $r['profile'] = json_decode((string) $r['profile'], true);
            $r['id'] = (string) $r['id'];
        }
        return rest_ensure_response($rows);
    }

    public static function create_project($req)
    {
        $body = $req->get_json_params();
        $name = sanitize_text_field($body['name'] ?? '未命名项目');
        $profile = is_array($body['profile'] ?? null) ? $body['profile'] : [];
        $proj = Incl_DB::create_project(get_current_user_id(), $name, $profile);
        return rest_ensure_response($proj);
    }

    public static function update_project($req)
    {
        $id = sanitize_text_field($req['id']);
        $body = $req->get_json_params();
        $name = sanitize_text_field($body['name'] ?? '未命名项目');
        $profile = is_array($body['profile'] ?? null) ? $body['profile'] : [];
        $ok = Incl_DB::update_project(get_current_user_id(), $id, $name, $profile);
        return $ok ? rest_ensure_response(['ok' => true])
                    : new WP_Error('incl_not_found', '项目不存在', ['status' => 404]);
    }

    public static function delete_project($req)
    {
        $id = sanitize_text_field($req['id']);
        $ok = Incl_DB::delete_project(get_current_user_id(), $id);
        return $ok ? rest_ensure_response(['ok' => true])
                    : new WP_Error('incl_not_found', '项目不存在', ['status' => 404]);
    }

    public static function get_boundary($req)
    {
        $id = sanitize_text_field($req['id']);
        $b = Incl_DB::get_boundary($id);
        if (!$b) { return rest_ensure_response(null); }
        $b['id'] = (string) $b['id'];
        return rest_ensure_response($b);
    }

    public static function save_boundary($req)
    {
        $id = sanitize_text_field($req['id']);
        $body = $req->get_json_params();
        if (!is_array($body['doc'] ?? null)) {
            return new WP_Error('incl_bad_doc', '缺少 doc', ['status' => 400]);
        }
        $r = Incl_DB::save_boundary(get_current_user_id(), $id, $body['doc']);
        return rest_ensure_response($r);
    }

    public static function list_audit($req)
    {
        return rest_ensure_response(Incl_DB::list_audit(100));
    }
}
