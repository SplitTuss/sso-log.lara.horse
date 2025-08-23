import { useEffect, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from './Dialog';
import { Button } from './Button';
import { useDb } from '@/hooks/useDb';
import { HORSE_NAMES } from '@/data/horseNames';
import { HorseNameSelector } from '@/components/HorseNameSelector';

interface HorseOwnersProps {
  horseId: string;
}

export const HorseOwners = ({ horseId }: HorseOwnersProps) => {
  const { addData, removeData, getAllByHorseId } = useDb();

  const [horseNameFirstInput, setHorseNameFirstInput] = useState<string | null>(null);
  const [horseNameSecondInput, setHorseNameSecondInput] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [horseOwners, setHorseOwners] = useState<Array<any> | null>(null);

  const handleLoadOwners = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await getAllByHorseId(horseId);
    if (Array.isArray(result)) {
      setHorseOwners(result);
    }
  }, [horseId, getAllByHorseId]);

  useEffect(() => {
    if (horseOwners === null) {
      handleLoadOwners();
    }
  }, [horseOwners, handleLoadOwners]);

  // TODO: allow the user to select this somehow
  const ownerName = 'john-doe';

  const handleAdd = async () => {
    if (!horseNameFirstInput || horseNameSecondInput === null) {
      alert('Please select a horse name');
      return;
    }

    await addData({
      id: uuidv4(),
      ownerName,
      horseName: horseNameFirstInput + horseNameSecondInput,
      horseId,
    });
    await handleLoadOwners();

    handleClearInputs();
  };

  const handleDelete = async (id: string) => {
    await removeData(id);
    await handleLoadOwners();
  };

  const handleClearInputs = () => {
    setHorseNameFirstInput(null);
    setHorseNameSecondInput(null);
  };

  return (
    <div>
      <Dialog
        onOpenChange={(isOpen) => {
          if (!isOpen) handleClearInputs();
        }}
      >
        <DialogTrigger asChild>
          <div className="flex justify-center">
            <Button size="sm">edit</Button>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>title</DialogTitle>
          <div className="flex flex-row items-center">
            <HorseNameSelector
              names={HORSE_NAMES.first}
              value={horseNameFirstInput}
              onChange={setHorseNameFirstInput}
            />
            <HorseNameSelector
              names={HORSE_NAMES.second}
              value={horseNameSecondInput}
              onChange={setHorseNameSecondInput}
            />

            <Button size="xs" onClick={handleAdd}>
              +
            </Button>
          </div>
          <ul>
            {(horseOwners ?? []).map((horseOwner) => (
              <li key={horseOwner.id}>
                <div className="flex flex-row items-center justify-between">
                  <span>{horseOwner.horseName}</span>
                  <Button
                    variant="destructive"
                    size="xs"
                    onClick={() => handleDelete(horseOwner.id)}
                  >
                    -
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
      <div className="m-2 p-2 bg-accent w-40 h-30 rounded-xl overflow-scroll">
        <ul className="text-center">
          {(horseOwners ?? []).map((horseOwner) => (
            <li key={horseOwner.id}>
              <span>{horseOwner.horseName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
