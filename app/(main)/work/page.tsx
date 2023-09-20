import React from 'react'
import Heading from '@/components/heading';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/cards/project-card';

const WorkPage = () => {
    return (
        <>
            <section id="web-designs" className='flex pt-16 flex-col gap-4'>
                <Heading
                    title='Web Designs'
                    sub='Selected Projects'
                />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12 xl:gap-y-16'>
                    {
                        projects.web.map((project) => (
                            <ProjectCard key={project.title} variant="web" project={project} />
                        ))
                    }
                </div>
            </section>
            <section id="mobile-designs" className='flex pt-16 flex-col gap-4'>
                <Heading
                    title='Mobile Designs'
                    sub='Selected Projects'
                />
                <div className='grid md:grid-cols-2  gap-x-8 gap-y-8 md:gap-y-12 xl:gap-y-16'>
                    {
                        projects.mobile.map((project) => (
                            <ProjectCard key={project.title} variant="mobile" project={project} />
                        ))
                    }
                </div>
            </section>
            <section id="product-designs" className='flex pt-16 flex-col gap-4'>
                <Heading
                    title='Product Designs'
                    sub='Selected Projects'
                />
                <div className='grid md:grid-cols-2  gap-x-8 gap-y-8 md:gap-y-12 xl:gap-y-16'>
                    {
                        projects.product.map((project) => (
                            <ProjectCard key={project.title} variant="product" project={project} />
                        ))
                    }
                </div>
            </section>
            <section id="case-studies" className='flex py-16 flex-col gap-4'>
                <Heading
                    title='Case Studies'
                    sub='Selected Projects'
                />
                <div className='grid md:grid-cols-2  gap-x-8 gap-y-8 md:gap-y-12 xl:gap-y-16'>
                    {
                        projects.studies.map((project) => (
                            <ProjectCard key={project.title} variant="studies" project={project} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default WorkPage