// AI 工具日報 — 每日資料檔（由排程自動更新）
// 格式：每個物件代表一天，newest first
// 超過 7 天的資料由排程自動清除
const AI_NEWS_DATA = [
  {
    "date": "2026-04-05",
    "weekday": "星期日",
    "stats": { "claude": 6, "news": 7, "hf": 5, "gh": 5 },
    "claude": [
      {
        "sub": "product",
        "title": "Claude 訂閱不再涵蓋第三方工具，OpenClaw 用戶需額外付費",
        "desc": "自 4/4 起 Claude 訂閱用戶無法再直接將模型接入 OpenClaw 等第三方 Agent 工具，需改用 API 按量付費或另購方案。Anthropic 稱此舉為控制濫用與成本。",
        "url": "https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/",
        "tags": ["claude", "tool"]
      },
      {
        "sub": "product",
        "title": "Anthropic 據報測試 Conway 常駐 AI 智能體",
        "desc": "Anthropic 正在測試名為 Conway 的 always-on AI 智能體，可在背景持續運行、自主瀏覽網頁、執行多步驟工作流，無需持續人工提示。",
        "url": "https://blog.mean.ceo/ai-agents-news-april-2026/",
        "tags": ["claude", "agent"]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 新增 Flicker-Free 渲染與命名子代理",
        "desc": "設定 CLAUDE_CODE_NO_FLICKER=1 啟用無閃爍虛擬捲動，新增命名子代理（named subagents）至 @ 提及建議，MCP 工具結果持久化上限提升至 500K。",
        "url": "https://github.com/anthropics/claude-code/releases",
        "tags": ["claude", "tool"]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 支援多行深連結與插件可執行檔",
        "desc": "新版支援多行 deep links、讓插件在 bin 目錄附帶可執行檔、修復 rate-limit 對話框無限循環導致 session 崩潰的問題。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": ["claude", "tool"]
      },
      {
        "sub": "tutorial",
        "title": "Claude Cowork 進階指南：50+ 實測技巧涵蓋插件、Skills 與記憶",
        "desc": "完整 Cowork 進階手冊，涵蓋插件安裝、Skills 動態載入、子代理調度、排程任務、記憶管理等 50+ 技巧與最佳實踐。",
        "url": "https://karozieminski.substack.com/p/claude-cowork-guide-plugins-memory-sub-agents-tips",
        "tags": ["claude"]
      },
      {
        "sub": "ecosystem",
        "title": "MCP 正式移交 Linux Foundation，跨平台採用持續擴大",
        "desc": "Model Context Protocol 已捐贈至 Linux Foundation 旗下 Agentic AI Foundation，由 Anthropic、Block、OpenAI 共同管理，200+ 伺服器實作涵蓋主流服務。",
        "url": "https://lumichats.com/blog/model-context-protocol-mcp-complete-guide-2026",
        "tags": ["claude", "open"]
      }
    ],
    "news": [
      {
        "title": "GPT-5.4 Thinking 在桌面任務基準首次超越人類表現",
        "desc": "OpenAI GPT-5.4 Thinking 版本在 OSWorld-Verified 桌面生產力測試中得分 75%，較 GPT-5.2 提升 27.7 個百分點，標誌著 AI 首次在該基準超越人類水準。",
        "url": "https://www.devflokers.com/blog/ai-news-last-24-hours-april-2026-model-releases-breakthroughs",
        "tags": ["model"]
      },
      {
        "title": "Google Gemini 3.1 Flash Live 全球 200+ 國家上線",
        "desc": "Gemini 3.1 Flash Live 成為最快的即時語音 AI，已在 200+ 國家透過 Google Search 提供服務，支援免手操作對話與即時問題排除。",
        "url": "https://www.devflokers.com/blog/ai-news-last-24-hours-april-2026-model-releases-breakthroughs",
        "tags": ["model", "app"]
      },
      {
        "title": "OpenClaw 成為 GitHub 史上最快達 302K 星的開源專案",
        "desc": "前身為 Clawdbot 的 OpenClaw 突破 30 萬顆星，可在本地執行 shell 命令、管理檔案、透過 WhatsApp/Telegram 自動化網頁任務，成為最熱門自主 Agent 框架。",
        "url": "https://auraboros.ai/blog/yesterday-ai-agents-2026-04-01",
        "tags": ["agent", "open"]
      },
      {
        "title": "Microsoft Copilot 新增多模型協作與 Critique 交叉審核功能",
        "desc": "Microsoft Copilot 平台升級，允許 GPT 與 Claude 等多模型在單一工作流中協作，新 Critique 功能讓一個模型生成、另一個模型審核，提升輸出準確度。",
        "url": "https://www.marketingprofs.com/opinions/2026/54505/ai-update-april-3-2026-ai-news-and-views-from-the-past-week",
        "tags": ["tool", "agent"]
      },
      {
        "title": "Noah Labs Vox 獲 FDA 認證：五秒語音即可偵測心臟衰竭",
        "desc": "Noah Labs 的 Vox AI 獲得 FDA 突破性設備認定，僅需五秒語音錄音即可偵測心臟衰竭，為 AI 醫療診斷樹立新里程碑。",
        "url": "https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/",
        "tags": ["app"]
      },
      {
        "title": "OpenAI 估值 $852B，推出 ChatGPT 超級應用整合聊天、搜尋與 Agent",
        "desc": "OpenAI 完成新一輪融資估值達 8,520 億美元，同時推出 ChatGPT 超級應用，將聊天、編碼、搜尋與 Agent 功能整合至單一體驗。",
        "url": "https://www.buildez.ai/blog/ai-trending-april-2026-developments",
        "tags": ["app", "agent"]
      },
      {
        "title": "Sakana AI 的 AI Scientist 自動化科研全流程",
        "desc": "Sakana AI 推出 The AI Scientist，可自動完成點子生成、資料分析到自我同儕審查的完整科研流程，幫助新創大幅降低研發成本與時間。",
        "url": "https://blog.mean.ceo/open-source-ai-news-april-2026/",
        "tags": ["tool", "open"]
      }
    ],
    "hf": [
      { "name": "DeepSeek-R1", "author": "deepseek-ai", "desc": "推理增強文字生成模型，下載量超過 274 萬次，持續蟬聯最受歡迎開源模型。", "downloads": "2.7M", "likes": "13.1K", "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1", "tags": ["model", "open"] },
      { "name": "FLUX.1-dev", "author": "black-forest-labs", "desc": "基於 Diffusers 架構的文字生成圖片模型，Stable Diffusion 生態系重要新成員。", "downloads": "678K", "likes": "12.6K", "url": "https://huggingface.co/black-forest-labs/FLUX.1-dev", "tags": ["model", "open"] },
      { "name": "Stable Diffusion XL Base 1.0", "author": "stabilityai", "desc": "Stability AI 旗艦圖片生成模型，社群最廣泛使用的基礎模型。", "downloads": "2.0M", "likes": "7.6K", "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0", "tags": ["model", "open"] },
      { "name": "Stable Diffusion v1-4", "author": "CompVis", "desc": "開啟開源圖片生成時代的經典模型，社群衍生模型眾多。", "downloads": "460K", "likes": "7.0K", "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4", "tags": ["model", "open"] },
      { "name": "Meta Llama 3 8B", "author": "meta-llama", "desc": "80 億參數開源語言模型，同量級表現出色，適合本地部署與微調。", "downloads": "3.3M", "likes": "6.5K", "url": "https://huggingface.co/meta-llama/Meta-Llama-3-8B", "tags": ["model", "open"] }
    ],
    "gh": [
      { "name": "AutoGPT", "repo": "Significant-Gravitas/AutoGPT", "desc": "可自主執行任務的 AI 智能體框架，最受歡迎的 AI 開源專案之一。", "stars": "183,120", "forks": "46,216", "lang": "Python", "url": "https://github.com/Significant-Gravitas/AutoGPT", "tags": ["agent", "open"] },
      { "name": "Awesome ChatGPT Prompts", "repo": "f/prompts.chat", "desc": "社群驅動的 Prompt 資源庫，可分享、發現和收集提示詞，已開放自架。", "stars": "157,427", "forks": "20,619", "lang": "HTML", "url": "https://github.com/f/prompts.chat", "tags": ["open", "tool"] },
      { "name": "LLMs-from-scratch", "repo": "rasbt/LLMs-from-scratch", "desc": "用 PyTorch 從零實作類 ChatGPT 的 LLM，學習 LLM 原理的最佳教材。", "stars": "89,957", "forks": "13,756", "lang": "Jupyter", "url": "https://github.com/rasbt/LLMs-from-scratch", "tags": ["model", "open"] },
      { "name": "Deep-Live-Cam", "repo": "hacksider/Deep-Live-Cam", "desc": "即時換臉與一鍵深度偽造影片工具，僅需一張照片即可運作。", "stars": "88,331", "forks": "12,814", "lang": "Python", "url": "https://github.com/hacksider/Deep-Live-Cam", "tags": ["app", "open"] },
      { "name": "OpenHands", "repo": "OpenHands/OpenHands", "desc": "AI 驅動開發平台，自動化軟體開發流程，支援 Claude AI 和 ChatGPT。", "stars": "70,566", "forks": "8,843", "lang": "Python", "url": "https://github.com/OpenHands/OpenHands", "tags": ["agent", "open"] }
    ]
  },
  {
    "date": "2026-04-04",
    "weekday": "星期六",
    "stats": { "claude": 7, "news": 8, "hf": 5, "gh": 5 },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Code 原始碼因 npm 打包錯誤意外洩漏",
        "desc": "Anthropic 在 4/1 因流程錯誤意外釋出 Claude Code 內部原始碼，約 1,900 個檔案、512,000 行程式碼曝光。官方已緊急處理並歸因於快速產品發布週期中的疏失。",
        "url": "https://www.bloomberg.com/news/articles/2026-04-01/anthropic-accidentally-releases-source-code-for-claude-ai-agent",
        "tags": ["claude", "tool"]
      },
      {
        "sub": "product",
        "title": "1M Token 上下文視窗 Beta 將於 4/30 退役",
        "desc": "Claude Sonnet 4.5 和 Sonnet 4 的 1M token 上下文視窗 Beta 將於月底結束。新一代 Opus 4.6 與 Sonnet 4.6 已內建完整 1M 上下文支援。",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": ["claude", "model"]
      },
      {
        "sub": "product",
        "title": "Message Batches API 支援 300K max_tokens 輸出",
        "desc": "Opus 4.6 和 Sonnet 4.6 在 Batches API 上的輸出上限提升至 300K tokens，搭配 output-300k-2026-03-24 beta 標頭即可啟用。",
        "url": "https://releasebot.io/updates/anthropic",
        "tags": ["claude", "model"]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 四月更新：互動式 /powerup 與效能提升",
        "desc": "新增互動式 /powerup 學習課程、更快的 resume 流程、新 hook 事件，並修復對話框、編輯、捲動、PowerShell 權限等多項問題。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": ["claude", "tool"]
      },
      {
        "sub": "devtool",
        "title": "Q1 回顧：Computer Use、Auto Mode、遠端控制全面上線",
        "desc": "2026 Q1 密集推出 Computer Use 直接操控 Mac 應用、Auto Mode 減少人工監督、Cloud Auto-Fix 自動修復 CI 失敗、排程任務支援週期性開發工作。",
        "url": "https://www.geeky-gadgets.com/claude-code-channels/",
        "tags": ["claude", "tool", "agent"]
      },
      {
        "sub": "tutorial",
        "title": "50 個 Claude Code 日常使用技巧與最佳實踐",
        "desc": "從基礎到進階的完整指南：善用 /clear 保持上下文精簡、用 \"think\" 觸發深度推理、透過 Skills 按需載入知識、Plan Mode 先規劃後執行。",
        "url": "https://www.builder.io/blog/claude-code-tips-best-practices",
        "tags": ["claude"]
      },
      {
        "sub": "ecosystem",
        "title": "MCP 生態系 2026：200+ 伺服器整合、多平台原生支援",
        "desc": "Model Context Protocol 已發展 200+ 伺服器實作，涵蓋 GitHub、Slack、Google Drive、PostgreSQL 等。Claude、Cursor、Windsurf、Zed 均原生支援。",
        "url": "https://lumichats.com/blog/model-context-protocol-mcp-complete-guide-2026",
        "tags": ["claude", "open"]
      }
    ],
    "news": [
      {
        "title": "OpenAI 發表 GPT-5.4：百萬 Token 上下文 + 自主多步驟工作流",
        "desc": "GPT-5.4 支援百萬 token 上下文視窗，可自主執行多步驟工作流程，在真實桌面生產力任務中達到 75% 得分。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": ["model", "agent"]
      },
      {
        "title": "Famous.ai：用自然語言描述即可自動建立完整電商網站",
        "desc": "Famous Labs 推出 AI 電商平台，只需文字描述即可生成專業線上商店，內建支付處理，零程式碼快速開店。",
        "url": "https://www.globenewswire.com/news-release/2026/04/02/3267747/0/en/Famous-Labs-Launches-Famous-ai-to-Give-Every-Entrepreneur-a-Fast-and-Professional-Online-Store.html",
        "tags": ["app", "tool"]
      },
      {
        "title": "Yahoo 推出 Scout AI 搜尋引擎，底層採用 Anthropic 技術",
        "desc": "Yahoo 為 2.5 億美國使用者推出 AI 回答引擎 Scout，由 Anthropic 技術驅動，直接挑戰 Google、OpenAI 及 Perplexity。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": ["app"]
      },
      {
        "title": "華為發表 950PR 推論晶片，搶攻 AI 基礎設施市場",
        "desc": "華為推出新一代 950PR 推論晶片，大幅提升推論運算速度，強化國產 AI 基礎設施供應鏈。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": ["tool"]
      },
      {
        "title": "AWS 推出自主智能體服務，自動化企業營運作業",
        "desc": "AWS 發表全新自主智能體服務，可自動處理營運任務流程，降低企業維運複雜度。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": ["agent", "tool"]
      },
      {
        "title": "Codenotary AgentMon：AI 智能體行為監控工具上線",
        "desc": "AgentMon 幫助企業追蹤 AI 智能體行為模式、檔案存取與資料流向，為 AI 治理提供可觀察性基礎。",
        "url": "https://aiagentstore.ai/ai-agent-news/this-week",
        "tags": ["agent", "tool"]
      },
      {
        "title": "Fujitsu Application Transform：AI 讀取遺留程式碼自動生成設計文件",
        "desc": "能自動讀取舊系統程式碼並產出設計文件，速度提升 97%，文件品質提高 60%，加速企業系統現代化。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": ["tool", "app"]
      },
      {
        "title": "Klient PSA：8 個 AI 智能體搭配人類顧問的混合式專案交付",
        "desc": "結合 8 個專業 AI 智能體與人類顧問協作，每用戶月費 $15 加每智能體 $1,000，探索人機協作新模式。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": ["agent"]
      }
    ],
    "hf": [
      { "name": "DeepSeek-R1", "author": "deepseek-ai", "desc": "推理增強文字生成模型，下載量超過 258 萬次，最受歡迎的開源模型之一。", "downloads": "2.6M", "likes": "13.1K", "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1", "tags": ["model", "open"] },
      { "name": "FLUX.1-dev", "author": "black-forest-labs", "desc": "文字生成圖片模型，基於 Diffusers 架構，Stable Diffusion 生態系的重要新成員。", "downloads": "687K", "likes": "12.6K", "url": "https://huggingface.co/black-forest-labs/FLUX.1-dev", "tags": ["model", "open"] },
      { "name": "Stable Diffusion XL Base 1.0", "author": "stabilityai", "desc": "Stability AI 旗艦圖片生成模型，社群最廣泛使用的基礎模型。", "downloads": "2.0M", "likes": "7.6K", "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0", "tags": ["model", "open"] },
      { "name": "Stable Diffusion v1-4", "author": "CompVis", "desc": "開啟開源圖片生成時代的經典模型，社群衍生模型眾多。", "downloads": "461K", "likes": "7.0K", "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4", "tags": ["model", "open"] },
      { "name": "Meta Llama 3 8B", "author": "meta-llama", "desc": "80 億參數開源語言模型，同量級表現出色，適合本地部署與微調。", "downloads": "3.3M", "likes": "6.5K", "url": "https://huggingface.co/meta-llama/Meta-Llama-3-8B", "tags": ["model", "open"] }
    ],
    "gh": [
      { "name": "AutoGPT", "repo": "Significant-Gravitas/AutoGPT", "desc": "可自主執行任務的 AI 智能體框架，最受歡迎的 AI 開源專案之一。", "stars": "183,120", "forks": "46,219", "lang": "Python", "url": "https://github.com/Significant-Gravitas/AutoGPT", "tags": ["agent", "open"] },
      { "name": "Awesome ChatGPT Prompts", "repo": "f/prompts.chat", "desc": "社群驅動的 Prompt 資源庫，可分享、發現和收集提示詞，已開放自架。", "stars": "157,171", "forks": "20,603", "lang": "HTML", "url": "https://github.com/f/prompts.chat", "tags": ["open", "tool"] },
      { "name": "LLMs-from-scratch", "repo": "rasbt/LLMs-from-scratch", "desc": "用 PyTorch 從零實作類 ChatGPT 的 LLM，學習 LLM 原理的最佳教材。", "stars": "89,916", "forks": "13,737", "lang": "Jupyter", "url": "https://github.com/rasbt/LLMs-from-scratch", "tags": ["model", "open"] },
      { "name": "Deep-Live-Cam", "repo": "hacksider/Deep-Live-Cam", "desc": "即時換臉與一鍵深度偽造影片工具，僅需一張照片即可運作。", "stars": "87,862", "forks": "12,732", "lang": "Python", "url": "https://github.com/hacksider/Deep-Live-Cam", "tags": ["app", "open"] },
      { "name": "OpenHands", "repo": "OpenHands/OpenHands", "desc": "AI 驅動開發平台，自動化軟體開發流程，支援 Claude AI 和 ChatGPT。", "stars": "70,525", "forks": "8,834", "lang": "Python", "url": "https://github.com/OpenHands/OpenHands", "tags": ["agent", "open"] }
    ]
  }
];
