import { formattedHorseData } from '@/data/horseData';
import { formatHorseId } from '@/data/formatHorseId';
import { useDb } from '@/data/DbProvider';
import { HorseBreed } from './HorseBreed';

interface HorsesProps {
  searchInput: string;
  hideUnavailable: boolean;
  hideNotOwned: boolean;
}

export function Horses({ searchInput, hideUnavailable, hideNotOwned }: HorsesProps) {
  const { accounts, horseOwners } = useDb();

  const visibleAccounts = (accounts ?? [])
    .filter(({ isVisible }) => isVisible)
    .map((account) => account.id);

  const visibleHorseIds = (horseOwners ?? [])
    .filter((owner) => visibleAccounts.includes(owner.accountId))
    .map((owner) => owner.horseId);

  const filteredHorses = formattedHorseData
    .filter((horse) => horse.breed.toLowerCase().includes(searchInput.toLowerCase()))
    .map((horse) => ({
      ...horse,
      generations: horse.generations
        .filter((gen) => !hideUnavailable || gen.forSale)
        .map((gen) => ({
          ...gen,
          colors: gen.colors.filter((color) => {
            const horseId = formatHorseId({
              breed: horse.breed,
              generation: gen.id,
              colorId: color.colorId,
            });

            return !hideNotOwned || visibleHorseIds.includes(horseId);
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
