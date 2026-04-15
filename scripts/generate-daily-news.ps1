param([switch]$NoPush)

# 強制 UTF-8，避免中文/日誌亂碼
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 > $null

$ErrorActionPreference = "Stop"

# 專案根目錄（本腳本位於 scripts/，往上一層即是）
$ROOT = Split-Path -Parent $PSScriptRoot
Set-Location $ROOT

# 找 claude.exe（照 compare.ps1 的動態搜尋模式）
$CLAUDE_BASE = "$env:APPDATA\Claude\claude-code"
$CLAUDE = (Get-ChildItem -Path $CLAUDE_BASE -Filter "claude.exe" -Recurse -ErrorAction SilentlyContinue |
           Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
if (-not $CLAUDE) {
    # 後備：npm 全域安裝
    $CLAUDE = (Get-Command claude.cmd -ErrorAction SilentlyContinue).Source
}
if (-not $CLAUDE) {
    Write-Host "找不到 claude 執行檔" -ForegroundColor Red
    exit 1
}

# 以今日日期填入 prompt 變數
$TW_NOW = (Get-Date).ToUniversalTime().AddHours(8)
$DATE_STR = $TW_NOW.ToString("yyyy-MM-dd")
$YEAR = $TW_NOW.ToString("yyyy")
$MONTH_EN = $TW_NOW.ToString("MMMM", [System.Globalization.CultureInfo]::InvariantCulture)
$MONTH_NUM = $TW_NOW.Month
$WEEKDAYS = @("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
$WEEKDAY = $WEEKDAYS[[int]$TW_NOW.DayOfWeek]

# 讀 prompt 範本並替換變數
$PROMPT_PATH = Join-Path $ROOT "scripts\daily-news-prompt.md"
$prompt = Get-Content -Path $PROMPT_PATH -Encoding utf8 -Raw
$prompt = $prompt.Replace("{DATE}", $DATE_STR)
$prompt = $prompt.Replace("{WEEKDAY}", $WEEKDAY)
$prompt = $prompt.Replace("{YEAR}", $YEAR)
$prompt = $prompt.Replace("{MONTH_EN}", $MONTH_EN)
$prompt = $prompt.Replace("{MONTH_NUM}", $MONTH_NUM.ToString())

# 把 prompt 暫存到檔案（避免命令列長度限制 + 特殊字元 escape）
$TMPFILE = "$env:TEMP\daily_news_prompt.txt"
Set-Content -Path $TMPFILE -Value $prompt -Encoding utf8

Write-Host "=== 每日 AI 新聞產生 ===" -ForegroundColor Cyan
Write-Host "日期：$DATE_STR $WEEKDAY"
Write-Host "Claude：$CLAUDE"
Write-Host ""

$env:CLAUDECODE = $null

# 呼叫 claude --print 產生 today.json（Write 工具會直接寫到 news/today.json）
& $CLAUDE --dangerously-skip-permissions --model claude-sonnet-4-20250514 --print (Get-Content $TMPFILE -Raw -Encoding utf8)

if ($LASTEXITCODE -ne 0) {
    Write-Host "Claude 執行失敗 (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

# 驗證 today.json 已產出
$TODAY_JSON = Join-Path $ROOT "news\today.json"
if (-not (Test-Path $TODAY_JSON)) {
    Write-Host "today.json 未產出，流程中止" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== 合併到 ai-news-data.js ===" -ForegroundColor Cyan

# 找 python（專案內無 venv，用系統 python）
$PYTHON = (Get-Command python -ErrorAction SilentlyContinue).Source
if (-not $PYTHON) {
    $PYTHON = (Get-Command py -ErrorAction SilentlyContinue).Source
}
if (-not $PYTHON) {
    Write-Host "找不到 python" -ForegroundColor Red
    exit 1
}

$mergeArgs = @("$ROOT\scripts\merge-news.py")
if (-not $NoPush) { $mergeArgs += "--push" }

& $PYTHON @mergeArgs

if ($LASTEXITCODE -ne 0) {
    Write-Host "合併失敗 (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

# 清掉暫存 today.json，避免下次被當成舊資料誤合併
Remove-Item $TODAY_JSON -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "✅ 完成" -ForegroundColor Green
