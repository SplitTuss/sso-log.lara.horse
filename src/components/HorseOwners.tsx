import { useEffect, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from './Dialog';
import { Button } from './Button';
import { Input } from './Input';
import { useDb } from '@/hooks/useDb';

interface HorseOwnersProps {
  horseId: string;
}

export const HorseOwners = ({ horseId }: HorseOwnersProps) => {
  const { addData, removeData, getAllByHorseId } = useDb();

  const [horseNameInput, setHorseNameInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [horseOwners, setHorseOwners] = useState<Array<any>>([]);

  const handleLoadOwners = useCallback(async () => {
    const result = await getAllByHorseId(horseId);
    if (Array.isArray(result)) {
      setHorseOwners(result);
    }
  }, [horseId, getAllByHorseId]);

  useEffect(() => {
    if (isOpen) {
      handleLoadOwners();
    }
  }, [isOpen, handleLoadOwners]);

  // TODO: allow the user to select this somehow
  const ownerName = 'john-doe';

  const handleAdd = async () => {
    await addData({
      id: uuidv4(),
      ownerName,
      horseName: horseNameInput,
      horseId,
    });
    await handleLoadOwners();
  };

  const handleDelete = async (id: string) => {
    await removeData(id);
    await handleLoadOwners();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>title</DialogTitle>
        <div className="flex flex-row items-center">
          <Input
            placeholder="add horse name"
            value={horseNameInput}
            onChange={(event) => setHorseNameInput(event.target.value)}
          />
          <Button size="xs" onClick={handleAdd}>
            +
          </Button>
        </div>
        <ul>
          {horseOwners.map((horseOwner) => (
            <li key={horseOwner.id}>
              <div className="flex flex-row items-center justify-between">
                <span>{horseOwner.horseName}</span>
                <Button variant="destructive" size="xs" onClick={() => handleDelete(horseOwner.id)}>
                  -
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
