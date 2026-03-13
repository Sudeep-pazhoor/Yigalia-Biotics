import { products } from '../data/products';

export async function GET() {
  const baseUrl = 'https://yigaliabiotics.com';
  
  const pages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/products', changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' }
  ];
  
  const productPages = products.map(p => ({
    url: `/products/${p.id}`,
    changefreq: 'monthly',
    priority: '0.8'
  }));
  
  const allPages = [...pages, ...productPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.url.startsWith('/products/') ? `
    <image:image>
      <image:loc>${baseUrl}${products.find(p => `/products/${p.id}` === page.url)?.image}</image:loc>
      <image:title>${products.find(p => `/products/${p.id}` === page.url)?.name}</image:title>
      <image:caption>${products.find(p => `/products/${p.id}` === page.url)?.description}</image:caption>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
