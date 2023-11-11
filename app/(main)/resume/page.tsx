import React from 'react'
import Image from 'next/image'
import Heading from '@/components/hierarchy/heading'
import { experience } from '@/lib/data'
import BlueLink from '@/components/blue-link'
import { OWNER } from '@/lib/constants'

const Resume = () => {
    return (
        <section className='md:py-16 py-8 gap-16 grid grid-cols-1 md:grid-cols-2 min-h-[90vh]'>
            <div className='flex flex-col gap-10'>
                <Heading
                    sub='Experiences'
                    title='Work Experiences'
                />
                <div className='flex flex-col gap-10'>
                    {
                        experience.map((exp, i) => (
                            <div className='flex flex-col' key={i}>
                                <p className='text-sm lg:text-base font-light text-[#8C8C8C]'>
                                    {exp.company} | {exp.date}
                                </p>
                                <p className='font-medium text-xl lg:text-2xl'>
                                    {exp.role}
                                </p>
                            </div>
                        ))
                    }
                </div>

                <BlueLink href="/resume" label='View My Resume' />
            </div>
            <div className='h-full relative w-full ml-auto max-w-[90%] hidden md:flex items-start justify-start'>

                <div className='relative w-full  md:h-[70%] aspect-[9/16]'>
                    <Image src="/images/naa.svg" alt={OWNER} fill className='object-cover' />
                </div>
            </div>
        </section>
    )
}

export default Resume