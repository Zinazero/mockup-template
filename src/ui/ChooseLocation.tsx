import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../utils/cn';

type Location = {
  location: string;
  subLocation?: string;
  imgSrc: string;
  href: string;
};

export const ChooseLocation = () => {
  const locations: Location[] = [
    {
      location: 'GALT',
      subLocation: 'CAMBRIDGE',
      imgSrc: '/locations/galt.png',
      href: '/galt',
    },
    {
      location: 'NIAGARA FALLS',
      imgSrc: '/locations/niagara.png',
      href: '/niagara',
    },
    {
      location: 'PRESTON',
      subLocation: 'CAMBRIDGE',
      imgSrc: '/locations/preston.png',
      href: '/preston',
    },
  ];

  return (
    <div className="flex items-center justify-evenly h-full w-full">
      {locations.map(({ location, subLocation, imgSrc, href }) => (
        <Link
          href={href}
          key={location}
          className={cn(
            'relative w-1/4 h-full rounded-t-full overflow-hidden border-brand border-2',
            'hover:brightness-110 hover:scale-102 active:scale-95 transition group',
          )}
        >
          <Image
            src={imgSrc}
            alt={`${location} Storefront`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            fill
          />

          <div
            className={cn(
              'flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-1/20',
              'bg-light h-1/6 w-19/20 p-4 font-bold rounded-xl text-dark',
            )}
          >
            {subLocation && <span className="text-sm">{subLocation}</span>}
            <span className="text-xl">{location}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
