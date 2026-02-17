import { useState } from 'react';

interface FaqProps {
  question: string;
  answer: React.ReactNode;
}

export const Faq = ({ answer, question }: FaqProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-zinc-950 rounded-xl border-1 m-4 p-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-bold text-2xl text-primary hover:cursor-pointer hover:text-purple-700"
      >
        {question}
      </button>
      <div
        className={`
            transition-all duration-200
            overflow-hidden
            ${expanded ? 'text-lg p-4' : 'max-h-0'}
            `}
      >
        {answer}
      </div>
    </section>
  );
};
