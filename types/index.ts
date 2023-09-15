export type Navlink = {
    name: string;
    href: string;
    sublinks?: Navlink[];
}