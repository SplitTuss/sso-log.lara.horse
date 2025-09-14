import { useState } from 'react';
import { UserSearchIcon, Trash2Icon } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { ConfirmDialog } from './ConfirmDialog';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './Dialog';
import { Select, SelectContent, SelectItem, SelectTrigger } from './Select';
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

  const selectedAccountName = accounts?.find((account) => account.id === selectedAccount)?.name;

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedAccount) {
      alert('Please select an account');
      return;
    }
    if (!horseNameFirstInput || horseNameSecondInput === null) {
      alert('Please select a horse name');
      return;
    }

    const foundAccount = accounts?.find((account) => account.id === selectedAccount);
    const accountColor = foundAccount?.color ?? 'purple';

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
          <form className="flex flex-row items-center justify-between" onSubmit={handleAdd}>
            <div className="flex flex-col sm:flex-row sm:gap-2 gap-1">
              <Select
                value={selectedAccount}
                onValueChange={setSelectedAccount}
                open={isAccountSelectOpen}
                onOpenChange={setIsAccountSelectOpen}
              >
                <SelectTrigger asChild>
                  <Input
                    readOnly
                    placeholder="select account"
                    value={selectedAccountName}
                    type="input"
                  >
                    <UserSearchIcon className="text-muted-foreground mt-2 mr-1.5" size={20} />
                  </Input>
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
            <Button type="submit" size="xs" className="bg-green-600 hover:bg-green-400 mx-2">
              +
            </Button>
          </form>
          <ul className="flex flex-col gap-1">
            {currentOwners.map((horseOwner) => (
              <li
                key={horseOwner.id}
                className="flex flex-row items-center justify-between bg-accent rounded-sm py-1 px-2"
              >
                <span style={{ color: horseOwner.accountColor }}>
                  {horseOwner.horseFirstName + horseOwner.horseSecondName}
                </span>

                <ConfirmDialog
                  triggerButton={
                    <Button variant="destructive" size="xs">
                      -
                    </Button>
                  }
                  title="Are you sure?"
                  description="This will delete your horse and remove its data from your database."
                  confirmButton={
                    <Button
                      variant="destructive"
                      size="lg"
                      onClick={() => handleDelete(horseOwner.id)}
                    >
                      do it!
                      <Trash2Icon className="text-muted-foreground" size={30} />
                    </Button>
                  }
                />
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
