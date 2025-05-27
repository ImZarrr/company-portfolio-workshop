import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rafi',
  description: 'Created with Rafi',
  generator: 'Rafi.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
