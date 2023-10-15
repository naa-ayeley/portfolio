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
        </section>
    )
}