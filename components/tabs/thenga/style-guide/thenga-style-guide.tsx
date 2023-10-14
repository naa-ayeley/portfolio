import TabView from "@/components/tab-view";

export default function ThengaStyleGuide() {
    return (
        <section className="flex py-8 flex-col gap-8 ">
            <p className="font-light">
                My goal for the product&apos;s interface was to achieve a clean and polished end design using warm, appealing colours, vibrant components and illustrations, all working together seamlessly to deliver an ideal interface.
                I wanted to drive users to view information and complete tasks while maintaining consistency throughout the design. I created a comprehensive style guide encompassing the colour palette, typography, button states, iconography, and more. This guide is a reference point to ensure that the design remains consistent and coherent.
            </p>
            <TabView data="thenga-style" />
        </section>
    )
}