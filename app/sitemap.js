export default function sitemap() {
  const baseUrl = 'https://www.posturetips.com';
  const currentDate = new Date().toISOString();

  // Start with homepage
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  return routes;
}

