"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Breadcrumb() {
    const pathname = usePathname()
    const paths = pathname.split("/")
    
    
    return (
        <div className='flex  md:text-sm items-center font-medium gap-3'>
            {
                paths.map((path, i) => (
                    <Link href={i+1 === paths.length ? pathname : `/${path}`}  className={`capitalize flex items-center gap-3 ${i+1 === paths.length && "text-bluey"}`} key={i}>
                        {path === "" ? "Home" : path.replace("-", " ")} {i+1 !== paths.length && <span> / </span>}
                    </Link>
                ))
            }
        </div>
    )
}