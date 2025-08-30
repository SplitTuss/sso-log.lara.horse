import { useState } from 'react';
import { HorseGeneration } from './HorseGeneration';
import { HorseData } from '@/data/horseData';

interface HorseBreedProps {
  breed: HorseData[number];
}

export function HorseBreed({ breed }: HorseBreedProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div className="text-primary text-2xl">{breed.breed}</div>
      <ul className="flex flex-col gap-6">
        {breed.generations.map((generation, index) => (
          <HorseGeneration breed={breed.breed} generation={generation} key={index} />
        ))}
      </ul>
    </li>
  );
}
