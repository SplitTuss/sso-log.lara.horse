import { useState } from 'react';
import { ChevronDown, MapPinOffIcon } from 'lucide-react';
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
      <div
        className="flex flex-row items-center border-primary border-1 rounded-xl text-primary p-1 mb-2 cursor-pointer"
        onClick={toggleExpand}
      >
        <ChevronDown
          size={22}
          className={cn(
            'transition-transform rotate-0 mr-1',
            !isExpanded && 'transition-transform rotate-180',
          )}
        />
        {generation.id}. generation
        {!generation.forSale && <MapPinOffIcon className="visible ml-2" size={20} />}
      </div>
      <ul
        className={cn(
          'flex flex-row flex-wrap item justify-between gap-y-2 sm:justify-start sm:gap-6',
          !isExpanded && 'hidden',
        )}
      >
        {generation.colors.map((color, index) => {
          const horseId = `${breed}-gen${generation.id}-color${index}`;

          return (
            <li key={horseId} className="border-2 flex-col rounded-xl basis-[49%] sm:basis-0">
              <img className="h-25 mx-auto py-2" src={color.imageUrl} alt={horseId} />

              <HorseOwners horseId={horseId} />
            </li>
          );
        })}
      </ul>
    </li>
  );
}
