import { HORSE_DATA } from '@/data/horseData';
import { formatHorseId } from '@/data/formatHorseId';
import { HorseBreed } from './HorseBreed';

interface HorsesProps {
  searchInput: string;
  hideUnavailable: boolean;
  showHorseIds?: Array<string>;
}

export function Horses({ searchInput, hideUnavailable, showHorseIds }: HorsesProps) {
  const filteredHorses = HORSE_DATA.filter((horse) =>
    horse.breed.toLowerCase().includes(searchInput.toLowerCase()),
  ).map((horse) => ({
    ...horse,
    generations: horse.generations
      .filter((gen) => !hideUnavailable || gen.forSale)
      .map((gen) => ({
        ...gen,
        colors: gen.colors.filter((_, index) => {
          const horseId = formatHorseId({
            breed: horse.breed,
            generation: gen.id,
            colorId: index,
          });

          return !showHorseIds || showHorseIds.includes(horseId);
        }),
      })),
  }));

  return (
    <ul className="flex flex-col gap-6">
      {filteredHorses.map((breed, index) => (
        <HorseBreed key={index} breed={breed} />
      ))}
    </ul>
  );
}
