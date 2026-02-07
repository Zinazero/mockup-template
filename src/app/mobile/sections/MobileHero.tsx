import { HeroVisual } from '@/src/ui/HeroVisual';

export const MobileHero = () => {
  return (
    <section className="h-[40vh] w-full relative flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center border-b-5 border-brand">
        <HeroVisual src="/mobile/vid.mp4" title="" overlayActive={false} />
      </div>
    </section>
  );
};
