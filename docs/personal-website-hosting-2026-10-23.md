# 个人网站、域名与服务器：本项目的选择

核查日期：2026-10-23。金额为美元，未包含可能的税费。具体域名是否可注册及结账价格须以注册商实时查询为准；以下示例不代表已经购买。

## 建站方式

个人作品集、博客、项目介绍通常适合静态网站：HTML/CSS/JavaScript 或 Astro、Hugo 等生成器，代码保存在 GitHub，托管平台自动部署。已有 KINGKAZMAX 网站属于这一类。另一条路线是 WordPress 或 Wix、Squarespace 等建站平台，适合偏好后台编辑的人；迁移已有交互编辑器需要额外工作。本项目继续现有代码即可。

网站地址（域名）、放置网页的服务（托管）、执行生图调用的后端是三件独立的事。浏览器本地编辑不需要服务器；公开 AI 生图需要服务端保护密钥、验证用户请求并管理费用。免费网页托管不包含免费生图额度。

## 方案对照

| 方案 | 托管费用 | 地址 | 用于本项目 |
| --- | --- | --- | --- |
| 保留 GitHub Pages | 公开仓库可免费使用 | 现有 github.io 地址免费 | 继续承载作品集和本地编辑器 |
| GitHub Pages + 自有域名 | 托管免费，域名按年续费 | 自选 .com 等 | 最少迁移、个人品牌入口 |
| Cloudflare Pages + Worker | 网页与后端都有免费配额，超额按计划处理 | pages.dev / workers.dev 或自有域名 | AI 后端可以独立部署，无须迁移现有前端 |
| Vercel Hobby | 免费，限个人非商业用途 | vercel.app 或自有域名 | 适合个人项目；商业业务要核对付费计划 |
| 租用 VPS | 按服务器方案付费 | 默认 IP；域名单独买 | 适合需要长期进程或自管环境；当前功能不必先租 VPS |

GitHub Pages 可用于公开仓库，站点最大 1 GB，月带宽软限制 100 GB；不适合以交易或商业 SaaS 为主要用途的网站。[GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

Cloudflare Pages 免费计划有每月 500 次构建、每站最多 20,000 个文件、单文件 25 MiB 等限制。后端 Functions 使用 Workers 配额，不能把静态网页额度当成无限后端资源。[Pages 限制](https://developers.cloudflare.com/pages/platform/limits/)、[Workers 价格](https://developers.cloudflare.com/workers/platform/pricing/)

Vercel 明确将 Hobby 限定为个人非商业用途。[Hobby 官方说明](https://vercel.com/docs/plans/hobby)

## 怎么买个人域名

1. 先选品牌拼写，如 `kingkazmax.com`；它仅是候选名，此次没有确认可注册状态。优先简短、好拼写、长期愿意使用的名字。
2. 在 [Cloudflare Registrar](https://www.cloudflare.com/domains/) 或 [Porkbun](https://porkbun.com/products/domains) 搜索。比较首年价、续费价、转移价和是否属于溢价域名，而非只看促销价。
3. 注册自己的账户，完成联系信息和邮箱验证；确认一年的总价后付款。开启双重验证和自动续费。域名通常是按年注册使用权，持续保留需要续费。
4. 在网站托管后台添加 custom domain，再按该平台给出的 DNS 记录设置解析。不要只买域名却没有绑定网站。
5. 等待 DNS 与证书生效，启用 HTTPS，测试根域名与 www 跳转。

Cloudflare 宣称注册、转移和续费按注册局及 ICANN 成本定价，提供免费 DNS、SSL、DNSSEC 和 WHOIS 信息遮蔽。[官方域名说明](https://www.cloudflare.com/domains/)

此次查到 Porkbun 普通 `.com` 价格表为注册、续费、转移各 US$11.08；溢价域名、促销和税费可能不同。可把普通 `.com` 的年度预算先按约 US$12–20 预留，结账前再次核价。[实时价目表](https://porkbun.com/products/domains)

绑定 GitHub Pages：Repository → Settings → Pages → Custom domain，填入自己的域名；DNS 使用官方所列的 A/AAAA 或 CNAME，最后勾选 Enforce HTTPS。绑定 Cloudflare Pages：项目 → Custom domains → 添加域名，再按提示完成 DNS；根域名与子域名的配置方式不同。[GitHub 域名配置](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)、[Cloudflare 域名配置](https://developers.cloudflare.com/pages/configuration/custom-domains/)

## 怎么租个人服务器；有没有免费服务器

服务器通常是租云主机而非买实体机器。流程是注册云账户 → 选择靠近受众的区域 → 选 Linux 镜像和 CPU/内存/磁盘套餐 → 绑定 SSH 公钥 → 开通实例 → 配置应用、域名和 HTTPS。还要管理安全更新、备份及流量费用。对本项目，静态托管加一个 Worker 更省维护。

若确实需要 VPS，可从 [DigitalOcean 官方价目表](https://www.digitalocean.com/pricing/droplets) 比较 Basic 方案。价格依内存、区域、流量、备份等配置而变；小主机不能直接高效运行大型生图模型，通常仍是调用外部 AI 接口。

[Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/) 区分 US$300/30 天试用额度和 Always Free 服务。Always Free 有资格与资源限制，不能把试用金额当成永久免费机器保证，也不能保证某个区域即时有容量。

免费的常见网址是平台子域名，如 `xxx.github.io`、`xxx.pages.dev`，不是自己独占注册的 `.com`。部分服务赠送首年域名，续费另算；长期个人品牌建议自己持有注册商账户。

## 推荐的落地顺序

现在保留 GitHub Pages，暂不买服务器。AI 生图先用独立 Cloudflare Worker：前端只保存公开 API 地址；密钥存 Worker Secrets；Turnstile 验证与每 IP 请求限流放后端。图片服务费用与 Worker 托管分开核算。等品牌名称确定再买域名，可将 `www` 指向网站、`api` 指向后端。

如果未来要收费、登录、保存用户作品或大量调用生图，再增加账户系统、每日预算和数据库，并重新选择适合商业服务的托管计划。本次没有代购域名、创建付费资源或承诺永久免费服务。
