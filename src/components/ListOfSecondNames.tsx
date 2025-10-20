import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { HORSE_NAMES } from '@/data/horseNames';
import { cn } from '@/utils';
import { useDb } from '@/data/DbProvider';

interface ListOfSecondNamesProps {
  namesUsedMap: Record<string, Record<string, number>>;
}

export function ListOfSecondNames({ namesUsedMap }: ListOfSecondNamesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { accounts } = useDb();

  return (
    <>
      <div
        className="flex flex-row items-center text-primary bg-accent p-1 mb-1 rounded-xl cursor-pointer"
        onClick={toggleExpand}
      >
        <ChevronDown
          size={30}
          className={cn(
            'transition-transform rotate-0 mr-2',
            !isExpanded && 'transition-transform rotate-180',
          )}
        />
        second
      </div>

      <ul className={cn('px-2 grid sm:grid-cols-4 grid-cols-2', !isExpanded && 'hidden')}>
        {HORSE_NAMES.second.map((name, index) => (
          <li className="py-0.5" key={index}>
            {name}

            {accounts?.map((account) => {
              if (!account.isVisible) return;

              const timesUsed = namesUsedMap?.[name]?.[account.id];
              if (!timesUsed) return;

              return (
                <Badge
                  key={`${account.id}-${name}`}
                  variant="default"
                  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                  style={{ backgroundColor: account.color }}
                >
                  {timesUsed}
                </Badge>
              );
            })}
          </li>
        ))}
      </ul>
    </>
  );
}
