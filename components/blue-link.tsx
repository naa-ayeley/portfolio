import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BlueLinkProps {
    href: string
    label: string
}

const BlueLink = ({ href, label }: BlueLinkProps) => {
    return (
        <Link className='flex items-center text-bluey font-medium' href={href}>
            {label}
            <ChevronRight className='w-5 h-5' />
        </Link>
    )
}

export default BlueLink