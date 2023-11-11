import Image from "next/image";
import LineHeading from "@/components/hierarchy/line-heading";
import ImageZoom from "@/components/image-zoom";
import { restoData } from "@/lib/data";

export default function RestoEmpathizing() {
    return (
        <>
            <div className="aspect-square w-[150px] md:w-[170px] mx-auto relative ">
                <Image src='/images/mockups/resto-empath.svg' alt="empathising" fill className="" />
            </div>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Qualitative Research" />
                <p>
                    I interviewed seven potential users with different backgrounds to talk about restaurants and their booking processes, what challenges they faced and what they would like to see differently. With their permission, I took notes and recorded all the answers given during the interviews. This helped me analyze the feedback I received and gained an extensive understanding of customers and what they go through with restaurants and their booking systems.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_.5fr] max-w-6xl ">
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-xl">
                            Examples of questions i asked:
                        </p>
                        {
                            restoData.qualitativeResearch.questions.map((item, index) => (
                                <p key={index} className="flex items-center gap-2">
                                    <span className="bg-[#484A56] flex-shrink-0 aspect-square w-[10px] h-[10px] rounded-full">

                                    </span>
                                    {item}
                                </p>
                            ))
                        }
                    </div>
                    <div className="relative w-full aspect-[8/3] md:aspect-auto">
                        <Image src='/images/mockups/resto-research-question.svg' alt="empathising" fill className="aspect-square" />

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[.5fr_1fr] max-w-6xl ml-auto ">
                    <div className="relative w-full aspect-[8/3] md:aspect-auto">
                        <Image src='/images/mockups/resto-research-insight.svg' alt="empathising" fill className="aspect-square" />

                    </div>
                    <div className="flex flex-col gap-4 items-end">
                        <p className="font-semibold text-xl">
                            Key insights derived from interviews
                        </p>
                        {
                            restoData.qualitativeResearch.insights.map((item, index) => (
                                <p key={index} className="flex items-center text-right gap-2">
                                    {item}
                                    <span className="bg-[#484A56] flex-shrink-0 aspect-square w-[10px] h-[10px] rounded-full">

                                    </span>
                                </p>
                            ))
                        }
                    </div>

                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Quantitative Research" />
                <p>
                    I interviewed seven potential users with different backgrounds to talk about restaurants and their booking processes, what challenges they faced and what they would like to see differently. With their permission, I took notes and recorded all the answers given during the interviews. This helped me analyze the feedback I received and gained an extensive understanding of customers and what they go through with restaurants and their booking systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-8">
                    {
                        restoData.quantitativeResearch.map(({ title, img }, index) => (
                            <div key={index} className="flex flex-col text-center  p-4" >
                                <p className="font-semibold text-lg">
                                    {title}
                                </p>

                                <div className="xl:w-[550px] xl:[300px] w-full  mx-auto aspect-square relative">
                                    <Image src={`/images/mockups/${img}`} alt={title} fill className="object-fill" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading color="resto" title="Feedback Analysis" />
                <p>
                    After gathering all of the data from the research, i organised my findings by using colored sticky notes to observe similarities and recurring patterns.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 relative">
                    <ImageZoom src="/images/mockups/resto-obs.svg" alt='' />
                    <ImageZoom src="/images/mockups/resto-frus.svg" alt='' />
                    <ImageZoom src="/images/mockups/resto-want.svg" alt='' />
                    <ImageZoom src="/images/mockups/resto-take.svg" alt='' />
                </div>


            </section>
            <div className="min-h-[30vh]">
                <div className="w-full absolute    left-0">
                    <div className="relative">
                        <div className="md:bottom-0  absolute  left-0 ">
                            <Image width={150} height={400} src='/images/mockups/find.svg' alt="find" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}