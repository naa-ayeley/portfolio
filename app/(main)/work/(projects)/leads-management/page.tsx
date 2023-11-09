import LeadsAvi from "@/components/avatar/leads-avi"
import BlueLink from "@/components/blue-link"
import AffinityMappingCard from "@/components/cards/affinity-mapping-card"
import { Heading } from "@/components/hierarchy"
import LineHeading from "@/components/hierarchy/line-heading"
import ImageZoom from "@/components/image-zoom"
import { OWNER, PROJECT_LINKS } from "@/lib/constants"
import { affinityMapping, leadsAvatars, leadsParticipants, leadsResearch, leadsScript, leadsSummary } from "@/lib/data"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: `Leads Management | ${OWNER}`,
    icons: { icon: '/images/logos/favicon.ico' }

}

type LeadsList = {
    item: {
        title: string
        description: string
    }[]
}

type LeadsGrid = {
    item: {
        avatar: string
        comment: string
    }[]
    color: string
    title: string
}

function List({ item }: LeadsList) {
    return (
        <div className="flex flex-col gap-8 ">
            {
                item.map(({ title, description }, index) => (
                    <p key={index}>
                        <span className="font-semibold mr-2">
                            {title}
                        </span>
                        {description}
                    </p>
                ))
            }
        </div>
    )
}

function Grid({ item, color, title }: LeadsGrid) {
    return (
        <div className="w-full gap-4">
            <p className="text-[#6973A4] font-medium">
                {title}
            </p>
            <div className="border-b-[2px] border-[#d4d4d4]" />
            <div className="grid w-full mt-4 grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {
                    item.map(({ avatar, comment }, i) => (
                        <AffinityMappingCard key={i} avatar={avatar} comment={comment} color={color} />
                    ))
                    }
            </div>
        </div>
    )
}

