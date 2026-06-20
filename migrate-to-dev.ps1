# ===========================================================================
#  OUR LEGACY - Migrate to Dev Folder
#  Run from PowerShell:
#  powershell -ExecutionPolicy Bypass -File migrate-to-dev.ps1
# ===========================================================================

$SRC = "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP"
$DST = "C:\Dev\SirajOne\OUR_LEGACY_APP"
$SEP = "-" * 65

Write-Host ""
Write-Host $SEP -ForegroundColor Cyan
Write-Host "  OUR LEGACY - Migration Script" -ForegroundColor Cyan
Write-Host "  From : $SRC" -ForegroundColor Cyan
Write-Host "  To   : $DST" -ForegroundColor Cyan
Write-Host $SEP -ForegroundColor Cyan
Write-Host ""

# STEP 1 - Verify source
Write-Host "[1/10] Verifying source folder..." -ForegroundColor Yellow
if (-not (Test-Path $SRC)) {
    Write-Host "  ERROR: Source not found: $SRC" -ForegroundColor Red
    pause
    exit 1
}
Write-Host "  OK: $SRC" -ForegroundColor Green

# STEP 2 - Git commit all Phase 2 work in source
Write-Host ""
Write-Host "[2/10] Committing uncommitted Phase 2 work to Git..." -ForegroundColor Yellow
Set-Location $SRC

$gitStatus = git status --porcelain
if ($gitStatus) {
    git add -A
    git commit -m "feat: Phase 2A - Lesson 7, enrichment, Continue Reading, Companion CTA, SW v6"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  ERROR: git commit failed." -ForegroundColor Red
        pause
        exit 1
    }
    Write-Host "  OK: Phase 2A committed." -ForegroundColor Green
} else {
    Write-Host "  OK: Working tree already clean - nothing to commit." -ForegroundColor Green
}

$headCommit = git log --oneline -1
Write-Host "  HEAD: $headCommit" -ForegroundColor Gray

# STEP 3 - Create destination
Write-Host ""
Write-Host "[3/10] Preparing destination folder..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "C:\Dev\SirajOne" | Out-Null
if (Test-Path $DST) {
    Write-Host "  NOTE: $DST already exists - will overwrite with latest source." -ForegroundColor Yellow
} else {
    Write-Host "  Created: C:\Dev\SirajOne\" -ForegroundColor Green
}

# STEP 4 - Robocopy
Write-Host ""
Write-Host "[4/10] Copying project files (robocopy)..." -ForegroundColor Yellow
Write-Host "  Excluding: node_modules, dist, .firebase, *.log, phase2-source.zip" -ForegroundColor Gray

$rcArgs = @(
    $SRC, $DST,
    "/E",
    "/XD", "node_modules", "dist", ".firebase",
    "/XF", "*.log", "*.err.log", "phase2-source.zip",
    "/COPY:DAT",
    "/R:2", "/W:3", "/NP"
)
robocopy @rcArgs
$rc = $LASTEXITCODE
if ($rc -ge 8) {
    Write-Host "  ERROR: Robocopy failed with exit code $rc." -ForegroundColor Red
    pause
    exit 1
}
Write-Host "  OK: Robocopy complete (exit code $rc - normal)." -ForegroundColor Green

# STEP 5 - Verify Git in destination
Write-Host ""
Write-Host "[5/10] Verifying Git in destination..." -ForegroundColor Yellow
Set-Location $DST

$gitRoot   = git rev-parse --show-toplevel 2>&1
$gitRemote = git remote get-url origin 2>&1
$gitHead   = git log --oneline -1 2>&1
$expectedRemote = "https://github.com/sirajone-cmyk/our-legacy-app.git"

Write-Host "  Git root   : $gitRoot"
Write-Host "  Git remote : $gitRemote"
Write-Host "  HEAD       : $gitHead"

if ($gitRemote -eq $expectedRemote) {
    Write-Host "  OK: Remote verified." -ForegroundColor Green
} else {
    Write-Host "  WARNING: Remote mismatch." -ForegroundColor Red
    Write-Host "  Expected : $expectedRemote" -ForegroundColor Red
    Write-Host "  Found    : $gitRemote" -ForegroundColor Red
}

# STEP 6 - npm install root
Write-Host ""
Write-Host "[6/10] npm install - project root..." -ForegroundColor Yellow
Set-Location $DST
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ERROR: npm install failed at root." -ForegroundColor Red
    pause
    exit 1
}
Write-Host "  OK: Root npm install complete." -ForegroundColor Green

# STEP 7 - npm install apps/web
Write-Host ""
Write-Host "[7/10] npm install - apps/web..." -ForegroundColor Yellow
Set-Location "$DST\apps\web"
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ERROR: npm install failed at apps/web." -ForegroundColor Red
    pause
    exit 1
}
Write-Host "  OK: apps/web npm install complete." -ForegroundColor Green

