'use client';

import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { cn } from '@/src/utils/cn';

type FAQItemProps = {
  question: string;
  answer: string;
  isLast?: boolean;
};

export const FAQItem = ({ question, answer, isLast = false }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('flex flex-col items-start w-full group text-lg', !isLast && 'border-b')}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          'w-full p-4 flex justify-between bg-white shadow-sm group-hover:text-brand-hover transition',
          'dark:bg-deep-dark',
          open && 'text-brand-hover',
        )}
      >
        <span>{question}</span>
        <span>
          <FontAwesomeIcon icon={open ? faCaretDown : faCaretLeft} />
        </span>
      </button>

      <div className={cn('answer', open && 'open')}>
        <div className="inner p-4">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
