# Stillpoint — Wellness Booking Template

A single-page booking site template for Reiki practitioners, meditation guides, and other 1:1 wellness services. No build step, no framework — open `index.html` and it works.

![theme](https://img.shields.io/badge/stack-HTML%2FCSS%2FJS-C9A467) ![license](https://img.shields.io/badge/license-MIT-9A9CA8)

## Features

- Fully config-driven — rebrand the entire site by editing `config.js`, no HTML/CSS knowledge required
- Signature animated "breathing circle" hero element
- Responsive down to mobile
- Ready for a Calendly / Cal.com booking embed
- Zero dependencies, zero build step — deploy anywhere static files are served

## Quick start

```bash
git clone https://github.com/YOUR-USERNAME/stillpoint-template.git
cd stillpoint-template
```

Then just open `index.html` in a browser, or serve it locally:

```bash
npx serve .
```

## Customizing

Open `config.js`. Everything on the page — brand name, colors, fonts, copy, pricing, testimonial, booking link, footer — is set there. You should not need to touch `index.html`, `style.css`, or `app.js` for a normal rebrand.

To go live with real bookings, paste a Calendly or Cal.com embed URL into `booking.embedUrl`.

## Deploying

Any static host works:

- **GitHub Pages** — Settings → Pages → deploy from `main` branch
- **Netlify / Vercel** — drag-and-drop the folder or connect the repo
- **Any web host** — upload the four files via FTP

## License

MIT — free to use, modify, and ship in commercial projects. See [LICENSE](LICENSE).

If you'd rather not touch code at all, a done-for-you **Pro version** (Stripe pre-wired, extra themes, email automation, 1:1 setup support) is available — link in the repo description.
