# SIRAJONE EDUCATIONAL FRAMEWORK
## 18 Backup and Recovery

**Status:** Permanent Reference  
**Version:** 1.0  
**Date Established:** June 2026

---

## CURRENT BACKUP LOCATIONS

### Primary Source (OneDrive)
`C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP\`

This is the working copy and the source of truth for all content. OneDrive syncs to Microsoft Cloud automatically.

### Development Copy (Local)
`C:\Dev\SirajOne\OUR_LEGACY_APP\`

This is the build and deploy machine copy. It is derived from OneDrive content by the deploy scripts. It also contains the git repository with full commit history.

### Firebase Hosting (Live CDN)
`https://sirajone-786.web.app`

Firebase stores the currently deployed version. Old bundle files are NOT retained after a new deploy — Firebase serves only the current build.

### Git Repository
Location: `C:\Dev\SirajOne\OUR_LEGACY_APP\.git`

Full commit history of all content changes. Each lesson deploy has a tagged commit. This is the most complete recovery option for content.

---

## RECOVERY SCENARIOS

### Scenario 1: OneDrive content file is accidentally modified
**Recovery:** Use git to recover the last committed version from C:\Dev:
```powershell
cd C:\Dev\SirajOne\OUR_LEGACY_APP
git log --oneline apps/web/src/data/readerContent.ts  # Find last good commit
git show [COMMIT_HASH]:apps/web/src/data/readerContent.ts > recovered_readerContent.ts
```
Then copy the recovered file back to OneDrive.

### Scenario 2: The live app shows stale or wrong content
**Recovery:** Do not edit any source files. First check:
1. Is the SW cache stale? (Check SW version in browser Application tab)
2. Is the deployed bundle wrong? (Check bundle size — old bundle was ~737KB, L10 bundle is ~778KB)
3. If SW cache stale: use hard reload or SW cache fix script (see Deployment Workflow)
4. If wrong bundle: re-run the deploy script

### Scenario 3: Firebase project is unavailable
**Recovery:** The source files in OneDrive + git history contain all content. Deploy to a new Firebase project using the same codebase:
1. Create new Firebase project in Firebase console
2. Update `.firebaserc` with new project ID
3. Run `firebase deploy`

### Scenario 4: Complete machine failure
**Recovery:** All content is in OneDrive (cloud-synced). The git history requires access to the C:\Dev copy or the remote git repository. Priority after machine recovery:
1. Re-clone the repository if needed
2. Sync OneDrive to new machine
3. Verify C:\Dev and OneDrive are consistent
4. Re-deploy if necessary

---

## WHAT IS NOT BACKED UP

- The browser's SW cache — this is local to each device and not a backup target
- Firebase hosting history — old builds are not retained
- Claude conversation history — the transcript at the path noted in the session summary contains project history but is session-specific

---

## CRITICAL FILES TO NEVER DELETE

| File | Why |
|------|-----|
| `apps/web/src/data/readerContent.ts` | All lesson content — irreplaceable |
| `apps/web/src/data/lessonEnrichmentData.ts` | All 10 Companions — irreplaceable |
| `apps/web/public/sw.js` (C:\Dev) | Current SW version — required for deploy |
| `deploy-lessonN.ps1` (C:\Dev) | Deploy automation — time-consuming to recreate |
| `.git/` directory (C:\Dev) | Full history — recovery source |

---

## FRAMEWORK ARCHIVE BACKUP

This SIRAJONE EDUCATIONAL FRAMEWORK folder is stored in OneDrive and is therefore cloud-backed automatically. It is also part of the OUR_LEGACY_APP folder structure and should be included in any git commit that backs up content.

---

## PERMANENT ARCHIVE PROTOCOL

The Permanent Archive Protocol is the rule that governs how the project is backed up at every milestone. A milestone includes: each lesson deploy, each major framework document addition, and each Phase completion.

**The rule:** Before starting any new lesson or major new work phase, all four archive locations must be current and verified.

### The Four Locations

| # | Location | Path | Sync Method |
|---|----------|------|-------------|
| 1 | OneDrive | `C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP` | Automatic cloud sync (always current if saved) |
| 2 | C:\Dev | `C:\Dev\SirajOne\OUR_LEGACY_APP` | Deploy script copies relevant files |
| 3 | Google Drive | SirajOne > Educational Framework folder | Manual upload of framework .md files at milestones |
| 4 | GitHub | Remote repository (madrassatahseenulquraan@gmail.com account) | `git push` via deploy script |

