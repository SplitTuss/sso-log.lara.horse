import { HORSE_DATA } from '../data/horseData';
import { EditHorsePopup } from './EditHorsePopup';

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
                    const key = `${horse.breed}-${generation.id}-${color.name}`;

                    return (
                      <li key={`${key}-${index}`} className="size-40 border-4 flex-col">
                        <img className="h-20 mx-auto py-2" src={color.imageUrl} alt={key} />

                        <EditHorsePopup dbKey={key} />
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
