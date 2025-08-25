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
  const { addAccount, removeData, getAllAccounts } = useDb();

  const [isOpen, setIsOpen] = useState(false);
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
    if (!accountNameInput || !color) {
      alert('Please type in a name and select a color');
      return;
    }

    await addAccount({
      name: accountNameInput,
      color,
    });
    await handleLoadAccounts();

    handleClearInputs();
    setIsOpen(false);
  };

  const handleClearInputs = () => {
    setAccountNameInput('');
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
            <Button size="sm">edit</Button>
            <Button size="xs" variant="destructive" onClick={() => removeData(account.id)}>
              -
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
