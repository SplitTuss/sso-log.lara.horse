import { useState, useMemo } from 'react';
import { ChevronDown, UserCheckIcon, UserMinusIcon } from 'lucide-react';
import { ListOfNames } from './ListOfNames';
import { HORSE_NAMES } from '@/data/horseNames';
import { cn } from '@/utils';
import { useDb } from '@/data/DbProvider';

export function ListOfAllNames() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { horseOwners } = useDb();

  const namesUsedMap = useMemo(() => {
    const firstNameCount: Record<string, Record<string, number>> = {};
    const secondNameCount: Record<string, Record<string, number>> = {};

    horseOwners?.forEach(({ horseFirstName, horseSecondName, accountId }) => {
      if (!firstNameCount[horseFirstName]) {
        firstNameCount[horseFirstName] = {};
      }
      if (!secondNameCount[horseSecondName]) {
        secondNameCount[horseSecondName] = {};
      }

      if (firstNameCount[horseFirstName][accountId]) {
        firstNameCount[horseFirstName][accountId]++;
      } else {
        firstNameCount[horseFirstName][accountId] = 1;
      }

      if (secondNameCount[horseSecondName][accountId]) {
        secondNameCount[horseSecondName][accountId]++;
      } else {
        secondNameCount[horseSecondName][accountId] = 1;
      }
    });

    return {
      first: firstNameCount,
      second: secondNameCount,
    };
  }, [horseOwners]);

  return (
    <>
      <div className="flex flex-row items-center text-primary text-xl bg-accent p-2 mb-2 rounded-xl">
        <div className="flex flex-row text-xl cursor-pointer" onClick={toggleExpand}>
          <ChevronDown
            size={30}
            className={cn(
              'transition-transform rotate-0 mr-2',
              !isExpanded && 'transition-transform rotate-180',
            )}
          />
          Horse Names
        </div>
        <div>
          <button className="cursor-pointer ml-2">
            <UserCheckIcon />
          </button>
          <button className="cursor-pointer ml-2">
            <UserMinusIcon />
          </button>
        </div>
      </div>
      <div className={cn('flex flex-col mb-2', !isExpanded && 'hidden')}>
        <ListOfNames namesUsedMap={namesUsedMap.first} title="first" nameList={HORSE_NAMES.first} />
        <ListOfNames
          namesUsedMap={namesUsedMap.second}
          title="second"
          nameList={HORSE_NAMES.second}
        />
      </div>
    </>
  );
}
