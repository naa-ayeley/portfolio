import LineHeading from "@/components/hierarchy/line-heading";
import ImageZoom from "@/components/image-zoom";
import { restoData } from "@/lib/data";
import Image from "next/image";

export default function RestoOverview(){
    return (
        <>
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 py-4 mt-4">
                {

                    restoData.overview.map(({desc, img, title}) => (
                        <article key={title} className="flex flex-col text-center items-center gap-4">
                            <Image src={`/images/mockups/${img}`} alt={title} width={300} height={200} className="object-contain aspect-video" />
                            <p className="font-semibold text-lg">
                                {title}
                            </p>
                            <p>
                                {desc}
                            </p>
                        </article>
                    ))
                }
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading title="Design Process" color="resto" />
                <p>
                As a user experience designer for this project, I followed the design thinking process to creatively solve user problems by prioritizing user needs to design and improve the product.
                </p>
                <ImageZoom src="/images/mockups/resto-design-process.svg" alt="design process" />
            </section>
        </>
    )
}