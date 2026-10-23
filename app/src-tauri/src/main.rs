// InclusiveDesignTool —— Windows 11 原生壳（Tauri 2）
// 前端：复用 Vue SPA（../dist），本地模式全功能（Dexie/IndexedDB 在 WebView2 中可用）
// 原生增量：plugin-dialog（保存对话框）+ plugin-fs（文件读写）
//          + plugin-updater（自动更新）+ plugin-process（更新后重启）
//          + 启动文件参数（双击 .inclb 打开 → 读内容 → 前端 get_startup_file 取用）
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

/// 双击关联文件启动时，argv[1] 为文件路径；启动即读入内容（读不到则原样返回路径供前端报错）
#[tauri::command]
fn get_startup_file(state: tauri::State<Option<String>>) -> Option<String> {
    state.inner().clone()
}

fn main() {
    let startup_file: Option<String> = std::env::args().nth(1).map(|p| {
        std::fs::read_to_string(&p).unwrap_or(p)
    });

    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_process::init())
        .manage(startup_file)
        .invoke_handler(tauri::generate_handler![get_startup_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
