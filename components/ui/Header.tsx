'use client'

import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'
import MobileNav from './MobileNav'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

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
        <div className='container mx-auto '>
          <div className='flex items-center justify-between'>
            <Image
              src='logo.svg'
              width={54}
              height={54}
              alt='logo'
              priority={true}
            />
            <div className='flex items-center gap-x-8'>
              <NavLink hiddenProp='hidden xl:flex' />
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
