import { HORSE_DATA } from '../data/horseData';
import { HorseBreed } from './HorseBreed';

interface HorsesProps {
  searchInput: string;
  hideUnavailable: boolean;
}

export function Horses({ searchInput, hideUnavailable }: HorsesProps) {
  const filteredHorses = HORSE_DATA.filter((horse) =>
    horse.breed.toLowerCase().includes(searchInput.toLowerCase()),
  ).map((horse) => ({
    ...horse,
    generations: horse.generations.filter((gen) => !hideUnavailable || gen.forSale),
  }));

  return (
    <ul className="flex flex-col gap-6">
      {filteredHorses.map((breed, index) => (
        <HorseBreed key={index} breed={breed} />
      ))}
    </ul>
  );
}
