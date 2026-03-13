# Yigaia Biotics - Pharmaceutical Website

A modern, responsive pharmaceutical website built with Astro.js, featuring dark theme design, smooth animations, and comprehensive product showcase.

## 🚀 Features

- **Modern Dark Theme**: Professional dark UI with brand colors (Green: rgba(25, 167, 0), Red: rgba(189, 29, 5))
- **Fully Responsive**: Mobile-first design with hamburger menu navigation
- **Animated**: Smooth animations using GSAP and Anime.js
- **SEO Optimized**: Meta tags, sitemap, robots.txt for search engine visibility
- **Product Showcase**: 20+ pharmaceutical products with detailed pages
- **Contact Form**: Interactive contact form with validation
- **Fast Performance**: Built with Astro for optimal loading speeds

## 📁 Project Structure

```
/
├── public/
│   ├── Logo New.jpeg
│   ├── [Product Images].png
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── products.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── products.astro
│       ├── contact.astro
│       ├── sitemap.xml.ts
│       └── products/
│           └── [id].astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 🎨 Color Theme

- **Primary Green**: rgba(25, 167, 0, 1) - Main brand color
- **Primary Red**: rgba(189, 29, 5, 1) - Accent color
- **Background Dark**: rgba(14, 14, 14, 1) - Main background
- **Dark Secondary**: rgba(20, 20, 20, 1) - Secondary background
- **Dark Card**: rgba(25, 25, 25, 1) - Card backgrounds

## 📄 Pages

- **Home** (`/`) - Hero section, stats, about preview, featured products
- **About** (`/about`) - Company story, values, why choose us
- **Products** (`/products`) - All products with category filtering
- **Product Detail** (`/products/[id]`) - Individual product information
- **Contact** (`/contact`) - Contact form and business information

## 🔗 Social Links

- **Instagram**: https://www.instagram.com/yigaliabiotics?igsh=anpnbXplOG9hZHQ4
- **Email**: yigaliabiotics@gmail.com

## 📱 Responsive Design

- Desktop: Full navigation menu
- Tablet/Mobile: Hamburger menu with smooth animations
- All components are fully responsive

## 🎭 Animations

- GSAP ScrollTrigger for scroll-based animations
- Anime.js for hero section animations
- Smooth transitions and hover effects throughout

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Optimized images with lazy loading

## 📦 Dependencies

- **Astro**: ^5.17.1
- **React**: ^19.2.4
- **GSAP**: ^3.14.2
- **Anime.js**: ^4.3.6
- **Bootstrap**: ^5.3.8

## 🚀 Deployment

The site is ready to be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simply run `npm run build` and deploy the `dist` folder.

## 📝 License

© 2021-2026 Yigaia Biotics. All rights reserved.

## 🤝 Support

For support, email yigaliabiotics@gmail.com or visit our Instagram page.
