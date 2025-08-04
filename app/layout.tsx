import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SQL Injection Research Dashboard',
  description: 'A comprehensive dashboard for analyzing machine learning algorithms in SQL injection detection research',
  generator: 'Next.js',
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