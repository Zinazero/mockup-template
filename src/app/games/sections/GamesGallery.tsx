import { UnderlineHeader } from '@/src/components/UnderlineHeader';
import gamesData from '@/src/data/games.json';
import Image from 'next/image';

export const GamesGallery = () => {
  return (
    <div className="w-full flex flex-col items-center p-10 gap-10">
      <UnderlineHeader level={3} text="Games" svgClass="mb-2" />

      <div className="flex flex-wrap justify-center max-w-350 gap-10">
        {gamesData.map(({ src, width, height, alt }) => (
          <Image key={src} src={src} width={width} height={height} alt={alt} />
        ))}
      </div>
    </div>
  );
};
