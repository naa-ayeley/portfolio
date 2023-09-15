"use client"
import { navlinks } from '@/lib/data';
import { Navlink } from '@/types';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function Navbar() {
    const pathname = usePathname()
    console.log(pathname);

    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(href)
    }

    return (
        <section className='w-full'>
            {/* Desktop */}
            <header className="p-4 flex items-center gap-8 justify-between ">
                <Link href='/'>
                    <Image src="/images/logos/logo.svg" alt="Logo" width={190} height={40} />
                </Link>
                <nav className='flex items-center gap-6'>
                    {
                        navlinks.map((nav) => (
                            <div key={nav.href}>
                                {
                                    nav.sublinks ? (
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <button className={`${!isActive(nav.href) && "bg-bluey/20 font-semibold px-6 py-1 rounded-sm"}`} >{nav.name}</button>
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
                                        <Link href={nav.href}>
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
        </section>
    )
}

const Sublink = ({ name, href } : Navlink) => {
    return (
        <Link className='hover:bg-bluey/20 text-bluey px-4 rounded-lg py-2' href={href}>
            {name}
        </Link>
    )
}