"""
每日 AI 新聞自動產生腳本
由 GitHub Actions 每天台灣時間 09:00 執行
使用 Claude API + 網路搜尋抓取真實新聞，更新 news/ai-news-data.js
"""

import json
import os
import re
from datetime import datetime, timezone, timedelta

import anthropic

TW_TZ = timezone(timedelta(hours=8))
TODAY = datetime.now(TW_TZ)
DATE_STR = TODAY.strftime("%Y-%m-%d")
YEAR = TODAY.strftime("%Y")
MONTH_EN = TODAY.strftime("%B")
WEEKDAYS = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
WEEKDAY = WEEKDAYS[TODAY.weekday()]

NEWS_DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "news", "ai-news-data.js")

PROMPT = f"""你是一位專業的 AI 科技新聞編輯，負責產出繁體中文的每日 AI 新聞報告。
今天是 {DATE_STR} {WEEKDAY}。

請根據你剛才搜尋到的最新資訊，整理出今日的 AI 新聞報告。

## 要求

### Claude 專區（claude）：5-7 則
搜尋並整理 Anthropic / Claude 相關最新消息，分為子分類：
- product（產品更新）
- devtool（開發者工具）
- tutorial（教學資源）
- ecosystem（生態系動態）

### AI 新聞頭條（news）：6-8 則
除了 Claude 以外的 AI 產業重要新聞（新模型、新工具、新應用、產業動態）。
Claude 相關新聞不要放在這裡。

### HuggingFace 熱門模型（hf）：5 則
目前 HuggingFace 上最熱門/值得關注的模型。

### GitHub 熱門 AI 專案（gh）：5 則
目前 GitHub 上最熱門的 AI 相關開源專案。

## 輸出格式

只輸出嚴格的 JSON，不要加 markdown code block 或其他文字：

{{
  "date": "{DATE_STR}",
  "weekday": "{WEEKDAY}",
  "stats": {{ "claude": N, "news": N, "hf": N, "gh": N }},
  "claude": [
    {{ "sub": "product|devtool|tutorial|ecosystem", "title": "標題（繁體中文）", "desc": "描述（繁體中文，80字內）", "url": "真實來源網址", "tags": ["claude", "tool|model|agent|open|app"] }}
  ],
  "news": [
    {{ "title": "標題", "desc": "描述", "url": "真實來源網址", "tags": ["model|tool|agent|app|open"] }}
  ],
  "hf": [
    {{ "name": "模型名稱", "author": "作者", "desc": "簡短描述", "downloads": "下載量", "likes": "讚數", "url": "https://huggingface.co/...", "tags": ["model", "open"] }}
  ],
  "gh": [
    {{ "name": "專案名稱", "repo": "owner/repo", "desc": "簡短描述", "stars": "星數", "forks": "fork數", "lang": "程式語言", "url": "https://github.com/...", "tags": ["agent|tool|app|open"] }}
  ]
}}

重要：
- stats 的數字要對應各區塊的實際則數
- 所有文字使用繁體中文
- url 必須是你從搜尋結果中取得的真實網址
- 可用的 tags：claude, tool, model, app, open, agent
"""


def generate_news():
    client = anthropic.Anthropic()

    # 使用 Claude API 的網路搜尋功能抓取真實新聞
    search_queries = [
        f"Claude Anthropic news {MONTH_EN} {YEAR}",
        f"Claude Code update {YEAR}",
        f"AI tools news {MONTH_EN} {YEAR}",
        f"AI model release {MONTH_EN} {YEAR}",
        f"HuggingFace trending models {YEAR}",
        f"GitHub trending AI repositories {YEAR}",
    ]

    # 先用搜尋工具收集資料，再請 Claude 整理
    messages = [
        {
            "role": "user",
            "content": f"請先搜尋以下關鍵字來收集今日（{DATE_STR}）最新的 AI 新聞資料，然後根據搜尋結果整理成報告。\n\n"
            + "搜尋關鍵字：\n"
            + "\n".join(f"- {q}" for q in search_queries)
            + "\n\n搜尋完成後，" + PROMPT,
        }
    ]

    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=8192,
        tools=[{"type": "web_search_20250305", "name": "web_search", "max_uses": 10}],
        messages=messages,
    )

    # 處理多輪工具呼叫（搜尋 -> 回應）
    while response.stop_reason == "tool_use":
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                tool_results.append(
                    {"type": "tool_result", "tool_use_id": block.id, "content": ""}
                )

        messages.append({"role": "assistant", "content": response.content})
        messages.append({"role": "user", "content": tool_results})

        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=8192,
            tools=[
                {"type": "web_search_20250305", "name": "web_search", "max_uses": 10}
            ],
            messages=messages,
        )

    # 從回應中提取 JSON
    text = ""
    for block in response.content:
        if hasattr(block, "text"):
            text += block.text

    text = text.strip()
    # Remove markdown code block if present
    text = re.sub(r"^```json?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)

    # Try to find JSON object in the text
    json_match = re.search(r"\{[\s\S]*\}", text)
    if json_match:
        text = json_match.group(0)

    return json.loads(text)


def update_data_file(new_day):
    # Read existing data
    existing = []
    if os.path.exists(NEWS_DATA_PATH):
        with open(NEWS_DATA_PATH, "r", encoding="utf-8") as f:
            content = f.read()
        match = re.search(r"const AI_NEWS_DATA = (\[[\s\S]*\]);", content)
        if match:
            existing = json.loads(match.group(1))

    # Remove if today already exists
    existing = [d for d in existing if d.get("date") != DATE_STR]

    # Prepend new day
    existing.insert(0, new_day)

    # Keep only 7 days
    existing = existing[:7]

    # Write back
    data_json = json.dumps(existing, ensure_ascii=False, indent=2)
    output = (
        "// AI \u5de5\u5177\u65e5\u5831 \u2014 \u6bcf\u65e5\u8cc7\u6599\u6a94"
        "\uff08\u7531\u6392\u7a0b\u81ea\u52d5\u66f4\u65b0\uff09\n"
        "// \u683c\u5f0f\uff1a\u6bcf\u500b\u7269\u4ef6\u4ee3\u8868\u4e00\u5929"
        "\uff0cnewest first\n"
        "// \u8d85\u904e 7 \u5929\u7684\u8cc7\u6599\u7531\u6392\u7a0b"
        "\u81ea\u52d5\u6e05\u9664\n"
        f"const AI_NEWS_DATA = {data_json};\n"
    )

    with open(NEWS_DATA_PATH, "w", encoding="utf-8") as f:
        f.write(output)

    print(f"Updated {NEWS_DATA_PATH} with {DATE_STR} data ({len(existing)} days total)")


if __name__ == "__main__":
    print(f"Generating AI news for {DATE_STR} ({WEEKDAY})...")
    new_day = generate_news()
    print(
        f"Generated: claude={len(new_day['claude'])}, "
        f"news={len(new_day['news'])}, "
        f"hf={len(new_day['hf'])}, "
        f"gh={len(new_day['gh'])}"
    )
    update_data_file(new_day)
    print("Done!")
