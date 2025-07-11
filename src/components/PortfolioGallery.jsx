import React from 'react';
import ProjectItem from './ProjectItem.jsx';

const PortfolioGallery = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
      {projects.map((project) => (
        <ProjectItem 
          key={project.id} 
          project={project} 
          className="col-span-1"
        />
      ))}
    </div>
  );
};

export default PortfolioGallery; 