import React from 'react';
import { getProjectById } from '../assets/projectsController.js';
import SectionLayout from './SectionLayout.jsx';
import GalleryGrid from './GalleryGrid.jsx';
import ProjectsNavigator from './ProjectsNavigator.jsx';
import HeroSection from './HeroSection.jsx';
import FullWidthImageSection from './FullWidthImageSection.jsx';
import TwoImageGrid from './TwoImageGrid.jsx';

const Project3 = () => {
  const project = getProjectById(3); // Force load project 3

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
      <HeroSection image={project.heroImage} alt={project.title} />

      <div className="max-w-6xl mx-auto px-8">
        {/* SECTION 2: Overview Section - Uses project.overview */}
        <SectionLayout title="Overview">
          <p className="text-gray-800 leading-relaxed text-lg font-light">
            {project.overview}
          </p>
        </SectionLayout>
        
        {/* SECTION 3: Gallery/Sketches Section - Uses project.galleryImages (first 3 images) */}
        <section className="mb-20">
          <GalleryGrid
            images={project.galleryImages ? project.galleryImages.slice(0, 3).map((src, i) => ({ src, alt: `Gallery ${i + 1}` })) : []}
            columns={3}
            aspect="aspect-[3/4]"
            gap="gap-8"
          />
        </section>

        {/* SECTION 4: Book Spread Images - Uses project.processImages[1] and project.processImages[2] */}
        <section className="mb-20">
          <TwoImageGrid leftImage={project.processImages[1]} rightImage={project.processImages[2]} leftAlt="Book spread left" rightAlt="Book spread right" />
        </section>

        {/* SECTION 5: Building Grids Section - Uses project.buildingGrids */}
        <SectionLayout title="Building Grids">
          <p className="text-gray-800 leading-relaxed text-lg font-light">
            {project.buildingGrids}
          </p>
        </SectionLayout>

        {/* SECTION 6: Full-width Pattern Images - Uses project.scrollablePattern */}
        <FullWidthImageSection image={project.scrollablePattern} alt="Design Pattern" />

        {/* SECTION 7: Navigation Footer */}
        <ProjectsNavigator currentProjectId={3} />
      </div>
    </div>
  );
};

export default Project3; 