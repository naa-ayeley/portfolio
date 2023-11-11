import React from 'react'
import Copy from './copy'
import Link from 'next/link'
import { BEHANCE_URL, LINKEDIN_URL, TWITTER_URL } from '@/lib/constants'
/* eslint-disable */
import { FaBehance, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { SlMouse } from 'react-icons/sl'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi2'

const PrimaryFooter = () => {
    return (
        <>
            <div className='md:min-h-[50vh] w-full flex flex-col gap-8 items-center justify-center p-8'>
                <div className='flex flex-col gap-3 md:gap-6 items-center text-center'>
                    <p className='md:text-xl text-sm'>
                        Not you scrolling to the bottom 😌,
                    </p>
                    <h1 className='md:text-5xl text-3xl'>
                        Thank you for your interest in my work.
                    </h1>
                    <p className=' md:text-base text-xs font-light'>If you would like to ask questions, collaborate, give feedback or discuss more, I&apos;m just a click away :) </p>
                    <div className='mx-auto text-bluey flex text-2xl md:text-3xl items-center gap-6'>
                        <Link className='' href={LINKEDIN_URL} >
                            <FaLinkedinIn />
                        </Link>
                        <Link className='' href={BEHANCE_URL} >
                            <FaBehance />
                        </Link>
                        <Link className='' href={TWITTER_URL} >
                            <FaTwitter />
                        </Link>
                    </div>
                </div>
                <a href="#" className='mt- flex flex-col gap-2 items-center justify-center'>
                    <div className='flex flex-col items-center rotate-180   justify-center  text-xl'>
                        <SlMouse className="text-2xl" />
                        <HiOutlineChevronDoubleDown  />
                    </div>
                    <p className='text-xs md:text-sm text-bluey font-light '>Back to the top</p>
                </a>
            </div>
            {/* <Copy /> */}
        </>
    )
}

export default PrimaryFooter