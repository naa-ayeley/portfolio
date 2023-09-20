import { Testimonial } from '@/types'
import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

interface TestimonialCardProps {
    testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    const { name, role, test } = testimonial
    return (
        <article className='relative flex flex-col gap-2 shadow-sm test-shadow p-8 w-full '>
            <RiDoubleQuotesL className="text-[#5E9AF3]/20 text-5xl" />
            <p className='text-sm font-light'>
                {test}
                
            </p>
            <p className='mt-4'>
                {name} <br /> {role}
            </p>
            <RiDoubleQuotesR className="text-[#5E9AF3]/20 text-5xl ml-auto" />
        </article>
    )
}

export default TestimonialCard