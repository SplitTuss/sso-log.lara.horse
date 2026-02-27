import Header from '@/components/Header';
import { Accounts } from '@/components/Accounts';

import { ListOfAllNames } from '@/components/ListOfAllNames';

export default function Names() {
  return (
    <>
      <Header />

      <div className="rounded-lg mb-2 bg-[url('https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/sso-background.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center sm:gap-4 gap-2">
          <Accounts />
        </div>
      </div>
      <div className="flex flex-col">
        <ListOfAllNames />
      </div>
    </>
  );
}
