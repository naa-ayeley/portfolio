import { Subheading } from "@/components/hierarchy";
import ImageZoom from "@/components/image-zoom";

export default function InventoryClarity() {
    return (
        <section className="flex py-8 flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Subheading label="Low-fi wireframes (selected frames)" color="inventory" />
                <p>
                    I used a week to create digital representations of my paper sketches with a few changes and add ons and another week to complete my modifications and complete my design.
                </p>
                <p>
                    However, The Smartup retail mobile app started of as two separate parts: one for store owners and managers (the control panel) and another for employees and managers (POS Lite). The screens below show the early ideas before combining everything into one app.
                </p>
                <ImageZoom alt="infotech-inventory" src="/images/mockups/inventory-lofi.svg" />
            </div>
            <div className="flex flex-col gap-4 mt-10">
                <Subheading label="Final Wireframes (selected frames)" color="inventory" />
                <p>
                    The screens below show the final ideas after combining the control panel and pos lite ideas into one app after two weeks of ideations and modifications. I picked the best design patterns and flows to create the final work.
                </p>
                <ImageZoom alt="infotech-inventory" src="/images/mockups/inventory-final.svg" />
            </div>
        </section >
    )
}