import GradientColorCard from "@/components/cards/color/gradient-color-card";
import SingleColorCard from "@/components/cards/color/single-color-card";
import ImageZoom from "@/components/image-zoom";
import Image from "next/image";

export default function ThengaExtensionStyle() {
    return (
        <section className="flex flex-col gap-8 lg:gap-12">
            <div className="w-full grid grid-cols-2 gap-4 lg:grid-cols-4">
                <SingleColorCard color="#C8CAFA" />
                <SingleColorCard color="#9196F7" />
                <SingleColorCard color="#574B9E" />
                <SingleColorCard color="#4AB6CD" />
                <div className="col-span-2">
                    <GradientColorCard
                        from="#C8CAFA"
                        via="#9196F7"
                        to="#574B9E"
                        showTo
                        showFrom
                        showVia
                    />
                </div>
                <div className="col-span-2">
                    <GradientColorCard
                        to="#0D47A1"
                        from="#1F264F"
                        showTo
                        showFrom
                    />
                </div>
            </div>
            <div className="w-full">
                <ImageZoom src="/images/mockups/thenga-ex-font.svg" alt="thenga ex font guide" />
            </div>
            <div className="w-full lg:max-w-3xl">
                <p className="font-medium text-2xl">
                    Button States
                </p>
                <ImageZoom src="/images/mockups/thenga-ex-button.svg" alt="thenga ex button states" />

            </div>
            <div className="w-full ">
                <p className="font-medium text-2xl">
                    Illustrations and ui components
                </p>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-10 lg:gap-x-20 py-6">
                    <div className="relative aspect-square p-2 w-full">
                        <Image fill src="/images/mockups/thenga-ex-comp1.svg" alt="t" />
                    </div>
                    <div className="relative p-2 w-full overflow-hidden ">
                        <Image fill className="scale-150 object-cover" src="/images/mockups/thenga-ex-comp2.svg" alt="t" />
                    </div>
                    <div className="relative p-2 w-full">
                        <Image fill src="/images/mockups/thenga-ex-comp3.svg" alt="t" />
                    </div>
                    <div className="relative p-2 w-full flex items-center justify-center">
                        <Image fill src="/images/mockups/thenga-ex-comp4.svg" alt="t" />
                    </div>

                </div>

            </div>
            <div className="w-full">
                <p className="font-medium text-2xl">
                    Alerts
                </p>
                <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative w-full h-[150px]">
                        <Image fill src="/images/mockups/thenga-ex-alert1.svg" alt="thenga alert 1" />
                    </div>
                    <div className="relative w-full h-[150px]">
                        <Image fill src="/images/mockups/thenga-ex-alert2.svg" alt="thenga alert 1" />
                    </div>
                    <div className="relative w-full h-[150px]">
                        <Image fill src="/images/mockups/thenga-ex-alert3.svg" alt="thenga alert 1" />
                    </div>
                    <div className="relative w-full h-[150px]">
                        <Image fill src="/images/mockups/thenga-ex-alert4.svg" alt="thenga alert 1" />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-3xl flex flex-col gap-4 ">
                <p className="font-medium text-2xl">
                    Icons
                </p>
                <ImageZoom alt="icons" src="/images/mockups/thenga-ex-icons.svg" />
            </div>
        </section>
    )
}