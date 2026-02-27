interface FaqProps {
  question: string;
  answer: React.ReactNode;
}

export const Faq = ({ answer, question }: FaqProps) => {
  return (
    <section className="flex flex-col mx-auto max-w-xs sm:max-w-2xl text-center bg-[rgba(255,255,255,0.1)] rounded-xl border-1 m-2">
      <div className="font-bold m-2 text-2xl text-primary hover:cursor-pointer hover:text-purple-700">
        {question}
      </div>
      <div className="p-4">{answer}</div>
    </section>
  );
};
