import SingleColorAltCard, { ColorCardProps } from "@/components/cards/color/single-color-alt-card";
import { Subheading } from "@/components/hierarchy";
import Image from "next/image";


const palette: ColorCardProps[] = [
    {
        hex: "#8778f7",
        textColor: "#fff",
        rowSpan: 2,
        colSpan: 2,
        title: "Primary",
    },
    {
        hex: "#00A16B",
        textColor: "#fff",
        rowSpan: 2,
        colSpan: 2,
        title: "Primary",
    },
    {
        hex: "#C8C8F8",
        textColor: "#6958E8",
        rowSpan: 2,
        colSpan: 1,
        title: "Secondary",
    },
    {
        hex: "#C7F4CE",
        textColor: "#00A16B",
        rowSpan: 2,
        colSpan: 1,
        title: "Secondary",
    },
    {
        hex: "#E7E7E7",
        textColor: "#6C6C6C",
        rowSpan: 2,
        colSpan: 1,
        title: "Grey",
    },
    // next
    {
        hex: "#181C42",
        textColor: "#FFFFFF",
        rowSpan: 1,
        colSpan: 2,
        title: "Dark",
    },
    {
        hex: "#FFFFFF",
        textColor: "#796DEB",
        rowSpan: 1,
        colSpan: 2,
        title: "White",
    },
    {
        hex: "#505480",
        textColor: "#fff",
        rowSpan: 1,
        colSpan: 2,
        title: "Secondary",
    },
    {
        hex: "#F5D8D8",
        textColor: "#CC3C3C",
        rowSpan: 1,
        colSpan: 1,
        title: "Secondary",
    },
]

export default function InventoryStyle() {
    return (
        <section className="flex py-8 flex-col gap-8" >
            <div className="flex flex-col gap-4">
                <Subheading label="Style Guide" color="inventory" />
                <p>
                    I was inspired by the design system for the desktop & web app to create my style guide for the mobile app to deliver a clear and consistent design solution. Predominantly purple and green screens would provide a sense of calm and control; simple button states and clear iconography would help make tasks feel manageable and easy to use.
                </p>

            </div>
            <div className="flex flex-col gap-4 mt-10">
                <p className="text-lg font-medium">Color Palette</p>
                <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                    {
                        palette.map((item) => (
                            <SingleColorAltCard key={item.hex} {...item} />
                        ))
                    }
                    <div className="relative col-span-2 w-full  h-[320px] overflow-hidden rounded-[10px]">
                        <Image className="object-fill  rounded-[10px]" alt="gradient design 1" src="/images/mockups/inventory-gradient-1.svg" fill />
                    </div>
                    <div className="relative col-span-2 w-full overflow-hidden rounded-[10px] h-[320px]">
                        <Image className="object-fill" alt="gradient design 2" src="/images/mockups/inventory-gradient-2.svg" fill />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
                <p className="text-lg font-medium">Logo</p>
                <div className="w-full gap-4 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
                    <div className="relative w-full overflow-hidden rounded-[10px] h-[200px]">
                        <Image className="object-contain" alt="gradient design 2" src="/images/logos/original.svg" fill />
                    </div>
                    <div className="relative w-full overflow-hidden rounded-[10px] h-[200px]">
                        <Image className="object-contain" alt="gradient design 2" src="/images/logos/variant1.svg" fill />
                    </div>
                    <div className="relative w-full overflow-hidden rounded-[10px] h-[200px]">
                        <Image className="object-contain" alt="gradient design 2" src="/images/logos/variant2.svg" fill />
                    </div>
                </div>
                <div className=" w-full gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="flex flex-col md:col-span-2 gap-4">
                        <div className="flex items-center gap-4">
                            <Image src="/images/logos/original-sm.svg" alt="smartup logo" width={70} height={70} className="aspect-square" />
                            <article className="inventory-shadow gap-4 w-full bg-white flex items-center rounded-[20px] p-4">
                                <Image src="/images/logos/original-sm.svg" alt="smartup logo" width={70} height={70} className="aspect-square" />
                                <div className="flex flex-col inter gap-">
                                    <div className="flex gap-4 items-center justify-between">
                                        <p className="font-medium text-black">
                                        Smartup Retail Inventory 
                                        </p>
                                        <p className="text-xs text-neutral-400">
                                           3m ago 
                                        </p>
                                    </div>
                                    <p className="text-sm">
                                    Track your inventory, sales, staff and more with your Smartup retail inventory management app.
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/images/logos/variant-sm.svg" alt="smartup logo" width={70} height={70} className="aspect-square" />
                            <article className="inventory-shadow gap-4 w-full bg-white flex items-center rounded-[20px] p-4">
                                <Image src="/images/logos/variant-sm.svg" alt="smartup logo" width={70} height={70} className="aspect-square" />
                                <div className="flex flex-col inter gap-">
                                    <div className="flex gap-4 items-center justify-between">
                                        <p className="font-medium text-black">
                                        Transfer Requests
                                        </p>
                                        <p className="text-xs text-neutral-400">
                                           3m ago 
                                        </p>
                                    </div>
                                    <p className="text-sm">
                                    You have a transfer request from Agbogba branch. Open your app to accept or decline.
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/images/logos/variant2-sm.svg" alt="smartup logo" width={70} height={70} className="aspect-square" />
                            <article className="inventory-shadow gap-4 w-full bg-white flex items-center rounded-[20px] p-4">
                                <Image src="/images/logos/variant2-sm.svg" alt="smartup logo" width={70} height={70} className="aspect-square" />
                                <div className="flex flex-col inter gap-">
                                    <div className="flex gap-4 items-center justify-between">
                                        <p className="font-medium text-black">
                                        Transfer Requests 
                                        </p>
                                        <p className="text-xs text-neutral-400">
                                           3m ago 
                                        </p>
                                    </div>
                                    <p className="text-sm">
                                    You still have pending transfer requests from Agbogba branch. Open your app to accept or decline.
                                    </p>
                                </div>
                            </article>
                        </div>

                    </div>
                    <div className="w-full   relative aspect-[9/16]">
                    <Image src="/images/mockups/inv-notif.svg" alt="smartup logo" fill className="phone" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
                <p className="text-lg font-medium">Typography</p>
                
                <div className=" w-full  max-w-screen  items-center albert min-h-[100px] max-h-[120px] gap-4 overflow-hidden  absolute left-0 mt-10 leading-[120px] text-[50px] md:text-[80px] lg:text-[100px] font-light">
                    <span className=" text-[#d9d9d9] mr-8">
                        bert Sans
                    </span>

                    <span>

                    Albert Sans
                    </span> 
                    
                    <span className="  text-[#d9d9d9] ml-8 ">
                        Albert Sans
                    </span>
                    
                   
                </div>
                <div className="min-h-[120px]">
                    
                </div>
                <p>
                The choice of &apos;Albert Sans&apos; was deliberate and driven by my desire to achieve a clean, modern, and legible design that fits perfectly with the project&apos;s objectives. I wanted to use a font that was modern, versatile and legible across various screen sizes and resolutions while also creating a sense of professionalism. Ialso avoided the use of absolute blacks to prevent eye strains.
                </p>

                <p className="">

                </p>
            </div>
        </section>
    )
}