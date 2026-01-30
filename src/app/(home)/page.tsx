import { LockedInBanner } from '@/src/layout/LockedInBanner';
import { cn } from '../../utils/cn';
import { Hero } from './sections/Hero';
import { Section1 } from './sections/Section1';
import { Section2 } from './sections/Section2';

export default function Home() {
  return (
    <main className={cn('min-h-screen  flex flex-col items-center', 'bg-white dark:bg-deep-dark')}>
      <Hero />

      <Section1 />

      <LockedInBanner />

      <Section2 />
    </main>
  );
}
