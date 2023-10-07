import ThengaPersonaCard from "@/components/cards/thenga-persona-card";
import Subheading from "@/components/hierarchy/subheading";
import ImageZoom from "@/components/image-zoom";
import { thengaUserPersonas } from "@/lib/data";
import Image from "next/image";

export default function ThengaUserPersonas() {
    return (
        <section className="flex py-8 flex-col gap-8">
            <p className="font-light">
                I created target audiences with different backgrounds to help me gain a better understanding of the problem we were solving. These personas are not specific individuals; they consist of a collection of views from different people from different places.
            </p>
            {
                thengaUserPersonas.map((persona) => (
                    <ThengaPersonaCard persona={persona} key={persona.avatar} />
                ))
            }

            <ImageZoom src="/images/mockups/melissa-journey.svg" alt="melissa journey" />
            <ImageZoom src="/images/mockups/norbet-journey.svg" alt="norbet journey" />

            <div className="flex flex-col gap-4">
                <Subheading label="Takeaways" />
                <div className="flex gap-3 items-start">
                    <Image src="/images/icons/bulb.svg" alt="bulb" width={40} height={40} className="aspect-square flex-shrink-0" />
                    <p>Designing a seamless experience that users are accustomed to and allowing them to exercise significant control over their actions encourages them to finish tasks quickly and efficiently with little to no pain points. </p>
                </div>
                <div className="flex gap-3 items-start">
                    <Image src="/images/icons/stars.svg" alt="bulb" width={40} height={40} className="aspect-square flex-shrink-0" />
                    <p>Even though the user may get confused during their journey, it boosts the general experience of the product. Designing an experience people are overly familiar with makes the experience monotonous. </p>
                </div>

            </div>

        </section>
    )
}