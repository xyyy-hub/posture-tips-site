# NeckHump.com SEO Implementation Brief (2025)

Purpose: A single, practical reference to implement, QA, and measure SEO on NeckHump.com. Aligned with Google Search guidance, Core Web Vitals, and health/YMYL content requirements. Designed for Next.js App Router.

Note: All URLs, canonicals, JSON-LD, sitemaps, and references MUST use `https://www.neckhump.com`.

---

## 1) Objectives & KPIs

- Organic discovery and coverage
  - Index Coverage (GSC): > 98% of sitemap URLs valid
  - Crawl Stats: Stable fetch time; no spikes from broken links
- Core Web Vitals (field data targets)
  - FCP < 1.2s, LCP < 2.5s, INP < 200ms, CLS < 0.10
- Content quality (YMYL health)
  - Clear authorship, reviewer credentials, last updated dates on all articles
  - References to high-quality sources (PubMed, guidelines)
- AEO (Answer Engine Optimization)
  - Short Answer blocks + comprehensive follow-ups
  - External citations and internal linking coverage per topic cluster

---

## 2) Canonical, Domain, and URL Consistency

- Single canonical host: `https://www.neckhump.com` (www enforced)
- Every page must set a canonical URL matching the final resolved URL
- JSON-LD `@id` and `url` must match canonical exactly
- HTTP → HTTPS, non-www → www, trailing slash consistency (Next.js default no trailing slash)
- Avoid duplicate paths and query-string variants. Use canonical and avoid indexing filter pages

Implementation (Next.js App Router):

1) `app/layout.js` or `app/layout.tsx` sets `metadataBase`:
   - `export const metadata = { metadataBase: new URL('https://www.neckhump.com') }`
2) Each `page.(js|tsx)` defines `alternates: { canonical: '/route' }` or uses `generateMetadata()` to compute it
3) Confirm `<link rel="canonical" href="https://www.neckhump.com/..." />` renders for all routes

QA:
- `grep -R "canonical" app/**` should equal count of pages in route inventory
- Manually spot-check 3–5 pages in rendered HTML

---

## 3) Sitemap, Robots, and Indexing Controls

Sitemap
- Full coverage required: every routable page in `app/**/page.{js,tsx}` must appear in `app/sitemap.js`
- Use absolute `https://www.neckhump.com/...` URLs
- Include `lastModified` for important content

Robots
- `public/robots.txt` must include `Sitemap: https://www.neckhump.com/sitemap.xml`
- Default allow; only disallow private/admin and tracking test pages
- Avoid blocking JS/CSS assets

Noindex/Index Controls
- 404 and utility pages: `robots` meta noindex
- UTM or filter variants: do not create indexable routes

Release Checklist
- Request indexing in GSC after large additions
- Validate sitemap fetch in GSC → Sitemaps and URL Inspection

---

## 4) Structured Data (JSON-LD) – Supported Features

Principles
- Use only features Google supports (and needed for eligibility): Organization, WebSite, Article, HowTo, FAQ, BreadcrumbList, Person, ImageObject, VideoObject
- All `url` fields must use `https://www.neckhump.com`
- Keep IDs stable: `"@id": "https://www.neckhump.com/#organization"`

Organization (site-wide, once)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.neckhump.com/#organization",
  "name": "NeckHump.com",
  "url": "https://www.neckhump.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.neckhump.com/logo.svg"
  }
}
```

WebSite (site-wide, once)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.neckhump.com/#website",
  "url": "https://www.neckhump.com",
  "name": "NeckHump.com",
  "publisher": { "@id": "https://www.neckhump.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.neckhump.com/search?q={query}",
    "query-input": "required name=query"
  }
}
```

BreadcrumbList (all articles)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Learn", "item": "https://www.neckhump.com/learn"},
    {"@type": "ListItem", "position": 2, "name": "Neck Hump Guide", "item": "https://www.neckhump.com/neck-hump-guide"}
  ]
}
```

Article (guides, comparisons) – ensure author, review, and date fields
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": "https://www.neckhump.com/neck-hump-guide",
  "headline": "Neck Hump Guide",
  "description": "Comprehensive guide to causes, exercises, products, and treatments.",
  "image": ["https://www.neckhump.com/og-image.svg"],
  "datePublished": "2025-01-15",
  "dateModified": "2025-10-11",
  "author": {"@type": "Person", "name": "Editorial Team"},
  "reviewedBy": {"@type": "Person", "name": "Dr. Sarah Johnson, PT, DPT"},
  "publisher": {"@id": "https://www.neckhump.com/#organization"}
}
```

HowTo (exercise pages)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Chin Tucks",
  "description": "Step-by-step neck exercise for forward head posture.",
  "totalTime": "PT5M",
  "step": [
    {"@type": "HowToStep", "name": "Start Position", "text": "Sit tall with neutral spine."},
    {"@type": "HowToStep", "name": "Movement", "text": "Gently retract chin straight back."}
  ]
}
```

FAQPage (only if genuine Q&A section exists)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Is chin tucks safe during pregnancy?", "acceptedAnswer": {"@type": "Answer", "text": "Consult your clinician; gentle versions may be appropriate."}}
  ]
}
```

