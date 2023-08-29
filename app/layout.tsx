import './globals.css'
import type { Metadata } from 'next'
import {NavigationMenu} from '@components/Navigation/NavigationMenu';
import { Footer } from '@components/Footer/footer';

export const metadata: Metadata = {
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
      <body className={`overflow-x-hidden bg-gradient-to-r from-[#141959] to-[#18d8d9]  `}>
        <NavigationMenu/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}