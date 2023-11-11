import Image from "next/image";
import LineHeading from "@/components/hierarchy/line-heading";
import ImageZoom from "@/components/image-zoom";
import { restoData } from "@/lib/data";

export default function RestoTesting() {
    return (
        <>
            <div className="aspect-square w-[150px] md:w-[170px] mx-auto relative ">
                <Image src='/images/mockups/resto-testing.svg' alt="empathising" fill className="" />
            </div>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Usability Testing" />
                <p>
                    I performed both moderated and unmoderated usability study which included 5 participants with different backgrounds. Before going ahead with the final designs, I needed to figure out if users could easily go through the main user experience of finding, reserving and pre-ordering on the app. I also wanted to understand what specific challenges users might face during these processes and how I could fix them to suit their needs.
                </p>

                <div className="">
                    <p className="text-2xl font-semibold">Research Goal</p>
                    <p className="flex items- gap-2">
                        <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                        </span>
                        The goal of this research is to figure out if users can complete the core tasks within the app efficiently and whether or not they understand the interface and its processes
                    </p>
                </div>
                <div className="flex flex-wrap w-full justify-between gap-8 mt-8 ">

                    <div className=" flex flex-col gap-6">
                        <p className="text-2xl font-semibold">Research questions</p>
                        {
                            restoData.testing.questions.map((item, i) => (
                                <p key={i} className="flex items- gap-2">
                                    <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                                    </span>
                                    {item}
                                </p>
                            ))
                        }

                    </div>
                    <div className="aspect-square w-[150px] md:w-[170px]  relative ">
                        <Image src='/images/mockups/point.svg' alt="empathising" fill className="" />
                    </div>
                </div>
                <div className="mt-8 ">
                    <p className="text-2xl font-semibold">Participants</p>
                    <p className="flex items- gap-2">
                        With a total of 5 participants ,Three participants will complete the tasks independently, and two will be guided and given a questionnaire on their experience.
                    </p>
                </div>
                <div className="flex flex-wrap w-full justify-between mt-8 gap-8">

                    <div className=" flex flex-col gap-6">
                        <p className="text-2xl font-semibold">Who are they?</p>
                        {
                            restoData.testing.who.map((item, i) => (
                                <p key={i} className="flex items- gap-2">
                                    <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                                    </span>
                                    {item}
                                </p>
                            ))
                        }

                    </div>

                </div>
                <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {
                        restoData.testing.participants.map((item) => (
                            <div className="text-center flex flex-col gap-3" key={item}>
                                <p className="font-semibold">
                                    {item}
                                </p>
                                <div className="w-[80%] mx-auto relative aspect-square">
                                    <Image src={`/images/avatars/${item.toLowerCase()}.svg`} alt={item} fill />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Affinity Mapping" />
                <p>
                    Based on my finding, I created an affinity diagram and generated actionable insights from the data received
                </p>

                <ImageZoom alt="" src="/images/avatars/resto-am.svg" />

                <article className="border-[#40530E] min-h-[370px] flex flex-col px-4 md:px-8 gap-8 border bg-[#E5F0C8] py-8 w-full rounded-[45px]">
                    <p className="text-center text-xl font-semibold">Insights</p>
                    {
                        restoData.testing.insights.map((item, i) => (
                            <p key={i} className="flex items- gap-2">
                                <span className="bg-[#484A56] flex-shrink-0 mt-2 aspect-square w-[10px] h-[10px] rounded-full">

                                </span>
                                {item}
                            </p>
                        ))
                    }
                </article>

            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Implementing Feedback" />
                <p>
                    The feedback from the Usability test were considered and implemented.
                </p>

                <ImageZoom alt="" src="/images/avatars/resto-f1.svg" />
                <ImageZoom alt="" src="/images/avatars/resto-f2.svg" />



            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Next Steps" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="flex items-center flex-col justify-center gap-6 text-lg">
                        <Image src="/images/avatars/1.svg" alt="" width={50} height={50} />
                        <p>
                            UI and Visual design
                        </p>
                    </article>
                    <article className="flex items-center flex-col justify-center gap-6 text-lg">
                        <Image src="/images/avatars/2.svg" alt="" width={80} height={50} />
                        <p>
                        Mobile app development
                        </p>
                    </article>
                    <article className="flex items-center flex-col justify-center gap-6 text-lg">
                        <Image src="/images/avatars/3.svg" alt="" width={80} height={50} />
                        <p>
                        Product testing and feedback analysis
                        </p>
                    </article>
                </div>


            </section>
        </>
    )
}