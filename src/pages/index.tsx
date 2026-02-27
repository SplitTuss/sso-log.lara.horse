import Link from 'next/link';
import Header from '@/components/Header';
import { Faq } from '@/components/Faq';
import { Button } from '@/components/shadcn/Button';
import { FAQ_DATA } from '@/data/FaqData';

export default function Home() {
  return (
    <>
      <Header />
      <div className="rounded-lg mb-2 h-[450px] sm:h-[600px] bg-[url('https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/JosephineLawrenceOfficeWallpaper.png')] bg-cover bg-center">
        <div className="mx-auto max-w-xs sm:max-w-2xl flex flex-col text-center justify-center">
          <div className="font-extrabold text-primary text-6xl sm:text-8xl opacity-60 m-6">
            Welcome!
          </div>
          <br />
          <br />
          <div className="rounded-lg p-2 bg-[rgba(255,255,255,0.4)] text-primary mb-4">
            This is where you can keep track of all your{' '}
            <Link href="https://www.starstable.com" className="underline">
              Star Stable Online
            </Link>{' '}
            accounts and their horses
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="">
            <Button className="mb-4">
              <Link href="/horseLog" className="flex justify-center">
                Get started!
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {FAQ_DATA.map(({ question, answer }, index) => (
        <Faq key={index} question={question} answer={answer} />
      ))}
    </>
  );
}
