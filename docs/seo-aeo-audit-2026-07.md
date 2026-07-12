# SEO / AEO implementation note (2026-07-12)

## Official guidance applied

- Google treats optimization for AI Overviews and AI Mode as foundational SEO. There is no special AEO/GEO schema requirement.
  - https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - https://developers.google.com/search/docs/appearance/ai-features
- Helpful, original, people-first content is prioritized over automated pages made mainly for search traffic.
  - https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Important content must be crawlable, internally linked, visible as text, and supported by structured data that matches the page.
  - https://developers.google.com/search/docs/appearance
- FAQ rich results were deprecated on 2026-05-07. HowTo rich results were already retired. These types are not used as ranking shortcuts.
  - https://developers.google.com/search/updates
- `llms.txt` is retained for services that may consume it, but Google explicitly states that it neither helps nor harms Google Search visibility.
- IndexNow is used only to notify participating engines of recently changed high-priority URLs. XML sitemaps remain the complete URL inventory.
  - https://www.indexnow.org/documentation

## Repository controls

- `npm run audit:seo` rejects obsolete or page-mismatched root structured data.
- Article markup must include headline, description, image, visible update date, author, publisher, and main entity URL.
- Static pages and facilities retain canonical URLs, unique titles/descriptions, breadcrumb links, and sitemap `lastmod` values derived from Git history.
- `npm run indexnow:submit` submits only changed high-priority routes after a successful production deploy.

## Limits

No implementation can guarantee a ranking position, crawling, indexing, or inclusion in AI-generated answers. Search Console and Analytics must be used to measure actual impressions, clicks, index coverage, and engagement after deployment.
