import Link from 'next/link'
import React from 'react'

const navigateLink = [
  {
    id: '29',
    name: 'Home',
    src: '/'
  },
  {
    id: '3',
    name: 'Project',
    src: '/project'
  },
  {
    id: '19',
    name: 'Contact',
    src: '/contact'
  }
]

const NavLink = () => {
  return (
    <nav>
      {navigateLink.map(link => {
        return (
          <Link key={link.id} href={link.src}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavLink
