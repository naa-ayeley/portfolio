import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlueLinkProps {
    href: string
    label: string
    color?: "resto" | "inventory"
}

const BlueLink = ({ href, label, color }: BlueLinkProps) => {
    return (
        <Link className={cn(
            'flex items-center text-bluey font-medium',
            color === "inventory" && "text-inventory",
            color === "resto" && "text-resto"
        )} href={href}>
            {label}
            <ChevronRight className='w-5 h-5' />
        </Link>
    )
}

export default BlueLink