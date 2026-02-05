import { UnderlineHeader } from '@/src/components/UnderlineHeader';
import mobileData from '@/src/data/mobile.json';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export const MobileGallery = () => {
  return (
    <div className="flex flex-col items-center gap-20 p-10">
      <h2>
        <UnderlineHeader text="Mobile Escape Rooms" level={2} svgClass="mb-4" />
      </h2>

      <div className="w-full max-w-350 flex flex-col gap-20">
        {mobileData.map(({ text, src, alt, href, description }, i) => (
          <div
            key={text}
            className={cn(
              'flex gap-10 border-b border-dashed border-brand pb-10',
              i % 2 === 0 && 'flex-row-reverse',
            )}
          >
            <Link href={href} className="relative min-w-100 h-80 rounded-lg overflow-hidden">
              <Image src={src} alt={alt} fill className="object-cover" />
            </Link>

            <div className="flex flex-col">
              <div>
                <span className="font-bold text-2xl">{text}</span>
                <p>{description}</p>
              </div>
              <Link
                href={href}
                className={cn(
                  'mt-auto bg-brand text-light p-2 rounded-xl hover:scale-105 transition',
                  'text-xl active:scale-95',
                  i % 2 === 0 ? 'mr-auto' : 'ml-auto',
                )}
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
