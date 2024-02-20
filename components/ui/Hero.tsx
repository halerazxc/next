import { Button } from './button'

import { Download, Send } from 'lucide-react'
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine
} from 'react-icons/ri'

import { Badge } from './badge'
import Socials from './Socials'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 xl:pt-28 h-[84vh] bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none rounded-t-[5%]'>
      <div className='container'>
        <div className='flex justify-between  gap-x-8 '>
          <div className='flex flex-col gap-y-4 max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left'>
            <h1 className='h1'>Web Developer</h1>
            <h2 className='h2'>Hello, my name is Artyom</h2>
            <h3 className='h3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              natus pariatur earum rerum laboriosam aspernatur quo, commodi
              libero quos explicabo deleniti velit dicta doloremque accusamus?
            </h3>
            <div className='flex flex-col md:flex-row gap-4 mx-auto xl:mx-0 mb-6'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button variant='secondary' className='gap-x-2'>
                  Download CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            <Socials />
          </div>
          <div className='hidden xl:flex'>
            <Image
              src='/hero/sticker.webp'
              width={300}
              height={230}
              alt='hero bg'
            />
          </div>
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}

export default Hero
