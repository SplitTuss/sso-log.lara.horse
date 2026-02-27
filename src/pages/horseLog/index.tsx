import { useState } from 'react';
import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { SearchBar } from '@/components/SearchBar';
import { Filter } from '@/components/Filter';
import { AVAILABLE_GENERATIONS } from '@/components/GenerationDropdown';

export default function HorseLog() {
  const [searchInput, setSearchInput] = useState('');
  const [shouldHideUnavailable, setShouldHideUnavailable] = useState(false);
  const [shouldHideNotOwned, setShouldHideNotOwned] = useState(false);
  const [visibleGenerations, setVisibleGenerationsChange] = useState(AVAILABLE_GENERATIONS);

  return (
    <>
      <Header />

      <div className="rounded-lg mb-2 bg-[url('https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/sso-background.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center">
          <Accounts />

          <div className="text-accent p-2 mb-4 bg-[rgba(255,255,255,0.4)] rounded-xl">
            <SearchBar onSearchChange={setSearchInput} />
            <Filter
              onHideUnavailable={setShouldHideUnavailable}
              onHideNotOwned={setShouldHideNotOwned}
              visibleGenerations={visibleGenerations}
              onVisibleGenerationsChange={setVisibleGenerationsChange}
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-2 mx-auto">
        <Horses
          searchInput={searchInput}
          hideUnavailable={shouldHideUnavailable}
          hideNotOwned={shouldHideNotOwned}
          selectedGenerations={visibleGenerations}
        />
      </div>
    </>
  );
}
