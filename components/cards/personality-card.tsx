import { Personality } from '@/types'
import Image from 'next/image'
import React from 'react'

interface PersonalityCardProps {
    personality: Personality
}

const PersonalityCard = ({ personality }: PersonalityCardProps) => {
    const { title, desc, img, colspan } = personality
    return (
        <article className={`flex w-full items-center gap-4`}>
            <div className='relative aspect-square max-md:hidden min-w-[70px] md:w-[100px]'>
                <Image className='object-contain' src={img} alt={title} fill />
            </div>
            <div className='flex flex-col '>
                <p className='text-bluey font-medium'>{title}</p>
                <div className='relative md:hidden mt-4 aspect-square w-[70px] md:w-[100px]'>
                <Image className='object-contain' src={img} alt={title} fill />
            </div>
                <p className='md:w-[90%] mt-4 font-light'>
                    {desc}
                </p>
            </div>
        </article>
    )
}

export default PersonalityCard