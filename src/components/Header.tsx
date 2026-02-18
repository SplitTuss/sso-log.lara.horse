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

      <Link href="https://ssodb.bplaced.net/db/en/horses.html" className="mr-4">
        <Button className="text-pink-500" variant="default">
          original SSO-DB
        </Button>
      </Link>
    </div>
  );
}
