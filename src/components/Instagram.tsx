import { faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type InstagramProps = {
  link: string;
};

export const Instagram = ({ link }: InstagramProps) => (
  <a href={link}>
    <div className="bg-white rounded-full p-1">
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  </a>
);
