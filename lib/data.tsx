import { Navlink } from "@/types";

export const navlinks: Navlink[] = [
    {
        name: "Work",
        href: "/work",
        sublinks: [
            {
                name: "Web Designs",
                href: "/work#web-designs"
            },
            {
                name: "Mobile Designs",
                href: "/work#mobile-designs"
            },
            {
                name: "Product Designs",
                href: "/work#product-designs"
            },
            {
                name: "Case Studies",
                href: "/work#case-studies"
            },
        ]
    }, 
    {
        name: "Resume",
        href: "/resume",
    },
    {
        name: "About",
        href: "/about",
    }
]