import Image from 'next/image';

type CallToAction = {
  text: string;
  onClick: () => void;
};

type HeroVisualProps = {
  src: string;
  type: 'image' | 'video';
  poster?: string;
  title: string;
  subtitle?: string;
  cta: CallToAction;
};

export const HeroVisual = ({ src, type, poster, title, subtitle, cta }: HeroVisualProps) => {
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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-5xl font-bold text-brand-orange">{title}</h1>
        {subtitle && <h2 className="mt-2 text-2xl text-gray-300">{subtitle}</h2>}
        {cta && (
          <button
            type="button"
            onClick={cta.onClick}
            className="mt-4 rounded-lg p-2 bg-brand-blue text-light font-semibold w-60 text-center hover:bg-brand-orange transition"
          >
            {cta.text}
          </button>
        )}
      </div>
    </section>
  );
};
