import Image from 'next/image';
import Link from 'next/link';
import mobileData from '@/src/data/mobile.json';
import { LinkBox } from '@/src/ui/LinkBox';
import { cn } from '@/src/utils/cn';

export const Section2 = () => {
  return (
    <section className="flex justify-center w-full p-10 pb-20">
      <div className="flex flex-col items-center w-full max-w-350 gap-10">
        <h3 className="relative w-200 h-26">
          <Image src="/mobile/go-mobile.svg" alt="Go Mobile" fill />
        </h3>

        <div className="flex items-center justify-evenly flex-wrap gap-4 w-full">
          {mobileData.map((obj) => (
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
