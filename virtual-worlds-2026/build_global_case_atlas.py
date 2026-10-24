#!/usr/bin/env python3
"""Build a self-contained, source-linked reference atlas from the verified case JSON."""

from __future__ import annotations

import html
import json
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
OUT = ROOT / "dist" / "global-case-atlas.html"
SOURCES = (
    ("角色与叙事", ROOT / "research-data" / "characters.json"),
    ("空间与世界", ROOT / "research-data" / "spaces.json"),
    ("具身交互", ROOT / "research-data" / "embodied.json"),
)
LINK_LABELS = {
    "project": "项目官网", "paper": "论文", "repo": "源码仓库", "code": "源码",
    "demo": "演示", "official": "官方资料", "institution": "机构页面",
    "manual": "技术手册", "docs": "文档", "doi": "DOI", "pdf": "论文 PDF",
    "venue": "会议页面", "architecture": "系统架构", "dataset": "数据集",
    "platform": "平台", "prototype": "原型", "renderer": "渲染器",
    "setup": "部署说明", "license": "许可", "thesis": "学位论文",
    "artist_lab": "艺术家／实验室", "nasa": "NASA 页面",
    "related_tool": "相关工具", "related_code": "相关代码",
    "related_licensed_code": "相关开源工具", "predecessor_2023": "前作",
    "paper_2025": "2025 论文", "design_pattern": "设计模式",
}


def h(value: object) -> str:
    return html.escape(str(value or ""), quote=True)


def valid_url(value: object) -> bool:
    if not isinstance(value, str):
        return False
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def normalized(group: str, raw: dict) -> dict:
    links = raw.get("links") or raw.get("source_urls") or raw.get("sources") or {}
    links = [(key, url) for key, url in links.items() if valid_url(url)]
    if not links:
        raise ValueError(f"{raw['id']} has no primary-source URL")
    source_order = ("project", "paper", "doi", "official", "institution", "repo", "code", "demo")
    primary = next(((key, url) for key in source_order for k, url in links if key == k), links[0])
    if group == "角色与叙事":
        project_fit = raw["applicability"]
        method = raw["how"]
        why = raw["why_best"]
        minimum = raw["minimal_experiment"]
        institution = raw["institution"]
        theme = raw["category"]
        caution = raw["caution"]
        title = raw["name"]
    elif group == "空间与世界":
        project_fit = " / ".join(raw["fit"])
        method = raw["method"]
        why = raw["why"]
        minimum = raw["minimum_experiment"]
        institution = raw["institution"]
        theme = raw["axis"]
        caution = raw["limit"]
        title = raw["title"]
    else:
        project_fit = raw["pair_with"]
        method = raw["mechanism"]
        why = raw["design_contribution"]
        minimum = raw["minimal_experiment"]
        institution = raw["author"]
        theme = raw["track"]
        caution = raw["limitations"]
        title = raw["title"]
    status = raw["reuse_status"]
    if "可运行" in status or "可下载" in status:
        reuse_kind = "code"
    elif "概念参照" in status:
        reuse_kind = "concept"
    else:
        reuse_kind = "method"
    return {
        "id": raw["id"], "title": title, "year": str(raw["year"]),
        "group": group, "theme": theme, "institution": institution,
        "why": why, "method": method, "project_fit": project_fit,
        "minimum": minimum, "caution": caution,
        "ai_role": raw["ai_role"], "reuse_status": status,
        "reuse_kind": reuse_kind, "links": links, "primary": primary,
        "license": raw.get("license") or raw.get("media_rights") or "",
    }


