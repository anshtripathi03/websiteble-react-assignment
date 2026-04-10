import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import { 
  SkeletonHero, 
  SkeletonTestimonials, 
  SkeletonNavbar 
} from './components/ui/Skeleton';

// Lazy load sections for better performance
const Hero = lazy(() => simulateLoading(() => import('./sections/Hero')));
const Intro = lazy(() => simulateLoading(() => import('./sections/Intro')));
const Progress = lazy(() => simulateLoading(() => import('./sections/Progress')));
const Services = lazy(() => simulateLoading(() => import('./sections/Services')));
const Testimonials = lazy(() => simulateLoading(() => import('./sections/Testimonials')));
const Newsletter = lazy(() => simulateLoading(() => import('./sections/Newsletter')));
const Footer = lazy(() => simulateLoading(() => import('./sections/Footer')));

/**
 * Utility to simulate network delay for demonstration purposes (skeletons)
 */
function simulateLoading<T>(importFn: () => Promise<T>, delay = 800): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(importFn());
    }, delay);
  });
}

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SkeletonNavbar />;

  return (
    <div className="min-h-screen bg-white selection:bg-accent-mint selection:text-primary overflow-x-hidden">
      <Suspense fallback={<div className="h-20 bg-white" />}>
        <Navbar />
      </Suspense>

      <main className="relative">
        <Suspense fallback={<SkeletonHero />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div className="section-padding max-w-base"><div className="aspect-square max-w-[500px] ml-auto skeleton-shimmer rounded-full" /></div>}>
          <Intro />
        </Suspense>

        <Suspense fallback={<div className="section-padding"><div className="max-w-base aspect-square skeleton-shimmer rounded-full" /></div>}>
          <Progress />
        </Suspense>

        <Suspense fallback={<div className="section-padding max-w-base space-y-12"><div className="h-40 w-full mb-20 skeleton-shimmer rounded-3xl" />{[1,2,3].map(i => <div key={i} className="h-24 skeleton-shimmer border-b border-border" />)}</div>}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="section-padding"><SkeletonTestimonials /></div>}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="section-padding min-h-[400px] bg-accent-mint skeleton-shimmer" />}>
          <div className="bg-accent-mint">
            <Newsletter />
            <Footer />
          </div>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
