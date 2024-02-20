import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'

const Header = () => {
  return (
    <>
      <header>
        <div className='container mx-auto '>
          <div className='flex items-center justify-between py-2'>
            <Image
              src='logo.svg'
              width={40}
              height={40}
              alt='logo'
              priority={true}
            />
            <div className='flex items-center gap-x-4'>
              <NavLink />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
