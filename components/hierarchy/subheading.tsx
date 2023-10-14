import { cn } from "@/lib/utils";

export default function Subheading({ label, color }: { label: string; color?: "inventory" | "resto" }) {
    return (
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
            <p className="">{label}</p>
        </div>
    )
}