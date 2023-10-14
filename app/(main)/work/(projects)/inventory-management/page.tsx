import BlueLink from "@/components/blue-link";
import Heading from "@/components/hierarchy/heading";
import TabView from "@/components/tab-view";
import { PROJECT_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function InventoryManagementPage() {
    return (
        <>
            <section className="flex flex-col gap-4">
                <Heading
                    title="Inventory Management App"
                    sub="UI/UX Case Study"
                    color="inventory"
                />
                <p>
                    The Smartup retail inventory management app helps Ghanaian businesses plan, track and manage their daily operations. This solution has been split into two different apps: the control panel and the POS lite.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <BlueLink color="inventory" href={PROJECT_LINKS.inventory.prototype} label="View Prototype" />
                </div>
            </section>
            <section className=" w-full flex flex-col gap-4 md:mt-4">
                <div className="relative w-[80vw] h-[35vh]  md:w-[60vw] md:h-[60vh] mx-auto ">
                    <Image src='/images/mockups/inventory-showcase.svg' className="aspect-video" priority alt="thenga showcase" fill />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full pt-4" >
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-inventory font-medium">Role</p>
                    <p>
                        UI/UX Designer
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-inventory font-medium">Skills</p>
                    <p>
                    UX Design, UI Design, Prototyping, Low-fidelity wireframes, High-fidelity mockups and prototypes, Design system and UI kit
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-inventory font-medium">Team</p>
                    <p>
                        Designer: Naa Ayeley Ayettey <br />
                    </p>
                </article>
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-inventory font-medium">Duration</p>
                    <p>
                        5 weeks
                    </p>
                </article>
            </section>
            <TabView data="inventory" color="inventory" />
        </>
    )
}