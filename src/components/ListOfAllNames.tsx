import { useMemo } from 'react';
import { ListOfNames } from './ListOfNames';
import { HORSE_NAMES } from '@/data/horseNames';
import { useDb } from '@/data/DbProvider';

type ListOfAllNamesProps = {
  showOwned: boolean;
  showNotOwned: boolean;
};

export function ListOfAllNames({ showOwned, showNotOwned }: ListOfAllNamesProps) {
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
    <div className="bg-[rgba(255,255,255,0.04)] rounded-xl m-2">
      <div className="flex justify-center rounded-xl text-primary p-2 mt-4 text-2xl">
        HORSE NAMES
      </div>
      <div className="m-4">
        <ListOfNames namesUsedMap={namesUsedMap.first} title="first" nameList={namesList.first} />
        <ListOfNames
          namesUsedMap={namesUsedMap.second}
          title="second"
          nameList={namesList.second}
        />
      </div>
    </div>
  );
}
