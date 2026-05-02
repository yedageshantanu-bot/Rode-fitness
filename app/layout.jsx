import { Bebas_Neue, Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://rode-fitness.vercel.app'),
  title: {
    default: 'Rode Fitness Center Nashik | Best Gym in Govind Nagar | 24 Hours Gym',
    template: '%s | Rode Fitness Center Nashik'
  },
  description:
    'Rode Fitness Center in Nashik offers 24-hour gym access, weight loss, muscle gain, Zumba, CrossFit, and personal training. Located in Govind Nagar Nashik. Join today!',
  keywords: [
    'Rode Fitness Center Nashik',
    'Gym in Nashik',
    'Govind Nagar gym',
    'best gym near me',
    'fitness center Nashik',
    'bodybuilding Nashik',
    'weight loss gym Nashik',
    'Rode Fitness Centre'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Rode Fitness Center Nashik | Best Gym in Govind Nagar',
    description:
      '24-hour gym access, weight loss, muscle gain, Zumba, CrossFit, and personal training at Rode Fitness Center in Govind Nagar Nashik.',
    url: 'https://rode-fitness.vercel.app/',
    siteName: 'Rode Fitness Center',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Rode Fitness Center Nashik logo'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rode Fitness Center Nashik | Best Gym in Govind Nagar',
    description:
      'Join Rode Fitness Center Nashik for 24-hour access, weight loss, muscle gain, Zumba, CrossFit, and personal training.',
    images: ['/logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Gym',
    name: 'Rode Fitness Center',
    image: 'https://rode-fitness.vercel.app/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Radha Vasudev Batavia Nagar, Govind Nagar',
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: '422101',
      addressCountry: 'IN'
    },
    telephone: '+91 9657882336',
    openingHours: 'Mo-Su 00:00-23:59',
    url: 'https://rode-fitness.vercel.app/',
    priceRange: '₹₹',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.9825905228872,
      longitude: 73.77364637517421
    },
    areaServed: ['Govind Nagar', 'Nashik', 'Maharashtra'],
    sameAs: ['https://www.google.com/maps/place/Rode+fitness+center/']
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${bebas.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
