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
    <div className="rounded-xl mt-2">
      <div className="w-xs sm:w-md rounded-xl bg-[rgba(255,255,255,0.4)] p-4">
        <div className="flex flex-row justify-between m-2 mb-4">
          <div className="flex flex-row gap-2">
            <Dialog
              open={isOpen}
              onOpenChange={(open) => {
                if (!open) handleClearInputs();
                setIsOpen(open);
              }}
            >
              <DialogTrigger asChild>
                <Button title="add a new account">add account</Button>
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
          <button
            onClick={() => updateAllAccountVisibility(!areAnyAccountsVisible)}
            className="cursor-pointer text-accent hover:text-primary"
            title="hide all"
          >
            {areAnyAccountsVisible ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {accounts?.map((account, index) => (
            <li
              key={index}
              className="flex flex-row items-center justify-between bg-[rgba(255,255,255,0.4)] rounded-lg py-1 px-4"
            >
              <span style={{ color: account.color }}>{account.name}</span>

              <div className="flex flex-row text-accent items-center gap-2">
                <Button
                  title="edit account name and color"
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditAccount(account)}
                >
                  edit
                </Button>

                <ConfirmDialog
                  triggerButton={
                    <Button title="delete account" size="xs" variant="destructive">
                      -
                    </Button>
                  }
                  title="Are you absolutely sure?"
                  description="This will permanently delete your account and remove your data from your database."
                  confirmButton={
                    <Button
                      variant="destructive"
                      size="lg"
                      onClick={() => handleRemove(account.id)}
                    >
                      <div className="items-center justify-between flex flex-row">
                        do it!
                        <Trash2Icon className="ml-2 text-muted-foreground" size={30} />
                      </div>
                    </Button>
                  }
                />

                <button
                  onClick={() => updateAccountVisibility(account.id, !account.isVisible)}
                  className="cursor-pointer text-accent hover:text-primary mr-4"
                  title="hide this account"
                >
                  {account.isVisible ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//FIGMA STYLES:

// <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.4)] h-[314px] left-[calc(50%-22.5px)] rounded-[20px] top-[95px] w-[720px]" data-name="accounts">
//       <div className="absolute h-[17.613px] right-[76.43px] top-[93px] w-[42.569px]">
//         <div className="absolute inset-[-5.68%_-2.35%]">
//           <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5686 19.6129">
//             <path d={svgPaths.p2294dc00} id="Vector 7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
//           </svg>
//         </div>
//       </div>
//       <AddNewButton />
//       <ImportButton />
//       <ExportButton />
//       <Arisha />
//       <Adele />
//       <Julie />
//     </div>
