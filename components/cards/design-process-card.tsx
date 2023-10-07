import { FiEdit3, FiFileMinus, FiLayers, FiTool } from "react-icons/fi"

const items = {
    strategy: {
        icon: FiEdit3,
        bgColor: "rgba(74, 182, 205, 0.12)",
        textColor: "rgba(74, 182, 205, 1)",
        text: "Strategy"
    },
    scope: {
        icon: FiFileMinus,
        bgColor: "rgba(108, 91, 205, 0.12)",
        textColor: "rgba(108, 91, 205, 1)",
        text: "Scope"
    },
    structure: {
        icon: FiTool,
        bgColor: "rgba(38, 192, 107, 0.12)",
        textColor: "rgba(38, 192, 107, 1)",
        text: "Structure"
    },
    skeleton: {
        icon: FiLayers,
        bgColor: "rgba(245, 183, 2, 0.12)",
        textColor: "rgba(245, 183, 2, 1)",
        text: "Skeleton & Surface"
    },

}

export default function DesignProcessCard({ variant }: { variant: "strategy" | "scope" | "structure" | "skeleton" }) {
    const views = items[variant]
    const { icon: Icon} = views
    return (
        <article style={{
            backgroundColor: views.bgColor,
            color: views.textColor
        }} className="max-h-[175px] rounded-full p-8 flex-shrink-0 max-w-[175px] flex flex-col items-center justify-center gap-2 h-[175px] w-[175px]">
            <p className="text-center">
                {views.text}
            </p>
            <Icon className="text-2xl" />
        </article>
    )
}