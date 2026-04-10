// AI 工具日報 — 每日資料檔（由排程自動更新）
// 格式：每個物件代表一天，newest first
// 超過 7 天的資料由排程自動清除
const AI_NEWS_DATA = [
  {
    "date": "2026-04-10",
    "weekday": "星期五",
    "stats": {
      "claude": 7,
      "news": 8,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "<cite index=\"1-10,1-11\">Claude Cowork 正式在 macOS 和 Windows 桌面應用程式中全面上線</cite>",
        "desc": "<cite index=\"1-10,1-12\">提供分析 API、使用情況分析、OpenTelemetry 支援，以及企業計劃的角色存取控制</cite>",
        "url": "https://releasebot.io/updates/anthropic",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "<cite index=\"2-1,2-6\">Anthropic 發布 Claude Mythos Preview，專注網路安全防護</cite>",
        "desc": "<cite index=\"2-3,2-4\">新模型在電腦安全任務表現卓越，啟動 Project Glasswing 協助保護關鍵軟體</cite>",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "devtool",
        "title": "<cite index=\"4-12,4-13\">Claude Managed Agents 公開測試版上線</cite>",
        "desc": "<cite index=\"4-12\">完全託管的代理框架，具備安全沙箱、內建工具和伺服器事件串流</cite>",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "devtool",
        "title": "<cite index=\"4-16,4-17\">推出 ant CLI 命令列工具</cite>",
        "desc": "<cite index=\"4-16\">Claude API 命令列客戶端，與 Claude Code 原生整合，支援 YAML 格式版本控制</cite>",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "<cite index=\"4-25,4-26\">Claude Sonnet 4.6 發布，平衡速度與智能</cite>",
        "desc": "<cite index=\"4-25,4-26,4-27\">改善代理搜尋效能，降低 token 消耗，支援擴展思考和 1M token 上下文</cite>",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "<cite index=\"6-2\">Claude 在 4 月 8 日再次遇到服務中斷問題</cite>",
        "desc": "<cite index=\"6-2,6-4\">用戶回報登入失敗、聊天錯誤，距離前一次重大故障不到 24 小時</cite>",
        "url": "https://www.ibtimes.com.au/claude-ai-down-again-april-8-2026-anthropic-outage-hits-users-after-yesterdays-major-incident-1865761",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "<cite index=\"9-2,9-11\">法院駁回 Anthropic 緊急請求，五角大廈對 Claude 的禁令維持有效</cite>",
        "desc": "<cite index=\"9-13\">口頭辯論定於 5 月 19 日進行，此案件將影響美國政府 AI 採購政策</cite>",
        "url": "https://news.bitcoin.com/federal-judges-deny-anthropic-relief-in-claude-military-ai-ban-set-may-oral-arguments/",
        "tags": [
          "claude"
        ]
      }
    ],
    "news": [
      {
        "title": "<cite index=\"22-1,22-3\">微軟發布 Agent Framework 1.0，統一 Semantic Kernel 和 AutoGen</cite>",
        "desc": "<cite index=\"22-4,22-5\">提供穩定 API、長期支援承諾和企業級多代理協調，支援 MCP 和 A2A 1.0</cite>",
        "url": "https://dev.to/alexmercedcoder/ai-tools-race-heats-up-week-of-april-3-9-2026-37fl",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "<cite index=\"29-1,29-19,29-23\">Meta 推出首個重大 AI 模型 Muse Spark</cite>",
        "desc": "<cite index=\"29-1,29-7\">由 Alexandr Wang 領導的 Meta Superintelligence Labs 開發，支援購物模式和多模態任務</cite>",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tags": [
          "model"
        ]
      },
      {
        "title": "<cite index=\"32-8\">Gemini 3.1 Pro 在 16 項主要基準中領先 13 項</cite>",
        "desc": "<cite index=\"32-8\">與 GPT-5.4 Pro 在人工智能指數上並列第一，API 成本僅為三分之一</cite>",
        "url": "https://renovateqr.com/blog/ai-models-april-2026",
        "tags": [
          "model"
        ]
      },
      {
        "title": "<cite index=\"32-13\">GPT-5.5 (代號 Spud) 完成預訓練</cite>",
        "desc": "<cite index=\"32-16\">2026 年 AI 前沿競爭激烈，Google、Anthropic、OpenAI、xAI 多方競逐</cite>",
        "url": "https://renovateqr.com/blog/ai-models-april-2026",
        "tags": [
          "model"
        ]
      },
      {
        "title": "<cite index=\"32-11\">Google Gemma 4 和 Meta Llama 4 成為頂級開源選擇</cite>",
        "desc": "<cite index=\"32-11\">Gemma 4 採用 Apache 2.0 授權，Llama 4 Maverick 擁有 400B 參數和 10M 上下文</cite>",
        "url": "https://renovateqr.com/blog/ai-models-april-2026",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "<cite index=\"25-14,25-15\">塔夫茨大學研究顯示 AI 能耗可降低 100 倍</cite>",
        "desc": "<cite index=\"25-14,25-15\">神經符號 AI 系統模擬人類批判性推理，顯著提升計算準確度並減少能源消耗</cite>",
        "url": "https://blog.mean.ceo/ai-advancements-news-april-2026/",
        "tags": [
          "model"
        ]
      },
      {
        "title": "<cite index=\"25-17,25-18\">Salesforce 升級 Slack AI 功能</cite>",
        "desc": "<cite index=\"25-17,25-18\">為小型企業提供更易用的先進 AI 功能，Forbes 稱此舉為營運效率遊戲規則改變者</cite>",
        "url": "https://blog.mean.ceo/ai-advancements-news-april-2026/",
        "tags": [
          "tool",
          "app"
        ]
      },
      {
        "title": "<cite index=\"24-1,24-5\">Mimir 在 NAB 2026 展示雲原生編輯和 AI 工具</cite>",
        "desc": "<cite index=\"24-6,24-7\">展示無伺服器製作工作流程，包括 Mimir Cutter 雲端編輯工具和 AI 整合功能</cite>",
        "url": "https://tvnewscheck.com/tech/article/mimir-to-showcase-new-cloud-native-editing-ai-tools-at-nab-2026/",
        "tags": [
          "tool",
          "app"
        ]
      }
    ],
    "hf": [
      {
        "name": "CutClaw",
        "author": "GVC Lab at Great Bay University",
        "desc": "<cite index=\"42-1\">自主多代理框架，使用多模態語言模型自動編輯長視頻為節奏化短視頻</cite>",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "daVinci-MagiHuman",
        "author": "MIT",
        "desc": "<cite index=\"42-17,42-18\">開源音視頻生成模型，透過單流 Transformer 架構同步文本、視頻和音頻</cite>",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Memory Sparse Attention (MSA)",
        "author": "未知",
        "desc": "<cite index=\"42-7\">使大型語言模型能以線性複雜度處理極長上下文，具備高效率</cite>",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "RAG-Anything",
        "author": "未知",
        "desc": "<cite index=\"42-10\">統一框架，通過整合跨模態關係和語義匹配增強多模態知識檢索</cite>",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Gemma-4 Family",
        "author": "Google",
        "desc": "<cite index=\"62-2,62-4\">本週發布的主導模型系列，在 HuggingFace 熱門趨勢中佔據重要位置</cite>",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://github.com/duanyytop/agents-radar/issues/414",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "未知/openclaw",
        "desc": "<cite index=\"51-1,51-4,51-5\">2026 年突破性明星項目，從 9,000 星增長到超過 210,000 星</cite>",
        "stars": "210k+",
        "forks": "N/A",
        "lang": "TypeScript",
        "url": "https://blog.bytebytego.com/p/top-ai-github-repositories-in-2026",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "name": "mempalace",
        "repo": "milla-jovovich/mempalace",
        "desc": "<cite index=\"52-1,52-5\">有史以來基準測試評分最高的 AI 記憶系統，且免費</cite>",
        "stars": "35.7k",
        "forks": "4.5k",
        "lang": "Python",
        "url": "https://trendshift.io/",
        "tags": [
          "tool"
        ]
      },
      {
        "name": "graphify",
        "repo": "safishamsi/graphify",
        "desc": "<cite index=\"52-3,52-7\">將任何程式碼、文檔、論文或圖片資料夾轉換為可查詢的知識圖譜</cite>",
        "stars": "13.5k",
        "forks": "1.4k",
        "lang": "Python",
        "url": "https://trendshift.io/",
        "tags": [
          "tool"
        ]
      },
      {
        "name": "awesome-design-md",
        "repo": "VoltAgent/awesome-design-md",
        "desc": "<cite index=\"52-4,52-8\">收集流行網站設計系統的 DESIGN.md 檔案集合</cite>",
        "stars": "31.2k",
        "forks": "3.9k",
        "lang": "HTML",
        "url": "https://trendshift.io/",
        "tags": [
          "tool"
        ]
      },
      {
        "name": "n8n",
        "repo": "未知/n8n",
        "desc": "<cite index=\"51-15\">開源工作流程自動化平台，結合視覺化無程式碼介面與 AI 功能</cite>",
        "stars": "162k",
        "forks": "N/A",
        "lang": "TypeScript",
        "url": "https://blog.bytebytego.com/p/top-ai-github-repositories-in-2026",
        "tags": [
          "tool",
          "app"
        ]
      }
    ]
  },
  {
    "date": "2026-04-05",
    "weekday": "星期日",
    "stats": {
      "claude": 6,
      "news": 7,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Anthropic 開放 Claude 整合 Outlook、OneDrive 與 SharePoint",
        "desc": "Anthropic 將 Claude 開放給所有方案使用者，可直接連結 Outlook、OneDrive 及 SharePoint，即時存取郵件與檔案，無需手動上傳，對標 Microsoft Copilot。",
        "url": "https://www.newsbytesapp.com/news/science/anthropic-opens-claude-to-all-plans-rivals-microsoft-copilot/tldr",
        "tags": [
          "claude",
          "app"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 訂閱不再涵蓋第三方 Agent 工具，4/17 前可換取抵用金",
        "desc": "自 4/4 起 Claude Pro/Max 訂閱禁止接入 OpenClaw 等第三方工具，Anthropic 稱需保護基礎設施容量。用戶可在 4/17 前兌換一個月等值抵用金，或享額外用量包七折優惠。",
        "url": "https://www.roborhythms.com/anthropic-blocks-openclaw-claude-subscription-2026/",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 新增無閃爍渲染、命名子代理與插件可執行檔",
        "desc": "設定 CLAUDE_CODE_NO_FLICKER=1 啟用 alt-screen 無閃爍捲動；@ 提及可呼叫命名子代理；插件可在 bin 目錄附帶可執行檔；MCP 工具結果持久化上限升至 500K。",
        "url": "https://github.com/anthropics/claude-code/releases",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code /powerup 互動式學習課程正式上線",
        "desc": "新增 /powerup 指令提供動畫展示的互動學習課程，教導 Claude Code 核心功能。同步改善 resume 流程、新增 hook 事件，修復對話框、捲動與 PowerShell 權限問題。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "tutorial",
        "title": "45 個 Claude Code 實用技巧：從基礎到進階完整指南",
        "desc": "涵蓋自訂狀態列腳本、將系統提示精簡一半、用 Gemini CLI 當子代理、容器化執行等進階技巧，GitHub 已超過 4K 星。",
        "url": "https://github.com/ykdojo/claude-code-tips",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "企業 Agentic AI 市場達 $75.1 億，MCP 生態持續擴大",
        "desc": "2026 年企業 Agentic AI 市場規模達 75.1 億美元（CAGR 27.3%）。MCP 已有 200+ 伺服器實作，由 Linux Foundation 旗下 AAIF 管理，Claude、Cursor、Zed 均原生支援。",
        "url": "https://cloud.google.com/resources/content/ai-agent-trends-2026",
        "tags": [
          "claude",
          "open"
        ]
      }
    ],
    "news": [
      {
        "title": "Microsoft 發表三款 MAI 模型：語音轉錄、語音生成與圖像生成",
        "desc": "Microsoft 推出 MAI-Transcribe-1（25 種語言語音轉錄，速度為 Azure Fast 的 2.5 倍）、MAI-Voice-1（語音生成）和 MAI-Image-2（圖像生成速度提升 2 倍以上），均可透過 Foundry 使用。",
        "url": "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/",
        "tags": [
          "model",
          "tool"
        ]
      },
      {
        "title": "GPT-5.4 Thinking 在桌面任務基準首次超越人類表現",
        "desc": "OpenAI GPT-5.4 Thinking 版本在 OSWorld-Verified 桌面生產力測試中得分 75%，可自主操作檔案、瀏覽器與終端機，標誌 AI 首次在真實桌面任務超越人類水準。",
        "url": "https://www.devflokers.com/blog/ai-news-last-24-hours-april-2026-model-releases-breakthroughs",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "Alibaba Qwen 3.5-Omni：原生全模態大模型支援 113 種語言",
        "desc": "阿里巴巴推出 Qwen 3.5-Omni，可處理超過 10 小時音訊與 400 秒 720P 影片，支援 113 種語言與方言的語音辨識，為真正的全模態模型。",
        "url": "https://llm-stats.com/ai-news",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "Google Gemini 3.1 Flash Live 全球 200+ 國家上線",
        "desc": "Gemini 3.1 Flash Live 成為最快的即時語音 AI，已在 200+ 國家透過 Google Search 提供服務，支援免手操作即時對話與問題排除。",
        "url": "https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/",
        "tags": [
          "model",
          "app"
        ]
      },
      {
        "title": "Krea AI 即時視覺渲染工具搜尋量暴增",
        "desc": "Krea AI 以即時視覺渲染技術爆紅，可將簡單線條塗鴉即時轉換為逼真 8K 圖像，搜尋量持續攀升，成為四月最受關注的 AI 創作工具。",
        "url": "https://www.aitechboss.com/trending-ai-tools-right-now-2026/",
        "tags": [
          "tool",
          "app"
        ]
      },
      {
        "title": "OpenAI 估值 $852B，ChatGPT 超級應用整合聊天、搜尋與 Agent",
        "desc": "OpenAI 完成新一輪融資估值達 8,520 億美元，同時推出 ChatGPT 超級應用，將聊天、編碼、搜尋與 Agent 功能整合至單一體驗。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "app",
          "agent"
        ]
      },
      {
        "title": "Q1 2026 科技業裁員 45,000+，兩成明確歸因 AI 自動化",
        "desc": "2026 年第一季科技產業已裁撤超過 45,000 個職位，其中 20% 明確指出 AI 為裁員原因，凸顯 AI 對就業市場的結構性衝擊加速。",
        "url": "https://bostoninstituteofanalytics.org/blog/agentic-ai-weekly-roundup-march-29-april-3-2026-biggest-breakthroughs-risks-trends/",
        "tags": [
          "agent"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-R1",
        "author": "deepseek-ai",
        "desc": "推理增強文字生成模型，下載量超過 274 萬次，持續蟬聯最受歡迎開源模型。",
        "downloads": "2.7M",
        "likes": "13.1K",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "FLUX.1-dev",
        "author": "black-forest-labs",
        "desc": "基於 Diffusers 架構的文字生成圖片模型，Stable Diffusion 生態系重要新成員。",
        "downloads": "678K",
        "likes": "12.6K",
        "url": "https://huggingface.co/black-forest-labs/FLUX.1-dev",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Stable Diffusion XL Base 1.0",
        "author": "stabilityai",
        "desc": "Stability AI 旗艦圖片生成模型，社群最廣泛使用的基礎模型。",
        "downloads": "2.0M",
        "likes": "7.6K",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Stable Diffusion v1-4",
        "author": "CompVis",
        "desc": "開啟開源圖片生成時代的經典模型，社群衍生模型眾多。",
        "downloads": "460K",
        "likes": "7.0K",
        "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Meta Llama 3 8B",
        "author": "meta-llama",
        "desc": "80 億參數開源語言模型，同量級表現出色，適合本地部署與微調。",
        "downloads": "3.3M",
        "likes": "6.5K",
        "url": "https://huggingface.co/meta-llama/Meta-Llama-3-8B",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "AutoGPT",
        "repo": "Significant-Gravitas/AutoGPT",
        "desc": "可自主執行任務的 AI 智能體框架，最受歡迎的 AI 開源專案之一。",
        "stars": "183,131",
        "forks": "46,212",
        "lang": "Python",
        "url": "https://github.com/Significant-Gravitas/AutoGPT",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Awesome ChatGPT Prompts",
        "repo": "f/prompts.chat",
        "desc": "社群驅動的 Prompt 資源庫，可分享、發現和收集提示詞，已開放自架。",
        "stars": "157,448",
        "forks": "20,619",
        "lang": "HTML",
        "url": "https://github.com/f/prompts.chat",
        "tags": [
          "open",
          "tool"
        ]
      },
      {
        "name": "LLMs-from-scratch",
        "repo": "rasbt/LLMs-from-scratch",
        "desc": "用 PyTorch 從零實作類 ChatGPT 的 LLM，學習 LLM 原理的最佳教材。",
        "stars": "89,974",
        "forks": "13,763",
        "lang": "Jupyter",
        "url": "https://github.com/rasbt/LLMs-from-scratch",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Deep-Live-Cam",
        "repo": "hacksider/Deep-Live-Cam",
        "desc": "即時換臉與一鍵深度偽造影片工具，僅需一張照片即可運作。",
        "stars": "88,475",
        "forks": "12,838",
        "lang": "Python",
        "url": "https://github.com/hacksider/Deep-Live-Cam",
        "tags": [
          "app",
          "open"
        ]
      },
      {
        "name": "OpenHands",
        "repo": "OpenHands/OpenHands",
        "desc": "AI 驅動開發平台，自動化軟體開發流程，支援 Claude AI 和 ChatGPT。",
        "stars": "70,581",
        "forks": "8,844",
        "lang": "Python",
        "url": "https://github.com/OpenHands/OpenHands",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-04-04",
    "weekday": "星期六",
    "stats": {
      "claude": 7,
      "news": 8,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Code 原始碼因 npm 打包錯誤意外洩漏",
        "desc": "Anthropic 在 4/1 因流程錯誤意外釋出 Claude Code 內部原始碼，約 1,900 個檔案、512,000 行程式碼曝光。官方已緊急處理並歸因於快速產品發布週期中的疏失。",
        "url": "https://www.bloomberg.com/news/articles/2026-04-01/anthropic-accidentally-releases-source-code-for-claude-ai-agent",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "1M Token 上下文視窗 Beta 將於 4/30 退役",
        "desc": "Claude Sonnet 4.5 和 Sonnet 4 的 1M token 上下文視窗 Beta 將於月底結束。新一代 Opus 4.6 與 Sonnet 4.6 已內建完整 1M 上下文支援。",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Message Batches API 支援 300K max_tokens 輸出",
        "desc": "Opus 4.6 和 Sonnet 4.6 在 Batches API 上的輸出上限提升至 300K tokens，搭配 output-300k-2026-03-24 beta 標頭即可啟用。",
        "url": "https://releasebot.io/updates/anthropic",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 四月更新：互動式 /powerup 與效能提升",
        "desc": "新增互動式 /powerup 學習課程、更快的 resume 流程、新 hook 事件，並修復對話框、編輯、捲動、PowerShell 權限等多項問題。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Q1 回顧：Computer Use、Auto Mode、遠端控制全面上線",
        "desc": "2026 Q1 密集推出 Computer Use 直接操控 Mac 應用、Auto Mode 減少人工監督、Cloud Auto-Fix 自動修復 CI 失敗、排程任務支援週期性開發工作。",
        "url": "https://www.geeky-gadgets.com/claude-code-channels/",
        "tags": [
          "claude",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "tutorial",
        "title": "50 個 Claude Code 日常使用技巧與最佳實踐",
        "desc": "從基礎到進階的完整指南：善用 /clear 保持上下文精簡、用 \"think\" 觸發深度推理、透過 Skills 按需載入知識、Plan Mode 先規劃後執行。",
        "url": "https://www.builder.io/blog/claude-code-tips-best-practices",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "MCP 生態系 2026：200+ 伺服器整合、多平台原生支援",
        "desc": "Model Context Protocol 已發展 200+ 伺服器實作，涵蓋 GitHub、Slack、Google Drive、PostgreSQL 等。Claude、Cursor、Windsurf、Zed 均原生支援。",
        "url": "https://lumichats.com/blog/model-context-protocol-mcp-complete-guide-2026",
        "tags": [
          "claude",
          "open"
        ]
      }
    ],
    "news": [
      {
        "title": "OpenAI 發表 GPT-5.4：百萬 Token 上下文 + 自主多步驟工作流",
        "desc": "GPT-5.4 支援百萬 token 上下文視窗，可自主執行多步驟工作流程，在真實桌面生產力任務中達到 75% 得分。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "Famous.ai：用自然語言描述即可自動建立完整電商網站",
        "desc": "Famous Labs 推出 AI 電商平台，只需文字描述即可生成專業線上商店，內建支付處理，零程式碼快速開店。",
        "url": "https://www.globenewswire.com/news-release/2026/04/02/3267747/0/en/Famous-Labs-Launches-Famous-ai-to-Give-Every-Entrepreneur-a-Fast-and-Professional-Online-Store.html",
        "tags": [
          "app",
          "tool"
        ]
      },
      {
        "title": "Yahoo 推出 Scout AI 搜尋引擎，底層採用 Anthropic 技術",
        "desc": "Yahoo 為 2.5 億美國使用者推出 AI 回答引擎 Scout，由 Anthropic 技術驅動，直接挑戰 Google、OpenAI 及 Perplexity。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "app"
        ]
      },
      {
        "title": "華為發表 950PR 推論晶片，搶攻 AI 基礎設施市場",
        "desc": "華為推出新一代 950PR 推論晶片，大幅提升推論運算速度，強化國產 AI 基礎設施供應鏈。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "AWS 推出自主智能體服務，自動化企業營運作業",
        "desc": "AWS 發表全新自主智能體服務，可自動處理營運任務流程，降低企業維運複雜度。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "Codenotary AgentMon：AI 智能體行為監控工具上線",
        "desc": "AgentMon 幫助企業追蹤 AI 智能體行為模式、檔案存取與資料流向，為 AI 治理提供可觀察性基礎。",
        "url": "https://aiagentstore.ai/ai-agent-news/this-week",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "Fujitsu Application Transform：AI 讀取遺留程式碼自動生成設計文件",
        "desc": "能自動讀取舊系統程式碼並產出設計文件，速度提升 97%，文件品質提高 60%，加速企業系統現代化。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "tool",
          "app"
        ]
      },
      {
        "title": "Klient PSA：8 個 AI 智能體搭配人類顧問的混合式專案交付",
        "desc": "結合 8 個專業 AI 智能體與人類顧問協作，每用戶月費 $15 加每智能體 $1,000，探索人機協作新模式。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "agent"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-R1",
        "author": "deepseek-ai",
        "desc": "推理增強文字生成模型，下載量超過 258 萬次，最受歡迎的開源模型之一。",
        "downloads": "2.6M",
        "likes": "13.1K",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "FLUX.1-dev",
        "author": "black-forest-labs",
        "desc": "文字生成圖片模型，基於 Diffusers 架構，Stable Diffusion 生態系的重要新成員。",
        "downloads": "687K",
        "likes": "12.6K",
        "url": "https://huggingface.co/black-forest-labs/FLUX.1-dev",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Stable Diffusion XL Base 1.0",
        "author": "stabilityai",
        "desc": "Stability AI 旗艦圖片生成模型，社群最廣泛使用的基礎模型。",
        "downloads": "2.0M",
        "likes": "7.6K",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Stable Diffusion v1-4",
        "author": "CompVis",
        "desc": "開啟開源圖片生成時代的經典模型，社群衍生模型眾多。",
        "downloads": "461K",
        "likes": "7.0K",
        "url": "https://huggingface.co/CompVis/stable-diffusion-v1-4",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Meta Llama 3 8B",
        "author": "meta-llama",
        "desc": "80 億參數開源語言模型，同量級表現出色，適合本地部署與微調。",
        "downloads": "3.3M",
        "likes": "6.5K",
        "url": "https://huggingface.co/meta-llama/Meta-Llama-3-8B",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "AutoGPT",
        "repo": "Significant-Gravitas/AutoGPT",
        "desc": "可自主執行任務的 AI 智能體框架，最受歡迎的 AI 開源專案之一。",
        "stars": "183,120",
        "forks": "46,219",
        "lang": "Python",
        "url": "https://github.com/Significant-Gravitas/AutoGPT",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Awesome ChatGPT Prompts",
        "repo": "f/prompts.chat",
        "desc": "社群驅動的 Prompt 資源庫，可分享、發現和收集提示詞，已開放自架。",
        "stars": "157,171",
        "forks": "20,603",
        "lang": "HTML",
        "url": "https://github.com/f/prompts.chat",
        "tags": [
          "open",
          "tool"
        ]
      },
      {
        "name": "LLMs-from-scratch",
        "repo": "rasbt/LLMs-from-scratch",
        "desc": "用 PyTorch 從零實作類 ChatGPT 的 LLM，學習 LLM 原理的最佳教材。",
        "stars": "89,916",
        "forks": "13,737",
        "lang": "Jupyter",
        "url": "https://github.com/rasbt/LLMs-from-scratch",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Deep-Live-Cam",
        "repo": "hacksider/Deep-Live-Cam",
        "desc": "即時換臉與一鍵深度偽造影片工具，僅需一張照片即可運作。",
        "stars": "87,862",
        "forks": "12,732",
        "lang": "Python",
        "url": "https://github.com/hacksider/Deep-Live-Cam",
        "tags": [
          "app",
          "open"
        ]
      },
      {
        "name": "OpenHands",
        "repo": "OpenHands/OpenHands",
        "desc": "AI 驅動開發平台，自動化軟體開發流程，支援 Claude AI 和 ChatGPT。",
        "stars": "70,525",
        "forks": "8,834",
        "lang": "Python",
        "url": "https://github.com/OpenHands/OpenHands",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  }
];
