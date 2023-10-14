import { thengaWireframing } from "@/lib/data"
import ImageZoom from "@/components/image-zoom";
import Image from "next/image";
import { cn } from "@/lib/utils";


export default function WireframeView({ type }: { type: "web" | 'extension' }) {
    const view = thengaWireframing[type]

    return (
        <section className=" w-full h-full flex flex-col gap-8  py-8" >
            {
                view.map((item) => (
                    <div key={item.img} className={cn(
                        "flex flex-col-reverse gap-4 w-full lg:items-start",
                        type === "extension" ? "lg:flex-col-reverse" : "lg:flex-row"
                    )}>
                        <div className=" w-full">

                            <ImageZoom src={item.img} alt={item.alt} />
                        </div>
                        <div className={cn(
                            "w-full h-full max-lg:px-4   flex flex-col gap-4 ",
                            type === "web" ? "lg:translate-y-[20rem] lg:max-w-xs" : "lg:translate-y-0 mt-10 "
                        )}>
                            <div className="flex items-center">
                                <p className="font-medium text-3xl md:text-5xl">
                                    {item.title}
                                </p>
                                <Image src="/images/icons/bulb.svg" alt="" width={40} height={20} />
                            </div>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))
            }

           
        </section>
    )
}