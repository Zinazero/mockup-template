import { UnderlineHeader } from '@/src/components/UnderlineHeader';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

type Location = {
  location: string;
  subLocation?: string;
  imgSrc: string;
  href: string;
};

export const Section1 = () => {
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
    <section className="flex justify-center w-full dark:bg-dark">
      <div className="flex flex-col items-center gap-10  w-full max-w-350 p-10 ">
        <h2>
          <UnderlineHeader text="LOCATIONS" level={2} fontColorClass="dark:text-light" svgClass="mb-4" />
        </h2>

        <div className="flex items-center justify-evenly h-120 w-full">
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
                  'bg-light h-1/6 w-4/5 p-4 font-bold rounded-xl',
                )}
              >
                {subLocation && <span className="text-sm">{subLocation}</span>}
                <span className="text-xl">{location}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
