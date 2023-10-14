import ThengaBackground from "@/components/tabs/thenga/thenga-background";
import ThengaInfotecture from "@/components/tabs/thenga/thenga-infotecture";
import ThengaUserFlow from "@/components/tabs/thenga/thenga-user-flow";
import ThengaUserPersonas from "@/components/tabs/thenga/thenga-user-personas";
import ThengaWebWireframing from "@/components/tabs/thenga/wireframing/thenga-web-wireframing";
import ThengaExtensionWireframing from "@/components/tabs/thenga/wireframing/thenga-extension-wireframing";
import ThengaWireframing from "@/components/tabs/thenga/wireframing/thenga-wireframing";
import { Experience, Expertise, Navlink, Personality, Projects, Testimonial, ThengaUserPersona } from "@/types";

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
            link: "/work/resto-restaurant",
            sub: "UI/UX Case Study",
            tags: ["User Research","UX Design", "Usability Testing" ]
        },
    ]
}

export const experience: Experience[] = [
    {
        company: "Detosphere Limited",
        role: "Product Designer",
        date: "Oct 2022 - Present"
    },
    {
        company: "Pay Up Limited",
        role: "Design & Marketing",
        date: "Mar 2021 - Present"
    },
    {
        company: "Rent Ease (startup)",
        role: "Design Lead",
        date: "Jan 2022 - April 2022"
    },
    {
        company: "Stanbic Bank",
        role: "Marketing Assistant (National Service)",
        date: "Oct 2020 - Jul 2021"
    },
    {
        company: "Stanbic Bank",
        role: "Marketing and Communications (Intern)",
        date: "July 2018 - Aug 2018"
    },
]

export const personality: Personality[] = [
    {
        title: "The Aquarius",
        img: "/images/vectors/aquarius.svg",
        desc: "I am a high achiever who can direct my strong instincts and incredible energy into doing meaningful work. I am driven, ambitious and eager to acquire results with my great work ethic and innate skills."
    },
    {
        title: "The creative visionary",
        img: "/images/vectors/creative.svg",
        desc: "I am very particular and detail oriented about content. Envisioning the possibility of things and using my creativity to make them happen in ways that I can is what I do for a living."
    },
    {
        title: "The Empath",
        img: "/images/vectors/empath.svg",
        desc: "I am empathetic towards the experiences and feelings of others outside my perspective. I advocate for social justice and believe in education geared towards emancipation from abuse, poverty, inequality, gender roles, and injustices aimed at discrimination, especially against women.",
        colspan: true
    },
]

export const expertise: Expertise[] = [
    {
        icon: "/images/icons/evaluative.svg",
        title: "Evaluative",
        description: "Market & User Research, Competitive Analysis, User Interviews, Surveys, Heuristic Evaluation, Usability Testing & Evaluation, UX Audits"
    },
    {
        icon: "/images/icons/generative.svg",
        title: "Generative",
        description: `Empathy Mapping, Personas, Storyboarding, Affinity Mapping, Wireframing and iteration, Journey Mapping, Low and high fidelity prototyping`
    },
    {
        icon: "/images/icons/design.svg",
        title: "Design",
        description: `Design Thinking, UI/UX Design, Visual Design and style guides, Interaction Design, Product Design, System Design, Service Design, Design Consultation`
    },
    {
        icon: "/images/icons/management.svg",
        title: "Management",
        description: `Product Management & strategy, Social Media Management, Web Content Management, Digital Marketing and Branding/Brand Strategy, Social Media and SEO, Copy and Content Writing`
    },
]

export const testimonials: Testimonial[] = [
    {
        name: "Ummul-Khair Zurak",
        role: "Software Developer",
        test: `She has a solid understanding of design principles and is eager to learn and stay updated. She is also very receptive to feedback and willing to incorporate suggestions into her designs.`
    },
    {
        name: "M.Afadzinu, Exec.Head Brand &",
        role: "Marketing- Stanbic Bank Ghana",
        test: `I can certainly affirm that Naa Ayeley is an excellent prospect, and I have enjoyed the privilege of a front row as she has blossomed both academically and professionally.`
    },
    {
        name: "Nana Yaw Kunale",
        role: "Chief Technical Officer, Detosphere",
        test: `I love working with Naa. She's an amazing person first and a capable UI/UX Designer with impeccable work ethic. She may also, every once in a while, give you a protein bar or yoghurt :)  `
    },
]

