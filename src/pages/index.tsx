import { useState } from 'react';
import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { SearchBar } from '@/components/SearchBar';
import { Filter } from '@/components/Filter';
import { ListOfAllNames } from '@/components/ListOfAllNames';
import { AVAILABLE_GENERATIONS } from '@/components/GenerationDropdown';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [shouldHideUnavailable, setShouldHideUnavailable] = useState(false);
  const [shouldHideNotOwned, setShouldHideNotOwned] = useState(false);
  const [visibleGenerations, setVisibleGenerationsChange] = useState(AVAILABLE_GENERATIONS);

  return (
    <>
      <Header />

      <div className="max-w-6xl px-2 mx-auto">
        <Accounts />
        <div>
          <ListOfAllNames />
        </div>
        <div>
          <SearchBar onSearchChange={setSearchInput} />
        </div>
        <div className="flex sm:flex-row flex-col justify-center">
          <Filter
            onHideUnavailable={setShouldHideUnavailable}
            onHideNotOwned={setShouldHideNotOwned}
            visibleGenerations={visibleGenerations}
            onVisibleGenerationsChange={setVisibleGenerationsChange}
          />
        </div>

        <Horses
          searchInput={searchInput}
          hideUnavailable={shouldHideUnavailable}
          hideNotOwned={shouldHideNotOwned}
          selectedGenerations={visibleGenerations}
        />
      </div>

      <footer>
        The images are not mine! I will be forever grateful to Abbie Starwatcher, who has from the
        beginning volunteered (I think) her time to take photos of every single horse in this game.
      </footer>
    </>
  );
}
