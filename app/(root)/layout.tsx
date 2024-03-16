import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'

export default function Layout({ children } : { children: React.ReactNode}) {
  return (
    <main className="root">
    {children}
 </main>
  )
}
