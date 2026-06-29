$ErrorActionPreference = "Stop"
$ProjectRoot = "C:\Dev\SirajOne\OUR_LEGACY_APP"
$WebDir     = "$ProjectRoot\apps\web"
$OneDrive   = "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP"

Write-Host ""
Write-Host "=== STEP 1: Bump SW cache to v8 ===" -ForegroundColor Cyan
$swPath = "$WebDir\public\sw.js"
(Get-Content $swPath -Raw) -replace 'our-legacy-v7-l2-companion', 'our-legacy-v8-l1-companion' |
    Set-Content $swPath -NoNewline
Write-Host "CACHE_NAME bumped to our-legacy-v8-l1-companion" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 2: Sync readerContent.ts from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\data\readerContent.ts" `
          "$WebDir\src\data\readerContent.ts" -Force
Write-Host "Synced readerContent.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 3: Sync lessonEnrichmentData.ts from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\data\lessonEnrichmentData.ts" `
          "$WebDir\src\data\lessonEnrichmentData.ts" -Force
Write-Host "Synced lessonEnrichmentData.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 4: Verify Part 0 divider is in readerContent.ts ===" -ForegroundColor Cyan
$rc = Get-Content "$WebDir\src\data\readerContent.ts" -Raw
if ($rc -notmatch '"Part 0"') { throw "ERROR: Part 0 divider not found in readerContent.ts. Aborting." }
Write-Host "Part 0 divider confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 5: Verify sirah_journey:0 key is present ===" -ForegroundColor Cyan
$ed = Get-Content "$WebDir\src\data\lessonEnrichmentData.ts" -Raw
if ($ed -notmatch '"sirah_journey:0"') { throw "ERROR: sirah_journey:0 key not found. Aborting." }
if ($ed -notmatch 'const lesson0') { throw "ERROR: lesson0 const not found. Aborting." }
Write-Host "sirah_journey:0 key and lesson0 const confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 6: Verify SW cache name ===" -ForegroundColor Cyan
$sw = Get-Content "$WebDir\public\sw.js" -Raw
if ($sw -notmatch 'our-legacy-v8-l1-companion') { throw "ERROR: SW CACHE_NAME not updated. Aborting." }
Write-Host "CACHE_NAME = our-legacy-v8-l1-companion confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 7: TypeScript check ===" -ForegroundColor Cyan
Set-Location $WebDir
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) { throw "TypeScript errors found" }
Write-Host "TypeScript: 0 errors" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 8: Clean build ===" -ForegroundColor Cyan
if (Test-Path "$WebDir\dist") { Remove-Item "$WebDir\dist" -Recurse -Force }
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }
Write-Host "Build complete" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 9: Deploy to Firebase ===" -ForegroundColor Cyan
Set-Location $ProjectRoot
firebase deploy --only hosting
if ($LASTEXITCODE -ne 0) { throw "Firebase deploy failed" }
Write-Host "Deployed to Firebase" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 10: Git commit ===" -ForegroundColor Cyan
git add apps/web/src/data/readerContent.ts apps/web/src/data/lessonEnrichmentData.ts apps/web/public/sw.js
git commit -m "feat: add L1 Companion (Introduction to Sirah) - Part 0 divider + sirah_journey:0 + SW cache v8"
git push origin main
Write-Host "Pushed to GitHub" -ForegroundColor Green

Write-Host ""
Write-Host "=== ALL DONE ===" -ForegroundColor Green
Write-Host "Verify at sirajone-786.web.app:" -ForegroundColor Yellow
Write-Host "  1. Open a new private window" -ForegroundColor Yellow
Write-Host "  2. Read the Introduction to Sirah lesson to the Reflection page" -ForegroundColor Yellow
Write-Host "  3. Companion CTA appears on the Reflection page" -ForegroundColor Yellow
Write-Host "  4. Memory Gem = Quran 3:31 (follow me, Allah will love you)" -ForegroundColor Yellow
