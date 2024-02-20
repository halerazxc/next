'use client'

import Link from 'next/link'
import React from 'react'
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
    <Link
      href={src}
      className={`nav-link ${isActive ? ' text-[#884dee]' : ''}`}
    >
      {name}
    </Link>
  )
}

const NavLink = ({ hiddenProp }: { hiddenProp: string }) => {
  const navigateLinks = [
    { id: '29', name: 'Home', src: '/' },
    { id: '3', name: 'Project', src: '/project' },
    { id: '19', name: 'Contact', src: '/contact' }
  ]

  return (
    <nav className={`flex items-center gap-x-4 text-[16px] ${hiddenProp}`}>
      {navigateLinks.map(link => (
        <React.Fragment key={link.id}>
          <NavLinkItem {...link} />
        </React.Fragment>
      ))}
    </nav>
  )
}

export default NavLink
