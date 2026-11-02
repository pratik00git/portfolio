# Pratik Thakkar — Portfolio

Personal portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): bio, skills, experience, projects, education, achievements and social links. Edit it and the site updates.

- **GitHub link** — set `profile.github` to your GitHub profile URL.
- **Resume** — replace `public/Pratik-Thakkar-Resume.pdf` (keep the same filename).
- **Photo (optional)** — the hero card shows your initials. To use a photo, add `public/profile.jpg` and swap the initials block in `src/components/Hero.tsx` for a `next/image`.

## Project structure

```
src/
  app/            layout, page, global styles
  components/     Navbar, Hero, Sections (About → Contact, Footer), ui helpers
  data/profile.ts all portfolio content
public/           resume PDF
```

## Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. **Import to Vercel** — sign in at [vercel.com](https://vercel.com) with GitHub → *Add New… → Project* → pick the `portfolio` repo → *Deploy*. No settings needed (Next.js is auto-detected).
3. **Custom domain (optional)** — in Vercel: *Project → Settings → Domains → Add*, then add the DNS records Vercel shows at your domain registrar.

Every push to `main` redeploys automatically; pull requests get preview URLs.
