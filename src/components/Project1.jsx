import React from 'react';
import { getProjectById } from '../assets/projectsController.js';
import ProjectsNavigator from './ProjectsNavigator.jsx';
import SectionLayout from './SectionLayout.jsx';

const Project1 = () => {
  const project = getProjectById(1);

  // Add null check to prevent errors
  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <p className="text-gray-600">The project you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white text-gray-900 overflow-y-auto">
      {/* SECTION 1: Hero Section - Uses project.heroImage and project.title */}
      <section className="relative h-132 bg-gray-100 mb-20">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </section>

      <div className="max-w-6xl mx-auto px-8">
        {/* SECTION 2: Overview Section - Uses project.overview */}
        <SectionLayout title="Overview">
          <p className="text-gray-800 leading-relaxed text-lg font-light">
            {project.overview}
          </p>
        </SectionLayout>

        {/* SECTION 3: Gallery Horizontal Scroll - Uses project.galleryImages */}
        <section className="mb-20 bg-gradient-to-b from-white to-gray-500 py-12 w-full">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide px-8">
            {project.galleryImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-96">
                <img 
                  src={image} 
                  alt={`Process ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: The Challenge Section - Uses project.challenge */}
        <SectionLayout title="The Challenge">
          <p className="text-gray-800 leading-relaxed text-lg font-light">
            {project.challenge}
          </p>
        </SectionLayout>

        {/* SECTION 5: Core Values Section - Uses project.coreValues */}
        <SectionLayout title="Core Values">
          <h4 className="text-xl font-semibold mb-2 text-gray-900">
            {project.coreValues.title}
          </h4>
          
          <div className="space-y-6">
            {project.coreValues.values.map((value, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </SectionLayout>

        {/* SECTION 6: Visual Grid Section - Uses project.galleryImages and project.processImages */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg aspect-[5/3] flex items-center justify-center">
              <div className="grid grid-cols-5 gap-4">
                {[...Array(20)].map((_, index) => (
                  <div key={index} className="aspect-[3/2] bg-white overflow-hidden w-20 h-12">
                    <img 
                      src={project.galleryImages[index % project.galleryImages.length]} 
                      alt={`Asset ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg aspect-[5/3] flex items-center justify-center">
              <img 
                src={project.processImages[0]} 
                alt="Main visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 7: Design Solution Section - Uses project.designSolution */}
        <SectionLayout title="Design Solution">
          <div className="space-y-8">
            {project.designSolution.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  {section.title}
                </h4>
                <p className="text-gray-800 leading-relaxed text-lg font-light">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </SectionLayout>

        {/* SECTION 8: Book Spread Images - Uses project.processImages[1] and project.processImages[2] */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.processImages[1]} 
                alt="Book spread left"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.processImages[2]} 
                alt="Book spread right"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 9: Description Block - Uses project.conceptWebsite */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-xl font-bold mb-4 text-gray-900">
              {project.conceptWebsite.title}
            </h4>
            <p className="text-gray-800 leading-relaxed text-lg font-light">
              {project.conceptWebsite.description}
            </p>
          </div>
        </section>

        {/* SECTION 10: Single Image Section - Uses project.heroImage */}
        <section className="mb-20">
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.heroImage} 
              alt="Featured visual"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SECTION 11: Takeaways Section - Uses project.takeaways */}
        <SectionLayout title="Takeaways">
          <div className="space-y-6">
            {project.takeaways.content.map((paragraph, index) => (
              <p key={index} className="text-gray-800 leading-relaxed text-lg font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionLayout>

        {/* SECTION 12: Gallery Grid - Uses project.galleryImages */}
        <section className="mb-20">
          <div className="space-y-8 mb-20">
            {/* Top row: 2 images */}
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[0]} 
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[1]} 
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Second row: 3 images */}
            <div className="grid grid-cols-3 gap-8">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[2]} 
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[3]} 
                  alt="Gallery 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[4]} 
                  alt="Gallery 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Third row: 3 images */}
            <div className="grid grid-cols-3 gap-8">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[5]} 
                  alt="Gallery 6"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[0]} 
                  alt="Gallery 7"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[1]} 
                  alt="Gallery 8"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bottom row: 2 images */}
            <div className="grid grid-cols-2 gap-40">
              <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[2]} 
                  alt="Gallery 9"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[3]} 
                  alt="Gallery 10"
                  className="w-full h-full object-cover"
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