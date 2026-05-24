# lumen 个人主页 — 规格文档

> 版本 v1.2 · 2026-05-24 · 作者 Leon

---

## 目标与范围

**一句话：** 为 Leon 搭建一个长期承载个人品牌的中英双语门户站，向「想学 AI 编程的开发者 / AI 内容关注者 / 潜在合作方」清晰传达「AI 工程化实践者 + 课程讲师，10 年 Java 后端作为专业背书」的身份，并提供作品集、内容输出聚合、联系入口。

### 核心叙事
- Hero 一句话定位强调 AI 实践者 + 课程讲师身份，10 年 Java 后端作为背书出现
- 黄金路径：Hero → About → Projects → Writing → Contact
- 主 CTA：「联系我」，触发 mailto 或滚动到 Contact 区

### 不做清单
- ❌ 不展示当前在职公司
- ❌ 不做 Courses / Resume 下载 / Speaking / Newsletter 订阅 板块
- ❌ 不做后台管理面板（内容用 git 管理）
- ❌ 不做评论 / 留言 / 表单提交（避免后端、反垃圾、隐私合规黑洞）
- ❌ 不做本站内置博客（MDX），Writing 文章一律外链

> v1.1 修订：原「不做暗黑切换」已撤销，改为**双模式切换**，详见 AC10 与「主题切换」节。

---

## 验收场景（EARS）

| # | 场景 | 验收标准 |
|---|------|--------|
| AC1 | 首次访问性能 | When 访客打开首页，the 系统 shall 在 1.5s 内渲染完成 Hero 区（FCP < 1.5s，4G 网络） |
| AC2 | 主 CTA 转化 | When 访客点击 Hero 主 CTA「联系我」，the 系统 shall 触发 mailto:liangliang1259@gmail.com 或平滑滚动到 Contact 区 |
| AC3 | 作品浏览 | While 在 Projects 区，the 系统 shall 展示 4 个项目（energy-day / landr / clip-shot / speak-deck），每张卡片含名称 / 一句话 / tech tags / 截图或 GIF / 仓库链接（公开项目）或「私有项目」标签（私有项目）/ GitHub Star 数（仅公开项目） |
| AC4 | 内容同步 | When 公众号「AI 工作台」或小红书发新内容，the 系统 shall 在 24h 内通过 RSS 抓取并展示在 Writing 区最新位置；抓不到时显示「最近暂无更新」而非报错 |
| AC5 | 语言切换 | When 用户点击语言切换按钮，the 系统 shall 切换到对应语言版本，URL 反映语言（`/` vs `/en`），默认中文 |
| AC6 | 联系可达 | When 访客在 Contact 区，the 系统 shall 显示 email 与 GitHub 两个渠道，均可一键点击跳转 |
| AC7 | 移动端适配 | While 视口 < 768px，the 系统 shall 完整呈现所有板块，无横向滚动、无文字溢出 |
| AC8 | 数据观测 | When 任意访客访问页面，the 系统 shall 通过 Vercel Analytics 记录 PV / UV / 来源 / 路径 |
| AC9 | SEO 基础 | When 搜索引擎抓取，the 系统 shall 提供合理 title / description / OG image，中英双语各自正确 |
| AC10 | 主题切换 | When 用户点击主题切换按钮，the 系统 shall 在 dark / light 之间切换，且**无闪烁**（FOUC）；首次访问遵循 `prefers-color-scheme`；选择后通过 localStorage 持久化，跨页跨刷新保留 |

---

## 功能行为

### Hero
- 输入：无（首屏静态）
- 输出：
  - 一句话定位（AI 优先 + 工程背书叙事，文案待设计阶段细化）
  - 副标题（一行）
  - 主 CTA「联系我」按钮 → 触发 mailto 或滚动到 #contact
  - 语言切换按钮（右上角，中/EN）
- 异常：无

### About
- 输入：硬编码内容（git 维护）
- 输出：AI 优先 + 工程背书叙事
  - 第一段：当前定位（AI 工程化实践者 + 课程讲师）
  - 第二段：工程背景（10 年 Java 后端、4 年团队管理、千万级撮合 / 营销中台 / 交易网关架构）
  - 工作经历列表：滴滴 → OKX → 搜狐（**不展示当前在职公司**）
  - AI 实践与教育：Claude Code 工作流、AiCoding 实战课、AI 创变者训练营、公众号「AI 工作台」
- 异常：无

### Projects
- 输入：构建期从 `content/projects.json` 读取项目元数据，从 GitHub API 拉取公开项目的 star/fork 数（缓存到 JSON）
- 4 个项目固定列表：
  - **energy-day** （私有） · 截图 / GIF 由 Leon 提供或从本地仓库提取
  - **landr** （公开 · TypeScript） · landing page builder
  - **clip-shot** （私有 · Swift / macOS） · 剪贴板图片 → OSS → Markdown 链接
  - **speak-deck** （公开 · HTML / Claude Code） · 演讲工作流
- 卡片字段：name / one-liner / tech tags / 截图或 GIF / star（仅公开）/ 仓库链接（仅公开）或「私有项目」标签
- 异常：GitHub API 失败时使用上次缓存的 star 数，不阻塞构建

### Writing
- 输入：构建期 + 定时（每日）从 RSS 源拉取
  - 公众号「AI 工作台」→ WeRSS（或类似服务）
  - 小红书账号 → RSSHub
- 输出：最近 N（默认 6）条文章卡片，含标题 / 摘要 / 来源 tag / 发布时间 / 外链
- 异常：RSS 拉取失败时显示「最近暂无更新」，不阻塞页面渲染

