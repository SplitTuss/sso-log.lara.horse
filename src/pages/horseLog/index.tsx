import { useState } from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/shadcn/Button';
import { Filter } from '@/components/Filter';
import { AVAILABLE_GENERATIONS } from '@/components/GenerationDropdown';

export default function HorseLog() {
  const [searchInput, setSearchInput] = useState('');
  const [shouldHideUnavailable, setShouldHideUnavailable] = useState(false);
  const [shouldHideNotOwned, setShouldHideNotOwned] = useState(false);
  const [visibleGenerations, setVisibleGenerationsChange] = useState(AVAILABLE_GENERATIONS);
  const [shouldShowFavorited, setShouldShowFavorited] = useState(false);

  return (
    <>
      <Header />

      <div className="rounded-lg mb-2 bg-[url('https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/sso-background.jpg')] bg-cover bg-center">
        <div className="flex flex-col pb-2 items-center">
          <Accounts />

          <div className="w-80 flex flex-col items-center gap-2 p-4 m-4 text-accent bg-accent-foreground/40 rounded-xl">
            <SearchBar onSearchChange={setSearchInput} />
            <Filter
              onHideUnavailable={setShouldHideUnavailable}
              onHideNotOwned={setShouldHideNotOwned}
              visibleGenerations={visibleGenerations}
              onVisibleGenerationsChange={setVisibleGenerationsChange}
              onShowFavorited={setShouldShowFavorited}
            />
          </div>
          <Button className="mb-4" variant="outline">
            <Link href="/names">see names list</Link>
          </Button>
        </div>
      </div>
      <div className="max-w-6xl px-2 mx-auto">
        <Horses
          searchInput={searchInput}
          hideUnavailable={shouldHideUnavailable}
          hideNotOwned={shouldHideNotOwned}
          selectedGenerations={visibleGenerations}
          favorited={shouldShowFavorited}
        />
      </div>
    </>
  );
}
