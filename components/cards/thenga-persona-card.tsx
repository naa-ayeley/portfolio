import { ThengaUserPersona } from "@/types";
import Image from "next/image";
import ListItem from "../hierarchy/list-item";

export default function ThengaPersonaCard({ persona }: { persona: ThengaUserPersona }) {
    return (
        <article className="bg-[#F2F3FD] flex flex-col gap-4 p-4 lg:p-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="aspect-square relative w-[250px] h-[250px]">
                    <Image src={`/images/avatars${persona.avatar}`} alt={persona.name} fill className="" />
                </div>
                <div className="flex flex-col gap-4 w-full max-w-2xl">
                    <p className="font-semibold text-2xl">{persona.name}</p>
                    <p>
                        {persona.about}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4 ">
                        <p className="font-semibold">
                            Age: {" "}
                            <span className="font-normal">{persona.age}</span>
                        </p>
                        <p className="font-semibold">
                            Status: {" "}
                            <span className="font-normal">{persona.status}</span>
                        </p>
                        <p className="font-semibold">
                            Profession: {" "}
                            <span className="font-normal">{persona.profession}</span>
                        </p>
                        <p className="font-semibold">
                            Hometown: {" "}
                            <span className="font-normal">{persona.hometown}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full grid gap-8 lg:grid-cols-[1fr_.75fr]">
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-xl px-4">
                        Frustrations
                    </p>
                    <div className="flex flex-col gap-2">
                        {
                            persona.frustrations.map((f, i) => (
                                <ListItem key={i} item={f} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-xl px-4">
                        Goals
                    </p>
                    <div className="flex flex-col gap-2">
                        {
                            persona.goals.map((f, i) => (
                                <ListItem key={i} item={f} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}