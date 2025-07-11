import React from 'react';
import { getProjectById } from '../assets/projectsController.js';
import ProjectsNavigator from './ProjectsNavigator.jsx';
import SectionLayout from './SectionLayout.jsx';
import HeroSection from './HeroSection.jsx';
import FullWidthImageSection from './FullWidthImageSection.jsx';
import TwoImageGrid from './TwoImageGrid.jsx';

const Project4 = () => {
  const project = getProjectById(4); // Load project 4 data

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

        {/* SECTION 5: Process Images - Uses project.processImages[1] and project.processImages[2] */}
        <TwoImageGrid leftImage={project.processImages[1]} rightImage={project.processImages[2]} leftAlt="Process left" rightAlt="Process right" />

        {/* SECTION 6: Full-width Image - Uses project.processImages[0] */}
        <FullWidthImageSection image={project.processImages[0]} alt="Process overview" />

        {/* SECTION 7: Solution Section - Uses project.solution */}
        <TwoImageGrid leftImage={project.processImages[1]} rightImage={project.processImages[2]} leftAlt="Process left" rightAlt="Process right" />
        <TwoImageGrid leftImage={project.processImages[1]} rightImage={project.processImages[2]} leftAlt="Process left" rightAlt="Process right" />


        {/* SECTION 8: Project Navigation Footer */}
        <ProjectsNavigator currentProjectId={4} />
      </div>
    </div>
  );
};

export default Project4; 