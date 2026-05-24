# CHANGELOG

## 2026-05-24 · v0.1 初始实现

### 完成
- [x] Next.js 16 + TS + Tailwind v4 + shadcn 脚手架
- [x] next-themes 主题切换（dark/light，SSR safe，遵循系统偏好 + localStorage）
- [x] next-intl i18n 路由（zh 默认，en 走 `/en`，as-needed prefix）
- [x] 设计 token 体系（CSS 变量 + Tailwind v4 `@theme inline` + 自定义 `@utility brand-grad`/`text-brand-grad`/`aurora`/`grid-bg`）
- [x] 基础布局：Nav（含主题/语言切换 + 联系 CTA）+ Footer
- [x] Hero 板块（pill + 渐变标题 + 双 CTA + 3 stats + aurora 漂移动画）
- [x] About 板块（3 role 卡片 + 时间线）
- [x] Projects 板块（4 项目 + GitHub stars via ISR 24h + private 标签处理）
- [x] Writing 板块（读 content/writing.json，公众号 / 小红书 source 标签）
- [x] Contact 板块（mailto + GitHub 渐变 CTA）
- [x] SEO：metadata、双语 hreflang、`sitemap.ts`、`robots.ts`、Open Graph
- [x] Vercel Analytics 接入

### 已知限制 / 后续待补
- [ ] **Writing RSS 自动同步未实现**：当前 `content/writing.json` 为手动 placeholder 数据；需后续补 `scripts/fetch-writing.mjs` + GitHub Actions cron（每日抓 WeRSS / RSSHub 写入 JSON 后自动 commit + Vercel 触发重部署）
- [ ] **英文文案为初版直译**：需 Leon 校对（messages/en.json）
- [ ] **项目截图 / GIF 未制作**：当前 Projects 卡片用渐变色块占位，需后续从本地各项目截图填充
- [ ] **OG image 未生成**：sitemap 已声明，但 `og:image` 还需做一张（可用 `@vercel/og` 动态生成）
- [ ] **域名未绑定**：上线后再买，先用 Vercel 子域名

### 警告状态（不阻塞）
- ⚠️ Next 16 提示 `middleware` 文件已重命名为 `proxy`：当前使用 `src/middleware.ts` 仍工作（向后兼容），等 next-intl 官方迁移文档明确后再改名

### Lighthouse 目标
- 性能 ≥ 90、首屏 FCP < 1.5s（SPEC AC1）
- 待 `pnpm build` + 部署后实测

### 任务覆盖度
- AC1 性能 / AC2 CTA / AC3 作品浏览 / AC5 语言切换 / AC6 联系 / AC7 移动端 / AC8 Analytics / AC9 SEO / AC10 主题切换 → ✅ 已实现
- AC4 内容同步 → ⚠️ 渲染已实现，自动抓取脚本待补
