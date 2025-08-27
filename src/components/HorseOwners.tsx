import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from './Dialog';
import { Button } from './Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';
import { useDb } from '@/data/DbProvider';
import { HORSE_NAMES } from '@/data/horseNames';
import { HorseNameSelector } from '@/components/HorseNameSelector';

interface HorseOwnersProps {
  horseId: string;
}

export const HorseOwners = ({ horseId }: HorseOwnersProps) => {
  const { accounts, horseOwners, addHorseOwner, removeData, refetchData } = useDb();

  const currentOwners = (horseOwners ?? []).filter((owner) => owner.horseId === horseId);

  const [selectedAccount, setSelectedAccount] = useState('');
  const [horseNameFirstInput, setHorseNameFirstInput] = useState<string | null>(null);
  const [horseNameSecondInput, setHorseNameSecondInput] = useState<string | null>(null);
  const [isAccountSelectOpen, setIsAccountSelectOpen] = useState(false);
  const [isFirstNameSelectOpen, setIsFirstNameSelectOpen] = useState(false);
  const [isSecondNameSelectOpen, setIsSecondNameSelectOpen] = useState(false);

  const handleAdd = async () => {
    if (!selectedAccount) {
      alert('Please select an account');
      return;
    }
    if (!horseNameFirstInput || horseNameSecondInput === null) {
      alert('Please select a horse name');
      return;
    }

    const accountColor = accounts?.find((a) => a.id === selectedAccount)?.color ?? 'purple';

    await addHorseOwner({
      horseId,
      horseFirstName: horseNameFirstInput,
      horseSecondName: horseNameSecondInput,
      accountId: selectedAccount,
      accountColor,
    });
    await refetchData();

    handleClearInputs();
  };

  const handleDelete = async (id: string) => {
    await removeData(id);
    await refetchData();
  };

  const handleClearInputs = () => {
    setSelectedAccount('');
    setHorseNameFirstInput(null);
    setHorseNameSecondInput(null);
  };

  const handleEscapePressed = (e: KeyboardEvent) => {
    // ensure the dialog stays open when pressing `esc` key with a "Select" open
    if (isAccountSelectOpen || isFirstNameSelectOpen || isSecondNameSelectOpen) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Dialog
        onOpenChange={(isOpen) => {
          // clear inputs when closing the dialog
          if (!isOpen) handleClearInputs();
        }}
      >
        <DialogTrigger asChild>
          <div className="flex justify-center">
            <Button size="sm">edit</Button>
          </div>
        </DialogTrigger>

        <DialogContent onEscapeKeyDown={handleEscapePressed}>
          <DialogTitle className="text-center">add or remove a name</DialogTitle>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row">
              <Select
                value={selectedAccount}
                onValueChange={setSelectedAccount}
                open={isAccountSelectOpen}
                onOpenChange={setIsAccountSelectOpen}
              >
                <SelectTrigger className="sm:mr-6">
                  <SelectValue placeholder="Account" />
                </SelectTrigger>

                <SelectContent
                  onEscapeKeyDown={(e) => {
                    e.preventDefault();
                    setIsAccountSelectOpen(false);
                  }}
                >
                  {accounts?.map((account) => (
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
                onOpenChange={setIsFirstNameSelectOpen}
              />
              <HorseNameSelector
                names={HORSE_NAMES.second}
                value={horseNameSecondInput}
                onChange={setHorseNameSecondInput}
                onOpenChange={setIsSecondNameSelectOpen}
              />
            </div>
            <Button size="xs" onClick={handleAdd} className="bg-green-600 hover:bg-green-400">
              +
            </Button>
          </div>
          <ul className="flex flex-col gap-1">
            {currentOwners.map((horseOwner) => (
              <li
                key={horseOwner.id}
                className="flex flex-row items-center justify-between bg-accent rounded-sm py-1 px-2"
              >
                <span style={{ color: horseOwner.accountColor }}>
                  {horseOwner.horseFirstName + horseOwner.horseSecondName}
                </span>
                <Button variant="destructive" size="xs" onClick={() => handleDelete(horseOwner.id)}>
                  -
                </Button>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
      <div className="m-2 p-2 bg-accent w-36 h-20 rounded-xl overflow-scroll">
        <ul className="text-center">
          {currentOwners.map((horseOwner) => (
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
