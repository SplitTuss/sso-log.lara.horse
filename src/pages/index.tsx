import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { ExportButton } from '@/components/ExportButton';
import { ImportButton } from '@/components/ImportButton';

export default function Home() {
  return (
    <>
      <Header />

      <div className="max-w-6xl px-2 mx-auto">
        <div className="flex flex-row">
          <ExportButton />
          <ImportButton />
        </div>

        <Accounts />

        <Horses />
      </div>

      <footer>
        The images are not mine! I will be forever grateful to Abbie Starwatcher, who has from the
        beginning volunteered (I think) her time to take photos of every single horse in this game.
      </footer>
    </>
  );
}
