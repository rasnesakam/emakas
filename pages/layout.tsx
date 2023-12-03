import { ReactNode } from "react"
import { Footer, Navbar } from "../src/components/Layout"
import Head from "next/head"

export default function Layout({children}: {children: ReactNode}){
	return <>
	
		<div className="bg-ground">
		<Head>
			<title>emakas</title>
			<meta name="description" content="Ensar Makas'ın kişisel veb sitesi" />
			<meta name="keywords" content="Ensar, Makas" />
			<meta name="author" content="Ensar Makas" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
		</Head>
		<Navbar />
		<main className="px-20 min-h-screen text-foreground">
			{children}
		</main>
		<Footer />
		</div>
	</>
}