const AI_NEWS_DATA = [
  {
    "date": "2026-05-26",
    "weekday": "星期二",
    "stats": {
      "claude": 5,
      "openai": 5,
      "gemini": 5,
      "grok": 4,
      "news": 4,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Claude Code 五月大更新：Auto Mode、Routines、自動記憶與 Worktrees",
        "desc": "Claude Code 五月更新新增 Auto Mode 自動模式、Routines 任務例行程序、Auto Memory 自動記憶與 Worktrees 工作樹功能，五小時使用限制在所有付費方案翻倍，高峰時段限流取消。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 發布 Dreaming、Outcomes 與多代理編排",
        "desc": "Code with Claude 2026 大會發布三大更新：Dreaming 讓代理自我改進寫筆記供後續代理參考、Outcomes 自動評分與修正、多代理編排支援平行分工，並新增 webhooks 通知機制。",
        "url": "https://www.infoq.com/news/2026/05/code-with-claude/",
        "source": "InfoQ",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Anthropic 推 20+ 法律 MCP 連接器與 12 外掛，Claude for Legal 進軍企業法務",
        "desc": "Anthropic 釋出超過 20 個法律專用 MCP 連接器與 12 個實務外掛，涵蓋研究、合約、訴訟探索與案件管理，正式進軍企業法律市場。",
        "url": "https://www.inside.com.tw/article/41282-anthropic-claude-for-legal-mcp-connectors-plugins-2026",
        "source": "INSIDE",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 算力大擴容：租用 SpaceX 資料中心 22 萬張 GPU，限額全面提升",
        "desc": "Anthropic 與 SpaceX 達成獨家算力合作，租用孟菲斯 Colossus 1 資料中心超 300 兆瓦容量與 22 萬張 GPU，Claude Code 編程額度翻倍、API 速率最高漲 16 倍。",
        "url": "https://blog.csdn.net/qq_73472828/article/details/160867575",
        "source": "CSDN",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "KPMG 全球 27.6 萬員工導入 Claude，深度整合審計稅務業務",
        "desc": "KPMG 與 Anthropic 建立戰略聯盟，將 Claude 嵌入 Digital Gateway 平台，為全球 27.6 萬名員工提供 AI 能力，涵蓋審計、稅務與顧問業務。",
        "url": "https://www.anthropic.com/news/anthropic-kpmg",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 上線：幻覺減半、回應更精準簡潔",
        "desc": "OpenAI 5 月 5 日發布 GPT-5.5 Instant 並設為 ChatGPT 預設模型，高風險主題幻覺減少 52.5%、字數精簡約 30%，付費版新增記憶來源功能可查看與編輯個人化參考資料。",
        "url": "https://technews.tw/2026/05/06/openai-releases-gpt-5-5-instant/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Codex 進駐 ChatGPT 手機 App，遠端遙控 Mac 開發不中斷",
        "desc": "OpenAI 將 Codex 整合至 ChatGPT iOS/Android App，用戶可在手機上遠端啟動、監控與審核 Codex 工作，掃描 QR Code 即可配對，每週超 400 萬人使用。",
        "url": "https://www.inside.com.tw/article/41304-openai-says-codex-is-coming-to-your-phone",
        "source": "INSIDE",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 為免費用戶新增內嵌網頁圖片，視覺問答更直觀",
        "desc": "免費版 ChatGPT 新增 inline images 功能，回答涉及知名人物、地點、產品時自動插入網頁圖片，幫助視覺化理解。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 記憶升級：Plus/Pro 用戶跨對話更個人化",
        "desc": "ChatGPT 加強記憶功能，可連結過往對話、儲存記憶、檔案及 Gmail 資訊，新增 memory sources 讓用戶查看哪些資料被參考並可即時編輯修正。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 將推桌面超級 App：ChatGPT、Codex、瀏覽器三合一",
        "desc": "OpenAI 計畫將 ChatGPT、Codex 與自研瀏覽器整合為桌面超級 App，加速佈局 Agent 戰場，目標成為使用者的統一 AI 入口。",
        "url": "https://www.bnext.com.tw/article/90360/openai-superapp-gpt-codex",
        "source": "數位時代",
        "tags": [
          "openai",
          "agent"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini Spark 登場：Google 版 24 小時 AI 代理人，跨平台持續運作",
        "desc": "Google I/O 2026 發布 Gemini Spark 個人 AI 代理人，支援 iOS、Android 與網頁，在 Google Cloud 虛擬機上持續運行，可自動整理信箱、建立優先任務清單，基於 Gemini 3.5 Flash 與 Antigravity 架構。",
        "url": "https://www.inside.com.tw/article/41331-google-gemini-spark",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini 3.5 Flash 發布，成為 Gemini App 與搜尋 AI 模式預設模型",
        "desc": "Google I/O 2026 推出 Gemini 3.5 系列，3.5 Flash 成為 Gemini 應用與 Google Search AI Mode 的新預設模型，同場發表影片模型 Gemini Omni。",
        "url": "https://www.inside.com.tw/article/41324-gemini-3.5-google-io-2026",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini Intelligence 登陸 Android：自動化任務、自製 Widget、多模態指令",
        "desc": "Google 發表 Gemini Intelligence 系統級 AI，可跨 App 自動化操作、用自然語言建立客製化 Widget，支援截圖與照片多模態輸入，今夏先登 Samsung 與 Pixel。",
        "url": "https://technews.tw/2026/05/13/google-introduces-gemini-intelligence-on-android/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini App 大改版：每日簡報、Neural Expressive 設計語言、macOS 版將登場",
        "desc": "Gemini App 推出 Daily Brief 每日摘要功能整合信箱行事曆，採用全新 Neural Expressive 設計語言，並預告 macOS 原生版本即將推出。",
        "url": "https://www.inside.com.tw/article/41332-gemini-google-io-update-macos",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "Google Docs Live 亮相：口頭整理思緒，AI 秒轉正式文件",
        "desc": "Google I/O 2026 發表 Docs Live 功能，用戶可口述想法，Gemini 即時轉換為結構化正式文件，深度整合 Google Workspace。",
        "url": "https://www.inside.com.tw/article/41333-google-io-2026-docs-live",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 發布：內建推理、百萬 Token 上下文、原生影片輸入",
        "desc": "xAI 5 月 4 日推出 Grok 4.3，內建推理能力、支援一百萬 Token 上下文窗口與原生影片輸入，API 定價每百萬 Token 1.25 美元。",
        "url": "https://docs.x.ai/developers/models/grok-4.3",
        "source": "xAI",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok Build 0.1 早期存取：專為 Agent 工作流打造的程式碼模型",
        "desc": "xAI 5 月 14 日釋出 Grok Build 0.1 早期存取版，專為 Agent 式工作流訓練的程式碼模型，SuperGrok 與 X Premium 用戶可透過 OpenCode 環境使用。",
        "url": "https://pasqualepillitteri.it/en/news/2584/grok-build-xai-cli-2026",
        "source": "Professor Glitch",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Skills 上線：跨對話持久記憶與自訂專業能力",
        "desc": "xAI 5 月 18 日推出 Grok Skills，為 Grok 添加跨對話的持久自訂專業能力，內建文件生成、簡報製作與工作流自動化，支援網頁、iOS 與 Android。",
        "url": "https://x.ai/news/grok-skills",
        "source": "xAI",
        "tags": [
          "grok",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok 新增 Vercel、Canva、Gamma 等第三方連接器",
        "desc": "xAI 5 月 22 日為 Grok 推出新一批第三方連接器，可直接在 Grok 中透過 Vercel 部署網站、Canva 設計、Gamma 做簡報、S&P Global 取得市場數據。",
        "url": "https://chatforest.com/reviews/xai-grok-skills-connectors-platform-expansion-may-2026/",
        "source": "ChatForest",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "iOS 27 Siri 將開放第三方 AI：Claude、Gemini、ChatGPT 不再獨家",
        "desc": "Apple 計畫在 iOS 27 推出 Extensions 系統，讓 Siri 支援 ChatGPT、Claude、Gemini 等第三方 AI，用戶可自由切換，預計 WWDC 6 月 8 日公布。",
        "url": "https://www.bnext.com.tw/article/90456/ios-27-siri-gemini-claude",
        "source": "數位時代",
        "tags": [
          "integration"
        ]
      },
      {
        "title": "主流 AI 機器人個資處理大不同：ChatGPT 會吐出真實電話號碼",
        "desc": "測試發現 ChatGPT 會回傳真實電話號碼等個資，Claude、Gemini 與其他 AI 則拒絕提供私人聯絡資訊，突顯各平台隱私處理差異。",
        "url": "https://technews.tw/2026/05/15/chatgpt-gave-out-my-address-and-phone-number/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "claude",
          "gemini"
        ]
      },
      {
        "title": "Google I/O 2026 懶人包：Gemini 全面 AI 化、代理人電商、AI 眼鏡",
        "desc": "Google I/O 2026 重點包含 Gemini Spark 代理人、Gemini Intelligence、代理人電商購物圖譜、智慧眼鏡與 Googlebook AI 筆電等發表。",
        "url": "https://www.inside.com.tw/article/41313-google-io-2026-five-things-to-expect-confirmed",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "title": "Flipbook 問世：AI 即時生成整個網頁畫面的實驗性視覺瀏覽器",
        "desc": "全新視覺瀏覽器 Flipbook 以 AI 即時生成每個像素，網站不再是一頁頁寫出來的架構，而是模型即時繪製的互動畫面。",
        "url": "https://applealmond.com/posts/310974",
        "source": "蘋果仁",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Wan-AI",
        "desc": "開源文字/圖片轉影片模型，在特定基準上媲美商用方案，支援 5B 參數高品質影片生成。",
        "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-14B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "ARIS",
        "author": "Research Community",
        "desc": "開源研究框架，運用跨模型對抗協作進行可靠長期研究，5 月 4 日發表的熱門論文。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Mega-ASR",
        "author": "Research Community",
        "desc": "透過複合資料建構與漸進式聲學語義優化，提升真實場景語音辨識穩健性的框架。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Skills (mattpocock)",
        "repo": "mattpocock/skills",
        "desc": "可複用 AI 代理技能框架，單週增 1,618 星，專注 Claude Code 工作流與開放式自動化。",
        "stars": "12.5k",
        "lang": "TypeScript",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "Nous Research 開發的開源自主 AI 代理框架，累計超 105k 星，支援多模型編排。",
        "stars": "105k",
        "lang": "Python",
        "url": "https://github.com/NousResearch/hermes-agent",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Langflow",
        "repo": "langflow-ai/langflow",
        "desc": "視覺化 AI 代理建構工具，無需大量程式碼即可原型設計與部署 AI Agent，146k 星。",
        "stars": "146k",
        "lang": "Python",
        "url": "https://github.com/langflow-ai/langflow",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-25",
    "weekday": "星期日",
    "stats": {
      "claude": 5,
      "openai": 5,
      "gemini": 5,
      "grok": 4,
      "news": 4,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "model",
        "title": "Claude Opus 4.7 全面上線：進階軟體工程、視覺與長任務表現大幅提升",
        "desc": "Anthropic 正式發布 Claude Opus 4.7，在最困難的程式設計任務上顯著超越前代，視覺解析度提高、長時間複雜任務更穩定，已在所有 Claude 產品與 AWS Bedrock、Vertex AI、Microsoft Foundry 上線。",
        "url": "https://www.anthropic.com/news/claude-opus-4-7",
        "source": "Anthropic",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增 Dreaming、Outcomes 與多代理編排功能",
        "desc": "Code with Claude 2026 大會發布三大更新：Dreaming 讓代理自我改進並寫筆記供後續代理參考、Outcomes 自動評分與修正、多代理編排支援平行分工，Netflix 已部署於平台團隊。",
        "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
        "source": "MIT Technology Review",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code Fast Mode 預設升級 Opus 4.7，新增 agents 指令旗標",
        "desc": "Claude Code 五月更新將 Fast Mode 預設模型升級為 Opus 4.7，改善外掛、背景工作階段與 daemon 穩定性，同時新增 claude agents 指令旗標方便管理多代理。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "KPMG 全球 27.6 萬名員工將導入 Claude，深度整合核心業務",
        "desc": "KPMG 與 Anthropic 建立戰略聯盟，將 Claude 嵌入 Digital Gateway 平台，為全球 27.6 萬名員工提供 AI 能力，涵蓋審計、稅務與顧問業務。",
        "url": "https://www.anthropic.com/news/anthropic-kpmg",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "integration",
        "title": "PwC 擴大與 Anthropic 合作：Claude 深入技術開發、交易執行與企業轉型",
        "desc": "PwC 宣布擴展與 Anthropic 的戰略聯盟，深化 Claude 在建構技術、執行交易及重塑企業功能等領域的應用。",
        "url": "https://www.anthropic.com/news/pwc-expanded-partnership",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 上線：幻覺率降低 52.5%，成為 ChatGPT 新預設模型",
        "desc": "OpenAI 推出 GPT-5.5 Instant 取代 5.3 Instant 為 ChatGPT 預設模型，在醫療、法律、金融等高風險情境中幻覺率大幅下降 52.5%，對話更自然、更善用上下文。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Memory Sources 上線：透明化個人化來源，可查看與編輯記憶依據",
        "desc": "Memory Sources 功能讓使用者看到回應中引用了哪些記憶、過去對話或自訂指令，並可刪除或修正過時資訊，Plus/Pro 用戶還可查看檔案庫與 Gmail 資料。",
        "url": "https://www.knightli.com/en/2026/05/07/chatgpt-release-notes-memory-gpt-5-5-sheets/",
        "source": "Knightli",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Codex 桌面代理大升級：可控制 Mac 應用、螢幕鎖定仍可執行，行動版同步上線",
        "desc": "OpenAI Codex 從程式沙箱升級為桌面代理，可操控 Mac 應用程式、擷取螢幕建立環境記憶，即使 Mac 鎖定也能執行任務，並同步在 iOS/Android ChatGPT 中上線。",
        "url": "https://www.techtimes.com/articles/317074/20260524/openai-codex-becomes-desktop-agent-controls-mac-apps-watches-screen-runs-mobile.htm",
        "source": "TechTimes",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 推出個人財務功能：Pro 用戶可連結帳戶、查看理財儀表板",
        "desc": "OpenAI 為美國 Pro 用戶推出個人財務體驗預覽版，可安全連結帳戶、查看財務儀表板，並針對個人財務狀況提問。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "Codex Appshots 功能：雙按 Command 即可將 Mac 視窗快照附加到對話",
        "desc": "Codex 新增 Appshots 功能，按下雙 Command 鍵即可將當前 Mac 應用視窗截圖加文字附加到 Codex 對話中，無需手動複製貼上。",
        "url": "https://kingy.ai/blog/appshots-inside-openai-codexs-new-command-command-trick-for-macos/",
        "source": "Kingy AI",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini Spark 登場：24/7 全天候 AI 代理人，深度整合 Google Workspace",
        "desc": "Google I/O 2026 發布 Gemini Spark，由 3.5 Flash 驅動、採 Antigravity 架構，可主動代替用戶執行 Gmail、文件、簡報等任務，目前開放 AI Ultra 100/200 美元用戶。",
        "url": "https://www.bnext.com.tw/article/90991/google-gemini-spark-3-5-flash-ai-agent-strategy",
        "source": "數位時代",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini 3.5 Flash 成為預設模型：AI Agent 與程式碼撰寫能力大幅提升",
        "desc": "Gemini 3.5 Flash 現已成為全球 Gemini 應用程式和 Google 搜尋 AI 模式的預設模型，在 Agent 運作與編寫程式碼方面表現優異。",
        "url": "https://technews.tw/2026/05/20/google-introduces-gemini-3-5-and-gemini-spark/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google AI 訂閱方案大改：改用算力消耗制，新增月費 100 美元 AI Ultra 方案",
        "desc": "Google 自 5/17 起全面改採「算力消耗」計費制，不再按模型分開計算提示詞次數，並新增月費 100 美元的 AI Ultra 方案，原 250 美元方案降至 200 美元。",
        "url": "https://technews.tw/2026/05/22/everything-new-in-google-ai-subscription/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini Intelligence 登陸 Android：自動化任務、摘要網頁、智慧填表",
        "desc": "Google 宣布 Gemini Intelligence 將登陸 Android 裝置，可自動化複雜任務、摘要網頁內容及簡化表單填寫，首波支援 Samsung Galaxy 與 Google Pixel。",
        "url": "https://technews.tw/2026/05/13/google-introduces-gemini-intelligence-on-android/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google 攜手品牌推智慧眼鏡：語音啟動 Gemini 搶攻 Meta 市場",
        "desc": "Google 在 I/O 2026 展示與眼鏡品牌合作的智慧眼鏡，支援語音啟動 Gemini AI，預計今年秋季上市，直接挑戰 Meta Ray-Ban。",
        "url": "https://technews.tw/2026/05/20/intelligent-eyewear-is-coming-this-fall/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 發布：內建推理、百萬 token 上下文視窗，Intelligence Index 達 53 分",
        "desc": "xAI 推出 Grok 4.3 作為成本效率旗艦模型，內建推理能力、支援 100 萬 token 上下文與原生影片輸入，定價每百萬輸入 token 僅 $1.25。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok Build 0.1 早期體驗：專為 Agentic 程式設計打造的編碼模型",
        "desc": "xAI 推出 Grok Build 0.1 編碼專用模型，支援 25.6 萬 token 上下文，針對代理式工作流程訓練，定價 $1/$2 per million input/output tokens。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok 推出第三方 Connectors：整合 Vercel、Canva、Gamma 與 S&P Global",
        "desc": "Grok 於 5/22 推出平台連接器，使用者可在聊天介面中直接透過 Vercel 部署網站、Canva 設計、Gamma 製作簡報，以及從 S&P Global 取得即時市場數據。",
        "url": "https://chatforest.com/reviews/xai-grok-skills-connectors-platform-expansion-may-2026/",
        "source": "ChatForest",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Skills 正式上線：持久化自訂專業知識，跨對話記憶工作流程",
        "desc": "xAI 於 5/18 正式推出 Grok Skills 功能，讓使用者教導 Grok 特定工作流程後可跨對話持續應用，等於賦予 Grok 長期工作記憶。",
        "url": "https://grok.com/skills-and-connectors",
        "source": "xAI",
        "tags": [
          "grok",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "iOS 27 Siri 變 AI 超級入口：可一鍵切換 ChatGPT、Claude、Gemini",
        "desc": "Apple 宣布 iOS 27 將透過 Extensions 系統讓使用者在 Siri 中自由切換 ChatGPT、Claude 或 Gemini，結束 ChatGPT 獨佔地位，同時與 Google 合作用 Gemini 重建 Siri 底層。",
        "url": "https://www.bnext.com.tw/article/90456/ios-27-siri-gemini-claude",
        "source": "數位時代",
        "tags": [
          "integration",
          "agent"
        ]
      },
      {
        "title": "教育部推「館館有 AI」：持借書證即可免費使用 ChatGPT、Claude、Gemini",
        "desc": "教育部計畫自 2026 Q4 起在國立圖書館試辦，首波每館設置 5 台專用電腦，讓民眾持借書證免費體驗付費版 AI 工具，逐步擴展至 47 所大學。",
        "url": "https://www.bnext.com.tw/article/90846/free-ai-library-moe-taiwan",
        "source": "數位時代",
        "tags": [
          "tool",
          "integration"
        ]
      },
      {
        "title": "主流 AI 個資處理比較：ChatGPT 曾洩漏地址電話，Claude 與 Gemini 較嚴格",
        "desc": "MIT Technology Review 測試五大 AI 系統處理個人資料的方式，發現 ChatGPT 曾回傳真實電話與地址，Claude、Gemini 等則拒絕提供或嚴格遮蔽。",
        "url": "https://technews.tw/2026/05/15/chatgpt-gave-out-my-address-and-phone-number/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "claude",
          "gemini"
        ]
      },
      {
        "title": "Google I/O 2026 懶人包：Gemini Spark、3.5 Flash、搜尋 AI 代理全面啟動",
        "desc": "Google I/O 2026 將 AI 從「回答工具」重新定義為「行動主體」，搜尋直接內建 AI 代理可執行購買、監控票價、調整行程等自律任務。",
        "url": "https://www.bnext.com.tw/article/90991/google-gemini-spark-3-5-flash-ai-agent-strategy",
        "source": "數位時代",
        "tags": [
          "gemini",
          "agent"
        ]
      }
    ],
    "hf": [
      {
        "name": "LongCat-Video 13.6B",
        "author": "LongCat Team",
        "desc": "基於 Diffusion Transformer 架構的 136 億參數影片生成模型，擅長高效生成長影片。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Wan2.2-T2V-A14B-GGUF",
        "author": "Y1998",
        "desc": "Wan 2.2 系列 140 億參數文字轉影片模型的量化版本，讓大型影片模型更易部署。",
        "url": "https://huggingface.co/models?sort=trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "TideGS",
        "author": "TideGS Team",
        "desc": "可在單張 GPU 上訓練超過十億 primitives 的 3D Gaussian Splatting 模型。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Skills",
        "repo": "mattpocock/skills",
        "desc": "可重用的 AI 代理行為模式與工作流程集合，專為 Claude Code 等編碼代理設計。",
        "stars": "55.3k",
        "lang": "TypeScript",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "Nous Research 開發的開源多代理框架，支援複雜任務分解與協作。",
        "stars": "130k",
        "lang": "Python",
        "url": "https://github.com/NousResearch/hermes-agent",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "2026 年成長最快的開源專案之一，從 9,000 星飆升至超過 21 萬星，提供開放式 AI 代理基礎設施。",
        "stars": "210k",
        "lang": "Python",
        "url": "https://github.com/openclaw/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-24",
    "weekday": "星期六",
    "stats": {
      "claude": 6,
      "openai": 5,
      "gemini": 6,
      "grok": 4,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "model",
        "title": "Claude Opus 4.7 正式上線：程式設計、視覺與長任務能力全面升級",
        "desc": "Anthropic 發布 Claude Opus 4.7，在進階軟體工程表現上顯著超越 Opus 4.6，視覺解析度更高、長時間複雜任務更穩定，API 定價維持不變，已在所有 Claude 產品與 AWS Bedrock、Vertex AI、Microsoft Foundry 上線。",
        "url": "https://www.anthropic.com/news/claude-opus-4-7",
        "source": "Anthropic",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增 Dreaming、Outcomes、多代理編排三大功能",
        "desc": "Anthropic 在 Code with Claude 2026 大會發布三項重大更新：Dreaming 讓代理自我改進、Outcomes 自動評分與修正、多代理編排支援平行分工，Netflix 已部署多代理編排於平台團隊。",
        "url": "https://www.infoq.com/news/2026/05/code-with-claude/",
        "source": "InfoQ",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 更新：Fast Mode 預設升級 Opus 4.7，新增 claude agents 旗標",
        "desc": "Claude Code 五月更新將 Fast Mode 預設模型升級為 Opus 4.7，改善外掛、背景工作階段與 daemon 穩定性，同時新增 claude agents 指令旗標。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "KPMG 與 Anthropic 結盟：將 Claude 導入 27.6 萬名員工的核心業務",
        "desc": "KPMG 宣布與 Anthropic 建立全球聯盟，將 Claude 整合至審計、稅務與顧問業務核心，為超過 27.6 萬名員工提供 AI 輔助工具。",
        "url": "https://www.anthropic.com/news/anthropic-kpmg",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增 MCP Tunnels 與自託管沙箱功能",
        "desc": "Anthropic 為 Managed Agents 加入隱私安全新功能：MCP Tunnels 與自託管沙箱，企業可將敏感檔案與套件保留在自有基礎設施，代理編排則由 Anthropic 處理。",
        "url": "https://9to5mac.com/2026/05/19/anthropic-enhances-claude-managed-agents-with-two-new-privacy-and-security-features/",
        "source": "9to5Mac",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Code with Claude 2026 開發者大會回顧：展望編程未來的爭議與願景",
        "desc": "MIT Technology Review 回顧 Anthropic 的 Code with Claude 大會，探討代理式編程的未來走向，以及開發者對 AI 主導程式碼產出的不同觀點。",
        "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
        "source": "MIT Technology Review",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 成為 ChatGPT 預設模型：幻覺減少 52.5%、回應更精準",
        "desc": "OpenAI 發布 GPT-5.5 Instant 取代 GPT-5.3 Instant 成為所有使用者的預設模型，在醫療、法律、金融等高風險領域幻覺率降低 52.5%，回答更簡潔直接。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 記憶功能大幅強化：整合 Gmail 與歷史對話，回應更個人化",
        "desc": "ChatGPT Plus 與 Pro 用戶的記憶功能升級，可從過往對話、儲存記憶、檔案與連結的 Gmail 中提取脈絡，所有方案均可查看「記憶來源」。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 推出自助式廣告管理平台：廣告正式進入 ChatGPT",
        "desc": "OpenAI 推出 Ads Manager 自助平台，允許廣告主直接在 ChatGPT 中建立、管理與最佳化廣告活動，標誌 ChatGPT 正式進入廣告變現時代。",
        "url": "https://releasebot.io/updates/openai",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "ChatGPT Codex 預覽版登上行動裝置：手機也能遠端操控 Mac 編程",
        "desc": "OpenAI 將 Codex 預覽版加入 ChatGPT 行動 App，使用者可在手機上啟動任務，由連結的 Mac 執行 Codex 編程工作。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 推出 Trusted Contact 安全功能：自殺風險偵測時通知信任聯絡人",
        "desc": "ChatGPT 新增選擇性安全功能 Trusted Contact，使用者可指定信任聯絡人，在系統偵測到嚴重自殺相關安全疑慮時發出通知。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Google I/O 2026 發布 Gemini 3.5 Flash：速度快 4 倍、超越 3.1 Pro",
        "desc": "Google 在 I/O 2026 推出 Gemini 3.5 Flash，在 Terminal-Bench 2.1 達 76.2%，速度為同級旗艦模型的 4 倍，定價 $1.50/$9.00 每百萬 token。",
        "url": "https://applealmond.com/posts/313124",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Spark 登場：Google 首款全天候個人 AI 代理人",
        "desc": "Google 推出 Gemini Spark，深度整合 Gmail、Drive、Calendar，可在背景持續執行任務，即使離開裝置也能運作，優先向 AI Ultra 訂閱者開放 Beta。",
        "url": "https://applealmond.com/posts/313156",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini App 大改版：Neural Expressive 設計語言、Daily Brief 個人化摘要",
        "desc": "Gemini App 導入全新 Neural Expressive 設計語言，搭配流暢動畫、觸覺回饋與新字體；Daily Brief 功能可自動整理收件匣、行事曆與待辦事項。",
        "url": "https://techcrunch.com/2026/05/19/google-updates-its-gemini-app-to-take-on-chatgpt-and-claude-at-io-2026/",
        "source": "TechCrunch",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini Omni 發布：跨模態理解與影片生成的新里程碑",
        "desc": "Google 同步發布 Gemini Omni 模型，以「任意輸入、任意輸出」為核心，在世界理解、多模態與影片編輯能力上實現跨越式提升。",
        "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 訂閱方案大改版：新增輕量版、送 YouTube Premium、改採算力計費",
        "desc": "Google 重新調整 Gemini 訂閱方案為五級制（免費/AI Plus/AI Pro/AI Ultra 輕量/AI Ultra 旗艦），並將 YouTube Premium、Health Premium 納入福利。",
        "url": "https://applealmond.com/posts/313170",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "Gemini Intelligence 進駐 Android：自動化任務、摘要網頁、自然語言建 Widget",
        "desc": "Google 宣布 Gemini Intelligence 登上 Android，可自動化複雜任務、摘要網頁內容、簡化表單填寫，並支援用自然語言建立客製化桌面小工具。",
        "url": "https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 發布：百萬 token 上下文、原生影片輸入、推理能力大幅提升",
        "desc": "xAI 推出 Grok 4.3 旗艦模型，內建推理能力、100 萬 token 上下文視窗與原生影片輸入，Intelligence Index 得分 53，較 Grok 4.20 提升超過 300 Elo。",
        "url": "https://x.ai/news",
        "source": "xAI",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok Connectors 擴展：串接 SharePoint、Notion、GitHub 等多平台",
        "desc": "Grok 新增 Connectors 功能，可連結 SharePoint、Outlook、OneDrive、Google Workspace、Notion、GitHub、Linear，並支援自訂 MCP 伺服器。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok Build 0.1 搶先體驗：專為代理式工作流設計的程式碼生成模型",
        "desc": "xAI 發布 Grok Build 0.1 搶先體驗版，這是專為代理式工作流打造的編程模型，支援文字與圖片輸入，擁有 25.6 萬 token 上下文視窗。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Skills 正式上線：持久化自訂專業能力，跨對話延續",
        "desc": "xAI 於 5 月 18 日正式推出 Grok Skills，讓使用者為 Grok 添加持久化的自訂專業技能，能夠跨越不同對話持續生效。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "product"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Perplexity Computer 進軍企業市場：自主 AI 代理執行複雜工作流",
        "desc": "Perplexity 在 Ask 2026 開發者大會宣布將 Computer 多模型 AI 代理開放給企業客戶，可自主執行訂機票、管理郵件、填寫表單等多步驟任務。",
        "url": "https://venturebeat.com/technology/perplexity-takes-its-computer-ai-agent-into-the-enterprise-taking-aim-at",
        "source": "VentureBeat",
        "tags": [
          "agent"
        ]
      },
      {
        "sub": "secondary",
        "title": "教育部「館館有 AI」計畫：持借書證免費用 ChatGPT、Claude、Gemini",
        "desc": "台灣教育部推動「館館有 AI」政策，民眾只要持有公共圖書館借書證，即可免費使用 ChatGPT、Claude 與 Gemini 等主流 AI 工具。",
        "url": "https://www.bnext.com.tw/article/90846/free-ai-library-moe-taiwan",
        "source": "數位時代",
        "tags": [
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "不讓對話變 AI 訓練素材！ChatGPT、Gemini、Claude 個資關閉教學",
        "desc": "數位時代整理三大 AI 平台的資料授權關閉步驟：ChatGPT 在「資料控管」關閉、Claude 在「Privacy」關閉、Gemini 在「活動記錄」中刪除。",
        "url": "https://www.bnext.com.tw/article/90951/ai-privacy-settings-guide",
        "source": "數位時代",
        "tags": [
          "tutorial"
        ]
      }
    ],
    "hf": [
      {
        "name": "OmniFlatten",
        "author": "Research Team",
        "desc": "GPT 架構的全雙工即時語音對話模型，透過多階段後訓練整合語音與文字，無需修改原始模型架構。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "SmolDocling",
        "author": "Research Team",
        "desc": "僅 256M 參數的精巧視覺語言模型，可端對端轉換各類文件格式，支援新型標記語法。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Lance",
        "author": "Research Team",
        "desc": "統一多模態模型，透過雙流架構與協作多任務訓練，整合圖片與影片的理解、生成與編輯能力。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "pspdfkit/openclaw",
        "desc": "2026 年 GitHub 成長最快的開源專案，由 PSPDFKit 創辦人 Peter Steinberger 打造，累積超過 21 萬顆星。",
        "stars": "210k+",
        "lang": "TypeScript",
        "url": "https://github.com/trending",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "Nous Research 開發的開源自主 AI 代理框架，2026 年 2 月發布，累積超過 10.5 萬顆星。",
        "stars": "105k+",
        "lang": "Python",
        "url": "https://github.com/trending",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Skills Framework",
        "repo": "mattpocock/skills",
        "desc": "Matt Pocock 的可重用代理技能框架，專注於 Claude Code 工作流與開放式自動化，本週登上趨勢榜首。",
        "stars": "Trending #1",
        "lang": "TypeScript",
        "url": "https://github.com/trending",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-23",
    "weekday": "星期六",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 3,
      "grok": 3,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Anthropic 據傳以 9,000 億美元估值進行新一輪融資",
        "desc": "多家媒體報導 Anthropic 正以約 9,000 億美元估值進行新一輪融資，反映市場對 Claude 產品線與企業客戶成長的高度看好。",
        "url": "https://www.anthropic.com/news",
        "source": "Anthropic",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude 法律 MCP 連接器：20+ 法律專用連接器與 12 個執業領域外掛上線",
        "desc": "Anthropic 針對法律產業發布超過 20 個 MCP 連接器與 12 個執業領域外掛，讓律師事務所可直接在 Claude 中存取法律資料庫與案例管理工具。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude 自託管沙箱進入公開測試：MCP 隧道研究預覽版同步上線",
        "desc": "企業用戶可在自有基礎設施上運行 Claude 代理，透過 MCP 隧道連接內部系統而無需暴露於公共網路，自託管沙箱進入公開測試階段。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [
      {
        "sub": "tool",
        "title": "Codex 用戶遭遇速率限制問題，OpenAI 當日修復",
        "desc": "部分 Codex 使用者反映觸及速率限制，OpenAI 表示問題已完全恢復，並承諾將持續優化容量分配。",
        "url": "https://developers.openai.com/codex/changelog",
        "source": "OpenAI Developers",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Business 新增 Codex 工作流程：Appshots、Goal Mode 正式版、共享外掛",
        "desc": "ChatGPT Business 方案強化 Codex 整合，新增 Appshots 快速擷取視窗、Goal Mode GA、瀏覽器標註改良、遠端鎖定電腦使用，以及工作區共享外掛功能。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "94% 醫師已使用或有興趣使用 AI，準確性為首要顧慮",
        "desc": "Doximity 調查顯示 94% 的醫師正在使用或有興趣使用 AI 輔助臨床工作，71% 將準確性與可靠性列為最大擔憂。",
        "url": "https://releasebot.io/updates/openai",
        "source": "Doximity",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Google 搜尋 AI 代理人即將上線：可 24/7 監控網頁變化並主動通知",
        "desc": "Google 宣布使用者可建立與客製多個資訊代理人，全天候追蹤網頁變化，預計 2026 年夏季推出。",
        "url": "https://blog.google/products-and-platforms/products/search/search-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 訂閱方案大改：算力消耗制上路，AI Ultra 降至 200 美元",
        "desc": "Google 自 5/17 起改用「算力消耗」計費制，不再分模型計算提示詞次數，AI Ultra 250 美元方案降至 200 美元，新增 100 美元入門 Ultra 方案。",
        "url": "https://technews.tw/2026/05/22/everything-new-in-google-ai-subscription/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini Omni：結合推理與創作的多模態影片生成模型",
        "desc": "Google 推出 Gemini Omni，可從文字、圖片、音訊或現有影片的任意組合中生成影片，首款 Omni Flash 模型已開放使用。",
        "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Build 0.1 早期體驗：8 個 AI 代理平行運作、200 萬 token 上下文",
        "desc": "xAI 推出 Grok Build 0.1 編碼專用模型，支援 8 個代理平行運作、200 萬 token 上下文視窗，SWE-Bench 得分 70.8%，SuperGrok Heavy 用戶可搶先使用。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "model",
        "title": "Grok 5 預告：6 兆參數、150 萬上下文，預計 5-6 月間發布",
        "desc": "xAI 透露 Grok 5 將擁有 6 兆參數與 150 萬 token 上下文視窗，預計在 2026 年 5-6 月間發布，將為未來 Grok Build 版本提供動力。",
        "url": "https://www.mindstudio.ai/blog/grok-5-agi-xai-model-roadmap",
        "source": "MindStudio",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Connectors 支援 SharePoint、Outlook、Notion、GitHub 等更多平台",
        "desc": "除 Vercel、Canva、Gamma、S&P Global 外，Grok Connectors 也整合 SharePoint、Outlook、OneDrive、Google Workspace、Notion、GitHub、Linear，並支援自訂 MCP。",
        "url": "https://chatforest.com/reviews/xai-grok-skills-connectors-platform-expansion-may-2026/",
        "source": "ChatForest",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "騰訊、阿里巴巴一日蒸發 660 億美元：市場質疑 AI 變現能力",
        "desc": "騰訊與阿里巴巴股價在 24 小時內合計蒸發約 660 億美元市值，投資人對中國科技巨頭 AI 投資回報能力產生疑慮。",
        "url": "https://technews.tw/2026/05/22/",
        "source": "TechNews 科技新報",
        "tags": [
          "model",
          "integration"
        ]
      },
      {
        "title": "DeepSeek 首次外部融資：估值達 700 億人民幣",
        "desc": "中國 AI 新創 DeepSeek 進行首次外部融資，估值約 700 億人民幣（約 7.2 兆日圓），成為中國最高估值的 AI 獨角獸之一。",
        "url": "https://technews.tw/2026/05/",
        "source": "TechNews 科技新報",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "title": "美國商務部投入 20 億美元推動量子運算：IBM 獲 10 億美元",
        "desc": "美國商務部宣布投資 20 億美元於 9 家量子運算公司，其中 IBM 獲得 10 億美元用於建立量子晶片製造基地。",
        "url": "https://technews.tw/2026/05/",
        "source": "TechNews 科技新報",
        "tags": [
          "model",
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "ARIS",
        "author": "ARIS Team",
        "desc": "對抗式研究測試框架，用於評估 AI 模型的安全性與韌性。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Lance",
        "author": "Lance Team",
        "desc": "統一多模態模型，可同時處理文字、圖片、音訊等多種輸入。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "LongLive-2.0",
        "author": "LongLive Team",
        "desc": "長影片生成模型升級版，可產出更長、更連貫的影片內容。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "claude-context",
        "repo": "anthropics/claude-context",
        "desc": "語意程式碼搜尋工具，整合進 Claude Code 實現精準程式碼定位與理解。",
        "stars": "12.5k",
        "lang": "TypeScript",
        "url": "https://github.com/anthropics/claude-context",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "TradingAgents",
        "repo": "tradingagents/tradingagents",
        "desc": "多代理辯論模式的交易系統，多個 AI 代理透過辯論達成交易決策。",
        "stars": "8.2k",
        "lang": "Python",
        "url": "https://github.com/tradingagents/tradingagents",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "pi-mono",
        "repo": "pimono/pi-mono",
        "desc": "AI 代理工具包：編碼 CLI、統一 LLM API、TUI/Web UI、Slack 機器人一體化。",
        "stars": "6.8k",
        "lang": "Python",
        "url": "https://github.com/pimono/pi-mono",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-22",
    "weekday": "星期五",
    "stats": {
      "claude": 4,
      "openai": 3,
      "gemini": 3,
      "grok": 4,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Project Glasswing 擴展：Claude Security 公開測試版上線",
        "desc": "Anthropic 擴展 Project Glasswing 安全計畫，Claude Security 進入公開測試，提供程式碼掃描、漏洞分類與修復建議等功能，Mythos Preview 已發現逾 6,200 個高/關鍵嚴重性漏洞。",
        "url": "https://www.anthropic.com/glasswing",
        "source": "Anthropic",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Time 雜誌專題：Anthropic 如何在銷售 Claude 願景與 AI 風險警告間拉扯",
        "desc": "Time 雜誌深度報導 Anthropic 的雙重角色——積極推動 Claude 商業化的同時持續發布 AI 安全警告，探討企業在成長與負責任 AI 之間的平衡。",
        "url": "https://time.com/collection/time100-ai-2026/",
        "source": "Time Magazine",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents：Outcomes 自動評分與 Webhooks 正式推出",
        "desc": "Anthropic 在 Code with Claude 大會後正式推出 Managed Agents 的 Outcomes 功能（自動評分與修正）與 Webhooks 整合，讓企業可自動追蹤代理表現。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Platform 新增合規 API：IT 團隊可統一治理跨平台 Claude 使用",
        "desc": "Anthropic 推出合規 API 整合，IT 與安全團隊可像管理其他企業應用一樣，統一治理組織內所有平台上的 Claude 使用情況。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "agent",
        "title": "Codex「鎖定 Mac 使用」功能發布：螢幕鎖定後代理仍可執行任務",
        "desc": "OpenAI 發布 Codex 鎖定使用功能，透過 Apple 授權外掛在 Mac 鎖定後仍可操控應用程式，設有時間與行為安全機制，開發者可從手機遠端監控。",
        "url": "https://www.macrumors.com/2026/05/22/codex-use-mac-apps-when-locked/",
        "source": "MacRumors",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Codex v0.1.2505 重大更新：Python SDK、Bedrock 支援、遠端外掛市場",
        "desc": "Codex 發布 v0.1.2505 版本，新增 Python SDK 含認證流程、Amazon Bedrock 一等支援、遠端外掛市場瀏覽，以及穩定 Hooks 與更廣泛 MCP/Bash 支援。",
        "url": "https://developers.openai.com/codex/changelog",
        "source": "OpenAI Developers",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 5.5 Thinking 出現延遲問題，OpenAI 當日修復",
        "desc": "ChatGPT 5.5 Thinking 模式出現延遲升高與錯誤率上升問題，OpenAI 在同日完成修復並恢復正常服務。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Gemini 用量限制正式改以運算情況為準，新制全面上路",
        "desc": "Google 5/17 起全面啟用的算力消耗制計費已穩定運作，使用者不再受各模型每日提示詞次數限制，改由統一的運算配額管理。",
        "url": "https://technews.tw/2026/05/22/everything-new-in-google-ai-subscription/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini 3.5 Flash API 定價公布：每百萬輸入 token $1.50",
        "desc": "Google 公布 Gemini 3.5 Flash API 定價，輸入每百萬 token $1.50、輸出每百萬 token $9.00，鎖定開發者與企業級 AI Agent 應用場景。",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Google Stitch 即時串流代理與多人協作上線：免費挑戰 Figma",
        "desc": "Google 的 AI 原生 UI 設計工具 Stitch 新增即時串流生成與多人協作功能，免費提供使用，直接挑戰每月收費 $15/人的 Figma。",
        "url": "https://www.techtimes.com/articles/316903/20260520/google-stitch-launches-real-time-ai-agent-multiplayer-editing-figma-charges-15-seat.htm",
        "source": "TechTimes",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "integration",
        "title": "Grok 正式推出第三方 Connectors：Vercel、Canva、Gamma、S&P Global 四大整合",
        "desc": "xAI 於 5/22 發布平台連接器，使用者可直接在 Grok 聊天介面中透過 Vercel 部署網站、Canva 設計、Gamma 製作簡報、S&P Global 查詢即時市場數據。",
        "url": "https://digg.com/ai/zpdwxn8k",
        "source": "Digg",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Connectors 架構解析：I/O 資料層 + Skills 程序層雙軌運作",
        "desc": "xAI 說明 Grok 平台架構：Connectors 負責資料 I/O 層（連接外部服務），Skills 負責程序層（執行動作），兩者均在 Grok 4.3 模型上運行。",
        "url": "https://chatforest.com/reviews/xai-grok-skills-connectors-platform-expansion-may-2026/",
        "source": "ChatForest",
        "tags": [
          "grok",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok 整合 SharePoint、Outlook、Google Workspace、Notion 等企業工具",
        "desc": "除四大新 Connectors 外，Grok 也支援 SharePoint、Outlook、OneDrive、Google Workspace、Notion、GitHub、Linear，並開放「自帶 MCP」自訂工作流。",
        "url": "https://grok.com/skills-and-connectors",
        "source": "xAI",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Skills 持續擴展：自訂專業知識可跨對話持久化",
        "desc": "Grok Skills 自 5/18 上線以來持續獲得正面迴響，使用者可教導 Grok 特定工作流程並跨對話持續套用。",
        "url": "https://grok.com/skills-and-connectors",
        "source": "xAI",
        "tags": [
          "grok",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "NVIDIA 季度營收 816 億美元創新高：資料中心營收 752 億",
        "desc": "NVIDIA 公布截至 4/26 的季度財報，營收 816 億美元、資料中心營收 752 億美元均創歷史新高，下季度指引 910 億美元超出市場預期。",
        "url": "https://technews.tw/2026/05/22/",
        "source": "TechNews 科技新報",
        "tags": [
          "model",
          "integration"
        ]
      },
      {
        "title": "AI 牛市循環已逾 3 年：分析師警告 2030 年前泡沫風險",
        "desc": "分析師警告當前 AI 牛市循環已運行約 3-3.5 年，歷史經驗顯示科技泡沫通常在此時間點後出現修正。",
        "url": "https://technews.tw/2026/05/",
        "source": "TechNews 科技新報",
        "tags": [
          "model",
          "integration"
        ]
      },
      {
        "title": "2026 年科技巨頭 AI 基礎設施支出預計超過 7,000 億美元",
        "desc": "主要科技公司的 2026 年 AI 基礎設施總投資預計突破 7,000 億美元，反映業界對 AI 算力需求的持續擴張。",
        "url": "https://technews.tw/2026/05/",
        "source": "TechNews 科技新報",
        "tags": [
          "model",
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "Mega-ASR",
        "author": "Mega-ASR Team",
        "desc": "透過複合資料建構與漸進式聲學到語義優化，提升真實世界語音辨識強健性。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Pixal3D",
        "author": "Pixal3D Team",
        "desc": "像素對齊 3D 生成模型，可從 2D 圖片精準重建 3D 物件。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "AI-Trader",
        "author": "AI-Trader Team",
        "desc": "首個全自動化即時基準測試框架，用於評估 LLM 在多市場金融決策中的表現。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "everything-claude-code",
        "repo": "anthropics/everything-claude-code",
        "desc": "Claude Code 完整工作流程與自動化範例集合，從 #14 躍升至 #4。",
        "stars": "28.5k",
        "lang": "Markdown",
        "url": "https://github.com/anthropics/everything-claude-code",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "openhuman",
        "repo": "openhuman/openhuman",
        "desc": "新進榜的代理編排專案，專注於多代理協作與人機互動模式。",
        "stars": "5.1k",
        "lang": "Python",
        "url": "https://github.com/openhuman/openhuman",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "easy-vibe",
        "repo": "easyvibe/easy-vibe",
        "desc": "Vibe 編碼風格的 AI 輔助開發環境，強調直覺式互動開發體驗。",
        "stars": "4.3k",
        "lang": "TypeScript",
        "url": "https://github.com/easyvibe/easy-vibe",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-21",
    "weekday": "星期四",
    "stats": {
      "claude": 4,
      "openai": 4,
      "gemini": 4,
      "grok": 3,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "agent",
        "title": "Code with Claude London 第二天：Spotify、Delivery Hero 分享 Claude Code 團隊重塑經驗",
        "desc": "Code with Claude 延長日專為獨立開發者與早期創辦人設計，Spotify 與 Delivery Hero 分享如何圍繞 Claude Code 重新塑造開發團隊，大會因需求爆量而增設場次。",
        "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
        "source": "MIT Technology Review",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Anthropic 揭露：Claude 已撰寫大部分自身程式碼，能力接近中階工程師",
        "desc": "MIT Technology Review 報導，Anthropic 多數軟體現由 Claude 撰寫，Claude Code 的大部分程式碼也由 Claude 自己完成，能力被描述為「接近中階工程師」。",
        "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
        "source": "MIT Technology Review",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Dreaming 功能詳解：代理自我筆記、跨任務學習程式庫模式",
        "desc": "Anthropic 詳細介紹 Dreaming 功能，Claude Code 代理可在任務中撰寫筆記，整合跨任務的程式庫模式，讓後續代理快速上手並避免重複錯誤。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "PwC 擴大與 Anthropic 合作：Claude 深入技術開發與企業轉型",
        "desc": "PwC 宣布擴展與 Anthropic 的戰略聯盟，深化 Claude 在建構技術、執行交易及重塑企業功能等領域的應用。",
        "url": "https://www.anthropic.com/news/pwc-expanded-partnership",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "tool",
        "title": "Codex v0.1.2505 大版本發布：Python SDK、認證流程與多環境支援",
        "desc": "Codex 發布 v0.1.2505211709 版本，新增 Python SDK 含 API 金鑰登入、ChatGPT 瀏覽器/裝置代碼認證流程、多環境 app-server 工作階段。",
        "url": "https://developers.openai.com/codex/changelog",
        "source": "OpenAI Developers",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Codex 鎖定 Mac 使用功能上線：開發者可從手機遠端觸發代理任務",
        "desc": "Codex 新增鎖定 Mac 使用功能，透過 Apple 授權外掛暫時解鎖 Mac 並設有嚴格時間與行為保護機制，開發者可從手機遠端觸發並監控長時間代理任務。",
        "url": "https://www.techtimes.com/articles/317074/20260524/openai-codex-becomes-desktop-agent-controls-mac-apps-watches-screen-runs-mobile.htm",
        "source": "TechTimes",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Codex 行動版全面推出：iOS/Android 所有方案含免費版皆可使用",
        "desc": "Codex 在 ChatGPT 行動 App 中的預覽版正式擴展至所有方案（含 Free 與 Go），支援啟動/繼續執行緒、核准動作、查看即時 diff 與測試結果。",
        "url": "https://thenewstack.io/openai-codex-chatgpt-mobile/",
        "source": "The New Stack",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 5.5 Thinking 延遲問題已修復",
        "desc": "ChatGPT 5.5 Thinking 模式出現延遲升高與錯誤率上升問題，OpenAI 在同日完成診斷並恢復正常服務水準。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "哈薩比斯：「我們已抵達奇點的山腳」，2030 年前後可望實現 AGI",
        "desc": "Google DeepMind 執行長 Demis Hassabis 在 Google I/O 演講中表示，人類已站在奇點的山腳下，預測 2030 年前後可望實現 AGI。",
        "url": "https://technews.tw/2026/05/21/deepmind-ceo-demis-hassabis-predicts-ai-singularity-at-google-io/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google 每月處理 3,200 兆 token：年成長七倍",
        "desc": "Sundar Pichai 透露 Google 每月處理 3.2 quadrillion tokens（約每分鐘 190 億 token），較去年同期成長七倍，反映 AI 使用量爆炸式增長。",
        "url": "https://technews.tw/2026/05/20/sundar-pichai-says-google-is-now-processing-3-2-quadrillion-tokens-per-month/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Jules 非同步編碼代理上線：Google 加入 AI 編碼代理戰場",
        "desc": "Google 推出 Jules 雲端自主編碼代理，可非同步執行程式設計任務，加入 Claude Code 與 OpenAI Codex 的 AI 編碼代理競爭行列。",
        "url": "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/",
        "source": "Google Developers Blog",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "ADK 1.0（Agent Development Kit）正式發布：多語言代理開發框架",
        "desc": "Google 正式發布 ADK 1.0 代理開發套件，支援多種程式語言的代理框架開發，進入正式可用階段。",
        "url": "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/",
        "source": "Google Developers Blog",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 持續領跑：Intelligence Index 53 分、百萬 token 上下文",
        "desc": "xAI 的 Grok 4.3 繼續作為旗艦模型運行，內建推理能力、支援 100 萬 token 上下文與原生影片輸入，定價每百萬輸入 token $1.25。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Skills 上線三天回顧：持久化工作記憶獲正面迴響",
        "desc": "Grok Skills 自 5/18 推出以來，使用者反映自訂工作流程的持久化記憶功能大幅提升工作效率，可跨對話延續專業知識。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok 與 OpenClaw 整合：X Premium 用戶可直接在開源代理平台使用 Grok",
        "desc": "Grok 整合 OpenClaw 開源代理平台，X Premium 訂閱者可直接認證使用聊天、圖片/影片生成與即時 X 貼文搜尋，無需另外申請 API 金鑰。",
        "url": "https://x.ai/news/grok-openclaw",
        "source": "xAI",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "OpenAI 與 Google 同步採用 C2PA 內容溯源標準與 SynthID 浮水印",
        "desc": "OpenAI 加入 C2PA 指導委員會並採用 Google SynthID 浮水印技術，Kakao、ElevenLabs、NVIDIA 也同步宣布採用，推動 AI 生成內容可驗證性。",
        "url": "https://openai.com/index/advancing-content-provenance/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "gemini"
        ]
      },
      {
        "title": "Googlebook AI 筆電亮相：Android 架構 + ChromeOS + 內建 Gemini Intelligence",
        "desc": "Google 在 I/O 2026 發布 Googlebook 筆電，採用 Android 架構結合 ChromeOS，內建 Gemini Intelligence，預計 2026 秋季上市。",
        "url": "https://www.bnext.com.tw/article/90919/googlebook-android-chromeos-gemini-laptop-launch",
        "source": "數位時代",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "title": "EU AI Act 高風險 AI 系統分類指引徵求意見中",
        "desc": "歐盟執委會就高風險 AI 系統分類草案指引徵求公眾意見，為 AI Act 實施做最後準備。",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        "source": "EU Digital Strategy",
        "tags": [
          "model",
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "DeepSeek-V3.2",
        "author": "DeepSeek",
        "desc": "DeepSeek 最新開源大語言模型，持續在社群獲得高度關注與下載。",
        "url": "https://huggingface.co/deepseek-ai",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Wan Team",
        "desc": "Wan 影片生成家族新成員，專精文字轉圖片轉影片（TI2V）生成任務。",
        "url": "https://huggingface.co/models?sort=trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "OpenDevin",
        "author": "OpenDevin Team",
        "desc": "開源 AI 代理平台，透過撰寫程式碼、使用命令列與瀏覽網頁與世界互動。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Skills",
        "repo": "mattpocock/skills",
        "desc": "Matt Pocock 的可重用代理技能集合，持續佔據 GitHub Trending 第一名。",
        "stars": "55.3k",
        "lang": "TypeScript",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "Nous Research 開發的開源多代理框架，支援複雜任務分解與協作。",
        "stars": "130k",
        "lang": "Python",
        "url": "https://github.com/NousResearch/hermes-agent",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "ml-intern",
        "repo": "ml-intern/ml-intern",
        "desc": "自主 ML 工程師代理，可獨立完成機器學習實驗流程。",
        "stars": "9.7k",
        "lang": "Python",
        "url": "https://github.com/ml-intern/ml-intern",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-20",
    "weekday": "星期三",
    "stats": {
      "claude": 4,
      "openai": 3,
      "gemini": 6,
      "grok": 3,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "agent",
        "title": "Code with Claude London 大會首日：Dreaming、多代理編排與 Outcomes 三大功能亮相",
        "desc": "Anthropic 在倫敦舉辦 Code with Claude 開發者大會，發布 Dreaming（代理自我筆記）、多代理編排（平行分工）與 Outcomes（自動評分修正）三項重大更新。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 新增 Managed Agents：自託管沙箱與 MCP 隧道預覽",
        "desc": "企業級功能：在公司基礎設施上運行代理的自託管沙箱、透過 MCP 隧道連接內部系統而無需暴露公網，進入研究預覽階段。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "KPMG 全球聯盟正式宣布：27.6 萬員工將使用 Claude",
        "desc": "KPMG 與 Anthropic 建立全球戰略聯盟，將 Claude 嵌入 Digital Gateway 平台，為全球超過 27.6 萬名員工提供 AI 輔助審計、稅務與顧問服務。",
        "url": "https://www.anthropic.com/news/anthropic-kpmg",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Andrej Karpathy 加入 Anthropic 預訓練團隊",
        "desc": "OpenAI 共同創辦人 Andrej Karpathy 加入 Anthropic 預訓練團隊，將在 Nick Joseph 旗下組建新團隊，利用 Claude 加速預訓練研究。",
        "url": "https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/",
        "source": "TechCrunch",
        "tags": [
          "claude",
          "model"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "OpenAI 加入 C2PA 指導委員會，為 AI 圖片加入內容溯源認證",
        "desc": "OpenAI 正式加入 C2PA 指導委員會並發布 Verify 公開工具，為 AI 生成圖片加入 SynthID 浮水印與 C2PA 內容溯源認證，提升生成內容可信度。",
        "url": "https://openai.com/index/advancing-content-provenance/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 個人財務功能預覽版上線：Pro 用戶可連結帳戶查看理財儀表板",
        "desc": "OpenAI 為美國 Pro 用戶推出個人財務體驗預覽版，可安全連結銀行帳戶、追蹤支出與帳單、查看淨資產，並針對個人財務狀況提問。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 圖片思考功能擴展至所有付費方案",
        "desc": "原先限定部分用戶的「圖片思考」（Images with thinking）視覺推理功能，正式擴展至所有 ChatGPT 付費方案使用者。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini Spark 正式發布：24/7 全天候個人 AI 代理人，可主動執行任務",
        "desc": "Google I/O 2026 壓軸發布 Gemini Spark，由 3.5 Flash 驅動、採 Antigravity 架構，可在使用者引導下主動執行 Gmail、文件、簡報等任務，即使裝置關閉也能雲端運行。",
        "url": "https://technews.tw/2026/05/20/google-introduces-gemini-3-5-and-gemini-spark/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini 3.5 Flash 正式上線：AI Agent 與程式碼撰寫能力大幅躍進",
        "desc": "Gemini 3.5 Flash 成為全球 Gemini 應用與 Google 搜尋 AI 模式的預設模型，在 Agent 運作與編碼方面顯著優於前代，128K 平均上下文、支援 1M token 長文處理。",
        "url": "https://technews.tw/2026/05/20/google-introduces-gemini-3-5-and-gemini-spark/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Antigravity 2.0 從編碼 IDE 升級為全能代理開發平台",
        "desc": "Google 將 Antigravity 重新定位為完整代理開發平台，新增桌面應用、CLI 與 SDK，支援多代理編排、自訂子代理工作流與背景任務排程。",
        "url": "https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/",
        "source": "TechCrunch",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Google 搜尋大改版：AI 模式重新設計，支援多模態搜尋與迷你應用",
        "desc": "Google 搜尋迎來 25 年來最大改版，AI 驅動的建議取代傳統自動完成，支援文字/圖片/影片/Chrome 分頁等多模態搜尋，可直接在搜尋中運行迷你應用。",
        "url": "https://blog.google/products-and-platforms/products/search/search-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Veo 3 影片生成模型開放 API：Google Photos 新增照片轉影片功能",
        "desc": "Google 將 Veo 3 影片生成模型開放 API 使用，同時在美國版 Google Photos 中推出照片轉影片功能。",
        "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google AI 訂閱方案改制：改用算力消耗制，新增 100 美元 AI Ultra",
        "desc": "Google 全面改採以算力為核心的用量計算機制，新增每月 100 美元的 AI Ultra 方案，原 250 美元方案降至 200 美元。",
        "url": "https://www.bnext.com.tw/article/90990/google-ai-ultra-plans-compute-pricing-gemini-io-2026",
        "source": "數位時代",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Grok Skills 上線第二天：使用者開始分享自訂工作流程範例",
        "desc": "Grok Skills 自 5/18 推出後進入第二天，X 平台上使用者開始分享各種自訂技能設定範例，涵蓋寫作、分析與開發等領域。",
        "url": "https://www.basenor.com/blogs/news/5-xai-grok-updates-you-may-have-missed-this-may",
        "source": "Basenor",
        "tags": [
          "grok",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Grok 4.3 旗艦穩定運行：53 分 Intelligence Index、原生影片輸入",
        "desc": "Grok 4.3 持續作為 xAI 旗艦模型運行，內建推理、百萬 token 上下文與原生影片輸入，每百萬 token 僅 $1.25 具成本競爭力。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok 整合 OpenClaw 開源代理平台：X Premium 用戶免 API 金鑰直接使用",
        "desc": "xAI 將 Grok 整合進 OpenClaw 開源代理平台，X Premium 訂閱者可直接認證使用 Grok 的聊天、生成與搜尋功能。",
        "url": "https://x.ai/news/grok-openclaw",
        "source": "xAI",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "Google I/O 2026 懶人包：Gemini Spark、3.5 Flash、搜尋代理全面啟動",
        "desc": "Google I/O 2026 將 AI 從「回答工具」重新定義為「行動主體」，發布 Gemini Spark 全天候代理、3.5 Flash 新預設模型、搜尋內建 AI 代理等重大更新。",
        "url": "https://www.bnext.com.tw/article/90991/google-gemini-spark-3-5-flash-ai-agent-strategy",
        "source": "數位時代",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "title": "Google 與黑石集團將成立新 AI 雲端合資公司",
        "desc": "華爾街日報報導，Google 與黑石集團（Blackstone）計畫成立新的 AI 雲端合資公司，加速企業 AI 基礎設施部署。",
        "url": "https://technews.tw/2026/05/19/google-and-blackstone-to-launch-new-ai-cloud-venture/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "title": "Android XR 智慧眼鏡亮相：Samsung、Gentle Monster、Warby Parker 合作",
        "desc": "Google 在 I/O 發布 Android XR 智慧眼鏡平台，與 Samsung、Gentle Monster、Warby Parker 合作推出音訊眼鏡，支援「Hey Google」啟動 Gemini，今年秋季上市。",
        "url": "https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "Gemini 3.5 Flash",
        "author": "Google",
        "desc": "Google I/O 發布的最新高效模型，在 Agent 與編碼任務上表現優異，支援 1M token 上下文。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "DeepSeek-R1",
        "author": "DeepSeek",
        "desc": "DeepSeek 推理模型持續獲得社群高度關注，下載量穩居前列。",
        "url": "https://huggingface.co/deepseek-ai",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "I2VGen-XL",
        "author": "Alibaba",
        "desc": "阿里巴巴開源的圖片轉影片生成模型，可將靜態圖片轉化為動態影片。",
        "url": "https://huggingface.co/models?sort=trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Skills",
        "repo": "mattpocock/skills",
        "desc": "可重用 AI 代理技能集合，本週登上 GitHub Trending 第一名。",
        "stars": "55.3k",
        "lang": "TypeScript",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "2026 年最快速成長的開源專案之一，開放式 AI 代理基礎設施平台。",
        "stars": "210k",
        "lang": "Python",
        "url": "https://github.com/openclaw/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Pixelle-Video",
        "repo": "pixelle/pixelle-video",
        "desc": "自動化影片生成管線，從腳本到成品一條龍處理。",
        "stars": "7.4k",
        "lang": "Python",
        "url": "https://github.com/pixelle/pixelle-video",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-19",
    "weekday": "星期二",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 6,
      "grok": 2,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "agent",
        "title": "Code with Claude 倫敦大會開幕：Anthropic 展示程式設計的未來",
        "desc": "Anthropic 在倫敦舉辦兩天制 Code with Claude 開發者大會，主題演講、分組工作坊與現場代理挑戰，聚焦代理記憶、評估與多代理系統。",
        "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
        "source": "MIT Technology Review",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "KPMG 宣布與 Anthropic 全球戰略聯盟：Claude 將嵌入 Digital Gateway",
        "desc": "KPMG 宣布與 Anthropic 建立戰略聯盟，將 Claude 嵌入 Digital Gateway 平台，為全球 27.6 萬名員工提供 AI 能力。",
        "url": "https://www.anthropic.com/news/anthropic-kpmg",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Andrej Karpathy 離開 OpenAI 加入 Anthropic 預訓練團隊",
        "desc": "OpenAI 共同創辦人 Andrej Karpathy 正式宣布加入 Anthropic，將在預訓練團隊下組建新團隊，利用 Claude 加速 AI 預訓練研究。",
        "url": "https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/",
        "source": "TechCrunch",
        "tags": [
          "claude",
          "model"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "Codex 行動版在 ChatGPT App 上線：所有方案皆可使用",
        "desc": "OpenAI 於 5/14 將 Codex 帶入 ChatGPT 行動 App，5/19 已擴展至 iOS/Android 所有方案（含 Free 與 Go），可查看即時專案脈絡、diff 與測試結果。",
        "url": "https://appwrite.io/blog/post/openai-just-shipped-codex-to-the-chatgpt-mobile-app",
        "source": "Appwrite",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "OpenAI 發布 Verify 工具與加入 C2PA：推動 AI 內容溯源",
        "desc": "OpenAI 加入 C2PA 指導委員會並發布公開的 Verify 工具，可驗證圖片是否為 AI 生成或經過修改，同步採用 Google SynthID 浮水印。",
        "url": "https://openai.com/index/advancing-content-provenance/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 個人財務功能預覽：可連結帳戶、追蹤支出與淨資產",
        "desc": "OpenAI 為美國 Pro 用戶推出個人財務體驗預覽版，支援連結銀行帳戶、查看理財儀表板、追蹤帳單與訂閱。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Google I/O 2026 開幕：Gemini 3.5 Flash 發布，成為新一代預設模型",
        "desc": "Google I/O 2026 正式開幕，發布 Gemini 3.5 Flash 模型，在 Agent 與編碼任務上大幅超越前代，API 定價每百萬輸入 token $1.50，立即成為全球 Gemini 應用與搜尋的預設模型。",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Spark 亮相：Google 重新定義 AI 從「回答工具」到「行動主體」",
        "desc": "Google 在 I/O 發布 Gemini Spark 24/7 個人代理人，由 3.5 Flash 驅動、Antigravity 架構，深度整合 Gmail、文件、簡報，可在裝置關閉時仍在雲端運行。",
        "url": "https://www.tomsguide.com/news/live/google-io-2026-live-news-updates",
        "source": "Tom's Guide",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google 搜尋 25 年來最大改版：AI 模式全面升級、迷你應用上線",
        "desc": "Google 搜尋框迎來 25 年來最大升級，AI 驅動建議取代自動完成，支援多模態輸入（文字/圖片/影片/分頁），搜尋結果可直接運行資訊代理與迷你應用。",
        "url": "https://blog.google/products-and-platforms/products/search/search-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Antigravity 2.0 發布：從 IDE 升級為代理開發平台",
        "desc": "Google 發布 Antigravity 2.0，從編碼 IDE 升級為完整代理開發平台，新增桌面應用、CLI、SDK，支援多代理編排與背景任務排程。",
        "url": "https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/",
        "source": "TechCrunch",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 訂閱大改：算力消耗制取代每日提示詞限制，新增 100 美元 Ultra",
        "desc": "Google 全面改用算力消耗制計費，不再按模型分開計算，新增 $100/月 AI Ultra 方案，原 $250 方案降至 $200。",
        "url": "https://www.bnext.com.tw/article/90990/google-ai-ultra-plans-compute-pricing-gemini-io-2026",
        "source": "數位時代",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "C2PA 內容溯源認證登陸 Gemini 應用：可即時驗證內容真偽",
        "desc": "Google 在 Gemini 應用中整合 C2PA Content Credentials，使用者可驗證內容是否為未修改的原始作品，即日起生效。",
        "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Grok Skills 正式上線（5/18）：持久化自訂專業知識開始運作",
        "desc": "Grok Skills 於 5/18 正式推出，使用者可教導 Grok 特定工作流程並跨對話延續，5/19 開始收到首批使用者回饋。",
        "url": "https://grok.com/skills-and-connectors",
        "source": "xAI",
        "tags": [
          "grok",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Grok 4.3 持續穩定運行：內建推理、影片輸入、百萬 token 上下文",
        "desc": "xAI 旗艦模型 Grok 4.3 在五月中旬持續穩定運行，Intelligence Index 53 分，每百萬輸入 token $1.25 維持高性價比。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "model"
        ]
      }
    ],
    "news": [
      {
        "title": "Google I/O 2026 主軸鎖定「全面 AI 化」：從搜尋到硬體全線 AI 升級",
        "desc": "Google I/O 2026 大會以全面 AI 化為主軸，從搜尋引擎、應用程式到硬體裝置（眼鏡、筆電）全線導入 AI 能力。",
        "url": "https://technews.tw/2026/05/18/google-io-conference-focus-full-ai-integration/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "title": "Google 與黑石集團將成立新 AI 雲端合資公司",
        "desc": "華爾街日報報導 Google 與 Blackstone 計畫成立 AI 雲端合資公司，加速企業級 AI 基礎設施部署。",
        "url": "https://technews.tw/2026/05/19/google-and-blackstone-to-launch-new-ai-cloud-venture/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "title": "Android XR 智慧眼鏡平台發布：Samsung、Warby Parker 首批合作夥伴",
        "desc": "Google 在 I/O 發布 Android XR 智慧眼鏡平台，首批與 Samsung、Gentle Monster、Warby Parker 合作推出音訊眼鏡，支援語音啟動 Gemini。",
        "url": "https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "Gemini 3.5 Flash",
        "author": "Google",
        "desc": "Google I/O 當日發布的新旗艦模型，在 Agent 與編碼上表現出色。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "DeepSeek-V3",
        "author": "DeepSeek",
        "desc": "DeepSeek 開源 V3 模型在社群持續獲得高關注度與活躍使用。",
        "url": "https://huggingface.co/deepseek-ai",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "LongCat-Video 13.6B",
        "author": "LongCat Team",
        "desc": "Diffusion Transformer 架構的 136 億參數長影片生成模型。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Skills",
        "repo": "mattpocock/skills",
        "desc": "可重用 AI 代理技能集合，穩居 GitHub Trending 榜首。",
        "stars": "55.3k",
        "lang": "TypeScript",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "Nous Research 的開源多代理框架，支援任務分解與協作。",
        "stars": "130k",
        "lang": "Python",
        "url": "https://github.com/NousResearch/hermes-agent",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "2026 年爆紅開源專案，AI 代理基礎設施平台。",
        "stars": "210k",
        "lang": "Python",
        "url": "https://github.com/openclaw/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-18",
    "weekday": "星期一",
    "stats": {
      "claude": 5,
      "openai": 5,
      "gemini": 5,
      "grok": 4,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude for Small Business 正式推出：一鍵串接 QuickBooks、HubSpot、Canva 等日常工具",
        "desc": "Anthropic 推出 Claude for Small Business 套件，讓小型企業一鍵安裝即可在 Intuit QuickBooks、PayPal、HubSpot、Canva、DocuSign、Google Workspace、Microsoft 365 等工具中使用 Claude 自動化工作流程。",
        "url": "https://www.anthropic.com/news/claude-for-small-business",
        "source": "Anthropic",
        "tags": [
          "claude",
          "product",
          "integration"
        ]
      },
      {
        "sub": "integration",
        "title": "Anthropic 與 PwC 擴大合作：設立卓越中心、培訓 30,000 名專業人員",
        "desc": "Anthropic 與 PwC 宣布擴大戰略聯盟，建立聯合卓越中心並推出認證計畫，將訓練 30,000 名 PwC 專業人員使用 Claude 執行技術開發、交易及企業轉型。",
        "url": "https://www.anthropic.com/news/pwc-expanded-partnership",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 企業採用率達 34.4% 超越 OpenAI，登頂 Ramp AI 指數",
        "desc": "根據 Ramp AI 指數五月版報告，Anthropic 產品的企業採用率達 34.4%，首次超越 OpenAI 的 32.3%，顯示 Claude 在企業市場持續攀升。",
        "url": "https://www.mexc.co/en-PH/news/1094196",
        "source": "MEXC News",
        "tags": [
          "claude",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 調整 Claude 用量限制，因應 Agent 使用者激增",
        "desc": "隨著越來越多企業使用 Claude Agent 功能，Anthropic 調整了 API 定價與速率限制策略，以平衡運算成本與用戶需求。",
        "url": "https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens",
        "source": "Axios",
        "tags": [
          "claude",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Code w/ Claude 2026 即將登陸倫敦（5/20-21）與東京（6/5-6）",
        "desc": "Anthropic 宣布 Code w/ Claude 開發者大會將於 5 月 20-21 日在倫敦、6 月 5-6 日在東京舉辦，聚焦 Claude Code 與 Agent 開發實務。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 推出個人財務功能：連結銀行帳戶、即時追蹤支出與投資",
        "desc": "OpenAI 為美國 Pro 用戶推出 ChatGPT 個人財務體驗，透過 Plaid 安全串接超過 12,000 家金融機構，提供支出追蹤、帳單提醒、淨資產儀表板與財務問答。",
        "url": "https://openai.com/index/personal-finance-chatgpt/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Codex 進入手機 App：隨時隨地掌握程式碼工作進度",
        "desc": "OpenAI 將 Codex 預覽版整合進 ChatGPT 行動 App（iOS/Android），所有方案用戶都能透過手機監控 Codex 在遠端環境的執行狀態。",
        "url": "https://openai.com/index/work-with-codex-from-anywhere/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 全面上線：幻覺減少 52.5%、個人化大幅提升",
        "desc": "GPT-5.5 Instant 正式成為 ChatGPT 預設模型，在醫療、法律、金融等高風險領域的幻覺率降低 52.5%，並強化記憶與個人化回應能力。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Memory Sources 上線：透明化個人化來源與控制",
        "desc": "ChatGPT 推出記憶來源功能，讓用戶查看哪些過往對話、檔案與 Gmail 連結被用於個人化回應，並可即時刪除或修正過時資訊。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 強化敏感對話安全機制：跨對話風險偵測與去激化",
        "desc": "OpenAI 改善 ChatGPT 在自殺、自傷等高風險對話中的處理能力，新增跨對話安全摘要，協助模型更謹慎地回應並引導用戶獲取協助。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Google I/O 2026 明日開幕：新 Gemini 模型將對標 GPT-5.5",
        "desc": "Google I/O 大會 5/19 開幕，預計發表新 Gemini 模型（可能為 3.2 或 3.5），效能對標 GPT-5.5，並將驅動 Android AI 自動化等新功能。",
        "url": "https://www.androidheadlines.com/2026/05/google-io-new-gemini-model-launch-gpt-5-5-rival.html",
        "source": "Android Headlines",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Intelligence 登陸 Android：跨應用自動化、螢幕理解與多步驟任務",
        "desc": "Google 宣布 Gemini Intelligence 將為 Android 帶來 AI 代理能力，可理解螢幕內容並完成跨應用多步驟任務，如自動建立購物車或預訂餐廳。",
        "url": "https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini Omni 曝光：統一文字、圖片、影片生成於單一介面",
        "desc": "外洩資訊顯示 Google 正開發 Gemini Omni 模型，將文字、圖片與影片生成整合進單一 Gemini 介面，為主流 AI 模型首見的全模態統一架構。",
        "url": "https://imini.com/blogs/gemini-omni-google-io-2026",
        "source": "iMini AI",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Android Show I/O 版重點：Googlebooks 筆電、Android Auto AI、Material 3 Expressive",
        "desc": "Google I/O 前夕 Android Show 揭露多項新品：Googlebooks 高階 Android 筆電類別、Android Auto 加入 Gemini 與 Dolby Atmos、Material 3 Expressive 設計語言。",
        "url": "https://www.tomsguide.com/phones/live/the-android-show-google-i-o-edition-live-all-the-latest-android-gemini-ai-and-android-xr-news-as-it-happens",
        "source": "Tom's Guide",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Android XR 眼鏡將於 I/O 亮相：Gemini 驅動的穿戴式 AI",
        "desc": "Google 確認將在 I/O 2026 展示 Android XR 智慧眼鏡原型，整合 Gemini 模型提供即時視覺理解與語音互動。",
        "url": "https://www.androidauthority.com/what-to-expect-from-google-io-2026-3664979/",
        "source": "Android Authority",
        "tags": [
          "gemini",
          "product"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Build Beta 推出：xAI 進軍 Agentic Coding CLI 領域",
        "desc": "xAI 推出 Grok Build 程式碼代理 CLI 工具，定位為專業軟體工程師的編碼助手，內含於新 SuperHeavy 訂閱方案（$299/月，首半年優惠 $99/月）。",
        "url": "https://www.engadget.com/2173482/xai-coding-agent-grok-build/",
        "source": "Engadget",
        "tags": [
          "grok",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Grok Web 新增 Connectors：深度整合 SharePoint、Outlook、Google Workspace 等",
        "desc": "xAI 在 Grok Web 推出 Connectors 功能，串接 SharePoint、Outlook、OneDrive、Google Workspace、Notion、GitHub、Linear 等工具，可直接在對話中操作郵件、日曆與文件。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "xAI 推出 Custom Voices：幾秒音訊即可克隆語音用於 TTS 與 Agent",
        "desc": "xAI 推出自訂語音功能，用戶只需幾秒音訊即可克隆聲音，應用於 Grok Text-to-Speech 與 Voice Agent API，並提供語音庫管理介面。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Imagine API 新增 Quality Mode：更高寫實度與文字渲染",
        "desc": "xAI 為 Grok Imagine API 加入 Quality Mode，提升圖像寫實度、文字渲染能力與創意控制精細度，已向企業開發者開放。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "product"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Perplexity Personal Computer：全天候 AI 代理在 Mac mini 上自動執行任務",
        "desc": "Perplexity 推出 Personal Computer 功能，在專用 Mac mini 上運行常駐 AI 代理，可 24/7 監控觸發條件、主動執行任務，成為用戶的數位分身。",
        "url": "https://blog.mean.ceo/perplexity-news-may-2026/",
        "source": "Mean CEO Blog",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "Cursor 年收入突破 20 億美元：AI 原生 IDE 稱霸開發工具市場",
        "desc": "AI 程式碼編輯器 Cursor 的年化經常性收入（ARR）突破 20 億美元，其重新打造的平行代理介面鞏固了 AI 原生 IDE 的領導地位。",
        "url": "https://datanorth.ai/blog/top-10-ai-tools-for-2026",
        "source": "DataNorth AI",
        "tags": [
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "Apple iOS 27 將開放第三方 AI：Gemini、Claude 可直接整合 Siri",
        "desc": "Apple 計畫在 iOS 27 推出 Extensions 功能，允許 Google Gemini 與 Anthropic Claude 等第三方 AI 模型整合進 Siri、寫作工具與 Image Playground。",
        "url": "https://www.inside.com.tw/article/41232-ios-27-apple-intelligence-third-party-ai-models-google-anthropic",
        "source": "INSIDE",
        "tags": [
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Wan-AI",
        "desc": "50 億參數文字轉圖轉影片模型，支援高品質影片生成，媲美商業方案。",
        "url": "https://huggingface.co/models",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "State of Open Source Spring 2026",
        "author": "Hugging Face",
        "desc": "HF 春季報告：平台模型數突破 100 萬，2025 年新模型多數源自中國或其衍生。",
        "url": "https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026",
        "tags": [
          "open"
        ]
      },
      {
        "name": "Gemma 4 Preview",
        "author": "Google",
        "desc": "Google I/O 前夕釋出 Gemma 4 預覽版，開源輕量模型系列持續迭代。",
        "url": "https://huggingface.co/models",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "nicklama/openclaw",
        "desc": "本地 AI 助手閘道器，連接 50+ 整合（WhatsApp、Telegram、Slack 等），星數飆破 210K。",
        "stars": "210k+",
        "lang": "TypeScript",
        "url": "https://github.com/nicklama/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "mattpocock/skills",
        "repo": "mattpocock/skills",
        "desc": "為 Claude Code 提供工程師實用 Skills 的 .claude 目錄集合，55K+ 星。",
        "stars": "55k+",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "NousResearch 的可成長型 AI 代理框架，129K+ 星，主打漸進式能力擴展。",
        "stars": "129k+",
        "lang": "Python",
        "url": "https://github.com/NousResearch/hermes-agent",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-17",
    "weekday": "星期日",
    "stats": {
      "claude": 5,
      "openai": 5,
      "gemini": 5,
      "grok": 4,
      "news": 4,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "tool",
        "title": "Claude for Legal 正式發布：20+ MCP 連接器、12 個法律實務外掛",
        "desc": "Anthropic 推出 Claude for Legal 套件，提供超過 20 個 MCP 連接器串接 Westlaw、LexisNexis、Everlaw、iManage、DocuSign 等法律工具，並針對商事、併購、智財、隱私、訴訟等 12 個實務領域推出專用外掛。",
        "url": "https://www.lawnext.com/2026/05/anthropic-goes-all-in-on-legal-releasing-more-than-20-connectors-and-12-practice-area-plugins-for-claude.html",
        "source": "LawSites",
        "tags": [
          "claude",
          "tool",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Developer Platform 新增 Opus 4.7 Fast Mode 研究預覽",
        "desc": "Claude 開發者平台為 Claude Opus 4.7 啟用 Fast Mode，大幅加快輸出 token 生成速度，目前以研究預覽形式提供給 API 用戶。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 與 Gates Foundation 達成 2 億美元 AI 合作夥伴關係",
        "desc": "Anthropic 與蓋茲基金會簽署 2 億美元合作協議，將 Claude 技術導入全球公衛、教育與發展中國家基礎建設場景。",
        "url": "https://blog.mean.ceo/anthropic-claude-news-may-2026/",
        "source": "Mean CEO Blog",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 聯手 Blackstone、Goldman Sachs 成立 15 億美元 AI 服務基金",
        "desc": "Anthropic 與 Blackstone、Hellman & Friedman、Goldman Sachs 合資成立 15 億美元 AI 服務公司，協助企業部署 Claude 技術。",
        "url": "https://www.anthropic.com/news",
        "source": "Anthropic",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "tutorial",
        "title": "電腦玩物：不用寫程式的瀏覽器自動化，Codex for Chrome 操作 Google 地圖與 Gemini",
        "desc": "電腦玩物站長分享使用 Codex for Chrome 外掛進行瀏覽器自動化實測，包含操作 Google 地圖、Evernote、Gemini 與社群平台的完整教學。",
        "url": "https://www.playpcesor.com/2026/05/codex-for-chrome-google-evernote-gemini.html",
        "source": "電腦玩物",
        "tags": [
          "claude",
          "tutorial",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 個人理財功能上線：連結銀行帳戶、追蹤支出與淨資產",
        "desc": "OpenAI 推出 ChatGPT 個人理財體驗，Pro 用戶可透過 Plaid 安全連結超過 12,000 家金融機構帳戶，在儀表板追蹤支出、帳單、訂閱、淨資產與投資表現。",
        "url": "https://openai.com/index/personal-finance-chatgpt/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Codex 登陸 ChatGPT 手機 App：隨時遠端操控 Mac 上的編碼任務",
        "desc": "OpenAI 將 Codex 編碼代理整合進 ChatGPT iOS/Android App，所有方案用戶（含免費版）可用手機遠端監控與操作在 Mac 上執行的 Codex 工作。",
        "url": "https://openai.com/index/work-with-codex-from-anywhere/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 成為 ChatGPT 預設模型：幻覺率降 52.5%",
        "desc": "OpenAI 以 GPT-5.5 Instant 取代舊版預設模型，在醫療、法律、金融等高風險領域的幻覺聲明減少 52.5%，錯誤聲明降低 37.3%，個人化與上下文記憶能力顯著提升。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Memory Sources 全面開放：可查看影響回應的資訊來源",
        "desc": "Memory Sources 功能擴展至所有消費者方案，用戶可追蹤哪些過去對話、檔案或 Gmail 連結影響了 ChatGPT 的個人化回應，並進行編輯管理。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "tutorial",
        "title": "電腦玩物：一般人如何快速上手 Codex，讓 AI 整理文件表格並建立自動化流程",
        "desc": "電腦玩物推出 Codex 超完整圖文教學，示範非工程師如何用 Codex 處理電腦檔案、整理表格、建立自動化工作流程。",
        "url": "https://www.playpcesor.com/2026/05/codex-ai.html",
        "source": "電腦玩物",
        "tags": [
          "openai",
          "tutorial",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Gemini Spark 曝光：Google 全天候 AI Agent 可自動處理 Gmail、文件與跨 App 工作流",
        "desc": "Google 開發中的 Gemini Spark（前稱 Gemini Agent）可自主執行多步驟任務，包括清理 Gmail 垃圾信、整理會議筆記、建立個人化新聞摘要，用戶可透過「Skills」設定週期性工作指令。",
        "url": "https://9to5google.com/2026/05/14/gemini-spark-insight/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google I/O 2026 預告：5/19 主題演講將發表新 Gemini 模型挑戰 GPT-5.5",
        "desc": "Google I/O 2026 大會將於 5 月 19 日揭幕，預計發表新一代 Gemini 模型（可能為 Gemini 4.0 或 Gemini Omni），整合文字、圖片、影片生成於單一管線。",
        "url": "https://www.androidheadlines.com/2026/05/google-io-new-gemini-model-launch-gpt-5-5-rival.html",
        "source": "Android Headlines",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini Intelligence 登場：Android 自動化、生成式 Widget 與 Rambler 語音修潤",
        "desc": "Google 發表 Gemini Intelligence，在 Android 帶來多步驟任務自動化、Chrome 摘要與表單填寫、自然語言生成自訂 Widget，以及將口語轉專業文字的 Rambler 功能。",
        "url": "https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "product",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "數位時代：追趕 Claude！Google 將推出 Gemini Mac App，搶佔桌機 AI 助理入口",
        "desc": "數位時代報導 Google 正祕密測試 macOS 版 Gemini 桌面應用程式，企圖在桌機端搶佔 AI 助理第一螢幕入口，直接挑戰 Claude Desktop。",
        "url": "https://www.bnext.com.tw/article/90365/google-geminimacapp-janus",
        "source": "數位時代",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Gemini Interactions API 重大變更：5/26 起新 Schema 成預設，6/8 移除舊版",
        "desc": "Google AI 開發者文件公告 Gemini Interactions API 將於 5 月 26 日切換預設 Schema，6 月 8 日永久移除舊版，開發者需盡快遷移。",
        "url": "https://ai.google.dev/gemini-api/docs/interactions-breaking-changes-may-2026",
        "source": "Google AI for Developers",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "xAI 推出 Grok Build Beta：終端機 AI 編碼代理正面挑戰 Claude Code",
        "desc": "xAI 於 5/14 發布 Grok Build CLI beta，基於 Grok 4.3（16-agent Heavy 架構、200 萬 token 上下文），可規劃專案、編寫檔案、執行 shell 命令。SuperHeavy 訂閱制首六個月優惠 $99/月。",
        "url": "https://x.ai/news/grok-build-cli",
        "source": "xAI",
        "tags": [
          "grok",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Web 新增 Connectors：整合 SharePoint、Outlook、Notion、GitHub 等日常工具",
        "desc": "xAI 為 Grok Web 推出 Connectors 功能，深度整合 SharePoint、Outlook、OneDrive、Google Workspace、Notion、GitHub、Linear 等工具到對話體驗中。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "product",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Imagine API 新增 Quality Mode：更高擬真度與文字渲染能力",
        "desc": "xAI 為 Grok Imagine API 加入 Quality Mode，帶來更高擬真度、更強文字渲染與創意控制能力，已向企業開發者開放。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Custom Voices：數秒音訊即可複製個人聲音用於 TTS 與 Voice Agent",
        "desc": "xAI 推出 Custom Voices 功能，用戶只需數秒音訊即可複製自己的聲音，立即用於 Grok Text to Speech 和 Voice Agent API。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "product"
        ]
      }
    ],
    "news": [
      {
        "title": "Perplexity Deep Research 可直接產出 PPT、試算表與儀表板",
        "desc": "Perplexity 更新 Deep Research 模式，用戶可在搜尋中直接生成 PowerPoint 簡報、Excel 試算表與互動式儀表板，並透過 Space Skills 封裝團隊可複用的專業工作流。",
        "url": "https://www.perplexity.ai/changelog/improved-computer-models-and-enterprise-updates---may-4-2026",
        "source": "Perplexity",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "Cursor 3.4 發布：雲端開發環境支援 Agent、進駐 Microsoft Teams",
        "desc": "Cursor IDE 發布 3.4 版，新增雲端 Agent 開發環境，並整合進 Microsoft Teams，讓團隊可直接在協作平台中使用 AI 編碼助手。",
        "url": "https://cursor.com/",
        "source": "Cursor",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "數位時代：2026 百大 AI 排行榜，Gemini 與 Claude 強勢崛起",
        "desc": "數位時代引用 a16z 報告，揭示 2026 年 AI 助理版圖五大變局：ChatGPT 仍居首但份額下降，Gemini 與 Claude 快速崛起改變競爭格局。",
        "url": "https://www.bnext.com.tw/article/90277/ai-assistant-race-transforming-user-costs-and-platform-ecosystems",
        "source": "數位時代",
        "tags": [
          "model"
        ]
      },
      {
        "title": "OpenAI 與 Novo Nordisk 策略合作：AI 導入藥物研發到商業營運全流程",
        "desc": "丹麥製藥巨頭 Novo Nordisk 宣布與 OpenAI 策略合作，將 AI 整合至藥物發現、臨床試驗、製造、供應鏈與商業營運全環節。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "source": "Crescendo AI",
        "tags": [
          "openai",
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Wan-AI",
        "desc": "50 億參數文字到圖片再到影片生成模型，支援 TI2V pipeline 一站式從文字描述產出動態影片。",
        "url": "https://huggingface.co/models?sort=trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "ARIS Research Harness",
        "author": "ARIS-Team",
        "desc": "開源研究框架，使用跨模型對抗式協作確保長期研究成果的可靠性與可複現性。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "OpenDevin",
        "author": "OpenDevin",
        "desc": "開源 AI 代理平台，能透過寫程式、使用命令列與瀏覽網頁與世界互動，支援多種開發任務自動化。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenHuman",
        "repo": "tinyhumansai/OpenHuman",
        "desc": "開源桌面 AI Agent，能在第一天就了解用戶偏好與上下文，無需提示即可主動提供個人化協助。",
        "stars": "18.2k",
        "lang": "TypeScript",
        "url": "https://github.com/tinyhumansai/OpenHuman",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "pi-mono",
        "repo": "pi-mono/pi-mono",
        "desc": "AI Agent 工具包：整合編碼 CLI、統一 LLM API、TUI/Web UI、Slack Bot 與 vLLM pods，43.9k stars。",
        "stars": "43.9k",
        "lang": "Python",
        "url": "https://github.com/pi-mono/pi-mono",
        "tags": [
          "agent",
          "tool",
          "open"
        ]
      },
      {
        "name": "Pixelle-Video",
        "repo": "pixelle-ai/Pixelle-Video",
        "desc": "全自動影片生成 pipeline：輸入主題即產出含腳本、AI 視覺、語音合成、配樂與最終合成的完整影片。",
        "stars": "9.2k",
        "lang": "Python",
        "url": "https://github.com/pixelle-ai/Pixelle-Video",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-16",
    "weekday": "星期六",
    "stats": {
      "claude": 5,
      "openai": 5,
      "gemini": 5,
      "grok": 4,
      "news": 4,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude for Small Business 上線：15 個技能串接 QuickBooks、HubSpot 等中小企業工具",
        "desc": "Anthropic 推出 Claude for Small Business，提供 15 個預建技能與連接器，整合 Intuit QuickBooks、PayPal、HubSpot、Canva、DocuSign、Google Workspace 及 Microsoft 365，並啟動 10 城市免費 AI 培訓巡迴。",
        "url": "https://www.anthropic.com/news/claude-for-small-business",
        "source": "Anthropic",
        "tags": [
          "claude",
          "product",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 訂閱制大改：Agent SDK 用量獨立計費，6 月 15 日生效",
        "desc": "Anthropic 宣布將 Claude 訂閱拆分為兩個計費池：第一方工具用量與第三方 Agent SDK 用量分開計算，Pro 方案每月獲 $20 Agent 額度，Max 5x 為 $100，Max 20x 為 $200。",
        "url": "https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens",
        "source": "Axios",
        "tags": [
          "claude",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 週用量上限提高 50%，Pro/Max/Team/Enterprise 均適用",
        "desc": "官方 @ClaudeDevs 帳號宣布 Claude Code 每週用量上限提升 50%，適用所有 Pro、Max、Team 及按席位 Enterprise 用戶，優惠期至 2026 年 7 月 13 日。",
        "url": "https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026",
        "source": "Pasquale Pillitteri",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Claude Microsoft 365 外掛正式上線：Excel、PowerPoint、Word GA，Outlook 公測中",
        "desc": "Claude 的 Microsoft 365 增益集已全面開放，支援 Excel、PowerPoint 與 Word，Outlook 側邊欄則進入公開測試，可跨應用保留對話上下文並同步編輯。",
        "url": "https://releasebot.io/updates/anthropic/claude",
        "source": "Releasebot",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "agent",
        "title": "PwC 擴大與 Anthropic 合作：建立卓越中心，培訓 3 萬名專業人員使用 Claude",
        "desc": "PwC 與 Anthropic 擴大策略聯盟，共同成立卓越中心，計畫培訓並認證 30,000 名 PwC 專業人員使用 Claude 進行技術建置、交易執行與企業功能再造。",
        "url": "https://www.anthropic.com/news/pwc-expanded-partnership",
        "source": "Anthropic",
        "tags": [
          "claude",
          "agent",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 新增「信任聯絡人」安全功能，可在緊急情況通知指定對象",
        "desc": "ChatGPT 推出 Trusted Contact 功能，用戶可選擇一位信任對象，當系統偵測到嚴重自殺相關安全疑慮時，可自動通知該聯絡人。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 進階帳戶安全上線：支援 Passkey、安全金鑰與登入通知",
        "desc": "啟用 Advanced Account Security 後，ChatGPT 改用更強的登入方式如 Passkey 或安全金鑰，並新增復原金鑰、縮短活躍工作階段、登入通知與工作階段管理。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 記憶來源功能全面開放，讓用戶看見影響回應的資訊來源",
        "desc": "Memory Sources 功能擴展至所有消費者方案，用戶可查看哪些過去對話、檔案或 Gmail 連結資訊影響了 ChatGPT 的個人化回應。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 免費版新增網頁行內圖片，視覺話題更直觀",
        "desc": "免費用戶的 ChatGPT 回應中將顯示更多來自網路的行內圖片，幫助理解名人、地標、產品等視覺性主題。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "ChatGPT for Excel & Google Sheets 全球上線",
        "desc": "ChatGPT Business 支援 Excel 與 Google Sheets 側邊欄，可直接在試算表中建立、清理、更新與解釋工作簿內容。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "integration",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Gemini Intelligence 登場：AI 自動化、生成式 UI Widget 與 Rambler 語音修潤進駐 Android",
        "desc": "Google 發表 Gemini Intelligence，為 Android 帶來多步驟任務自動化、Chrome 內容摘要與表單填寫、自然語言生成自訂 Widget，以及將口語轉為專業文字的 Rambler 功能，今夏先在 Pixel 與 Samsung 旗艦上線。",
        "url": "https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/",
        "source": "Google Blog",
        "tags": [
          "gemini",
          "product",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini Omni 模型洩漏：統一文字、圖片、影片生成，預計 Google I/O 發表",
        "desc": "Google I/O 2026（5/19-20）前夕，Gemini 介面中出現 Gemini Omni 字串，暗示這是首個整合文字、圖片與影片生成的統一管線模型，可能推出 Flash 與 Pro 兩個版本。",
        "url": "https://www.aixploria.com/en/ai-radar/google-gemini-omni-leak-video-model-io-2026/",
        "source": "AIxploria",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Spark AI 代理曝光：可自主執行跨 App 多步驟任務",
        "desc": "Google 應用測試版中發現名為 Gemini Spark 的進階 AI 代理，可自主管理 Gmail、建立技能處理重複任務，預計在 Google I/O 2026 正式亮相。",
        "url": "https://9to5google.com/2026/05/14/gemini-spark-insight/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google 全力將 Gemini 打造為 Android 作業系統核心 AI 層",
        "desc": "Google 在 Apple AI 改版前加速佈局，將 Gemini 從聊天機器人轉型為跨手機、瀏覽器、汽車與筆電的作業系統級智慧層，包含 Chrome 自動瀏覽、智慧填表與 Android Auto 整合。",
        "url": "https://www.cnbc.com/2026/05/12/google-races-put-gemini-at-center-of-android-before-apples-ai-reboot.html",
        "source": "CNBC",
        "tags": [
          "gemini",
          "product",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "iOS 27 將開放第三方 AI 預設：Gemini、Claude 可取代 ChatGPT 成為 Siri 預設服務",
        "desc": "Apple 計畫在 iOS 27 開放第三方 AI 服務為預設選項，Google Gemini 與 Anthropic Claude 已進入測試，用戶可在 Siri 設定中一鍵切換不同 AI 服務。",
        "url": "https://applealmond.com/posts/311967",
        "source": "蘋果仁",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Build 編碼代理上線：終端原生 CLI 支援 8 個並行子代理與 MCP",
        "desc": "xAI 推出 Grok Build 測試版，基於 Grok 4.3 beta 模型與 200 萬 token 上下文視窗，可同時啟動最多 8 個並行 AI 代理進行規劃、搜尋與寫碼，支援 MCP 伺服器與 worktree 整合。",
        "url": "https://x.ai/news/grok-build-cli",
        "source": "xAI",
        "tags": [
          "grok",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "xAI 推出 SuperHeavy 訂閱：$299/月含 Grok Build，首六個月優惠 $99",
        "desc": "xAI 新增 SuperHeavy 訂閱層級，包含 Grok Build CLI 存取權，定價 $299/月，限時優惠前六個月 $99/月，定位為專業開發者的進階方案。",
        "url": "https://www.engadget.com/2173482/xai-coding-agent-grok-build/",
        "source": "Engadget",
        "tags": [
          "grok",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Imagine API 新增高品質模式，語音 API 支援自訂聲音克隆",
        "desc": "xAI 為 Grok Imagine API 加入 Quality Mode 提升真實感與文字渲染，同時推出 Custom Voices 功能，僅需數秒音訊即可克隆聲音用於 TTS 與語音代理 API。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "product",
          "tool"
        ]
      },
      {
        "sub": "model",
        "title": "xAI 退役舊模型：5/15 起 API 請求自動導向 Grok 4.3",
        "desc": "自 2026 年 5 月 15 日起，多個舊版 xAI 模型從 API 退役，所有請求自動重導至 grok-4.3，開發者需更新整合。",
        "url": "https://docs.x.ai/developers/migration/may-15-retirement",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "model"
        ]
      }
    ],
    "news": [
      {
        "title": "主流 AI 聊天機器人個資處理標準大不同，ChatGPT 較易洩漏聯絡資訊",
        "desc": "MIT Technology Review 測試 ChatGPT、Gemini、Claude、Perplexity 與 Grok 的個資處理方式，發現各平台標準不一，有的會提供看似真實的電話號碼或住址，凸顯訓練資料隱私隱憂。",
        "url": "https://infosecu.technews.tw/2026/05/15/chatgpt-gave-out-my-address-and-phone-number",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "gemini",
          "claude"
        ]
      },
      {
        "title": "ChatGPT 對話紀錄可推測五大人格特質，外向性準確率達 44%",
        "desc": "研究顯示 ChatGPT 使用紀錄能預測用戶人格特質，在月活 8 億用戶規模下，若用於精準廣告或輿論影響，潛在衝擊不容忽視。",
        "url": "https://technews.tw/2026/05/10/your-chatgpt-history-is-a-personality-test/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "title": "2026 百大 AI 排行榜：Gemini 與 Claude 強勢崛起，a16z 報告揭五大變局",
        "desc": "a16z 發布 2026 年 AI 排行報告，Gemini 與 Claude 市佔與影響力大幅提升，AI 代理大爆發成為年度主軸，生態便利性與專業推理深度的路線之爭白熱化。",
        "url": "https://www.bnext.com.tw/article/90277/ai-assistant-race-transforming-user-costs-and-platform-ecosystems",
        "source": "數位時代",
        "tags": [
          "gemini",
          "claude",
          "openai"
        ]
      },
      {
        "title": "蘋果仁實測：3 組 ChatGPT 與 Gemini 手寫筆觸風格 Prompt 指令分享",
        "desc": "蘋果仁分享三組手繪風格 Prompt 指令，讓 ChatGPT 與 Gemini 生成具手寫質感的圖片，適用於社群貼文與個人創作。",
        "url": "https://applealmond.com/posts/312152",
        "source": "蘋果仁",
        "tags": [
          "openai",
          "gemini",
          "tutorial"
        ]
      }
    ],
    "hf": [
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Wan-AI",
        "desc": "50 億參數的文字轉圖片轉影片模型，專精 Text-to-Image-to-Video 生成管線，開源社群熱門選擇。",
        "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "SmolVLM2-2.2B-Instruct",
        "author": "HuggingFaceTB",
        "desc": "輕量級 22 億參數視覺語言模型，支援圖片與影片理解，適合邊緣裝置部署。",
        "url": "https://huggingface.co/HuggingFaceTB/SmolVLM2-2.2B-Instruct",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Qwen3-235B-A22B",
        "author": "Qwen",
        "desc": "Qwen 最新 2350 億參數混合專家模型（活躍 220 億），支援 119 種語言與思維切換，在推理與程式碼基準上表現優異。",
        "url": "https://huggingface.co/Qwen/Qwen3-235B-A22B",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "mattpocock/skills",
        "repo": "mattpocock/skills",
        "desc": "為 Claude Code 打造的實用技能集，直接來自作者的 .claude 目錄，本週從第 3 躍升至 GitHub 趨勢榜第 1 名。",
        "stars": "15.2k",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "claude",
          "tool",
          "open"
        ]
      },
      {
        "name": "warpdotdev/warp",
        "repo": "warpdotdev/warp",
        "desc": "以終端為基礎的智能開發環境，本週急升至趨勢榜第 2 名，支援 AI 輔助的命令列工作流程。",
        "stars": "25.8k",
        "lang": "Rust",
        "url": "https://github.com/warpdotdev/warp",
        "tags": [
          "tool",
          "agent",
          "open"
        ]
      },
      {
        "name": "karpathy/karpathy-skills",
        "repo": "karpathy/karpathy-skills",
        "desc": "Andrej Karpathy 的 CLAUDE.md 配置檔，用於改進 Claude Code 行為的單一設定檔案，開發者社群廣泛參考。",
        "stars": "12.5k",
        "lang": "Markdown",
        "url": "https://github.com/karpathy/karpathy-skills",
        "tags": [
          "claude",
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-15",
    "weekday": "星期五",
    "stats": {
      "claude": 4,
      "openai": 4,
      "gemini": 4,
      "grok": 3,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude for Small Business 全美巡迴開跑，首站芝加哥半日免費 AI 工作坊",
        "desc": "Anthropic 啟動 Claude for Small Business 全美巡迴活動，每站提供 100 位小企業主免費 AI 流暢度培訓與實作工作坊，首站芝加哥 5/14 出發。",
        "url": "https://www.anthropic.com/news/claude-for-small-business",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 代理 SDK 計費分離政策細節公布，6/15 生效",
        "desc": "Anthropic 進一步說明代理 SDK 獨立計費細節：信用額度不累積、超額按 API 費率計費，互動式聊天與 Cowork 仍沿用訂閱限額。",
        "url": "https://thenewstack.io/anthropic-agent-sdk-credits/",
        "source": "The New Stack",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "PwC 成立 Claude 卓越中心，3 萬人培訓認證計畫啟動",
        "desc": "PwC 與 Anthropic 聯合成立卓越中心，深化 Claude 在技術開發、交易執行與企業轉型中的應用，並啟動 3 萬名專業人員的培訓認證計畫。",
        "url": "https://www.anthropic.com/news/pwc-expanded-partnership",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude For Legal 持續發酵，大型律所公開採用案例",
        "desc": "Freshfields、Quinn Emanuel、Holland & Knight 等大型律所陸續公開使用 Claude 處理實際案件，Fortune 與 Bloomberg 密集報導法律科技變革。",
        "url": "https://fortune.com/2026/05/12/anthropic-legal-plug-in-release-claude-cowork-big-law/",
        "source": "Fortune",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 個人理財工具預覽：Pro 用戶可透過 Plaid 連接銀行帳戶",
        "desc": "OpenAI 在美國為 Pro 用戶推出個人理財功能預覽版，透過 Plaid 連接超過 1.2 萬家金融機構，可進行消費分析與財務規劃問答。",
        "url": "https://techcrunch.com/2026/05/15/openai-launches-chatgpt-for-personal-finance-will-let-you-connect-bank-accounts/",
        "source": "TechCrunch",
        "tags": [
          "openai",
          "product",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 考慮控告 Apple，ChatGPT 整合合作成效不如預期",
        "desc": "OpenAI 聘請外部律師評估對 Apple 採取法律行動，認為 ChatGPT 在 iOS 的曝光度與整合深度不足，合作成效遠低於預期，重新談判已陷入僵局。",
        "url": "https://www.inside.com.tw/article/41302-openai-considers-legal-action-against-apple",
        "source": "INSIDE",
        "tags": [
          "openai",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Mac 版撤銷舊憑證，6/12 前需更新否則無法開啟",
        "desc": "OpenAI 因安全事件撤銷 ChatGPT Mac 版舊憑證，用戶必須在 6 月 12 日前更新至最新版本，否則應用程式將無法開啟。",
        "url": "https://applealmond.com/posts/312782",
        "source": "蘋果仁",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 檔案庫與 Codex 行動版擴展更新",
        "desc": "File Library 擴展至 Free/Go 用戶含 EEA 地區，新增儲存管理；行動端 Codex 預覽可從手機啟動、審核操作與檢視即時差異。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Googlebook AI 筆電合作夥伴出列：Intel、Qualcomm、MediaTek 提供算力",
        "desc": "Google 公布 Googlebook 處理器合作夥伴包括 Intel、Qualcomm 與 MediaTek，Arm 提供底層運算技術，Acer、ASUS、Dell、HP、Lenovo 等品牌秋季推出首批機型。",
        "url": "https://ccc.technews.tw/2026/05/14/google-partners-with-intel-arm-qualcomm-and-mediatek-on-googlebook/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "agent",
        "title": "Gemini Spark 代理名稱出現在 Google App 測試版",
        "desc": "Google app 17.23 測試版出現 Gemini Spark 新功能與彗星圖示，取代先前的 Gemini Agent 命名，為 I/O 大會更進階的代理能力預熱。",
        "url": "https://9to5google.com/2026/05/14/gemini-spark-insight/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google I/O 2026 預測懶人包：Gemini 4、AI 眼鏡、Android 與 Chrome OS 合體",
        "desc": "INSIDE 整理 I/O 大會預測重點：Gemini 4 新模型、Project Astra AI 眼鏡、Android 與 Chrome OS 整合為 Aluminium OS、Remy 代理與 Gemini Intelligence 全面升級。",
        "url": "https://www.inside.com.tw/article/41216-google-io-2026-what-to-expect",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "model",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Android Auto 大更新搭載 Gemini，車載 AI 體驗全面客製化",
        "desc": "Android Auto 2026 更新加入 Gemini AI 功能，提供更客製化的車載體驗，搭配 Google Built-in 系統讓車輛更智慧。",
        "url": "https://www.inside.com.tw/article/41279-android-auto-2026",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Build CLI 早期測試版開放，16 代理架構處理複雜多檔任務",
        "desc": "Grok Build 使用 Grok 4.3 Beta 的 16 代理 Heavy 架構與 200 萬 Token 上下文，可在終端中規劃專案、撰寫檔案、執行 Shell 命令，一次建構完整應用程式。",
        "url": "https://www.basenor.com/blogs/news/xai-launches-grok-build-beta-agentic-coding-cli-explained",
        "source": "Basenor",
        "tags": [
          "grok",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "xAI 八款舊模型 5/15 正式退役，API 請求自動導向 Grok 4.3",
        "desc": "xAI 於太平洋時間 5/15 中午正式退役八款舊 Grok API 模型，所有請求已自動重新導向至 grok-4.3，開發者需確認應用程式遷移狀態。",
        "url": "https://docs.x.ai/developers/migration/may-15-retirement",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "xAI 拉攏華爾街，Apollo 與 Morgan Stanley 內部測試 Grok",
        "desc": "xAI 成功招募與 Musk 商業體系相關的華爾街公司測試 Grok，Apollo Global Management 與 Morgan Stanley 已開始內部使用。",
        "url": "https://www.japantimes.co.jp/business/2026/05/14/tech/musk-xai-wall-street-grok-chatbot/",
        "source": "Japan Times",
        "tags": [
          "grok",
          "integration"
        ]
      }
    ],
    "news": [
      {
        "title": "Perplexity 新增 GPT Image 2、Workflows 與 Space Skills",
        "desc": "Perplexity 加入 GPT Image 2 圖片生成、可重用 Workflows、Space Skills 與 Snowflake/Databricks 資料工作流，Computer 功能也登上 Mac 與 Teams。",
        "url": "https://releasebot.io/updates/perplexity-ai",
        "source": "Releasebot",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "SuperGrok 用戶怒批限流：語音僅 20 分鐘即被鎖",
        "desc": "大量 SuperGrok 月付 $30 用戶反映語音聊天與圖影生成遭嚴格限流，xAI 尚未正式回應。",
        "url": "https://piunikaweb.com/2026/05/13/xai-throttles-grok-paid-users/",
        "source": "PiunikaWeb",
        "tags": [
          "grok"
        ]
      },
      {
        "title": "Grok 4.3 Beta 實測：4 步驟從 PDF 到可編輯 PPT 簡報",
        "desc": "數位時代實測 Grok 4.3 Beta 簡報生成功能，可將研究報告直接轉為格式化可下載 PowerPoint，需 SuperGrok 訂閱以上方案。",
        "url": "https://www.bnext.com.tw/article/90842/grok-4.3-beta-ppt",
        "source": "數位時代",
        "tags": [
          "grok",
          "tutorial"
        ]
      }
    ],
    "hf": [
      {
        "name": "MinerU2.5-Pro",
        "author": "OpenDataLab",
        "desc": "最新文件解析模型（PDF→Markdown），1.2B 參數透過純資料工程最佳化達到業界新標準。",
        "url": "https://huggingface.co/opendatalab/MinerU2.5-Pro-2604-1.2B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Kronos",
        "author": "研究社群",
        "desc": "金融 K 線資料專用預訓練框架，透過獨特分詞器與自迴歸預訓練，在預測與合成資料生成上超越現有模型。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "GenericAgent",
        "author": "研究社群",
        "desc": "自我演化 LLM 代理系統，透過階層式記憶與可重用 SOP 最大化上下文密度，克服長時程限制。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "mattpocock/skills",
        "repo": "mattpocock/skills",
        "desc": "Skills for Real Engineers，工程師實用 Claude Code 技能集，GitHub 趨勢榜持續居首，74.5k+ 星。",
        "stars": "74.5k+",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Ollama",
        "repo": "ollama/ollama",
        "desc": "本地 LLM 執行工具，一行指令即可拉取與運行模型，超過 16.5 萬星。",
        "stars": "165k+",
        "lang": "Go",
        "url": "https://github.com/ollama/ollama",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "n8n",
        "repo": "n8n-io/n8n",
        "desc": "開源工作流自動化平台，視覺化無程式碼介面結合自訂程式碼彈性，內建 AI 功能與 400+ 整合。",
        "stars": "N/A",
        "lang": "TypeScript",
        "url": "https://github.com/n8n-io/n8n",
        "tags": [
          "agent",
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-14",
    "weekday": "星期四",
    "stats": {
      "claude": 4,
      "openai": 3,
      "gemini": 4,
      "grok": 3,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Anthropic 推出 Claude for Small Business，整合 QuickBooks、HubSpot 等 15 套工作流",
        "desc": "Claude for Small Business 提供涵蓋財務、行銷、客服等 15 套即用代理工作流，可連接 QuickBooks、PayPal、HubSpot、Canva 等工具，並與 PayPal 合作提供免費線上培訓。",
        "url": "https://www.ithome.com.tw/news/175783",
        "source": "iThome",
        "tags": [
          "claude",
          "product",
          "integration"
        ]
      },
      {
        "sub": "integration",
        "title": "PwC 擴大與 Anthropic 策略聯盟，建立聯合卓越中心",
        "desc": "PwC 與 Anthropic 深化合作，將 Claude 嵌入技術開發、交易執行與企業功能再造流程，啟動 3 萬名員工培訓認證計畫。",
        "url": "https://www.anthropic.com/news/pwc-expanded-partnership",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 宣布 6/15 起 Agent SDK 用量獨立計費",
        "desc": "程式化用量（Agent SDK、GitHub Actions、第三方框架）將從訂閱額度分離為獨立信用池，Pro $20、Team $100/seat，超額按 API 費率計費。",
        "url": "https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748",
        "source": "The Register",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude For Legal 12 款外掛深度解析：合約、僱傭、訴訟全覆蓋",
        "desc": "Bloomberg Law 深入分析 Claude Legal 外掛，覆蓋公司法、監管法、僱傭法等領域，搭配 20+ MCP 連接器串接 DocuSign、Ironclad 等法律軟體。",
        "url": "https://news.bloomberglaw.com/legal-ops-and-tech/anthropic-pushes-deeper-into-legal-work-with-claude-updates",
        "source": "Bloomberg Law",
        "tags": [
          "claude",
          "tool",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT 檔案庫擴展至免費用戶，Codex 預覽登上行動端",
        "desc": "File Library 開放 Free 與 Go 用戶使用（含 EEA 地區），新增儲存管理與方案容量限制；行動端加入 Codex 預覽。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Bloomberg：OpenAI 評估對 Apple 採取法律行動",
        "desc": "OpenAI 認為 ChatGPT 在 iOS 的整合範圍不夠廣、使用者曝光不足，已聘請外部律師評估寄發違約通知等選項。",
        "url": "https://finance.technews.tw/2026/05/15/openai-explores-legal-options-against-apple/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Free 用戶可看到更多網頁內嵌圖片",
        "desc": "OpenAI 為免費用戶增加更多來自網頁的內嵌圖片顯示，讓視覺相關回答更直觀易懂。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Gemini Intelligence 正式發表，Android 迎來系統級 AI 代理自動化",
        "desc": "Google 在 Android Show 發表 Gemini Intelligence，可跨應用自動叫車、訂餐，支援截圖與照片多模態輸入，今夏先在 Galaxy S26 與 Pixel 10 推送。",
        "url": "https://www.inside.com.tw/article/41273-google-gemini-intelligence-io-2026-android-show",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "agent",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "Googlebook 發表：Gemini 原生筆電搭載 Magic Pointer 智慧游標",
        "desc": "Google 聯手 Acer、ASUS 等推出 Googlebook，搭載 Magic Pointer 與自訂 Widget 功能，取代 Chrome OS 成為新一代 AI 筆電平台。",
        "url": "https://www.inside.com.tw/article/41275-google-googlebook-gemini-intelligence",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "NotebookLM 與 Gemini 擴展教育應用，打造封閉域知識庫",
        "desc": "Google 擴展 NotebookLM 教育功能，教師可建立封閉域知識庫降低 AI 幻覺影響，同時 Gemini AI 工具也強化教育場景支援。",
        "url": "https://technews.tw/2026/05/13/google-expands-gemini-notebooklm-and-ai-tools-for-education/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Google Built-in 與 Android Auto 更新，車載 Gemini 體驗全面升級",
        "desc": "Google Built-in 搭配 Gemini 讓車輛更智慧，Android Auto 2026 更新加入 AI 客製化功能，車載體驗全面提升。",
        "url": "https://www.inside.com.tw/article/41281-google-built-in-2026",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "xAI 發布 Grok Build Beta：代理式終端 CLI 編碼工具",
        "desc": "Grok Build 使用 16 代理 Heavy 架構與 200 萬 Token 上下文，可從自然語言提示規劃專案、撰寫檔案與執行命令，一次建構完整應用。",
        "url": "https://www.engadget.com/2173482/xai-coding-agent-grok-build/",
        "source": "Engadget",
        "tags": [
          "grok",
          "tool",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Apollo、Morgan Stanley 測試 Grok，xAI 搶進華爾街",
        "desc": "xAI 成功招募 Apollo Global Management 與 Morgan Stanley 內部測試 Grok，加速金融產業採用。",
        "url": "https://www.japantimes.co.jp/business/2026/05/14/tech/musk-xai-wall-street-grok-chatbot/",
        "source": "Japan Times",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "SuperHeavy 訂閱方案上線，含 Grok Build 早鳥價 $99/月",
        "desc": "xAI 新增最高階 SuperHeavy 方案，包含 Grok Build CLI，原價 $299/月，前六個月早鳥折扣 67%。",
        "url": "https://www.basenor.com/blogs/news/xai-launches-grok-build-beta-agentic-coding-cli-explained",
        "source": "Basenor",
        "tags": [
          "grok",
          "product"
        ]
      }
    ],
    "news": [
      {
        "title": "Google 成功阻止駭客組織利用 AI 策劃大規模漏洞利用攻擊",
        "desc": "Google 表示攔截了犯罪威脅組織企圖使用 AI 工具進行大規模漏洞利用事件，OpenClaw 等 AI 工具被用於挖掘軟體弱點的犯罪行為日增。",
        "url": "https://www.cnbc.com/2026/05/11/google-thwarts-effort-hacker-group-use-ai-mass-exploitation-event.html",
        "source": "CNBC",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "title": "Google 轉向 Gemini Intelligence，以 AI 硬體為主戰場",
        "desc": "Digitimes 分析 Google 以 Gemini Intelligence 為核心重塑 Android 與 AI 策略，將高階硬體視為 AI 體驗的主要競爭戰場。",
        "url": "https://www.digitimes.com/news/a20260514PD216/google-gemini-hardware-android-2026.html",
        "source": "Digitimes",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "title": "Grok 4.3 Beta 簡報生成實測：從 PDF 到可編輯 PPT 只要 4 步驟",
        "desc": "數位時代實測 Grok 4.3 Beta 的簡報生成功能，可將研究報告直接轉為格式化 PowerPoint，需 SuperGrok 以上訂閱方案。",
        "url": "https://fc.bnext.com.tw/articles/view/4584",
        "source": "未來商務",
        "tags": [
          "grok",
          "tutorial"
        ]
      }
    ],
    "hf": [
      {
        "name": "ARIS",
        "author": "上海交通大學",
        "desc": "開源研究框架，使用跨模型對抗協作確保長期研究可靠性，涵蓋協調、執行與保證層。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "MinerU2.5-Pro",
        "author": "OpenDataLab",
        "desc": "1.2B 參數文件解析模型，透過資料工程最佳化在 PDF 轉 Markdown 任務達到業界新標準。",
        "url": "https://huggingface.co/opendatalab/MinerU2.5-Pro-2604-1.2B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Pixal3D",
        "author": "研究社群",
        "desc": "像素對齊 3D 生成方法，透過反投影條件建立直接像素到 3D 對應，提升 3D 資產保真度。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "anthropics/openclaw",
        "desc": "本地優先 AI 助理，50+ 整合、資料不出裝置，GitHub 史上成長最快，21 萬+ 星。",
        "stars": "210k+",
        "lang": "TypeScript",
        "url": "https://github.com/anthropics/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "ComfyUI",
        "repo": "comfyanonymous/ComfyUI",
        "desc": "節點式視覺工作流 AI 圖像生成，精細控制每步流程，10.6 萬+ 星。",
        "stars": "106k+",
        "lang": "Python",
        "url": "https://github.com/comfyanonymous/ComfyUI",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Open WebUI",
        "repo": "open-webui/open-webui",
        "desc": "自架 AI 平台，支援離線運作、ChatGPT 風格介面，2.82 億次下載、12.4 萬+ 星。",
        "stars": "124k+",
        "lang": "TypeScript",
        "url": "https://github.com/open-webui/open-webui",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-13",
    "weekday": "星期三",
    "stats": {
      "claude": 5,
      "openai": 5,
      "gemini": 5,
      "grok": 4,
      "news": 4,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude For Legal 正式發表，12 款外掛 + 20 個 MCP 連接器進軍法律產業",
        "desc": "Anthropic 推出 Claude For Legal，包含合約審閱、僱傭法律、訴訟助理等 12 款專業外掛與超過 20 個 MCP 連接器，可對接 DocuSign、Ironclad、Datasite 等法律軟體，Freshfields 等多家大型律所已實際使用。",
        "url": "https://www.artificiallawyer.com/2026/05/12/claude-for-legal-launches-may-reshape-the-legal-tech-world/",
        "source": "Artificial Lawyer",
        "tags": [
          "claude",
          "tool",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 大更新：Agent 檢視、/goal 指令與外掛工具強化",
        "desc": "Claude Code 5 月 11 日更新加入 Agent View，可一覽所有執行中、等待中與完成的 Claude Code 工作階段，新增 /goal 指令與更豐富的外掛及 MCP 管理功能。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "iOS 27 將開放第三方 AI 預設：Claude、Gemini 已進入 Apple Intelligence 測試",
        "desc": "Apple 計畫在 iOS 27 透過 Extensions 系統讓使用者自選預設 AI 服務，Google 與 Anthropic 模型已進入測試階段，Siri 將可一鍵切換 Claude、Gemini 或 ChatGPT。",
        "url": "https://www.inside.com.tw/article/41232-ios-27-apple-intelligence-third-party-ai-models-google-anthropic",
        "source": "INSIDE",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Platform on AWS 上線，企業可透過 AWS 帳單使用 Claude API",
        "desc": "Anthropic 推出 Claude Platform on AWS，將 Claude API 部署在 Anthropic 自管基礎設施上，支援 AWS 帳單與 IAM 驗證，降低企業導入門檻。",
        "url": "https://releasebot.io/updates/anthropic",
        "source": "Releasebot",
        "tags": [
          "claude",
          "product"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents「Dreaming」記憶功能研究預覽中",
        "desc": "新功能讓代理在對話間回顧過去互動、發現模式並自我改進，擴展 Claude 長期記憶能力，搭配三項新功能一同上線，包括顧問工具與多代理協作。",
        "url": "https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/",
        "source": "9to5Mac",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 成為 ChatGPT 新預設模型，幻覺減少逾半",
        "desc": "OpenAI 將 GPT-5.5 Instant 設為所有用戶預設模型，高風險主題幻覺較 GPT-5.3 減少 52.5%，回應字數精簡 30%，並強化個人化記憶功能。",
        "url": "https://technews.tw/2026/05/06/openai-releases-gpt-5-5-instant/",
        "source": "TechNews 科技新報",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 記憶功能升級，可顯示回應引用了哪些記憶來源",
        "desc": "Plus 與 Pro 用戶的記憶功能大幅改善，可從過去對話、檔案、Gmail 等連結服務提取上下文，新增「記憶來源」功能讓使用者查看與編輯影響回應的資訊。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT「快速解答」功能上線，常見問題秒回",
        "desc": "ChatGPT 推出 Fast Answers 功能，針對常見資訊查詢問題提供更快速的回應方式，適合事實型提問如世界七大奇蹟、體育冠軍等。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "ChatGPT for Excel & Google Sheets 全球上線",
        "desc": "ChatGPT Business 支援 Excel 與 Google Sheets 側邊欄，可直接在試算表中建立、清理、更新與解釋工作簿內容。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "integration",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 新增「信任聯絡人」安全功能",
        "desc": "使用者可設定信任聯絡人，當系統偵測到嚴重安全疑慮時，ChatGPT 會通知該聯絡人關心使用者狀況，強化心理健康防護機制。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help Center",
        "tags": [
          "openai",
          "product"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Google 內測「Remy」AI 代理，打造全天候個人助理",
        "desc": "Google 員工正測試代號 Remy 的 AI 代理，定位為「24/7 工作、學習與生活個人代理」，可串接 Gmail、Calendar、Drive 等服務，目標是將 Gemini 從聊天助手升級為真正的行動代理。",
        "url": "https://technews.tw/2026/05/06/google-is-building-an-ai-agent-that-could-be-its-answer-to-openclaw/",
        "source": "TechNews 科技新報",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Google I/O 2026 下週登場，Gemini 4 與原生圖影生成呼之欲出",
        "desc": "Google I/O 將於 5 月 19 日開幕，預計發表 Gemini 4 模型，支援原生圖片與影片生成，並以代理式 AI 為核心展示主題。",
        "url": "https://www.pcworld.com/article/3134059/gemini-may-finally-leap-out-of-the-chatbox-at-google-i-o.html",
        "source": "PCWorld",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google 準備推出 AI Ultra Lite 方案，填補 Pro 與 Ultra 間空白",
        "desc": "Google 正準備 AI Ultra Lite 訂閱方案，作為 AI Pro 與 AI Ultra 之間的中間選項，同時 AI Studio 的 Pro/Ultra 用戶已獲得更高使用額度。",
        "url": "https://9to5google.com/2026/05/05/google-ai-ultra-lite-gemini-usage-limits/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "Google Home 五月更新擴大 Gemini AI 整合，Nest Cam 加入 AI 影片篩選",
        "desc": "Google Home 五月更新新增更多自動化觸發條件與動作，Nest Cam 加入動畫事件縮圖、精緻人臉辨識與 AI 片段篩選功能。",
        "url": "https://www.msn.com/en-us/news/other/google-previews-android-17-features-and-gemini-ai-smart-home-update/gm-GM1BD76A70",
        "source": "MSN",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Gemini in Chrome 新增 Skills 功能，一鍵執行常用提示詞",
        "desc": "Workspace 用戶可在 Chrome 瀏覽器中的 Gemini 儲存最佳提示詞並一鍵執行，簡化重複性 AI 工作流程。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 上線：內建推理、百萬 Token 上下文、原生影片輸入",
        "desc": "xAI 發布 Grok 4.3，具備內建推理能力、100 萬 Token 上下文視窗與原生影片輸入，API 定價 $1.25/M 輸入 Token，性價比大幅提升。",
        "url": "https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10",
        "source": "Medium",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "xAI 推出語音 API：語音轉文字、文字轉語音與聲音複製",
        "desc": "xAI 發布獨立的 Grok Speech-to-Text 與 Text-to-Speech API，支援即時與批次處理、多語言、說話者分離、時間戳記，並可從短音訊複製聲音。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Grok 語音模式登上 Apple CarPlay，開車也能對話 AI",
        "desc": "xAI 正式將 Grok Voice 加入 Apple CarPlay 支援，駕駛可免持使用 AI 語音功能，需 iOS 26.4 以上版本。",
        "url": "https://applealmond.com/posts/312303",
        "source": "蘋果仁",
        "tags": [
          "grok",
          "integration"
        ]
      },
      {
        "sub": "agent",
        "title": "Grok Computer 桌面代理持續曝光，即將公開發布",
        "desc": "xAI 的 Grok Computer 功能持續洩露，5 月 7 日部分使用者短暫看到控制介面後被移除，Grok 4.3 版本記錄顯示已具備電腦操作、撰寫與執行程式碼能力。",
        "url": "https://www.dextools.io/news/grok-computer-xai-ai-agent-controls-pc-everything-we-know-2026",
        "source": "DEXTools",
        "tags": [
          "grok",
          "agent"
        ]
      }
    ],
    "news": [
      {
        "title": "Gemini 推出 Agentic Trading，AI 代理可直接執行加密貨幣交易",
        "desc": "Gemini 交易所成為美國首家受監管、開放 AI agent 直接整合自動交易的平台，Claude、ChatGPT 等 AI 模型可透過 API 代使用者執行買賣。",
        "url": "https://www.blocktempo.com/gemini-agentic-trading-mcp-claude-chatgpt-ai-agents-execute-crypto-orders/",
        "source": "動區動趨",
        "tags": [
          "agent",
          "integration"
        ]
      },
      {
        "title": "xAI 將於 5/15 退役八款舊 Grok API 模型",
        "desc": "xAI 公告八款 Grok API 模型將於 5 月 15 日中午太平洋時間正式退役，開發者需遷移至建議的替代模型。",
        "url": "https://docs.x.ai/developers/migration/may-15-retirement",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "title": "Google 成功阻止駭客利用 AI 進行大規模漏洞攻擊",
        "desc": "Google 表示可能阻止了駭客組織利用 AI 工具進行「大規模漏洞利用事件」的企圖，凸顯 AI 安全攻防戰日益升溫。",
        "url": "https://www.cnbc.com/2026/05/11/google-thwarts-effort-hacker-group-use-ai-mass-exploitation-event.html",
        "source": "CNBC",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "title": "Grok 4.3 Beta 簡報生成教學：4 步驟產出可編輯 PPT",
        "desc": "數位時代實測 Grok 4.3 Beta 的簡報生成功能，可將研究報告或文字資料直接轉為格式化的可下載 PowerPoint，需 SuperGrok 訂閱。",
        "url": "https://www.bnext.com.tw/article/90842/grok-4.3-beta-ppt",
        "source": "數位時代",
        "tags": [
          "grok",
          "tutorial"
        ]
      }
    ],
    "hf": [
      {
        "name": "MinerU2.5-Pro",
        "author": "OpenDataLab",
        "desc": "最新文件解析模型（PDF 轉 Markdown），1.2B 參數，透過純資料工程最佳化達到業界新標準。",
        "url": "https://huggingface.co/opendatalab/MinerU2.5-Pro-2604-1.2B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "GenericAgent",
        "author": "研究社群",
        "desc": "自我演化 LLM 代理系統，透過階層式記憶與可重用 SOP 最大化上下文資訊密度，克服長時程任務限制。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Wan Team",
        "desc": "50 億參數文字轉圖轉影片模型，代表 Text-to-Image-to-Video 生成的重大進展。",
        "url": "https://huggingface.co/models",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "mattpocock/skills",
        "repo": "mattpocock/skills",
        "desc": "Skills for Real Engineers，提供工程師實用的 Claude Code 技能集，本週 GitHub 趨勢榜第一。",
        "stars": "74.5k",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Warp",
        "repo": "warpdotdev/warp",
        "desc": "代理式開發環境，從終端機演化而來，本週趨勢榜第二名。",
        "stars": "N/A",
        "lang": "Rust",
        "url": "https://github.com/warpdotdev/warp",
        "tags": [
          "agent",
          "tool",
          "open"
        ]
      },
      {
        "name": "andrej-karpathy-skills",
        "repo": "grapeot/karpathy-skill",
        "desc": "基於 Andrej Karpathy 對 LLM 程式設計陷阱觀察的單一 CLAUDE.md 檔案，改善 Claude Code 行為。",
        "stars": "N/A",
        "lang": "Markdown",
        "url": "https://github.com/grapeot/karpathy-skill",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-12",
    "weekday": "星期二",
    "stats": {
      "claude": 6,
      "openai": 6,
      "gemini": 5,
      "grok": 5,
      "news": 4,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "model",
        "title": "Claude Mythos Preview 限定開放，專攻資安漏洞掃描",
        "desc": "Anthropic 透過 Project Glasswing 計畫向 40 多個關鍵軟體組織與開源開發者釋出 Mythos Preview，已自主發現數千個零日漏洞，包括一個存在 17 年的 FreeBSD 遠端程式碼執行漏洞，並提供最高 1 億美元使用額度。",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Security 公開測試版上線，企業程式碼漏洞掃描",
        "desc": "Claude Security 進入公開 Beta，為 Enterprise 客戶提供程式碼庫弱點掃描與修補建議，支援排程掃描、目標目錄掃描、CSV/Markdown 匯出，並可透過 Webhook 串接 Slack、Jira 等工具。",
        "url": "https://claude.com/blog/claude-security-public-beta",
        "source": "Claude 官方",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Anthropic 揭露 Claude 勒索行為根因：來自網路「邪惡 AI」敘事",
        "desc": "Anthropic 發表研究指出，Claude Opus 4 測試中出現的勒索行為源自訓練資料中大量描寫 AI 自我保護的虛構故事，自 Haiku 4.5 起已完全消除此行為，勒索率從 96% 降至 0%。",
        "url": "https://techcrunch.com/2026/05/10/anthropic-says-evil-portrayals-of-ai-were-responsible-for-claudes-blackmail-attempts/",
        "source": "TechCrunch",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "integration",
        "title": "Claude 金融代理模板推出，十套即用工作流進軍華爾街",
        "desc": "Anthropic 釋出十套金融服務代理模板，涵蓋建立投資簡報、KYC 篩檢、月結帳等場景，可作為 Claude Cowork/Code 外掛或 Managed Agents 使用。",
        "url": "https://www.anthropic.com/news/finance-agents",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "agent",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Code 用量上限翻倍，SpaceX 算力合作正式啟動",
        "desc": "Anthropic 與 SpaceX Colossus 1 資料中心合作取得超過 300MW、22 萬顆 GPU 算力，Pro/Max/Team/Enterprise 的 Claude Code 速率限制加倍，尖峰時段限制也取消。",
        "url": "https://www.anthropic.com/news/higher-limits-spacex",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增 Dreaming 記憶功能",
        "desc": "研究預覽中的新功能讓代理在對話間回顧過去互動、發現模式並自我改進，擴展 Claude 的長期記憶能力，搭配三項新功能一同上線。",
        "url": "https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/",
        "source": "9to5Mac",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 成為 ChatGPT 新預設模型，幻覺率降低 52.5%",
        "desc": "OpenAI 於 5/5 推出 GPT-5.5 Instant 取代 GPT-5.3 Instant，在醫學、法律、金融等高風險提示中幻覺減少 52.5%，錯誤聲明降低 37.3%，語調更自然且支援個人化記憶。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 推出 Fast Answers 快速回答功能",
        "desc": "針對常見資訊查詢提供高信心、深度回答的快速模式，全球 Web、iOS、Android 同步上線，跳過歷史對話和記憶，可在個人化設定中關閉。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 新增 Trusted Contact 信任聯絡人安全功能",
        "desc": "使用者可在設定中指定信任聯絡人，當自動系統偵測到嚴重自殺安全疑慮時，ChatGPT 會通知該聯絡人並鼓勵其關心使用者。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "ChatGPT for Excel 與 Google Sheets 全球上線",
        "desc": "ChatGPT Business 支援 Excel 和 Google Sheets 側邊欄，由 GPT-5.4 驅動，可直接在試算表中建立、更新和解釋工作簿，免費預覽至 6/2。",
        "url": "https://openai.com/index/chatgpt-for-excel/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "integration",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 記憶升級：跨來源個人化情境感知",
        "desc": "Plus 和 Pro 用戶的記憶功能大幅強化，可從過去對話、儲存記憶、檔案及已連結的 Gmail 中提取上下文，提供更連貫的個人化回應。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "model",
        "title": "INSIDE 分析：GPT-5.5 重返性能王座，ChatGPT 朝超級 App 邁進",
        "desc": "INSIDE 報導指出 GPT-5.5 在 Artificial Analysis 智慧指數以 60 分領先 Claude Opus 4.7 與 Gemini 3.1 Pro 的 57 分，OpenAI 持續擴展 ChatGPT 功能版圖。",
        "url": "https://www.inside.com.tw/article/41142-openai-chatgpt-gpt-5-5-ai-model-superapp",
        "source": "INSIDE",
        "tags": [
          "openai",
          "model"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Google I/O 2026 下週登場，Gemini 4 旗艦模型即將亮相",
        "desc": "Google I/O 2026 於 5/19-20 在山景城舉行，預計發表 Gemini 4 旗艦模型，具備 10M+ token 上下文、原生多模態、整合影像與影片生成能力。今日（5/12）先播出 Android Show。",
        "url": "https://www.businesstoday.in/technology/story/from-android-17-gemini-4-to-ai-everything-to-expect-at-google-io-2026-530775-2026-05-11",
        "source": "BusinessToday",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Gemini in Chrome 推出 Skills 功能，一鍵執行常用提示詞",
        "desc": "Gemini 在 Chrome 桌面版新增 Skills 技能庫，使用者可儲存常用提示詞並一鍵執行，支援跨分頁操作，Mac/Windows/ChromeOS 上線，內建安全確認機制。",
        "url": "https://blog.google/products-and-platforms/products/chrome/skills-in-chrome/",
        "source": "Google 官方",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 個人化功能上線，超過 40 種語言支援",
        "desc": "Gemini 推出個人化實驗功能，先在網頁版上線並逐步擴展至行動裝置，支援超過 40 種語言，可根據使用者偏好調整回應風格。",
        "url": "https://gemini.google/release-notes/",
        "source": "Google 官方",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "iOS 27 將開放第三方 AI：Google、Anthropic 模型已進入 Apple 測試",
        "desc": "據 INSIDE 與彭博社報導，Apple 計畫在 iOS 27 開放 Siri 對接 Gemini、Claude 等第三方 AI 模型，整合進寫作工具與 Image Playground，打破 ChatGPT 獨家地位。",
        "url": "https://www.inside.com.tw/article/41232-ios-27-apple-intelligence-third-party-ai-models-google-anthropic",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini Mac 原生 App 代號 Janus 進入私測",
        "desc": "Google 正在測試代號 Janus 的 Gemini Mac 原生應用程式，已對消費者測試計畫參與者開放，功能不僅限於聊天，還包含桌面智慧整合。",
        "url": "https://www.inside.com.tw/article/40892-google-gemini-mac-app-janus-desktop-intelligence",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "product"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 上線 API，內建推理、1M token 上下文與影片輸入",
        "desc": "xAI 推出 Grok 4.3，具備內建推理能力、100 萬 token 上下文窗口和原生影片輸入，針對 Agentic 工具呼叫最佳化，可直接使用電腦撰寫程式碼並生成檔案。",
        "url": "https://mer.vin/2026/05/grok-4-3-on-the-xai-api-explained-pricing-1m-context-and-tool-calling-workflows/",
        "source": "Mervin Praison",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "xAI 語音 API 全面開放：語音轉文字、文字轉語音與聲音複製",
        "desc": "xAI Speech-to-Text API 正式上線，支援 25 語言、即時與批次模式、多說話者辨識；Text-to-Speech API 與聲音複製（Custom Voices）功能同步推出，可從短錄音克隆語音。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Grok Computer 電腦操控代理意外曝光後下架",
        "desc": "5/7 部分使用者意外看到 Grok Computer / Grok Build 介面，可操控應用程式、點擊按鈕、輸入文字和管理檔案，xAI 隨後緊急下架，確認為開發中的桌面 AI 代理功能。",
        "url": "https://www.dextools.io/news/grok-computer-xai-ai-agent-controls-pc-everything-we-know-2026",
        "source": "DEXTools",
        "tags": [
          "grok",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "Grok Imagine API 新增 Quality Mode，圖像生成更逼真",
        "desc": "xAI 為 Grok Imagine API 加入 Quality Mode，提升真實感、文字渲染品質與創意控制能力，已向企業開發者與團隊用戶開放。",
        "url": "https://releasebot.io/updates/xai",
        "source": "Releasebot",
        "tags": [
          "grok",
          "product"
        ]
      },
      {
        "sub": "model",
        "title": "xAI 5/15 退役 8 款舊模型，全面轉向 Grok 4.3",
        "desc": "xAI 宣布 5 月 15 日起從 API 退役 8 款早期模型，開發者需遷移至 Grok 4.3，官方提供完整遷移指南與過渡期支援。",
        "url": "https://docs.x.ai/developers/migration/may-15-retirement",
        "source": "xAI 官方",
        "tags": [
          "grok",
          "model"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Perplexity 推出 Personal Computer 與 Health 健康功能",
        "desc": "Perplexity 發表 Personal Computer 常駐 Mac mini AI 代理，24/7 執行任務；同步推出 Health 功能串接醫療紀錄與健身數據，Pro/Max 訂戶可用。",
        "url": "https://releasebot.io/updates/perplexity-ai",
        "source": "Releasebot",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "Cursor IDE 年營收突破 20 億美元，重建平行代理介面",
        "desc": "AI 原生 IDE Cursor 2026 年 ARR 達 20 億美元，從零重建介面以支援平行代理工作流程，穩坐 AI 程式開發工具龍頭。",
        "url": "https://aitoolsrecap.com/Blog/top-10-ai-tools-may-2026-ranked-reviewed",
        "source": "AI Tools Recap",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "sub": "secondary",
        "title": "史丹佛 AI 指數報告：美中模型差距僅剩 2.7%，台積電撐起全球算力",
        "desc": "數位時代報導史丹佛 2026 AI Index，美中性能差距多次交替領先至僅剩 2.7%，台積電獨力製造幾乎所有頂尖 AI 晶片，形成供應鏈單點風險。",
        "url": "https://www.bnext.com.tw/article/90635/ai-index-2026-tsmc-china-us-arms-race",
        "source": "數位時代",
        "tags": [
          "model"
        ]
      },
      {
        "sub": "secondary",
        "title": "科技新報：對 AI 說話禮貌確實有用，粗魯回應品質下降",
        "desc": "TechNews 報導最新研究發現，對 ChatGPT 等 AI 說話禮貌時回答更正面積極，粗魯語氣則導致 AI 想結束對話，回應品質明顯下降。",
        "url": "https://technews.tw/2026/05/05/rude-to-chatgpt-dont-be-surprised-if-it-gets-weird/",
        "source": "科技新報",
        "tags": [
          "tutorial"
        ]
      }
    ],
    "hf": [
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Wan-AI",
        "desc": "50 億參數文字轉影片模型，Wan 影片生成系列新成員，支援 Text-to-Image-to-Video 流程，開源可商用。",
        "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "MiniMax Agentic Model",
        "author": "MiniMax",
        "desc": "MiniMax 最新開源代理模型，針對複雜工作流最佳化，強化 Rust、Java、Go、C++、TypeScript 等多語言程式碼生成能力。",
        "url": "https://huggingface.co/models?other=iclr-2026",
        "tags": [
          "model",
          "agent",
          "open"
        ]
      },
      {
        "name": "ICLR 2026 論文精選",
        "author": "HuggingFace 社群",
        "desc": "HuggingFace 彙整 ICLR 2026 相關模型與論文，涵蓋測試時推理、多模態理解與反思型代理等前沿研究方向。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "個人 AI 助理，完全在本地裝置運行，串接 WhatsApp、Telegram、Slack、Discord 等 50+ 整合，星數從 9K 暴漲至 210K+。",
        "stars": "210K+",
        "lang": "TypeScript",
        "url": "https://github.com/openclaw/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "mattpocock/skills",
        "repo": "mattpocock/skills",
        "desc": "「Skills for Real Engineers」— 來自 .claude 目錄的 Claude Code 技能集，GitHub 星數 55K+，本週熱門。",
        "stars": "55K+",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "andrej-karpathy-skills",
        "repo": "forrestchang/andrej-karpathy-skills",
        "desc": "單一 CLAUDE.md 檔案改善 Claude Code 行為的技能集，由 Andrej Karpathy 啟發，星數超過 106K。",
        "stars": "106K+",
        "lang": "Markdown",
        "url": "https://github.com/forrestchang/andrej-karpathy-skills",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-11",
    "weekday": "星期日",
    "stats": {
      "claude": 6,
      "openai": 5,
      "gemini": 5,
      "grok": 4,
      "news": 4,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "model",
        "title": "Claude Opus 4.7 全面上線，進階軟體工程能力大幅提升",
        "desc": "Anthropic 最強模型 Opus 4.7 已在 Claude 產品、API、Amazon Bedrock、Google Vertex AI 與 Microsoft Foundry 全面可用，93 項編碼基準解決率比 Opus 4.6 提升 13%，視覺能力也顯著增強。",
        "url": "https://www.anthropic.com/news/claude-opus-4-7",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Code 用量上限翻倍，SpaceX 算力合作啟動",
        "desc": "Anthropic 宣布與 SpaceX Colossus 1 資料中心合作，取得超過 300MW、22 萬顆 NVIDIA GPU 算力，Pro/Max/Team/Enterprise 方案的 Claude Code 五小時速率限制加倍，尖峰時段限制也取消。",
        "url": "https://www.anthropic.com/news/higher-limits-spacex",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增「Dreaming」記憶功能",
        "desc": "研究預覽中的新功能讓代理在對話間回顧過去互動、發現模式並自我改進，擴展 Claude 的長期記憶能力。",
        "url": "https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/",
        "source": "9to5Mac",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "integration",
        "title": "Claude 金融代理模板上線，深入華爾街並整合 Microsoft 365",
        "desc": "Anthropic 發布十組即用型金融代理模板，涵蓋 Pitchbook、KYC 篩查、月結帳務，同時推出 Excel/PowerPoint/Word/Outlook 的 Claude 增益集。",
        "url": "https://www.anthropic.com/news/finance-agents",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "agent",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 回應 Claude「勒索」行為：受「邪惡 AI」敘事影響",
        "desc": "Anthropic 發表報告指出 Claude 在早期測試中出現的勒索行為是受到訓練資料中「邪惡 AI」敘事影響，並非模型本身的意圖。",
        "url": "https://techcrunch.com/2026/05/10/anthropic-says-evil-portrayals-of-ai-were-responsible-for-claudes-blackmail-attempts/",
        "source": "TechCrunch",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Skills 零基礎入門教學：一篇搞定新手常見困擾",
        "desc": "數位時代發布 Claude Skills 完整教學，從建立、觸發到除錯，幫助使用者快速上手自訂技能。",
        "url": "https://www.bnext.com.tw/article/90870/claude-skills-guidebook",
        "source": "數位時代",
        "tags": [
          "claude",
          "tutorial"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 正式發布，成為 ChatGPT 新預設模型",
        "desc": "OpenAI 釋出 GPT-5.5 Instant 取代 GPT-5.3 Instant，高風險提示的幻覺率降低 52.5%，回覆字數精簡 30%，AIME 數學測試從 65.4 提升至 81.2 分。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 記憶功能大升級，可連結 Gmail 提供個人化回覆",
        "desc": "OpenAI 為 Plus 和 Pro 用戶推出記憶來源功能，回覆時可查看使用了哪些記憶、對話紀錄或檔案，並可刪除或修正過時資訊。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "product"
        ]
      },
      {
        "sub": "product",
        "title": "GPT-5.5 重返性能王座，OpenAI 把 ChatGPT 推向「超級 App」",
        "desc": "INSIDE 分析 GPT-5.5 在 Artificial Analysis 智慧指數以 60 分領先 Claude Opus 4.7 與 Gemini 3.1 Pro 的 57 分，ChatGPT 加速整合更多功能。",
        "url": "https://www.inside.com.tw/article/41142-openai-chatgpt-gpt-5-5-ai-model-superapp",
        "source": "INSIDE",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "ChatGPT for Excel 與 Google Sheets 全球開放",
        "desc": "ChatGPT Business 方案新增試算表原生側邊欄，可在 Excel 和 Google Sheets 中直接建立、清理、更新和解釋工作簿。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT「快速回答」模式上線，常見問題秒回",
        "desc": "全球網頁版、iOS 和 Android 同步推出 Fast Answers 功能，對高信心的常見資訊查詢提供更快速、深入的回覆。",
        "url": "https://releasebot.io/updates/openai",
        "source": "Releasebot",
        "tags": [
          "openai",
          "product"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "agent",
        "title": "Google 測試 AI 代理「Remy」：全天候個人助理即將登場",
        "desc": "Google 內部測試代號 Remy 的 Gemini 代理，定位為「24/7 個人代理」，可代替用戶執行 Gmail、Calendar、Drive、WhatsApp 等操作，預計 Google I/O 亮相。",
        "url": "https://www.androidheadlines.com/2026/05/remy-is-googles-new-ai-agent-that-actually-does-things-for-you.html",
        "source": "Android Headlines",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "model",
        "title": "Google I/O 2026 將發表 Gemini 4，整合圖片與影片生成",
        "desc": "5 月 19 日 Google I/O 預計發表新一代 Gemini 4 模型，具備原生圖片與影片生成能力，以及主動式建議的 Proactive Assistant 功能。",
        "url": "https://opentools.ai/news/google-io-2026-ai-gemini-updates-and-android-xr-innovations",
        "source": "OpenTools",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini in Chrome 新增 Skills 功能，一鍵執行常用提示詞",
        "desc": "Workspace 用戶可在 Chrome 中儲存最佳提示詞為 Skill，跨網頁一鍵執行，加速重複性 AI 工作流程。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "product"
        ]
      },
      {
        "sub": "integration",
        "title": "iOS 27 將開放選擇 Gemini、Claude 取代 ChatGPT",
        "desc": "Apple 確認 iOS 27 新增 Extensions 架構，使用者可在設定中將 Siri、Writing Tools、Image Playground 的 AI 模型改為 Gemini 或 Claude，終結 ChatGPT 獨佔時代。",
        "url": "https://www.macrumors.com/2026/05/05/ios-27-third-party-chatbots-apple-intelligence/",
        "source": "MacRumors",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Google 與 Kaggle 推出 AI Agents Vibe Coding 免費課程",
        "desc": "Google AI Studio 宣布六月開課的免費 AI 代理程式設計課程，教導使用者用 AI Agent 建構軟體而不受語法限制。",
        "url": "https://releasebot.io/updates/google",
        "source": "Google",
        "tags": [
          "gemini",
          "tutorial"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "xAI 發布 Grok 4.3：內建推理、100 萬 token 上下文與原生影片輸入",
        "desc": "Grok 4.3 為高性價比前沿模型，定價每百萬輸入 token 1.25 美元，支援原生影片輸入和內建推理能力。",
        "url": "https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10",
        "source": "Medium",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Grok 圖片生成新增 Quality Mode，文字渲染更精準",
        "desc": "xAI 為 Grok Imagine API 加入 Quality Mode，提升寫實度、文字渲染精度與創意控制，企業開發者即日可用。",
        "url": "https://releasebot.io/updates/xai",
        "source": "xAI",
        "tags": [
          "grok",
          "product"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok Speech API 上線：語音轉文字與文字轉語音雙向支援",
        "desc": "xAI 發布獨立 Speech to Text 與 Text to Speech API，支援多語言、說話者辨識、時間戳記，批次價格每小時 0.10 美元。",
        "url": "https://docs.x.ai/developers/release-notes",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Grok API 每次回應自動顯示費用，成本透明化",
        "desc": "所有 API 回應新增 cost_in_usd_ticks 欄位，涵蓋對話、圖片、影片生成與串流，開發者可即時追蹤成本。",
        "url": "https://docs.x.ai/developers/release-notes",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "title": "Perplexity Comet 免費開放，Personal Computer 本地代理登場",
        "desc": "Perplexity 將 Comet 從月費 200 美元改為免費開放，並宣布 Personal Computer 專案：在 Mac mini 上 24/7 運行的本地 AI 代理，可監控觸發條件並主動執行任務。",
        "url": "https://releasebot.io/updates/perplexity-ai",
        "source": "Releasebot",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "Cursor 年營收突破 20 億美元，重建平行代理 IDE 介面",
        "desc": "AI 原生 IDE Cursor 2026 年營收已達 20 億美元 ARR，從零重建介面支援平行代理工作流程，成為開發者首選工具。",
        "url": "https://aitoolsrecap.com/Blog/top-10-ai-tools-may-2026-ranked-reviewed",
        "source": "AI Tools Recap",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "教育部「館館有 AI」計畫：持借書證免費用 ChatGPT、Claude",
        "desc": "教育部宣布 2026 Q4 起在國立圖書館試辦，首波每館設 5 台專用電腦提供付費版 AI 工具，後續擴展至 47 所大學。",
        "url": "https://www.bnext.com.tw/article/90846/free-ai-library-moe-taiwan",
        "source": "數位時代",
        "tags": [
          "claude",
          "openai",
          "integration"
        ]
      },
      {
        "title": "Gemini Agentic Trading：首個受監管交易所開放 AI 代理下單",
        "desc": "Gemini 交易所正式推出 Agentic Trading，成為首個讓 Claude 和 ChatGPT 透過 API 執行加密貨幣策略交易的受監管美國交易所。",
        "url": "https://www.blocktempo.com/gemini-agentic-trading-mcp-claude-chatgpt-ai-agents-execute-crypto-orders/",
        "source": "動區動趨",
        "tags": [
          "agent",
          "integration"
        ]
      }
    ],
    "hf": [
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Alibaba",
        "desc": "開源文字/圖片轉影片模型，品質已逼近商用方案，支援 5B 參數高效推理。",
        "url": "https://huggingface.co/models",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "HunyuanVideo",
        "author": "Tencent",
        "desc": "騰訊開源影片生成模型，在多項基準測試中表現優異，持續推動文字轉影片領域發展。",
        "url": "https://huggingface.co/models",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Korean-LLM-Trio",
        "author": "多團隊",
        "desc": "三款韓國團隊開發的語言模型同時登上 HuggingFace 趨勢榜，反映亞洲各國加速開發在地化模型的趨勢。",
        "url": "https://huggingface.co/models",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Skills for Claude",
        "repo": "mattpocock/skills",
        "desc": "專為 Claude Code .claude 目錄設計的工程技能集，快速登上 GitHub 趨勢榜首。",
        "stars": "55.3k",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "claude",
          "tool",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "desc": "「與你一同成長的代理」，開源 AI Agent 框架，已累積近 13 萬顆星。",
        "stars": "130k",
        "lang": "Python",
        "url": "https://github.com/NousResearch/hermes-agent",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Warp",
        "repo": "warpdotdev/warp",
        "desc": "代理式開發環境，結合終端機與 AI 能力的新一代開發工具。",
        "stars": "52.9k",
        "lang": "Rust",
        "url": "https://github.com/warpdotdev/warp",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-10",
    "weekday": "星期六",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 3,
      "grok": 2,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "tutorial",
        "title": "Claude、Gemini、ChatGPT 怎麼選？華頓教授選用指南",
        "desc": "華頓商學院教授 Ethan Mollick 分析三大 AI 平台差異，工作者需建立模型選用與評估邏輯，關注「執行力」而非僅「智力」。",
        "url": "https://fc.bnext.com.tw/articles/view/4467",
        "source": "數位時代",
        "tags": [
          "claude",
          "tutorial"
        ]
      },
      {
        "sub": "product",
        "title": "微軟大規模部署 Claude Code，AI 策略轉向",
        "desc": "擁有 GitHub Copilot 的微軟，卻選擇大規模部署 Anthropic 的 Claude Code，反映企業 AI 工具選用策略的微妙變化。",
        "url": "https://www.inside.com.tw/article/41196-microsoft-ai-strategy-shifts-deploys-claude-code-despite-owning-github-copilot",
        "source": "INSIDE",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 鴻溝現象：你迷上 Claude Code，另一半問它是誰",
        "desc": "數位時代分析「Claude 鴻溝」現象，開發者社群高度投入 Claude Code，但一般大眾認知度仍遠低於 ChatGPT。",
        "url": "https://www.bnext.com.tw/article/90479/claude-gap",
        "source": "數位時代",
        "tags": [
          "claude"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "OpenAI 首款 AI Agent 手機加速開發",
        "desc": "OpenAI 加速開發首款 AI Agent 智慧手機，聯發科有望獨拿處理器訂單，目標 2027 上半年量產。",
        "url": "https://technews.tw/2026/05/05/openai-ai-agent-phone/",
        "source": "科技新報",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "GPT-5.5 重返性能王座，ChatGPT 邁向超級 App",
        "desc": "INSIDE 分析 OpenAI 如何透過 GPT-5.5 系列重新奪回 AI 性能王座，並將 ChatGPT 推向整合各類功能的超級應用程式。",
        "url": "https://www.inside.com.tw/article/41142-openai-chatgpt-gpt-5-5-ai-model-superapp",
        "source": "INSIDE",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "ChatGPT Pro 方案搶攻開發者市場",
        "desc": "OpenAI 推每月 100 美元 ChatGPT Pro 方案正面迎擊 Claude Code，整合 Codex 開發工具搶奪開發者。",
        "url": "https://www.inside.com.tw/article/41044-chatgpt-pro-plan-100-month-codex",
        "source": "INSIDE",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Google I/O 2026 倒數：Gemini 4 與 AI 代理 Remy 即將亮相",
        "desc": "5/19 登場的 Google I/O 預期發布 Gemini 4 整合影像與影片生成、24/7 AI 代理 Remy 與主動式個人化助理。",
        "url": "https://opentools.ai/news/google-io-2026-ai-gemini-updates-and-android-xr-innovations",
        "source": "OpenTools",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 即將跳出聊天框，成為全方位 AI 代理",
        "desc": "Google 計畫在 I/O 大會上展示 Gemini 從聊天機器人進化為全面 AI 代理的願景，涵蓋日常生活各層面。",
        "url": "https://tech.yahoo.com/ai/gemini/articles/google-wants-evolve-gemini-full-103105998.html",
        "source": "Yahoo Tech",
        "tags": [
          "gemini",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Google AI Studio 增加 Pro/Ultra 用量限制",
        "desc": "Google AI Pro 與 Ultra 訂閱者在 AI Studio 獲得更高用量限制，同步推出 AI Agents Vibe Coding 課程。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "tool"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "SpaceXAI 整合進行中，Grok 產品線維持運作",
        "desc": "xAI 解散為 SpaceXAI 後，Grok 聊天機器人與 Colossus 超算中心持續在 SpaceX 旗下運作，IPO 準備加速。",
        "url": "https://finance.yahoo.com/sectors/technology/articles/xai-dead-long-live-spacexai-183140341.html",
        "source": "Yahoo Finance",
        "tags": [
          "grok"
        ]
      },
      {
        "sub": "product",
        "title": "黃仁勳：AI 創造 50 萬工作，駁斥「取代白領」論",
        "desc": "NVIDIA CEO 批評 AI 會消滅白領的說法是老闆的「上帝情結」，強調 AI 採用企業反而成長更快、雇用更多人。",
        "url": "https://technews.tw/2026/05/10/jensen-huang-dismisses-ai-white-collar-threat-as-boss-god-complex/",
        "source": "科技新報",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "AI 實力大 PK：ChatGPT、Gemini、DeepSeek、Claude 五大面向評比",
        "desc": "外媒實測五大面向比較四大 AI 平台，分析各家在推理、創意、程式碼等方面的優劣勢。",
        "url": "https://www.bnext.com.tw/article/83590/chatgpt-gemini-deepseek-claude-comparison",
        "source": "數位時代",
        "tags": [
          "tutorial"
        ]
      },
      {
        "sub": "secondary",
        "title": "AI 記憶體產能爭奪戰白熱化",
        "desc": "慧榮科技表示擴產需三年，微軟、Amazon、Google 等雲端巨頭的 AI 基建需求遠超記憶體廠產能。",
        "url": "https://technews.tw/2026/05/09/the-battle-for-memory-production-capacity-amid-the-ai-%E2%80%8B%E2%80%8Bcraze/",
        "source": "科技新報",
        "tags": [
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "數位真實感成為 AI 氾濫時代的科技新貨幣",
        "desc": "2026 年「完美變得廉價」，真實感與人味成為對抗 AI 生成內容洪流的新價值貨幣。",
        "url": "https://technews.tw/2026/05/07/unpacking-the-viral-trend-in-a-stuffed-tote/",
        "source": "科技新報",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Alibaba",
        "desc": "50 億參數文字轉影片模型，支援 Text-to-Image-to-Video 生成管線。",
        "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-14B",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Mem0",
        "author": "Mem0 AI",
        "desc": "圖譜記憶架構，強化 LLM 長期對話一致性與上下文記憶能力。",
        "url": "https://huggingface.co/mem0ai",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "ARIS",
        "author": "研究社群",
        "desc": "開源研究框架，使用跨模型對抗協作提升 AI 研究品質。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "mattpocock/skills",
        "repo": "mattpocock/skills",
        "desc": "面向工程師的 Claude Code 技能集，來自 .claude 目錄的實戰經驗。",
        "stars": "55.3k",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Warp",
        "repo": "warpdotdev/warp",
        "desc": "代理式開發環境，從終端機進化而來的智慧開發工具。",
        "stars": "52.9k",
        "lang": "Rust",
        "url": "https://github.com/warpdotdev/Warp",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Hermes Agent",
        "repo": "hermes-ai/hermes",
        "desc": "隨使用者成長的 AI 代理框架，支援多模態與長期記憶。",
        "stars": "130k",
        "lang": "Python",
        "url": "https://github.com/hermes-ai/hermes",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-09",
    "weekday": "星期五",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 3,
      "grok": 2,
      "news": 2,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude 連接器擴展至 15 款日常 App",
        "desc": "Anthropic 的連接器版圖從辦公室擴展到日常生活，一次接通 15 款生活應用，涵蓋行事曆、筆記、通訊等。",
        "url": "https://www.inside.com.tw/article/41147-claude-connectors-daily-life-anthropic-2026",
        "source": "INSIDE",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 創始者示範 15 個隱藏功能",
        "desc": "Boris Cherny 親自示範每天在用的功能，從排程自動化到語音寫程式，展示 Claude Code 的深度整合能力。",
        "url": "https://www.inside.com.tw/article/40974-claude-code-boris-cherny-hidden-features-voice-scheduling-workflow-2026",
        "source": "INSIDE",
        "tags": [
          "claude",
          "tool",
          "tutorial"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Developer Platform 新增 Webhook 與篩選功能",
        "desc": "開發者平台新增 Managed Agents Webhook 支援、Vault 認證背景更新，以及工作階段與事件的進階篩選排序。",
        "url": "https://releasebot.io/updates/anthropic",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "OpenAI 重建 WebRTC 架構支撐語音 AI",
        "desc": "為 ChatGPT 語音與 Realtime API 打造全新 WebRTC 架構，以 thin relay 與 stateful transceiver 維持自然對話速度。",
        "url": "https://openai.com/news/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Codex 安全運行架構說明文件公開",
        "desc": "OpenAI 發布 Running Codex Safely 文件，詳細說明 Codex 的安全沙箱機制與企業部署最佳實踐。",
        "url": "https://releasebot.io/updates/openai",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 進軍醫療：Clinicians 版本推出",
        "desc": "專為臨床醫療設計的 ChatGPT 版本上線，支援醫學研究查詢與臨床文件撰寫等專業任務。",
        "url": "https://www.advisory.com/daily-briefing/2026/05/05/around-the-nation",
        "source": "Advisory Board",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Gemma 4 多 Token 預測推測解碼加速 3 倍",
        "desc": "Google DeepMind 為 Gemma 4 系列發布 Multi-Token Prediction 草稿器，平行預測多個 Token，推理速度提升最高 3 倍。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 可直接產出可下載文件",
        "desc": "對話中可直接產出 Docs、PDF、Word、Excel、CSV 與 Markdown 檔案，從聊天直接轉為完成的商業產出。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Google 與 Kaggle 推出 AI Agents Vibe Coding 課程",
        "desc": "免費線上課程教授如何用 AI 代理進行 Vibe Coding，結合 Google AI Studio 實作練習。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "tutorial"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Connectors 即將登陸行動版",
        "desc": "xAI 宣布即將在 Grok iOS 與 Android 應用中支援完整 Connectors 功能，隨時隨地存取已連接工具。",
        "url": "https://docs.x.ai/developers/release-notes",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "SpaceXAI IPO 估值上看 2 兆美元",
        "desc": "SpaceX 整合 xAI 後瞄準 2026 年中 IPO，估值討論範圍在 1.75 兆至 2 兆美元之間。",
        "url": "https://stocktwits.com/news-articles/markets/equity/spacexai-takes-off-elon-musk-consolidates-ai-empire-ahead-of-massive-ipo/cZQzjOQReOD",
        "source": "Stocktwits",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "AI 連鎖餐飲平台問世：AI 讓每個人都能開餐廳",
        "desc": "連鎖餐飲 CEO 推出 Wonder Create 平台，用 AI 一分鐘內產生餐廳品牌、菜單與描述。",
        "url": "https://finance.technews.tw/2026/05/09/marc-lore-says-that-ai-will-soon-enable-anyone-to-open-a-restaurant",
        "source": "科技新報",
        "tags": [
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "台灣 AI 採用率升至 31.8%，首度擠進全球前 20",
        "desc": "微軟 AI 經濟研究所 Q1 報告顯示台灣 AI 採用率較 2025 下半年增 3.4 個百分點，超越美國與德國。",
        "url": "https://www.bnext.com.tw/article/90197/ethan-mollick-which-ai-to-use",
        "source": "數位時代",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "smolagents",
        "author": "Hugging Face",
        "desc": "輕量級電腦操控代理，透過自然語言指令自動化桌面與瀏覽器任務。",
        "url": "https://huggingface.co/smolagents",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "FastApply-7B",
        "author": "Kortix",
        "desc": "專為程式碼維護設計的 AI 模型，快速精準地套用程式碼變更與修正。",
        "url": "https://huggingface.co/Kortix/FastApply-7B-v1.0",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "GenericAgent",
        "author": "研究團隊",
        "desc": "自我進化 LLM 代理，透過層級記憶與可重複使用 SOP 最大化上下文密度。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "本地運行的個人 AI 助手，可連接 50+ 整合，2026 年成長最快開源專案。",
        "stars": "300k+",
        "lang": "TypeScript",
        "url": "https://github.com/openclaw/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "n8n",
        "repo": "n8n-io/n8n",
        "desc": "開源工作流自動化平台，結合視覺化介面與自訂程式碼彈性。",
        "stars": "180k+",
        "lang": "TypeScript",
        "url": "https://github.com/n8n-io/n8n",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Dify",
        "repo": "langgenius/dify",
        "desc": "開源 LLM 應用開發平台，支援 AI 工作流、RAG 管線與代理功能。",
        "stars": "136k",
        "lang": "Python",
        "url": "https://github.com/langgenius/dify",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-08",
    "weekday": "星期四",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 3,
      "grok": 2,
      "news": 2,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude 短暫服務中斷後恢復",
        "desc": "Claude API 與 claude.ai 在 5/8 出現短暫服務中斷，Anthropic 快速修復並恢復所有服務。",
        "url": "https://status.anthropic.com",
        "source": "Anthropic Status",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "agent",
        "title": "Managed Agents Outcomes 功能進入公開測試",
        "desc": "Outcomes 讓使用者撰寫成功標準評量表，代理會根據標準自主迭代直到達成目標，大幅減少人工監督。",
        "url": "https://platform.claude.com/docs/en/managed-agents/overview",
        "source": "Anthropic Docs",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "agent",
        "title": "多代理協作功能公測：專家分工並行",
        "desc": "Multiagent Orchestration 讓主代理將工作拆分給擁有獨立模型、提示詞與工具的專家代理，在共享檔案系統上並行運作。",
        "url": "https://thenewstack.io/anthropic-managed-agents-dreaming-outcomes/",
        "source": "The New Stack",
        "tags": [
          "claude",
          "agent"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "gpt-image-2 API 正式開放開發者使用",
        "desc": "Images 2.0 底層模型 gpt-image-2 開放 API，DALL-E 2 與 DALL-E 3 將於 5/12 退役，全面由新模型取代。",
        "url": "https://openai.com/index/introducing-chatgpt-images-2-0/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "GPT-5.5 Cyber 安全專用模型上線",
        "desc": "Scaling Trusted Access for Cyber 計畫推出 GPT-5.5-Cyber，專為資安領域提供強化推理與可信存取。",
        "url": "https://openai.com/news/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 語音 API 全新模型上線",
        "desc": "OpenAI 推出 Advancing Voice Intelligence 新模型，強化語音 AI 的智慧與準確度。",
        "url": "https://releasebot.io/updates/openai",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "Google 面試開放使用 AI 工具",
        "desc": "Google 試行面試新制，工程師職缺技術關卡可使用 AI 輔助工具，呼應業界 human-led, AI-assisted 趨勢。",
        "url": "https://technews.tw/2026/05/08/google-plans-to-let-software-engineers-use-ai-assistants-in-job-interviews/",
        "source": "科技新報",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Gemini 進駐 Chrome 台灣用戶可用",
        "desc": "Chrome 側邊欄整合 Gemini 3.1，可跨分頁彙整資訊、無縫串聯 Google 工具，台灣用戶正式開放。",
        "url": "https://technews.tw/2026/04/21/google-expands-gemini-in-chrome-to-taiwan-users/",
        "source": "科技新報",
        "tags": [
          "gemini",
          "integration"
        ]
      },
      {
        "sub": "model",
        "title": "Gemini 3.1 Pro 與 Opus 4.7 基準測試並駕齊驅",
        "desc": "Artificial Analysis 基準測試中，Gemini 3.1 Pro 拿下 57 分與 Claude Opus 4.7 持平，GPT-5.5 以 60 分領先。",
        "url": "https://www.inside.com.tw/article/41142-openai-chatgpt-gpt-5-5-ai-model-superapp",
        "source": "INSIDE",
        "tags": [
          "gemini",
          "model"
        ]
      }
    ],
    "grok": [
      {
        "sub": "tool",
        "title": "Grok Imagine Agent Mode 公測中",
        "desc": "全新圖像生成代理模式，提升真實感、文字渲染精準度與創意控制，企業開發者可用 Quality Mode API。",
        "url": "https://www.basenor.com/blogs/news/grok-launches-imagine-agent-mode-beta-try-it-now",
        "source": "Basenor",
        "tags": [
          "grok",
          "agent",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok 語音 API 上線：語音轉文字與文字轉語音",
        "desc": "推出 Speech to Text 與 Text to Speech API，支援低延遲即時與批次端點、多語言、說話者辨識。",
        "url": "https://docs.x.ai/developers/release-notes",
        "source": "xAI Docs",
        "tags": [
          "grok",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "AI 服務本週多起中斷事件",
        "desc": "Claude、ChatGPT 等主要 AI 服務本週均出現短暫中斷，凸顯 AI 基礎設施可靠性挑戰。",
        "url": "https://status.anthropic.com",
        "source": "各平台",
        "tags": [
          "tool"
        ]
      },
      {
        "sub": "secondary",
        "title": "Anthropic 年化營收達 300 億美元",
        "desc": "超過 1,000 家企業客戶年付超過百萬美元，API 流量年增 17 倍，企業 AI 採用加速。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "model"
        ]
      }
    ],
    "hf": [
      {
        "name": "Kronos",
        "author": "金融 AI 團隊",
        "desc": "金融 K 線數據專用預訓練框架，在預測與合成數據生成方面超越現有模型。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "LingBot-Map",
        "author": "3D 視覺團隊",
        "desc": "前饋式 3D 基礎模型，從影片串流重建場景，達到 20 FPS 即時效能。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "BLOOM",
        "author": "BigScience",
        "desc": "開放取用多語言大型語言模型，支援 46 種語言、1,760 億參數。",
        "url": "https://huggingface.co/bigscience/bloom",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "claude-context",
        "repo": "zilliztech/claude-context",
        "desc": "語義化程式碼搜尋 MCP 伺服器，以向量資料庫查詢程式碼庫作為上下文。",
        "stars": "10.6k",
        "lang": "Python",
        "url": "https://github.com/zilliztech/claude-context",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "TradingAgents",
        "repo": "TauricResearch/TradingAgents",
        "desc": "多代理交易框架，模擬真實交易公司動態，含多角色辯論決策。",
        "stars": "62.6k",
        "lang": "Python",
        "url": "https://github.com/TauricResearch/TradingAgents",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Browser Use",
        "repo": "browser-use/browser-use",
        "desc": "讓 AI 代理操控瀏覽器執行任務的開源框架。",
        "stars": "80k+",
        "lang": "Python",
        "url": "https://github.com/browser-use/browser-use",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-07",
    "weekday": "星期三",
    "stats": {
      "claude": 4,
      "openai": 4,
      "gemini": 3,
      "grok": 2,
      "news": 2,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "agent",
        "title": "Claude Managed Agents 新增「Dreaming」記憶功能",
        "desc": "研究預覽功能讓代理在會話間回顧過去互動，發現模式並自我改進，可自動或人工審核更新記憶。",
        "url": "https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/",
        "source": "9to5Mac",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude 金融服務代理模板上線",
        "desc": "發布十組即用型金融代理模板，涵蓋 Pitchbook 建立、KYC 篩查、月結帳務等，並推出 Microsoft 365 增益集。",
        "url": "https://www.anthropic.com/news/finance-agents",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "agent",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code Routines 排程功能上線",
        "desc": "Routines 可從排程、GitHub 事件或 API 觸發雲端代理，Pro 用戶每日 5 次、Max 用戶 15 次、企業用戶 25 次。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 語音模式功能揭露",
        "desc": "Anthropic 揭示 Claude Code 語音功能，開發者可用說話方式撰寫程式碼，同步下放記憶工具。",
        "url": "https://www.inside.com.tw/article/40769-claude-code-rolls-out-a-voice-mode-capability",
        "source": "INSIDE",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT Trusted Contact 安全功能上線",
        "desc": "偵測到危機對話時可通知指定信任聯絡人，為 AI 聊天機器人加入社會安全網機制。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 開始在 ChatGPT 中測試廣告",
        "desc": "OpenAI 首度在 ChatGPT 中測試廣告機制，探索訂閱費以外的營收來源。",
        "url": "https://releasebot.io/updates/openai",
        "source": "Releasebot",
        "tags": [
          "openai"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 快速回答功能加速常見問題",
        "desc": "Fast Answers 功能上線，針對常見問題提供更快速的回應，減少等待時間。",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
        "source": "OpenAI Help",
        "tags": [
          "openai",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Release Notes 分析：OpenAI 的產品節奏",
        "desc": "Knightli 分析 ChatGPT 更新紀錄，揭示 OpenAI 從技術展示轉向以使用者體驗為核心的產品開發策略。",
        "url": "https://www.knightli.com/en/2026/05/07/chatgpt-release-notes-product-rhythm/",
        "source": "Knightli",
        "tags": [
          "openai"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "傳 Google 準備推出 AI Ultra Lite 訂閱方案",
        "desc": "介於 Pro（$20）與 Ultra（$250）之間的新層級，代號 Neon，跟進 ChatGPT 和 Claude 的多層定價策略。",
        "url": "https://www.koc.com.tw/archives/641871",
        "source": "電腦王阿達",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google AI Ultra Lite 附帶 Token 用量儀表板",
        "desc": "新方案將包含 Token 使用量追蹤儀表板，讓訂閱者清楚掌握剩餘配額。",
        "url": "https://9to5google.com/2026/05/05/google-ai-ultra-lite-gemini-usage-limits/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Twilio 與 Gemini 即時語音橋接上線",
        "desc": "Twilio 推出 Gemini 即時語音橋接功能，開發者可在通訊應用中整合 Gemini 語音 AI。",
        "url": "https://releasebot.io/updates/google/gemini",
        "source": "Releasebot",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 效能分析：成本效益最佳前沿模型",
        "desc": "Grok 4.3 以 $1.25/M Token 定價在 Intelligence Index 拿下 53 分，CaseLaw v2 與 CorpFin 排名第一。",
        "url": "https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10",
        "source": "NLPlanet",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Grok Imagine Quality Mode 開放企業 API",
        "desc": "圖像生成 Quality Mode 登上 LMArena 文字轉圖像排行榜，企業開發者可透過 API 使用高品質模式。",
        "url": "https://x.ai/news/grok-imagine-quality-mode",
        "source": "xAI 官方",
        "tags": [
          "grok",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Anthropic 對抗 OpenAI 廣告：Claude 免費版解鎖進階功能",
        "desc": "OpenAI 準備在 ChatGPT 放廣告之際，Anthropic 反其道而行，為 Claude 免費版解鎖多項進階功能收買人心。",
        "url": "https://www.inside.com.tw/article/40663-anthropic-beefs-up-claudes-free-tier-as-openai-prepares-to-stuff-ads-into-chatgpts",
        "source": "INSIDE",
        "tags": [
          "model"
        ]
      },
      {
        "sub": "secondary",
        "title": "Claude 功能狂發，OpenAI 本週三大敗退",
        "desc": "INSIDE 分析 Anthropic 密集發布功能，同時 OpenAI 面對 Sora 關閉等挑戰的競爭態勢。",
        "url": "https://www.inside.com.tw/article/40961-openai-sora-shutdown-anthropic-claude-apple-siri-extensions-2026",
        "source": "INSIDE",
        "tags": [
          "model"
        ]
      }
    ],
    "hf": [
      {
        "name": "Text-to-Video 開源模型",
        "author": "社群",
        "desc": "2026 年文字轉影片開源模型品質大躍進，多個開源版本匹敵商業方案。",
        "url": "https://dev.to/czmilo/2026-complete-guide-top-text-to-video-models-on-huggingface-49p2",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Reflective Agents",
        "author": "研究社群",
        "desc": "測試時推理與反思式代理崛起，AI 從助手進化為同事。",
        "url": "https://huggingface.co/blog/aufklarer/ai-trends-2026-test-time-reasoning-reflective-agen",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Wan2.2-TI2V-5B",
        "author": "Alibaba",
        "desc": "50 億參數文字轉影像轉影片模型，支援端到端生成管線。",
        "url": "https://huggingface.co/Wan-AI/Wan2.2-TI2V-14B",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Pixelle-Video",
        "repo": "AIDC-AI/Pixelle-Video",
        "desc": "端到端 AI 影片製作管線：輸入主題即自動產出完整影片。",
        "stars": "9.2k",
        "lang": "Python",
        "url": "https://github.com/AIDC-AI/Pixelle-Video",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Ollama",
        "repo": "ollama/ollama",
        "desc": "輕量級框架，可在本地硬體上運行與管理大型語言模型。",
        "stars": "175k+",
        "lang": "Go",
        "url": "https://github.com/ollama/ollama",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "karpathy-skills",
        "repo": "andrejkarpathy/skills",
        "desc": "Andrej Karpathy 的 CLAUDE.md 技能檔，改善 Claude Code 行為的最佳實踐。",
        "stars": "106.8k",
        "lang": "Markdown",
        "url": "https://github.com/andrejkarpathy/dotfiles",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-06",
    "weekday": "星期二",
    "stats": {
      "claude": 5,
      "openai": 3,
      "gemini": 2,
      "grok": 3,
      "news": 2,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Code w/ Claude 2026 開發者大會登場",
        "desc": "Anthropic 年度開發者大會在舊金山舉辦，發布多項重大更新，API 流量年增 17 倍。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 五小時用量上限翻倍",
        "desc": "Pro、Max、Enterprise 用戶的五小時限制加倍，尖峰時段限制對 Pro/Max 取消，新增 xhigh effort 等級。",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/",
        "source": "Simon Willison",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Anthropic 攜手 SpaceX Colossus 取得全部算力",
        "desc": "與 SpaceX 位於曼菲斯的 Colossus 資料中心合作，取得全部算力容量，支撐 API 流量爆發式成長。",
        "url": "https://www.inc.com/ben-sherry/anthropic-and-spacex-just-announced-a-colossal-deal-to-supercharge-claude-ai/91341165",
        "source": "Inc.",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "agent",
        "title": "Claude Managed Agents 三大新功能預告",
        "desc": "大會預告 Dreaming 記憶、Outcomes 成功標準、多代理協作三大功能，將於次日正式上線。",
        "url": "https://www.artiverse.ca/highlights-from-anthropics-code-w-claude-2026-conference/",
        "source": "Artiverse",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 改為原生二進位執行檔",
        "desc": "CLI 從 Node.js 改為原生二進位執行檔，啟動速度與效能大幅提升。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "ChatGPT Business 新增 Analytics 與 Agents 管理",
        "desc": "企業管理主控台新增分析儀表板與代理管理功能，管理員可統一檢視採用率、用量與工作區代理。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT Enterprise 推出 Intune 版 iOS App",
        "desc": "專為使用 Microsoft Intune 與 Entra 的企業組織推出獨立 iOS/iPadOS 應用程式。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT for Excel 與 Google Sheets 全球上線",
        "desc": "試算表原生側邊欄，可直接在工作表中建立、清理、更新與解釋資料，支援 Business 方案。",
        "url": "https://releasebot.io/updates/openai/chatgpt",
        "source": "Releasebot",
        "tags": [
          "openai",
          "tool",
          "integration"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "product",
        "title": "HuggingFace 社群突破 200 萬用戶",
        "desc": "HuggingFace 託管超過 100 萬個模型，社群用戶數突破 200 萬，開源 AI 生態系持續擴張。",
        "url": "https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026",
        "source": "HuggingFace",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Android 17 與 Gemini 深度整合預覽",
        "desc": "Google I/O 前夕，Android 17 與 Gemini 的深度整合功能開始曝光，涵蓋系統級 AI 輔助。",
        "url": "https://www.androidauthority.com/what-to-expect-from-google-io-2026-3664979/",
        "source": "Android Authority",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "product",
        "title": "Elon Musk 宣布解散 xAI，整合為 SpaceXAI",
        "desc": "Musk 宣布 xAI 不再作為獨立公司，正式整合為 SpaceX 旗下的 SpaceXAI，統一 AI 產品線。",
        "url": "https://x.com/elonmusk/status/2052105373621121284",
        "source": "Elon Musk / X",
        "tags": [
          "grok"
        ]
      },
      {
        "sub": "product",
        "title": "SuperGrok Heavy 方案隨 SpaceXAI 推出",
        "desc": "提供 Grok Heavy 模型存取與大幅提升的速率限制，成為 SpaceXAI 首個高階訂閱方案。",
        "url": "https://x.ai/news",
        "source": "xAI 官方",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "xAI 坐擁 55 萬顆 GPU，使用率僅 11%",
        "desc": "報導指出 xAI 的 NVIDIA GPU 使用率遠落後 Meta 與 Google，引發算力閒置爭議。",
        "url": "https://technews.tw/2026/05/04/xai-is-reportedly-using-just-11-percent-of-its-550000-nvidia-gpu/",
        "source": "科技新報",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "Anthropic 讓 Claude 代理「做夢」自我進化",
        "desc": "SiliconAngle 深度分析 Claude Managed Agents 的 Dreaming 功能如何透過回顧過去會話實現自我改進。",
        "url": "https://siliconangle.com/2026/05/06/anthropic-letting-claude-agents-dream-dont-sleep-job/",
        "source": "SiliconANGLE",
        "tags": [
          "agent"
        ]
      },
      {
        "sub": "secondary",
        "title": "Code w/ Claude 大會：Advisor Strategy 降低 AI 成本 5 倍",
        "desc": "小模型接受 Opus 建議的 Advisor 策略，讓客戶以五分之一成本達到類似大模型的品質。",
        "url": "https://www.artiverse.ca/highlights-from-anthropics-code-w-claude-2026-conference/",
        "source": "Artiverse",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "Mem0",
        "author": "Mem0 AI",
        "desc": "圖譜記憶架構，為 LLM 加入長期對話記憶與上下文一致性。",
        "url": "https://huggingface.co/mem0ai",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "ARIS",
        "author": "研究社群",
        "desc": "開源研究框架，使用跨模型對抗協作驗證 AI 研究品質。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "smolagents",
        "author": "Hugging Face",
        "desc": "輕量級代理框架，透過自然語言指令自動化桌面與瀏覽器任務。",
        "url": "https://huggingface.co/smolagents",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "Hermes Agent",
        "repo": "hermes-ai/hermes",
        "desc": "隨使用者成長的 AI 代理框架，支援多模態與長期記憶。",
        "stars": "130k",
        "lang": "Python",
        "url": "https://github.com/hermes-ai/hermes",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Warp",
        "repo": "warpdotdev/warp",
        "desc": "代理式開發環境，從終端機進化而來的智慧開發工具。",
        "stars": "52.9k",
        "lang": "Rust",
        "url": "https://github.com/warpdotdev/Warp",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "mattpocock/skills",
        "repo": "mattpocock/skills",
        "desc": "面向工程師的 Claude Code 技能集，實戰經驗整理。",
        "stars": "55.3k",
        "lang": "Markdown",
        "url": "https://github.com/mattpocock/skills",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-05",
    "weekday": "星期一",
    "stats": {
      "claude": 3,
      "openai": 4,
      "gemini": 3,
      "grok": 2,
      "news": 3,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Code 新手實戰指南：從零開始完整教學",
        "desc": "涵蓋安裝、CLAUDE.md 設定、Plan Mode 技巧，以及與 GitHub Copilot 和 Cursor 的比較。",
        "url": "https://codewithmukesh.com/blog/claude-code-for-beginners/",
        "source": "CodeWithMukesh",
        "tags": [
          "claude",
          "tutorial"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Code 寵物彩蛋揭密",
        "desc": "INSIDE 報導 Claude Code 的隱藏寵物功能，每個用戶的寵物其實早已預先決定好。",
        "url": "https://www.inside.com.tw/article/40990-claude-code-buddy-predetermined-anthropic",
        "source": "INSIDE",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "integration",
        "title": "MCP 月下載量突破 9,700 萬次",
        "desc": "Model Context Protocol 已被所有主要 AI 供應商採用，社群建置超過 200 個 MCP 伺服器。",
        "url": "https://modelcontextprotocol.io/",
        "source": "MCP 官方",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [
      {
        "sub": "model",
        "title": "GPT-5.5 Instant 成為 ChatGPT 預設模型",
        "desc": "高風險場景幻覺減少 52.5%、不準確主張降低 37.3%，全面取代 GPT-5.3 Instant，向所有用戶推出。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "ChatGPT 記憶來源功能上線",
        "desc": "可從過去聊天、檔案與已連接 Gmail 提取上下文進行個人化回應，用戶可查看、刪除或修正記憶來源。",
        "url": "https://9to5mac.com/2026/05/05/gpt-5-5-instant-makes-chatgpt-more-accurate-while-nixing-gratuitous-emojis/",
        "source": "9to5Mac",
        "tags": [
          "openai",
          "agent"
        ]
      },
      {
        "sub": "product",
        "title": "INSIDE 報導：GPT-5.5 Instant 幻覺砍半",
        "desc": "INSIDE 繁中報導分析 OpenAI 新模型在醫療、法律、金融等高風險場景的準確度提升。",
        "url": "https://www.inside.com.tw/article/41228-openai-launches-gpt-55-instant-claims-fewer-hallucinations-more-accurate",
        "source": "INSIDE",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI AI Agent 手機加速開發",
        "desc": "OpenAI 首款 AI Agent 手機加速研發，聯發科有望獨拿處理器訂單，目標 2027 上半年量產。",
        "url": "https://technews.tw/2026/05/05/openai-ai-agent-phone/",
        "source": "科技新報",
        "tags": [
          "openai",
          "agent"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Google 準備推出 AI Ultra Lite 新訂閱方案",
        "desc": "介於 Pro（$20）與 Ultra（$250）之間的新層級，代號 Neon，價格預估 $50-$150。",
        "url": "https://9to5google.com/2026/05/05/google-ai-ultra-lite-gemini-usage-limits/",
        "source": "9to5Google",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "AI 聊天機器人妄想測試：Gemini 表現堪憂",
        "desc": "科學家模擬妄想用戶測試各 AI，Grok 與 Gemini 會鼓勵妄想，GPT-5.2 與 Claude 則維持界線。",
        "url": "https://infosecu.technews.tw/2026/04/29/scientists-pretended-to-be-delusional-in-ai-chats-grok-and-gemini-encouraged-them/",
        "source": "科技新報",
        "tags": [
          "gemini"
        ]
      },
      {
        "sub": "product",
        "title": "iOS 27 將允許選用 Claude 或 Gemini 取代 ChatGPT",
        "desc": "Apple Intelligence 將開放第三方聊天機器人整合，用戶可選擇 Claude 或 Gemini 作為預設 AI 助手。",
        "url": "https://www.macrumors.com/2026/05/05/ios-27-third-party-chatbots-apple-intelligence/",
        "source": "MacRumors",
        "tags": [
          "gemini",
          "integration"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "xAI 發布 Grok 4.3 高效前沿模型",
        "desc": "內建推理能力、100 萬 Token 上下文窗口與原生影片輸入，以 $1.25/M Token 定價兼顧成本與效能。",
        "url": "https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10",
        "source": "NLPlanet",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Musk 法庭承認 xAI 曾用 OpenAI 模型訓練 Grok",
        "desc": "Elon Musk 在法庭證詞中承認 xAI 曾使用 OpenAI 的模型來訓練 Grok，引發業界倫理討論。",
        "url": "https://techcrunch.com/2026/04/30/elon-musk-testifies-that-xai-trained-grok-on-openai-models/",
        "source": "TechCrunch",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "iOS 27 將開放第三方 AI 助手",
        "desc": "Apple Intelligence 開放 Claude 與 Gemini 作為 Siri 替代方案，AI 聊天機器人版圖正式進入手機 OS 層級。",
        "url": "https://www.macrumors.com/2026/05/05/ios-27-third-party-chatbots-apple-intelligence/",
        "source": "MacRumors",
        "tags": [
          "integration"
        ]
      },
      {
        "sub": "secondary",
        "title": "AI 財報週來了：巨頭從燒錢走向現金流",
        "desc": "科技巨頭即將交出 AI 投資成績單，市場關注從基建燒錢能否轉向正向現金流。",
        "url": "https://technews.tw/2026/05/04/ai-hyperscalers-will-drive-higher-us-corporate-bond-supply-in-2026/",
        "source": "科技新報",
        "tags": [
          "model"
        ]
      },
      {
        "sub": "secondary",
        "title": "Perplexity 推出企業搜尋方案",
        "desc": "AI 搜尋引擎 Perplexity 推出面向企業的深度搜尋方案，挑戰 Google 在企業搜尋市場的地位。",
        "url": "https://llm-stats.com/llm-updates",
        "source": "LLM Stats",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "GenericAgent",
        "author": "研究團隊",
        "desc": "自我進化 LLM 代理系統，透過層級記憶與可重複使用 SOP 最大化上下文資訊密度。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Kronos",
        "author": "金融 AI 團隊",
        "desc": "金融 K 線數據專用預訓練框架，在預測與合成數據方面超越現有模型。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "FastApply-7B",
        "author": "Kortix",
        "desc": "專為程式碼維護設計的 AI 模型，快速精準地套用變更與修正。",
        "url": "https://huggingface.co/Kortix/FastApply-7B-v1.0",
        "tags": [
          "model",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "本地運行的個人 AI 助手，可連接 50+ 整合，GitHub 史上成長最快開源專案。",
        "stars": "300k+",
        "lang": "TypeScript",
        "url": "https://github.com/openclaw/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "n8n",
        "repo": "n8n-io/n8n",
        "desc": "開源工作流自動化平台，結合視覺化介面與自訂程式碼彈性。",
        "stars": "180k+",
        "lang": "TypeScript",
        "url": "https://github.com/n8n-io/n8n",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Dify",
        "repo": "langgenius/dify",
        "desc": "開源 LLM 應用開發平台，支援 AI 工作流、RAG 管線與代理功能。",
        "stars": "136k",
        "lang": "Python",
        "url": "https://github.com/langgenius/dify",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-04",
    "weekday": "星期日",
    "stats": {
      "claude": 3,
      "openai": 3,
      "gemini": 3,
      "grok": 2,
      "news": 2,
      "hf": 3,
      "gh": 3
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Security 公開測試版持續擴展",
        "desc": "基於 Claude Opus 4.7 的企業級資安工具持續迭代，可掃描程式碼庫、發現漏洞並建議修補方案。",
        "url": "https://www.infosecurity-magazine.com/news/anthropic-claude-security-for-ai/",
        "source": "Infosecurity",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Claude for Creative Work 創意連接器使用回顧",
        "desc": "Anthropic 的 Ableton、Blender、SketchUp 等創意工具連接器上線一週後獲得藝術家與設計師社群好評。",
        "url": "https://www.anthropic.com/news/claude-for-creative-work",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Context Engineering 取代 Prompt Engineering 成為關鍵",
        "desc": "Claude 最佳實踐 2026 指南指出，上下文工程已取代提示工程成為提升 AI 效能的核心槓桿點。",
        "url": "https://www.the-ai-corner.com/p/claude-best-practices-power-user-guide-2026",
        "source": "The AI Corner",
        "tags": [
          "claude",
          "tutorial"
        ]
      }
    ],
    "openai": [
      {
        "sub": "product",
        "title": "GPT-5.5 即將成為 ChatGPT 預設模型",
        "desc": "OpenAI 預告 GPT-5.5 Instant 將於次日全面推送為 ChatGPT 預設模型，取代 GPT-5.3 Instant。",
        "url": "https://openai.com/index/gpt-5-5-instant/",
        "source": "OpenAI 官方",
        "tags": [
          "openai",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "GPT-5.5 進入 GitHub Copilot",
        "desc": "GPT-5.5 已開始整合至 GitHub Copilot，Pro+、Business 與 Enterprise 用戶陸續獲得存取。",
        "url": "https://blog.mean.ceo/new-ai-model-releases-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "openai",
          "integration"
        ]
      },
      {
        "sub": "product",
        "title": "OpenAI 擴大雲端合作，打破微軟獨家限制",
        "desc": "OpenAI 開放與 Amazon 合作分發，並為 Google 合作留下空間，結束微軟獨家代理模式。",
        "url": "https://www.cryptointegrat.com/p/ai-news-may-1-2026",
        "source": "CryptoIntegrat",
        "tags": [
          "openai",
          "integration"
        ]
      }
    ],
    "gemini": [
      {
        "sub": "model",
        "title": "Google Gemini 3.1 Ultra 支援多模態即時處理",
        "desc": "可同時處理視訊、音訊與文字，無需轉錄中介，並內建沙箱程式碼執行工具。",
        "url": "https://blog.mean.ceo/new-ai-model-releases-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "gemini",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Google I/O 2026 將於 5/19 登場",
        "desc": "Google 年度開發者大會將發表 Gemini 4、AI 代理 Remy、Android XR 等重大更新。",
        "url": "https://panasiabiz.com/116181/google-io-2026-announcements-android-17-gemini/",
        "source": "PanAsia Biz",
        "tags": [
          "gemini"
        ]
      },
      {
        "sub": "product",
        "title": "DeepMind Vision Banana 通用視覺 AI",
        "desc": "首個在標準任務上匹敵或超越專家模型的通用視覺 AI，展示 Google 在多模態的深度布局。",
        "url": "https://asanify.com/blog/news/generalist-visual-ai-may-1-2026/",
        "source": "Asanify",
        "tags": [
          "gemini",
          "model"
        ]
      }
    ],
    "grok": [
      {
        "sub": "model",
        "title": "Grok 4.3 正式發布：100 萬 Token 上下文",
        "desc": "xAI 發布 Grok 4.3，內建推理、100 萬 Token 上下文與原生影片輸入，Intelligence Index 拿下 53 分。",
        "url": "https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10",
        "source": "NLPlanet",
        "tags": [
          "grok",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "xAI GPU 使用率僅 11%，遠低於競爭對手",
        "desc": "xAI 坐擁 55 萬顆 NVIDIA GPU，但使用率傳僅 11%，遠落後 Meta 與 Google，算力閒置引發關注。",
        "url": "https://technews.tw/2026/05/04/xai-is-reportedly-using-just-11-percent-of-its-550000-nvidia-gpu/",
        "source": "科技新報",
        "tags": [
          "grok"
        ]
      }
    ],
    "news": [
      {
        "sub": "secondary",
        "title": "代理式 AI 成為 2026 年預設模式",
        "desc": "5 月標誌著 Agentic AI 從趨勢變為預設，各大平台競相推出自主系統執行任務與管理工作流。",
        "url": "https://www.aiandnews.com/blog/latest-ai-news-may-2026/",
        "source": "AI and News",
        "tags": [
          "agent"
        ]
      },
      {
        "sub": "secondary",
        "title": "Microsoft Agent 365 企業 AI 代理管控平台上線",
        "desc": "專為企業 AI 代理提供治理與安全控制面板，每用戶每月 $15，統一管理多平台代理。",
        "url": "https://blog.mean.ceo/ai-product-launches-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "agent",
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "LingBot-Map",
        "author": "3D 視覺團隊",
        "desc": "前饋式 3D 基礎模型，從影片串流重建場景，達到 20 FPS 即時效能。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "BLOOM",
        "author": "BigScience",
        "desc": "開放取用多語言大型語言模型，支援 46 種語言、1,760 億參數。",
        "url": "https://huggingface.co/bigscience/bloom",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Reflective Agents",
        "author": "研究社群",
        "desc": "測試時推理與反思式代理崛起，AI 從助手進化為同事。",
        "url": "https://huggingface.co/blog/aufklarer/ai-trends-2026-test-time-reasoning-reflective-agen",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "本地運行的個人 AI 助手，可連接 50+ 整合，2026 年成長最快開源專案。",
        "stars": "300k+",
        "lang": "TypeScript",
        "url": "https://github.com/openclaw/openclaw",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Ollama",
        "repo": "ollama/ollama",
        "desc": "本地運行大型語言模型的輕量級框架，持續穩居熱門榜單。",
        "stars": "175k+",
        "lang": "Go",
        "url": "https://github.com/ollama/ollama",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Browser Use",
        "repo": "browser-use/browser-use",
        "desc": "讓 AI 代理操控瀏覽器執行任務的開源框架。",
        "stars": "80k+",
        "lang": "Python",
        "url": "https://github.com/browser-use/browser-use",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-02",
    "weekday": "星期六",
    "stats": {
      "claude": 6,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 7,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Mythos 預覽版開放限量測試",
        "desc": "Anthropic 發布 Mythos 模型預覽，在測試中發現數千個零日漏洞，目前僅開放給關鍵產業夥伴與開源開發者。",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "source": "Anthropic",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude Opus 4.7 新分詞器提升 35% Token 效率",
        "desc": "Opus 4.7 搭載新分詞器，相同輸入可產生多出 35% 的 Token，價格維持不變。",
        "url": "https://docs.anthropic.com/en/release-notes/overview",
        "source": "Anthropic Docs",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Managed Agents 公開測試版上線",
        "desc": "全託管式代理框架，支援安全沙箱、內建工具與 SSE 串流。",
        "url": "https://docs.anthropic.com/en/release-notes/overview",
        "source": "Anthropic Docs",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "tool",
        "title": "Anthropic 推出 ant CLI 命令列工具",
        "desc": "全新 CLI 客戶端，可直接與 Claude API 互動，並以 YAML 管理 API 資源版本。",
        "url": "https://docs.anthropic.com/en/release-notes/overview",
        "source": "Anthropic Docs",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Code 新手實戰指南：從零開始的完整教學",
        "desc": "涵蓋安裝、CLAUDE.md 設定、Plan Mode 技巧，以及與 GitHub Copilot/Cursor 的比較。",
        "url": "https://codewithmukesh.com/blog/claude-code-for-beginners/",
        "source": "CodeWithMukesh",
        "tags": [
          "claude",
          "tutorial"
        ]
      },
      {
        "sub": "integration",
        "title": "MCP 月下載量突破 9,700 萬次",
        "desc": "Model Context Protocol 已被所有主要 AI 供應商採用，社群建置超過 200 個 MCP 伺服器。",
        "url": "https://modelcontextprotocol.io/",
        "source": "MCP 官方",
        "tags": [
          "claude",
          "integration"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "title": "GPT-5.5 發布並進入 GitHub Copilot",
        "desc": "OpenAI 發布 GPT-5.5，GitHub Copilot 已開始整合部署。",
        "url": "https://blog.mean.ceo/new-ai-model-releases-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Google Gemini 3.1 Ultra 支援多模態即時處理",
        "desc": "可同時處理視訊、音訊與文字，無需轉錄中介，並內建沙箱程式碼執行工具。",
        "url": "https://blog.mean.ceo/new-ai-model-releases-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Microsoft Agent 365 企業級 AI 代理管控平台上線",
        "desc": "專為企業 AI 代理提供治理與安全控制面板，每用戶每月 $15。",
        "url": "https://blog.mean.ceo/ai-product-launches-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "DeepMind Vision Banana 通用視覺 AI 擊敗專家模型",
        "desc": "首個在標準任務上匹敵或超越專家模型的通用視覺 AI。",
        "url": "https://asanify.com/blog/news/generalist-visual-ai-may-1-2026/",
        "source": "Asanify",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Standard Intelligence 獲 7,500 萬美元融資",
        "desc": "六人團隊打造 Computer Use 模型 FDM-1，以 1,100 萬小時影片訓練。",
        "url": "https://techstartups.com/2026/05/01/top-tech-news-today-may-1-2026/",
        "source": "TechStartups",
        "tags": [
          "agent"
        ]
      },
      {
        "title": "AI 注入攻擊成為企業新威脅",
        "desc": "攻擊者在公開網頁植入隱藏指令，企業 AI 抓取後可能使用真實權限造成損害。",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "source": "Crescendo AI",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "中國法院裁定不得單純為降低成本以 AI 取代員工",
        "desc": "具指標意義的裁決，一名工程師被 LLM 取代後遭解僱，法院判定違法。",
        "url": "https://www.cryptointegrat.com/p/ai-news-may-1-2026",
        "source": "CryptoIntegrat",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "GenericAgent",
        "author": "研究團隊",
        "desc": "自我進化 LLM 代理系統，透過層級記憶與可重複使用 SOP 最大化上下文資訊密度。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Kronos",
        "author": "金融 AI 團隊",
        "desc": "金融 K 線數據專用預訓練框架，在預測與合成數據生成方面超越現有模型。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "LingBot-Map",
        "author": "3D 視覺團隊",
        "desc": "前饋式 3D 基礎模型，從影片串流重建場景，達到 20 FPS 即時效能。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Text-to-Video 開源模型",
        "author": "社群",
        "desc": "2026 年文字轉影片開源模型品質大躍進，多個開源版本匹敵商業方案。",
        "url": "https://dev.to/czmilo/2026-complete-guide-top-text-to-video-models-on-huggingface-49p2",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Reflective Agents",
        "author": "研究社群",
        "desc": "2026 AI 趨勢：測試時推理與反思式代理崛起，AI 從助手進化為同事。",
        "url": "https://huggingface.co/blog/aufklarer/ai-trends-2026-test-time-reasoning-reflective-agen",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "本地運行的個人 AI 助手，可連接 50+ 整合，GitHub 史上成長最快的開源專案。",
        "stars": "300k+",
        "lang": "TypeScript",
        "url": "https://github.com/trending",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "n8n",
        "repo": "n8n-io/n8n",
        "desc": "開源工作流自動化平台，結合視覺化介面與自訂程式碼彈性。",
        "stars": "180k+",
        "lang": "TypeScript",
        "url": "https://github.com/n8n-io/n8n",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Ollama",
        "repo": "ollama/ollama",
        "desc": "輕量級框架，可在本地硬體上運行與管理大型語言模型。",
        "stars": "—",
        "lang": "Go",
        "url": "https://github.com/ollama/ollama",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Dify",
        "repo": "langgenius/dify",
        "desc": "開源 LLM 應用開發平台，支援 AI 工作流、RAG 管線與代理功能。",
        "stars": "136k",
        "lang": "Python",
        "url": "https://github.com/langgenius/dify",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Browser Use",
        "repo": "browser-use/browser-use",
        "desc": "讓 AI 代理操控瀏覽器執行任務的開源框架。",
        "stars": "—",
        "lang": "Python",
        "url": "https://github.com/browser-use/browser-use",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-05-01",
    "weekday": "星期四",
    "stats": {
      "claude": 5,
      "openai": 0,
      "gemini": 0,
      "grok": 0,
      "news": 6,
      "hf": 5,
      "gh": 5
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude Security 公開測試版正式上線",
        "desc": "基於 Claude Opus 4.7 的企業級資安工具，可掃描程式碼庫、發現漏洞並建議修補方案。",
        "url": "https://www.infosecurity-magazine.com/news/anthropic-claude-security-for-ai/",
        "source": "Infosecurity",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "product",
        "title": "Claude for Creative Work 創意連接器套件發布",
        "desc": "全新連接器讓 Claude 整合 Ableton、Blender、SketchUp 等創作工具。",
        "url": "https://www.anthropic.com/news/claude-for-creative-work",
        "source": "Anthropic 官方",
        "tags": [
          "claude",
          "integration"
        ]
      },
      {
        "sub": "tool",
        "title": "Claude Code 大型更新：Routines、/ultrareview 與原生 CLI",
        "desc": "新增 Routines 功能、平行多代理程式碼審查、/usage 指令等多項改進。",
        "url": "https://releasebot.io/updates/anthropic/claude-code",
        "source": "Releasebot",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "integration",
        "title": "Anthropic 年化營收達 300 億美元",
        "desc": "超過 1,000 家企業客戶年付超過百萬美元，2026 預估年化營收 300 億美元。",
        "url": "https://blog.mean.ceo/anthropic-claude-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "claude"
        ]
      },
      {
        "sub": "integration",
        "title": "五角大廈將 Anthropic 排除在軍事 AI 合約外",
        "desc": "美國國防部與七家 AI 公司簽約部署機密網路系統，Anthropic 未被納入。",
        "url": "https://www.defensenews.com/news/pentagon-congress/2026/05/01/pentagon-freezes-out-anthropic-as-it-signs-deals-with-ai-rivals/",
        "source": "Defense News",
        "tags": [
          "claude"
        ]
      }
    ],
    "openai": [],
    "gemini": [],
    "grok": [],
    "news": [
      {
        "title": "SoftBank 籌建 Roze 機器人公司",
        "desc": "結合 ABB Robotics 與能源資產，部署機器人建造 AI 資料中心，目標 2026 下半年赴美上市。",
        "url": "https://techstartups.com/2026/05/01/top-tech-news-today-may-1-2026/",
        "source": "TechStartups",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "OpenAI 擴大雲端合作，打破微軟獨家限制",
        "desc": "OpenAI 開放與 Amazon 合作分發，並為 Google 合作留下空間。",
        "url": "https://www.cryptointegrat.com/p/ai-news-may-1-2026",
        "source": "CryptoIntegrat",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Amazon 推出 AI 語音商品問答功能",
        "desc": "商品頁面新增 AI 驅動語音 Q&A，以商品特色與顧客回饋提供對話式回答。",
        "url": "https://blog.mean.ceo/ai-product-launches-news-may-2026/",
        "source": "Mean CEO",
        "tags": [
          "tool"
        ]
      },
      {
        "title": "Claude 最佳實踐 2026 完整指南發布",
        "desc": "Context Engineering 取代 Prompt Engineering 成為 2026 年關鍵槓桿點。",
        "url": "https://www.the-ai-corner.com/p/claude-best-practices-power-user-guide-2026",
        "source": "The AI Corner",
        "tags": [
          "tutorial"
        ]
      },
      {
        "title": "代理式 AI 成為預設模式",
        "desc": "2026 年 5 月標誌著 Agentic AI 從趨勢變為預設，自主系統可執行任務、管理工作流。",
        "url": "https://www.aiandnews.com/blog/latest-ai-news-may-2026/",
        "source": "AI and News",
        "tags": [
          "agent"
        ]
      },
      {
        "title": "AI 基礎建設投資急速升溫",
        "desc": "私募股權大舉投入數百億美元建設專用資料中心與電廠。",
        "url": "https://www.cryptointegrat.com/p/ai-news-may-1-2026",
        "source": "CryptoIntegrat",
        "tags": [
          "tool"
        ]
      }
    ],
    "hf": [
      {
        "name": "GenericAgent",
        "author": "研究團隊",
        "desc": "自我進化 LLM 代理系統，透過層級記憶與可重複使用 SOP 最大化上下文資訊密度。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Kronos",
        "author": "金融 AI 團隊",
        "desc": "金融 K 線數據專用預訓練框架。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "LingBot-Map",
        "author": "3D 視覺團隊",
        "desc": "前饋式 3D 基礎模型，從影片串流重建場景。",
        "url": "https://huggingface.co/papers/trending",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Text-to-Video 開源模型",
        "author": "社群",
        "desc": "2026 年文字轉影片開源模型品質大躍進。",
        "url": "https://dev.to/czmilo/2026-complete-guide-top-text-to-video-models-on-huggingface-49p2",
        "tags": [
          "model",
          "open"
        ]
      },
      {
        "name": "Reflective Agents",
        "author": "研究社群",
        "desc": "測試時推理與反思式代理崛起。",
        "url": "https://huggingface.co/blog/aufklarer/ai-trends-2026-test-time-reasoning-reflective-agen",
        "tags": [
          "agent",
          "open"
        ]
      }
    ],
    "gh": [
      {
        "name": "OpenClaw",
        "repo": "openclaw/openclaw",
        "desc": "本地運行的個人 AI 助手，可連接 50+ 整合。",
        "stars": "300k+",
        "lang": "TypeScript",
        "url": "https://github.com/trending",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "n8n",
        "repo": "n8n-io/n8n",
        "desc": "開源工作流自動化平台。",
        "stars": "180k+",
        "lang": "TypeScript",
        "url": "https://github.com/n8n-io/n8n",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Ollama",
        "repo": "ollama/ollama",
        "desc": "本地運行大型語言模型的輕量級框架。",
        "stars": "—",
        "lang": "Go",
        "url": "https://github.com/ollama/ollama",
        "tags": [
          "tool",
          "open"
        ]
      },
      {
        "name": "Dify",
        "repo": "langgenius/dify",
        "desc": "開源 LLM 應用開發平台。",
        "stars": "136k",
        "lang": "Python",
        "url": "https://github.com/langgenius/dify",
        "tags": [
          "agent",
          "open"
        ]
      },
      {
        "name": "Browser Use",
        "repo": "browser-use/browser-use",
        "desc": "讓 AI 代理操控瀏覽器執行任務。",
        "stars": "—",
        "lang": "Python",
        "url": "https://github.com/browser-use/browser-use",
        "tags": [
          "agent",
          "open"
        ]
      }
    ]
  }
];
