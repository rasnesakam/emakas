import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default function Layout({children}){
	return <>
	
		<div className="bg-ground">
		<Navbar />
		<div className=" min-h-screen"> 
			<main className="px-10">
				{children}
			</main>
			<Footer />
		</div>
		</div>
	</>
}