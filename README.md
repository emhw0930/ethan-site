# Meng-Han Ethan Wu — Personal Site

A light, editorial, hand-built portfolio. Plain HTML / CSS / JS — **no build step, no framework, no dependencies**. Fonts load from Google Fonts.

```
index.html    structure & content
styles.css    all styling (design tokens at top of file)
script.js     scroll reveals, Atlanta clock, small interactions
```

## Run locally
Any static server works. For example:

```bash
python3 -m http.server 4733
# open http://localhost:4733
```

## Deploy (pick one — all free)
- **GitHub Pages** — push these files to a repo, Settings → Pages → deploy from `main` / root.
- **Netlify / Vercel** — drag-and-drop the folder, or connect the repo. No build command, publish directory is `.`.
- **Cloudflare Pages** — same; framework preset "None".

## Customizing
- **Colors / fonts / spacing**: edit the `:root` variables at the top of `styles.css`. The single accent is `--accent`.
- **Content**: all text lives in `index.html` (projects in the `.projects` list, history in `.timeline`).
- **Links**: LinkedIn, email, and phone are in the `#contact` section. (No GitHub link is included — add one there if you want it.)

Design constraints honored throughout: no gradients, no emoji, no template look.
