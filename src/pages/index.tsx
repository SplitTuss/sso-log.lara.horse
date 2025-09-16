import { useState } from 'react';
import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { SearchBar } from '@/components/SearchBar';
import { Filter } from '@/components/Filter';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [shouldHideUnavailable, setShouldHideUnavailable] = useState(false);

  return (
    <>
      <Header />

      <div className="max-w-6xl px-2 mx-auto">
        <Accounts />
        <div className="flex flex-row">
          <SearchBar onSearchChange={setSearchInput} />
          <Filter onHideUnavailable={setShouldHideUnavailable} />
        </div>

        <Horses
          searchInput={searchInput}
          hideUnavailable={shouldHideUnavailable}
          showHorseIds={undefined}
        />
      </div>

      <footer>
        The images are not mine! I will be forever grateful to Abbie Starwatcher, who has from the
        beginning volunteered (I think) her time to take photos of every single horse in this game.
      </footer>
    </>
  );
}
