import './globals.css'
import { Inter } from 'next/font/google'

import Sidebar from './components/Sidebar.tsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen bg-black">
          <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Sidebar />
              <div className="
                col-span-3
                lg:col-span-2
                border-x-[1px]
                border-neutral-800
              ">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
