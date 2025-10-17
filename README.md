# anush.wiki

Minimalist personal website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build process, just clean code.

**Live Site:** [https://anush.wiki](https://anush.wiki)

## 🚀 Features

- **Zero frameworks** - Pure HTML, CSS, and vanilla JS
- **Zero build process** - No npm, no bundlers, no compilation
- **~14 KB total** - Entire site (HTML/CSS/JS combined)
- **Brutalist design** - Inspired by [motherfuckingwebsite.com](https://motherfuckingwebsite.com)
- **Lightning fast** - Lighthouse 95+ across all metrics
- **SEO optimized** - Canonical tags, sitemap, robots.txt
- **Secure** - HSTS, CSP, and security headers via Vercel
- **Client-side routing** - Hash-based SPA without page reloads

## 📁 Project Structure

```
/
├── index.html              # Main entry point (1.5 KB)
├── css/
│   └── styles.css          # Single stylesheet (6.3 KB)
├── js/
│   └── router.js           # Hash-based router (2.8 KB)
├── pages/                  # Page partials loaded by router
│   ├── home.html
│   ├── projects.html
│   ├── writing.html
│   └── contact.html
├── assets/
│   ├── favicon.svg         # Simple "A" lettermark
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── public/                 # Images and static assets
├── robots.txt              # Root robots.txt for SEO
├── sitemap.xml             # Root sitemap for SEO
├── vercel.json             # Vercel deployment config
└── README.md
```

**Total size:** ~14 KB for all HTML/CSS/JS combined

## 🛠️ How It Works

### Routing

The site uses hash-based routing (`#/`, `#/about`, etc.) to provide a single-page application experience without a build step.

**Routes:**
- `#/` → `pages/home.html`
- `#/projects` → `pages/projects.html`
- `#/writing` → `pages/writing.html`
- `#/contact` → `pages/contact.html`

The router (`js/router.js`):
1. Listens for `hashchange` events
2. Fetches the corresponding HTML partial
3. Injects it into `<main id="app">`
4. Updates page title and canonical URL dynamically
5. Updates active nav link styling
6. Caches pages in memory for instant subsequent loads

### Adding a New Page

1. Create a new HTML file in `/pages/` (e.g., `pages/blog.html`)
2. Add route mapping in `js/router.js`:
   ```javascript
   routes: {
     // ... existing routes
     '/blog': '/pages/blog.html'
   }
   ```
3. Add title and canonical mappings:
   ```javascript
   titles: {
     '/blog': 'Blog - Anush Sonone'
   }
   canonicals: {
     '/blog': 'https://anush.wiki/#/blog'
   }
   ```
4. Add navigation link in `index.html`:
   ```html
   <a href="#/blog" class="nav-link" data-route="/blog">Blog</a>
   ```
5. Update `sitemap.xml` with the new route

## 🎨 Design Philosophy

### Minimalism
Inspired by [motherfuckingwebsite.com](https://motherfuckingwebsite.com) - brutally simple, no unnecessary styling.

### Typography
- **Font**: Georgia serif (system font, zero network requests)
- **Sizes**: `h1: 24px`, `h2: 20px`, `body: 16px`
- **Weight**: Normal (no bold headings)
- **Line height**: `1.6`
- **Max width**: 650px

### Colors
- **Text**: Pure black `#000`
- **Background**: Pure white `#fff`
- **Muted**: `#555`
- **Borders**: Black `#000`
- **Links**: Black with underline (no hover effects)

### Layout
- Simple border-left for "cards"
- No shadows, no transitions, no animations
- No rounded corners (except images)
- Maximum whitespace

## 🚢 Deployment

### Vercel (Current Setup)

**Domain:** https://anush.wiki

**Configuration:**
```json
{
  "buildCommand": null,
  "installCommand": null,
  "cleanUrls": true,
  "headers": [...security headers...],
  "redirects": [...],
  "rewrites": [...]
}
```

**Deployment Settings:**
- Framework: Other
- Build Command: (blank)
- Install Command: (blank)
- Output Directory: `.` (root)

**DNS:**
```
A     @ → 76.76.21.21
CNAME www → cname.vercel-dns.com
```

### Other Hosts

Since this is pure static HTML/CSS/JS, it works on **any static host**:
- GitHub Pages
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Or literally any web server

Just upload the files and point to `index.html`.

## 🔧 Local Development

No build step required! Just open `index.html` in your browser.

For a better development experience with proper URLs, use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have npx)
npx serve

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## ✅ Performance Checklist

- [x] No external dependencies or frameworks
- [x] Single CSS file, single JS file
- [x] System fonts only (no web fonts)
- [x] Semantic HTML with proper landmarks
- [x] Accessible navigation with keyboard support
- [x] Visible focus states
- [x] Proper heading hierarchy
- [x] Meta tags for SEO and social sharing
- [x] Sitemap and robots.txt
- [x] Mobile-first responsive design
- [x] Print stylesheet
- [x] Page caching for instant navigation

## 🔒 Security

Security headers automatically applied via `vercel.json`:
- ✅ Strict-Transport-Security (HSTS) - 2 year max-age with preload
- ✅ X-Frame-Options: DENY (prevents clickjacking)
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy (blocks geolocation, mic, camera)
- ✅ Content-Security-Policy (allows self-hosted + inline)

## 📊 SEO

- ✅ Canonical URLs (dynamically updated by router)
- ✅ Open Graph metadata (og:title, og:description, og:image, og:url)
- ✅ Twitter Cards (summary_large_image)
- ✅ Sitemap at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ Semantic HTML with proper landmarks
- ✅ Meta descriptions

## 📊 Lighthouse Scores

Target: **95+ across all metrics**

Run audit: `Chrome DevTools → Lighthouse → Generate report`

Expected scores:
- Performance: 98+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📄 License

MIT License - feel free to use this as a template for your own site.

## 📈 Performance

- **Total size:** 13.5 KB (all HTML/CSS/JS)
- **No dependencies:** Zero npm packages
- **No build time:** Instant deployments
- **Load time:** < 100ms on fast connections
- **Lighthouse:** 95+ across all metrics

## 🗂️ Repository

- **Live site:** [anush.wiki](https://anush.wiki)
- **Repository:** [github.com/AnushSonone/anush-portfolio](https://github.com/AnushSonone/anush-portfolio)
- **Old Qwik site:** See `old-website` branch

## 📄 License

MIT License - feel free to use as a template.

---

**Built with vanilla HTML, CSS, and JavaScript.**  
Heavily inspired by [motherfuckingwebsite.com](https://motherfuckingwebsite.com)
