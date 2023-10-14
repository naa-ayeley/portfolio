import { cn } from "@/lib/utils";

interface HeadingProps {
    title: string;
    sub: string;
    color?: "inventory" | "resto"
}
export default function Heading({ title, sub, color }: HeadingProps) {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-left text-3xl lg:text-5xl">{title}</h1>
            <div className={cn(
                "flex items-center gap-[2px] text-bluey",
                color === "inventory" && "text-inventory",
                color === "resto" && "text-resto"
            )}>
                <div className={cn(
                    "md:w-[52px] w-[42px] bg-bluey h-[1px]",
                    color === "inventory" && "bg-inventory",
                    color === "resto" && "bg-resto"
                )}></div>
                <p className="">{sub}</p>
            </div>
        </div>
    )
}