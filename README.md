# POCO Static Site

Conversion-focused static site for POCO, built with Next.js App Router and Tailwind CSS.

## Stack

- Next.js (App Router)
- Tailwind CSS
- MDX insights content
- Web3Forms intake
- Static export (`output: 'export'`)

## Run locally

```bash
npm install
npm run dev
```

## Required environment variables

Create `.env.local` with:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Build static output

```bash
npm run build
```

Static files are written to `out/`.
