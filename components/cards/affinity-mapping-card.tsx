type Props = {
    avatar: string
    comment: string
    color: string
    textColor: string
}
export default function AffinityMappingCard({ avatar, comment, color, textColor }: Props ) {
    return (
        <article className="text-center justify- min-h-[250px] items-center flex flex-col gap-4 p-4 py-8" style={{
            backgroundColor: color,
            color: textColor
        }} >
            <p className="font-semibold">
                {avatar}
            </p>
            <p >
                {comment}
            </p>
        </article>
    )
}