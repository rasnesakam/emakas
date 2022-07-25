import { Link } from "react-router-dom";
import './index.css'

function Navbar() {
  return (
    <nav className="bg-secondary border-primary px-2 sm:px-4  rounded flex flex-row justify-between">
      <div className=""></div>
      <ul className="flex flex-row justify-around align-items items-stretch">
        <li className=" p-2 bg-secondary hover:bg-hover hover:text-ground">
          <Link to="/" className="">Ana Sayfa</Link>
        </li>
        <li className="p-2 bg-secondary hover:bg-hover hover:text-ground">
          <Link to="blog" className="">Blog</Link>
        </li>
        <li className="p-2 bg-secondary hover:bg-hover hover:text-ground">
          <Link to="about">Hakkında</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
