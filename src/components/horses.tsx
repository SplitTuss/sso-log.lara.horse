import { HORSE_DATA } from './horseData';

export function Horses() {
  return (
    <ul>
      {HORSE_DATA.map((horse, index) => (
        <li key={index}>
          <div>{horse.breed}</div>

          <ul>
            {horse.generations.map((generation, index) => (
              <li key={index}>
                {generation.id}

                <ul className="flex">
                  {generation.colors.map((color, index) => (
                    <li key={index}>
                      <img
                        src={color.imageUrl}
                        alt={`${horse.breed}-${generation.id}-${color.name}`}
                      />

                      {/* todo: map over the owners here */}
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
