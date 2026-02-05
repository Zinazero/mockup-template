import { ContactForm } from '@/src/components/forms/ContactForm';
import { UnderlineHeader } from '@/src/components/UnderlineHeader';
import { ContactInfo } from './components/ContactInfo';

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-350 min-h-screen p-10 gap-20">
      <h1 className="text-5xl font-bold">
        <UnderlineHeader text="Contact Us" level={1} svgClass="mb-4" />
      </h1>
      <div className="w-full flex items-center justify-evenly">
        <section>
          <ContactInfo />
        </section>
        <section className="w-150">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
