export default function Subheading({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-[2px] text-bluey">
            <div className="md:w-[52px] w-[42px] bg-bluey h-[1px]"></div>
            <p className="">{label}</p>
        </div>
    )
}