def case_card(case: dict) -> str:
    link_items = "".join(
        f'<a href="{h(url)}" target="_blank" rel="noopener noreferrer">{h(LINK_LABELS.get(key, key.replace("_", " ")))} ↗</a>'
        for key, url in case["links"]
    )
    primary_name = LINK_LABELS.get(case["primary"][0], "原项目")
    search_text = " ".join(str(case[key]) for key in (
        "id", "title", "year", "group", "theme", "institution", "why",
        "method", "project_fit", "minimum", "ai_role", "reuse_status"
    )).casefold()
    return f'''<article class="case" id="{h(case['id'])}" data-group="{h(case['group'])}" data-reuse="{h(case['reuse_kind'])}" data-search="{h(search_text)}">
      <div class="case-top"><span class="case-id">{h(case['id'])} <i>/</i> {h(case['group'])}</span><span class="reference">研究索引 · 未站内复刻</span></div>
      <div class="case-theme">{h(case['theme'])}</div>
      <h3>{h(case['title'])}</h3>
      <div class="case-credit">{h(case['year'])} <span>·</span> {h(case['institution'])}</div>
      <p class="case-why">{h(case['why'])}</p>
      <div class="case-divider"></div>
      <p class="case-label">与你的项目连接 / CAI'S PRACTICE</p><p class="case-fit">{h(case['project_fit'])}</p>
      <div class="experiment"><span>可做的最小实验 / TEST 01</span><p>{h(case['minimum'])}</p></div>
      <div class="case-status"><div><span>AI 在原案例中的角色</span><b>{h(case['ai_role'])}</b></div><div><span>复用程度</span><b>{h(case['reuse_status'])}</b></div></div>
      <details><summary>机制与使用边界 <span>＋</span></summary><div class="details-inner"><p><strong>如何实现</strong>{h(case['method'])}</p><p><strong>注意</strong>{h(case['caution'])}</p>{f'<p><strong>版权／许可</strong>{h(case["license"])}</p>' if case['license'] else ''}<div class="source-links">{link_items}</div></div></details>
      <a class="source-primary" href="{h(case['primary'][1])}" target="_blank" rel="noopener noreferrer"><span>查看{h(primary_name)}</span><span aria-hidden="true">↗</span></a>
    </article>'''


def build() -> None:
    cases = []
    for group, source in SOURCES:
        loaded = json.loads(source.read_text(encoding="utf-8"))
        entries = loaded if isinstance(loaded, list) else loaded["cases"]
        cases.extend(normalized(group, raw) for raw in entries)
    assert len(cases) == 46, f"Expected 46 cases, got {len(cases)}"
    assert len({case["id"] for case in cases}) == len(cases), "Duplicate case ID"
    cards = "\n".join(case_card(case) for case in cases)
    counts = {group: sum(case["group"] == group for case in cases) for group, _ in SOURCES}
    page = PAGE.replace("<!-- CASES -->", cards)
    page = page.replace("__COUNT__", str(len(cases)))
    for label, count in counts.items():
        page = page.replace(f"__{label}__", str(count))
    OUT.write_text(page, encoding="utf-8")
    print(f"Built {OUT} ({len(cases)} verified case records)")


