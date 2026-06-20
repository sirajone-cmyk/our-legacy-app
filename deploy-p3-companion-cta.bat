@echo off
cd /d "%~dp0"
echo Deploying Phase 2A P3 — Companion CTA moved to Reflection page...
firebase deploy --only hosting
echo Done.
pause
