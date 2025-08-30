import { HORSE_DATA } from '../data/horseData';
import { HorseBreed } from './HorseBreed';

interface HorsesProps {
  searchInput: string;
}

export function Horses({ searchInput }: HorsesProps) {
  const filteredHorses = HORSE_DATA.filter((horse) =>
    horse.breed.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <ul className="flex flex-col gap-6">
      {filteredHorses.map((breed, index) => (
        <HorseBreed key={index} breed={breed} />
      ))}
    </ul>
  );
}
