# SIRAJONE EDUCATIONAL FRAMEWORK
## 11 Deployment and Technical Workflow

**Status:** Permanent Reference  
**Version:** 1.0  
**Date Established:** June 2026

---

## SYSTEM OVERVIEW

SirajOne is a React 19 + Vite + TypeScript SPA deployed to Firebase Hosting. The live app is at **https://sirajone-786.web.app**.

### Technology Stack
- **Framework:** React 19
- **Build tool:** Vite
- **Language:** TypeScript
- **Deployment:** Firebase Hosting
- **Service Worker:** Custom `sw.js` with cache-name versioning

### Key File Locations

| Purpose | OneDrive Path | Dev Path |
|---------|--------------|---------|
| Reader content | `apps/web/src/data/readerContent.ts` | Same (copied) |
| Companion data | `apps/web/src/data/lessonEnrichmentData.ts` | Same (copied) |
| Library/progress | `apps/web/src/data/libraryData.ts` | Same (copied) |
| Book detail | `apps/web/src/components/library/BookDetail.tsx` | Same (copied) |
| Service Worker | `apps/web/public/sw.js` | **Modified here only** |
| Deploy scripts | NOT in OneDrive | `C:\Dev\SirajOne\OUR_LEGACY_APP\deploy-lessonN.ps1` |

**CRITICAL RULE:** Deploy scripts (`.ps1` files) must live in `C:\Dev\SirajOne\OUR_LEGACY_APP`, never in OneDrive. This is a permanent rule. Reason: OneDrive sync can modify PowerShell files in unexpected ways, and deploy scripts contain paths that are machine-specific.

---

## THE DEPLOY PIPELINE — STEP BY STEP

### STEP 1 — Write Content in OneDrive
All lesson content is written in the OneDrive working copy:
`C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP\`

This is the source of truth for content. The 4 content files are:
1. `apps/web/src/data/readerContent.ts`
2. `apps/web/src/data/lessonEnrichmentData.ts`
3. `apps/web/src/data/libraryData.ts`
4. `apps/web/src/components/library/BookDetail.tsx`

### STEP 2 — Create the Deploy Script
A new `.ps1` deploy script is created at `C:\Dev\SirajOne\OUR_LEGACY_APP\deploy-lessonN.ps1`. The script:
1. Copies the 4 content files from OneDrive to C:\Dev.
2. Bumps the SW cache version (find-replace on `sw.js`).
3. Verifies all critical strings are present.
4. Runs `npm run build`.
5. Runs `firebase deploy`.
6. Commits to git.

### STEP 3 — Run the Deploy Script
From `C:\Dev\SirajOne\OUR_LEGACY_APP`, run:
```powershell
.\deploy-lessonN.ps1
```

### STEP 4 — Verify the Deployment
After the deploy completes, perform the live verification checklist (see 12 Verification and QA).

---

## DEPLOY SCRIPT TEMPLATE

```powershell
# deploy-lessonN.ps1
# Deploy Lesson N: [LESSON TITLE]

$devRoot = "C:\Dev\SirajOne\OUR_LEGACY_APP"
$oneDriveRoot = "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP"

# STEP 1: Copy source files
Write-Host "Copying source files from OneDrive..." -ForegroundColor Cyan
Copy-Item "$oneDriveRoot\apps\web\src\data\readerContent.ts" `
          "$devRoot\apps\web\src\data\readerContent.ts" -Force
Copy-Item "$oneDriveRoot\apps\web\src\data\lessonEnrichmentData.ts" `
          "$devRoot\apps\web\src\data\lessonEnrichmentData.ts" -Force
Copy-Item "$oneDriveRoot\apps\web\src\data\libraryData.ts" `
          "$devRoot\apps\web\src\data\libraryData.ts" -Force
Copy-Item "$oneDriveRoot\apps\web\src\components\library\BookDetail.tsx" `
          "$devRoot\apps\web\src\components\library\BookDetail.tsx" -Force

# STEP 2: Bump SW cache version
Write-Host "Bumping Service Worker cache version..." -ForegroundColor Cyan
$swPath = "$devRoot\apps\web\public\sw.js"
(Get-Content $swPath -Raw) `
  -replace 'our-legacy-v[PREV_VERSION]-lesson[PREV_LESSON]', `
           'our-legacy-v[NEW_VERSION]-lesson[NEW_LESSON]' |
  Set-Content $swPath -NoNewline

# STEP 3: Verify critical strings
Write-Host "Verifying critical content..." -ForegroundColor Cyan
$readerContent = Get-Content "$devRoot\apps\web\src\data\readerContent.ts" -Raw
$companions = Get-Content "$devRoot\apps\web\src\data\lessonEnrichmentData.ts" -Raw
$library = Get-Content "$devRoot\apps\web\src\data\libraryData.ts" -Raw
$sw = Get-Content $swPath -Raw

$checks = @{
  "Lesson title in reader"    = $readerContent -match "[LESSON_TITLE]"
  "Key phrase in reader"      = $readerContent -match "[KEY_PHRASE]"
  "pageIndex in BookDetail"   = (Get-Content "$devRoot\apps\web\src\components\library\BookDetail.tsx" -Raw) -match "pageIndex: [PAGE_INDEX]"
  "Companion key"             = $companions -match "sirah_journey:[N]"
  "Progress denominator"      = $library -match "saved / [DENOMINATOR]"
  "SW cache version"          = $sw -match "our-legacy-v[NEW_VERSION]-lesson[NEW_LESSON]"
}

