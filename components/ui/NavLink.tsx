import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
  id: string
  name: string
  src: string
}

const NavLinkItem: React.FC<NavLinkProps> = ({ id, name, src }) => {
  return <Link href={src}>{name}</Link>
}

const NavLink = () => {
  const navigateLinks = [
    { id: '29', name: 'Home', src: '/' },
    { id: '3', name: 'Project', src: '/project' },
    { id: '19', name: 'Contact', src: '/contact' }
  ]

  return (
    <nav className='flex items-center gap-x-2 text-[16px]'>
      {navigateLinks.map(link => (
        <React.Fragment key={link.id}>
          <NavLinkItem {...link} />
        </React.Fragment>
      ))}
    </nav>
  )
}

export default NavLink
