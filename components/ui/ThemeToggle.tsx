'use client'

import { Button } from './button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='h-[1.2rem] w-[1.2rem] absolute rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100' />
    </Button>
  )
}

export default ThemeToggle