export const tabViews = {
    thenga: [
        {
            label: "Background",
            value: "background",
            render: <ThengaBackground />
        },
        {
            label: "User Personas & Journeys",
            value: "user-personas",
            render: <ThengaUserPersonas />
    
        },
        {
            label: "Information Architecture",
            value: "info-arch",
            render: <ThengaInfotecture />
    
        },
        {
            label: "User Flow",
            value: "user-flow",
            render: <ThengaUserFlow />
    
        },
        {
            label: "Wireframing",
            value: "wireframing",
            render: <ThengaWireframing />
    
        },
        {
            label: "Style Guide",
            value: "style-guide",
            render: <></>
    
        },
    ],
    seemini: [

    ],
    resto: [

    ],
    "thenga-wireframe": [
        {
            label: "Website Wireframes",
            value: "website-wireframes",
            render: <ThengaWebWireframing />
        },
        {
            label: "Extension Wireframes",
            value: "extension-wireframes",
            render: <ThengaExtensionWireframing />
        },
    ]
}

export const thengaWireframing = {
    web: [
        {
            title: "Lo-fi",
            desc: `
            These Lo-fi prototypes are just quick and simple versions of the final product. They were used to explore the possibilities of core functionalities, user flows and UI placements.`,
            img: '/images/mockups/thenga-web-lofi.svg',
            alt: "thenga web wireframing lofi"
        },
        {
            title: "Visual ideation",
            desc: `These Hi-fi prototypes are also quick and simple visual representations of my ideas. I focused more on exploring a variety of UI elements and placements to develop a cohesive and robust interface that meets user needs. AKA, my first draft.`,
            img: '/images/mockups/thenga-web-hifi.svg',
            alt: "thenga web wireframing hifi"
        }
    ],
    extension: [
        {
            title: "Lo-fi",
            desc: `These Lo-fi prototypes are just quick and simple versions of the final product. They were used to explore the possibilities of core functionalities, user flows and UI placements.`,
            img: '/images/mockups/thenga-extension-lofi.svg',
            alt: "thenga extension wireframing lofi"
        },
        {
            title: "Visual ideation",
            desc: `These Hi-fi prototypes are also quick and simple visual representations of my ideas. I focused more on exploring a variety of UI elements and placements to develop a cohesive and robust interface that meets user needs. AKA, my first draft.`,
            img: '/images/mockups/thenga-extension-hifi.svg',
            alt: "thenga extension wireframing hifi"
        },
    ]
}

export const thengaUserPersonas: ThengaUserPersona[] = [
    {
        avatar: "/melissa.svg",
        name: "Melissa",
        about: "Melissa is a University of law student currently residing in Spintex, Accra. She is very reserved and loves to bake. Melissa is always ready to try new and exciting things and is a frequent online shopper who loves purchasing clothes, shoes and appliances to try new baking recipes. She usually shops on Instagram, Jumia and online shopping websites like Fashionova and PLT. She finds online shopping in Ghana pretty challenging but believes it could get better.",
        age: "23",
        status: "Single",
        profession: "Student/Model",
        hometown: "Togo",
        frustrations: [
            "I usually cannot pay with my mobile money on online shopping sites",
            "Scam pages who request for payment before delivery ",
            "Sometimes what I order is not what I receive.",
            "Finding a page to buy items is frustrating enough to close the app."
        ],
        goals: [
            "Needs a platform with a variety of payment options",
            "To spend less time looking for an item to buy",
            "Honest Vendors",
            "Helpful Customer Service"
        ]
    },
    {
        avatar: "/norbet.svg",
        name: "Norbet",
        about: "Norbet is a Project Manager who enjoys working very much. He is dedicated to his family and work and enjoys spending the weekends with his friends. Norbet doesn't frequently shop unless necessary; however, he does try to shop from authentic sites. He doesn't use Instagram, Facebook etc, to shop because he doesn't believe in the authenticity of the products, and he feels they are overpriced. He also has no time to visit physical shops if he isn't shopping for groceries and finds it hard when looking for specific items like electronics in these stores.",
        age: "34",
        status: "Single",
        profession: "Project Manager",
        hometown: "Ho",
        frustrations: [
            "Shipping costs and time",
            "I usually can't track my order, or the order tracking isn't updated ",
            "Lots of miscommunications",
            "A lot of these vendors are not honest with the products they sell"
        ],
        goals: [
            "Real-time shopping experience, e.g. direct communication with vendors, tracking orders, text messages or notifications on orders and delivery. I also want to be able to make bulk purchases.",
            "Frequently updated websites/Shopping portals",
        ]
    },
]