"use client"
import React, { useEffect, useState } from 'react'
import Copy from './footers/copy'
import PrimaryFooter from './footers/primary'
import SecondaryFooter from './footers/secondary'
import { usePathname } from 'next/navigation'

interface FooterProps {
    view: "copy" | "primary" | "secondary"
}

const FooterViews = {
    copy: Copy,
    primary: PrimaryFooter,
    secondary: SecondaryFooter

}

const Footer = () => {
    const [view, setView] = useState<FooterProps["view"]>("copy")
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === "/") {
            setView("primary")
        } else if (pathname === "/about" || pathname === "/resume") {
            setView("secondary")
        } else {
            setView("copy")
        }
        
    }, [pathname]);
    const CurrentView = FooterViews[view]

    return (
        <>
            <CurrentView />
        </>
    )
}

export default Footer