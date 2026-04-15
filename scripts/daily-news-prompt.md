# 每日 AI 新聞產生指令

你是 AI 工具日報的編輯。現在要產生今天（{DATE} {WEEKDAY}）的 AI 新聞資料。

## 分區結構（三區，不需要 HuggingFace 或 GitHub 熱門專案）

1. **claude**（7 則）：Anthropic / Claude 相關新聞，子分類 `product` / `devtool` / `tutorial` / `ecosystem`
2. **news**（7 則）：Claude 以外的 AI 產業新聞（新模型、新工具、產業動態），Claude 相關新聞不要放這裡
3. **skill**（5 則）：熱門的 Claude Agent Skills（非一般終端用戶「AI 工具」，而是 `.claude/skills` 可安裝的 skill）

## 執行步驟

### Step 1：並行搜尋（6 個關鍵字）

用 WebSearch 工具並行跑：
- `Claude Anthropic news {MONTH_EN} {YEAR}`
- `Claude Code update {YEAR} release notes`
- `Claude Code 新功能 {YEAR} 繁體中文`
- `AI model release {MONTH_EN} {YEAR}`
- `好用的 AI 工具 推薦 {YEAR} {MONTH_NUM}月`
- `Claude Code skills marketplace {YEAR} 熱門`

### Step 2：補抓繁中來源

用 WebFetch 跑 Google News RSS 抓繁中文章（動區、iThome、數位時代、INSIDE、TechNews、ABMedia 等會出現在結果中）：
- URL: `https://news.google.com/rss/search?q=Claude+Anthropic&hl=zh-TW&gl=TW&ceid=TW:zh-Hant`
- 提示：「列出最近 15 則新聞的標題、來源、發布日期、連結」

### Step 3：產出 JSON

整理成以下格式，直接用 Write 工具寫到 `news/today.json`：

```json
{
  "date": "{DATE}",
  "weekday": "{WEEKDAY}",
  "stats": { "claude": 7, "news": 7, "skill": 5 },
  "claude": [
    {
      "sub": "product|devtool|tutorial|ecosystem",
      "title": "標題（繁體中文）",
      "desc": "描述（繁體中文，80 字內）",
      "url": "真實來源網址（WebSearch 或 WebFetch 實際給的）",
      "tags": ["claude", "tool|model|app|open|agent"]
    }
  ],
  "news": [
    { "title": "...", "desc": "...", "url": "...", "tags": ["model|tool|app|agent|open"] }
  ],
  "skill": [
    { "name": "Skill 名稱", "author": "Anthropic|社群|作者名", "source": "官方|marketplace 名稱", "desc": "用途描述（80 字內）", "url": "GitHub 或安裝頁 URL", "tags": ["skill", "tool|app|agent"] }
  ]
}
```

## 硬規則（違反即失敗）

1. **url 必須是 WebSearch / WebFetch 結果實際回傳的網址**，禁止憑印象拼 URL
2. **繁中來源佔比至少 30%**（claude + news 合計 14 則中至少 4 則用繁中媒體）
3. 所有 title/desc 用繁體中文
4. stats 的數字必須等於各陣列長度
5. **禁止加入 hf（HuggingFace）或 gh（GitHub 熱門專案）區**
6. skill 區來源優先順序：[anthropics/skills](https://github.com/anthropics/skills) 官方 > Composio Top 10 / awesome-claude-skills > skillsmp.com
7. 寫完 `news/today.json` 後，回覆「完成」即可，不要自己合併到 ai-news-data.js（合併由 ps1 腳本處理）

## 繁中媒體白名單（優先引用）

- 數位時代 bnext.com.tw
- iThome ithome.com.tw
- INSIDE inside.com.tw
- 動區動趨 blocktempo.com
- 鏈新聞 abmedia.io
- TechNews 科技新報 technews.tw
- ETtoday ettoday.net
- Manager Today managertoday.com.tw
- 商周 businessweekly.com.tw
