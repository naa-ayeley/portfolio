"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Breadcrumb() {
    const pathname = usePathname()
    const paths = pathname.split("/")
    const lastPath = paths[-1]
    const isResto = lastPath === "resto-restaurant"
    const isInventory = lastPath === "inventory-management"

    
    
    return (
        <div className='flex  md:text-sm items-center font-medium gap-3'>
            {
                paths.map((path, i) => (
                    <Link href={i + 1 === paths.length ? pathname : `/${path}`} className={cn(
                        `capitalize flex items-center gap-3 ${i + 1 === paths.length && !isResto && !isInventory && "text-bluey"}`,
                        i + 1 === paths.length && isResto && "text-resto",
                        i + 1 === paths.length && isInventory && "text-inventory",

                    )} key={i}>
                        {path === "" ? "Home" : path.replace("-", " ")} {i+1 !== paths.length && <span> / </span>}
                    </Link>
                ))
            }
        </div>
    )
}