import { Facebook } from '../components/Facebook';
import { Instagram } from '../components/Instagram';

type HeaderBoxProps = {
  header: string;
  subtitle?: string;
  facebookLink?: string;
  instagramLink?: string;
};

export const HeaderBox = ({ header, subtitle, facebookLink, instagramLink }: HeaderBoxProps) => {
  return (
    <div className="py-6 px-10 bg-brand/30 dark:bg-brand/70 rounded-4xl flex flex-col items-center gap-10 text-white">
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
