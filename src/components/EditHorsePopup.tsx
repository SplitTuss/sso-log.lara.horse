import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from './Dialog';
import { Button } from './Button';
import { Input } from './Input';
import { useDb } from '@/hooks/useDb';

interface EditHorsePopupProps {
  dbKey: string;
}

export const EditHorsePopup = ({ dbKey }: EditHorsePopupProps) => {
  const { addData, removeData } = useDb();

  const [horseName, setHorseName] = useState('');

  // TODO: allow the user to select this somehow
  const ownerName = 'john-doe';

  const handleAdd = (key: string) => {
    addData({
      id: `${key}-${ownerName}`,
      ownerName,
      horseName,
    });
  };

  const handleRemove = (key: string) => {
    removeData(`${key}-${ownerName}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>title</DialogTitle>
        <div className="flex flex-row items-center">
          <Input
            placeholder="add horse name"
            onChange={(event) => setHorseName(event.target.value)}
          />
          <Button size="xs" onClick={() => handleAdd(dbKey)}>
            +
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span>horse name</span>
          <Button variant="destructive" size="xs" onClick={() => handleRemove(dbKey)}>
            -
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
