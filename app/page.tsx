// import Image from 'next/image';
import React from 'react';
import WelcomeModal from '@/components/modals/welcome-modal';
import Link from 'next/link';
import { BEHANCE_URL, LINKEDIN_URL, TWITTER_URL } from '@/lib/constants';
import { FaBehance, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { SlMouse } from 'react-icons/sl';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi2';
import Heading from '@/components/hierarchy/heading';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/cards/project-card';
import Carousel from '../components/carousel';


export default function Home() {
  return (
    <>
      {/* <WelcomeModal /> */}
      <section className='min-h-[80vh] relative flex flex-col items-center justify-center md:p-4'>
        <div className='flex flex-col justify-center max-w-5xl  items-center text-center gap-4'>
          <p className='text-xl md:text-2xl font-light'>Hiya 👋🏾</p>
          <h1 className='text-5xl lg:text-6xl text-[#484A56] font-'>
            I <span className='text-seablue'>Create, Manage</span> and <span className='text-seablue'>Market</span> Digital Products.
          </h1>
          <p className='max-sm:text-s w-full font-light'>
            I create meaningful digital experiences using modern and practical approaches to build connections between individuals and digital products.
          </p>
          <div className='mx-auto text-bluey flex text-xl md:text-2xl items-center gap-10'>
            <Link className='' href={LINKEDIN_URL} >
              <FaLinkedinIn />
            </Link>
            <Link className='' href={BEHANCE_URL} >
              <FaBehance />
            </Link>
            <Link className='' href={TWITTER_URL} >
              <FaTwitter />
            </Link>
          </div>
          <div className='flex items-center justify-center gap-2 mt-4'>
            <div className='min-h-[13px] min-w-[13px] h-[13px] w-[13px] bg-[#72CF47] rounded-full' />
            <p className='font-light'>
              Based in Accra
            </p>
          </div>

        </div>
        <div className='mt- flex flex-col absolute bottom-5 items-center justify-center'>
          <div className='flex flex-col items-center justify-center  text-2xl'>
            <SlMouse className="text-3xl" />
            <HiOutlineChevronDoubleDown />
          </div>
          <p className='text-sm text-bluey font-light '>Scroll Down</p>
        </div>
      </section>

      <section className='flex pt-16 flex-col gap-4'>
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

      <section className='flex pt-16 flex-col gap-4'>
        <Heading
          title='Mobile & Web Designs'
          sub='Selected Projects'
        />

        <Carousel projects={projects.web} />
      </section>
      
      <section className='flex pt-16 flex-col gap-4'>
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
  );
}
