import { Footer, Navbar } from '@/components'
import './globals.css'
import { siteConfig } from '@/utils/site'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