VideoObject (if using embedded videos)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Wall Angels Tutorial",
  "description": "Demonstration of wall angels for posture.",
  "thumbnailUrl": ["https://www.neckhump.com/thumbnail.jpg"],
  "uploadDate": "2025-01-15",
  "contentUrl": "https://www.neckhump.com/videos/wall-angels.mp4",
  "embedUrl": "https://www.neckhump.com/videos/wall-angels"
}
```

Implementation Notes
- Inject via `<Script type="application/ld+json">` in Next.js page components
- For exercises, prefer `HowTo` over `Article` when primarily step-based
- FAQ rich results are limited; eligibility not guaranteed – still add when appropriate

---

## 5) Health/YMYL Content Standards (E‑E‑A‑T)

- Authorship and medical review
  - Show author and reviewer components on all health pages (`components/AuthorReviewer.js`)
  - Display credentials (e.g., PT, DPT) and link to profile
  - Show "Last updated" and review date
- Evidence and references
  - Reference high-quality studies; link to PubMed/official guidelines
  - Include a concise evidence summary and limitations
- Safety
  - Prominent medical disclaimer in footer
  - "When to see a clinician" section in relevant articles
- Transparency
  - Disclose affiliate relationships; use `rel="sponsored"` for affiliate links

---

## 6) Information Architecture, Internal Links, and Orphan Prevention

- Topic clusters
  - Core hubs: Neck hump guide, exercises library, products guidance, troubleshooting
  - Each hub links bi-directionally to relevant children and peers
- Internal links
  - Use descriptive anchors (e.g., "chin tucks exercise guide" not "click here")
  - Add 3–8 internal links per article to related content and hubs
- Orphan prevention workflow
  1) Route inventory: enumerate `app/**/page.{js,tsx}`
  2) Link extraction: search `href="/` and `href: '/` and `<Link href="/` patterns
  3) Diff links vs filesystem routes and vs `sitemap.js`
  4) Fix missing/broken links before deploy

---

## 7) Core Web Vitals Performance Playbook

Targets: FCP < 1.2s, LCP < 2.5s, INP < 200ms, CLS < 0.10

Foundations
- Use Server Components by default; limit client components
- Optimize images with `next/image` (explicit width/height, `priority` for LCP)
- Preload critical fonts via Next.js font optimization; avoid layout shift
- Defer non-critical scripts (`strategy="lazyOnload"`) and remove unused third-parties

INP (replaces FID)
- Avoid long tasks > 200ms; split work and schedule via `requestIdleCallback`
- Use CSS for animations; avoid JS-heavy event handlers
- Lazy-load non-critical interactive widgets below the fold

LCP
- Ensure first contentful image/text is optimized and preloaded
- Serve modern formats (AVIF/WebP); leverage CDN caching

CLS
- Always include width/height or aspect ratio for images and embeds
- Avoid dynamic content insertion above-the-fold; reserve space

Build/QA
- Lab: Lighthouse CI or `scripts/performance-check.js`
- Field: CrUX and GSC Core Web Vitals; regressions trigger fix before release

---

## 8) Content Standards for SEO & AEO

On-page structure
- One H1 per page; nested H2/H3 with stable `id` values (TOC reliability)
- Short Answer block at top; Key Takeaways list; detailed sections; FAQs
- Related questions and internal links at bottom; clear CTAs (non-commercial tone)

Metadata
- Titles: ~55–65 chars, primary question/topic first, brand optional
- Descriptions: ~150–160 chars, compel click with clear benefit; no keyword stuffing
- Open Graph: title, description, 1200×630 image

Images
- Descriptive file names, alt text focused on content function
- Compress aggressively; prefer vector where possible

AEO (LLM) considerations
- Provide distinct, quotable statements with concrete details
- Cover follow-up questions thoroughly (symptoms, causes, exercises, timelines, products, alternatives)
- Include evidence level and practical constraints (time, equipment)

---

## 9) Link Hygiene & External Signals

- Outbound
  - Link to high-quality sources; prefer primary references
  - Use `rel="sponsored"` for affiliate; `rel="ugc"` for community content
- Backlinks
  - Earn mentions from PT blogs, ergonomics experts, Reddit AMAs, and YouTube PT channels
  - Publish original research summaries or small data studies for natural links

---

## 10) Analytics, GSC, and Attribution

- Google Search Console
  - Verify property for `https://www.neckhump.com`
  - Submit sitemap; monitor Coverage, Enhancements, Core Web Vitals, and Manual Actions
- GA4
  - Track scroll depth, outbound clicks, and key engagement events
- AEO attribution
  - Add "How did you hear about us?" on conversions; track LLM mentions

---

## 11) Release QA Checklist (Every Deploy)

1) Canonicals present on all pages; all `www` and https
2) `sitemap.xml` covers all routes; fetchable in GSC
3) Robots allows important content; 404/utility pages noindex
4) JSON-LD valid for Organization, WebSite, and content types (Article/HowTo/FAQ)
5) Internal links: no broken/orphaned pages (diff links vs routes + sitemap)
6) Core Web Vitals lab check passes thresholds; no major regressions
7) Visual TOC anchors align with heading `id`s; no broken sidebar navigation
8) Medical reviewer, last updated, disclaimer visible on health pages

---

## 12) Implementation Notes for This Repo

- Use `components/HelpArticle.js` structure consistently (Short Answer, Key Takeaways, FAQs)
- Ensure `app/layout.js` sets `metadataBase` to `https://www.neckhump.com`
- Confirm `app/sitemap.js` outputs absolute `www` URLs for ALL pages (no omissions)
- Keep JSON-LD domains aligned with canonicals to avoid dual referring signals in GSC
- Follow Table of Contents rules: every nav item must match a heading `id`; apply `xl:ml-80` layout spacing when TOC is fixed
- Maintain neutral medical UI palette; avoid emojis in nav; keep disclaimers in footer

---

## 13) Roadmap Enhancements (Optional)

- Add automated route/link/sitemap diff script to CI
- Add Lighthouse CI for each PR with CWV budgets
- Build internal "Related questions" index to improve cross-linking density

---

If any requirement here conflicts with a new Google guideline, update this brief and annotate the change with date and link to source.