# STEP 8 - Build
Write-Host ""
Write-Host "[8/10] Building apps/web..." -ForegroundColor Yellow
Set-Location "$DST\apps\web"
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ERROR: Build failed." -ForegroundColor Red
    pause
    exit 1
}
Write-Host "  OK: Build complete." -ForegroundColor Green

$distSW = "$DST\apps\web\dist\sw.js"
if (Test-Path $distSW) {
    $swLine = Select-String -Path $distSW -Pattern "CACHE_NAME" | Select-Object -First 1
    Write-Host "  dist/sw.js: $($swLine.Line.Trim())" -ForegroundColor Gray
}

# STEP 9 - Write deploy.bat in Dev folder
Write-Host ""
Write-Host "[9/10] Writing deploy.bat..." -ForegroundColor Yellow

$deployLines = @(
    "@echo off",
    "echo -- OUR LEGACY -- Build + Deploy (Dev folder)",
    "echo.",
    "echo [1/2] Building...",
    'cd /d "C:\Dev\SirajOne\OUR_LEGACY_APP\apps\web"',
    "call npm run build",
    "if %ERRORLEVEL% neq 0 (",
    "  echo BUILD FAILED. Deploy cancelled.",
    "  pause",
    "  exit /b 1",
    ")",
    "echo.",
    "echo [2/2] Deploying to Firebase (sirajone-786)...",
    'cd /d "C:\Dev\SirajOne\OUR_LEGACY_APP"',
    "firebase deploy --only hosting",
    "echo.",
    "echo Done. Open: https://sirajone-786.web.app",
    "pause"
)
$deployLines -join "`r`n" | Out-File -FilePath "$DST\deploy.bat" -Encoding ASCII
Write-Host "  OK: deploy.bat written to $DST\deploy.bat" -ForegroundColor Green

# STEP 10 - Warning file in OLD OneDrive folder
Write-Host ""
Write-Host "[10/10] Creating warning file in old OneDrive folder..." -ForegroundColor Yellow

$warningDate = Get-Date -Format "yyyy-MM-dd HH:mm"
$warningLines = @(
    "================================================================",
    "  DO NOT USE THIS FOLDER FOR DEVELOPMENT",
    "================================================================",
    "",
    "This is the OLD OneDrive copy of OUR LEGACY.",
    "It is kept as a safety backup only.",
    "",
    "Active project has been migrated to:",
    "  C:\Dev\SirajOne\OUR_LEGACY_APP",
    "",
    "Date migrated: $warningDate",
    "",
    "All future edits, builds, and deploys must use the Dev folder.",
    "Do not edit files in this OneDrive folder.",
    "Do not run builds from this folder.",
    "Do not deploy from this folder.",
    "================================================================"
)
$warningLines -join "`r`n" | Out-File -FilePath "$SRC\DO_NOT_USE_OLD_ONEDRIVE_COPY.txt" -Encoding UTF8
Write-Host "  OK: Warning file created." -ForegroundColor Green

# FINAL REPORT
Write-Host ""
Write-Host $SEP -ForegroundColor Cyan
Write-Host "  MIGRATION COMPLETE - Final Report" -ForegroundColor Cyan
Write-Host $SEP -ForegroundColor Cyan
Write-Host ""
Write-Host "  New project root  : $DST"
Write-Host "  Old project root  : $SRC"
Write-Host "                      (WARNING FILE ADDED - do not use)"
Write-Host ""
Write-Host "  Git root          : $DST"
Write-Host "  Git remote        : $expectedRemote"
$finalHead = git -C $DST log --oneline -1
Write-Host "  Git HEAD          : $finalHead"
Write-Host ""
Write-Host "  Firebase root     : $DST\firebase.json"
Write-Host "  Build output      : $DST\apps\web\dist"
Write-Host "  Deploy script     : $DST\deploy.bat"
Write-Host ""
Write-Host "  Files excluded from copy:" -ForegroundColor Gray
Write-Host "    node_modules (reinstalled fresh)" -ForegroundColor Gray
Write-Host "    dist (rebuilt fresh)" -ForegroundColor Gray
Write-Host "    .firebase (Firebase deploy cache)" -ForegroundColor Gray
Write-Host "    *.log / *.err.log" -ForegroundColor Gray
Write-Host "    phase2-source.zip" -ForegroundColor Gray
Write-Host ""
Write-Host $SEP -ForegroundColor Yellow
Write-Host "  NEXT STEPS (run manually after this script):" -ForegroundColor Yellow
Write-Host $SEP -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. Push to GitHub:"
Write-Host "       cd C:\Dev\SirajOne\OUR_LEGACY_APP"
Write-Host "       git push origin main"
Write-Host ""
Write-Host "  2. Start a NEW Cowork session."
Write-Host "     Select folder: C:\Dev\SirajOne\OUR_LEGACY_APP"
Write-Host "     (NOT the OneDrive folder)"
Write-Host ""
Write-Host "  3. Deploy:"
Write-Host "     Run deploy.bat from C:\Dev\SirajOne\OUR_LEGACY_APP"
Write-Host ""
Write-Host $SEP -ForegroundColor Cyan
Write-Host ""
pause
