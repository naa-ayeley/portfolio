"use client";

import ScrollButton from "@/components/scroll-button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function InvBottom() {
    const pathname = usePathname();

    const isInventory = pathname === "/work/inventory-management";

    return !isInventory ? null : (
        <section className="w-full relative h-full">
            <section className="aspect-video   w-full h-full relative" >
                <Image src="/images/mockups/inv-is.png" className="aspect-video object-cover" alt="" fill />
            </section>
           
            {/* <div className="p-4 flex items-center justify-center mt-8 max-md:hidden">
                <ScrollButton />
            </div> */}
        </section>
    );
}