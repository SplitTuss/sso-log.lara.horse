import { useState } from 'react';
import { HorseOwners } from './HorseOwners';
import { HorseData } from '@/data/horseData';
import { cn } from '@/utils';

interface HorseGenProps {
  breed: string;
  generation: HorseData[number]['generations'][number];
}

export function HorseGeneration({ generation, breed }: HorseGenProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div className="flex flex-row text-primary pb-2 cursor-pointer" onClick={toggleExpand}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-chevron-down-icon lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        {generation.id}. generation
      </div>
      <ul className={cn('flex flex-row flex-wrap gap-4 sm:gap-6', !isExpanded && 'hidden')}>
        {generation.colors.map((color, index) => {
          const horseId = `${breed}-gen${generation.id}-color${index}`;

          return (
            <li key={horseId} className="border-4 flex-col rounded-xl">
              <img className="h-25 mx-auto py-2" src={color.imageUrl} alt={horseId} />

              <HorseOwners horseId={horseId} />
            </li>
          );
        })}
      </ul>
    </li>
  );
}
