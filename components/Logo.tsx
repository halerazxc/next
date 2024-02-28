import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <Image
          src='logo.svg'
          width={54}
          height={54}
          alt='logo'
          priority={true}
        />
      </Link>
    </div>
  )
}

export default Logo
