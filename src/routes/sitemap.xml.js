export async function get(req, res) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">	  	  
  <!-- www.check-domains.com sitemap generator -->
  
  <url>
     <loc>https://www.2022word.com/</loc>
     <lastmod>2021-10-02T05:36:12+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>1.0000</priority>
  </url>
  <url>
     <loc>https://www.2022word.com/about</loc>
     <lastmod>2021-10-02T05:36:12+00:00</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8000</priority>
  </url>
  </urlset>`
  res.setHeader('Content-Type', 'application/xml');
  res.end(xml);
}