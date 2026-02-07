import { Hours } from '@/src/layout/Hours';
import { LockedInBanner } from '@/src/layout/LockedInBanner';
import { GamesGallery } from './sections/GamesGallery';
import { GamesHero } from './sections/GamesHero';
import { Packages } from './sections/Packages';

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
