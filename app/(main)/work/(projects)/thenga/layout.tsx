import { OWNER } from "@/lib/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Thenga | ${OWNER}`,
    icons: { icon: '/images/logos/favicon.ico' }

}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )

}