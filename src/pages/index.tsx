import { useState } from 'react';
import Header from '@/components/Header';
import { Horses } from '@/components/Horses';
import { Accounts } from '@/components/Accounts';
import { SearchBar } from '@/components/SearchBar';
import { Checkbox } from '@/components/Checkbox';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Header />

      <div className="max-w-6xl px-2 mx-auto">
        <Accounts />
        <div className="flex flex-row">
          <SearchBar onSearchChange={setSearchInput} />

          <div className="flex flex-row items-center gap-2">
            Hide unavailable:
            <Checkbox
              checked={checked}
              onCheckedChange={(value) => {
                if (value === 'indeterminate') {
                  setChecked(false);
                } else {
                  setChecked(value);
                }
              }}
            />
          </div>
        </div>

        <Horses searchInput={searchInput} hideUnavailable={checked} />
      </div>

      <footer>
        The images are not mine! I will be forever grateful to Abbie Starwatcher, who has from the
        beginning volunteered (I think) her time to take photos of every single horse in this game.
      </footer>
    </>
  );
}
