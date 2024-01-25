"use client"
import Link from "next/link"
import {supportedLanguages, useLanguageContext} from "@/components/LanguageContextAdapter";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
const Navbar = () => {
    const menuItemsLanguages = {
        "TURKISH": [
            {href: "/projects",label: "Projelerim"},
            {href: "/jobs",label: "Çalışma Hayatım"},
            {href: "/education",label: "Eğitim Geçmişim"},
            {href: "/blogs",label: "Blog yazılarım"}
        ],
        "ENGLISH": [
            {href: "/projects",label: "My Projects"},
            {href: "/jobs",label: "Work Experiences"},
            {href: "/education",label: "Education"},
            {href: "/blogs",label: "Blog Posts"}
        ]
    }
    const {language, setLanguage} = useLanguageContext();
    const menuItems = menuItemsLanguages[language.lang]

    function languageDropdownMenu(){
        return <>
            <Dropdown>
                <DropdownTrigger>
                    <li className="card my-auto p-2 mx-2 cursor-pointer">{language.slug.toUpperCase()}</li>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    {
                        Object.keys(supportedLanguages)
                            .map((key, index) =>
                                (<DropdownItem key={`language-${supportedLanguages[key].slug}`}
                                               onClick={(e) => setLanguage(supportedLanguages[key])}>
                                    {supportedLanguages[key].label}
                                </DropdownItem> ))
                    }
                </DropdownMenu>
            </Dropdown>
        </>
    }

    function openMenu(e){
        let menus = document.getElementsByClassName("mobile-menu");
        let togglers = document.getElementsByClassName("mobile-menu-toggle")
        for (let i = 0; i < menus.length; i++){
            let menu = menus.item(i);
            let dataset = menu.dataset;
            if (dataset.visible === undefined || dataset.visible === "false")
                dataset.visible = true;
            else if (dataset.visible === "true"){
                dataset.visible = false;
            } 
        }
        for (let i = 0; i < togglers.length; i++){
            let toggler = togglers.item(i);
            let dataset = toggler.dataset;
            if (dataset.toggle === undefined || dataset.toggle === "off")
                dataset.toggle = "on";
            else if (dataset.toggle === "on")
                dataset.toggle = "off"
        }
    }

    return <nav className="w-full">
            <div className="flex p-5 shadow-lg flex-row justify-between items-center">
                <Link href="/" className="flex flex-row items-center justify-center group">
                    <img src="/vectors/icons8-m-100.svg" className="w-10 h-10 transition delay-150 group-hover:-rotate-90 group-hover:scale-125"/>
                    <img src="/vectors/icons8-e-100.svg" className="w-10 h-10 transition delay-150 group-hover:translate-x-2 group-hover:rotate-90 group-hover:scale-125"/>
                </Link>
                <button className="md:hidden mobile-menu-toggle group" onClick={openMenu}>
                    <span className="w-6 h-1 block bg-secondary rounded-full transition origin-top-left group-data-[toggle=off]:rotate-0 group-data-[toggle=on]:rotate-45"></span>
                    <span className="w-6 h-1 my-1 block bg-secondary rounded-full transition group-data-[toggle=off]:opacity-100 group-data-[toggle=on]:opacity-0"></span>
                    <span className="w-6 h-1 block bg-secondary rounded-full transition origin-bottom-left group-data-[toggle=off]:rotate-0 group-data-[toggle=on]:-rotate-45"></span>
                </button>
                <ul className="hidden md:flex md:flex-row divide-x">
                    {languageDropdownMenu()}
                    {
                        menuItems.map((item,index) => (
                            <li key={index} className="p-2">
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
            <div className="mobile-menu transition-all scale-0 origin-top-left sm:origin-top h-0 duration-600 data-[visible=true]:h-min data-[visible=true]:scale-100 pt-4" >
                <ul className="sm:flex sm:flex-row sm:justify-center md:divide-x">
                    {languageDropdownMenu()}
                    {
                        menuItems.map((item,index) => (
                            <li key={index} className="p-2">
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </nav>
}


export {Navbar};
