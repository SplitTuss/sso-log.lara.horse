import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/shadcn/Badge';
import { cn } from '@/utils';
import { useDb } from '@/data/DbProvider';

interface ListOfNamesProps {
  namesUsedMap: Record<string, Record<string, number>>;
  title: string;
  nameList: Array<string>;
}

export function ListOfNames({ namesUsedMap, title, nameList }: ListOfNamesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { accounts } = useDb();

  return (
    <>
      <div
        className="flex flex-row items-center text-primary bg-accent p-1 mb-2 rounded-xl cursor-pointer"
        onClick={toggleExpand}
      >
        <ChevronDown
          size={30}
          className={cn(
            'transition-transform rotate-0 mr-2',
            !isExpanded && 'transition-transform rotate-180',
          )}
        />
        {title}
      </div>

      <ul className={cn('px-2 grid sm:grid-cols-4 grid-cols-2', !isExpanded && 'hidden')}>
        {nameList.map((name, index) => (
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
