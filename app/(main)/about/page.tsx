import BlueLink from '@/components/blue-link'
import PersonalityCard from '@/components/cards/personality-card'
import TestimonialCard from '@/components/cards/testimonial-card'
import Heading from '@/components/heading'
import { OWNER } from '@/lib/constants'
import { expertise, personality, testimonials } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
    return (
        <section className='py-16 flex flex-col gap-8 max-md:py-8'>
            <div className='flex flex-col gap-4'>
                <Heading
                    sub='About Me'
                    title={`Hi, I'm Ayeley 👋🏾`}
                />
                <p className='tracking-wide font-light'>
                    I am a versatile creative based in Accra. I am passionate about creating beautiful digital experiences for people, especially my community, to make lives easier. I love to find potential solutions to real problems because my goal is to help people, plus,  I enjoy seeing the effects brilliant digital products have on people and businesses. I spend most of my time learning and improving myself and my skills, and I aspire to be a multifaceted digital experience expert and design consultant / advisor.
                </p>
                <BlueLink href="/resume" label='View My Resume' />
            </div>
            <div className='grid grid-cols-3 gap-1 md:gap-4'>
                <div className='h-full relative w-full ml-auto max-w-[99%] flex items-start justify-start'>

                    <div className='relative w-full  md:h-[90%] aspect-[9/16]'>
                        <Image src="/images/naa.svg" alt={OWNER} fill className='object-cover' />
                    </div>
                </div>
                <div className='h-[90%] relative w-full ml-auto max-w-[99%] flex items-center justify-center'>

                    <div className='relative w-full  md:h-[80%] aspect-[9/16]'>
                        <Image src="/images/naa.svg" alt={OWNER} fill className='object-cover' />
                    </div>
                </div>
                <div className='h-full relative w-full ml-auto max-w-[99%] flex items-start justify-start'>

                    <div className='relative w-full  md:h-[90%] aspect-[9/16]'>
                        <Image src="/images/naa.svg" alt={OWNER} fill className='object-cover' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 md:gap-y-16 md:gap-x-8 md:grid-cols-2'>
                {
                    personality.map((pers) => (
                        <PersonalityCard key={pers.title} personality={pers} />
                    ))
                }
            </div>
            <div className='mt-8 flex flex-col gap-6'>
                <Heading
                    sub='Services'
                    title={`Areas of expertise`}
                />
                <p className='font-light'>
                    My key areas of expertise are in {" "}
                    <Link className='underline' href="https://www.interaction-design.org/literature/topics/ux-design">
                        User Experience Design (UXD),
                    </Link>
                    {" "}

                    <Link className='underline' href="https://www.interaction-design.org/literature/topics/ui-design">User Interface Design (UID)</Link>  ,

                    <Link className='underline' href="https://www.interaction-design.org/literature/article/what-is-interaction-design">Interaction Design (IXD)</Link> ,
                    {" "}
                    Product management and Digital Marketing for both web and mobile products. Below is a more granular breakdown of my skill-set and services.
                </p>
                <div className='flex flex-col gap-4'>
                    <p className='text-bluey font-medium'>
                        What i am good at (but not limited to)
                    </p>
                    <div className='flex flex-col gap-4'>
                        {
                            expertise.map((exp) => (
                                <div className='flex items-start gap-2' key={exp.title} >
                                    <div className='min-h-[40px] min-w-[40px]'>
                                        <Image src={exp.icon} alt={exp.title} width={30} height={40} className='h-auto object-contain' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='font-medium'>{exp.title}</p>
                                        <p className='font-light'>{exp.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-8'>
                <Heading
                    sub='Testimonials'
                    title={`Kind words from kind people`}
                />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-scroll '>
                    {
                        testimonials.map((test) => (
                            <TestimonialCard key={test.name} testimonial={test} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutPage