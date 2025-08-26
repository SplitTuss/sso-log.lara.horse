import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { ExportButton } from '@/components/ExportButton';
import { ImportButton } from '@/components/ImportButton';

export default function Home() {
  return (
    <>
      <Header />
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <div className="flex justify-center">
            The images are not mine! I will be forever grateful to Abbie Starwatcher, who has from
            the beginning volunteered (I think) her time to take photos of every single horse in
            this game.
          </div>
          <ExportButton />
          <ImportButton />
          <Accounts />
          <Horses />
        </main>
      </div>
    </>
  );
}
