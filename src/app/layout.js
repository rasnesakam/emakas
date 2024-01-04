import { Navbar } from "@/components/Navbar"
import { Inter } from 'next/font/google'
import '@/styles/global.css'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Ensar Makas',
    description: 'Geleceği kodlayan insan',
    
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/icons/icons8-e-50.ico" />
            </head>
            <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-9Y0DHSYFVV" />
            <Script id="google-analytics">{
                `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());                
                  gtag('config', 'G-9Y0DHSYFVV');
                `
            }</Script>
            <body className={`${inter.className} h-screen`}>
                <Navbar />
                <main className="w-11/12 pt-10 pb-10 mx-auto">
                    {children}
                </main>
            </body>
        </html>
    )
}
