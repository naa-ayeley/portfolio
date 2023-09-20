import { Personality } from '@/types'
import Image from 'next/image'
import React from 'react'

interface PersonalityCardProps {
    personality: Personality
}

const PersonalityCard = ({ personality }: PersonalityCardProps) => {
    const { title, desc, img, colspan } = personality
    return (
        <article className={`text-center flex flex-col w-full items-center   ${colspan && "md:col-span-2"}`}>
            <p className='text-bluey font-medium'>{title}</p>
            <div className='relative aspect-square w-[70px] md:w-[100px]'>
                <Image className='object-contain' src={img} alt={title} fill />
            </div>
            <p className='md:w-[90%] mt-4 font-light'>
                {desc}
            </p>
        </article>
    )
}

export default PersonalityCard