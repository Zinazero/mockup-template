import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TestimonialProps = {
  name: string;
  title?: string;
  date: string;
  paragraph: string;
};

export const Testimonial = ({ name, title, date, paragraph }: TestimonialProps) => {
  return (
    <div key={name} className="flex flex-col rounded-lg bg-white text-dark text-lg shadow-sm p-6 gap-6">
      <div className="flex flex-col">
        <span className="font-bold text-xl">{name}</span>
        {title && <span>{title}</span>}
        <span className="text-gray-500">{date}</span>
      </div>

      <div>
        <span className="mr-2">5.0</span>
        {[0, 1, 2, 3, 4].map((num) => (
          <FontAwesomeIcon key={num} icon={faStar} className="text-yellow-300" />
        ))}
      </div>

      <p>{paragraph}</p>
    </div>
  );
};
