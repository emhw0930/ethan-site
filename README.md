# Meng-Han Ethan Wu — Personal Site

A light, editorial portfolio built with **React + Vite + Tailwind CSS**.
Warm paper palette, Swiss grid, Fraunces / IBM Plex Mono type, single accent
color. No gradients, no emoji.

## Stack
- **React 18** + **Vite 5** (fast dev server, build to static files)
- **Tailwind CSS 3** — design tokens live in `tailwind.config.js`
- Custom CSS (grain, marquee, scroll-reveal motion) in `src/index.css`

## Structure
```
index.html              Vite entry (loads Google Fonts)
src/
  main.jsx              React root
  App.jsx               page composition + grain overlay
  index.css            Tailwind layers + custom utilities
  data.js              projects, timeline, skills, facts (edit content here)
  hooks/               useReveal (scroll-in), useClock (Atlanta time)
  components/          Header, Hero, Marquee, Work, About, Log, Contact, Footer
public/
  portrait.jpg         profile photo (see below)
.github/workflows/     GitHub Actions deploy to Pages
```

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## The profile photo
The site expects `public/portrait.jpg`. Replace the placeholder with your own
image (a 4:5-ish crop works best — it’s shown in the About section). The path is
resolved against Vite’s `base`, so no code change is needed.

## Deploy
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app
and publishes `dist/` to GitHub Pages at
**https://emhw0930.github.io/ethan-site/**. Pages must be set to
**Build and deployment → Source: GitHub Actions**.

## Customizing
- **Colors / fonts / spacing** — `tailwind.config.js` (`theme.extend`).
- **Content** — `src/data.js`.
- **Contact links** — `src/components/Contact.jsx`.
