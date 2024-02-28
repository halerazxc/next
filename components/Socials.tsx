import Link from 'next/link'
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill
} from 'react-icons/ri'

const icons = [
  { src: '/', icon: <RiYoutubeFill /> },
  { src: '/', icon: <RiLinkedinFill /> },
  { src: '/', icon: <RiGithubFill /> },
  { src: '/', icon: <RiFacebookFill /> },
  { src: '/', icon: <RiInstagramFill /> }
]

const Socials = () => {
  return (
    <div className='flex items-center mx-auto xl:mx-0 text-xl gap-x-4'>
      {icons.map((link, index) => (
        <Link
          className='hover:text-primary transition-all duration-150'
          key={index}
          href={link.src}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
