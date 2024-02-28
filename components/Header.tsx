'use client'

import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'
import MobileNav from './MobileNav'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './Logo'

const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }

    window.addEventListener('scroll', scrollYPos)

    return () => {
      window.removeEventListener('scroll', scrollYPos)
    }
  }, [])

  return (
    <>
      <header
        className={`${
          header ? 'shadow-lg py-[15px] ' : 'py-[20px]'
        } sticky top-0 z-30 left-0 right-0 transition-all duration-30 bg-white dark:bg-[#1C1B22] `}
      >
        <div className='container '>
          <div className='flex items-center justify-between'>
            <Logo />
            <div className='flex items-center gap-x-8'>
              <NavLink
                className='flex gap-x-4 items-center '
                hiddenProp='hidden xl:flex'
              />
              <ThemeToggle />
              {/* mobile nav  */}
              <div className='xl:hidden flex'>
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
