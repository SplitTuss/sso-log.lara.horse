import { useState } from 'react';
import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { SearchBar } from '@/components/SearchBar';
import { ExportButton } from '@/components/ExportButton';
import { ImportButton } from '@/components/ImportButton';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <Header />

      <div className="max-w-6xl px-2 mx-auto">
        <div className="flex flex-row justify-around pt-4">
          <ExportButton />
          <ImportButton />
        </div>

        <Accounts />

        <SearchBar onSearchChange={setSearchInput} />

        <Horses searchInput={searchInput} />
      </div>

      <footer>
        The images are not mine! I will be forever grateful to Abbie Starwatcher, who has from the
        beginning volunteered (I think) her time to take photos of every single horse in this game.
      </footer>
    </>
  );
}
