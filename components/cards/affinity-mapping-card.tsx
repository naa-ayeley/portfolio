type Props = {
    avatar: string
    comment: string
    color: string
}
export default function AffinityMappingCard({ avatar, comment, color }: Props ) {
    return (
        <article className="text-center justify- min-h-[250px] items-center flex flex-col gap-4 p-4 py-8"  style={{ backgroundColor: color }} >
            <p className="font-semibold">
                {avatar}
            </p>
            <p>
                {comment}
            </p>
        </article>
    )
}