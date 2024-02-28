import { Button } from './ui/button'

import { Download, Send } from 'lucide-react'
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine
} from 'react-icons/ri'

import Socials from './Socials'
import Image from 'next/image'
import Link from 'next/link'
import DevImg from './DevImg'
import Badge from './Badge'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 xl:pt-28 h-[84vh] bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none rounded-t-[5%] relative'>
      <div className='container '>
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
                <Button className='gap-x-2 rounded-[24px]'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button variant='secondary' className='gap-x-2 rounded-[24px]'>
                  Download CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            <Socials />
          </div>
          <div className='hidden xl:flex relative'>
            <Badge
              className='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountText=''
              badgeText='Years of experience'
              endCountNum={3}
            />
            <Badge
              className='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountText='K'
              badgeText='Finished Projects'
              endCountNum={6}
            />
            <Badge
              className='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountText='K'
              badgeText='Happy Clients'
              endCountNum={9}
            />
            <div className='bg-hero_shape_light bg-no-repeat dark:hero_shape_dark w-[500px] h-[500px]'>
              <DevImg
                className='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative'
                img='/hero/developer.png'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
        <RiArrowDownSLine className='text-3xl text-primary' />
      </div>
    </section>
  )
}

export default Hero
