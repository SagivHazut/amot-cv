import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectThumbnails } from '../assets/projectsController';

const ProjectsNavigator = ({ currentProjectId }) => {
  const projects = getProjectThumbnails();
  
  return (
    <section className="mb-16">
      <div>
        <div className="mb-8">
          <h3 className="text-sm text-gray-500  tracking-wider font-medium mb-6">Thanks for watching, See more projects:</h3>
          <hr className="border-black" />
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {projects
            .filter(project => project.id !== currentProjectId)
            .map((project) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group flex-shrink-0"
              >
                <div className="w-62 h-52 bg-gray-100 rounded-lg overflow-hidden mb-3 shadow-sm relative group">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                  {/* Title overlay */}
                  <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {project.title}
                  </div>
                  {/* Tags overlay */}
                  <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {project.tags && project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white bg-opacity-80 text-gray-800 text-xs px-2 py-0.5 rounded">
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNavigator; 