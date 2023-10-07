export type Navlink = {
    name: string;
    href: string;
    sublinks?: Navlink[];
}

export type Tags = string[]

export type Project = {
    preview?: string
    title: string
    altTitle?: string
    sub?: string
    img: string
    link?: string
    tags?: Tags
}

export type Projects = {
    web: Project[]
    mobile: Project[]
    product: Project[]
    studies: Project[]
}

export type Personality = {
    title: string
    img: string
    desc: string
    colspan?: boolean
}

export type Experience = {
    company: string
    date: string
    role: string
}

export type Expertise = {
    icon: string
    title: string
    description: string
}

export type Testimonial = {
    name: string
    role: string
    test: string
}

export type ThengaUserPersona = {
    avatar: string
    name: string
    about: string
    age: string
    status: string
    profession: string
    hometown: string
    frustrations: string[]
    goals: string[]
}