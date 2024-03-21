"use client"
import { navlinks } from '@/lib/data';
import { Navlink } from '@/types';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getInitials } from '@/lib/utils';
import { OWNER } from '@/lib/constants';
// eslint-disable-next-line 
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const pathname = usePathname()

    const closeMenu = (): void => {
        setShowMenu(false)
    }

    const openMenu = (): void => {
        setShowMenu(true)
    }


    const isActive = (href: string): boolean => {
        return pathname === href || pathname.startsWith(href)
    }

    return (
        <section className='w-full container max-sm:px-4 mx-auto sticky top-0 z-10 bg-white'>
            {/* Desktop */}
            <header className="py-4 md:flex hidden items-center gap-8 justify-between ">
                <Link className='flex items-center gap-4' href='/'>
                    <Image src="/images/logos/logo.svg" alt="Logo" width={50} height={40} />
                    <div className="flex flex-col gap-">
                        <p className='text-xl'>

                            {OWNER}
                        </p>
                        <p className='text-xs font-light'>
                            Creator . Manager. Marketer
                        </p>
                    </div>
                </Link>
                <nav className='flex items-center gap-6'>
                    {
                        navlinks.map((nav) => (
                            <div key={nav.href}>
                                {
                                    nav.sublinks ? (
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <button className={`${isActive(nav.href) && "bg-bluey/20 font-semibold px-6 py-1 rounded-sm"}`} >{nav.name}</button>
                                            </PopoverTrigger>
                                            <PopoverContent className='w-max flex flex-col p-2'>
                                                {
                                                    nav.sublinks.map((sublink) => (
                                                        <Sublink key={sublink.href} {...sublink} />
                                                    ))
                                                }
                                            </PopoverContent>
                                        </Popover>
                                    ) : (
                                        <Link className={`${isActive(nav.href) && "bg-bluey/20 font-semibold px-6 py-1 rounded-sm"}`} href={nav.href}>
                                            {nav.name}
                                        </Link>
                                    )
                                }
                            </div>
                        ))
                    }
                </nav>
            </header>
            {/* Mobile */}
            <header className='w-full  flex md:hidden items-center justify-between '>
                <Link href='/'>
                    <Avatar className='w-[50px] h-[50px]'>
                        <AvatarImage src="/images/logos/logo.svg" />
                        <AvatarFallback> {getInitials(OWNER)} </AvatarFallback>
                    </Avatar>
                </Link>

                <button className='text-3xl relative z-10' onClick={openMenu}>
                    <FiMenu />
                </button>

                <div className={`slide-menu hide-scroll bg-muted flex flex-col gap-8 items-center justify-center relative ${showMenu ? 'show' : 'hide'} `}>
                    <button className=' text-3xl absolute right-4  top-8 z-50  ' onClick={closeMenu}>
                        <FiX />
                    </button>
                    <nav className='flex w-full flex-col mt-4 gap-8 px-4'>
                        <Link href='/' className='mx-auto flex items-center gap-4 ' onClick={closeMenu}>
                            <Image src="/images/logos/logo.svg" alt="Logo" width={65} height={40} />
                            <div className="flex flex-col gap-1">
                                <p className='text-xl'>

                                    {OWNER}
                                </p>
                                <p className='text-xs font-light'>
                                Creator . Manager. Marketer
                                </p>
                            </div>
                        </Link>

                        <ul className='flex flex-col gap-4 w-full relative'>
                            {
                                navlinks.map((nav) => (
                                    <li className=' w-full' key={nav.href}>
                                        {
                                            nav.sublinks ? (
                                                <Accordion type="single" collapsible className="w-full px-4 decoration-transparent">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger className='montserrat'>{nav.name}</AccordionTrigger>
                                                        <AccordionContent className=''>
                                                            <div className='flex flex-col gap-2'>

                                                                {
                                                                    nav.sublinks.map((sublink) => (
                                                                        <Sublink key={sublink.href} {...sublink} />
                                                                    ))
                                                                }
                                                            </div>

                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            ) : (
                                                <div onClick={closeMenu} className={`py-2 px-4 ${isActive(nav.href) && "bg-bluey/20 font-semibold  w-full rounded-sm"}`} >
                                                    <Link href={nav.href}>
                                                        {nav.name}
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>
                </div>

            </header>
        </section>
    )
}

const Sublink = ({ name, href }: Navlink) => {

    return (
        <Link className='hover:bg-bluey/20 text-bluey px-4 rounded-lg py-2' href={href}>
            {name}
        </Link>
    )
}