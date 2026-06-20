@echo off
cd /d "%~dp0"
echo Deploying Phase 2A P2 — Continue Reading...
firebase deploy --only hosting
echo Done.
pause
