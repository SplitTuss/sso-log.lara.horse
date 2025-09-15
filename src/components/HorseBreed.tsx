import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HorseGeneration } from './HorseGeneration';
import { HorseData } from '@/data/horseData';
import { cn } from '@/utils';

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
      <div
        className="flex flex-row items-center text-primary text-2xl bg-accent p-2 mb-2 rounded-xl cursor-pointer"
        onClick={toggleExpand}
      >
        <ChevronDown
          size={30}
          className={cn(
            'transition-transform rotate-0 mr-2',
            !isExpanded && 'transition-transform rotate-180',
          )}
        />
        {breed.breed}
      </div>
      <ul className={cn('flex flex-col gap-6', !isExpanded && 'hidden')}>
        {breed.generations.map((generation, index) => (
          <HorseGeneration
            breed={breed.breed}
            generation={generation}
            forSale={generation.forSale}
            key={index}
          />
        ))}
      </ul>
    </li>
  );
}
