"use client"
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BEHANCE_URL, LINKEDIN_URL, MAIL_URL, OWNER, TWITTER_URL } from '@/lib/constants'
/* eslint-disable */
import { FaBehance, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { getCurrentYear } from '@/lib/utils'
import { Copyright } from 'lucide-react'
import { IoMail } from 'react-icons/io5'
import Image from 'next/image'

const SecondaryFooter = () => {
  const pathname = usePathname()


  return (
    <footer className=' relative'>
      {/* <div className='absolute hidden md:block right-2 md:right-8 top-0 w-[130px] h-[100px] md:w-[200px] md:h-[100px]'>
        <Image src="/images/vectors/planets.svg" fill alt="planets" className='object-contain' />
      </div> */}
      <div className='md:min-h-[20vh] relative w-full flex flex-col items-center justify-center p-8'>
        <div className='flex flex-col gap-3 md:gap-6 items-center text-center'>

          <div className='mx-auto text-bluey flex text-2xl md:text-3xl items-center gap-6'>
            <Link className='' href={LINKEDIN_URL} >
              <FaLinkedinIn />
            </Link>
           
            <Link className='' href={TWITTER_URL} >
              <FaTwitter />
            </Link>
            <Link className='' href={BEHANCE_URL} >
              <FaBehance />
            </Link>
          </div>
        </div>
        <ul className='mt-4  max-md:text-xs flex   gap-x-4 '>
          <li className='flex items-center md:gap-2 w-full'>
            <Copyright className='w-3 h-3 text-zinc-600' />
            2022 {OWNER}
          </li>
          <li className=''>
            {MAIL_URL}
          </li>


        </ul>
      </div>
    </footer>
  )
}

export default SecondaryFooter