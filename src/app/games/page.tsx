import { Hours } from '@/src/layout/Hours';
import { GamesHero } from './sections/GamesHero';
import { GamesGallery } from './sections/GamesGallery';
import { Packages } from './sections/Packages';
import { LockedInBanner } from '@/src/layout/LockedInBanner';

const Games = () => {
  return (
    <>
      <GamesHero />

      <Hours />

      <Packages />

      <LockedInBanner />

      <GamesGallery />
    </>
  );
};

export default Games;
