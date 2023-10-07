import Breadcrumb from "@/components/breadcrumb"
import { OWNER } from "@/lib/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Projects | ${OWNER}`,
    icons: { icon: '/images/logos/favicon.ico' }

}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-8 py-8">
            <Breadcrumb />
            {children}
        </div>
    )

}