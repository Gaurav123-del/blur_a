# blur — Landing Page

Premium invite-only landing page for **blur**, the anonymous campus social network.
Light theme matching the app's splash screen (white → light-blue with animated blue glow blobs).

## File structure

```
blur-web/
├── index.html          # Page markup
├── css/
│   └── styles.css      # All styles (light splash theme, glass cards, animations)
├── js/
│   └── main.js         # Reveal animations, counters, FAQ, waitlist, progress bar
├── assets/
│   └── logo.png        # blur wordmark (transparent)
└── README.md
```

> Note: the phone in the "Where campus talks" section is built in pure HTML/CSS
> (a device mockup), so there is no phone image file to manage.

## Run locally

Open `index.html`, or serve the folder so paths resolve:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
# or: npx serve
```

## Deploy

Drop the whole `blur-web/` folder on any static host:
- Netlify — drag onto netlify.com/drop
- Vercel — run `vercel` in this folder
- GitHub Pages — push & enable Pages

## Sections
Hero (invite-only + access bar) · App showcase (CSS phone) · Confessions ·
Categories · Privacy shield · Stats · Join (waitlist) · FAQ · Final CTA · Footer

## Notes
- Waitlist form is front-end only — wire `#joinBtn` in `js/main.js` to your backend.
- Fonts: Inter + Fraunces (Google Fonts).
- Brand blue `#1A3FE8`. Fully responsive, respects `prefers-reduced-motion`.
# blur_a
