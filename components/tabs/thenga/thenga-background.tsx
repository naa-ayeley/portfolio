import DesignProcessCard from "@/components/cards/design-process-card";
import ListItem from "@/components/hierarchy/list-item";
import Subheading from "@/components/hierarchy/subheading";

const challenges = [
    "Few payment options or no mobile money payment options while shopping",
    "Scam pages and dishonest vendors",
    "Shipping costs and time.",
    "Delivery issues eg. miscommunication and poor customer service"
]

const goals = [
    "The goal is to design a product that makes shopping easier for Ghanaians and allows various payment options, including mobile money payment options.",
    "The goal is to design a visually engaging interface with focus of functionality and task completion",
    "The goal is to reduce the issue of scamming by allowing customers to shop from authentic websites without worrying about dishonesty.",
    "The goal is to assist with simple and effective shipping and delivery that provides efficient communication and customer service."
]

export default function ThengaBackground() {
    return (
        <section className="flex py-8 flex-col gap-8">
            <p className="font-light">
                When I was presented with the Thenga concept, I knew immediately that it was a project I would be passionate about. The idea of making e-shopping accessible and simple for Ghanaians was intriguing to me, even though it&apos;s not something I personally engage in regularly. I was excited to take on the challenge of designing a solution that would work for many people. Before the redesign, the Thenga product was quite hard to understand. It had many steps and processes that made the product quite unpleasant to use. After some discussions and brainstorming sessions, my team and I developed a new Thenga flow with distinctive features that maintained the goal of the product and made it way better to navigate while promoting accessibility. One of my favourite things about the new design is its functionality - I wanted to make sure it was super simple for people to use without any trouble. It was an exciting journey for me and a bold step into the world of product design. I learned a lot, improved my skill, and achieved things I didn&apos;t know I could.
            </p>

            <div className="flex flex-col gap-4">
                <Subheading label="Design Process" />
                <div className=" flex flex-col md:flex-row md:items-center gap-8">
                    <DesignProcessCard variant="strategy" />
                    <p className="text-left">
                        My task was to redesign the Thenga product, which at the time, was just a website. But after strategising with my team, determining what we wanted to build and who it was for, we decided to split the product into two parts. This stage was essential because it allowed me to improve the user experience and create a more streamlined process for shoppers.
                    </p>
                </div>
                <div className=" flex flex-col md:flex-row md:items-center gap-8">
                    <DesignProcessCard variant="scope" />
                    <p className="text-left">
                        Through our discussions and brainstorming sessions, we were able to come up with a unique and innovative approach to the redesign that I believe will significantly benefit many people. We explored what features and functions were within our scope and iterated until we decided what was best. We chose to go big or go home.
                    </p>
                </div>
                <div className=" flex flex-col md:flex-row md:items-center gap-8">
                    <DesignProcessCard variant="structure" />
                    <p className="text-left">
                        As a designer, The goal for the redesign was to merge aesthetics with functionality to create a simple and logical digital experience that anybody can use. I organised all the ideas into more concrete elements using different structures, i.e. user journey map, information architecture, and user flows, to define how users will get to specific information and where they can go next.
                    </p>
                </div>
                <div className=" flex flex-col md:flex-row md:items-center gap-8">
                    <DesignProcessCard variant="skeleton" />
                    <p className="text-left">
                        Lastly, I put my ideas together to create low and high-fidelity prototypes to visualise the flow of the product, if the features work, and how it will look to the user. I made several iterations before the final design to ensure efficiency and ease of use.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4" >
                <Subheading label="Challenges" />
                <ul className="flex flex-col gap-2">
                    {
                        challenges.map((c, i) => (
                            <ListItem key={i} item={c} />
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-col gap-4" >
                <Subheading label="Goals" />
                <ul className="flex flex-col gap-2">
                    {
                        goals.map((c, i) => (
                            <ListItem key={i} item={c} />
                        ))
                    }
                </ul>
            </div>

        </section>
    )
}