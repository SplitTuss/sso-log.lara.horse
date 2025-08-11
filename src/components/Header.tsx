import { Button } from './Button';

export function Header() {
  return (
    <>
      <ol className="bg-primary flex items-center justify-center">
        <li className="p-10 text-white">
          <a href="https://lara.horse">
            <Button variant="secondary">lara.horse</Button>
          </a>
        </li>
        <li className="p-10 bg-secondary text-white rounded-2xl">
          <a href="https://horses.lara.horse">
            <Button>real horses</Button>
          </a>
        </li>
        <li className="p-10 bg-primary text-white rounded-2xl">
          <a href="https://laracraft.io">
            <Button variant="secondary">laracraft.io</Button>
          </a>
        </li>
        <li className="p-10 bg-secondary text-white rounded-2xl">
          <a href="https://ssodb.bplaced.net/db/en/horses.html">
            <Button>StarStableDatabase</Button>
          </a>
        </li>
        {/* <li className="p-10 text-purple-900">sso-log.lara.horse</li>
      <li className="p-10 text-purple-900">I-GRMN.laracraft.io</li> */}
      </ol>
    </>
  );
}

export default Header;
