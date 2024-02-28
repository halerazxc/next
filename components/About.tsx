import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Phone
} from 'lucide-react'
import React from 'react'
import DevImg from './DevImg'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Ryan Davis'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+012 345 6789'
  },

  {
    icon: <MailIcon size={20} />,
    text: 'youremail@email.com'
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 10 Mar, 1998'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Master on Computer Science'
  },
  {
    icon: <HomeIcon size={20} />,
    text: '321 Blue Avenue, NY, USA'
  }
]

const skillData = []

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Example University',
        qualification: 'Bachelor of Science',
        years: '2015 - 2018'
      },
      {
        university: 'Another University',
        qualification: 'Master of Arts',
        years: '2019 - 2021'
      },
      {
        university: 'Yet Another University',
        qualification: 'Bachelor of Science',
        years: '2015 - 2018'
      }
    ]
  },
  {
    title: 'experience',
    data: [
      {
        university: 'ABC Inc.',
        qualification: 'SoftWare Engineer',
        years: '2015 - 2018'
      },
      {
        university: 'XYZ Corporation',
        qualification: 'Senior Engineer',
        years: '2015 - 2018'
      },
      {
        university: 'Tech Innovators',
        qualification: 'Lead Developer',
        years: '2022 - 2018'
      }
    ]
  }
]

const skillsData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS'
      },
      {
        name: 'Front-end Developer'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'HTML, CSS'
      },
      {
        name: 'HTML, CSS'
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg'
      },
      {
        imgPath: '/about/vscode.svg'
      },
      {
        imgPath: '/about/vscode.svg'
      },
      {
        imgPath: '/about/vscode.svg'
      },
      {
        imgPath: '/about/vscode.svg'
      }
    ]
  }
]

const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find(item => item.title === title)
  }
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container'>
        <h2 className='title-section text-center mb-8 xl:mb-16 mx-auto'>
          About Me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='hidden xl:flex flex-1 relative'>
            {/* img */}
            <DevImg
              img='/about/developer.png'
              className='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
            />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] '>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h4 className='h4 mb-4'>
                      Unmatched Service Quality for Over 18 Years
                    </h4>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting inuitive websites with
                      cutting-edge technoloy, delivering dynamic and engaging
                      user experience.
                    </p>
                    <div className='grid xl:grid-cols-2 gap-4 my-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, French, Spain, Italian</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='qualifications'>
                  <div>
                    <h4 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h4>
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      <div className=''>
                        <div className='flex gap-x-4 items-center text-[22px]'>
                          <Briefcase />
                          <h5 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h5>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (
                              item: {
                                university: string
                                qualification: string
                                years: string
                              },
                              index: number
                            ) => {
                              const { university, qualification, years } = item
                              return (
                                <div className='flex gap-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative mt-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='font-semibold text-lg text-muted-foreground leading-none mb-2'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                      <div className=''>
                        <div className='flex gap-x-4 items-center text-[22px]'>
                          <Briefcase />
                          <h5 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h5>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (
                              item: {
                                university: string
                                qualification: string
                                years: string
                              },
                              index: number
                            ) => {
                              const { university, qualification, years } = item
                              return (
                                <div className='flex gap-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative mt-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='font-semibold text-lg text-muted-foreground leading-none mb-2'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='skills'>skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
