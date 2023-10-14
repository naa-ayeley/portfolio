import TabView from "@/components/tab-view";

export default function ThengaWireframing() {
    return (
        <section className="flex py-8 flex-col gap-8 ">
            <p className="font-light">
                Based on the business and user goals, I swiftly put down all my ideas and joined the site&apos;s information architecture to visualise the potential of the product&apos;s interface using Figma. I then developed the initial low-fi wireframes into what I like to call &apos;&apos;My First Draft,&apos;&apos; which consisted of my early ideas and colour schemes. To perfect the design, I reviewed the draft repeatedly, making numerous iterations until I was satisfied with the final work. For the final draft of Thenga, the most significant change was the colour scheme. Through this iterative process, I produced a design that suited the product&apos;s requirements.
            </p>
           <TabView data="thenga-wireframe" />
        </section>
    )
}