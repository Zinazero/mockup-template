'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '../utils/cn';

type CallToAction = {
  text: string;
  href: string;
};

type HeroVisualProps = {
  src: string;
  poster?: string;
  title: string;
  subtitle?: string;
  cta?: CallToAction;
  overlayActive?: boolean;
};

export const HeroVisual = ({ src, poster, title, subtitle, cta, overlayActive = true }: HeroVisualProps) => {
  const ext = src.split('.').pop()?.toLowerCase();
  const type = ext === 'mp4' || ext === 'webm' ? 'video' : 'image';

  const router = useRouter();

  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Background Video / Image */}
      {type === 'video' ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={src}
          poster={poster}
          aria-hidden
        />
      ) : (
        <Image
          src={src}
          alt="Hero Image"
          aria-hidden
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill
        />
      )}

      {/* Dark overlay for contrast */}
      {overlayActive && <div className="absolute top-0 left-0 w-full h-full bg-black/70" />}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-5xl font-bold text-brand-secondary">{title}</h1>
        {subtitle && <span className="mt-2 text-2xl text-brand">{subtitle}</span>}
        {cta && (
          <button
            type="button"
            onClick={() => router.push(cta.href)}
            className={cn(
              'mt-4 rounded-lg p-2 bg-brand-hover text-light font-semibold w-60 text-center',
              'hover:bg-brand active:scale-95 transition',
            )}
          >
            {cta.text}
          </button>
        )}
      </div>
    </section>
  );
};
