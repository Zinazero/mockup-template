import Image from 'next/image';
import { ImageType } from '../types';

export const LockedInBanner = () => {
  const sections: ImageType[] = [
    { text: 'LOCKED IN', src: '/icons/lock.png', alt: 'Padlock', width: 46, height: 52 },
    { text: 'TIME IS PRECIOUS', src: '/icons/clock.png', alt: 'Clock', width: 52, height: 52 },
    {
      text: 'WILL YOU BREAKOUT?',
      src: '/icons/question-mark.png',
      alt: 'Question Mark',
      width: 32,
      height: 37,
    },
  ];

  return (
    <div className="flex items-center w-full bg-deep-dark h-24  shadow-xl">
      <div className="w-full max-w-350 flex items-center justify-evenly">
        {/* LOCKED IN */}
        {sections.map(({ text, src, alt, width, height }) => (
          <div key={text} className="flex items-center gap-4">
            <Image src={src} alt={alt} width={width} height={height} className="" />

            <span className="font-bold text-light">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
