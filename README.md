# Next.js Finance Starter (Education-first)

A production-ready starter for a beginner-friendly finance site: Next.js (App Router) + TypeScript + Tailwind, with
a provider-agnostic market data layer (free delayed), Redis caching, Prisma schema, and example stock page.

## Features
- Next.js 14 App Router, TypeScript, Tailwind
- Provider-agnostic **market data abstraction** (Alpha Vantage free/delayed by default)
- API route: `/api/quote?symbol=AAPL`
- Redis cache (Upstash) helper (optional)
- Example stock page: `/stocks/AAPL` (with simple chart iframe)
- Learn section with starter articles
- Prisma schema for users, watchlists, notes, articles (not wired to UI yet)
- Strong defaults: ESLint, strict TS, minimal UI kit

## Getting started
```bash
# 1) Install deps
pnpm i   # or npm i / yarn

# 2) Copy env and fill values
cp .env.example .env

# 3) (Optional) Start Postgres & run prisma
pnpm dlx prisma generate

# 4) Dev
pnpm dev
```

### Environment
- `ALPHA_VANTAGE_API_KEY` is required for quote API.
- `NEXT_PUBLIC_BASE_URL` is optional for production.

### Swap data providers
Implement the same interface in `src/lib/marketData.ts` and replace the fetch logic.

### Notes
- Auth.js magic link planned; wire when ready.
- Replace chart iframe with TradingView widget when ready.
- Add SEO/sitemap/newsletter per roadmap.
