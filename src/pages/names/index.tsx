import Link from 'next/link';
import Header from '@/components/Header';
import { Accounts } from '@/components/Accounts';
import { Button } from '@/components/shadcn/Button';

import { ListOfAllNames } from '@/components/ListOfAllNames';

export default function Names() {
  return (
    <>
      <Header />

      <div className="rounded-lg mb-2 bg-[url('https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/sso-background.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center pb-2">
          <Accounts />
          <Button className="mb-4 mt-4" variant="outline">
            <Link href="/horseLog">see horses</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col max-w-6xl px-2 mx-auto">
        <ListOfAllNames />
      </div>
    </>
  );
}
