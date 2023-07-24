import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nagaraj Yallurkar',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#fff'}} className={inter.className}>{children}</body>
    </html>
  )
}