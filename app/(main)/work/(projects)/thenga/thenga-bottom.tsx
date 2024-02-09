"use client"

import ScrollButton from "@/components/scroll-button"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function ThengaBottom() {
    const pathname = usePathname()

    const isThenga = pathname === "/work/thenga"

    return !isThenga ? null : (
        <section className="w-full relative h-full">
            <section className="aspect-video   w-full h-full relative" >
                    <Image src="/images/mockups/thenga-iso1.svg" className="aspect-video object-cover" alt="" fill />
            </section>
            <section className="aspect-square   w-full h-full relative" >
                    <Image src="/images/mockups/thenga-iso2.svg" className="aspect-video object-cover" alt="" fill />
            </section>
            <div className="p-4 flex items-center justify-center mt-8 max-md:hidden">
                <ScrollButton />
            </div>
        </section>
    )
}