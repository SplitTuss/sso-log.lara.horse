import Header from '@/components/Header';
import { Horses } from '@/components/Horses';

//const imageLink = 'https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/'

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <section>
            <p>The images are not mine! </p>
            <p>I will be forever grateful to Abbie Starwatcher,</p>
            <p>who has from the beginning volunteered (I think) her time to take photos</p>
            <p>of every single horse in this game.</p>
            <p>I have linked the SSO Database in the header.</p>
          </section>
          <Horses />
          {/*<img src={imageLink + 'akhal-teke/gen1-1.webp'} alt="hier" />*/}
        </main>
      </div>
    </>
  );
}
