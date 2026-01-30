import { ImageType } from '@/src/types';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface MobileImage extends ImageType {
  href: string;
}

export const Section2 = () => {
  const mobileRooms: MobileImage[] = [
    {
      text: 'The Room',
      src: '/mobile/trailer.jpg',
      alt: 'Escape Room Trailer',
      width: 750,
      height: 750,
      href: '/mobile',
    },
    {
      text: 'The Hot Seat',
      src: '/mobile/hot-seat.jpg',
      alt: 'Solo Escape Room',
      width: 750,
      height: 562,
      href: '/mobile',
    },
  ];

  return (
    <section className="flex justify-center w-full dark:bg-dark">
      <div className="flex flex-col items-center h-200 w-full max-w-350 p-10 ">
        <h3 className="font-bold text-5xl text-brand">GO MOBILE</h3>

        <div className="flex items-center justify-evenly h-120 w-full">
          {mobileRooms.map(({ text, src, alt, width, height, href }) => (
            <Link
              key={text}
              href={href}
              className={cn(
                'relative w-90 h-90 rounded-lg overflow-hidden',
                'hover:brightness-110 hover:scale-102 active:scale-95 transition group',
              )}
            >
              <Image src={src} alt={alt} className="absolute top-0 left-0 w-full h-full object-cover" fill />

              <div
                className={cn(
                  'flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-1/20',
                  'bg-light h-1/6 w-4/5 p-4 font-bold rounded-xl',
                )}
              >
                <span className="text-xl">{text}</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/mobile"
          className={cn(
            'rounded-lg p-4 bg-brand text-light font-semibold w-40 lg:w-50 xl:w-60 text-center',
            'hover:bg-brand-hover transition text-xl flex justify-center',
          )}
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};
