@echo off
REM 每日 AI 新聞產生（Task Scheduler 入口）
REM 直接雙擊或由 Task Scheduler 觸發

chcp 65001 > nul
cd /d "%~dp0.."

set LOG_DIR=%~dp0..\logs
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"
set LOG=%LOG_DIR%\daily-news-%DATE:/=-%.log

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0generate-daily-news.ps1" %* >> "%LOG%" 2>&1

exit /b %ERRORLEVEL%
