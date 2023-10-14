import Subheading from "@/components/hierarchy/subheading";
import ImageZoom from "@/components/image-zoom";

export default function InventoryResearch() {
    return (
        <section className="flex py-8 flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Subheading label="Information Architecture" color="inventory" />
                <p>
                    As a budding UX professional, my expertise lies in structuring and organizing digital content and interactions to ensure my ideas are organised into key sections and functionalities.
                </p>
                <ImageZoom alt="infotech-inventory" src="/images/mockups/infotech-inventory.svg" />
            </div>
            <div className="flex flex-col gap-4">
                <Subheading label="User Journeys" color="inventory" />
                <p>
                    By understanding the user journey, their emotions, and the opportunities for improvement, i was able to structure and design to meet the needs and expectations of users and the business
                </p>
                <ImageZoom alt="infotech-journey" src="/images/mockups/inventory-journey.svg" />
            </div>
            <div className="flex flex-col gap-4">
                <Subheading label="User Flow" color="inventory" />
                <p>
                I created this user flow to help me and my team navigate the core functions of recording a sales and generating invoices on our app. It&apos;s important to note that the app is primarily designed for viewing/tracking information rather than fulfilling  actions. Therefore, this user flow, which focuses on sales and invoices, stands as the most significant journey within the app. 
                </p>
                <ImageZoom alt="infotech-journey" src="/images/mockups/inventory-flow.svg" />
            </div>
            <div className="flex flex-col w-full items-center justify-center mt-10 gap-2">
                <p>
                Every design decision is meticulously tailored to enhance user engagement and satisfaction.  
                </p>
                <p className="text-7xl">
                😌
                </p>
            </div>
        </section>
    )
}