import Link from "next/link"

const Navbar = () => {
    const menuItems = [
        {href: "/",label: "Ana Sayfa"},
        {href: "/projects",label: "Projelerim"},
        {href: "/jobs",label: "Çalışma Hayatım"},
        {href: "/education",label: "Eğitim Geçmişim"},
        {href: "/blogs",label: "Blog yazılarım"}
    ]

    return <nav className="flex p-5 shadow-lg flex-row justify-between items-center">
            <Link href="/" className="flex flex-row items-center justify-center group">
                <img src="/vectors/icons8-m-100.svg" className="w-10 h-10 transition delay-150 group-hover:-rotate-90 group-hover:scale-125"/>
                <img src="/vectors/icons8-e-100.svg" className="w-10 h-10 transition delay-150 group-hover:translate-x-2 group-hover:rotate-90 group-hover:scale-125"/>
            </Link>
            <ul className="flex flex-row divide-x">

                {
                    menuItems.map((item,index) => (
                        <li key={index} className="p-2 hover:border-b hover:border-gray-300">
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </nav>
}

export {Navbar};
