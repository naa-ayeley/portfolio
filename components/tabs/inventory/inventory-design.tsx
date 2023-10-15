import BlueLink from "@/components/blue-link";
import { Subheading } from "@/components/hierarchy";
import ImageZoom from "@/components/image-zoom";
import { PROJECT_LINKS } from "@/lib/constants";

export default function InventoryDesign() {
    return (
        <section className="flex py-8 flex-col gap-8">
            <div className="flex flex-col gap-4">
            <Subheading label="Approved Design" color="inventory" />
                <p>
                As a budding UX professional, my expertise lies in structuring and organizing digital content and interactions to ensure my ideas are organised into key sections and functionalities.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <BlueLink color="inventory" href={PROJECT_LINKS.inventory.prototype} label="View Prototype" />
                </div>
            </div>
                        <ImageZoom src="/images/mockups/inventory-approved.svg" alt="" />
            
        </section >
    )
}