export default function LeadsManagementPage() {
    return (
        <main className="flex flex-col gap-10">
            <section className="flex flex-col gap-4">
                <Heading
                    title="Leads Management System"
                    sub="Usability Test Report"
                />
                <p>
                    Leads is a management platform for business, marketing and sales teams. This product aims to assist with collecting and tracking prospects&apos; data.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <BlueLink href={PROJECT_LINKS.leads.prototype} label="View Prototype" />
                </div>
            </section>
            <section className=" w-full flex flex-col gap-4 md:mt-4">
                <div className="relative w-[80vw] h-[35vh]  md:w-[60vw] md:h-[60vh] mx-auto ">
                    <Image src='/images/mockups/leads-mock.svg' className="aspect-video" priority alt="thenga showcase" fill />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full pt-4" >
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-bluey font-medium">Role</p>
                    <p>
                        Product Designer
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-bluey font-medium">Skills</p>
                    <p>
                        UI Design, UX Design, Wireframing, Usability Testing, Prototyping
                    </p>
                </article>
                <article className="flex flex-col col-span-1 lg:col-span-2  gap-2">
                    <p className="text-bluey font-medium">Team</p>
                    <p>
                        Designer: Naa Ayeley Ayettey <br />
                        Developer: Nutifafa Afi Attor
                    </p>
                </article>
                <article className="flex flex-col col-span-1 gap-2">
                    <p className="text-bluey font-medium">Duration</p>
                    <p>
                        4 weeks
                    </p>
                </article>
            </section>
            <section className="flex flex-col gap-4">
                <LineHeading title="Introduction" />
                <p className="font-light">
                    Leads is a software solution designed to help businesses organise and manage their sales leads throughout the customer acquisition process. It typically includes tools for capturing, storing and tracking interactions with potential customers and analysing the data received to help sales and marketing teams make informed decisions.
                    The system allows businesses to streamline their sales processes, increase efficiency, improve lead conversion rates, and ultimately boost customer relations.
                </p>
            </section>
            <section className="flex flex-col gap-4">
                <LineHeading title="Project Background" />
                <p className="font-light">
                    We&apos;re creating Leads to help marketing and sales teams easily access prospect data from one place. Before proceeding with the final designs, I must determine if the product is comprehensible and beneficial to users. I would also like to understand what specific challenges users might face while using the Leads prototype and how I can combat these issues before building it.
                </p>
            </section>
            <section className="flex flex-col gap-4">
                <LineHeading title="Summary Background" />
                <p className="font-light">
                    I conducted an informal moderated usability study with 6 participants from 18th April to 28th April 2023. This test aimed to determine if users can complete the core tasks within the product efficiently and whether or not they understand the interface and its processes.
                    Each session lasted approximately 5-7 minutes. Participants were given the same tasks to complete and questions to answer. All participants generally found the product user-friendly, easy to navigate and straightforward.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-4">
                    {
                        leadsSummary.map((item, index) => (
                            <article className="flex w-full gap-4 flex-col" key={index}>
                                <div className="relative w-full aspect-video">
                                    <ImageZoom alt={item} src={`/images/mockups/leads-table-${index + 1}.svg`} />
                                </div>
                                <p className="text-center">
                                    {item}
                                </p>
                            </article>
                        ))
                    }
                </div>

                <div className="mt-8">
                    <p>
                        The test identified only a few minor problems, including: <br />
                        <span className="font-semibold">
                            · Modals
                        </span>
                        - the idea of modals seemed fitting but will not be practical in real-time. <br />
                        <span className="font-semibold">
                            · Color choices
                        </span>
                        - some colours were hard to see. <br />
                        <span className="font-semibold">
                            · Usability
                        </span>
                        - some buttons weren&apos;t working. <br />
                        <span className="font-semibold">
                            · Responsiveness
                        </span>
                        - some participants wanted the prototype to be more responsive. <br />
                        <span className="font-semibold">
                            · Representation-
                        </span>
                        provision of more than two avatars for representation. <br />
                        <span className="font-semibold">
                            · Inclusivity
                        </span>
                        - some users wondered how easy the product would be for people who are not business, marketing or sales inclined.
                    </p>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <LineHeading title="Methodology" />
                <div className="flex flex-col gap-4">
                    <p>
                        <span className="font-semibold"> a) </span>
                        A moderated Usability study with a total of 6 participants with backgrounds in business, sales and marketing. Participants were asked to perform tasks in a high-fidelity prototype. Each session lasted between 5-7 minutes.
                    </p>
                    <p>
                        <span className="font-semibold"> b) </span>
                        During the session, participants completed a list of tasks independently but were guided if needed. Questions were asked after every task was performed. In the end, a usability scale questionnaire of 10 questions was sent to participants to complete.
                    </p>
                    <p>
                        <span className="font-semibold"> c) </span>
                        Participants who could not be on a call completed a list of tasks independently with no guide. However, they were required to answer questions into detail after every task was performed through a survey. In the end, a usability scale questionnaire of 10 questions was sent to participants to complete.
                    </p>
                    <p>
                        <span className="font-semibold"> d) </span>
                        The usability scale questionnaire was used to measure the perceived usability of Leads. Participants were asked to score ten items with one of five responses that range from Strongly Agree to Strongly Disagree. Participants were assured that there were no right or wrong answers and that every feedback counts.
                    </p>

                </div>
            </section>
            <section className="flex flex-col gap-4">
                <LineHeading title="Key performance indicators (KPIs)" />
                <p>
                    I chose to use the <span className="font-semibold"> System Usability Scale and Conversion Rate KPIs</span>  to translate the success factors of my usability test into actual figures because they&apos;re close to my research goals. I used a standardised questionnaire to measure my product&apos;s perceived usability. I asked participants to score ten items with one of five responses that range from Strongly Agree to Strongly Disagree. Participants were assured that there were no right or wrong answers and that every feedback counts.
                </p>
                <div className="flex flex-col gap-4">
                    <p>
                        <span className="font-semibold"> a) Conversion Rate</span>
                        - Participants that completed desired actions during the test.
                    </p>
                    <p>
                        <span className="font-semibold"> b) System Usability Scale</span>
                        - How easy the app is for the user through the use of a questionnaire.
                    </p>


                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading title="Script" />
                <p>
                    I prepared a short and simple script which contained a set of pre-defined tasks participants followed. Participants were not informed on how many tasks they were completing because I didn&apos;t want to overwhelm or underwhelm them before the test started. Participants completed their tasks independently, and I only spoke when help was needed or when it was time to give a new task during the test.
                </p>
                <List item={leadsScript} />

            </section>
            <section className="flex flex-col gap-8">
                <LineHeading title="Research questions" />
                <p>
                    To sum up the data collection, I asked a few questions at the end of the session to gather information on the product&apos;s overall effectiveness, observations and commentary in relation to the goals of each task. I allowed participants to speak their minds and express themselves freely.
                </p>
                <List item={leadsResearch} />

            </section>
            <section className="flex flex-col gap-8">
                <LineHeading title="Participants" />
                <List item={leadsParticipants} />
                <div className="grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6 ">
                    {
                        leadsAvatars.map((data, index) => (
                            <LeadsAvi key={index} name={data} index={index} />
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col gap-8">
                <LineHeading title="Affinity Mapping" />
                <p>
                    After the test, i compiled and summarised the data collected and used the card sorting method to group my insights and build effectively toward next steps.
                </p>
                <Grid item={affinityMapping.challenges} title="Challenges" color="#ABC9FB" />
                <Grid item={affinityMapping.comments} title="Comments" color="#6287D9" />
                <Grid item={affinityMapping.reccomendations} title="Recommendations" color="#637BA4" />
            </section>
        </main>
    )
}