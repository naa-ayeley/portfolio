import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { getInitials } from "@/lib/utils"

export default function LeadsAvi({ name, index }: { name: string; index: number }) {
    return (
        <article className="flex flex-col justify-center items-center gap-2 text-center">
            <Avatar className="w-[135px] h-[135px]">
                <AvatarImage  src={`/images/avatars/leads/${index+1}.svg`} />
                <AvatarFallback>
                    {getInitials(name)}
                </AvatarFallback>
            </Avatar>
            <p className="font-bold">
                {name}
            </p>
        </article>
    )
}