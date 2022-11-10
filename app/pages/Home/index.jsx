import { useState } from "react";

export const Home = () => {

	let links = [
		{title:"Github",link:"https://www.github.com/rasnesakam", desc:""},
		{title:"LinkedIn",link:"https://www.linkedin.com/in/ensar-makas-a16b69199/", desc:""},
		{title:"VSCO",link:"https://www.vsco.co/rasnesakam/gallery", desc:""},
		{title:"HackerRank",link:"https://www.hackerrank.com/ensar_makas", desc:""},
		{title:"LeetCode",link:"https://leetcode.com/emakas/", desc:""},
		{title:"Medium",link:"https://medium.com/@emakas", desc:""},
		{title:"Instagram",link:"https://instagram.com/prilog.e?igshid=YçmMyMTA2M2Y=", desc:""},
		{title:"Twitter",link:"https://twitter.com/ensar_makas", desc:""},
		{title:"Buy me a coffee",link:"https://www.buymeacoffee.com/emakas", desc:""},
	];
	const [data, setData] = useState(links);
    return (<>
        {data.map((item) => {

			return (
				<a href={item.link} target="_blank" className="m-5">
					<div className="flex flex-row justify-center sm:flex-row border-2 border-secondary bg-secondary transform transition duration-500 hover:scale-105">
						<div className="flex flex-col items-center m-2">
							<div className="uppercase text-lg font-bold p-2">{item.title}</div>
							<div className="text-base italic">{item.desc}</div>
						</div>
					</div>
				</a>
			)
		})}
		
    </>);
}