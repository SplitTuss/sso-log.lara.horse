import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Trash2Icon, EyeIcon, EyeOffIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './shadcn/Dialog';
import { useDb } from '@/data/DbProvider';
import type { DBAccount } from '@/data/db';
import { Input } from './shadcn/Input';
import { Button } from './shadcn/Button';
import { ImportButton } from './ImportButton';
import { ExportButton } from './ExportButton';
import { ConfirmDialog } from './ConfirmDialog';

export function Accounts() {
  const {
    accounts,
    horseOwners,
    addAccount,
    updateAccount,
    updateHorseOwner,
    removeData,
    refetchData,
    updateAccountVisibility,
    updateAllAccountVisibility,
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

  const areAnyAccountsVisible = accounts?.some(({ isVisible }) => isVisible);

  return (
    <div className="flex flex-row justify-end">
      <div className="w-md border-primary border-1 rounded-xl p-4 my-2">
        <div className="flex flex-row justify-around pb-2">
          <button
            onClick={() => updateAllAccountVisibility(!areAnyAccountsVisible)}
            className="cursor-pointer text-muted-foreground"
          >
            {areAnyAccountsVisible ? <EyeIcon /> : <EyeOffIcon />}
          </button>

          <Dialog
            open={isOpen}
            onOpenChange={(open) => {
              if (!open) handleClearInputs();
              setIsOpen(open);
            }}
          >
            <DialogTrigger asChild>
              <Button>add account</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle className="text-center">add new / edit account</DialogTitle>
                <DialogDescription className="text-center">
                  type in the name and pick a color
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAdd}>
                <div className="flex flex-row items-center pb-4 gap-4">
                  <Input
                    placeholder="Enter name"
                    value={accountNameInput}
                    onChange={(e) => setAccountNameInput(e.target.value)}
                  />
                  <Button type="submit" size="xs" className="bg-green-600 hover:bg-green-400">
                    +
                  </Button>
                </div>
                <ChromePicker
                  className="mx-auto"
                  disableAlpha
                  color={color}
                  onChange={({ hex }) => setColor(hex)}
                />
              </form>
            </DialogContent>
          </Dialog>

          <div className="flex flex-row items-center gap-1">
            <ExportButton />

            <ImportButton />
          </div>
        </div>

        <ul className="flex flex-col gap-1">
          {accounts?.map((account, index) => (
            <li
              key={index}
              className="flex flex-row items-center justify-between bg-accent rounded-sm py-1 px-4"
            >
              <button
                onClick={() => updateAccountVisibility(account.id, !account.isVisible)}
                className="cursor-pointer text-muted-foreground"
              >
                {account.isVisible ? <EyeIcon /> : <EyeOffIcon />}
              </button>

              <span style={{ color: account.color }}>{account.name}</span>

              <div className="flex flex-row items-center gap-2">
                <Button size="sm" onClick={() => handleEditAccount(account)}>
                  edit
                </Button>

                <ConfirmDialog
                  triggerButton={
                    <Button size="xs" variant="destructive">
                      -
                    </Button>
                  }
                  title="Are you absolutely sure?"
                  description="This will permanently delete your account and remove your data from your database."
                  confirmButton={
                    <Button
                      className="items-center justify-between"
                      variant="destructive"
                      onClick={() => handleRemove(account.id)}
                    >
                      do it!
                      <Trash2Icon className="text-muted-foreground" size={30} />
                    </Button>
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
