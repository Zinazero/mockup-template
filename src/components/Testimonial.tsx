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
        <span>{date}</span>
      </div>
      <p>{paragraph}</p>
    </div>
  );
};
