import { Link } from "next/Link";

function Navbar() {
  return (
    <nav className="bg-secondary border-primary flex flex-row justify-between">
      <div className="flex flex-col pl-2 justify-center">
		<p href="/">
			<strong><big><i>ensar makas</i></big></strong>
		</p>
	  </div>
      <ul className="flex flex-row justify-around align-items items-stretch">
        <li className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <p href="/" className="">Ana Sayfa</p>
        </li>
        <li className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <p href="blog" className="">Blog</p>
        </li>
		<li className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <p href="unauthorized" className="">Servisler</p>
        </li>
        <li className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <p href="about">Hakkında</p>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
