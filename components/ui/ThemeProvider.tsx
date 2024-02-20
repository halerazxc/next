'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider ({ children, ...props }: { children: string }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
