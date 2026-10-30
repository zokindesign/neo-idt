<?php
/**
 * Plugin Name: Inclusive Design Tool
 * Description: 包容性设计因素决策系统 —— 从"不知道要考虑什么"到"可审计的包容性边界承诺"。四阶段工作流（探究/定义/建构/测试）+ 多人协作 + 审计日志。
 * Version: 0.1.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author: InclusiveDesign Project
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: inclusive-design-tool
 */

// 直接访问防护
if (!defined('ABSPATH')) { exit; }

define('INCL_TOOL_VERSION', '0.1.0');
define('INCL_TOOL_FILE', __FILE__);
define('INCL_TOOL_DIR', plugin_dir_path(__FILE__));
define('INCL_TOOL_URL', plugin_dir_url(__FILE__));
define('INCL_TOOL_SCHEMA_VERSION', '1');

require_once INCL_TOOL_DIR . 'includes/class-incl-db.php';
require_once INCL_TOOL_DIR . 'includes/class-incl-rest.php';

register_activation_hook(__FILE__, function () {
    Incl_DB::install();
    Incl_DB::grant_capabilities();
});

// 短代码：渲染 SPA 挂载点 + 注入构建产物
// 使用唯一 ID 避免与主题/其他插件冲突（id="app" 太通用，很多主题用同一 ID 做根元素）
define('INCL_MOUNT_ID', 'incl-tool-app');

add_shortcode('inclusive_design_tool', function () {
    if (!is_user_logged_in()) {
        return '<p>' . sprintf(
            /* translators: %s: login URL */
            esc_html__('使用包容性设计工具需要先登录。%s', 'inclusive-design-tool'),
            '<a href="' . esc_url(wp_login_url(get_permalink())) . '">' . esc_html__('登录', 'inclusive-design-tool') . '</a>'
        ) . '</p>';
    }
    if (!current_user_can('incl_use_tool')) {
        return '<p>' . esc_html__('你的账号没有使用本工具的权限，请联系站点管理员。', 'inclusive-design-tool') . '</p>';
    }
    Incl_DB::ensure_default_org();
    Incl_DB::ensure_member(get_current_user_id());

    wp_enqueue_style('incl-app', INCL_TOOL_URL . 'assets/app/incl-app.css', [], INCL_TOOL_VERSION);
    wp_enqueue_script('incl-app', INCL_TOOL_URL . 'assets/app/incl-app.js', [], INCL_TOOL_VERSION, true, 'module');
    wp_localize_script('incl-app', 'INCL_WP', [
        'rest'        => esc_url_raw(rest_url('incl/v1/')),
        'nonce'       => wp_create_nonce('wp_rest'),
        'datapackUrl' => INCL_TOOL_URL . 'assets/app/data/data-pack-latest.json',
        'loggedIn'    => is_user_logged_in(),
        'homeUrl'     => home_url(),
        'logoutUrl'   => wp_logout_url(get_permalink()),
        'user'        => ['id' => get_current_user_id(), 'name' => wp_get_current_user()->display_name],
    ]);

    // 挂载点 + 无 JS 时的降级提示（WCAG：脚本失败时用户至少知道发生了什么）
    return '<div id="' . INCL_MOUNT_ID . '" class="incl-tool-root">'
         . '<noscript><p>此工具需要启用 JavaScript。</p></noscript>'
         . '</div>';
});

// REST 路由
add_action('rest_api_init', [Incl_REST::class, 'register_routes']);
