import React from 'react';
import '../app/globals.css'
import ProjectCard from './cards/project-card'
import { Project } from '@/types';

interface CarouselProps {
    projects: Project[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
    return (
        <div className='hide-scrollbar' style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        }}>
            {projects.map((project) => (
                <div key={project.title} style={{ 
                    scrollSnapAlign: 'start',
                    flex: '0 0 auto',
                    width: '300px',
                    marginRight: '16px',
                 }}>
                    <ProjectCard key={project.title} variant="web" project={project} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;