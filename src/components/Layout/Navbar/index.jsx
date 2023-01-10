import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-secondary border-primary flex flex-row justify-between">
      <div className="flex flex-col pl-2 justify-center">
		<p href="/">
			<strong><big><i>ensar makas</i></big></strong>
		</p>
	  </div>
      <ul className="flex flex-row justify-around align-items items-stretch">
        <li key="1" className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <Link href="/" className="">Ana Sayfa</Link>
        </li>
        <li key="2" className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <Link href="mediumblog" className="">Blog</Link>
        </li>
		<li key="3" className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <Link href="unauthorized" className="">Servisler</Link>
        </li>
        <li key="4" className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <Link href="about">Hakkında</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
