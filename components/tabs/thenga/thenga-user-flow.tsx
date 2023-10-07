import ListItem from "@/components/hierarchy/list-item";
import ImageZoom from "@/components/image-zoom";

export default function ThengaUserFlow() {
    return (
        <section className="flex py-8 flex-col gap-8 font-light">
            <div className="flex flex-col gap-4">
                <ListItem item="All actions are in rounded rectangles" />
                <ListItem item="All screens are in rectangles" />
                <ListItem item="All decisions are in diamonds" />
                <ListItem item="Each shape is connected by an arrow" />
            </div>
            <ImageZoom src="/images/mockups/thenga-user-flow.svg"  alt="information architecture"/>

        </section>
    )
}