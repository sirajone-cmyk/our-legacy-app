@echo off
echo ── OUR LEGACY — Build + Deploy ───────────────────────────────
echo.

echo [1/2] Building...
cd /d "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP\apps\web"
call npm run build
if %ERRORLEVEL% neq 0 (
  echo BUILD FAILED. Deploy cancelled.
  pause
  exit /b 1
)

echo.
echo [2/2] Deploying to Firebase (project: sirajone-786)...
cd /d "C:\Users\User\OneDrive\Documents\New project\OUR_LEGACY_APP"
firebase deploy --only hosting

echo.
echo Done. Open: https://sirajone-786.web.app
pause
