import Image from 'next/image'
import React from 'react'

interface devProps {
  className: string
  img: string
}

const DevImg = ({ className, img }: devProps) => {
  return (
    <div className={`${className}`}>
      <Image className='rounded-[60px]' src={img} fill priority alt='hero bg' />
    </div>
  )
}

export default DevImg
