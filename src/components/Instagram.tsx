import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type InstagramProps = {
  link: string;
};

export const Instagram = ({ link }: InstagramProps) => (
  <a href={link}>
    <div className="bg-white rounded-full p-1 hover:scale-105 transition active:scale-95">
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  </a>
);
