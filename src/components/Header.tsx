import Link from 'next/link';

import { Button } from './shadcn/Button';

export default function Header() {
  return (
    <div className="bg-accent flex items-center justify-between ">
      <Link href="/">
        <img
          src="/logo.svg"
          alt="sso-log.lara.horse.io logo"
          className="w-20 h-20 rounded-lg ml-2 sm:ml-4"
        />
      </Link>
      <div className="flex justify-center gap-6 py-4 mr-2 sm:mr-4">
        <Link href="https://horses.lara.horse">
          <Button variant="default">real horses</Button>
        </Link>
        <div className="hidden sm:block">
          <Link href="https://laracraft.io">
            <Button variant="default">laracraft.io</Button>
          </Link>
        </div>
        <Link href="https://ssodb.bplaced.net/db/en/horses.html">
          <Button className="text-pink-500" variant="default">
            original SSO-DB
          </Button>
        </Link>
      </div>
    </div>
  );
}
