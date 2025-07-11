import React from 'react';
import { Link } from 'react-router-dom';
import TagBadge from './TagBadge.jsx';

const ProjectItem = ({ project, className = "" }) => {
  const { id, image, alt, tags, title } = project;
  const isNotAvailable = id === 5 || id === 6;
  
  if (isNotAvailable) {
    // Non-clickable version for projects 5 and 6
    return (
      <div className={`relative group cursor-not-allowed overflow-hidden w-full h-72 block ${className}`}>
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* "Not Available" overlay - center */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20">
          <div className="text-black text-lg ">
            Not Available
          </div>
        </div>
        
      
      </div>
    );
  }
  
  // Clickable version for other projects
  return (
    <Link to={`/project/${id}`} className={`relative group cursor-pointer overflow-hidden w-full h-72 block ${className}`}>
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Title overlay - top left */}
      <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
        {title}
      </div>
      
      {/* Tags overlay - bottom left */}
      {tags && tags.length > 0 && (
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10 max-w-[calc(100%-1rem)]">
          {tags.map((tag, index) => (
            <TagBadge 
              key={index} 
              text={tag.text} 
              color={tag.color}
            />
          ))}
        </div>
      )}
    </Link>
  );
};

export default ProjectItem; 