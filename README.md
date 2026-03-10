# Muhasabah Hub

Marketing website for Muhasabah Hub — Apps Built for the Muslim Journey.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Inter (via `next/font`)
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and deploy — no configuration needed

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx        # Sticky navigation bar
│   ├── Hero.tsx          # Hero section with phone mockups
│   ├── About.tsx         # About section with icon cards
│   ├── Apps.tsx          # App showcase cards
│   ├── Features.tsx      # Feature grid
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer
│   ├── ScrollReveal.tsx  # Scroll animation wrapper
│   ├── DecorativeStar.tsx
│   ├── GradientOrb.tsx
│   ├── PhoneMockup.tsx
│   └── SectionLabel.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```
