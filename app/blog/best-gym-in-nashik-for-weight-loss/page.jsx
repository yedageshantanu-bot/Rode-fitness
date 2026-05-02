import Link from 'next/link';

export const metadata = {
  title: 'Best Gym in Nashik for Weight Loss',
  description:
    'Looking for the best gym in Nashik for weight loss? Rode Fitness Center Nashik offers training, accountability, cardio, strength workouts, and coaching in Govind Nagar.',
  alternates: {
    canonical: '/blog/best-gym-in-nashik-for-weight-loss'
  },
  openGraph: {
    title: 'Best Gym in Nashik for Weight Loss',
    description:
      'Rode Fitness Center Nashik helps members lose weight with structured workouts, coaching, Zumba, CrossFit, and personal training.',
    url: 'https://rode-fitness.vercel.app/blog/best-gym-in-nashik-for-weight-loss',
    type: 'article'
  }
};

export default function WeightLossBlogPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Best Gym in Nashik for Weight Loss',
    description:
      'A local guide for choosing a weight loss gym in Nashik, with Rode Fitness Center Nashik in Govind Nagar.',
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
    mainEntityOfPage: 'https://rode-fitness.vercel.app/blog/best-gym-in-nashik-for-weight-loss'
  };

  return (
    <main className="min-h-screen bg-ink px-4 py-20 text-bone sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-bold text-gold">Back to Rode Fitness Center</Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.28em] text-gold">Weight Loss Gym Nashik</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Best Gym in Nashik for Weight Loss
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          If you are searching for the best gym in Nashik for weight loss, Rode Fitness Center Nashik gives you a practical mix of strength training, cardio, Zumba, CrossFit-style conditioning, and trainer guidance in Govind Nagar.
        </p>

        <section className="mt-12 space-y-6 text-base leading-8 text-white/68">
          <h2 className="font-display text-3xl font-extrabold text-white">Why weight loss needs structure</h2>
          <p>
            Weight loss becomes easier when your workouts are consistent, trackable, and supported by coaches. Rode Fitness Center Nashik helps members train with clear routines instead of random exercises. This is useful for beginners, busy professionals, and anyone looking for a gym in Govind Nagar Nashik with friendly support.
          </p>
          <p>
            At Rode Fitness Center, members can combine resistance training, conditioning, Zumba, and recovery support. The goal is not only to burn calories, but to build strength, confidence, and long-term fitness habits.
          </p>

          <h2 className="font-display text-3xl font-extrabold text-white">What makes Rode Fitness Center Nashik different?</h2>
          <p>
            Rode Fitness Center Nashik is located in Govind Nagar and offers 24-hour access, weight loss coaching, muscle gain programs, CrossFit, bodybuilding, and ladies batches. The gym is designed for people searching for the best gym near me, fitness center Nashik, or weight loss gym Nashik.
          </p>
        </section>

        <div className="mt-12 rounded-[2rem] bg-bone p-6 text-charcoal shadow-glow">
          <h2 className="font-display text-3xl font-extrabold">Ready to start?</h2>
          <p className="mt-3 text-sm leading-7 text-black/65">Join Rode Fitness Center Nashik and begin a structured 90-day transformation plan.</p>
          <a href="https://wa.me/919657882336?text=Hi%20Rode%20Fitness%20Center%2C%20I%20want%20to%20join." className="mt-5 inline-flex rounded-full bg-black px-6 py-3 text-sm font-extrabold text-white">
            Join on WhatsApp
          </a>
        </div>
      </article>
    </main>
  );
}
