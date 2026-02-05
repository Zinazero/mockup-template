import { UnderlineHeader } from '@/src/components/UnderlineHeader';
import testimonialData from '@/src/data/testimonials.json';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-350 min-h-screen p-10 gap-10">
      <h1>
        <UnderlineHeader text="Testimonials" level={1} svgClass="mb-4" />
      </h1>

      {testimonialData.map((testimonial) => (
        <Testimonials key={testimonial.name} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
