import { Navlink, Projects } from "@/types";

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

export const projects: Projects = {
    web: [
        {
            title: "Thenga Website",
            img: "/images/mockups/thenga-website.svg",
            preview: "https://www.figma.com/proto/tVN7l3qXcs5B2RcYfjIolc/PAYUP-WEB?page-id=0%3A1&node-id=58-2&viewport=523%2C-105%2C0.05&scaling=scale-down&starting-point-node-id=58%3A2&show-proto-sidebar=1&mode=design&t=XpdtTy1o8zIhQK64-1",
        },
        {
            title: "Thenga Extension",
            img: "/images/mockups/thenga-extension.svg",
            preview: "https://www.figma.com/proto/WCcVmgb3kWYU8SsjyE3WUI/Thenga?page-id=0%3A1&node-id=642-2077&viewport=383%2C794%2C0.1&scaling=contain&starting-point-node-id=642%3A2077&mode=design&t=exfBb4YdDgENi7Ih-1",
        },
        {
            title: "Pay Up Website",
            img: "/images/mockups/pay-up-website.svg",
            preview: "https://www.figma.com/proto/tVN7l3qXcs5B2RcYfjIolc/PAYUP-WEB?page-id=0%3A1&node-id=58-2&viewport=523%2C-105%2C0.05&scaling=scale-down&starting-point-node-id=58%3A2&show-proto-sidebar=1&mode=design&t=0zBD6egems62QBME-1",
        },
        {
            title: "Detosphere Website",
            img: "/images/mockups/detosphere-website.svg",
            preview: "https://detosphere.com/",
        },
        {
            title: "NCA Website",
            img: "/images/mockups/nca-website.svg",
            preview: "https://www.niicudjoeandassociatesgh.com/",
        },
        {
            title: "Astra Website",
            img: "/images/mockups/astra-website.svg",
            preview: "https://www.astragatewayintgh.com/",
        },
    ],
    mobile: [
        {
            title: "Chamber of Commerce Management System",
            img: "/images/mockups/cancham-mobile.svg",
            preview: "https://www.figma.com/proto/pAtYFmrgJHXImrrbBmoczJ/CANCHAM?page-id=0%3A1&node-id=34-490&viewport=478%2C298%2C0.1&scaling=scale-down&starting-point-node-id=2%3A9&mode=design&t=OWTuImAekOGawBm9-1",
            tags: ["UI/UX Design"]
        },
        {
            title: "Fundraising and Gift registry",
            img: "/images/mockups/gift-mobile.svg",
            preview: "https://www.figma.com/proto/h9ckwczIQ88i7DKSberTlZ/Host-Me-gh?page-id=0%3A1&node-id=1-4192&starting-point-node-id=1%3A4192&mode=design&t=Y5V012Nf416wiDra-1",
            tags: ["UI/UX Design"]
        },
    ],
    product: [
        {
            title: "Leads Management System",
            img: "/images/mockups/leads.svg",
            sub: "Usability Test Report",
            altTitle: "Leads Management",
            link: "/work/leads-management",
            tags: ["UI/UX Design", "Usability Testing" ]
        },
        {
            title: "Fundraising and Gift registry",
            img: "/images/mockups/gift-product.svg",
            link: "/work/seemini",
            altTitle: "Seemini Fundraising and Gift registry",
            sub: "UX Case Study",
            tags: ["UI/UX Design", "Usability Testing" ]
        },
    ],
    studies: [
        {
            title: "Thenga Website and Extension",
            img: "/images/mockups/thenga-case.svg",
            link: "/work/thenga",
            sub: "UI/UX Case Study",
            tags: ["UI/UX Design" ]
        },
        {
            title: "Resto Restaurant Booking & Pre-order",
            img: "/images/mockups/resto-case.svg",
            link: "/work/thenga",
            sub: "UI/UX Case Study",
            tags: ["User Research","UX Design", "Usability Testing" ]
        },
    ]
}