import { Button } from './shadcn/Button';

export function Header() {
  return (
    <ol className="bg-primary flex items-center justify-center gap-6 py-4">
      <li>
        <a href="https://lara.horse">
          <Button variant="secondary">lara.horse</Button>
        </a>
      </li>
      <li className="hidden sm:block">
        <a href="https://horses.lara.horse">
          <Button variant="secondary">real horses</Button>
        </a>
      </li>
      <li className="hidden sm:block">
        <a href="https://laracraft.io">
          <Button variant="secondary">laracraft.io</Button>
        </a>
      </li>
      <li>
        <a href="https://ssodb.bplaced.net/db/en/horses.html">
          <Button className="text-pink-500" variant="secondary">
            original SSO-DB
          </Button>
        </a>
      </li>
    </ol>
  );
}

export default Header;
