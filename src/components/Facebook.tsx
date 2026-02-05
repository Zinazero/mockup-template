import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FacebookProps = {
  link: string;
};

export const Facebook = ({ link }: FacebookProps) => (
  <a href={link}>
    <div className="bg-white rounded-full p-1 hover:scale-105 transition active:scale-95">
      <FontAwesomeIcon icon={faFacebookF} />
    </div>
  </a>
);
