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
