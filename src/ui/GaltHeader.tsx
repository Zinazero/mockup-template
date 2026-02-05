import { HeaderBox } from '../components/HeaderBox';

type GaltHeaderProps = {
  className?: string;
};

export const GaltHeader = ({ className }: GaltHeaderProps) => (
  <HeaderBox
    header="GALT GAMES"
    subtitle="EST. 2015"
    facebookLink="/"
    instagramLink="/"
    className={className}
  />
);
