import { HORSE_DATA } from '../data/horseData';
import { HorseOwners } from './HorseOwners';

interface HorsesProps {
  searchInput: string;
}

export function Horses({ searchInput }: HorsesProps) {
  const filteredHorses = HORSE_DATA.filter((horse) =>
    horse.breed.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <ul className="flex flex-col gap-6">
      {filteredHorses.map((horse, index) => (
        <li key={index}>
          <div className="text-primary text-2xl">{horse.breed}</div>

          <ul className="flex flex-col gap-6">
            {horse.generations.map((generation, index) => (
              <li key={index}>
                <div className="text-primary pb-2">{generation.id}. generation</div>

                <ul className="flex flex-row flex-wrap gap-6">
                  {generation.colors.map((color, index) => {
                    const horseId = `${horse.breed}-gen${generation.id}-color${index}`;

                    return (
                      <li key={horseId} className="border-4 flex-col rounded-xl">
                        <img className="h-25 mx-auto py-2" src={color.imageUrl} alt={horseId} />

                        <HorseOwners horseId={horseId} />
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
