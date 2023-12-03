import { StaticImageData } from "next/image";
import { useState, useEffect, Children, ReactNode } from "react";

const HeadSection = ({imgSrc, title, children}: {imgSrc: string, title:string, children: ReactNode}) => {
	let message = `
	Merhaba. Ben Ensar. Beykent üniversitesi bilgisayar mühendisliği 4. sınıf öğrencisiyim. Resim yapmayı ve tevuklu pilavı severim
	`;
	const [user, setUSer] = useState({name:"Ensar Makas",message})

	return <div className="bg-primary mh-screen  absolute left-0 right-0 flex flex-col md:flex-row">
		<div className="">
			<img className="w-full" src={imgSrc} />
		</div>
		<div className="md:m-5 grid grid-flow-row grid-rows-3">
			<div className="my-auto col-span-1 text-start">
				<span className = "text-foreground text-3xl font-bold italic">{title}</span>
			</div>
			<div className=" col-span-2">
				<div className = "text-foreground text-xl ">
					{children}
				</div>
			</div>
		</div>

	</div>
};

export default HeadSection;