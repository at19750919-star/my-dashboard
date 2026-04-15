// AI 工具日報 — 每日資料檔（由排程自動更新）
// 格式：每個物件代表一天，newest first
// 所有歷史資料均永久保留
const AI_NEWS_DATA = [
  {
    "date": "2026-04-15",
    "weekday": "星期三",
    "stats": {
      "claude": 7,
      "news": 7,
      "skill": 5
    },
    "claude": [
      {
        "sub": "devtool",
        "title": "Claude Code 推出 Routines 自動化流程，AI 代理人從「隨叫隨到」走向「全天候自動執行」",
        "desc": "Anthropic 推出新的 routines 服務，讓 Claude Code 用戶在雲端基礎設施上運行自動化流程，包含提示、儲存庫和連接器的完整配置。",
        "url": "https://inside.com.tw/article/33956-claude-code-routines-launch",
        "source": "INSIDE"
      },
      {
        "sub": "devtool",
        "title": "Claude Code 桌面版全面重設計：多 Session 並排、整合終端與檔案編輯",
        "desc": "Anthropic 發布重新設計的 Claude Code 桌面應用程式，新增整合終端、加速差異檢視器、應用程式內檔案編輯器和擴展預覽區域。",
        "url": "https://abmedia.io/claude-code-desktop-redesign-2026",
        "source": "鏈新聞 ABMedia"
      },
      {
        "sub": "product",
        "title": "Anthropic 新模型 Claude Mythos 引發金融業資安疑慮，僅限合作夥伴使用",
        "desc": "Claude Mythos 在電腦安全任務表現卓越，但因網路安全風險考量，Anthropic 宣布不會公開發布，僅透過 Project Glasswing 提供給特定合作夥伴。",
        "url": "https://ithome.com.tw/news/161234",
        "source": "iThome"
      },
      {
        "sub": "product",
        "title": "Claude 將啟用身分驗證，高階功能須提供證件、即時自拍防濫用",
        "desc": "Anthropic 要求實名 KYC 驗證，Claude 部分進階功能將需要上傳身分證件和即時自拍，以防範濫用和提升安全性。",
        "url": "https://www.ettoday.net/news/20260415/2860123.htm",
        "source": "ETtoday新聞雲"
      },
      {
        "sub": "ecosystem",
        "title": "Anthropic 推 Claude for Word，AI 直接住進側邊欄助力文檔編輯",
        "desc": "Claude 整合進入 Microsoft Word 側邊欄，提供即時寫作協助、內容建議和文檔優化功能，讓 Office 用戶無縫使用 AI 輔助。",
        "url": "https://today.line.me/tw/v2/article/mNbJP81",
        "source": "LINE TODAY"
      },
      {
        "sub": "product",
        "title": "Anthropic 最快本周發佈 Claude Opus 4.7，效能大幅提升",
        "desc": "市場傳出 Anthropic 將於本周發布 Claude Opus 4.7，預期在推理能力和上下文處理方面將有顯著改進。",
        "url": "https://news.cnyes.com/news/id/5342891",
        "source": "鉅亨網"
      },
      {
        "sub": "product",
        "title": "AI 開始研究 AI？Claude 自主做對齊研究，效率超越人類 4 倍",
        "desc": "Anthropic 展示 Claude 進行自主 AI 對齊研究的能力，在某些研究任務上展現出比人類研究員高出 4 倍的效率。",
        "url": "https://www.ettoday.net/news/20260415/2860145.htm",
        "source": "ETtoday新聞雲"
      }
    ],
    "news": [
      {
        "title": "Gemini 3.1 Pro 領先 13 項重要基準測試，成本僅為 GPT-5.4 Pro 三分之一",
        "desc": "Google Gemini 3.1 Pro 在 Artificial Analysis Intelligence Index 中與 GPT-5.4 Pro 並列，但 API 成本大幅降低，在 16 項主要基準中領先 13 項。",
        "url": "https://blog.mean.ceo/ai-model-releases-news-april-2026/",
        "source": "Mean.ceo"
      },
      {
        "title": "Google Gemma 4 開源模型發佈，Apache 2.0 授權提供前沿級效能",
        "desc": "Google 發布 Gemma 4 開源語言模型，採用 Apache 2.0 授權，提供與商業模型相媲美的前沿級效能，成為開發者首選。",
        "url": "https://fazm.ai/blog/new-ai-model-releases-open-source-projects-april-2026",
        "source": "Fazm.ai"
      },
      {
        "title": "Meta Llama 4 Maverick 登場：400B 參數、1000 萬 token 上下文視窗",
        "desc": "Meta 推出 Llama 4 Maverick，擁有 400B 參數和 1000 萬 token 上下文視窗，成為目前最大的開源語言模型之一。",
        "url": "https://whatllm.org/blog/new-ai-models-april-2026",
        "source": "What LLM"
      },
      {
        "title": "DeepSeek V3.2 性價比突破：90% GPT-5.4 效能，成本僅 1/50",
        "desc": "DeepSeek 發布 V3.2 模型，在保持約 90% GPT-5.4 效能的同時，使用成本降至僅約 1/50，為企業 AI 應用帶來革命性的成本效益。",
        "url": "https://llm-stats.com/ai-news",
        "source": "LLM Stats"
      },
      {
        "title": "OpenAI GPT-5.5「Spud」完成預訓練，市場競爭進入白熱化",
        "desc": "OpenAI 代號「Spud」的 GPT-5.5 已完成預訓練階段，預計將在 2026 年下半年發布，加劇 AI 模型市場競爭。",
        "url": "https://renovateqr.com/blog/ai-models-april-2026",
        "source": "RenovateQR"
      },
      {
        "title": "xAI Grok 4.20 引入全新多代理架構，突破傳統 AI 設計思維",
        "desc": "xAI 推出 Grok 4.20，採用創新的多代理架構設計，在複雜推理和協作任務上展現出與傳統大型語言模型截然不同的能力。",
        "url": "https://joulyan.com/en/blog/april-2026-ai-news-digest",
        "source": "Joulyan"
      },
      {
        "title": "OpenAI 公開批評 Anthropic「營收灌水 80 億美元」，產業競爭白熱化",
        "desc": "OpenAI 公開質疑 Anthropic 財務數據透明度，指控其營收數字灌水高達 80 億美元，反映 AI 產業競爭已達白熱化程度。",
        "url": "https://www.bnext.com.tw/article/79856/openai-anthropic-revenue-dispute-2026",
        "source": "數位時代"
      }
    ],
    "skill": [
      {
        "title": "SkillsMP 技能市場平台：2400+ 可重複使用技能，單一指令安裝",
        "desc": "最大的 Claude Code 技能目錄，提供超過 2400 個技能和 2500 個市場平台，支援按安裝次數和 GitHub 星數排序的技能發現。",
        "url": "https://skillsmp.com",
        "source": "SkillsMP"
      },
      {
        "title": "daymade 專業技能市場：48 個生產就緒的開發工作流技能",
        "desc": "專為開發者打造的技能集合，包含 48 個經過生產驗證的技能，涵蓋軟體工程工作流程的各個環節，提升開發效率。",
        "url": "https://github.com/daymade/claude-code-skills",
        "source": "GitHub"
      },
      {
        "title": "liteLLM Claude Code 外掛市場：託管技能服務整合方案",
        "desc": "liteLLM 提供的 Claude Code 外掛市場服務，支援託管技能管理、版本控制和企業級部署，簡化技能集成流程。",
        "url": "https://docs.litellm.ai/docs/tutorials/claude_code_plugin_marketplace",
        "source": "liteLLM"
      },
      {
        "title": "awesome-claude-skills：精選 Claude 技能資源與工具清單",
        "desc": "travisvn 維護的精選技能清單，收集高品質的 Claude Skills、資源和工具，特別針對 Claude Code 工作流程客製化需求。",
        "url": "https://github.com/travisvn/awesome-claude-skills",
        "source": "GitHub"
      },
      {
        "title": "LobeHub Agent Skills 市場：Claude、Codex 與 ChatGPT 通用技能平台",
        "desc": "LobeHub 提供跨平台的 Agent 技能市場，支援 Claude、Codex 和 ChatGPT，讓開發者能夠分享和發現高品質的 AI 代理技能。",
        "url": "https://lobehub.com/skills",
        "source": "LobeHub"
      }
    ]
  },
  {
    "date": "2026-04-14",
    "weekday": "星期二",
    "stats": {
      "claude": 7,
      "news": 7
    },
    "claude": [
      {
        "sub": "product",
        "title": "Claude for Word 正式上線：完整 Microsoft Office 套件支援",
        "desc": "Anthropic 推出 Claude for Word 外掛，至此完成 Word、Excel、PowerPoint 全套整合，可在三套件之間維持完整對話與資料記憶",
        "url": "https://www.financialcontent.com/article/abnewswire-2026-4-13-anthropic-rolls-out-claude-for-word-add-in-now-full-microsoft-office-suite-word-excel-powerpoint-natively-supports-claude",
        "tags": [
          "claude",
          "app"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 發表 Claude Mythos Preview 模型",
        "desc": "全新通用語言模型 Mythos Preview 在電腦安全任務上表現出色，同步啟動 Project Glasswing 用以強化全球關鍵軟體資安",
        "url": "https://red.anthropic.com/2026/mythos-preview/",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Claude 內建即時圖表與視覺化生成",
        "desc": "Claude 現可直接在回應中產生自訂圖表、流程圖與視覺化內容，無需切換工具即可呈現資料洞察",
        "url": "https://platform.claude.com/docs/en/release-notes/overview",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code v2.1.101：新增 /team-onboarding 命令",
        "desc": "最新版本可從本地使用紀錄自動生成新成員上手指南，並支援以 @mention 引用特定 subagent 進行協作",
        "url": "https://help.apiyi.com/en/claude-code-changelog-2026-april-updates-en.html",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude API 新增資料駐留控制與免費程式碼執行",
        "desc": "推出 inference_geo 參數可指定推論地區，US-only 為 1.1x 定價；搭配 web search/fetch 使用程式碼執行完全免費",
        "url": "https://docs.anthropic.com/en/release-notes/overview",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "MCP 協定累計安裝突破 9,700 萬次",
        "desc": "Anthropic Model Context Protocol 於 3 月底安裝量達 9700 萬，正式從實驗標準轉為 AI Agent 開發的基礎設施",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "claude",
          "open"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Mastering MCP：連結 Claude 至 GitHub、Docker、Slack 完整教學",
        "desc": "全新 2026 教學系列示範如何透過 MCP 將 Claude 連接到主流開發與協作工具，涵蓋部署、權限與最佳實務",
        "url": "https://www.thetips4you.com/mastering-mcp-connect-claude-to-github-docker-slack-more-2026-tutorial/",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "title": "OpenAI 發表 GPT-5.4：1M token 上下文與自主工作流",
        "desc": "GPT-5.4 支援百萬 token 上下文，可跨多個軟體環境自動執行多步驟工作流程，再次拉開推理代理門檻",
        "url": "https://llm-stats.com/ai-news",
        "tags": [
          "model",
          "agent"
        ]
      },
      {
        "title": "Google 發布 Gemini 3.1 Ultra：原生多模態 2M 上下文",
        "desc": "Gemini 3.1 Ultra 為 Google 年度最重要釋出，原生跨文字、影像、音訊與影片，並支援 200 萬 token 上下文",
        "url": "https://llm-stats.com/ai-news",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Stanford 2026 AI Index：頂尖模型仍在持續突破",
        "desc": "最新 Stanford AI Index 報告指出，雖然外界擔心 AI 發展撞牆，但前段班模型在各項評測上仍持續顯著進步",
        "url": "https://www.technologyreview.com/2026/04/13/1135675/want-to-understand-the-current-state-of-ai-check-out-these-charts/",
        "tags": [
          "model"
        ]
      },
      {
        "title": "PwC 報告：AI 經濟收益 74% 由 20% 公司獨占",
        "desc": "領先企業以成長導向（而非單純生產力）運用 AI，正快速拉開與其他組織的差距",
        "url": "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-performance-study.html",
        "tags": [
          "app"
        ]
      },
      {
        "title": "Regal Cineworld 在 ChatGPT 內推出首個電影訂票應用",
        "desc": "用戶可在 ChatGPT 對話中查詢附近場次、格式與場景，並完成訂票，象徵 ChatGPT 應用商城進入消費市場",
        "url": "https://www.crescendo.ai/news/latest-ai-news-and-updates",
        "tags": [
          "app",
          "agent"
        ]
      },
      {
        "title": "Lucidworks 推出企業級 MCP 伺服器",
        "desc": "Lucidworks MCP 伺服器協助企業安全連接 AI Agent 與內部資料，可將整合時程縮短最多 10 倍",
        "url": "https://www.globenewswire.com/news-release/2026/04/08/3269912/0/en/Lucidworks-Launches-Model-Context-Protocol-to-Reduce-AI-Agent-Integration-Timelines-by-Up-to-10x.html",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "Meta 發表 Muse Spark：Superintelligence Labs 首發模型",
        "desc": "Muse Spark 為 Meta 新成立的 Superintelligence Labs 推出的首個模型，標誌 Meta AI 戰略全面重整",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tags": [
          "model"
        ]
      }
    ]
  },
  {
    "date": "2026-04-13",
    "weekday": "星期一",
    "stats": {
      "claude": 7,
      "news": 7
    },
    "claude": [
      {
        "sub": "product",
        "title": "Anthropic 與 CoreWeave 簽訂多年資料中心合作協議",
        "desc": "Anthropic 與 CoreWeave 達成多年合作，租用其資料中心算力來部署 Claude AI 模型，因應日益增長的服務需求",
        "url": "https://www.bloomberg.com/news/articles/2026-04-10/anthropic-agrees-to-rent-coreweave-ai-capacity-to-power-claude",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "product",
        "title": "Anthropic 推出 Managed Agents API 公開測試版",
        "desc": "全新 Managed Agents API 提供完整的自主代理運行環境，包含安全沙箱、內建工具與 SSE 串流，大幅降低開發者部署 Agent 的門檻",
        "url": "https://www.roborhythms.com/anthropic-managed-agents-2026/",
        "tags": [
          "claude",
          "agent"
        ]
      },
      {
        "sub": "devtool",
        "title": "Claude Code 四月密集更新：v2.1.69 至 v2.1.101",
        "desc": "五週內推出 30+ 版本更新，新增 NO_FLICKER 渲染引擎、Focus View、Write 工具加速 60%、Computer Use CLI 整合等功能",
        "url": "https://help.apiyi.com/en/claude-code-changelog-2026-april-updates-en.html",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "devtool",
        "title": "Anthropic 發布 ant CLI 命令列工具",
        "desc": "全新 ant CLI 讓開發者可直接從終端機與 Claude API 互動，原生整合 Claude Code，並支援 YAML 格式的 API 資源版本管理",
        "url": "https://releasebot.io/updates/anthropic",
        "tags": [
          "claude",
          "tool"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "HumanX 大會掀起「Claude Mania」熱潮",
        "desc": "AI 產業年度盛會 HumanX 上，Anthropic 成為最熱門話題，業界對 Claude 生態系的關注度達到前所未有的高峰",
        "url": "https://www.cnbc.com/2026/04/11/vibe-check-from-ai-industry-humanx-anthropic-is-talk-of-the-town.html",
        "tags": [
          "claude",
          "app"
        ]
      },
      {
        "sub": "ecosystem",
        "title": "Anthropic 邀請基督教領袖商討 Claude 道德發展",
        "desc": "Anthropic 邀請 15 位天主教與新教教會領袖舉行高峰會議，討論 AI 聊天機器人 Claude 的道德框架與價值觀發展方向",
        "url": "https://www.washingtonpost.com/technology/2026/04/11/anthropic-christians-claude-morals/",
        "tags": [
          "claude",
          "model"
        ]
      },
      {
        "sub": "tutorial",
        "title": "Claude Code 終極指南：從入門到進階的完整教學資源",
        "desc": "多個完整教學指南湧現，涵蓋 50+ 實用技巧、CLAUDE.md 專案記憶系統、斜線命令、/powerup 互動教學等進階功能",
        "url": "https://github.com/FlorianBruniaux/claude-code-ultimate-guide",
        "tags": [
          "claude",
          "tool"
        ]
      }
    ],
    "news": [
      {
        "title": "Meta 發布 Muse Spark AI 模型",
        "desc": "Meta 在 AI 長 Alexandr Wang 領導下推出首個重大 AI 模型 Muse Spark，2026 年 AI 相關資本支出預計達 1150-1350 億美元",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Microsoft 發布 Agent Framework 1.0 正式版",
        "desc": "統一 Semantic Kernel 與 AutoGen 為單一開源 SDK，提供穩定 API、長期支援承諾與企業級多代理編排功能",
        "url": "https://thenewstack.io/ai-coding-tool-stack/",
        "tags": [
          "agent",
          "tool"
        ]
      },
      {
        "title": "AI 編程工具生態整合：Cursor、Claude Code、Codex 融合趨勢",
        "desc": "Cursor 推出平行代理編排介面、OpenAI 發布 Claude Code 內建外掛，開發者開始同時使用三大工具，90% 專業開發者已採用 AI 工具",
        "url": "https://thenewstack.io/ai-coding-tool-stack/",
        "tags": [
          "tool",
          "agent"
        ]
      },
      {
        "title": "AI 能耗突破：新方法降低 100 倍能源消耗",
        "desc": "研究人員結合神經網路與人類式符號推理，開發出效率提升 100 倍的 AI 系統，同時提高準確度，協助機器人更具邏輯思考能力",
        "url": "https://www.sciencedaily.com/releases/2026/04/260405003952.htm",
        "tags": [
          "model"
        ]
      },
      {
        "title": "Google NotebookLM 全面整合至 Gemini 介面",
        "desc": "Google 將 AI 研究助手 NotebookLM 直接整合進 Gemini 聊天介面，使用者無需切換應用即可上傳文件、建立可搜尋知識庫",
        "url": "https://www.humai.blog/ai-news-trends-april-2026-complete-monthly-digest/",
        "tags": [
          "tool",
          "app"
        ]
      },
      {
        "title": "Perplexity 年營收達 4.5 億美元",
        "desc": "AI 搜尋引擎 Perplexity 月活躍用戶突破 1 億，年經常性收入在三月單月暴增 50% 至 4.5 億美元",
        "url": "https://aitoolsrecap.com/Blog/ai-tools-updates-april-2026",
        "tags": [
          "app"
        ]
      },
      {
        "title": "MCP 協議成為 AI 連接產業標準",
        "desc": "Model Context Protocol 已由 Linux 基金會托管，獲 OpenAI、Google DeepMind 等採用，生產環境可處理萬級並發連接，回應時間低於 50ms",
        "url": "https://modelcontextprotocol.io/",
        "tags": [
          "tool",
          "open"
        ]
      }
    ]
  },
  {
    "date": "2026-04-12",
    "weekday": "星期日",
    "stats": {
      "claude": 7,
      "news": 8
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
    ]
  },
  {
    "date": "2026-04-11",
    "weekday": "星期六",
    "stats": {
      "claude": 7,
      "news": 8
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
    ]
  },
  {
    "date": "2026-04-10",
    "weekday": "星期五",
    "stats": {
      "claude": 7,
      "news": 8
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
    ]
  },
  {
    "date": "2026-04-09",
    "weekday": "星期四",
    "stats": {
      "claude": 6,
      "news": 7
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
    ]
  },
  {
    "date": "2026-04-08",
    "weekday": "星期三",
    "stats": {
      "claude": 6,
      "news": 7
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
    ]
  }
];
