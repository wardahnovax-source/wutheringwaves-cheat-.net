# Deploy wutheringwavescheat.net

Step-by-step guide to deploy the Wuthering Waves Cheat static site to **wutheringwavescheat.net** on Cloudflare Pages, configure DNS, and submit to Google Search Console.

## Prerequisites

- Node.js **≥ 22.12.0**
- Cloudflare account with access to **wutheringwavescheat.net** DNS
- Wrangler CLI (included as dev dependency): `npx wrangler login`

## 1. Build and validate locally

From the project root:

```bash
npm install
npm run generate:i18n
node scripts/generate-blog-posts.mjs
npm run build:validate
```

`build:validate` runs `astro build` then `scripts/validate-sitemaps.mjs`. All sitemap checks must pass before deploying.

Expected output: **556** indexable HTML pages (25 English marketing + 15 blog URLs + 21 locales × 25 pages Anti-Cheat).

## 2. Cloudflare Pages project

### Option A — Git-connected (recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select this repository.
3. Configure build settings:
   - **Project name:** `wuthering-wavesscheats` (existing) or create a new project
   - **Production branch:** `main` (or `master`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 22 (set via environment variable `NODE_VERSION=22` if needed)
4. Save and deploy. Cloudflare runs the build on Anti-Cheat push.

### Option B — Direct upload / Wrangler CLI

```bash
npm run build:validate
npm run pages:deploy
```

This runs `wrangler pages deploy dist --project-name=bestwuthering-wavescheats` (see `wrangler.toml`).

## 3. Custom domain and DNS

Add **wutheringwavescheat.net** as the primary custom domain on the Pages project.

### Apex (wutheringwavescheat.net)

In **Cloudflare DNS** for the zone:

| Type  | Name | Content              | Proxy |
|-------|------|----------------------|-------|
| CNAME | `@`  | `<pages-subdomain>.pages.dev` | Proxied (orange cloud) |

Cloudflare CNAME flattening handles apex records automatically.

### www → apex redirect

1. Add a DNS record for `www` pointing to the same Pages project (proxied CNAME or A record).
2. In **Rules** → **Redirect Rules** (or Bulk Redirects), create:
   - **Source:** `www.wutheringwavescheat.net/*`
   - **Target:** `https://wutheringwavescheat.net/${1}`
   - **Status:** 301

The deployed `functions/_middleware.js` also enforces apex canonical host, legacy domain redirects (`wutheringwavescheat.net`, `.net`, `.com`), and legacy path redirects.

### SSL / HTTPS

1. **SSL/TLS** → **Overview** → set mode to **Full (strict)**.
2. **Edge Certificates** → enable **Always Use HTTPS**.
3. After enabling, **Caching** → **Configuration** → **Purge Everything** once.

## 4. Post-deploy smoke test

Verify these URLs return **200** with correct content:

- `https://wutheringwavescheat.net/`
- `https://wutheringwavescheat.net/es/`
- `https://wutheringwavescheat.net/wuthering-waves-cheats/`
- `https://wutheringwavescheat.net/wuthering-waves-aimbot/`
- `https://wutheringwavescheat.net/sitemap.xml`
- `https://wutheringwavescheat.net/robots.txt`

Verify redirects:

- `http://wutheringwavescheat.net` → `https://wutheringwavescheat.net` (301)
- `https://www.wutheringwavescheat.net` → `https://wutheringwavescheat.net` (301)
- Legacy domains (e.g. `wutheringwavescheat.net`) → `https://wutheringwavescheat.net` (301)
- `/sitemap-index.xml` → `/sitemap.xml` (301)
- Legacy paths (e.g. `/fortnite-hacks/`) → Wuthering Waves equivalents (301)

## 5. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **Domain** → enter `wutheringwavescheat.net`.
3. Verify ownership via the **DNS TXT record** Cloudflare provides (add in Cloudflare DNS, wait for propagation, then confirm in GSC).
4. After verification, open **Sitemaps** and submit:
   ```
   https://wutheringwavescheat.net/sitemap.xml
   ```
   Remove any legacy submissions (`sitemap-index.xml`, old `wutheringwavescheat.net` URLs).
5. Use **URL Inspection** to request indexing for:
   - Homepage (`/`)
   - Pillar page (`/wuthering-waves-cheats/`)
   - Key landing pages (`/wuthering-waves-aimbot/`, `/wuthering-waves-esp/`, `/wuthering-waves-cheats-2026/`, etc.)
   - A sample of locale homepages (`/es/`, `/de/`, `/fr/`)
6. Monitor **Pages** (Coverage), **Core Web Vitals**, and **International targeting** (hreflang) over the following weeks.

## 6. Ongoing maintenance

| Task | Command / action |
|------|------------------|
| Regenerate i18n content | `npm run generate:i18n` (after editing `scripts/i18n-data/*`) |
| Regenerate blog posts | `node scripts/generate-blog-posts.mjs` |
| Full build + SEO validation | `npm run build:validate` |
| Refresh gallery images | `npm run fetch:images` then `npm run optimize:images` |
| Redeploy | Push to Git (auto) or `npm run pages:deploy` |

## Checklist

- [ ] `npm run build:validate` passes locally
- [ ] Cloudflare Pages project attached to this repo
- [ ] Custom domain `wutheringwavescheat.net` attached and active
- [ ] `www` redirects to apex
- [ ] Legacy domains 301 to `wutheringwavescheat.net`
- [ ] Always Use HTTPS enabled
- [ ] `robots.txt` and sitemaps serve from `https://wutheringwavescheat.net`
- [ ] Google Search Console domain verified
- [ ] `sitemap.xml` submitted in GSC
- [ ] Homepage and `/wuthering-waves-cheats/` requested for indexing
