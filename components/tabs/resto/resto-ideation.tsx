import Image from "next/image";
import LineHeading from "@/components/hierarchy/line-heading";
import ImageZoom from "@/components/image-zoom";

export default function RestoIdeation() {
    return (
        <>
            <div className="aspect-square w-[150px] md:w-[170px] mx-auto relative ">
                <Image src='/images/mockups/resto-ideation.svg' alt="empathising" fill className="" />
            </div>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Information Architecture" />
                <p>
                    I created a structure for the Resto mobile app using an information architecture by laying out each individual screen to identify what users will need and can easily find.
                </p>

                <ImageZoom alt="" src="/images/mockups/resto-ia.svg" />

            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="User Flow" />
                <div className="flex flex-col gap-2">
                    <p className="flex items- gap-2">
                        <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                        </span>
                        All actions are in rounded rectangles.
                    </p>
                    <p className="flex items- gap-2">
                        <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                        </span>
                        All screens are in rectangles.
                    </p>
                    <p className="flex items- gap-2">
                        <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                        </span>
                        All decisions are in diamonds.
                    </p>
                    <p className="flex items- gap-2">
                        <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                        </span>
                        Each shape is connected by an arrow.
                    </p>
                </div>
               

                <ImageZoom alt="" src="/images/mockups/resto-uf.svg" />

                <div className="aspect-square w-[150px] md:w-[170px]  relative ">
                    <Image src='/images/mockups/carry.svg' alt="empathising" fill className="" />
                </div>
            </section>
        </>
    )
}