$allPassed = $true
foreach ($check in $checks.GetEnumerator()) {
  if ($check.Value) {
    Write-Host "  PASS: $($check.Key)" -ForegroundColor Green
  } else {
    Write-Host "  FAIL: $($check.Key)" -ForegroundColor Red
    $allPassed = $false
  }
}

if (-not $allPassed) {
  Write-Host "Verification failed. Aborting deploy." -ForegroundColor Red
  exit 1
}

# STEP 4: Build
Write-Host "Building..." -ForegroundColor Cyan
Set-Location $devRoot
npm run build

# STEP 5: Deploy
Write-Host "Deploying to Firebase..." -ForegroundColor Cyan
firebase deploy

# STEP 6: Git commit
Write-Host "Committing to git..." -ForegroundColor Cyan
git add -A
git commit -m "feat: Lesson [N] - [LESSON TITLE] + L[N] Companion + Chapter [N+1] unlock + SW v[NEW_VERSION]"

Write-Host "Deploy complete!" -ForegroundColor Green
```

---

## THE SERVICE WORKER (sw.js)

The Service Worker caches all app assets and enables offline reading. Its critical property is the `CACHE_NAME`.

### Cache Name Pattern
```javascript
const CACHE_NAME = 'our-legacy-v{VERSION}-lesson{LESSON}';
```

### Version History

| Cache Name | Deploy | Lesson Added |
|------------|--------|-------------|
| our-legacy-v1 | Initial | — |
| our-legacy-v2 through v10 | Earlier lessons | L1–L8 |
| our-legacy-v11-lesson9 | Pre-L10 | L9 |
| our-legacy-v12-lesson10 | L10 deploy | L10 |
| our-legacy-v13-lesson11 | Next deploy | L11 (future) |

### How the SW Updates
1. Firebase deploy puts a new `sw.js` with the new `CACHE_NAME` on the CDN.
2. Browser detects the new SW file (it's different from the cached one).
3. New SW installs and caches all new assets.
4. On next navigation (or after closing and reopening the tab), the new SW activates.
5. Old cache (`our-legacy-v[N-1]`) is deleted; new cache is served.

### The Cache Split Problem (Documented Error)
During L10 deployment, a "cache split" occurred:
- The browser tab was active during the deploy.
- The v12 SW installed but its runtime cache had `/` pointing to old HTML from the previous session.
- `/index.html` had the new content; `/` had the old content.
- The new JS bundle was NOT in the SW cache at all.

**Symptom:** App showed old content even though SW version was new.  
**Fix:** Used JavaScript in Chrome console/extension to:
1. Delete the stale `/` cache entry.
2. Delete the old bundle from cache.
3. Fetch and re-cache the fresh `/index.html` as `/`.
4. Fetch and cache the new JS bundle.

**Prevention:** After deploying, always do a hard reload (Ctrl+Shift+R / Cmd+Shift+R) or close and reopen the browser tab before verification.

---

## THE FIVE FILES THAT CHANGE WITH EVERY LESSON

| File | What Changes |
|------|-------------|
| `readerContent.ts` | New pages appended (7 for 4-segment, 6 for 3-segment lesson) |
| `BookDetail.tsx` | New chapter entry gets `pageIndex` added |
| `lessonEnrichmentData.ts` | New Companion const added; export map updated |
| `libraryData.ts` | Progress denominator updated |
| `sw.js` (C:\Dev only) | CACHE_NAME bumped |

---

## THE PROGRESS DENOMINATOR

The progress bar formula is:
```typescript
Math.min(100, Math.round((saved / [DENOMINATOR]) * 100))
```

`saved` = the highest page index the reader has reached.  
`DENOMINATOR` = the index of the last page in the series.

| After Lesson | Last Page Index | Denominator |
|-------------|----------------|-------------|
| L1 | 7 | 7 |
| L2 | 14 | 14 |
| L3 | 21 | 21 |
| ... | ... | ... |
| L9 | 63 | 63 |
| L10 | 71 | 71 |
| L11 (4-seg) | 78 | 78 |

Formula for each new lesson:  
`New denominator = Old denominator + 7` (4-segment lesson)  
`New denominator = Old denominator + 6` (3-segment lesson)

---

## FIREBASE HOSTING BEHAVIOR

- Firebase serves hashed JS bundles. After a new deploy, old bundle URLs return a 4KB stub (not the original bundle).
- This means you cannot retrieve a previous lesson's bundle after it has been superseded.
- The CDN propagates within minutes of a firebase deploy command completing.
- Verification should begin at least 2–3 minutes after the deploy completes.

---

## GIT WORKFLOW

The project uses a single main branch. All commits are direct to main.

Commit message convention:
```
feat: Lesson N - [Lesson Title] + LN Companion + Chapter N+1 unlock + SW vVERSION
```

Example:
```
feat: Lesson 10 - Khadijah: The First Believer + L10 Companion + Chapter 11 unlock + SW v12
```

Note: The L10 commit message used the working title "The First Believer" rather than the final title "A Home Prepared by Allah." This is a cosmetic inconsistency documented in Editorial Decisions (ED-011).

---

## KNOWN RISKS AND MITIGATIONS

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| OneDrive sync delay causes stale source files | Medium | High (old content deployed) | Run deploy script twice if output bundle is unexpectedly small |
| SW cache split after deploy | Low | Medium (verification shows stale content) | Hard reload before verification; use SW cache fix script if needed |
| Firebase API quota | Very Low | High (deploy blocked) | Monitor Firebase console |
| Wrong SW version number | Medium | Medium (cache not invalidated) | Script verifies SW content before build |
| Missing Companion key | Low | High (Companion doesn't load) | Script verifies Companion export before build |
