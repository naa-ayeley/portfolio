import { cn } from "@/lib/utils"

type Props = {
    title: string
    color?: "resto"
}

export default function LineHeading({ title, color }: Props) {
    return (
        <div className="flex items-end gap-2">
            <p className="md:text-[30px] md:leading-[36.5px] text-xl text-[#484A56] font-semibold">
                {title}
            </p>
            <div className={cn(
                "flex-1 w-full h-[2px] bg-[#6973A4] mb-2 rounded-lg",
                color === "resto" && "bg-resto"
            )} />
        </div>
    )
}