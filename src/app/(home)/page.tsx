import { LockedInBanner } from '@/src/layout/LockedInBanner';
import { Hero } from './sections/Hero';
import { Section1 } from './sections/Section1';
import { Section2 } from './sections/Section2';

export default function Home() {
  return (
    <>
      <Hero />

      <Section1 />

      <LockedInBanner />

      <Section2 />
    </>
  );
}
