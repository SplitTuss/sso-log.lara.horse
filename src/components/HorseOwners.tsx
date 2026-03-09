import { useDb } from '@/data/DbProvider';

interface HorseOwnersProps {
  horseId: string;
}

export const HorseOwners = ({ horseId }: HorseOwnersProps) => {
  const { accounts, horseOwners } = useDb();

  const visibleAccounts = (accounts ?? [])
    .filter(({ isVisible }) => isVisible)
    .map((account) => account.id);

  const currentOwners = (horseOwners ?? []).filter((owner) => owner.horseId === horseId);
  const visibleOwners = currentOwners.filter((owner) => visibleAccounts.includes(owner.accountId));

  return (
    <div className="flex justify-center">
      <div className="m-2 p-2 bg-accent/80 w-36 h-20 rounded-xl overflow-scroll">
        <ul className="text-center">
          {visibleOwners.map((horseOwner) => (
            <li key={horseOwner.id}>
              <span style={{ color: horseOwner.accountColor }}>
                {horseOwner.horseFirstName + horseOwner.horseSecondName}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
