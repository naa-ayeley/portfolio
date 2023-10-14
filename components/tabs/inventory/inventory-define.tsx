import ListItem from "@/components/hierarchy/list-item";
import ListItemBold from "@/components/hierarchy/list-item-bold";
import Subheading from "@/components/hierarchy/subheading";
import ImageZoom from "@/components/image-zoom";
import { inventoryGoals } from "@/lib/data";
import Image from "next/image";

export default function InventoryDefine() {
    return (
        <section className="flex py-8 flex-col gap-8">
            <p>
                One thing about me: I love to work on challenging projects, especially those new to me. The stress is definitely there, but the sheer determination to see a project through is stronger and always wins, and that&apos;s how we got here: the exciting task of transforming a desktop/web app into a functional mobile prototype. This experience highlighted the power of collaboration and the immense value in refining designs through iteration. My big takeaway was that design processes aren&apos;t linear; hence, it&apos;s essential to adopt an approach that is efficient for you and helps you get the work done. Amidst the challenges, two stood out to me: 1. simplifying information presentation to reduce cognitive load and prevent an overcrowded interface and 2. trying not to oversimplify the user experience and bore users. This experience was a tightrope, but I was glad to learn and improve my UX and UI skills.
            </p>
            <div className="flex flex-col gap-4">
                <Subheading label="Goals and objectives" color="inventory" />
                <p>
                    My task was to design a functional mobile app that helps users track inventory data and sales data, point of sale, manage staff members and view reports. The primary objective of this app is to provide users with unparalleled convenience, allowing them to interact with crucial inventory data and perform specific functions without being confined to a desktop environment. It was important to consider the needs and preferences of the business and its audience while designing to ensure both sides were happy and comfortable with the outcomes.
                </p>
                <div className="w-full ">
                    <Image alt="" className="mx-auto" src="/images/mockups/inventory-goals.svg" width={290} height={50} />
                </div>
                <div className="flex flex-col gap-4">
                    {
                        inventoryGoals.map((goal) => (
                            <ListItemBold key={goal.bold} bold={goal.bold} item={goal.item} />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Subheading label="Design Process" color="inventory" />
                <ImageZoom src="/images/mockups/inventory-design-process.svg" alt="" />
            </div>
            <div className=" flex flex-col md:flex-row md:items-start items-center gap-8">
                <article className="w-[170px] flex flex-col items-center justify-center">
                    <p className="text-center text-inventory text-sm">
                        Defining and Understanding
                    </p>
                    <Image src="/images/icons/search.svg" alt="search icon" width={25} height={25} className="aspect-square" />
                </article>
                <div className="flex flex-col gap-4 w-full ">
                    <ListItem item={`First things first, I had to familiarise myself with the main product and ground myself by understanding the current state in which it was in. It's an inventory management system, and a lot was going on, but I do love a challenge, so I applied more grease to my elbow 😉.`} />
                    <ListItem item={`It is also important to note that this is an already existing product with established ui/ux documents on research and personas that I had to understand and work with as well.`} />
                    <ListItem item={`The first challenge I faced was understanding the project requirements and how to apply them to my design. A consolidated list of project requirements consisting of technological limitations and expectations was sent to me by the project lead. My job was to transform a list of ideas and specifications into effective interaction designs—sounds fun, right?`} />

                    <div className="mx-auto max-w-3xl w-full mt-10 flex flex-col gap-4">
                        <ImageZoom alt="" src="/images/mockups/inventory-define-transform.svg" />
                        <p className="text-inventory text-center">
                            Main challenge: turn ideas and requirements into interactive designs
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col md:flex-row md:items-start items-center gap-8">
                <article className="w-[170px] flex flex-col items-center justify-center">
                    <p className="text-center text-[#00A16B] text-sm">
                        Developing ideas
                    </p>
                    <Image src="/images/icons/wrench.svg" alt="search icon" width={25} height={25} className="aspect-square" />
                </article>
                <div className="flex flex-col gap-4 w-full ">
                    <ListItem item={`After understanding and defining my project objectives, I had to determine how users would see the product (visuals), how users may act within the product (architecture and flows) and how users may perceive and engage with my design (user journeys).`} />

                    <ListItem item={`I began fleshing out the specifications with paper sketches, figuring out where to put different content and how to blend visual elements into the design to boost the overall experience (while developing my information architecture as well—sounds complex, but that's literally the job😭).`} />

                    <ListItem item={`To ensure my ideas didn't miss any marks, I shared my initial ideas with my technical lead to brainstorm further ideas and ask questions to help my wireframe design process. I did notice some conflicts between the business requirements and user needs and brought that up as well. Ultimately, I was confident enough in my sketches to develop them into digital wireframes. `} />

                    <div className="mx-auto max-w-3xl w-full mt-10 flex flex-col gap-4">
                        <ImageZoom alt="" src="/images/icons/inventory-sketch.svg" />
                        <p className="text-inventory text-center">
                            Emphasis on “rough” sketches💀
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col md:flex-row md:items-start items-center gap-8">
                <article className="w-[170px] flex flex-col items-center justify-center">
                    <p className="text-center text-inventory text-sm">
                        Visual clarity and direction
                    </p>
                    <Image src="/images/icons/layers.svg" alt="search icon" width={25} height={25} className="aspect-square" />
                </article>
                <div className="flex flex-col gap-4 w-full ">
                    <ListItem item={`Designing the wireframes was a challenge, and just like before, It also required a lot of iterations and research. I used ✨ Figma✨  to get into specific details, better spacing and alignment, and to add more clarity to my sketches. I also prototype key parts and interactions during this process because I find it very effective. (I like to see what I'm doing in real-time to validate the user experience.)`} />

                    <ListItem item={`I presented my wireframes to my technical lead and project lead to get validation on the general flow and placement of elements. I made sure to ask a lot of questions to make sure we were on the same page and requested modifications (this happened a couple of times) before the visual design phase started. `} />

                    <ListItem item={`Even though a product design doesn't have to be captivating to be effective, it is essential to make it as appealing as possible to lure the user to engage and stay engaged. As said before, this project already had an established UI/UX document containing the logo and colours. I used these two elements to create my own visual guide, which I used to develop the wireframes. I surfed the internet for some UI inspos until I found one I could work with, and voila! The visual design phase was complete. However, we will be iterating until the end time 🤣. `} />
                </div>
            </div>
        </section>
    )
}