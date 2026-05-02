export default function sitemap() {
  const baseUrl = 'https://rode-fitness.vercel.app';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/blog/best-gym-in-nashik-for-weight-loss`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/top-fitness-center-in-govind-nagar-nashik`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ];
}
