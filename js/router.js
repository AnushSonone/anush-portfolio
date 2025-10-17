/**
 * Simple hash-based router for vanilla JS
 * Routes: #/, #/about, #/projects, #/writing, #/contact
 */

const router = {
  routes: {
    '/': '/pages/home.html',
    '/projects': '/pages/projects.html',
    '/writing': '/pages/writing.html',
    '/contact': '/pages/contact.html'
  },
  
  cache: new Map(),
  
  titles: {
    '/': 'Anush Sonone',
    '/projects': 'Projects - Anush Sonone',
    '/writing': 'Writing - Anush Sonone',
    '/contact': 'Contact - Anush Sonone'
  },

  canonicals: {
    '/': 'https://anush.wiki',
    '/projects': 'https://anush.wiki/#/projects',
    '/writing': 'https://anush.wiki/#/writing',
    '/contact': 'https://anush.wiki/#/contact'
  },

  /**
   * Load and render a route
   */
  async loadRoute(path) {
    const app = document.getElementById('app');
    
    // Normalize path
    if (!path || path === '' || path === '#') {
      path = '/';
    }
    
    // Check if route exists
    if (!this.routes[path]) {
      this.render404();
      return;
    }
    
    try {
      // Check cache first
      let html;
      if (this.cache.has(path)) {
        html = this.cache.get(path);
      } else {
        const response = await fetch(this.routes[path]);
        if (!response.ok) throw new Error('Page not found');
        html = await response.text();
        this.cache.set(path, html);
      }
      
      // Update content
      app.innerHTML = html;
      
      // Update document title
      document.title = this.titles[path] || 'Anush Sonone';
      
      // Update canonical URL
      this.updateCanonical(path);
      
      // Update active nav link
      this.updateActiveLink(path);
      
      // Scroll to top
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.error('Error loading route:', error);
      this.render404();
    }
  },

  /**
   * Render 404 page
   */
  render404() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p><a href="#/" class="btn">Go Home</a></p>
      </div>
    `;
    document.title = '404 - Anush Sonone';
    window.scrollTo(0, 0);
  },

  /**
   * Update canonical URL
   */
  updateCanonical(path) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = this.canonicals[path] || 'https://anush.wiki';
  },

  /**
   * Update active navigation link
   */
  updateActiveLink(path) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const linkRoute = link.getAttribute('data-route');
      if (linkRoute === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  /**
   * Initialize router
   */
  init() {
    // Handle hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1); // Remove #
      this.loadRoute(hash || '/');
    });

    // Handle initial load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.slice(1);
      this.loadRoute(hash || '/');
    });
  }
};

// Initialize router
router.init();

