import './globals.css'
import Navbar from './components/Navbar'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Metadata } from 'next'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Online Tutoring | Jishan Choudhury",
  description: "An online tutor for GCSE, SATS and A-LEVELS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
    <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Navbar />
        <>
        {children}
        </>
      </body>
    </html>
  )
}
