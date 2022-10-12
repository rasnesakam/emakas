import { Link } from "react-router-dom";
import './index.css'

function Navbar() {
  return (
    <nav className="bg-secondary border-primary flex flex-row justify-between">
      <div className="flex flex-col pl-2 justify-center">
		<Link to="/">
			<strong><big><i>ensar makas</i></big></strong>
		</Link>
	  </div>
      <ul className="flex flex-row justify-around align-items items-stretch">
        <li className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <Link to="/" className="">Ana Sayfa</Link>
        </li>
        <li className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <Link to="blog" className="">Blog</Link>
        </li>
        <li className="p-2 bg-primary text-secondary hover:bg-secondary hover:text-primary">
          <Link to="about">Hakkında</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
