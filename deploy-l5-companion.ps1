$ErrorActionPreference = "Stop"
$ProjectRoot = "C:\Dev\SirajOne\OUR_LEGACY_APP"
$WebDir = "$ProjectRoot\apps\web"
$OneDriveDir = "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP"

Write-Host ""
Write-Host "=== STEP 1: Sync from OneDrive to Dev ===" -ForegroundColor Cyan
Copy-Item "$OneDriveDir\apps\web\src\data\lessonEnrichmentData.ts" `
          "$WebDir\src\data\lessonEnrichmentData.ts" -Force
Write-Host "Synced lessonEnrichmentData.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 2: TypeScript check ===" -ForegroundColor Cyan
Set-Location $WebDir
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) { throw "TypeScript errors found" }
Write-Host "TypeScript: 0 errors" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 3: Production build ===" -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }
Write-Host "Build complete" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 4: Deploy to Firebase ===" -ForegroundColor Cyan
Set-Location $ProjectRoot
firebase deploy --only hosting
if ($LASTEXITCODE -ne 0) { throw "Firebase deploy failed" }
Write-Host "Deployed to Firebase" -ForegroundColor Green

Write-Host ""
Write-Host "=== STEP 5: Git commit and push ===" -ForegroundColor Cyan
git add apps/web/src/data/lessonEnrichmentData.ts
git commit -m "content: add Lesson 5 Companion - The Opening of the Chest"
git push origin main
Write-Host "Pushed to GitHub" -ForegroundColor Green

Write-Host ""
Write-Host "=== ALL DONE ===" -ForegroundColor Green
Write-Host "Lesson 5 Companion is live at sirajone-786.web.app" -ForegroundColor Green
Write-Host "Verify: Read Lesson 5 to the Reflection page. Companion CTA should appear." -ForegroundColor Yellow
Write-Host "Verify: Open Companion. Memory Gem reads the heart hadith (Bukhari 52)." -ForegroundColor Yellow
Write-Host "Verify: Authentication Notes include the IMPORTANT Banu Sad vs Miraj distinction." -ForegroundColor Yellow
