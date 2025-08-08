import { HORSE_DATA } from '../data/horseData';
import { Input } from './Input';

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
                  {generation.colors.map((color, index) => (
                    <li key={index} className="size-40 border-4 flex-col">
                      <img
                        className="h-20 mx-auto py-2"
                        src={color.imageUrl}
                        alt={`${horse.breed}-${generation.id}-${color.name}`}
                      />

                      <Input placeholder="add horse name" />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

/*
export function Horses() {
  return HORSE_DATA.map((horse, index) => (
    <section key={index}>
      <h2 className="text-purple-400">{horse.breed}</h2>
      <div className="grid grid-cols-4 items-center justify-center">
        {horse.images.map((horseImage, index) => (
          <img
            key={index}
            src={horseImage.url}
            alt={horseImage.alt}
            width={180}
            height={38}
            className="mx-auto"
          />
        ))}
      </div>
    </section>
  ))
}

export default Horses;*/
