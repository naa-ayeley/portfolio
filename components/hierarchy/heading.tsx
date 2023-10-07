interface HeadingProps { 
    title: string;
    sub: string;
}
export default function Heading({ title, sub }: HeadingProps) {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-left text-3xl lg:text-5xl">{title}</h1>
            <div className="flex items-center gap-[2px] text-bluey">
                <div className="md:w-[52px] w-[42px] bg-bluey h-[1px]"></div>
                <p className="">{sub}</p>
            </div>
        </div>
    )
}