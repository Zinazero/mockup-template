import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../utils/cn';

type LinkBoxProps = {
  text: string;
  subText?: string;
  href: string;
  src: string;
  alt: string;
  className?: string;
};

export const LinkBox = ({ text, subText, href, src, alt, className }: LinkBoxProps) => {
  return (
    <Link
      key={text}
      href={href}
      className={cn(
        'relative w-90 h-90 rounded-2xl overflow-hidden',
        'hover:brightness-110 hover:scale-102 active:scale-95 transition group',
        className,
      )}
    >
      <Image src={src} alt={alt} className="absolute top-0 left-0 w-full h-full object-cover" fill />

      <div
        className={cn(
          'flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-1/20',
          'bg-light/90 h-1/6 w-4/5 p-4 font-bold rounded-xl text-dark',
        )}
      >
        {subText && <span className="text-sm">{subText}</span>}
        <span className="text-xl">{text}</span>
      </div>
    </Link>
  );
};
