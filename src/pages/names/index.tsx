import Link from 'next/link';
import { useState } from 'react';
import { UserCheckIcon, UserMinusIcon } from 'lucide-react';
import Header from '@/components/Header';
import { Accounts } from '@/components/Accounts';
import { Button } from '@/components/shadcn/Button';

import { ListOfAllNames } from '@/components/ListOfAllNames';

function useOwnedNames() {
  const [showOwned, setShowOwned] = useState(false);
  const [showNotOwned, setShowNotOwned] = useState(false);
  return { showOwned, setShowOwned, showNotOwned, setShowNotOwned };
}
export default function Names() {
  const { showOwned, setShowOwned, showNotOwned, setShowNotOwned } = useOwnedNames();
  return (
    <>
      <Header />

      <div className="rounded-lg mb-2 bg-[url('https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/sso-background.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center pb-2">
          <Accounts />
          <div className="flex flex-row gap-2 bg-accent-foreground/40 rounded-md p-2">
            <button
              className="cursor-pointer bg-accent-foreground/40 rounded-md p-1"
              title="show only owned"
              onClick={() => {
                setShowOwned(!showOwned);
                setShowNotOwned(false);
              }}
            >
              <UserCheckIcon className={showOwned ? 'text-primary' : 'text-accent'} />
            </button>
            <button
              className="cursor-pointer bg-accent-foreground/40 rounded-md p-1"
              title="hide all owned"
              onClick={() => {
                setShowNotOwned(!showNotOwned);
                setShowOwned(false);
              }}
            >
              <UserMinusIcon className={showNotOwned ? 'text-primary' : 'text-accent'} />
            </button>
          </div>

          <Button className="mb-4 mt-4" variant="outline">
            <Link href="/horseLog">see horses</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col max-w-6xl px-2 mx-auto">
        <ListOfAllNames showOwned={showOwned} showNotOwned={showNotOwned} />
      </div>
    </>
  );
}
