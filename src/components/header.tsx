export function Header() {
  return (<>
    <ol className="bg-pink-500 flex items-center justify-center">
      <li className="p-10 text-white"><a href="https://lara.horse">lara.horse</a></li>
      <li className="p-10 text-white"><a href="https://horses.lara.horse">real horses</a></li>
      <li className="p-10 text-white"><a href="https://laracraft.io">laracraft.io</a></li>
      <li className="p-10 text-white"><a href="https://ssodb.bplaced.net/db/en/horses.html">StarStableDatabase</a></li>
      {/* <li className="p-10 text-purple-900">sso-log.lara.horse</li>
      <li className="p-10 text-purple-900">I-GRMN.laracraft.io</li> */}
    </ol>
  </>

  );
}

export default Header;