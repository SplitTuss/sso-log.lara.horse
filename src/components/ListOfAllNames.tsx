import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ListOfFirstNames } from './ListOfFirstNames';
import { ListOfSecondNames } from './ListOfSecondNames';
import { cn } from '@/utils';

export function ListOfAllNames() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className="flex flex-row items-center text-primary text-xl bg-accent p-2 mb-2 rounded-xl cursor-pointer"
        onClick={toggleExpand}
      >
        <ChevronDown
          size={30}
          className={cn(
            'transition-transform rotate-0 mr-2',
            !isExpanded && 'transition-transform rotate-180',
          )}
        />
        Horse Names
      </div>
      <div className={cn('flex flex-col mb-2', !isExpanded && 'hidden')}>
        <ListOfFirstNames />

        <ListOfSecondNames />
      </div>
    </>
  );
}
