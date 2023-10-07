import BlueLink from "@/components/blue-link"
import Heading from "@/components/hierarchy/heading"
import TabView from "@/components/tab-view"
import { PROJECT_LINKS } from "@/lib/constants"
import Image from "next/image"



export default function ThengaPage() {
    return (
        <>
            <section className="flex flex-col gap-4" >
                <Heading
                    title="Thenga Website and Extension"
                    sub="Ui/Ux Case Study"
                />
                <p>
                    Thenga is a cool new way to shop online! It&apos;s a free service that connects Ghanaian shoppers with UK stores, making it easy to buy things from abroad. With Thenga, you can shop and make purchases effortlessly. Plus, you can use the Thenga website to learn more about the extension and keep track of your orders.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <BlueLink href={PROJECT_LINKS.thenga.web} label="View Website Prototype" />
                    <BlueLink href={PROJECT_LINKS.thenga.extension} label="View Extension Prototype" />
                </div>
            </section >
            <section className=" w-full flex flex-col gap-4 md:mt-4">
                <div className="relative w-[80vw] h-[35vh]  md:w-[60vw] md:h-[60vh] mx-auto ">
                    <Image src='/images/mockups/thenga-showcase.svg' className="aspect-video" priority alt="thenga showcase" fill />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full pt-4" >
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-bluey font-medium">Role</p>
                    <p>
                        UI/UX Designer
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-bluey font-medium">Skills</p>
                    <p>
                        UI Design UX Design, Wireframing, Research, Prototyping
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-bluey font-medium">Team</p>
                    <p>
                        Designer: Naa Ayeley Ayettey <br />
                        Developers: Nana Kojo Ewusie, Kwaku Boohene
                    </p>
                </article>
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-bluey font-medium">Duration</p>
                    <p>
                        2 months
                    </p>
                </article>
            </section>
            <TabView data="thenga" />

        </>
    )
}