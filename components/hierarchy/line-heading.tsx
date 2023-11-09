export default function LineHeading({ title }: { title: string }) {
    return (
        <div className="flex items-end gap-2">
            <p className="md:text-[30px] md:leading-[36.5px] text-xl text-[#484A56] font-semibold">
                {title}
            </p>
            <div className="flex-1 w-full h-[2px] bg-[#6973A4] mb-2 rounded-lg" />
        </div>
    )
}