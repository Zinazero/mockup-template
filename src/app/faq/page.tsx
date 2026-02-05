import { UnderlineHeader } from '@/src/components/UnderlineHeader';
import faqData from '@/src/data/faq.json';
import { FAQItem } from './components/FAQItem';

const FAQ = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-350 min-h-screen p-10 gap-20">
      <h1>
        <UnderlineHeader text="Frequently Asked Questions" level={1} svgClass="mb-8" />
      </h1>

      <div className="rounded-xl shadow-lg overflow-hidden w-full dark:border-2">
        {faqData.map(({ question, answer }, i) => {
          const isLast = i === faqData.length - 1;
          return <FAQItem key={question} question={question} answer={answer} isLast={isLast} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
