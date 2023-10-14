import { cn } from "@/lib/utils"

interface GradientColorCardProps {
    from: string
    via?: string
    to: string
    showFrom?: boolean
    showTo?: boolean
    showVia?: boolean
}

export default function GradientColorCard({ from, via, to, showFrom, showTo, showVia }: GradientColorCardProps) {
    const gradientText = via ? `linear-gradient(90deg, ${from} 0%, ${via && `${via} 50%,`} ${to} 100% ` : `linear-gradient(90deg, ${from} 0%, ${to} 100% `
    console.log(gradientText);
    
    return (
        <article  className="w-full md:w-[90%] mx-auto">
            <div style={{
            backgroundImage: gradientText
        }} className={cn(
                "h-[90px] rounded-[10px] w-full ",
            )}>
                
            </div>
            <div className="flex items-center gap-4 justify-between">
                <p>
                    {showFrom && from}
                </p>
                <p>
                    {showVia && via}
                </p>
                <p>
                    {showTo && to}
                </p>

            </div>
        </article>
    )
}