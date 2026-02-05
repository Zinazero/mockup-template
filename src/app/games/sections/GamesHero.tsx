import { GaltHeader } from '@/src/ui/GaltHeader';
import { HeroVisual } from '@/src/ui/HeroVisual';

export const GamesHero = () => {
  return (
    <section className="h-[40vh] w-full relative flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <HeroVisual src="/locations/galt.png" title="" />

        <GaltHeader className="bg-black/70 absolute text-brand dark:text-white" />
      </div>
    </section>
  );
};
