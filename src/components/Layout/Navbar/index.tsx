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
  const inactiveStyle = "p-2 text-foreground font-bold hover:text-secondary hover:underline";
  const activeStyle = "p-2 font-bold text-secondary underline"
  return (
  <nav className="bg-onGround border-primary py-2">
    <ul className="flex mx-auto w-8/12 flex-row justify-around align-items items-stretch">
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
