"""
合併 news/today.json 到 news/ai-news-data.js

流程：
1. 讀取 news/today.json（Claude CLI 寫入）
2. 讀取 news/ai-news-data.js，正則解析出 AI_NEWS_DATA 陣列
3. 若同日期已存在 → 覆蓋
4. 插到陣列最前（newest first）
5. 重寫檔案
6. git add / commit / push（若有 --push 旗標）
"""

import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TODAY_JSON = os.path.join(ROOT, "news", "today.json")
DATA_JS = os.path.join(ROOT, "news", "ai-news-data.js")


def load_today():
    with open(TODAY_JSON, "r", encoding="utf-8") as f:
        return json.load(f)


def load_existing():
    if not os.path.exists(DATA_JS):
        return []
    with open(DATA_JS, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"const AI_NEWS_DATA = (\[[\s\S]*\]);", content)
    if not m:
        raise RuntimeError("找不到 AI_NEWS_DATA 陣列")
    return json.loads(m.group(1))


def write_data(days):
    data_json = json.dumps(days, ensure_ascii=False, indent=2)
    output = (
        "// AI 工具日報 — 每日資料檔（由排程自動更新）\n"
        "// 格式：每個物件代表一天，newest first\n"
        "// 所有歷史資料均永久保留\n"
        f"const AI_NEWS_DATA = {data_json};\n"
    )
    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write(output)


def git_commit_push(date_str):
    cwd = ROOT
    subprocess.run(["git", "add", "news/ai-news-data.js"], cwd=cwd, check=True)
    result = subprocess.run(
        ["git", "diff", "--cached", "--quiet"], cwd=cwd
    )
    if result.returncode == 0:
        print("沒有變更可提交")
        return
    subprocess.run(
        ["git", "commit", "-m", f"chore: 每日 AI 新聞 {date_str}"],
        cwd=cwd, check=True,
    )
    subprocess.run(["git", "push"], cwd=cwd, check=True)
    print("已推送到 origin")


def main():
    push = "--push" in sys.argv

    today = load_today()
    date_str = today["date"]

    existing = load_existing()
    existing = [d for d in existing if d.get("date") != date_str]
    existing.insert(0, today)

    write_data(existing)
    print(f"已合併 {date_str}，共 {len(existing)} 天")

    if push:
        git_commit_push(date_str)


if __name__ == "__main__":
    main()
