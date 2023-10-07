import ImageZoom from "@/components/image-zoom";

export default function ThengaInfotecture() {
    return (
        <section className="flex py-8 flex-col gap-8">
            <p className="font-light">
                As part of my design process, I focused on creating an information architecture by carefully piecing together most of the components of each screen to identify what users will see and interact with at every step of their journey when using the product.
                This approach provided a comprehensive view of the product&apos;s experience and helped (through iterations) minimise the number of screens users had to navigate to achieve their goals. Below is an overview of the information architecture I developed, which serves as the foundation for the website&apos;s final design.
            </p>
            <ImageZoom src="/images/mockups/thenga-infotecture.svg"  alt="information architecture"/>
        </section>
    )
}