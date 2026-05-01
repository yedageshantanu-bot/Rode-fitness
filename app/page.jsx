'use client';

import dynamic from 'next/dynamic';

const HomeClient = dynamic(() => import('../components/HomeClient'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-ink" />
});

export default function Page() {
  return <HomeClient />;
}
