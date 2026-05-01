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
  title: 'Rode Fitness Center | Transform Your Body in 90 Days',
  description:
    'Premium gym training programs for weight gain, weight loss, bodybuilding, Zumba, CrossFit, recovery, and ladies batches at Rode Fitness Center.',
  keywords: ['Rode Fitness Center', 'gym', 'fitness', 'weight loss', 'bodybuilding', 'CrossFit', 'Zumba'],
  openGraph: {
    title: 'Rode Fitness Center',
    description: 'Professional training. Real results. Start your 90-day transformation.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
