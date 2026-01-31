import { HeroVisual } from '../ui/HeroVisual';
import heroData from '@/src/data/hero.json';

type LocationPlaceholderProps = {
  name: string;
  heroSrc: string;
};

export const LocationPlaceholder = ({ name, heroSrc }: LocationPlaceholderProps) => {
  const { cta } = heroData;

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full h-[30vh]">
        <HeroVisual src={heroSrc} title={name} subtitle="(would contain higher-res image/video)" cta={cta} />
      </div>

      <div className="flex items-center flex-1">
        <span className="text-5xl">PER-LOCATION CONTENT</span>
      </div>
    </div>
  );
};
