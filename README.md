# Suraj Ghodke — Portfolio (React + Vite)

A modern, animated portfolio built with **React** and **Vite**.

## Tech Stack
- React 18
- Vite 5
- Pure CSS (no CSS frameworks)
- Google Fonts: Syne, DM Sans, JetBrains Mono

## Features
- Dark theme with glassmorphism navbar
- Animated gradient orbs and grid background in Hero
- Scroll-triggered fade-up animations (IntersectionObserver)
- Interactive Skills tab switcher
- Responsive layout (mobile, tablet, desktop)
- Sticky navbar with blur on scroll

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/'
   ```
4. Run `npm run deploy`

## Customization

All content lives in `src/App.jsx`:
- `SKILLS` — categorized skill lists
- `PROJECTS` — project cards with tags and links
- `CERTS` — certification list with PDF links

Colors and fonts are in `src/App.css` via CSS variables at the `:root` level.
