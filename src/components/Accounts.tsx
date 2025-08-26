import { useState } from 'react';
import { ChromePicker } from 'react-color';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';
import { useDb } from '@/data/DbProvider';
import type { DBAccount } from '@/data/db';
import { Input } from './Input';
import { Button } from './Button';

export function Accounts() {
  const {
    accounts,
    horseOwners,
    addAccount,
    updateAccount,
    updateHorseOwner,
    removeData,
    refetchData,
  } = useDb();

  const [isOpen, setIsOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<string | null>(null);
  const [accountNameInput, setAccountNameInput] = useState('');
  const [color, setColor] = useState('#FF00FF');

  const handleAdd = async () => {
    if (!accountNameInput.trim()) {
      alert('Please type in a name');
      return;
    }

    if (editingAccount) {
      await updateAccount({
        id: editingAccount,
        name: accountNameInput,
        color,
      });

      const accountHorses = horseOwners?.filter((owner) => owner.accountId === editingAccount);

      if (accountHorses) {
        await Promise.all(
          accountHorses.map((horse) => updateHorseOwner({ ...horse, accountColor: color })),
        );
      }
    } else {
      await addAccount({
        name: accountNameInput,
        color,
      });
    }

    await refetchData();
    handleClearInputs();
    setIsOpen(false);
  };

  const handleRemove = async (id: string) => {
    const success = await removeData(id);

    const accountHorses = horseOwners?.filter((owner) => owner.accountId === id);

    if (success && accountHorses) {
      await Promise.all(accountHorses.map((horse) => removeData(horse.id)));
    }

    await refetchData();
  };

  const handleEditAccount = async (account: DBAccount) => {
    setEditingAccount(account.id);
    setAccountNameInput(account.name);
    setColor(account.color);
    setIsOpen(true);
  };

  const handleClearInputs = () => {
    setAccountNameInput('');
    setEditingAccount(null);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) handleClearInputs();
          setIsOpen(open);
        }}
      >
        <DialogTrigger asChild>
          <div className="flex justify-center">
            <Button size="lg">add account</Button>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">add a new account</DialogTitle>
            <DialogDescription className="text-center">
              type in the name and pick a color
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-row items-center">
            <ChromePicker disableAlpha color={color} onChange={({ hex }) => setColor(hex)} />
            <Input
              placeholder="Enter name"
              value={accountNameInput}
              onChange={(e) => setAccountNameInput(e.target.value)}
            />
            <Button size="xs" className="bg-green-600 hover:bg-green-400" onClick={handleAdd}>
              +
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <ul>
        {accounts?.map((account, index) => (
          <li key={index}>
            <span style={{ color: account.color }}>{account.name}</span>
            <Button size="sm" onClick={() => handleEditAccount(account)}>
              edit
            </Button>
            <Button size="xs" variant="destructive" onClick={() => handleRemove(account.id)}>
              -
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
