// AI 工具日報 — 每日資料檔（由排程自動更新）
// 格式：每個物件代表一天，newest first
// 超過 7 天的資料由排程自動清除
const AI_NEWS_DATA = [
  {
    "date": "2026-04-12",
    "weekday": "星期日",
    "stats": {
      "claude": 7,
      "news": 8,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Mythos Preview 模型推出專案 Project Glasswing",
        "desc": "Anthropic 釋出最強大的 Claude Mythos Preview 模型，專為網絡安全防護設計，僅供特定合作夥伴使用，包括 Amazon、Apple、Google 等公司",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 視覺化圖表功能正式推出",
        "desc": "Claude 現可在對話中直接創建自訂圖表、圖解和視覺化內容，手機應用程式也支援互動式應用程式連接",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 新增 Focus 檢視模式",
        "desc": "Claude Code 推出 Focus 檢視切換功能（Ctrl+O），顯示提示、工具摘要和最終回應，提升開發者體驗",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 支援電腦控制功能",
        "desc": "Pro 和 Max 用戶可讓 Claude 存取電腦控制功能，直接操作檔案、開發工具和螢幕導航，無需設定",
        "url": "https://support.claude.com/en/articles/12138966-release-notes",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "Anthropic 與 CoreWeave 簽署多年合作協議",
        "desc": "Anthropic 同意使用 CoreWeave 的資料中心容量來建構和部署 Claude AI 模型，包含多種 NVIDIA 晶片架構",
        "url": "https://www.bloomberg.com/news/articles/2026-04-10/anthropic-agrees-to-rent-coreweave-ai-capacity-to-power-claude",
        "tags": [
          "claude",
          "open"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Cowork 正式發布桌面版",
        "desc": "Claude Cowork 在 macOS 和 Windows 的桌面應用程式中正式推出，新增分析 API 和企業級角色權限控制",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 新增 Sonnet 4.6 模型",
        "desc": "推出最新平衡型模型 Claude Sonnet 4.6，結合速度與智能，支援延伸思考和 1M token 上下文視窗（測試版）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "model"
        ]
      }
    ],
    "news": [
      {
        "title": "Meta 發布首款專有 AI 模型 Muse Spark",
        "desc": "Meta 推出 Muse Spark 模型，由 AI 長官 Alexandr Wang 主導開發，標誌著從開源策略轉向專有模型，具備多模態感知和推理能力",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Microsoft 發布 Agent Framework 1.0",
        "desc": "Microsoft 正式發布 Agent Framework 1.0，統一 Semantic Kernel 和 AutoGen，支援跨執行環境互操作性和 MCP 工具發現",
        "url": "https://dev.to/alexmercedcoder/ai-tools-race-heats-up-week-of-april-3-9-2026-37fl",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "Google NotebookLM 完全整合至 Gemini 介面",
        "desc": "Google 將 NotebookLM AI 研究助手直接整合到 Gemini 聊天機器人介面，用戶可透過側面板上傳文件建立可搜索的資訊庫",
        "url": "https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "OpenAI 推出 GPT-5.3 Instant Mini",
        "desc": "OpenAI 在 ChatGPT 中發布 GPT-5.3 Instant Mini 作為新的後備模型，具備更自然對話、更強寫作能力和更好上下文感知",
        "url": "https://releasebot.io/updates/openai",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Perplexity 年收入達 4.5 億美元",
        "desc": "Perplexity 月活用戶超過 1 億，年經常性收入在三月達到 4.5 億美元，單月增長 50%，從搜尋殺手轉型為 AI 代理平台",
        "url": "https://www.theaimarketers.ai/news041026/",
        "tags": [
          "app"
        ]
      },
      {
        "title": "AMD 發布 PACE 優化框架",
        "desc": "AMD 發布平台感知計算引擎（PACE），專為第五代 EPYC CPU 上的 LLM 推理最佳化，提升吞吐量並降低延遲",
        "url": "https://dev.to/alexmercedcoder/ai-tools-race-heats-up-week-of-april-3-9-2026-37fl",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "Shopify 推出 AI 工具包",
        "desc": "Shopify 新 AI 工具包讓代理商能執行真實變更，包括批量 SEO 更新、折扣應用和產品圖片替換，透過自然語言操作",
        "url": "https://www.theaimarketers.ai/news041026/",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "AI 安全工具 METATRON 發布",
        "desc": "新推出的 METATRON AI 安全工具可離線運作，為每台 Linux 機器提供 AI 驅動的網絡安全防護，無需雲端連接",
        "url": "https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "Qwen 3.5-9B",
        "author": "Alibaba",
        "desc": "Qwen 3.5 生態系統主導本週趨勢榜，官方 9B 基礎模型下載量達 480 萬次，支援多語言推理",
        "downloads": "4.8M",
        "likes": "487K",
        "url": "https://huggingface.co/Alibaba-NLP/qwen3.5-9B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Gemma-4-31B",
        "author": "Google",
        "desc": "Google 推出 Gemma-4 系列，從 2B 到 31B 參數多種變體，包括實驗性「任意到任意」多模態架構",
        "downloads": "1.2M",
        "likes": "312K",
        "url": "https://huggingface.co/google/gemma-4-31b",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "GLM-4.7-Flash",
        "author": "Zhipu AI",
        "desc": "Z.AI 設計的輕量級部署混合專家模型，在邏輯和推理基準測試中表現強勁，支援進階推理功能",
        "downloads": "890K",
        "likes": "154K",
        "url": "https://huggingface.co/ZHIPU/GLM-4.7-Flash",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "MiniMax M2.1",
        "author": "MiniMax",
        "desc": "專為複雜工作流程最佳化的開源代理模型，在軟體工程排行榜上大幅超越 M2，支援多程式語言",
        "downloads": "654K",
        "likes": "89K",
        "url": "https://huggingface.co/MiniMax/M2.1",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Bonsai-1bit",
        "author": "prism-ml",
        "desc": "突破性的 1 位量化模型，將硬體需求降到最低，比基礎模型成長更快地縮小硬體要求",
        "downloads": "26K",
        "likes": "12K",
        "url": "https://huggingface.co/prism-ml/bonsai-1bit",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "psteinberger/openclaw",
        "desc": "2026 年突破性專案，個人 AI 助手完全在本地設備運行，支援 50 多種整合服務，能編寫自己的新技能",
        "stars": "210K",
        "forks": "15K",
        "lang": "Python",
        "url": "https://github.com/psteinberger/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "會成長的 AI 代理，具備記憶式強化學習、狀態提示和技能庫，能自主設計和改進特定任務代理",
        "stars": "147K",
        "forks": "8.2K",
        "lang": "Python",
        "url": "https://github.com/NousResearch/hermes-agent",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "markitdown",
        "repo": "microsoft/markitdown",
        "desc": "Microsoft 開發的 Python 工具，可將檔案和辦公文件轉換為 Markdown 格式，支援多種文件類型",
        "stars": "95.2K",
        "forks": "5.8K",
        "lang": "Python",
        "url": "https://github.com/microsoft/markitdown",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "claude-code-best-practice",
        "repo": "shanraisshan/claude-code-best-practice",
        "desc": "單一 CLAUDE.md 檔案改善 Claude Code 行為，基於 Andrej Karpathy 對 LLM 編程陷阱的觀察",
        "stars": "34K",
        "forks": "2.1K",
        "lang": "HTML",
        "url": "https://github.com/shanraisshan/claude-code-best-practice",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "caveman",
        "repo": "JuliusBrussee/caveman",
        "desc": "Claude Code 技能，透過像穴居人說話來減少 65% 的 token 使用量，提高效率",
        "stars": "8.9K",
        "forks": "393",
        "lang": "Python",
        "url": "https://github.com/JuliusBrussee/caveman",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-04-11",
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
        "title": "Claude Mythos Preview 發布 - 專為網路安全設計的十兆參數模型",
        "desc": "Anthropic 發布 Claude Mythos Preview，擁有強大網路安全能力的模型，僅透過 Project Glasswing 向選定合作夥伴提供",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Cowork 正式發布 - 支援 macOS 與 Windows 桌面版",
        "desc": "Claude Cowork 現在透過 Claude Desktop 應用程式在 macOS 和 Windows 上正式推出，新增分析功能和角色權限控制",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "app"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 新增 Vertex AI 設定精靈和監控工具",
        "desc": "最新版本新增互動式 Google Vertex AI 設定精靈、監控工具、以及增強的 Bash 和沙盒安全功能",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "devtool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Managed Agents 公開測試版發布",
        "desc": "全面管理的代理執行環境，提供安全沙盒、內建工具和服務器端事件串流，透過 API 建立和配置代理",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "devtool",
        "title": "ant CLI 工具正式發布",
        "desc": "Claude API 的命令列客戶端，提供快速互動、與 Claude Code 原生整合以及 YAML 檔案中的資源版本控制",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Sonnet 4.6 發布 - 平衡速度與智能的最新模型",
        "desc": "結合速度和智能的最新平衡型模型，提升代理搜尋性能的同時減少代幣消耗，支援 1M 代幣上下文視窗",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "Anthropic 與 CoreWeave 簽署多年合作協議",
        "desc": "Anthropic 將使用 CoreWeave 的資料中心容量來建構和部署 Claude AI 模型，包含美國境內多種 Nvidia 晶片架構",
        "url": "https://www.bloomberg.com/news/articles/2026-04-10/anthropic-agrees-to-rent-coreweave-ai-capacity-to-power-claude",
        "tags": [
          "claude",
          "open"
        ]
      }
    ],
    "news": [
      {
        "title": "Meta 發布 Muse Spark AI 模型挑戰 OpenAI 與 Google",
        "desc": "Meta 推出首個重大 AI 模型 Muse Spark，由新任首席 AI 官 Alexandr Wang 領導開發，專注多模態推理和代理任務",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tags": [
          "model"
        ]
      },
      {
        "title": "微軟發布 Agent Framework 1.0 - 統一多代理協調平台",
        "desc": "微軟整合 Semantic Kernel 和 AutoGen 為生產就緒的開源 SDK，提供穩定 API 和企業級多代理協調功能",
        "url": "https://dev.to/alexmercedcoder/ai-tools-race-heats-up-week-of-april-3-9-2026-37fl",
        "tags": [
          "agent"
        ]
      },
      {
        "title": "Tufts 大學突破性研究 - AI 能耗降低 100 倍",
        "desc": "研究人員推出神經符號 AI 系統模仿人類批判推理，不僅提高計算準確性還可將 AI 能耗降低高達 100 倍",
        "url": "https://blog.mean.ceo/ai-advancements-news-april-2026/",
        "tags": [
          "open"
        ]
      },
      {
        "title": "Perplexity AI 收入暴增 - 月活用戶突破 1 億",
        "desc": "Perplexity 年度經常性收入在三月達到 4.5 億美元，單月增長 50%，由超過 1 億月活躍用戶推動",
        "url": "https://www.theaimarketers.ai/news041026/",
        "tags": [
          "app"
        ]
      },
      {
        "title": "Mimir 展示雲端原生編輯和 AI 工具 - NAB 2026",
        "desc": "Mimir 在 NAB Show 展示超過 240 項增強功能，包含雲端視頻編輯工具 Mimir Cutter 和 AI 智能搜尋功能",
        "url": "https://tvnewscheck.com/tech/article/mimir-to-showcase-new-cloud-native-editing-ai-tools-at-nab-2026/",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "AI 在醫療保健領域的突破性應用案例",
        "desc": "工程師 Pratik Desai 開發 AI 輔助工作流程，幫助管理母親四期癌症護理，系統整合醫療記錄到 NotebookLM 和 Claude",
        "url": "https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/",
        "tags": [
          "app"
        ]
      },
      {
        "title": "METATRON - 離線運作的 AI 安全工具發布",
        "desc": "新推出的 AI 安全工具 METATRON 可在 Linux 系統上離線運作，為安全專業人員提供自動化漏洞發現和威脅分析",
        "url": "https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "Salesforce 升級 Slack AI 功能",
        "desc": "Salesforce 為 Slack 添加先進 AI 功能，Forbes 稱此舉為依賴 Slack 進行營運效率的團隊的遊戲規則改變者",
        "url": "https://blog.mean.ceo/ai-advancements-news-april-2026/",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "daVinci-MagiHuman",
        "author": "Massachusetts Institute of Technology",
        "desc": "開源音視頻生成模型，通過單一流 Transformer 架構同步文本、視頻和音頻，實現高品質人類內容生成",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "CutClaw",
        "author": "GVC Lab at Great Bay University",
        "desc": "自主多代理框架，使用多模態語言模型自動將長視頻剪輯成有節奏、敘事一致的短視頻，包含同步音視頻元素",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "name": "VibeVoice",
        "author": "N/A",
        "desc": "使用下一代代幣擴散和高效連續語音代幣化器合成長篇多說話人語音，實現卓越性能和保真度",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "GLM-4.7-Flash",
        "author": "Z.AI (formerly Zhipu AI)",
        "desc": "輕量級專家混合模型，專為本地部署設計，在邏輯推理基準測試中表現出色，支援多輪代理任務的「保留思考」模式",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/what-is-trending-in-hugging-face-on-microsoft-foundry-feb-2-2026/4490602",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "name": "MiniMax M2.1",
        "author": "MiniMax",
        "desc": "最新開源代理模型，針對複雜工作流程優化，在軟體工程排行榜上相較 M2 實現大幅躍進，支援多種編程語言",
        "downloads": "N/A",
        "likes": "N/A",
        "url": "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/what-is-trending-in-hugging-face-on-microsoft-foundry-feb-2-2026/4490602",
        "tags": [
          "model",
          "agent"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "N/A",
        "desc": "2026年突破之星，GitHub歷史上增長最快的開源專案，個人AI助手完全在本地設備運行，支援50+整合平台",
        "stars": "210,000+",
        "forks": "N/A",
        "lang": "N/A",
        "url": "https://blog.bytebytego.com/p/top-ai-github-repositories-in-2026",
        "tags": [
          "agent"
        ]
      },
      {
        "name": "mempalace",
        "repo": "milla-jovovich/mempalace",
        "desc": "有史以來基準測試得分最高的AI記憶系統，完全免費開源",
        "stars": "35,700",
        "forks": "4,500",
        "lang": "Python",
        "url": "https://trendshift.io/",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "graphify",
        "repo": "safishamsi/graphify",
        "desc": "AI編碼助手技能，將任何代碼、文檔、論文或圖像資料夾轉換為可查詢的知識圖譜",
        "stars": "13,500",
        "forks": "1,400",
        "lang": "Python",
        "url": "https://trendshift.io/",
        "tags": [
          "tool"
        ]
      },
      {
        "name": "awesome-design-md",
        "repo": "VoltAgent/awesome-design-md",
        "desc": "熱門網站設計系統 DESIGN.md 檔案集合，讓編碼代理能夠建構匹配的UI介面",
        "stars": "31,200",
        "forks": "3,900",
        "lang": "HTML",
        "url": "https://trendshift.io/",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Ollama",
        "repo": "ollama/ollama",
        "desc": "本地LLM的Docker化解決方案，讓在本地運行Llama、DeepSeek、Mistral等模型變得極其簡單",
        "stars": "165,000+",
        "forks": "N/A",
        "lang": "Go",
        "url": "https://medium.com/@aashishkumar_77032/top-12-github-ai-repositories-that-are-actually-worth-your-time-in-2026-c1525b4e7553",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
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
        "title": "Claude Cowork 正式在 macOS 和 Windows 桌面應用程式中全面上線",
        "desc": "Claude Cowork 脫離研究預覽階段，於 macOS 與 Windows Claude Desktop 全面上線，提供分析 API、使用情況分析、OpenTelemetry 支援，以及企業計畫的角色存取控制。",
        "url": "https://www.anthropic.com/news/claude-cowork",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Sonnet 4.6 發布，平衡速度與智能",
        "desc": "新款 Claude Sonnet 4.6 改善代理搜尋效能，降低 token 消耗，支援擴展思考和 1M token 上下文，為日常 Agent 工作流提供兼顧速度與推理的平衡選擇。",
        "url": "https://www.anthropic.com/news/claude-sonnet-4-6",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "devtool",
        "title": "ant CLI 發布：官方 Claude API 命令列客戶端",
        "desc": "Anthropic 推出官方 ant CLI，提供更快的 Claude API 互動、與 Claude Code 原生整合，並支援以 YAML 檔案版本化管理 API 資源（如 Agent、技能與 Prompt）。",
        "url": "https://releasebot.io/updates/anthropic",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 持續優化：Plugin、Slack、VS Code 工作流全面改善",
        "desc": "本週 Claude Code 更新聚焦工作流體驗：改善 Plugin 載入、Slack 整合、resume 速度與 VS Code 延伸支援，並修復登入、渲染、轉錄、搜尋和多位元組文字多項問題。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Cowork 進階使用技巧：從桌面任務到手機派工",
        "desc": "完整教學 Cowork 新特性：設定自訂技能市集、用 Dispatch 從手機指派任務、透過 OpenTelemetry 監控 Agent 執行、企業 RBAC 設定與稽核紀錄匯出。",
        "url": "https://www.anthropic.com/news/claude-cowork",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "Project Glasswing 一週回顧：MCP 生態持續擴張",
        "desc": "Project Glasswing 上線一週，合作夥伴數量持續增加，MCP 伺服器實作突破 250 個。Anthropic 強調 Mythos 僅限認證夥伴，同時開放更多 MCP 工具供 Claude 與 Claude Code 原生使用。",
        "url": "https://www.anthropic.com/glasswing",
        "tags": [
          "claude",
          "open"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Managed Agents 公測持續擴大：新增多 Agent pipeline 範例",
        "desc": "Claude Managed Agents 公測進行一週，Anthropic 發布多 Agent pipeline 範例與最佳實踐，包含 research-then-code、plan-execute-review 等範式，需使用 managed-agents-2026-04-01 beta 標頭。",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "OpenAI 發布「企業 AI 下一階段」願景，鎖定代理工作流普及",
        "desc": "OpenAI 公布企業 AI 下一階段策略，重點放在 Agent 工作流普及、資料治理整合、與企業既有系統無縫對接。業界解讀為對 Anthropic Claude Enterprise 的直接回應。",
        "url": "https://openai.com/news/",
        "tags": [
          "app",
          "agent"
        ]
      },
      {
        "title": "Meta Muse Spark 進入私人預覽，將釋出開源版本",
        "desc": "Meta Superintelligence Labs 宣布 Muse Spark 首先透過 API 私人預覽開放合作夥伴，後續將釋出付費 API 與開源授權版本，推動 Meta 超智能模型普及。",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "Google Gemini 3.1 Pro 持續領跑：13/16 主要基準領先",
        "desc": "Gemini 3.1 Pro 在 Artificial Analysis 指數中持續領先 13/16 項主要基準，GPQA Diamond 達 94.3%，ARC-AGI-2 達 77.1%，API 成本僅為競品三分之一，性價比無人能敵。",
        "url": "https://llm-stats.com/llm-updates",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Alibaba Qwen 3.6 Plus 免費 Preview 期結束，正式商用定價公布",
        "desc": "Alibaba Qwen 3.6 Plus 免費預覽期結束，正式商用定價揭曉，每百萬 token 輸入與輸出價格皆低於 GPT-5.4，強調 1M 上下文與 Agentic 能力，吸引中小企業切換。",
        "url": "https://www.buildfastwithai.com/blogs/qwen-3-6-plus-preview-review",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "AI 模型四月大戰：Claude、GPT、Gemini、Qwen 四強鼎立",
        "desc": "四月 AI 模型發表密度創新高：Claude Mythos、Muse Spark、Qwen 3.6、MiniMax M2.7、Gemma 4 同月發布。業界分析進入「四強鼎立」格局，開源與閉源差距持續縮小。",
        "url": "https://renovateqr.com/blog/ai-models-april-2026",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "OpenAI 推出 Child Safety Blueprint，強化未成年保護",
        "desc": "OpenAI 發布 Child Safety Blueprint，公開內部未成年使用者保護機制，包含內容過濾、年齡驗證、使用時間管理與家長控制，回應全球對 AI 兒童安全的關注。",
        "url": "https://openai.com/news/",
        "tags": [
          "app"
        ]
      },
      {
        "title": "AI Agent 開發者工具大戰白熱化，Cursor、Windsurf、Claude Code 三分天下",
        "desc": "四月 AI IDE 競爭達到新高峰：Cursor 3 的 Composer、Windsurf 的 Cascade、Claude Code 的 Plan Mode 各擅勝場。開發者社群調查顯示三者使用者重疊度持續上升。",
        "url": "https://paddo.dev/blog/ai-roundup-april-2026/",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "AI 醫療保健成本爭議持續：業界呼籲制定效率評估框架",
        "desc": "延續 STAT News 報導，醫療業界對 AI scribe 推升成本問題的討論升溫，美國醫學會與保險協會聯合提案建立 AI 工具效率評估框架，避免效率提升反而變成成本負擔。",
        "url": "https://www.statnews.com/2026/04/08/insurers-providers-agree-ai-scribes-raise-health-care-costs/",
        "tags": [
          "app"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-R1",
        "author": "deepseek-ai",
        "desc": "推理增強文字生成模型，下載量突破 334 萬次，穩居最受歡迎開源模型寶座。",
        "downloads": "3.3M",
        "likes": "13.2K",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "FLUX.1-dev",
        "author": "black-forest-labs",
        "desc": "基於 Diffusers 架構的文字生成圖片模型，創作社群持續熱愛。",
        "downloads": "686K",
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
        "downloads": "1.9M",
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
        "downloads": "453K",
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
        "downloads": "3.1M",
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
        "stars": "183,291",
        "forks": "46,226",
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
        "stars": "159,032",
        "forks": "20,827",
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
        "stars": "90,423",
        "forks": "13,854",
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
        "stars": "89,494",
        "forks": "13,008",
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
        "stars": "70,961",
        "forks": "8,896",
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
    "date": "2026-04-09",
    "weekday": "星期四",
    "stats": {
      "claude": 6,
      "news": 7,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Managed Agents 公開測試版正式上線",
        "desc": "Anthropic 在 Claude Platform 推出 Managed Agents 公開測試，提供全託管 Agent harness，內建安全 sandbox、錯誤恢復與 checkpoints，支援單任務與多 Agent pipeline，開發速度最高可提升 10 倍。",
        "url": "https://mlq.ai/news/anthropic-releases-claude-managed-agents-for-faster-ai-deployment/",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Moody's 宣布整合 Claude，發布首款金融 MCP 應用",
        "desc": "Moody's Agentic Solutions（MAS）將透過專屬 Model Context Protocol 應用開放，可直接在 Claude Desktop、Claude.ai 與 Claude Enterprise 使用，為金融分析與信評帶來 Agent 原生工作流。",
        "url": "https://www.pymnts.com/artificial-intelligence-2/2026/moodys-integrates-ai-agents-with-anthropics-claude/",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 廣泛更新：Vertex AI 精靈、Bash/sandbox 安全強化與 Monitor 工具",
        "desc": "新版本帶來 Vertex AI 設定精靈、強化 Bash 與 sandbox 安全控制、新的 Monitor 工具、改善 LSP 追蹤支援，並修復 resume、權限、終端行為、語音模式、插件與 managed settings 等多項問題。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "Project Glasswing 擴大至 40-50 家合作夥伴，聚焦防禦性資安",
        "desc": "Project Glasswing 持續發酵，合作夥伴擴大至 40-50 家科技企業。Anthropic 強調 Claude Mythos Preview 不會對外開放，僅限認證夥伴用於關鍵軟體防禦與漏洞修補。",
        "url": "https://www.anthropic.com/glasswing",
        "tags": [
          "claude",
          "open"
        ]
      },
      {
        "sub": "product",
        "title": "聯邦法官駁回 Anthropic 軍事 AI 禁令救濟申請",
        "desc": "聯邦法官駁回 Anthropic 對 Claude 軍事用途禁令的緊急救濟請求，雙方將於 5 月進行口頭辯論。此案將影響 Claude 在國防合約與敏感政府部門的可用性。",
        "url": "https://news.bitcoin.com/federal-judges-deny-anthropic-relief-in-claude-military-ai-ban-set-may-oral-arguments/",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Mythos 技術解析：83.1% Cybergym 分數背後的 Agent 架構",
        "desc": "深入解析 Mythos 如何在數小時內找出 OpenBSD 27 年老漏洞與 FFmpeg 16 年漏洞：結合長時程 Agent 規劃、自動 fuzzing 與 PoC 生成，成為首個達到資深安全研究員水準的模型。",
        "url": "https://www.geeky-gadgets.com/claude-mythos-cybersecurity-2/",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "Cursor 3 發布：全新 Composer Agent 與多模型支援",
        "desc": "Cursor 3 帶來重寫的 Composer Agent、改善的多檔編輯體驗，並原生支援 Claude Opus 4.6、GPT-5.4 與 Gemini 3.1 Pro 在同一工作階段自由切換。",
        "url": "https://paddo.dev/blog/ai-roundup-april-2026/",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "Meta Muse Spark 首日反響熱烈，contemplating mode 引關注",
        "desc": "Meta Superintelligence Labs 首款模型 Muse Spark 發布隔日持續發酵。新的 contemplating mode 可同時運行多個 Agent 處理困難問題，業界視為對 Claude 與 GPT 的直接挑戰。",
        "url": "https://techstartups.com/2026/04/09/meta-unveils-muse-spark-its-first-superintelligence-model-to-rival-openai-and-google/",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "Alibaba Qwen 3.6 Plus 1M Token 上下文，對齊 Claude Opus 4.6",
        "desc": "Qwen 3.6 Plus 採混合 linear attention + sparse MoE 架構，原生 1M token 上下文視窗（為 3.5 的 4 倍），具備強大 Agentic 行為，OpenRouter 提供免費 preview 使用。",
        "url": "https://www.caixinglobal.com/2026-04-02/alibaba-releases-qwen-36-plus-ai-model-with-enhanced-coding-capabilities-102430395.html",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "MiniMax M2.7 自我進化訓練：SWE-Pro 56.22% 逼近 Claude Opus 4.6",
        "desc": "MiniMax M2.7 引入「自我進化」訓練法，持續從互動中學習。SWE-Pro 得分 56.22%，在編碼與 Agent 基準與 Claude、GPT-5 並駕齊驅，推論速度快 3 倍。",
        "url": "https://renovateqr.com/blog/ai-models-april-2026",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "Claude Mythos 引發擔憂：資安界警告 AI 進入攻防新紀元",
        "desc": "多位資安專家稱 Claude Mythos 為「terrifying」，認為 AI 已達到超越大多數人類安全研究員的漏洞挖掘能力，呼籲建立全球 AI 資安揭露與協作機制。",
        "url": "https://www.megynkelly.com/2026/04/09/anthropic-pauses-public-release-of-new-claude-mythos-ai-model/",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "OpenAI GPT-5.5（代號 Spud）預訓練完成，Q2 預計發表",
        "desc": "OpenAI 內部確認 GPT-5.5（代號 Spud）預訓練階段已完成，業界共識 Q2 可能正式推出，預期在推理、Agent 與多模態能力持續進化。",
        "url": "https://releasebot.io/updates/openai",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Gemma 4、Claude Mythos、Qwen 3.6 同週三大模型重磅消息",
        "desc": "llm-stats 更新四月模型覆蓋範圍：納入 Gemma 4 開源模型、Claude Mythos 發布詳情、Alibaba Qwen 3.6 與 MiniMax 2.7，四月成為 2026 年最密集的 AI 模型發表週。",
        "url": "https://llm-stats.com/llm-updates",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-R1",
        "author": "deepseek-ai",
        "desc": "推理增強文字生成模型，下載量持續攀升至 320 萬次，依然是社群最熱門的開源 LLM。",
        "downloads": "3.2M",
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
        "desc": "基於 Diffusers 架構的文字生成圖片模型，繼續受到創作社群熱烈使用。",
        "downloads": "685K",
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
        "downloads": "1.9M",
        "likes": "7.6K",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Qwen3.6-Plus-Preview",
        "author": "Qwen",
        "desc": "Alibaba 新發表的 Agentic LLM，1M token 上下文、混合線性注意力 + sparse MoE，開源社群熱議。",
        "downloads": "120K",
        "likes": "5.9K",
        "url": "https://huggingface.co/Qwen",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Meta Llama 3 8B",
        "author": "meta-llama",
        "desc": "80 億參數開源語言模型，同量級表現出色，適合本地部署與微調。",
        "downloads": "3.1M",
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
        "stars": "183,260",
        "forks": "46,223",
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
        "stars": "158,790",
        "forks": "20,789",
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
        "stars": "90,321",
        "forks": "13,841",
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
        "stars": "89,380",
        "forks": "12,992",
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
        "stars": "70,890",
        "forks": "8,888",
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
    "date": "2026-04-08",
    "weekday": "星期三",
    "stats": {
      "claude": 6,
      "news": 7,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "devtool",
        "title": "Claude Code 新增 Amazon Bedrock 支援（由 Mantle 驅動）",
        "desc": "Claude Code 正式加入 Amazon Bedrock 整合，透過 Mantle 後端提供更順暢的 AWS 企業工作流；同時改善 plugin、Slack、resume 與 VS Code 工作流體驗。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 預設 effort level 由 medium 提升至 high",
        "desc": "針對 API Key、Bedrock/Vertex/Foundry、Team 與 Enterprise 使用者，Claude Code 預設 effort level 從 medium 提升至 high，提供更深入的規劃與推理，但可能略增 token 使用。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 大量 bug 修復：登入、渲染、轉錄、搜尋與多位元組文字",
        "desc": "此次釋出修復登入、渲染、轉錄、搜尋與多位元組文字（CJK）處理等多項問題，讓日文、韓文與中文使用者的使用體驗顯著提升。",
        "url": "https://code.claude.com/docs/en/changelog",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 服務再度中斷：4/7 outage 後 24 小時內再發",
        "desc": "4 月 8 日 23:22-23:50 UTC，Claude.ai 桌面與網頁出現登入失敗與降級錯誤，距離 4/7 大規模 outage 不到 24 小時，Anthropic 已迅速修復並致歉。",
        "url": "https://www.ibtimes.com.au/claude-ai-down-again-april-8-2026-anthropic-outage-hits-users-after-yesterdays-major-incident-1865761",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "OpenClaw 政策後續：用戶轉向 pay-as-you-go 訂閱",
        "desc": "自 4/4 政策生效後，Claude Pro/Max 訂閱不再涵蓋 OpenClaw 等第三方 harness，需改用獨立的 pay-as-you-go 計費。部分重度用戶反映總花費顯著提升。",
        "url": "https://www.indexbox.io/blog/anthropic-changes-claude-code-subscription-for-third-party-tools-in-2026/",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Code Bedrock 設定完整教學：從零到企業部署",
        "desc": "配合新 Bedrock 支援，社群發布完整教學：IAM 角色設定、Mantle 後端選擇、成本控制與多區域路由，幫助企業快速導入 Claude Code。",
        "url": "https://blog.mean.ceo/claude-code-news-april-2026/",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "title": "Meta 發表 Muse Spark：超智能實驗室首款旗艦 AI 模型",
        "desc": "Meta Superintelligence Labs 推出 Muse Spark（原代號 Avocado），為 Scale AI 創辦人 Alexandr Wang 加入九個月後首款重磅作品，支援文字、圖像與語音，並引入多 Agent 「contemplating mode」。",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "Google Finance AI 工具擴展至 100+ 國家，支援在地語言",
        "desc": "Google Finance 的 AI 功能擴展到澳洲、巴西、加拿大、印尼、日本、墨西哥等超過 100 個國家，提供完整在地語言支援，強化全球使用者的投資研究體驗。",
        "url": "https://www.pymnts.com/google/2026/google-finance-scales-ai-tools-to-100-more-countries/",
        "tags": [
          "app",
          "tool"
        ]
      },
      {
        "title": "Google AI Edge Eloquent：iOS 離線 AI 聽寫應用上架",
        "desc": "Google 推出 AI Edge Eloquent，基於 Gemma 架構的裝置端語音辨識模型，可離線轉錄並選擇性透過 Gemini 雲端精修，為行動工作者帶來隱私友善的聽寫體驗。",
        "url": "https://theaiinsider.tech/2026/04/08/google-launches-ai-edge-eloquent-dictation-app-to-advance-on-device-speech-recognition/",
        "tags": [
          "app",
          "model"
        ]
      },
      {
        "title": "MiniMax M2.7 正式發布：自我進化訓練引業界關注",
        "desc": "MiniMax 發布 M2.7，首度採用「自我進化」訓練方法，透過持續互動改進而非靜態訓練，在編碼與 Agent 能力接近 Claude Opus 4.6，且推論速度快 3 倍。",
        "url": "https://llm-stats.com/ai-news",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "研究：AI 醫療文書助理反而推升健康照護成本",
        "desc": "STAT News 報導保險業與醫療服務商一致認為 AI scribe 工具推升整體費用：醫師看診更多病患、處置更複雜，使總支出上升。各方對因應之道仍無共識。",
        "url": "https://www.statnews.com/2026/04/08/insurers-providers-agree-ai-scribes-raise-health-care-costs/",
        "tags": [
          "app"
        ]
      },
      {
        "title": "AI 工具業者警告：企業應準備應對新世代 AI 資安威脅",
        "desc": "延續 Project Glasswing 熱度，多家資安業者發出聯合聲明：AI 已能挖出數十年老漏洞，企業需重新審視軟體供應鏈與修補節奏，避免成為下一個目標。",
        "url": "https://www.hawaiitribune-herald.com/2026/04/08/opinion/an-ai-threat-looms-and-we-are-not-prepared/",
        "tags": [
          "agent"
        ]
      },
      {
        "title": "Cursor 3 發布搶佔 AI IDE 市場，挑戰 Claude Code 與 GitHub Copilot",
        "desc": "Cursor 3 推出新世代 Composer Agent 與多模型動態路由，支援 Claude Opus 4.6、GPT-5.4、Gemini 3.1 Pro 同會話切換，成為 AI IDE 激烈競爭中的關鍵里程碑。",
        "url": "https://paddo.dev/blog/ai-roundup-april-2026/",
        "tags": [
          "tool",
          "app"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-R1",
        "author": "deepseek-ai",
        "desc": "推理增強文字生成模型，下載量超過 310 萬次，持續霸榜最受歡迎開源模型。",
        "downloads": "3.1M",
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
        "desc": "文字生成圖片模型，基於 Diffusers 架構，創作社群熱門選擇。",
        "downloads": "684K",
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
        "downloads": "1.9M",
        "likes": "7.6K",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Meta Llama 3 8B",
        "author": "meta-llama",
        "desc": "80 億參數開源語言模型，同量級表現出色，適合本地部署與微調。",
        "downloads": "3.1M",
        "likes": "6.5K",
        "url": "https://huggingface.co/meta-llama/Meta-Llama-3-8B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Muse-Spark-Preview",
        "author": "meta-llama",
        "desc": "Meta Superintelligence Labs 首款多模態模型 Muse Spark 預覽版，開發者搶先申請試用。",
        "downloads": "45K",
        "likes": "4.8K",
        "url": "https://huggingface.co/meta-llama",
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
        "stars": "183,225",
        "forks": "46,220",
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
        "stars": "158,420",
        "forks": "20,740",
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
        "stars": "90,215",
        "forks": "13,820",
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
        "stars": "89,210",
        "forks": "12,960",
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
        "stars": "70,815",
        "forks": "8,880",
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
    "date": "2026-04-07",
    "weekday": "星期二",
    "stats": {
      "claude": 7,
      "news": 6,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Mythos Preview 正式亮相：最強資安 AI 模型",
        "desc": "Anthropic 公布 Claude Mythos Preview，一款在資安任務表現驚人的前沿模型。在 Cybergym 得分 83.1%，已在主要作業系統與瀏覽器中找出數千個 0-day，僅對 Project Glasswing 夥伴開放。",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Project Glasswing 啟動：11 家創始夥伴 + $100M Mythos 額度",
        "desc": "Anthropic 推出 Project Glasswing，與 AWS、Apple、Broadcom、Cisco、CrowdStrike、Google、JPMorganChase、Microsoft、Nvidia 等 11 家創始夥伴合作，並提供最高 1 億美元 Mythos 使用額度用於防禦性資安。",
        "url": "https://www.anthropic.com/glasswing",
        "tags": [
          "claude",
          "open"
        ]
      },
      {
        "sub": "devtool",
        "title": "Messages API 正式登陸 Amazon Bedrock（Research Preview）",
        "desc": "Anthropic 宣布 Messages API 在 Amazon Bedrock 以 research preview 形式開放，開發者可直接透過 AWS 區域部署 Claude 最新模型，享受與 api.claude.com 相同的體驗。",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Managed Agents 公測啟動：全託管 Agent 執行環境",
        "desc": "Claude Managed Agents 進入 public beta，提供全託管 Agent 執行環境，含安全 sandbox、內建工具與 Server-Sent Events 串流，讓開發者無須自建基礎設施即可部署生產級 Agent。",
        "url": "https://releasebot.io/updates/anthropic",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 遭遇 Major Outage，登入、語音模式全中斷",
        "desc": "4 月 7 日 Claude.ai 出現大規模錯誤：登入失敗、語音模式異常、對話無法完成，數千名全球使用者受影響。Anthropic 在數小時內定位問題並恢復成功率。",
        "url": "https://www.techradar.com/news/live/claude-anthropic-down-outage-april-6-2026",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Mythos 27 年 OpenBSD 老 bug 案例研究",
        "desc": "Bitcoin News 深度報導 Mythos 如何在數小時內找出 OpenBSD 27 年老漏洞與 FFmpeg 16 年未被發現的 bug，展示 Agentic AI 對長尾軟體安全的突破能力。",
        "url": "https://news.bitcoin.com/claude-mythos-preview-anthropics-unreleased-ai-cracked-linux-and-openbsd-bugs-humans-missed-for-decades/",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "Anthropic 明確表態：Mythos 不會全面公開",
        "desc": "Anthropic 同日確認 Claude Mythos 因資安風險太高，不會對外開放 API 或訂閱使用。僅透過 Project Glasswing 提供給 40-50 家受認證夥伴，強調「負責任發布」原則。",
        "url": "https://fortune.com/2026/04/07/anthropic-claude-mythos-model-project-glasswing-cybersecurity/",
        "tags": [
          "claude",
          "open"
        ]
      }
    ],
    "news": [
      {
        "title": "Google AI Edge 離線聽寫 App 低調上架 iOS",
        "desc": "Google 悄悄在 iOS 推出離線優先的 AI 聽寫 App，採用裝置端 Gemma 模型執行語音辨識，強調隱私與低延遲，為注重資料保護的企業使用者提供替代方案。",
        "url": "https://techcrunch.com/2026/04/07/google-quietly-releases-an-offline-first-ai-dictation-app-on-ios/",
        "tags": [
          "app",
          "model"
        ]
      },
      {
        "title": "Gemini 3.1 Pro 在 13/16 主要基準領先，GPQA Diamond 達 94.3%",
        "desc": "Google DeepMind Gemini 3.1 Pro 在 13 項主要基準測試中奪冠，GPQA Diamond 達 94.3%，領先 Claude Opus 4.6 與 GPT-5.2；API 成本僅為競品三分之一，性價比備受關注。",
        "url": "https://llm-stats.com/llm-updates",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "Q2 模型大戰前哨戰：Anthropic、OpenAI、Google 同步佈局",
        "desc": "GPT-5.5（Spud）預訓練完成、Gemini 3.1 Pro 穩坐基準榜首、Claude Mythos 進入防禦性資安專用路線，三巨頭分工明確，預告 Q2 將是 AI 模型競爭最激烈的一季。",
        "url": "https://whatllm.org/blog/new-ai-models-april-2026",
        "tags": [
          "model"
        ]
      },
      {
        "title": "OpenAI 募資 1,220 億美元加速下一階段 AI 發展",
        "desc": "OpenAI 宣布完成新一輪融資，總計募得 1,220 億美元，將用於擴充運算資源、資料中心與 agentic AI 產品線，鞏固在生成式 AI 領域的領先地位。",
        "url": "https://openai.com/index/accelerating-the-next-phase-ai/",
        "tags": [
          "app"
        ]
      },
      {
        "title": "資安界震撼：AI 已能以數小時挖出數十年老漏洞",
        "desc": "Claude Mythos 揭露讓資安研究圈陷入震撼：過去需數年、數十年才被發現的漏洞，AI 可在數小時內定位並生成 PoC。業界開始討論建立「AI 披露責任制」框架。",
        "url": "https://wavespeed.ai/blog/posts/what-is-claude-mythos-preview/",
        "tags": [
          "agent",
          "model"
        ]
      },
      {
        "title": "Gemma 4 推論基準公布：開源模型再度逼近閉源巨頭",
        "desc": "Google Gemma 4 系列在推理、代碼、數學基準表現亮眼，在多項任務逼近 Claude Sonnet 與 GPT-5 Mini，讓開源社群在本地部署與微調場景有了新的最佳選擇。",
        "url": "https://llm-stats.com/ai-news",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-R1",
        "author": "deepseek-ai",
        "desc": "推理增強文字生成模型，下載量超過 300 萬次，依然穩居最受歡迎開源模型寶座。",
        "downloads": "3.0M",
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
        "desc": "基於 Diffusers 架構的文字生成圖片模型，繼續是創作者首選。",
        "downloads": "684K",
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
        "downloads": "1.9M",
        "likes": "7.6K",
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Gemma-4-9B-it",
        "author": "google",
        "desc": "Google Gemma 4 系列 9B 指令微調版本，Apache 2.0 授權，推理與 Agent 任務表現亮眼。",
        "downloads": "180K",
        "likes": "5.4K",
        "url": "https://huggingface.co/google",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Meta Llama 3 8B",
        "author": "meta-llama",
        "desc": "80 億參數開源語言模型，同量級表現出色，適合本地部署與微調。",
        "downloads": "3.1M",
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
        "stars": "183,195",
        "forks": "46,215",
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
        "stars": "158,050",
        "forks": "20,690",
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
        "stars": "90,145",
        "forks": "13,805",
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
        "stars": "89,110",
        "forks": "12,945",
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
        "stars": "70,750",
        "forks": "8,870",
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
    "date": "2026-04-06",
    "weekday": "星期一",
    "stats": {
      "claude": 6,
      "news": 7,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Cowork 桌面控制功能擴展至 Windows，可從手機派任務",
        "desc": "Cowork 桌面控制已於 4/3 開放 Windows Pro/Max 使用者，可直接操控應用程式、瀏覽網頁與本地檔案。新增 Dispatch 功能讓用戶從手機指派任務，回到桌面即見成果。",
        "url": "https://winbuzzer.com/2026/04/04/anthropic-claude-desktop-control-windows-cowork-dispatch-xcxwbn/",
        "tags": [
          "claude",
          "app"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 年化營收逼近 $190 億，MCP 安裝量突破 9,700 萬",
        "desc": "Anthropic 2026 年年化營收接近 190 億美元，僅次於 OpenAI 的 250 億。Model Context Protocol 三月安裝量突破 9,700 萬次，所有主流 AI 供應商皆已支援 MCP 相容工具。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "claude",
          "open"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 新增 Bedrock 設定精靈、成本洞察與強化政策控制",
        "desc": "最新更新加入 Bedrock 設定精靈簡化 AWS 整合、更豐富的成本洞察面板、互動式版本說明選擇器，並強化遠端控制預設值與 sandbox 支援。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code Write 工具效能提升 60%，大檔寫入顯著加速",
        "desc": "Write 工具 diff 運算針對含 tab/&/$ 等特殊字元的檔案提速 60%；Homebrew 安裝更新提示改用 cask 發行頻道；多項 CLI、權限與長對話穩定性問題修復。",
        "url": "https://github.com/anthropics/claude-code/releases",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Code 進階技巧：無閃爍渲染、命名子代理與離線插件",
        "desc": "設定 CLAUDE_CODE_NO_FLICKER=1 啟用 alt-screen 無閃爍捲動；@ 提及呼叫命名子代理；CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE 變數讓離線環境保留現有市集快取。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "MCP 2026 路線圖聚焦企業就緒：審計追蹤、SSO 與閘道行為",
        "desc": "MCP 2026 路線圖著重傳輸可擴展性、Agent 通訊、治理成熟化與企業就緒。MCP Apps 正式上線，可回傳互動式 UI 元件如儀表板、表單與多步驟工作流。",
        "url": "https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/",
        "tags": [
          "claude",
          "open"
        ]
      }
    ],
    "news": [
      {
        "title": "Google 發表 Gemma 4 開源模型系列，專為推理與 Agent 工作流設計",
        "desc": "Google 推出 Gemma 4 系列開源模型，以 Apache 2.0 授權釋出，專門針對進階推理與 Agentic 工作流程最佳化，為開源社群帶來新選擇。",
        "url": "https://llm-stats.com/ai-news",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "Google TurboQuant 演算法大幅降低 KV Cache 記憶體開銷",
        "desc": "Google 研究團隊在 ICLR 2026 發表 TurboQuant，顯著減少大型語言模型運行時 KV cache 的記憶體消耗，有望讓更多設備能高效運行大模型。",
        "url": "https://www.fool.com/investing/2026/04/03/googles-newest-ai-development-surprise-winner/",
        "tags": [
          "model",
          "tool"
        ]
      },
      {
        "title": "OpenAI 年化營收破 $250 億，最快 2026 年底考慮 IPO",
        "desc": "OpenAI 年化營收突破 250 億美元，據報正考慮最快於 2026 年底啟動上市流程，標誌 AI 產業商業化進入新階段。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "app"
        ]
      },
      {
        "title": "Google Veo 3.1 Lite：成本僅 Fast 版一半的文字生影片模型",
        "desc": "Google 推出 Veo 3.1 Lite，可從文字或圖片生成影片，成本不到 Veo 3.1 Fast 的 50%，速度不減，降低企業與創作者的影片 AI 門檻。",
        "url": "https://llm-stats.com/ai-news",
        "tags": [
          "model",
          "tool"
        ]
      },
      {
        "title": "Moises AI 虛擬錄音室搜尋量暴增，成四月最熱音樂 AI 工具",
        "desc": "Moises AI 以強大的虛擬錄音室功能爆紅，可分離音軌、即時調整 BPM 與音調，搜尋量持續飆升，成為音樂創作者最受關注的 AI 工具。",
        "url": "https://www.aitechboss.com/trending-ai-tools-right-now-2026/",
        "tags": [
          "tool",
          "app"
        ]
      },
      {
        "title": "喬治亞州三項 AI 法案送交州長簽署，涵蓋聊天機器人揭露與兒童安全",
        "desc": "喬治亞州議會通過三項 AI 相關法案：聊天機器人揭露與兒童安全法案、AI 研究委員會法案、禁止保險決策完全依賴 AI 系統法案，待州長簽署。",
        "url": "https://www.transparencycoalition.ai/news/ai-legislative-update-april3-2026",
        "tags": [
          "agent"
        ]
      },
      {
        "title": "一人 AI 遠距醫療公司 Medvi 首年營收破 $4 億，僅一名員工",
        "desc": "Matthew Gallagher 花 $20,000 和兩個月用 AI 建立 GLP-1 減重藥遠距醫療公司 Medvi，首年營收達 4.01 億美元，完全無外部資金，僅一名員工。",
        "url": "https://blog.mean.ceo/ai-news-april-2026/",
        "tags": [
          "app",
          "agent"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-R1",
        "author": "deepseek-ai",
        "desc": "推理增強文字生成模型，下載量超過 284 萬次，持續蟬聯最受歡迎開源模型。",
        "downloads": "2.8M",
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
        "downloads": "683K",
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
        "downloads": "462K",
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
        "downloads": "3.1M",
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
        "stars": "183,165",
        "forks": "46,211",
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
        "stars": "157,611",
        "forks": "20,637",
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
        "stars": "90,077",
        "forks": "13,788",
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
        "stars": "88,967",
        "forks": "12,918",
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
        "stars": "70,650",
        "forks": "8,857",
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
