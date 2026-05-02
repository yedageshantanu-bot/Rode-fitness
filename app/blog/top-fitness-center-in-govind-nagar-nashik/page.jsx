import Link from 'next/link';

export const metadata = {
  title: 'Top Fitness Center in Govind Nagar Nashik',
  description:
    'Rode Fitness Center is a top fitness center in Govind Nagar Nashik for 24-hour gym access, personal training, weight loss, muscle gain, Zumba, and CrossFit.',
  alternates: {
    canonical: '/blog/top-fitness-center-in-govind-nagar-nashik'
  },
  openGraph: {
    title: 'Top Fitness Center in Govind Nagar Nashik',
    description:
      'Discover Rode Fitness Center Nashik, a premium gym and fitness center in Govind Nagar.',
    url: 'https://rode-fitness.vercel.app/blog/top-fitness-center-in-govind-nagar-nashik',
    type: 'article'
  }
};

export default function GovindNagarBlogPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Top Fitness Center in Govind Nagar Nashik',
    description:
      'A local guide to Rode Fitness Center Nashik for people searching for a gym in Govind Nagar.',
    author: {
      '@type': 'Organization',
      name: 'Rode Fitness Center'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rode Fitness Center',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rode-fitness.vercel.app/logo.png'
      }
    },
    mainEntityOfPage: 'https://rode-fitness.vercel.app/blog/top-fitness-center-in-govind-nagar-nashik'
  };

  return (
    <main className="min-h-screen bg-ink px-4 py-20 text-bone sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-bold text-gold">Back to Rode Fitness Center</Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.28em] text-gold">Govind Nagar Gym</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Top Fitness Center in Govind Nagar Nashik
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Rode Fitness Center Nashik is a premium fitness center in Govind Nagar for members who want 24-hour gym access, proper trainer guidance, weight loss, muscle gain, bodybuilding, Zumba, CrossFit, and ladies batch options.
        </p>

        <section className="mt-12 space-y-6 text-base leading-8 text-white/68">
          <h2 className="font-display text-3xl font-extrabold text-white">A local gym for Govind Nagar Nashik</h2>
          <p>
            When people search for Gym in Govind Nagar Nashik or Rode Fitness Center Nashik, they usually want a nearby gym that feels clean, trustworthy, and easy to join. Rode Fitness Center focuses on practical coaching, flexible access, and clear programs for different fitness goals.
          </p>
          <p>
            The gym supports weight gain, weight loss, bodybuilding, Zumba, CrossFit, stretching, massage, and recovery support. This makes Rode Fitness Center Nashik a strong choice for members who want more than basic equipment access.
          </p>

          <h2 className="font-display text-3xl font-extrabold text-white">Why choose Rode Fitness Centre?</h2>
          <p>
            Rode Fitness Centre is positioned for local Nashik members who care about results and convenience. With an address in Govind Nagar Nashik and 24-hour gym access, it is built for students, working professionals, and serious fitness members.
          </p>
        </section>

        <div className="mt-12 rounded-[2rem] bg-bone p-6 text-charcoal shadow-glow">
          <h2 className="font-display text-3xl font-extrabold">Visit Rode Fitness Center Nashik</h2>
          <p className="mt-3 text-sm leading-7 text-black/65">Radha Vasudev Batavia Nagar, Govind Nagar, Nashik, Maharashtra 422101.</p>
          <a href="https://www.google.com/maps/place/Rode+fitness+center/@19.9825905,73.7736464,17z" className="mt-5 inline-flex rounded-full bg-black px-6 py-3 text-sm font-extrabold text-white">
            Get Directions
          </a>
        </div>
      </article>
    </main>
  );
}
