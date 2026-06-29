$ErrorActionPreference = "Stop"

$devRoot      = "C:\Dev\SirajOne\OUR_LEGACY_APP"
$oneDriveRoot = "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP"

$srcFile  = "$oneDriveRoot\apps\web\src\data\lessonEnrichmentData.ts"
$destFile = "$devRoot\apps\web\src\data\lessonEnrichmentData.ts"

Write-Host "=== fix-citation.ps1 : ED-012 Corrective Deploy ===" -ForegroundColor Cyan
Write-Host ""

# ---- STEP 1: Copy file --------------------------------------------------
Write-Host "STEP 1: Copying lessonEnrichmentData.ts from OneDrive to Dev..." -ForegroundColor Yellow
Copy-Item $srcFile $destFile -Force

if (Test-Path $destFile) {
    Write-Host "  OK: Destination file exists." -ForegroundColor Green
} else {
    Write-Host "  FAIL: Destination file not found after copy." -ForegroundColor Red
    exit 1
}
Write-Host ""

# ---- STEP 2: Change directory -------------------------------------------
Write-Host "STEP 2: Changing directory to Dev root..." -ForegroundColor Yellow
Set-Location $devRoot
Write-Host "  OK: Now in $devRoot" -ForegroundColor Green
Write-Host ""

# ---- STEP 3: Build -------------------------------------------------------
Write-Host "STEP 3: Running npm run build..." -ForegroundColor Yellow
npm run build
$buildStatus = "SUCCESS"
Write-Host "  OK: Build complete." -ForegroundColor Green
Write-Host ""

# ---- STEP 4: Firebase deploy ---------------------------------------------
Write-Host "STEP 4: Running firebase deploy..." -ForegroundColor Yellow
firebase deploy
$deployStatus = "SUCCESS"
Write-Host "  OK: Firebase deploy complete." -ForegroundColor Green
Write-Host ""

# ---- STEP 5: Git commit (only if there are changes) ----------------------
Write-Host "STEP 5: Checking git status..." -ForegroundColor Yellow
$gitChanges = git status --porcelain

if (-not $gitChanges) {
    Write-Host "  No changes to commit." -ForegroundColor Yellow
    $gitStatus = "NO CHANGES"
} else {
    git add -A
    git commit -m "fix: correct Bukhari 3816 to Musnad Ahmad in L10 Companion (ED-012)"
    git push
    $gitStatus = "COMMITTED AND PUSHED"
    Write-Host "  OK: Commit and push complete." -ForegroundColor Green
}
Write-Host ""

# ---- FINAL SUMMARY -------------------------------------------------------
$commitHash = git rev-parse HEAD

Write-Host "=== SUMMARY ===" -ForegroundColor Cyan
Write-Host "  Commit hash    : $commitHash"
Write-Host "  Build status   : $buildStatus"
Write-Host "  Deploy status  : $deployStatus"
Write-Host "  Git status     : $gitStatus"
Write-Host ""
Write-Host "COMPLETE" -ForegroundColor Green
Write-Host ""
Write-Host "Verify on live site:" -ForegroundColor Yellow
Write-Host "  1. Open https://sirajone-786.web.app"
Write-Host "  2. Open Lesson 10 Companion"
Write-Host "  3. Memory Gem must show: Musnad Ahmad"
Write-Host "  4. Must NOT show: Bukhari 3816"
Write-Host "  5. Paste commit hash into Claude chat to complete v1.0 freeze."
