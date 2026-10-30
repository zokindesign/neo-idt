# sign-windows.ps1 —— Windows 代码签名（exe + NSIS 安装包）
# 两种模式：
#   1) 自签测试证书（默认，验证签名管线；不消除 SmartScreen 警告——它看证书信誉）
#   2) 正式证书：-PfxPath <证书.pfx> -PfxPassword <密码>（或环境变量 INCL_CERT_PFX / INCL_CERT_PWD）
#      正式证书推荐路径：Azure Trusted Signing（$9.99/月，个人可申请）或 SignPath Foundation（开源项目免费）
# 用法：
#   powershell -ExecutionPolicy Bypass -File scripts/sign-windows.ps1 -Targets "app.exe,setup.exe"
param(
  [string]$Targets = "",
  [string]$PfxPath = "",
  [string]$PfxPassword = "",
  [string]$CertSubject = "CN=InclusiveDesign Tool Dev, O=InclusiveDesign Project, C=CN"
)

$ErrorActionPreference = "Stop"

function Get-Cert {
  if ($PfxPath -or $env:INCL_CERT_PFX) {
    $path = if ($PfxPath) { $PfxPath } else { $env:INCL_CERT_PFX }
    $pwd = if ($PfxPassword) { $PfxPassword } else { $env:INCL_CERT_PWD }
    $sec = ConvertTo-SecureString $pwd -AsPlainText -Force
    Write-Host "使用正式证书: $path"
    return New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($path, $sec)
  }
  # 自签测试证书（写入 CurrentUser\My，重复运行复用）
  $existing = Get-ChildItem Cert:\CurrentUser\My | Where-Object { $_.Subject -eq $CertSubject }
  if ($existing) {
    Write-Host "复用已有自签证书: $($existing.Thumbprint)"
    return $existing[0]
  }
  Write-Host "生成自签测试证书（正式发布请换正式证书）..."
  $cert = New-SelfSignedCertificate -Subject $CertSubject `
    -Type CodeSigningCert -KeyUsage DigitalSignature `
    -FriendlyName "InclusiveDesign Tool (Self-Signed DEV)" `
    -NotAfter (Get-Date).AddYears(3) -CertStoreLocation "Cert:\CurrentUser\My"
  return $cert
}

$cert = Get-Cert
if (-not $cert) { throw "证书获取失败" }

$files = $Targets -split "," | Where-Object { $_.Trim() }
if (-not $files) {
  # 默认：新 target 目录下的产物
  $release = "src-tauri/target/release"
  $nsis = "$release/bundle/nsis"
  $files = @()
  if (Test-Path "$release/inclusive-design-tool.exe") { $files += "$release/inclusive-design-tool.exe" }
  if (Test-Path "$nsis") { $files += (Get-ChildItem "$nsis/*.exe" | Select-Object -First 1).FullName }
}

$signed = 0
foreach ($f in $files) {
  $f = $f.Trim()
  if (-not (Test-Path $f)) { Write-Host "跳过（不存在）: $f"; continue }
  $sig = Set-AuthenticodeSignature -FilePath $f -Certificate $cert -TimestampServer "http://timestamp.digicert.com"
  if ($sig.Status -ne "Valid") { Write-Host "✗ 签名失败 $($f): $($sig.Status) $($sig.StatusMessage)" } 
  else { Write-Host "✓ 已签名: $f ($($sig.SignerCertificate.Thumbprint))"; $signed++ }
}
Write-Host "完成：$signed/$($files.Count) 已签名"
