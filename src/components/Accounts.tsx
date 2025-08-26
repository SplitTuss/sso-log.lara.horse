import { useEffect, useState, useCallback } from 'react';
import { ChromePicker } from 'react-color';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';
import { useDb } from '@/hooks/useDb';
import type { DBAccount } from '@/data/db';
import { Input } from './Input';
import { Button } from './Button';

export function Accounts() {
  const { addAccount, updateAccount, removeData, getAllAccounts } = useDb();

  const [isOpen, setIsOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<string | null>(null);
  const [accountNameInput, setAccountNameInput] = useState('');
  const [color, setColor] = useState('#FF00FF');
  const [accountList, setAccountList] = useState<Array<DBAccount> | null>(null);

  const handleLoadAccounts = useCallback(async () => {
    const result = await getAllAccounts();
    if (Array.isArray(result)) {
      setAccountList(result);
    }
  }, [getAllAccounts]);

  useEffect(() => {
    if (accountList === null) {
      handleLoadAccounts();
    }
  }, [accountList, handleLoadAccounts]);

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

      // TODO: when editing, ensure all horseOwner relationships have their color updated
    } else {
      await addAccount({
        name: accountNameInput,
        color,
      });
    }

    await handleLoadAccounts();
    handleClearInputs();
    setIsOpen(false);
  };

  const handleRemove = async (id: string) => {
    await removeData(id);
    await handleLoadAccounts();

    // TODO: when deleting, ensure all horseOwner relationships are deleted
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
        {accountList?.map((account, index) => (
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
