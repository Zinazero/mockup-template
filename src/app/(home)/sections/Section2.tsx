import Image from 'next/image';
import Link from 'next/link';
import { LinkBox } from '@/src/ui/LinkBox';
import { cn } from '@/src/utils/cn';

export const Section2 = () => {
  const mobileRooms = [
    {
      text: 'The Room',
      src: '/mobile/trailer.jpg',
      alt: 'Escape Room Trailer',
      href: '/mobile',
    },
    {
      text: 'The Hot Seat',
      src: '/mobile/hot-seat.jpg',
      alt: 'Solo Escape Room',
      href: '/mobile',
    },
  ];

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col items-center h-200 w-full max-w-350 p-10 ">
        <h3 className="relative w-200 h-26">
          <Image src="/mobile/go-mobile.svg" alt="Go Mobile" fill />
        </h3>

        <div className="flex items-center justify-evenly h-120 w-full">
          {mobileRooms.map((obj) => (
            <LinkBox key={obj.text} {...obj} />
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
