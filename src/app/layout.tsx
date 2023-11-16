
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sager',
  description: 'Sager Desktop Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>

        <Provider>
          <ToasterContext/>
        {children}
        </Provider>
        </body>
    </html>
  )
}
