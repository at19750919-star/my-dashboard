# 每日 AI 新聞排程設定

## 架構

```
Task Scheduler（每日 09:00）
  ↓
generate-daily-news.bat
  ↓
generate-daily-news.ps1
  ├─ claude --print（讀 daily-news-prompt.md → 產出 news/today.json）
  └─ python merge-news.py --push（合併進 ai-news-data.js → git push）
```

## 檔案

| 檔案 | 用途 |
|------|------|
| `scripts/daily-news-prompt.md` | 給 Claude 的 prompt 範本（可手動編輯微調） |
| `scripts/generate-daily-news.ps1` | 主流程（Claude → merge → push） |
| `scripts/generate-daily-news.bat` | Task Scheduler 入口（含 log 重導向） |
| `scripts/merge-news.py` | 合併 today.json 到 ai-news-data.js + git push |
| `logs/daily-news-YYYY-MM-DD.log` | 每日執行 log |

## 手動測試

```powershell
cd C:\Users\at197\OneDrive\Desktop\my-dashboard
# 跑完整流程（含 git push）
powershell -ExecutionPolicy Bypass -File scripts\generate-daily-news.ps1

# 僅本地更新、不 push
powershell -ExecutionPolicy Bypass -File scripts\generate-daily-news.ps1 -NoPush
```

## Windows Task Scheduler 設定

### 方法 A：GUI（推薦）

1. `Win+R` → 輸入 `taskschd.msc` → Enter
2. 右側「建立工作」（Create Task，**不是** Create Basic Task）
3. **一般**：
   - 名稱：`Daily AI News`
   - 勾「不論使用者登入與否均執行」→ 不勾（避免密碼問題）
   - 勾「以最高權限執行」
4. **觸發**：
   - 新增 → 「依排程」→ 每天 → 時間 09:00
   - 勾「已啟用」
5. **動作**：
   - 新增 → 「啟動程式」
   - 程式：`C:\Users\at197\OneDrive\Desktop\my-dashboard\scripts\generate-daily-news.bat`
   - 開始位置：`C:\Users\at197\OneDrive\Desktop\my-dashboard`
6. **條件**：
   - 取消勾「只有在電腦以 AC 電源供電時才啟動工作」（筆電用）
   - 勾「喚醒電腦執行此工作」
7. **設定**：
   - 勾「如果工作未依排程執行則盡速執行」（關機時略過會補跑）

### 方法 B：PowerShell 一鍵建立（以系統管理員開啟 PowerShell）

```powershell
$action = New-ScheduledTaskAction `
    -Execute "C:\Users\at197\OneDrive\Desktop\my-dashboard\scripts\generate-daily-news.bat" `
    -WorkingDirectory "C:\Users\at197\OneDrive\Desktop\my-dashboard"

$trigger = New-ScheduledTaskTrigger -Daily -At 9:00am

$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -WakeToRun `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries

Register-ScheduledTask `
    -TaskName "Daily AI News" `
    -Action $action `
    -Trigger $trigger `
    -Settings $settings `
    -RunLevel Highest
```

## 排錯

### 日誌位置
`C:\Users\at197\OneDrive\Desktop\my-dashboard\logs\daily-news-YYYY-MM-DD.log`

### 常見問題

- **claude.exe 找不到**：確認 Claude Code 已安裝（`C:\Users\at197\AppData\Roaming\Claude\claude-code\*\claude.exe`）或 npm 版本（`where claude`）
- **git push 失敗**：先在終端跑一次 `git push` 確認 credentials（`gh auth setup-git` 可注入 gh CLI token）
- **today.json 未產出**：查 log 看 Claude 回應；常見原因是 WebSearch 全部失敗或 Write 工具未被呼叫
- **中文亂碼**：`.bat` 已設 `chcp 65001`，若仍亂碼請確認終端字型為支援 CJK 的字型

## 手動補跑（某天漏跑）

```powershell
# 編輯 prompt 裡的 {DATE} → 改 .ps1 的 $DATE_STR 寫死某天（或臨時改 system time）
# 較簡單做法：直接在該日期當天手動跑 .bat
```
