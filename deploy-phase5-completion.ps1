$ErrorActionPreference = "Stop"
$ProjectRoot = "C:\Dev\SirajOne\OUR_LEGACY_APP"
$WebDir     = "$ProjectRoot\apps\web"
$OneDrive   = "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP"

Write-Host ""
Write-Host "=== STEP 1: Sync readerContent.ts from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\data\readerContent.ts" `
          "$WebDir\src\data\readerContent.ts" -Force
Write-Host "Synced readerContent.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 2: Sync EbookReader.tsx from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\components\EbookReader.tsx" `
          "$WebDir\src\components\EbookReader.tsx" -Force
Write-Host "Synced EbookReader.tsx" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 3: Sync App.tsx from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\App.tsx" `
          "$WebDir\src\App.tsx" -Force
Write-Host "Synced App.tsx" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 4: Sync global.css from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\styles\global.css" `
          "$WebDir\src\styles\global.css" -Force
Write-Host "Synced global.css" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 5: Bump SW cache to v9 ===" -ForegroundColor Cyan
$swPath = "$WebDir\public\sw.js"
(Get-Content $swPath -Raw) -replace 'our-legacy-v8-l1-companion', 'our-legacy-v9-completion' |
    Set-Content $swPath -NoNewline
Write-Host "CACHE_NAME bumped to our-legacy-v9-completion" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 6: Verify completion page in readerContent.ts ===" -ForegroundColor Cyan
$rc = Get-Content "$WebDir\src\data\readerContent.ts" -Raw
if ($rc -notmatch '"completion"') { throw "ERROR: CompletionPage not found in readerContent.ts. Aborting." }
if ($rc -notmatch 'Volume I') { throw "ERROR: Completion page title not found. Aborting." }
Write-Host "CompletionPage confirmed in readerContent.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 7: Verify onComplete in App.tsx ===" -ForegroundColor Cyan
$app = Get-Content "$WebDir\src\App.tsx" -Raw
if ($app -notmatch 'our_legacy_completed') { throw "ERROR: onComplete handler not found in App.tsx. Aborting." }
Write-Host "onComplete handler confirmed in App.tsx" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 8: Verify SW cache name ===" -ForegroundColor Cyan
$sw = Get-Content "$WebDir\public\sw.js" -Raw
if ($sw -notmatch 'our-legacy-v9-completion') { throw "ERROR: SW CACHE_NAME not updated. Aborting." }
Write-Host "CACHE_NAME = our-legacy-v9-completion confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 9: TypeScript check ===" -ForegroundColor Cyan
Set-Location $WebDir
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) { throw "TypeScript errors found" }
Write-Host "TypeScript: 0 errors" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 10: Clean build ===" -ForegroundColor Cyan
if (Test-Path "$WebDir\dist") { Remove-Item "$WebDir\dist" -Recurse -Force }
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }
Write-Host "Build complete" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 11: Deploy to Firebase ===" -ForegroundColor Cyan
Set-Location $ProjectRoot
firebase deploy --only hosting
if ($LASTEXITCODE -ne 0) { throw "Firebase deploy failed" }
Write-Host "Deployed to Firebase" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 12: Git commit ===" -ForegroundColor Cyan
git add apps/web/src/data/readerContent.ts `
        apps/web/src/components/EbookReader.tsx `
        apps/web/src/App.tsx `
        apps/web/src/styles/global.css `
        apps/web/public/sw.js
git commit -m "feat: Phase 5 completion experience - Volume I complete page + onComplete handler + SW cache v9"
git push origin main
Write-Host "Pushed to GitHub" -ForegroundColor Green

Write-Host ""
Write-Host "=== ALL DONE ===" -ForegroundColor Green
Write-Host "Verify at sirajone-786.web.app:" -ForegroundColor Yellow
Write-Host "  1. Open a new private window" -ForegroundColor Yellow
Write-Host "  2. Navigate to the Sirah book and go to the last page (51/51)" -ForegroundColor Yellow
Write-Host "  3. Confirm: Volume I Complete page renders" -ForegroundColor Yellow
Write-Host "  4. Confirm: Ibrahim salah duaa appears" -ForegroundColor Yellow
Write-Host "  5. Confirm: Lesson 8 preview appears" -ForegroundColor Yellow
Write-Host "  6. Confirm: Back to Library button works" -ForegroundColor Yellow
Write-Host "  7. Confirm: Read Again button returns to page 1/51" -ForegroundColor Yellow
Write-Host "  8. Open DevTools > Application > Local Storage" -ForegroundColor Yellow
Write-Host "  9. Confirm: our_legacy_completed:sirah_journey = true" -ForegroundColor Yellow
Write-Host " 10. Close tab, reopen book - Continue Reading resumes at completion page" -ForegroundColor Yellow
