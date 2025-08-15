import { HORSE_DATA } from '../data/horseData';
import { HorseOwners } from './HorseOwners';

export function Horses() {
  return (
    <ul>
      {HORSE_DATA.map((horse, index) => (
        <li key={index}>
          <div className="text-primary">{horse.breed}</div>

          <ul>
            {horse.generations.map((generation, index) => (
              <li key={index}>
                <div className="text-primary">{generation.id}</div>

                <ul className="flex flex-row flex-wrap gap-10">
                  {generation.colors.map((color, index) => {
                    const horseId = `${horse.breed}-gen${generation.id}-color${index}`;

                    return (
                      <li key={horseId} className="size-40 border-4 flex-col">
                        <img className="h-20 mx-auto py-2" src={color.imageUrl} alt={horseId} />

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
