import { useEffect, useState, useCallback } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from './Dialog';
import { Button } from './Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';
import { useDb } from '@/hooks/useDb';
import type { DBHorseOwner, DBAccount } from '@/data/db';
import { HORSE_NAMES } from '@/data/horseNames';
import { HorseNameSelector } from '@/components/HorseNameSelector';

interface HorseOwnersProps {
  horseId: string;
}

export const HorseOwners = ({ horseId }: HorseOwnersProps) => {
  const { addHorseOwner, removeData, getAllByHorseId, getAllAccounts } = useDb();

  const [availableAccounts, setAvailableAccounts] = useState<Array<DBAccount> | null>(null);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [horseNameFirstInput, setHorseNameFirstInput] = useState<string | null>(null);
  const [horseNameSecondInput, setHorseNameSecondInput] = useState<string | null>(null);
  const [horseOwners, setHorseOwners] = useState<Array<DBHorseOwner> | null>(null);

  const handleLoadAccounts = useCallback(async () => {
    const result = await getAllAccounts();
    if (Array.isArray(result)) {
      setAvailableAccounts(result);
    }
  }, [getAllAccounts]);

  const handleLoadOwners = useCallback(async () => {
    const result = await getAllByHorseId(horseId);
    if (Array.isArray(result)) {
      setHorseOwners(result);
    }
  }, [horseId, getAllByHorseId]);

  useEffect(() => {
    if (horseOwners === null) {
      handleLoadOwners();
    }
  }, [horseOwners, handleLoadOwners]);

  const handleAdd = async () => {
    if (!selectedAccount) {
      alert('Please select an account');
      return;
    }
    if (!horseNameFirstInput || horseNameSecondInput === null) {
      alert('Please select a horse name');
      return;
    }

    const accountColor = availableAccounts?.find((a) => a.id === selectedAccount)?.color ?? 'red';

    await addHorseOwner({
      horseId,
      horseFirstName: horseNameFirstInput,
      horseSecondName: horseNameSecondInput,
      accountId: selectedAccount,
      accountColor,
    });
    await handleLoadOwners();

    handleClearInputs();
  };

  const handleDelete = async (id: string) => {
    await removeData(id);
    await handleLoadOwners();
  };

  const handleClearInputs = () => {
    setSelectedAccount('');
    setHorseNameFirstInput(null);
    setHorseNameSecondInput(null);
  };

  return (
    <div>
      <Dialog
        onOpenChange={(isOpen) => {
          // clear inputs when closing the dialog
          if (!isOpen) handleClearInputs();
          // load fresh account list when opening dialog
          else handleLoadAccounts();
        }}
      >
        <DialogTrigger asChild>
          <div className="flex justify-center">
            <Button size="sm">edit</Button>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>add horse name</DialogTitle>
          <div className="flex flex-row items-center">
            <Select value={selectedAccount} onValueChange={setSelectedAccount}>
              <SelectTrigger>
                <SelectValue placeholder="Account" />
              </SelectTrigger>

              <SelectContent>
                {availableAccounts?.map((account) => (
                  <SelectItem key={account.id} value={account.id}>
                    {account.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

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

            <Button size="xs" onClick={handleAdd} className="bg-green-600 hover:bg-green-400">
              +
            </Button>
          </div>
          <ul>
            {(horseOwners ?? []).map((horseOwner) => (
              <li key={horseOwner.id}>
                <div className="flex flex-row items-center justify-between">
                  <span>{horseOwner.horseFirstName + horseOwner.horseSecondName}</span>
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
