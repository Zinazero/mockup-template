import { cn } from '../utils/cn';
import { Facebook } from './Facebook';
import { Instagram } from './Instagram';

type HeaderBoxProps = {
  header: string;
  subtitle?: string;
  facebookLink?: string;
  instagramLink?: string;
  className?: string;
};

export const HeaderBox = ({ header, subtitle, facebookLink, instagramLink, className }: HeaderBoxProps) => {
  return (
    <div
      className={cn(
        'py-6 px-10 bg-brand/30 dark:bg-brand/70 rounded-4xl flex flex-col items-center',
        'text-white gap-10',
        className,
      )}
    >
      {subtitle && <span className="text-2xl">{subtitle}</span>}
      <h2 className="text-8xl font-bold">{header}</h2>

      {/* SOCIALS */}
      <div className="text-3xl flex gap-2 text-brand/60">
        {facebookLink && <Facebook link={facebookLink} />}
        {instagramLink && <Instagram link={instagramLink} />}
      </div>
    </div>
  );
};
