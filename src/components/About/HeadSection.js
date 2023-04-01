import { useState, useEffect } from "react";

const HeadSection = () => {
	let message = `
	Merhaba. Ben Ensar. Beykent üniversitesi bilgisayar mühendisliği 4. sınıf öğrencisiyim. Resim yapmayı ve tevuklu pilavı severim
	`;
	const [user, setUSer] = useState({name:"Ensar Makas",message})

	return <div className="bg-onGround mh-screen  absolute left-0 right-0 flex flex-col md:flex-row">
		<div className="">
			<img className="w-full" src="https://avatars.githubusercontent.com/u/45129228?v=4" />
		</div>
		<div className="md:m-5 grid grid-flow-row grid-rows-3">
			<div className="my-auto col-span-1 text-start">
				<span className = "text-primary text-3xl font-bold italic">{user.name}</span>
			</div>
			<div className=" col-span-2">
				<span className = "text-secondary text-xl ">{user.message}</span>
			</div>
		</div>

	</div>
};

export default HeadSection;