PAGE = r'''<!doctype html>
<html lang="zh-Hans"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="虚拟何为：角色叙事、空间世界、具身交互的全球研究案例索引。46 个原项目出处与蔡智鑫项目对应的最小实验。">
<meta name="theme-color" content="#08090b"><link rel="icon" href="data:,">
<title>全球案例索引 / 虚拟何为 · 蔡智鑫</title>
<style>
:root{color-scheme:dark;--bg:#08090b;--panel:#101115;--line:#34353a;--ink:#f4f1ef;--muted:#a9a9b1;--red:#ff304a;--red-soft:#ff6678;--font:Inter,"Noto Sans SC","PingFang SC",system-ui,sans-serif}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--font)}button,input,select{font:inherit}button{cursor:pointer}a{color:inherit;text-decoration:none}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:2px solid var(--red);outline-offset:4px}
.shell{width:min(100% - 80px,1660px);margin-inline:auto}.mast{border-bottom:1px solid var(--line);min-height:74px;display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:12px;font-weight:650;letter-spacing:.11em;text-transform:uppercase}.mast .mark{color:var(--red);font-weight:900}.mast-links{display:flex;gap:22px;color:#bebec5}.mast-links a:hover,.source-links a:hover{color:var(--red)}
.hero{padding:78px 0 58px;border-bottom:1px solid var(--line);display:grid;grid-template-columns:minmax(0,1.5fr) minmax(280px,.5fr);gap:44px;align-items:end}.eyebrow,.micro{font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red)}.hero h1{font-size:clamp(70px,9.2vw,166px);line-height:.87;letter-spacing:-.082em;font-weight:850;margin:27px 0 29px}.hero h1 span{color:var(--red)}.hero .english{font-size:clamp(17px,2vw,31px);font-weight:750;letter-spacing:-.035em}.hero aside{border-left:1px solid var(--red);padding:0 0 0 25px;margin-bottom:7px}.hero aside p{font-size:18px;line-height:1.7;color:#d4d2d7;margin:0 0 20px}.hero aside small{font-size:12px;line-height:1.7;color:var(--muted)}
.notices{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);border:1px solid var(--line);margin:32px 0 48px}.notice{background:var(--panel);padding:22px 25px;min-height:105px}.notice strong{display:block;font-size:15px;margin-bottom:8px}.notice p{font-size:13px;line-height:1.65;color:var(--muted);margin:0}.notice strong em{color:var(--red);font-style:normal}.notice a{color:var(--red-soft);text-decoration:underline;text-underline-offset:3px}
.numbers{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:24px}.numbers b{font-size:clamp(52px,6vw,98px);color:var(--red);line-height:.8;letter-spacing:-.08em}.numbers span{font-size:12px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase}.numbers p{font-size:15px;color:var(--muted);margin:0 0 2px;text-align:right}
.controls{position:sticky;top:0;z-index:20;background:rgba(8,9,11,.96);backdrop-filter:blur(16px);border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:15px 0;display:grid;grid-template-columns:minmax(230px,1fr) auto minmax(170px,220px);align-items:center;gap:16px}.search-wrap{position:relative}.search-wrap::before{content:"⌕";position:absolute;left:15px;top:50%;transform:translateY(-54%);color:var(--red);font-size:26px;line-height:1}.search-wrap input{width:100%;min-height:47px;background:#15161a;color:var(--ink);border:1px solid #404149;border-radius:0;padding:0 16px 0 47px;outline:0}.search-wrap input::placeholder{color:#858590}.search-wrap input:focus{border-color:var(--red)}.tabs{display:flex;gap:5px;flex-wrap:wrap}.tabs button{background:none;border:1px solid transparent;color:var(--muted);min-height:47px;padding:0 13px;font-size:12px;font-weight:750;white-space:nowrap}.tabs button:hover{color:var(--ink)}.tabs button[aria-pressed="true"]{background:var(--red);color:#09090b}.tabs button small{opacity:.74;font-size:10px;margin-left:3px}.controls select{background:#15161a;color:var(--ink);border:1px solid #404149;border-radius:0;min-height:47px;padding:0 12px;max-width:100%}
.resultbar{display:flex;justify-content:space-between;align-items:center;gap:15px;margin:22px 0 16px;color:var(--muted);font-size:12px;letter-spacing:.08em}.resultbar b{color:var(--ink)}.resultbar a{color:var(--red-soft)}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;align-items:stretch}.case{background:var(--panel);border:1px solid #33343a;min-height:100%;display:flex;flex-direction:column;padding:25px 25px 0;scroll-margin-top:90px}.case:hover{border-color:#8c2937}.case[hidden]{display:none!important}.case-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;color:var(--muted);font-size:11px;letter-spacing:.07em}.case-id{font-weight:800;color:var(--red-soft)}.case-id i{font-style:normal;color:#56565f;padding:0 3px}.reference{font-size:10px;white-space:nowrap}.case-theme{font-size:11px;color:var(--red);font-weight:700;margin-top:34px;letter-spacing:.08em}.case h3{font-size:clamp(23px,2vw,33px);line-height:1.15;letter-spacing:-.045em;margin:10px 0 10px;overflow-wrap:anywhere}.case-credit{font-size:11px;color:#aaa9b0;line-height:1.5}.case-credit span{color:var(--red);padding:0 4px}.case-why{font-size:14px;line-height:1.7;color:#d1d0d5;min-height:72px;margin:22px 0}.case-divider{border-top:1px solid #383940}.case-label{font-size:10px;color:var(--red-soft);font-weight:800;letter-spacing:.11em;margin:20px 0 7px}.case-fit{font-size:13px;line-height:1.6;margin:0 0 22px;color:#dfdde2}.experiment{background:#1b1115;border-left:3px solid var(--red);padding:15px 16px;margin-top:auto}.experiment span{font-size:10px;color:var(--red-soft);font-weight:800;letter-spacing:.09em}.experiment p{font-size:13px;line-height:1.68;margin:7px 0 0;color:#ece5e7}.case-status{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin:20px 0}.case-status span{display:block;font-size:10px;color:#91919a;margin-bottom:5px}.case-status b{font-size:11px;font-weight:600;line-height:1.45;color:#d0cfd4}.case details{border-top:1px solid #383940}.case summary{list-style:none;font-size:12px;color:#c2c0c7;font-weight:700;padding:17px 0;cursor:pointer;display:flex;justify-content:space-between}.case summary::-webkit-details-marker{display:none}.case details[open] summary span{transform:rotate(45deg)}.case summary span{font-size:20px;color:var(--red);line-height:.6;transition:transform .15s}.details-inner{padding:0 0 18px}.details-inner p{font-size:12px;line-height:1.65;color:#bcbac2;margin:0 0 12px}.details-inner strong{display:block;color:#f1eff3;margin-bottom:3px}.source-links{display:flex;gap:8px;flex-wrap:wrap;margin-top:13px}.source-links a{font-size:11px;padding:7px 9px;border:1px solid #51515b;color:#d0ced6}.source-primary{margin:0 -25px;background:#211115;border-top:1px solid #71303b;display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:12px;font-weight:750;padding:14px 25px}.source-primary span:last-child{color:var(--red);font-size:18px}.source-primary:hover{background:#3b151d}
.empty{border:1px solid var(--line);padding:60px 25px;text-align:center;color:var(--muted);font-size:15px}.empty[hidden]{display:none}.empty b{color:var(--ink);display:block;font-size:26px;margin-bottom:8px}.endnote{margin:80px 0 0;padding:25px 0 35px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:start;gap:30px;color:var(--muted);font-size:12px;line-height:1.7}.endnote a{color:var(--red-soft)}
@media(max-width:1250px){.controls{grid-template-columns:1fr 1fr}.tabs{grid-column:1/-1;grid-row:2}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:720px){.shell{width:min(100% - 34px,1660px)}.mast{min-height:60px}.mast-links{gap:12px}.mast-links a:nth-child(2){display:none}.hero{padding:54px 0 42px;grid-template-columns:1fr;gap:34px}.hero h1{font-size:clamp(63px,16vw,100px)}.hero aside p{font-size:16px}.notices{grid-template-columns:1fr;margin:24px 0 42px}.numbers{align-items:end}.numbers p{max-width:175px}.controls{grid-template-columns:1fr;gap:9px;padding:10px 0}.tabs{grid-row:auto;grid-column:auto;overflow-x:auto;flex-wrap:nowrap;padding-bottom:2px}.tabs button{min-height:40px;padding:0 9px}.controls select{min-height:42px}.grid{grid-template-columns:1fr}.case{padding:22px 21px 0}.source-primary{margin:0 -21px;padding:14px 21px}.resultbar{margin-top:18px}.endnote{display:block}.endnote a{display:inline-block;margin-top:7px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
</style></head><body>
<div class="shell"><nav class="mast" aria-label="站点导航"><a class="mark" href="index.html">蔡智鑫 / KINGKAZMAX</a><div class="mast-links"><a href="index.html#talk">汇报 ↗</a><a href="research.html">研究库 ↗</a><a href="portal.html">可玩世界 ↗</a></div></nav>
<header class="hero"><div><div class="eyebrow">VIRTUAL WHAT? / RESEARCH ATLAS / 2026</div><h1>世界<br><span>如何</span>生成？</h1><div class="english">46 global references · 3 modes of making</div></div><aside><p>角色如何延续记忆，空间如何承载经验，身体如何改写世界？</p><small>从全球院校、实验室与艺术实践中提炼方法，再转化为蔡智鑫原创项目可做的最小实验。每一条都链接原项目；本站未复刻这些案例。</small></aside></header>
<section class="notices" aria-label="使用说明"><div class="notice"><strong><em>01 /</em> 研究索引 · 未站内复刻</strong><p>以下 46 项是带原始出处的参考案例。卡片中的“最小实验”是为蔡智鑫的作品提出的下一步方案，不代表作品已实现，也不代表获得原作素材或源码的再发布许可。</p></div><div class="notice"><strong><em>02 /</em> 可玩的站内项目</strong><p>要进入蔡智鑫自己的游戏、角色、空间和交互原型，请前往 <a href="portal.html">世界入口 ↗</a>。研究案例与站内作品按此分开呈现。</p></div></section>
<div class="numbers"><div><b>__COUNT__</b><span> / verified source cases</span></div><p>角色、空间与身体<br>三种进入虚拟的路径</p></div>
<div class="controls" role="search" aria-label="案例筛选"><label class="search-wrap"><span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">搜索案例</span><input id="search" type="search" autocomplete="off" placeholder="搜索项目、学校、方法或蔡智鑫作品…"></label><div class="tabs" role="group" aria-label="按主题筛选"><button type="button" data-filter="全部" aria-pressed="true">全部 <small>__COUNT__</small></button><button type="button" data-filter="角色与叙事" aria-pressed="false">角色与叙事 <small>__角色与叙事__</small></button><button type="button" data-filter="空间与世界" aria-pressed="false">空间与世界 <small>__空间与世界__</small></button><button type="button" data-filter="具身交互" aria-pressed="false">具身交互 <small>__具身交互__</small></button></div><select id="reuse" aria-label="按复用程度筛选"><option value="all">全部复用程度</option><option value="code">可运行代码／文件</option><option value="method">公开研究方法</option><option value="concept">仅概念参照</option></select></div>
<div class="resultbar"><div id="result" aria-live="polite"><b>__COUNT__</b> 项案例</div><a href="research.html">进入完整研究库 ↗</a></div><main class="grid" id="grid" aria-label="全球案例索引"><!-- CASES --></main><div id="empty" class="empty" hidden><b>没有匹配的案例。</b>试试更短的关键词，或切换主题与复用程度。</div>
<footer class="endnote"><div>© 2026 蔡智鑫 / KINGKAZMAX<br>原项目、论文、影像与代码归各自创作者及机构。请打开原链接核对使用条件。</div><div><a href="index.html">返回《虚拟何为》 ↗</a><br><a href="portal.html">进入可玩的站内项目 ↗</a></div></footer></div>
<script>
(()=>{const search=document.getElementById('search'),reuse=document.getElementById('reuse'),tabs=[...document.querySelectorAll('.tabs button')],cards=[...document.querySelectorAll('.case')],result=document.getElementById('result'),empty=document.getElementById('empty');let group='全部';function apply(){const q=search.value.trim().toLocaleLowerCase(),kind=reuse.value;let count=0;for(const card of cards){const match=(group==='全部'||card.dataset.group===group)&&(kind==='all'||card.dataset.reuse===kind)&&(!q||card.dataset.search.includes(q));card.hidden=!match;if(match)count++}result.innerHTML=`<b>${count}</b> / ${cards.length} 项案例`;empty.hidden=count!==0}tabs.forEach(button=>button.addEventListener('click',()=>{group=button.dataset.filter;tabs.forEach(tab=>tab.setAttribute('aria-pressed',String(tab===button)));apply()}));search.addEventListener('input',apply);reuse.addEventListener('change',apply);const hash=new URLSearchParams(location.search);if(hash.has('q'))search.value=hash.get('q')||'';apply()})();
</script></body></html>'''


if __name__ == "__main__":
    build()
