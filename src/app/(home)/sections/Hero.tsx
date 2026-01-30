import heroData from '@/src/data/hero.json';
import { getHeroSrc } from '@/src/lib/heroSrc';
import { HeroVisual } from '@/src/ui/HeroVisual';

export const Hero = () => {
  const heroSrc = getHeroSrc();
  const { title, subtitle, cta } = heroData;

  return (
    <section className="h-[40vh] w-full">
      <HeroVisual src={heroSrc} title={title} subtitle={subtitle} cta={cta} />
    </section>
  );
};
