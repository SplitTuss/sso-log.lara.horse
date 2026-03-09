import { useState } from 'react';
import { ChevronDown, MapPinOffIcon } from 'lucide-react';
import { HorseOwners } from './HorseOwners';
import { FormattedHorseData } from '@/data/horseData';
import { formatHorseId } from '@/data/formatHorseId';
import { cn } from '@/utils';
import { EditHorse } from './EditHorse';

interface HorseGenProps {
  breed: string;
  generation: FormattedHorseData[number]['generations'][number];
}

export function HorseGeneration({ generation, breed }: HorseGenProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (generation.colors.length === 0) {
    return null;
  }

  return (
    <li className="bg-accent/30 rounded-xl">
      <div
        className="flex flex-row items-center border-primary/40 border-1 rounded-xl text-primary p-1 mb-2 cursor-pointer"
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
          'flex flex-row flex-wrap justify-between gap-y-2 sm:justify-start sm:gap-6',
          !isExpanded && 'hidden',
        )}
      >
        {generation.colors.map((color) => {
          const horseId = formatHorseId({
            breed: breed,
            generation: generation.id,
            colorId: color.colorId,
          });

          return (
            <li
              key={horseId}
              className="border-2 flex-col rounded-xl basis-[49%] sm:basis-0 bg-accent/3"
            >
              <div className="relative flex items-center">
                <img className="h-25 max-w-[75%] mx-auto py-2" src={color.imageUrl} alt={horseId} />
                <EditHorse horseId={horseId} />
              </div>
              <HorseOwners horseId={horseId} />
            </li>
          );
        })}
      </ul>
    </li>
  );
}
