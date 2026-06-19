@echo off
echo OUR LEGACY - Build + Deploy
echo.

echo [1/2] Building...
cd /d "%~dp0apps\web"
call npm run build
if %ERRORLEVEL% neq 0 (
  echo BUILD FAILED.
  pause
  exit /b 1
)

echo.
echo [2/2] Deploying...
cd /d "%~dp0"
firebase deploy --only hosting

echo.
echo Done.
pause
