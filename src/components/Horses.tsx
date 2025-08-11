import { HORSE_DATA } from '../data/horseData';
import { Button } from './Button';
import { Input } from './Input';
import { useDb } from '@/hooks/useDb';

export function Horses() {
  const { addData, removeData } = useDb();

  // TODO: allow the user to select this somehow
  const ownerName = 'john-doe';

  const handleAdd = (key: string) => {
    addData({
      id: `${key}-${ownerName}`,
      ownerName,
      horseName: 'seabiscuit',
    });
  };

  const handleRemove = (key: string) => {
    removeData(`${key}-${ownerName}`);
  };

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
                  {generation.colors.map((color) => {
                    const key = `${horse.breed}-${generation.id}-${color.name}`;

                    return (
                      <li key={key} className="size-40 border-4 flex-col">
                        <img className="h-20 mx-auto py-2" src={color.imageUrl} alt={key} />
                        <div className="flex flex-row items-center">
                          <Input placeholder="add horse name" />
                          <Button size="xs" onClick={() => handleAdd(key)}>
                            +
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <span>horse name</span>
                          <Button variant="destructive" size="xs" onClick={() => handleRemove(key)}>
                            -
                          </Button>
                        </div>
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
