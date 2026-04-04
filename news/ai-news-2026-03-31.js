window._newsReports = window._newsReports || {};
window._newsReports["2026-03-31"] = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI 每日新聞報告 - 2026/03/31</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', sans-serif;
    background: #0f0f1a;
    color: #e0e0e0;
    line-height: 1.6;
    min-height: 100vh;
  }
  .header {
    background: linear-gradient(135deg, #1a1a3e 0%, #2d1b69 40%, #6b21a8 100%);
    padding: 40px 20px 30px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    animation: pulse 8s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  .header h1 {
    font-size: 2.2em;
    font-weight: 700;
    color: #fff;
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 10px rgba(139, 92, 246, 0.5);
  }
  .header h1 span { color: #a78bfa; }
  .header .subtitle {
    color: #c4b5fd;
    font-size: 1.05em;
    margin-top: 8px;
    position: relative;
    z-index: 1;
  }
  .stats-bar {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  }
  .stat {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px 24px;
    text-align: center;
    min-width: 120px;
  }
  .stat .num {
    font-size: 1.8em;
    font-weight: 700;
    color: #a78bfa;
  }
  .stat .label {
    font-size: 0.85em;
    color: #94a3b8;
    margin-top: 2px;
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px 16px 60px;
  }
  .filter-bar {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: 24px 0 20px;
    justify-content: center;
  }
  .filter-btn {
    padding: 8px 18px;
    border-radius: 20px;
    border: 1px solid rgba(167, 139, 250, 0.3);
    background: rgba(167, 139, 250, 0.08);
    color: #c4b5fd;
    cursor: pointer;
    font-size: 0.9em;
    transition: all 0.2s;
  }
  .filter-btn:hover, .filter-btn.active {
    background: rgba(167, 139, 250, 0.25);
    border-color: #a78bfa;
    color: #fff;
  }
  .section {
    margin-bottom: 32px;
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    cursor: pointer;
    user-select: none;
  }
  .section-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;
    flex-shrink: 0;
  }
  .section-icon.news { background: linear-gradient(135deg, #7c3aed, #a78bfa); }
  .section-icon.hf { background: linear-gradient(135deg, #f59e0b, #fbbf24); }
  .section-icon.gh { background: linear-gradient(135deg, #10b981, #34d399); }
  .section-title {
    font-size: 1.35em;
    font-weight: 600;
    color: #f1f5f9;
    flex-grow: 1;
  }
  .section-toggle {
    font-size: 1.2em;
    color: #64748b;
    transition: transform 0.3s;
  }
  .section-toggle.collapsed { transform: rotate(-90deg); }
  .section-body {
    display: grid;
    gap: 12px;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  .section-body.collapsed {
    max-height: 0 !important;
    opacity: 0;
    pointer-events: none;
  }
  .card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 14px;
    padding: 18px 20px;
    transition: all 0.2s;
    cursor: pointer;
  }
  .card:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(167, 139, 250, 0.2);
    transform: translateY(-1px);
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }
  .card-title {
    font-size: 1.05em;
    font-weight: 600;
    color: #f1f5f9;
    line-height: 1.4;
  }
  .card-link {
    flex-shrink: 0;
    color: #a78bfa;
    text-decoration: none;
    font-size: 0.85em;
    padding: 4px 12px;
    border-radius: 6px;
    border: 1px solid rgba(167, 139, 250, 0.3);
    transition: all 0.2s;
    white-space: nowrap;
  }
  .card-link:hover {
    background: rgba(167, 139, 250, 0.15);
    color: #fff;
  }
  .card-summary {
    color: #94a3b8;
    font-size: 0.92em;
    margin-top: 8px;
    line-height: 1.6;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, margin 0.3s ease;
  }
  .card.expanded .card-summary {
    max-height: 200px;
    margin-top: 10px;
  }
  .card-tags {
    display: flex;
    gap: 6px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .tag {
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.75em;
    font-weight: 500;
  }
  .tag-model { background: rgba(139, 92, 246, 0.2); color: #c4b5fd; }
  .tag-tool { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }
  .tag-app { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
  .tag-open { background: rgba(245, 158, 11, 0.2); color: #fcd34d; }
  .tag-agent { background: rgba(236, 72, 153, 0.2); color: #f9a8d4; }
  .tag-infra { background: rgba(99, 102, 241, 0.2); color: #a5b4fc; }
  .tag-research { background: rgba(20, 184, 166, 0.2); color: #5eead4; }
  .tag-policy { background: rgba(239, 68, 68, 0.2); color: #fca5a5; }
  .card-meta {
    display: flex;
    gap: 16px;
    margin-top: 10px;
    color: #64748b;
    font-size: 0.82em;
  }
  .card-meta span { display: flex; align-items: center; gap: 4px; }
  .footer {
    text-align: center;
    color: #475569;
    font-size: 0.82em;
    padding: 30px 20px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  @media (max-width: 640px) {
    .header h1 { font-size: 1.5em; }
    .stats-bar { gap: 12px; }
    .stat { min-width: 90px; padding: 10px 16px; }
    .stat .num { font-size: 1.4em; }
    .card { padding: 14px 16px; }
    .section-title { font-size: 1.15em; }
  }
</style>
</head>
<body>

<div class="header">
  <h1>🤖 AI 每日新聞<span>報告</span></h1>
  <div class="subtitle">2026 年 3 月 31 日（星期二）</div>
  <div class="stats-bar">
    <div class="stat"><div class="num" id="total-count">0</div><div class="label">總收集數量</div></div>
    <div class="stat"><div class="num" id="news-count">0</div><div class="label">新聞頭條</div></div>
    <div class="stat"><div class="num" id="hf-count">0</div><div class="label">HF 熱門模型</div></div>
    <div class="stat"><div class="num" id="gh-count">0</div><div class="label">GitHub 專案</div></div>
  </div>
</div>

<div class="container">
  <div class="filter-bar" id="filter-bar">
    <button class="filter-btn active" data-filter="all">全部</button>
    <button class="filter-btn" data-filter="model">模型</button>
    <button class="filter-btn" data-filter="tool">工具</button>
    <button class="filter-btn" data-filter="app">應用</button>
    <button class="filter-btn" data-filter="open">開源</button>
    <button class="filter-btn" data-filter="agent">智能體</button>
    <button class="filter-btn" data-filter="infra">基礎建設</button>
    <button class="filter-btn" data-filter="research">研究</button>
    <button class="filter-btn" data-filter="policy">政策</button>
  </div>

  <div id="sections-container"></div>
</div>

<div class="footer">
  由 AI 自動收集與整理 · 資料來源：TechCrunch、MIT Review、HuggingFace、GitHub 及網路搜尋<br>
  報告生成時間：2026-03-31
</div>

<script>
const newsData = [
  {
    title: "GPT-5.4 正式發布：百萬 Token 上下文視窗與自主多步驟工作流程",
    summary: "OpenAI 發布 GPT-5.4，具備 100 萬 Token 上下文視窗，能自主執行多步驟工作流程，在模擬桌面生產力任務的 OSWorld-V 基準測試中取得 75% 的成績。推出 Standard、Thinking 和 Pro 三個版本。",
    tags: ["model"],
    link: "https://www.buildfastwithai.com/blogs/ai-models-march-2026-releases",
    source: "BuildFast AI"
  },
  {
    title: "Claude 4.6 Opus 登場：SWE-bench 75.6%，技術能力領先業界",
    summary: "Anthropic 推出 Claude 4.6 Opus，在 SWE-bench 取得 75.6% 的成績，支援 100 萬 Token 上下文視窗（測試版）和 128K 輸出，成為新的技術標竿。",
    tags: ["model"],
    link: "https://www.crescendo.ai/news/latest-ai-news-and-updates",
    source: "Crescendo AI"
  },
  {
    title: "Gemini 3.1 Ultra 發布：ARC-AGI-2 推理分數翻倍",
    summary: "Google 推出 Gemini 3.1 Pro 與 Ultra，具備原生多模態推理能力，ARC-AGI-2 分數達 77.1%，是前代的兩倍以上，且價格維持不變。Gemini 3 Deep Think 已向 Ultra 訂閱者開放。",
    tags: ["model"],
    link: "https://www.digitalapplied.com/blog/march-2026-ai-roundup-month-that-changed-everything",
    source: "Digital Applied"
  },
  {
    title: "Grok 4.20 發布：增強即時網路存取能力",
    summary: "xAI 推出 Grok 4.20，具備增強的即時網路搜尋功能，為三月發布的第四款前沿模型，標誌著 AI 模型競爭進入白熱化階段。",
    tags: ["model"],
    link: "https://www.buildfastwithai.com/blogs/ai-models-march-2026-releases",
    source: "BuildFast AI"
  },
  {
    title: "NVIDIA Agent Toolkit：企業級 AI 智能體開發平台",
    summary: "NVIDIA 在 GTC 2026 發布 Agent Toolkit 開放平台，用於開發具備推理、行動和完成複雜企業任務能力的自主 AI 智能體。NeMoCLAW 和 OpenCLAW 框架成為大會焦點。",
    tags: ["agent", "tool"],
    link: "https://www.crescendo.ai/news/latest-ai-news-and-updates",
    source: "Crescendo AI"
  },
  {
    title: "Apple Siri 全面 AI 升級：攜手 Google Gemini，具備螢幕感知能力",
    summary: "Apple 計劃在 iOS 26.4 中推出全面重新設計的 Siri，與 Google 合作使用 1.2 兆參數的 Gemini 模型，具備螢幕感知和跨應用整合能力，運行在 Apple Private Cloud Compute 上。",
    tags: ["app", "model"],
    link: "https://www.digitalapplied.com/blog/march-2026-ai-roundup-month-that-changed-everything",
    source: "Digital Applied"
  },
  {
    title: "Model Context Protocol 安裝量突破 9700 萬：從實驗標準到基礎建設",
    summary: "MCP（模型上下文協定）在 2026 年 3 月安裝量突破 9700 萬次，所有主要 AI 供應商現已提供 MCP 相容工具，標誌著 MCP 從實驗性標準正式轉型為 AI 智能體的基礎架構。",
    tags: ["infra", "agent"],
    link: "https://www.tldl.io/blog/ai-product-launches-march-2026",
    source: "TLDL"
  },
  {
    title: "NVIDIA 發布 Vera Rubin AI 旗艦平台",
    summary: "NVIDIA 在 CES 2026 正式發布代號「Vera Rubin」的最新旗艦 AI 平台，代表 AI 硬體基礎設施的重大升級。",
    tags: ["infra"],
    link: "https://www.ibm.com/think/news/ai-tech-trends-predictions-2026",
    source: "IBM Think"
  },
  {
    title: "美國各州加速 AI 立法：兒童安全、透明度與吹哨人保護",
    summary: "在聯邦國會陷入僵局之際，美國各州紛紛通過數十項 AI 相關法律，涵蓋兒童安全指引、技術透明度要求及吹哨人保護措施。",
    tags: ["policy"],
    link: "https://www.npr.org/2026/03/28/nx-s1-5755062/trump-wants-a-deadlocked-congress-to-move-on-ai-frustrated-states-say-they-already-have",
    source: "NPR"
  },
  {
    title: "AI 從炒作走向務實：小模型、邊緣裝置與工作流整合成主流",
    summary: "2026 年 AI 趨勢從追求更大模型轉向實際應用：部署適合場景的小型模型、將智慧嵌入實體設備、設計能無縫融入人類工作流程的系統。",
    tags: ["infra", "app"],
    link: "https://techcrunch.com/2026/01/02/in-2026-ai-will-move-from-hype-to-pragmatism/",
    source: "TechCrunch"
  }
];

const hfData = [
  {
    title: "中國開源模型在 HuggingFace 下載量超越美國",
    summary: "Qwen 和 DeepSeek 驅動衍生模型激增，中國開源模型在過去一年佔 Hub 下載量的 41%，正式超越美國模型。Hub 越來越由量化、微調和重新封裝的衍生模型驅動。",
    tags: ["model", "open"],
    link: "https://getaibook.com/news/hugging-face-reports-chinese-open-models-overtook-us-on-hub-as-qwen-and-deepseek/",
    source: "GetAIBook",
    downloads: "41% 全球下載份額",
    likes: ""
  },
  {
    title: "sentence-transformers/all-MiniLM-L6-v2",
    summary: "最受歡迎的句子嵌入模型，用於語意相似度計算，累計下載超過 2 億次，是 RAG 和搜尋應用的首選嵌入模型。",
    tags: ["model", "tool"],
    link: "https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2",
    source: "HuggingFace",
    downloads: "206M+",
    likes: "4,634"
  },
  {
    title: "Fish Audio S2：開源多語者文字轉語音系統",
    summary: "最新開源 TTS 系統，支援多說話者語音合成，是近期 HuggingFace 上的熱門研究論文之一。",
    tags: ["model", "open", "research"],
    link: "https://huggingface.co/papers/trending",
    source: "HuggingFace Papers",
    downloads: "熱門論文",
    likes: ""
  },
  {
    title: "GeoSR：增強視覺語言模型空間推理能力",
    summary: "近期熱門研究論文，提出增強視覺語言模型在空間推理任務上的能力，是多模態 AI 研究的重要進展。",
    tags: ["research", "model"],
    link: "https://huggingface.co/papers/trending",
    source: "HuggingFace Papers",
    downloads: "熱門論文",
    likes: ""
  },
  {
    title: "韓國三款模型同時登上 HuggingFace 趨勢榜",
    summary: "2026 年 2 月，來自韓國的三款 AI 模型同時進入 HuggingFace 趨勢排行，反映亞洲地區在開發具競爭力的本土 AI 模型方面的廣泛努力。",
    tags: ["model", "open"],
    link: "https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026",
    source: "HuggingFace Blog",
    downloads: "趨勢上升",
    likes: ""
  },
  {
    title: "Red Hat AI 驗證模型合集 - 2026 年 3 月",
    summary: "Red Hat 發布 2026 年 3 月最新的 AI 驗證模型合集，為企業提供經過安全與效能驗證的開源模型選擇。",
    tags: ["model", "open"],
    link: "https://huggingface.co/collections/RedHatAI/red-hat-ai-validated-models-march-2026",
    source: "HuggingFace",
    downloads: "企業驗證",
    likes: ""
  },
  {
    title: "文字轉影片模型在 HuggingFace 上蓬勃發展",
    summary: "文字轉影片生成技術在 2025-2026 年經歷重大轉型，從大型實驗室的專屬技術變為開發者可透過 HuggingFace 取用的開源工具。",
    tags: ["model", "tool", "open"],
    link: "https://dev.to/czmilo/2026-complete-guide-top-text-to-video-models-on-huggingface-49p2",
    source: "DEV Community",
    downloads: "快速成長",
    likes: ""
  }
];

const ghData = [
  {
    title: "OpenClaw - 個人 AI 助手（210K+ ⭐）",
    summary: "2026 年成長最快的開源專案，從 9,000 星飆升至超過 210,000 星。在本地設備運行的個人 AI 助手，可連接 WhatsApp、Telegram、Slack、Discord 等 50+ 整合服務。",
    tags: ["agent", "open", "app"],
    link: "https://github.com/topics/ai",
    source: "GitHub",
    stars: "210,000+",
    language: "TypeScript"
  },
  {
    title: "AutoGPT - 讓 AI 人人可用（183K ⭐）",
    summary: "致力於讓 AI 對每個人都可使用和構建的開放平台，提供自主 AI 代理工具，是 AI 智能體領域的先驅專案。",
    tags: ["agent", "open"],
    link: "https://github.com/Significant-Gravitas/AutoGPT",
    source: "GitHub",
    stars: "183,000",
    language: "Python"
  },
  {
    title: "Ollama - 本地 LLM 運行框架（165K+ ⭐）",
    summary: "輕量級框架，用 Go 語言編寫，讓使用者在自己的硬體上運行和管理大型語言模型，無需雲端服務。",
    tags: ["tool", "open"],
    link: "https://github.com/ollama/ollama",
    source: "GitHub",
    stars: "165,000+",
    language: "Go"
  },
  {
    title: "prompts.chat - ChatGPT 提示詞社群（155K ⭐）",
    summary: "前身為 Awesome ChatGPT Prompts，現為開源提示詞分享社群平台，支援自架部署以保障隱私。",
    tags: ["tool", "open"],
    link: "https://github.com/f/prompts.chat",
    source: "GitHub",
    stars: "155,225",
    language: "HTML"
  },
  {
    title: "ComfyUI - 模組化擴散模型 GUI（107K ⭐）",
    summary: "最強大的模組化擴散模型圖形介面、API 和後端，採用圖形/節點介面，是 AI 圖像生成的首選工具。",
    tags: ["tool", "open", "app"],
    link: "https://github.com/comfyanonymous/ComfyUI",
    source: "GitHub",
    stars: "107,000+",
    language: "Python"
  },
  {
    title: "LangChain - LLM 應用開發框架（100K+ ⭐）",
    summary: "近期突破 100,000 星，是 GitHub 歷史上成長最快的開發者工具之一，用於建構 LLM 驅動的應用程式。",
    tags: ["tool", "open", "agent"],
    link: "https://github.com/langchain-ai/langchain",
    source: "GitHub",
    stars: "100,000+",
    language: "Python"
  },
  {
    title: "LLMs-from-scratch - 從零實作 LLM（90K ⭐）",
    summary: "教你用 PyTorch 從零開始一步步實作類似 ChatGPT 的 LLM，是學習 LLM 原理的最佳教材。",
    tags: ["open", "research"],
    link: "https://github.com/rasbt/LLMs-from-scratch",
    source: "GitHub",
    stars: "89,625",
    language: "Jupyter Notebook"
  },
  {
    title: "Deep-Live-Cam - 即時換臉工具（87K ⭐）",
    summary: "即時臉部替換和一鍵影片 Deepfake 工具，只需一張圖片即可實現，在 AI 影像處理領域廣受歡迎。",
    tags: ["tool", "app"],
    link: "https://github.com/hacksider/Deep-Live-Cam",
    source: "GitHub",
    stars: "86,905",
    language: "Python"
  },
  {
    title: "OpenHands - AI 驅動開發平台（70K ⭐）",
    summary: "AI 驅動的軟體開發平台，支援 ChatGPT 和 Claude AI 整合，是 AI 輔助編程領域的重要工具。",
    tags: ["agent", "tool", "open"],
    link: "https://github.com/OpenHands/OpenHands",
    source: "GitHub",
    stars: "70,294",
    language: "Python"
  },
  {
    title: "n8n - AI 增強工作流程自動化平台",
    summary: "開源工作流程自動化平台，結合視覺化無程式碼介面和自訂程式碼的靈活性，現已加入原生 AI 功能。視覺化拖放介面成為設計 AI 智能體管線的首選方式。",
    tags: ["tool", "agent", "open"],
    link: "https://github.com/n8n-io/n8n",
    source: "GitHub",
    stars: "熱門趨勢",
    language: "TypeScript"
  }
];

const tagLabels = {
  model: '模型', tool: '工具', app: '應用', open: '開源',
  agent: '智能體', infra: '基礎建設', research: '研究', policy: '政策'
};

function renderTag(tag) {
  return \`<span class="tag tag-\${tag}">\${tagLabels[tag] || tag}</span>\`;
}

function renderCard(item, type) {
  const tagsHtml = item.tags.map(renderTag).join('');
  let metaHtml = '';
  if (type === 'hf') {
    metaHtml = \`<div class="card-meta">
      \${item.downloads ? \`<span>📥 \${item.downloads}</span>\` : ''}
      \${item.likes ? \`<span>❤️ \${item.likes}</span>\` : ''}
    </div>\`;
  } else if (type === 'gh') {
    metaHtml = \`<div class="card-meta">
      \${item.stars ? \`<span>⭐ \${item.stars}</span>\` : ''}
      \${item.language ? \`<span>💻 \${item.language}</span>\` : ''}
    </div>\`;
  } else {
    metaHtml = \`<div class="card-meta"><span>📰 \${item.source}</span></div>\`;
  }
  return \`<div class="card" data-tags="\${item.tags.join(',')}" onclick="this.classList.toggle('expanded')">
    <div class="card-top">
      <div class="card-title">\${item.title}</div>
      <a class="card-link" href="\${item.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">查看原文 →</a>
    </div>
    <div class="card-summary">\${item.summary}</div>
    <div class="card-tags">\${tagsHtml}</div>
    \${metaHtml}
  </div>\`;
}

function renderSection(id, icon, iconClass, title, items, type) {
  const cardsHtml = items.map(i => renderCard(i, type)).join('');
  return \`<div class="section" data-section="\${id}">
    <div class="section-header" onclick="toggleSection('\${id}')">
      <div class="section-icon \${iconClass}">\${icon}</div>
      <div class="section-title">\${title}</div>
      <div class="section-toggle" id="toggle-\${id}">▼</div>
    </div>
    <div class="section-body" id="body-\${id}">\${cardsHtml}</div>
  </div>\`;
}

function toggleSection(id) {
  const body = document.getElementById('body-' + id);
  const toggle = document.getElementById('toggle-' + id);
  body.classList.toggle('collapsed');
  toggle.classList.toggle('collapsed');
}

function init() {
  const container = document.getElementById('sections-container');
  container.innerHTML =
    renderSection('news', '📰', 'news', 'AI 新聞頭條', newsData, 'news') +
    renderSection('hf', '🤗', 'hf', 'HuggingFace 熱門模型與趨勢', hfData, 'hf') +
    renderSection('gh', '🐙', 'gh', 'GitHub 熱門 AI 專案', ghData, 'gh');

  document.getElementById('news-count').textContent = newsData.length;
  document.getElementById('hf-count').textContent = hfData.length;
  document.getElementById('gh-count').textContent = ghData.length;
  document.getElementById('total-count').textContent = newsData.length + hfData.length + ghData.length;

  // Filter functionality
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.card').forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          const tags = card.dataset.tags.split(',');
          card.style.display = tags.includes(filter) ? '' : 'none';
        }
      });
      // Show/hide sections based on visible cards
      document.querySelectorAll('.section').forEach(sec => {
        const visibleCards = sec.querySelectorAll('.card:not([style*="display: none"])');
        sec.style.display = visibleCards.length > 0 ? '' : 'none';
      });
    });
  });
}

init();
</script>
</body>
</html>`;
document.dispatchEvent(new CustomEvent("news-loaded", {detail:"2026-03-31"}));
