import { useState } from 'react';
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
      <div className="text-primary text-2xl cursor-pointer" onClick={toggleExpand}>
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
