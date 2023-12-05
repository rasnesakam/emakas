import { Navbar } from "@/components/Navbar"
import { Inter } from 'next/font/google'
import '@/styles/global.css'

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
            <body className={`${inter.className} h-screen`}>
                <Navbar />
                <main className="w-11/12 pt-10 pb-10 mx-auto">
                    {children}
                </main>
            </body>
        </html>
    )
}
