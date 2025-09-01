import { useState } from 'react';
import { HorseGeneration } from './HorseGeneration';
import { HorseData } from '@/data/horseData';
import { cn } from '@/utils';
import { Expand } from 'lucide-react';

interface HorseBreedProps {
  breed: HorseData[number];
}

export function HorseBreed({ breed }: HorseBreedProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div className="flex flex-row text-primary text-2xl cursor-pointer" onClick={toggleExpand}>
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
          className={cn(
            'lucide lucide-chevron-down-icon lucide-chevron-down',
            !isExpanded && 'transition-transform transition-property: rotate-180',
          )}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        {breed.breed}
      </div>
      <ul className={cn('flex flex-col gap-6', !isExpanded && 'hidden')}>
        {breed.generations.map((generation, index) => (
          <HorseGeneration breed={breed.breed} generation={generation} key={index} />
        ))}
      </ul>
    </li>
  );
}
