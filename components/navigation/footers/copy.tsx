import React from 'react'
/* eslint-disable */
import { Copyright } from 'lucide-react'
import { getCurrentYear } from '@/lib/utils'
import { BEHANCE_URL, LINKEDIN_URL, MAIL_URL, OWNER, TWITTER_URL } from '@/lib/constants'
import Link from 'next/link'
import { FaLinkedinIn, FaBehance, FaTwitter } from 'react-icons/fa6'

const Copy = () => {
  return (
    <footer className='bg-[#DDEBFF] max-md:text-sm py-4 flex items-center justify-center w-screen' >
      <ul className='grid md:grid-cols-3 max-md:text-center gap-x-8 gap-y-4'>
        <li className='max-md:text-center'>
          {MAIL_URL}
        </li>
        <li className='flex items-center gap-2'>
          <Copyright className='w-4 h-4 text-zinc-600' />
          {getCurrentYear()} {OWNER}
        </li>
        <li className='flex text-lg items-center justify-center gap-4'>
          <Link className='' href={LINKEDIN_URL} >
            <FaLinkedinIn />
          </Link>
          <Link className='' href={BEHANCE_URL} >
            <FaBehance />
          </Link>
          <Link className='' href={TWITTER_URL} >
            <FaTwitter />
          </Link>

        </li>
      </ul>
    </footer>
  )
}

export default Copy