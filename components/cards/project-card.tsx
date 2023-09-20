"use client"
import { Project } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

interface ProjectCardProps {
    project: Project;
    variant?: "web" | "mobile" | "product" | "studies"
}


const ProjectCard = ({ project, variant }: ProjectCardProps) => {
    const { preview, title, altTitle, sub, img, link, tags } = project
    const pathname = usePathname()
    return (
        <article className='w-full min-h-max gap-2 flex flex-col '>
            <div className={`relative w-full aspect-square 
             min-h-[200px] 
                    `}>
                <Image src={img} alt={title} fill className={` ${variant !== "web" ? "object-contain" : "object-contain"} `} />
            </div>
            {
                variant === "web" && preview && (
                    <Link className='mt-2' href={preview || "/"}>
                        <p className='text-center'>
                            {title}
                        </p>
                    </Link>
                )
            }
            {
                variant !== "web" && (
                    <div className='flex flex-col gap-2 w-full'>

                        <Link href={(link ? link : preview) || "/work"} className='font-semibold text-xl flex flex-wrap'>
                            {title}
                        </Link>

                        <div className='flex items-center flex-wrap w-full gap-2'>

                        {
                            tags && tags.map((tag, i) => (
                                <div key={i} className='bg-[#D9D9D9] px-4 font-medium w-max py-2 rounded-[6px] text-sm' >
                                    {tag}
                                </div>
                            ))
                        }
                        </div>

                    </div>
                )
            }
        </article>
    )
}

export default ProjectCard