import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HORSE_NAMES } from '@/data/horseNames';
// import { Badge } from '@/components/Badge';
import { cn } from '@/utils';

interface ListOfFirstNamesProps {
  namesUsedMap: Record<string, Record<string, number>>;
}

export function ListOfFirstNames({ namesUsedMap }: ListOfFirstNamesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  console.log({ namesUsedMap });

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
        first
      </div>

      <ul className={cn('px-2 grid sm:grid-cols-4 grid-cols-2', !isExpanded && 'hidden')}>
        {HORSE_NAMES.first.map((name, index) => (
          <li className="py-0.5" key={index}>
            {name}
            {/* <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
              variant="default"
            >
              x
            </Badge> */}
          </li>
        ))}
      </ul>
    </>
  );
}
