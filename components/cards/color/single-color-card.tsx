interface SingleColorCardProps {
    color: string
}

export default function SingleColorCard({ color }: SingleColorCardProps) {
    return (
        <article className=" overflow-hidden flex flex-col w-full gap-2 items-center justify-center" >
            <div style={{
                backgroundColor: color
            }} className="w-[220px] h-[148px]">

            </div>
            <p>
                {color}
            </p>
        </article>
    )
}