'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  id: string
  name: string
  src: string
}

const NavLinkItem = ({ id, name, src }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === src

  return (
    <Link href={src} className={`${isActive ? 'text-primary' : 'nav-link'}`}>
      {name}
    </Link>
  )
}

const NavLink = ({
  hiddenProp,
  className
}: {
  hiddenProp: string
  className: string
}) => {
  const navigateLinks = [
    { id: '29', name: 'Home', src: '/' },
    { id: '3', name: 'Project', src: '/project' },
    { id: '19', name: 'Contact', src: '/contact' }
  ]

  return (
    <nav className={`${className} ${hiddenProp}`}>
      {navigateLinks.map(link => (
        <NavLinkItem key={link.id} {...link} />
      ))}
    </nav>
  )
}

export default NavLink
