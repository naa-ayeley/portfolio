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
    <footer className='bg-[#DDEBFF] relative'>
      <div className='absolute right-2 md:right-8 top-0 w-[130px] h-[100px] md:w-[300px] md:h-[250px]'>
        <Image src="/images/vectors/planets.svg" fill alt="planets" className='object-contain' />
      </div>
      <div className='md:min-h-[40vh] relative w-full flex flex-col items-center justify-center p-8'>
        <div className='flex flex-col gap-3 md:gap-6 items-center text-center'>

          <h1 className='md:text-4xl text-3xl'>
            Thank you for your interest in my work.
          </h1>
          <p className=' md:text-base text-xs font-light'>Reach out and let&apos;s talk design. </p>
          <div className='mx-auto text-bluey flex text-2xl md:text-3xl items-center gap-6'>
            {
              pathname === "/about" ?
                <Link className='' href={LINKEDIN_URL} >
                  <FaLinkedinIn />
                </Link> : <Link className='' href={`mailto:${MAIL_URL}`} >
                  <IoMail />
                </Link>
            }
            <Link className='' href={BEHANCE_URL} >
              <FaBehance />
            </Link>
            <Link className='' href={TWITTER_URL} >
              <FaTwitter />
            </Link>
          </div>
        </div>
        <ul className='mt-4 grid max-md:text-sm md:grid-cols-2 max-md:text-center gap-x-8 gap-y-4'>
          <li className='flex items-center gap-2'>
            <Copyright className='w-4 h-4 text-zinc-600' />
            {getCurrentYear()} {OWNER}
          </li>
          <li className='max-md:text-center'>
            {MAIL_URL}
          </li>


        </ul>
      </div>
    </footer>
  )
}

export default SecondaryFooter