### Verification Steps at Each Milestone

**OneDrive:**
- Open File Explorer, navigate to `OUR_LEGACY_APP`
- Confirm the OneDrive sync icon shows as synced (not pending)
- Confirm the most recently edited files show today's date

**C:\Dev:**
- Run `archive-sync.ps1` (located at `C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP\archive-sync.ps1`)
- The script copies all content files from OneDrive to C:\Dev, verifies all expected folders exist, and runs the git push
- If the script reports FAIL for any folder, that folder needs to be re-synced manually

**Google Drive:**
- Google Drive archive is updated manually at major milestones (not after every lesson deploy)
- Access via madrassatahseenulquraan@gmail.com
- Folder structure: My Drive > SirajOne > Educational Framework > [21 numbered folders]
- Upload method: Google Drive MCP `create_file` with `contentMimeType: "text/plain"`, `disableConversionToGoogleType: true`

**GitHub:**
- GitHub is updated via the deploy script's `git push` step
- To verify: run `git log --oneline -5` in C:\Dev to confirm the latest commit is present
- Remote: `git remote -v` to confirm the remote points to the correct GitHub repository

### The archive-sync.ps1 Script

Located at: `C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP\archive-sync.ps1`

This script:
1. Copies all content source files from OneDrive to C:\Dev
2. Verifies all expected framework folders exist in C:\Dev
3. Runs `git add .`, `git commit`, and `git push` with a timestamped commit message

**Known issues (fixed as of June 2026):**
- Em-dash characters (`—`) in `Write-Host` strings break PowerShell parsing. All em-dashes in the script must be replaced with ASCII hyphens (`-`).
- The `>` operator inside quoted Write-Host strings can be misread as an output redirect operator. All such strings must use alternative phrasing.
- Use `Push-Location`/`Pop-Location` instead of `Set-Location` for directory changes inside scripts.

---

## MACHINE MIGRATION PROCEDURE

If the working machine must be replaced or the project moved to a new computer:

**Step 1 — Recover from OneDrive:**
OneDrive content is cloud-synced. On the new machine, sign in to OneDrive with the same Microsoft account. Wait for sync to complete. All OneDrive content will appear in `C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP`.

**Step 2 — Recover C:\Dev from GitHub:**
```powershell
mkdir C:\Dev\SirajOne
cd C:\Dev\SirajOne
git clone [GITHUB_REMOTE_URL] OUR_LEGACY_APP
```
This restores the full git history and all tracked files.

**Step 3 — Restore sw.js:**
`sw.js` is in C:\Dev only (not tracked in OneDrive). After cloning from GitHub, verify `apps/web/public/sw.js` is present and contains the correct `CACHE_NAME` (`our-legacy-v12-lesson10` as of June 2026, or the version at the time of the last push).

**Step 4 — Restore Node.js dependencies:**
```powershell
cd C:\Dev\SirajOne\OUR_LEGACY_APP\apps\web
npm install
```

**Step 5 — Test the build:**
```powershell
npm run build
```
If the build succeeds, the environment is correctly restored. Do not deploy until a full verification has been completed.

**Step 6 — Verify all 4 archive locations:**
Follow the Verification Steps section above before doing any new work.

---

## DISASTER RECOVERY REGISTER

This register records past incidents and how they were resolved. Update this whenever a recovery event occurs.

| Date | Incident | Root Cause | Resolution | Lesson |
|------|----------|-----------|------------|--------|
| June 2026 | SW cache stale after L10 deploy | Browser tab open during deploy; old SW served stale `/` | JS SW cache manipulation; hard reload confirmed fix | Always hard-reload before verification |
| June 2026 | archive-sync.ps1 failed with StreamAlreadyRedirected | `>` characters inside Write-Host strings misread as redirect operator | Replaced offending line text to remove `>` characters | Never use `>` in PowerShell Write-Host strings |
| June 2026 | archive-sync.ps1 failed with MissingEndCurlyBrace at line 101 | Em-dash `—` in Write-Host string broke file encoding; parser lost closing `}` of foreach block | Full script rewrite replacing ALL em-dashes with ASCII hyphens | Never use em-dashes in PowerShell strings |
