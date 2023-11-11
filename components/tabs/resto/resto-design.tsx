import Image from "next/image";
import LineHeading from "@/components/hierarchy/line-heading";
import ImageZoom from "@/components/image-zoom";

export default function RestoDesign() {
    return (
        <>
            <div className="aspect-square w-[150px] md:w-[170px] mx-auto relative ">
                <Image src='/images/mockups/resto-design.svg' alt="empathising" fill className="" />
            </div>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Low-Fidelity Wireframes" />
                <p>
                    I created low-fidelity wireframes using Figma, so I could swiftly join the site&apos;s information architecture to display particular types of information on the user interface.
                </p>

                <ImageZoom alt="" src="/images/mockups/resto-lfw.svg" />

            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="High Fidelity Wireframes" />
                <p>
                    After creating low-fidelity prototypes and establishing the main ideas of the mobile app, I picked the best design patterns and created High-Fidelity wireframes. These wireframes represent a detailed representation of the Resto user interface, which I will use to conduct a research study.
                </p>

                <ImageZoom alt="" src="/images/mockups/resto-hfw.svg" />

            </section>
        </>
    )
}