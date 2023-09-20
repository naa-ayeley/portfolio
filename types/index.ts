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