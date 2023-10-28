import Link from 'next/link';
import {useState} from "react";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    {title: "Ana Sayfa",href:"/"},
    {title: "Blog", href: "/mediumblog"},
    {title: "Bağlantılar", href: "/linktree"},
    {title: "Servisler",href:"/unauthorized"},
    {title: "Hakkında",href:"/about"}
  ];
  const inactiveStyle = "p-2 text-secondary font-bold hover:text-primary hover:underline";
  const activeStyle = "p-2 font-bold text-primary underline"
  return (
  <nav className="bg-onGround border-primary py-2">
    <div className="flex flex-row justify-center">
      <Link href="/" className="mx-auto text-center">
          <strong><big><i className="text-2xl">ensar makas</i></big></strong>
      </Link>
    </div>
    <ul className="flex mt-4 flex-row justify-evenly align-items items-stretch">
      {menuItems.map((item, index) => (
          <li key={index} className={ index === activeIndex ? activeStyle : inactiveStyle }>
            <Link href={item.href} onClick={() => setActiveIndex(index)}>{item.title}</Link>
          </li>
      ))}
    </ul>
  </nav>
  );
}

export { Navbar };
