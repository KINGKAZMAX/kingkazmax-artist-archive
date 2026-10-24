# 虚拟何为 / 蔡智鑫

AI 时代的角色、空间与世界建构。黑色与荧光红的交互汇报网站。

- 交互式世界装载首页与 33 页汇报：`dist/index.html`
- 全封面的交互世界入口：`dist/portal.html`
- 全球 58 个研究案例：`dist/research.html`
- 全球 46 个精选研究项目与可复用方法：`dist/global-case-atlas.html`
- Kimi、DeepSeek、Claude、GPT 同题交互对照：`dist/model-atlas.html`
- AI 相关开源游戏与世界索引：`dist/ai-open-source.html`
- 逐字稿：`dist/script.md`
- 本地包目录盘点：`dist/project-inventory.json`

运行：`python3 -m http.server 8798 --directory dist`
重建精选案例页：`python3 build_global_case_atlas.py`（资料位于 `research-data/`）。

线上：https://cai-virtual-worlds-2026.kingkazmax.chatgpt.site/

本机上海 AI 艺术黑客松项目「愛 AI 自由意志｜ASTROMATRIX」以浏览器归档形式纳入世界入口；四个宇宙展项可分别运行，展场手势追踪与多屏联动不在浏览器归档中。

第三方复现、卡带封面、引擎和游戏的权利归各自作者；见 dist/notices.html 及各项目内的许可。NPC 实例当前采用本地行为和预设对话，没有连接 LLM。

新增开源条目的上游、许可和个人改编范围见 `dist/notices.html`。全球案例索引中的项目是带出处的研究参考，未在站内复刻。
