import React from 'react';
import { getProjectById, PROJECT3_IMAGES } from '../assets/projectsController';
import SectionLayout from './SectionLayout';
import GalleryGrid from './GalleryGrid';
import ProjectsNavigator from './ProjectsNavigator.jsx';
import HeroSection from './HeroSection';
import FullWidthImageSection from './FullWidthImageSection';
import TwoImageGrid from './TwoImageGrid';

// SECTION 0: Data Fetch
const DesignSystemProjectDetail = () => {
  const project = getProjectById(3); // Force load project 3

  if (!project) return null;

  return (
    <div className="h-full bg-white text-gray-900 overflow-y-auto">
      {/* SECTION 1: Hero - Displays the main project image at the top */}
      <HeroSection image={project.heroImage} alt={project.title} />

      <div className="max-w-6xl mx-auto px-8">
        {/* SECTION 2: Overview - Main project description */}
        <SectionLayout title="Overview">
          <p className="text-gray-800 leading-relaxed text-lg font-light">
            {project.overview}
          </p>
        </SectionLayout>
        
        {/* SECTION 3: Gallery/Sketches - A grid of 3 images from the gallery */}
        <section className="mb-20">
          <GalleryGrid
            images={project.galleryImages ? project.galleryImages.slice(0, 3).map((src, i) => ({ src, alt: `Sketch ${i + 1}` })) : []}
            columns={3}
            aspect="aspect-[3/4]"
            gap="gap-8"
          />
        </section>

        {/* SECTION 4: Book Spread - Two images side-by-side from processImages */}
        <section className="mb-20">
          <TwoImageGrid leftImage={project.processImages[1]} rightImage={project.processImages[2]} leftAlt="Book spread left" rightAlt="Book spread right" />
        </section>

        {/* SECTION 5: Building Grids - Second overview section about the grid system */}
        <SectionLayout title="Building Grids">
          <p className="text-gray-800 leading-relaxed text-lg font-light">
            {project.buildingGrids}
          </p>
        </SectionLayout>

        {/* SECTION 6: Full-width images showcasing process or patterns */}
        <FullWidthImageSection image={project.scrollablePattern} alt="User Journey Pattern" />
        <FullWidthImageSection image={PROJECT3_IMAGES.interfacePreview} alt="Interface Preview" />
        <FullWidthImageSection image={PROJECT3_IMAGES.researchData} alt="Research Data" />
      
        {/* SECTION 7: Navigation Footer - Links to other projects */}
        <ProjectsNavigator currentProjectId={3} />
      </div>
    </div>
  );
};

export default DesignSystemProjectDetail; 