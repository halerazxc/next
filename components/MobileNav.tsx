import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Menu } from 'lucide-react'
import Logo from './Logo'
import NavLink from './NavLink'
import Socials from './Socials'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='text-center flex flex-col items-center justify-between h-full'>
          <div className='flex flex-col items-center gap-y-[60px]'>
            <Logo />
            <NavLink
              hiddenProp=''
              className='flex flex-col gap-y-4 after:bg-[#fff] '
            />
          </div>
          <Socials />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
