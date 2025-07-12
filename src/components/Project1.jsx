import React from "react";
import { getProjectById } from "../assets/projectsController.js";
import ProjectsNavigator from "./ProjectsNavigator.jsx";
import SectionLayout from "./SectionLayout.jsx";

const Project1 = () => {
  const project = getProjectById(1);

  if (!project) {
    return (
      <div className='flex items-center justify-center h-screen bg-[#F4F4F4]'>
        <div className='text-center'>
          <h2 className='text-[18px] font-bold text-[#161212] mb-4'>
            Project Not Found
          </h2>
          <p className='text-[18px] font-normal text-[#161212]'>
            The project you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full bg-[#FFFCFC] text-[#161212] overflow-y-auto font-["Roboto"]'>
      {/* SECTION 1: Hero Section */}
      <section className='relative h-132 bg-gray-100 mb-20'>
        <img
          src={project.heroImage}
          alt={project.title}
          className='w-full h-full object-cover'
        />
      </section>

      <div className='max-w-6xl mx-auto px-8'>
        <SectionLayout title='Overview'>
          <p className='text-[18px] font-normal text-[#161212] leading-relaxed'>
            {project.overview}
          </p>
        </SectionLayout>
        
        <section className='mb-20 py-12 w-full'>
          <div className='flex-shrink-0 w-full h-full object-cover'>
            <video
              src={project.video}
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </section>

        <SectionLayout title='The Challenge'>
          <p className='text-[18px] font-normal text-[#161212] leading-relaxed'>
            {project.challenge}
          </p>
        </SectionLayout>

        {/* SECTION 5: Core Values */}
        {project.coreValues && (
          <SectionLayout title='Core Values'>
            <h4 className='text-[18px] font-bold text-[#161212] mb-2'>
              {project.coreValues.title}
            </h4>

            <div className='space-y-6'>
              {project.coreValues.values.map((value, index) => (
                <div key={index}>
                  <h4 className='text-[18px] font-bold text-[#161212] mb-2'>
                    {value.title}
                  </h4>
                  <p className='text-[18px] font-normal text-[#161212] leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionLayout>
        )}

        {/* SECTION 6: Visual Grid */}
        <section className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='bg-black aspect-[5/3] flex items-center justify-center'>
              <video
                src={project.LogoExplainer}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className='bg-gray-100 aspect-[5/3] flex items-center justify-center'>
              <video
                src={project.Experiments}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 7: Design Solution */}
        {project.designSolution && (
          <SectionLayout title='Design Solution'>
            <div className='space-y-8'>
              {project.designSolution.sections.map((section, index) => (
                <div key={index}>
                  <h4 className='text-[18px] font-bold text-[#161212] mb-4'>
                    {section.title}
                  </h4>
                  <p className='text-[18px] font-normal text-[#161212] leading-relaxed'>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionLayout>
        )}

        {/* SECTION 8: Book Spread Images */}
        <section className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='aspect-[8/10] bg-gray-100 overflow-hidden'>
              <video
                src={project.Poster1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            <div className='aspect-[8/10] bg-gray-100 overflow-hidden'>
              <video
                src={project.Poster2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* SECTION 9: Description Block */}
        <section className='mb-20'>
          <div className='max-w-3xl mx-auto'>
            <h4 className='text-[18px] font-bold mb-4 text-gray-900'>
              {project.conceptWebsite.title}
            </h4>
            <p className='text-[18px] font-normal text-gray-800 leading-relaxed'>
              {project.conceptWebsite.description}
            </p>
          </div>
        </section>

        {/* SECTION 10: Single Image Section */}
        <section className='mb-20'>
          <div className='w-full aspect-video bg-gray-100 overflow-hidden'>
            <video
              src={project.Webflow}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </section>

        {/* SECTION 11: Takeaways */}
        <SectionLayout title='Takeaways'>
          <div className='space-y-6'>
            {project.takeaways.content.map((paragraph, index) => (
              <p
                key={index}
                className='text-[18px] font-normal text-gray-800 leading-relaxed'
              >
                {paragraph}
              </p>
            ))}
          </div>
        </SectionLayout>

        {/* SECTION 12: Gallery Grid */}
        <section className='mb-20'>
          <div className='space-y-8 mb-20'>
            {/* Gallery grid content */}
            <div className='grid grid-cols-2 gap-8'>
              <div className='aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                <img
                  src={project.galleryImages[0]}
                  alt='Gallery 1'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                <img
                  src={project.galleryImages[1]}
                  alt='Gallery 2'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            <div className='grid grid-cols-3 gap-8'>
              {[2, 3, 4].map((index) => (
                <div key={index} className='aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                  <img
                    src={project.galleryImages[index]}
                    alt={`Gallery ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>

            <div className='grid grid-cols-3 gap-8'>
              <div className='aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                <img
                  src={project.galleryImages[5]}
                  alt='Gallery 6'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                <img
                  src={project.galleryImages[0]}
                  alt='Gallery 7'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                <img
                  src={project.galleryImages[1]}
                  alt='Gallery 8'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-40'>
              <div className='aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                <img
                  src={project.galleryImages[2]}
                  alt='Gallery 9'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
                <img
                  src={project.galleryImages[3]}
                  alt='Gallery 10'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: Project Navigation Footer */}
        <ProjectsNavigator currentProjectId={1} />
      </div>
    </div>
  );
};

export default Project1;
