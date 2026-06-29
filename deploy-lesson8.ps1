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
Write-Host "=== STEP 3: Sync BookDetail.tsx from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\components\library\BookDetail.tsx" `
          "$WebDir\src\components\library\BookDetail.tsx" -Force
Write-Host "Synced BookDetail.tsx" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 4: Sync lessonEnrichmentData.ts from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\data\lessonEnrichmentData.ts" `
          "$WebDir\src\data\lessonEnrichmentData.ts" -Force
Write-Host "Synced lessonEnrichmentData.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 5: Sync libraryData.ts from OneDrive ===" -ForegroundColor Cyan
Copy-Item "$OneDrive\apps\web\src\data\libraryData.ts" `
          "$WebDir\src\data\libraryData.ts" -Force
Write-Host "Synced libraryData.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 6: Bump SW cache to v10-lesson8 ===" -ForegroundColor Cyan
$swPath = "$WebDir\public\sw.js"
(Get-Content $swPath -Raw) -replace 'our-legacy-v9-completion', 'our-legacy-v10-lesson8' |
    Set-Content $swPath -NoNewline
Write-Host "CACHE_NAME bumped to our-legacy-v10-lesson8" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 7: Verify Lesson 8 pages in readerContent.ts ===" -ForegroundColor Cyan
$rc = Get-Content "$WebDir\src\data\readerContent.ts" -Raw
if ($rc -notmatch 'Part 8') { throw "ERROR: Part 8 divider not found. Aborting." }
if ($rc -notmatch 'Bahira') { throw "ERROR: Bahira content not found. Aborting." }
if ($rc -notmatch 'Guard This Child') { throw "ERROR: Segment 4 not found. Aborting." }
if ($rc -notmatch 'nextLessonPreview') { throw "ERROR: nextLessonPreview field not found. Aborting." }
Write-Host "Lesson 8 content confirmed in readerContent.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 8: Verify Chapter 8 unlocked in BookDetail.tsx ===" -ForegroundColor Cyan
$bd = Get-Content "$WebDir\src\components\library\BookDetail.tsx" -Raw
if ($bd -notmatch 'pageIndex: 50') { throw "ERROR: Chapter 8 pageIndex not found in BookDetail.tsx. Aborting." }
Write-Host "Chapter 8 pageIndex: 50 confirmed" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 9: Verify Lesson 8 Companion in lessonEnrichmentData.ts ===" -ForegroundColor Cyan
$led = Get-Content "$WebDir\src\data\lessonEnrichmentData.ts" -Raw
if ($led -notmatch 'sirah_journey:8') { throw "ERROR: sirah_journey:8 not found in export map. Aborting." }
if ($led -notmatch 'lesson8') { throw "ERROR: lesson8 const not found. Aborting." }
Write-Host "Lesson 8 Companion confirmed in lessonEnrichmentData.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 10: Verify SW cache name ===" -ForegroundColor Cyan
$sw = Get-Content "$WebDir\public\sw.js" -Raw
if ($sw -notmatch 'our-legacy-v10-lesson8') { throw "ERROR: SW CACHE_NAME not updated. Aborting." }
Write-Host "CACHE_NAME = our-legacy-v10-lesson8 confirmed" -ForegroundColor Green

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
        apps/web/src/components/EbookReader.tsx `
        apps/web/src/components/library/BookDetail.tsx `
        apps/web/src/data/lessonEnrichmentData.ts `
        apps/web/src/data/libraryData.ts `
        apps/web/public/sw.js
git commit -m "feat: Lesson 8 - The Journey to Sham (Bahira encounter) + L8 Companion + pageIndex unlock + SW v10"
git push origin main
Write-Host "Pushed to GitHub" -ForegroundColor Green

Write-Host ""
Write-Host "=== ALL DONE ===" -ForegroundColor Green
Write-Host "Verify at sirajone-786.web.app:" -ForegroundColor Yellow
Write-Host "  1. Open a new private window" -ForegroundColor Yellow
Write-Host "  2. Open the Sirah book - Chapters tab should show Lesson 8 as readable" -ForegroundColor Yellow
Write-Host "  3. Navigate to page 51 - should be Part 8 divider (The Journey to Sham)" -ForegroundColor Yellow
Write-Host "  4. Navigate through L8: 4 segments, reflection, closing" -ForegroundColor Yellow
Write-Host "  5. Page 58 should be the Volume I completion page" -ForegroundColor Yellow
Write-Host "  6. Companion CTA should appear on L8 reflection page" -ForegroundColor Yellow
Write-Host "  7. Console: 0 errors" -ForegroundColor Yellow
