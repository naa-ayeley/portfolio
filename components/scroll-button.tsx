"use client"
import { cn } from "@/lib/utils";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import { SlMouse } from "react-icons/sl";

type Props = {
    direction?: "top" | "bottom"
}

export default function ScrollButton({ direction = "top" }: Props) {

    const goToTop = (): void => {
        // Scroll to the top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const goToBottom = (): void => {
        // Scroll to the bottom smoothly
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={direction === "top" ? goToTop : goToBottom}
            className="flex flex-col gap-4 items-center justify-center"
        >
            <div className={cn(
                'flex flex-col items-center rotate-180   justify-center  text-xl',
                direction === "bottom" && "rotate-180"
            )}>
                <SlMouse className="text-2xl" />
                <HiOutlineChevronDoubleDown />
            </div>
            <p className='text-xs md:text-sm text-bluey font-light '>{ direction === "top" ? "Back to the top" : "Scroll to bottom" }</p>
        </button>
    )
}