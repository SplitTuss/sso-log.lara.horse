import Link from 'next/link';
import Header from '@/components/Header';
import { Faq } from '@/components/Faq';
import { Button } from '@/components/shadcn/Button';
import { FAQ_DATA } from '@/data/FaqData';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-xs sm:max-w-2xl text-center">
        <div className="flex justify-center font-extrabold text-primary text-3xl m-4">Welcome!</div>

        <Button className="mb-4">
          <Link href="/horseLog" className="flex justify-center">
            If you already know what you`re doing, click here!
          </Link>
        </Button>

        <div className="flex flex-col items-center text-xl mb-4">
          <p>
            New here? Wondering what this page is, how to use it and why someone would have created
            it?
          </p>
          <p>Click your question!</p>
        </div>

        {FAQ_DATA.map(({ question, answer }, index) => (
          <Faq key={index} question={question} answer={answer} />
        ))}
      </div>
    </>
  );
}
