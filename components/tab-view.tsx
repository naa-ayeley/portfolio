"use client"
import { useRef, useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tabViews } from "@/lib/data"

interface TabViewProps {
    data: "thenga" | "seemini" | "resto" | "thenga-wireframe"
}

export default function TabView({ data }: TabViewProps) {
    const views = tabViews[data]

    const [showRightIcon, setShowRightIcon] = useState(true)
    const [showLeftIcon, setShowLeftIcon] = useState(false)

    const scrollRef = useRef<any | null>()

    const scroll = (direction: "left" | "right") => {
        const { current } = scrollRef
        console.log(scrollRef.current.scrollWidth)

        if (!current) return

        const scrollableWidth = current.scrollWidth - current.clientWidth;


        if (direction === 'left' && current.scrollLeft > 0) {
            current.scrollLeft -= 300
        } else if (direction === "right" && current.scrollLeft < scrollableWidth) {
            current.scrollLeft += 300
        }

        setShowLeftIcon(current.scrollLeft > 0);
        setShowRightIcon(current.scrollLeft < scrollableWidth);
    }

    return (
        <section className="w-full flex flex-col gap-4">
            <Tabs defaultValue={views[0].value} className="w-full">
                <div className="max-w-full relative w-full flex items-center px-[45px] justify-between overflow-x-auto hide-scroll">
                    {
                        showLeftIcon &&
                        <div onClick={() => scroll("left")} className="border absolute left-0 z-10 bg-white cursor-pointer flex items-center justify-center rounded-full w-[40px] h-[40px] min-w-[40px] min-h-[45px]">
                            <BsChevronLeft className="w-[20px] h-[20px] -translate-x-[2px]" />
                        </div>
                    }
                    <TabsList className="gap-8 max-w-full overflow-x-auto justify-start hide-scroll" ref={scrollRef} >
                        {
                            views.map((view) => (
                                <TabsTrigger className="" value={view.value} key={view.value}>
                                    {view.label}
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>
                    {
                        showRightIcon &&
                        <div onClick={() => scroll("right")} className="border absolute right-0 z-10 bg-white cursor-pointer flex items-center justify-center rounded-full w-[40px] h-[40px] min-w-[40px] min-h-[40px]">
                            <BsChevronRight className="w-[20px] h-[20px] translate-x-[2px]" />
                        </div>
                    }
                </div>
                {
                    views.map((view) => (
                        <TabsContent value={view.value} key={view.value}>
                            {view.render}
                        </TabsContent>
                    ))
                }
            </Tabs>

        </section>
    )
}