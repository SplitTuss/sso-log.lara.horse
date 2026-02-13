import { useState } from 'react';

interface FaqProps {
  question: string;
  answer: React.ReactNode;
}

export const Faq = ({ answer, question }: FaqProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-bold text-2xl text-primary hover:cursor-pointer hover:text-purple-700 mb-2"
      >
        {question}
      </button>
      <div
        className={`
            transition-all ease-out duration-300
            overflow-hidden
            ${expanded ? 'opacity-100 text-lg mb-2' : 'opacity-0 max-h-0'}
            `}
      >
        {answer}
      </div>
    </section>
  );
};
