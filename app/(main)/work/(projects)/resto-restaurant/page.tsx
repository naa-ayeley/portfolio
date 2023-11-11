import BlueLink from "@/components/blue-link"
import { Heading } from "@/components/hierarchy"
import { OWNER, PROJECT_LINKS } from "@/lib/constants"
import { Metadata } from "next"
import Image from "next/image"
import TabView from "@/components/tab-view"


export const metadata: Metadata = {
    title: `Resto Restaurant | ${OWNER}`,
    icons: { icon: '/images/logos/favicon.ico' }

}

export default function RestoRestaurantPage() {
    return (
        <>
            <section className="flex flex-col gap-4" >
                <Heading
                    title="Resto Restaurant Booking & Pre-order"
                    sub="Ui/Ux Case Study"
                    color="resto"
                />
                <p>
                Resto is a platform that portrays accurate restaurant information (menus, prices, location, contact details etc.), allows users to make reservations in their favourite restaurants and pre-order meals before heading to the restaurant.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <BlueLink color="resto" href={PROJECT_LINKS.resto.prototype} label="View Prototype" />
                </div>
            </section >
            <section className=" w-full flex flex-col gap-4 md:mt-4">
                <div className="relative w-[80vw] h-[35vh]  md:w-[50vw] md:h-[50vh] mx-auto ">
                    <Image src='/images/mockups/resto-showcase.svg' className="aspect-square md:object-cover" priority alt="thenga showcase" fill />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full pt-4" >
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-resto font-medium">Role</p>
                    <p>
                        UX Designer
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-resto font-medium">Skills</p>
                    <p>
                    User research, Ux Design, Usability Testing, Wireframing, Prototyping
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-resto font-medium">Team</p>
                    <p>
                        Designer: Naa Ayeley Ayettey & <br />
                        AJ Mensah
                    </p>
                </article>
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-resto font-medium">Duration</p>
                    <p>
                        3 weeks
                    </p>
                </article>
            </section>
            <TabView color="resto" data="resto" />
            
        </>
    )
}