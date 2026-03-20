# Portfolio — Next.js 15 + TypeScript + Tailwind CSS v4

A clean, dark-themed developer portfolio inspired by [bryllim.com](https://bryllim.com), built with the latest stack.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Syne (display) + DM Sans (body) + DM Mono (mono) via next/font/google

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Customization

### Update your info
Edit **`lib/data.ts`** — all content (name, bio, experience, projects, etc.) lives here.

### Add your photo
Replace the emoji avatar in `components/Hero.tsx` with a real `<Image>`:
```tsx
// In Hero.tsx, replace the emoji div with:
<Image src="/avatar.jpg" alt="Your Name" fill className="object-cover" />
```
Then add your photo as `public/avatar.jpg`.

### Add gallery images
Add images to `public/gallery/` and update `components/Gallery.tsx` to use `<Image>` tags.

### Change accent color
Edit `app/globals.css` → `@theme`:
```css
--color-accent: #e8ff5a;   /* Yellow-green (default) */
--color-accent-2: #5affd1; /* Teal (default) */
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind v4
│   ├── projects/page.tsx   # All projects
│   ├── tech-stack/page.tsx # Full tech stack
│   └── certifications/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Recommendations.tsx
│   ├── Gallery.tsx
│   ├── Footer.tsx
│   └── Divider.tsx
├── lib/
│   └── data.ts             # ← Edit your content here
└── public/
    └── gallery/            # ← Add your gallery images here
```

## Deployment

Deploy to Vercel in one click:

```bash
npx vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com).
