# Anush Sonone - Portfolio

A minimalistic, fast, and accessible personal website built with pure HTML, CSS, and vanilla JavaScript.

## 🚀 Features

- **Zero frameworks** - Pure HTML, CSS, and vanilla JS
- **Lightning fast** - Under 100 KB total page weight (without images)
- **Accessible** - Built with semantic HTML and ARIA best practices
- **SEO optimized** - Meta tags, sitemap, and robots.txt included
- **Mobile first** - Responsive design that works on all devices
- **Client-side routing** - Hash-based routing without page reloads

## 📁 Project Structure

```
/
├── index.html          # Main shell with header, nav, footer
├── pages/              # Page partials loaded by router
│   ├── home.html
│   ├── about.html
│   ├── projects.html
│   ├── writing.html
│   └── contact.html
├── css/
│   └── styles.css      # Single stylesheet (~150 lines)
├── js/
│   └── router.js       # Client-side hash router (~80 lines)
├── assets/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume.pdf
└── README.md
```

## 🛠️ How It Works

### Routing

The site uses hash-based routing (`#/`, `#/about`, etc.) to provide a single-page application experience without a build step.

**Routes:**
- `#/` or `#` → `pages/home.html`
- `#/about` → `pages/about.html`
- `#/projects` → `pages/projects.html`
- `#/writing` → `pages/writing.html`
- `#/contact` → `pages/contact.html`

The router (`js/router.js`):
1. Listens for `hashchange` events
2. Fetches the corresponding HTML partial
3. Injects it into `<main id="app">`
4. Updates the page title and active nav link
5. Caches pages in memory for instant subsequent loads

### Adding a New Page

1. Create a new HTML file in `/pages/` (e.g., `pages/blog.html`)
2. Add route mapping in `js/router.js`:
   ```javascript
   routes: {
     // ... existing routes
     '/blog': '/pages/blog.html'
   }
   ```
3. Add title mapping:
   ```javascript
   titles: {
     // ... existing titles
     '/blog': 'Blog - Anush Sonone'
   }
   ```
4. Add navigation link in `index.html`:
   ```html
   <a href="#/blog" class="nav-link" data-route="/blog">Blog</a>
   ```
5. Update `assets/sitemap.xml` with the new route

## 🎨 Design System

### Colors
- Text: `#111`
- Background: `#fff`
- Muted: `#666`
- Borders: `#e5e7eb`
- Accent: `#0ea5e9`

### Typography
- Font: System stack (`-apple-system, Segoe UI, Roboto, etc.`)
- Sizes: `h1: 28px`, `h2: 20px`, `body: 16px`
- Line height: `1.6`

### Spacing Scale
- `4px, 8px, 12px, 16px, 24px, 32px`

### Components
- `.btn` - Primary button
- `.btn-secondary` - Secondary button with outline
- `.card` - Content card with hover effect
- `.tag` - Small colored tag for tech stacks

## 🚢 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to `main` branch, `/` (root)
4. Your site will be live at `https://username.github.io/repo-name`

**Note:** If deploying to a subdirectory, update all paths in `index.html` and `js/router.js` to include the base path.

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site will be live at `https://your-project.vercel.app`

**Or use the Vercel dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with default settings

### Netlify

1. Drag and drop your project folder to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository
3. Deploy with default settings

**All static hosts work** - This is just HTML/CSS/JS, so it works anywhere.

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

## 📝 TODOs

Current placeholders to fill in:

- [ ] Add actual email address in `pages/contact.html`
- [ ] Update social media links in `pages/contact.html`
- [ ] Add headshot image in `pages/about.html` (optional)
- [ ] Add actual blog post links in `pages/writing.html`
- [ ] Update domain in `index.html` meta tags
- [ ] Add OG image (`og-image.png`) in `/assets/`

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

## 🤝 Contact

Anush Sonone
- Email: [Add your email]
- LinkedIn: [linkedin.com/in/anushsonone](https://linkedin.com/in/anushsonone)
- GitHub: [github.com/anushsonone](https://github.com/anushsonone)

---

Built with ❤️ using HTML, CSS, and JavaScript.
