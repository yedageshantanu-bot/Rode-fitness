export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://rode-fitness.vercel.app/sitemap.xml',
    host: 'https://rode-fitness.vercel.app'
  };
}
