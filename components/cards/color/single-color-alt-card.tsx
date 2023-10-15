import { cn } from "@/lib/utils"

export interface ColorCardProps {
    hex: string
    title: string
    rowSpan: 1 | 2
    colSpan: 1 | 2
    textColor: string
}

export default function SingleColorAltCard({ colSpan, hex, title, rowSpan, textColor }: ColorCardProps) {
    const rowSpanCalc = rowSpan === 2 ? "md:row-span-2 h-[135px] md:h-[270px]" : "row-span-1 h-[135px]"
    const colSpanCalc = colSpan === 2 ? "md:col-span-2" : "col-span-1"

    return (
        <article
            style={{
            backgroundColor: hex,
            color: textColor
            }}
            className={`${rowSpanCalc} ${colSpanCalc} flex flex-col justify-between rounded-[10px] p-4 `}>
            <p className={cn(
                "md:ml-auto text-xl xl:text-2xl font-bold",
                colSpan === 1 && "md:text-center md:ml-0"
            )}>
                {title}
            </p>
            <p className="text-sm">
                Hex: {hex}
            </p>
        </article>
    )
}