import { useState, useMemo } from 'react';
import { ChevronDown, UserCheckIcon, UserMinusIcon } from 'lucide-react';
import { ListOfNames } from './ListOfNames';
import { HORSE_NAMES } from '@/data/horseNames';
import { cn } from '@/utils';
import { useDb } from '@/data/DbProvider';

export function ListOfAllNames() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotOwned, setShowNotOwned] = useState(false);
  const [showOwned, setShowOwned] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { horseOwners, accounts } = useDb();

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

  const namesList = useMemo(() => {
    const accountVisibilityMap: Record<string, boolean> = {};

    accounts?.forEach((acc) => {
      accountVisibilityMap[acc.id] = acc.isVisible;
    });

    if (showOwned) {
      return {
        first: HORSE_NAMES.first.filter((name) => {
          if (!namesUsedMap.first[name]) return false;

          return Object.keys(namesUsedMap.first[name]).some(
            (accountId) => accountVisibilityMap[accountId],
          );
        }),
        second: HORSE_NAMES.second.filter((name) => {
          if (!namesUsedMap.second[name]) return false;

          return Object.keys(namesUsedMap.second[name]).some(
            (accountId) => accountVisibilityMap[accountId],
          );
        }),
      };
    }

    if (showNotOwned) {
      return {
        first: HORSE_NAMES.first.filter((name) => {
          if (!namesUsedMap.first[name]) return true;

          return Object.keys(namesUsedMap.first[name]).every(
            (accountId) => !accountVisibilityMap[accountId],
          );
        }),
        second: HORSE_NAMES.second.filter((name) => {
          if (!namesUsedMap.second[name]) return true;

          return Object.keys(namesUsedMap.second[name]).every(
            (accountId) => !accountVisibilityMap[accountId],
          );
        }),
      };
    }

    return {
      first: HORSE_NAMES.first,
      second: HORSE_NAMES.second,
    };
  }, [namesUsedMap, showNotOwned, showOwned, accounts]);

  return (
    <>
      <div className="flex flex-row text-primary text-xl bg-accent p-2 mb-2 rounded-xl">
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
        <div className="flex flex-row ml-2">
          <button
            className="cursor-pointer ml-2"
            onClick={() => {
              setShowOwned(!showOwned);
              setShowNotOwned(false);
            }}
          >
            <UserCheckIcon className={showOwned ? 'text-primary' : 'text-muted-foreground'} />
          </button>
          <button
            className="cursor-pointer ml-2"
            onClick={() => {
              setShowNotOwned(!showNotOwned);
              setShowOwned(false);
            }}
          >
            <UserMinusIcon className={showNotOwned ? 'text-primary' : 'text-muted-foreground'} />
          </button>
        </div>
      </div>
      <div className={cn('flex flex-col mb-2', !isExpanded && 'hidden')}>
        <ListOfNames namesUsedMap={namesUsedMap.first} title="first" nameList={namesList.first} />
        <ListOfNames
          namesUsedMap={namesUsedMap.second}
          title="second"
          nameList={namesList.second}
        />
      </div>
    </>
  );
}
