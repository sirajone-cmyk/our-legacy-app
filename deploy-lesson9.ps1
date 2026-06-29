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
Write-Host "=== STEP 2: Sync BookDetail.tsx from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\components\library\BookDetail.tsx" `
          "$WebDir\src\components\library\BookDetail.tsx" -Force
Write-Host "Synced BookDetail.tsx" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 3: Sync lessonEnrichmentData.ts from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\data\lessonEnrichmentData.ts" `
          "$WebDir\src\data\lessonEnrichmentData.ts" -Force
Write-Host "Synced lessonEnrichmentData.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 4: Sync libraryData.ts from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\data\libraryData.ts" `
          "$WebDir\src\data\libraryData.ts" -Force
Write-Host "Synced libraryData.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 5: Bump SW cache to v11-lesson9 ===" -ForegroundColor Cyan
$swPath = "$WebDir\public\sw.js"
(Get-Content $swPath -Raw) -replace 'our-legacy-v10-lesson8', 'our-legacy-v11-lesson9' |
    Set-Content $swPath -NoNewline
Write-Host "CACHE_NAME bumped to our-legacy-v11-lesson9" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 6: Verify Part 9 divider in readerContent.ts ===" -ForegroundColor Cyan
$rc = Get-Content "$WebDir\src\data\readerContent.ts" -Raw
if ($rc -notmatch 'Part 9') { throw "ERROR: Part 9 divider not found. Aborting." }
if ($rc -notmatch 'Al-Amin') { throw "ERROR: Al-Amin content not found. Aborting." }
if ($rc -notmatch 'Hilf') { throw "ERROR: Hilf content not found. Aborting." }
if ($rc -notmatch 'nextLessonPreview') { throw "ERROR: nextLessonPreview not found. Aborting." }
Write-Host "Lesson 9 content confirmed in readerContent.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 7: Verify Chapter 10 unlocked in BookDetail.tsx ===" -ForegroundColor Cyan
$bd = Get-Content "$WebDir\src\components\library\BookDetail.tsx" -Raw
if ($bd -notmatch 'pageIndex: 57') { throw "ERROR: Chapter 10 pageIndex: 57 not found. Aborting." }
Write-Host "Chapter 10 pageIndex: 57 confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 8: Verify Lesson 9 Companion in lessonEnrichmentData.ts ===" -ForegroundColor Cyan
$led = Get-Content "$WebDir\src\data\lessonEnrichmentData.ts" -Raw
if ($led -notmatch 'sirah_journey:9') { throw "ERROR: sirah_journey:9 not found in export map. Aborting." }
if ($led -notmatch 'lesson9') { throw "ERROR: lesson9 const not found. Aborting." }
Write-Host "Lesson 9 Companion confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 9: Verify progress denominator in libraryData.ts ===" -ForegroundColor Cyan
$ld = Get-Content "$WebDir\src\data\libraryData.ts" -Raw
if ($ld -notmatch 'saved / 64') { throw "ERROR: denominator 64 not found in libraryData.ts. Aborting." }
Write-Host "Progress denominator 64 confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 10: Verify SW cache name ===" -ForegroundColor Cyan
$sw = Get-Content "$WebDir\public\sw.js" -Raw
if ($sw -notmatch 'our-legacy-v11-lesson9') { throw "ERROR: SW CACHE_NAME not updated. Aborting." }
Write-Host "CACHE_NAME = our-legacy-v11-lesson9 confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 11: TypeScript check ===" -ForegroundColor Cyan
Set-Location $WebDir
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) { throw "TypeScript errors found. Aborting." }
Write-Host "TypeScript: 0 errors" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 12: Clean build ===" -ForegroundColor Cyan
if (Test-Path "$WebDir\dist") { Remove-Item "$WebDir\dist" -Recurse -Force }
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed. Aborting." }
Write-Host "Build complete" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 13: Deploy to Firebase ===" -ForegroundColor Cyan
Set-Location $ProjectRoot
firebase deploy --only hosting
if ($LASTEXITCODE -ne 0) { throw "Firebase deploy failed. Aborting." }
Write-Host "Deployed to Firebase" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 14: Git commit ===" -ForegroundColor Cyan
git add apps/web/src/data/readerContent.ts `
        apps/web/src/components/library/BookDetail.tsx `
        apps/web/src/data/lessonEnrichmentData.ts `
        apps/web/src/data/libraryData.ts `
        apps/web/public/sw.js
git commit -m "feat: Lesson 9 - Al-Amin and Hilf al-Fudayl + L9 Companion + Chapter 10 unlock + SW v11"
git push origin main
Write-Host "Pushed to GitHub" -ForegroundColor Green

Write-Host ""
Write-Host "=== ALL DONE ===" -ForegroundColor Green
Write-Host "Verify at sirajone-786.web.app:" -ForegroundColor Yellow
Write-Host "  1. Open a new private window" -ForegroundColor Yellow
Write-Host "  2. Open Sirah book - Chapter 10 should show as readable" -ForegroundColor Yellow
Write-Host "  3. Navigate to page 58 - Part 9 divider (Al-Amin)" -ForegroundColor Yellow
Write-Host "  4. Navigate through L9: 4 segments, reflection, closing" -ForegroundColor Yellow
Write-Host "  5. Page 65 should be the Volume I completion page" -ForegroundColor Yellow
Write-Host "  6. Companion CTA on L9 reflection page" -ForegroundColor Yellow
Write-Host "  7. Console: 0 errors" -ForegroundColor Yellow
