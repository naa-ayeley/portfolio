import Image from "next/image";
import LineHeading from "@/components/hierarchy/line-heading";
import ImageZoom from "@/components/image-zoom";
import { restoData } from "@/lib/data";

export default function RestoDefining() {
    return (
        <>
            <div className="aspect-square w-[150px] md:w-[170px] mx-auto relative ">
                <Image src='/images/mockups/resto-defining.svg' alt="empathising" fill className="" />
            </div>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Empathy Maps" />
                <p>
                    I created aggregated empathy maps to understand users further and to illustrate their thoughts, motivations, emotions, and behaviours. This enabled me to create possible solutions and user stories that helped me easily determine how the platform could meet their needs.
                </p>

                <ImageZoom alt="" src="/images/mockups/resto-em-1.svg" />
                <ImageZoom alt="" src="/images/mockups/resto-em-2.svg" />

                <div className="aspect-square w-[150px] md:w-[170px] mx-auto relative ">
                    <Image src='/images/mockups/read.svg' alt="empathising" fill className="" />
                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Personas" />
                <p>
                    With the data collected from the interviews and survey, I created three personas whose responses represent that of a larger group of users.
                </p>

                <ImageZoom alt="" src="/images/mockups/resto-p1.svg" />
                <ImageZoom alt="" src="/images/mockups/resto-p2.svg" />
                <ImageZoom alt="" src="/images/mockups/resto-p3.svg" />


            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Pain Points" />
                <div className="flex items-center justify-center flex-wrap gap-8">
                    {
                        restoData.painPoints.map(({ title, desc }, index) => (
                            <article key={index} className="bg-[#D7E9A7] p-4 py-8 h-[120px] w-[300px] md:w-[390px] flex flex-col items-center justify-center text-center">
                                <p className="font-semibold">
                                    {title}
                                </p>
                                <p>
                                    {desc}
                                </p>
                            </article>
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Problem Statements" />
                <div className="flex flex-col  gap-4">
                    {
                        restoData.problems.map((item, index) => (
                            <p key={index} className="flex items- gap-2">
                            <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                            </span>
                            {item}
                        </p>
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="User Stories" />
                <div className="flex flex-col  gap-4">
                    {
                        restoData.userStories.map((item, index) => (
                            <p key={index} className="flex items- gap-2">
                            <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                            </span>
                            {item}
                        </p>
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Journey Maps" />
                <p>
                I created a user journey map and flow to visualize the user&apos;s experience using the app.
                </p>

                <ImageZoom alt="" src="/images/mockups/resto-jm.svg" />

                <div className="aspect-square w-[150px] md:w-[170px] mx-auto relative ">
                    <Image src='/images/mockups/find2.svg' alt="empathising" fill className="" />
                </div>
                
            </section>
        </>
    )
}