### Contact
- 输入：硬编码
- 输出：
  - email：liangliang1259@gmail.com（点击触发 mailto）
  - GitHub：leonbuilds（点击跳转）
- 异常：无

---

## 技术约束

- **技术栈（v1.2 锁定方案 B · 标准生态）**：
  - **框架**：Next.js (App Router) + TypeScript
  - **样式**：Tailwind CSS v4（CSS 变量驱动 token，dark/light 两套）
  - **UI 组件**：shadcn/ui（按需 `npx shadcn add ...`，源码复制到本地 `components/ui/`，不引入 npm 包）
  - **主题**：`next-themes`（处理 FOUC、SSR、prefers-color-scheme、localStorage 一体）
  - **i18n**：`next-intl`（middleware 路由 + 服务端组件友好）
  - **图标**：`lucide-react`
  - **字体**：Inter（正文）+ Geist Mono（等宽）via `next/font`
- **i18n**：中英双语，默认中文，URL 反映语言（`/` / `/en`）；英文文案由 AI 翻译，Leon 校对
- **部署**：Vercel，先用默认子域名（如 `lumen-leon.vercel.app`），后续切换正式域名
- **数据观测**：Vercel Analytics
- **性能**：FCP < 1.5s，Lighthouse 性能分 ≥ 90
- **SEO**：完整 meta tags、sitemap.xml、robots.txt、双语 hreflang
- **可访问性**：基础 WCAG AA（语义化 HTML、颜色对比、键盘可访问）；两种模式都要满足对比度要求
- **响应式**：≥ 320px 视口完整可用

### 设计方向（v1.1 锁定）

- **设计方案**：方案 **C · AI Studio**（紫蓝粉渐变 + 大字号 Hero + 玻璃质感卡片 + Inter / Geist Mono）
- **参考 mock**：`mocks/mock-c-aistudio.html`（dark）、`mocks/mock-c-light.html`（light）
- **核心 token**：
  - 渐变 `linear-gradient(135deg, #a855f7, #3b82f6, #ec4899)` 用于：Hero 标题强调字、主 CTA 按钮、section label 装饰
  - Dark 底色 `#0a0a0f` · Light 底色 `#fafbfd`
  - 字体 Inter 400/500/600，等宽 Geist Mono
  - 圆角默认 16–18px（卡片）/ 999px（按钮、tag）
- **设计 token 必须以 CSS 变量定义**，dark/light 两套 token 通过根属性切换

### 主题切换（v1.1 新增）

- **支持模式**：dark / light 双模式，可由用户切换
- **默认行为**：首次访问读取 `prefers-color-scheme` 系统偏好；如系统暗色则 dark，否则 light
- **持久化**：用户选择后写入 localStorage（key 例如 `lumen-theme`），下次访问恢复
- **切换控件**：放在 nav 右上角，icon 按钮（dark 显示太阳、light 显示月亮）
- **无闪烁要求**：必须在 HTML `<head>` 内联脚本中提前应用 theme class，避免 FOUC（白屏闪一下变黑）
- **过渡动画**：切换时 `color`/`background` 加 150ms 平滑过渡

### RSS 抓取
- WeRSS / RSSHub 第三方实例，接受可能的不稳定
- 抓取通过 Vercel Cron（或 GitHub Actions）每日触发一次，写入静态 JSON
- 抓取失败不阻塞构建与渲染

### 资源管理
- 项目截图 / GIF 由 AI 从 `/Users/leon/Documents/code/ai-coding/{project}/` 本地源码 + Chrome 访问对应页面收集
- 私有仓库不暴露 GitHub 链接，但展示卡片与截图

---

## 任务拆解（实现顺序）

> 实际任务粒度待技术方案（检查点 ②）确定后由 cc-sdd 或内置降级方案拆解。本列表为粗粒度方向。

1. **工程脚手架**：Next.js + TS + Tailwind + i18n 初始化；CSS 变量 token 体系（dark/light 两套）
2. **基础布局**：根布局、导航、语言切换 + 主题切换、Footer；主题无闪烁内联脚本
3. **Hero + About**（中文版）
4. **Projects**：组件 + 内容 JSON + GitHub star 拉取脚本
5. **Writing**：RSS 抓取脚本 + Cron + 渲染组件
6. **Contact**：mailto + GitHub 链接
7. **英文版**：AI 翻译 + Leon 校对
8. **SEO + Analytics**：meta、sitemap、Vercel Analytics 接入
9. **性能优化 + 上线**：Lighthouse 调优、Vercel 部署

---

## 假设清单（已与用户确认）

1. WeRSS / RSSHub 可接受第三方依赖不稳定；抓不到时优雅降级
2. GitHub Star 数构建期拉一次，不做客户端实时
3. 域名上线后再买，先用 Vercel 子域名
4. 英文文案 AI 翻译，Leon 校对
5. 项目截图 / GIF / 描述资源由 AI 从本地代码 + Chrome 收集
6. clip-shot / energy-day 为私有，仅展示卡片，不暴露 GitHub 链接

---

## 变更记录

- 2026-05-24 v1.0 初始版本
- 2026-05-24 v1.1 锁定设计方案 C（AI Studio）；启用 dark/light 双模式切换（替换 v1.0 的"不做暗黑切换"）；新增 AC10 主题切换验收；新增「设计方向」「主题切换」两节技术约束；任务拆解合并设计选型步骤（已完成）
- 2026-05-24 v1.2 锁定技术方案 B（Next.js + shadcn/ui + next-themes + next-intl + lucide-react），技术约束节细化栈选型；准备进入编码阶段（建议新 session）
