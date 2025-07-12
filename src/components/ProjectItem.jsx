import React from 'react';
import { Link } from 'react-router-dom';
import TagBadge from './TagBadge.jsx';

const ProjectItem = ({ project, className = "" }) => {
  const { id, image, alt, tags, title } = project;
  const isNotAvailable = id === 5 || id === 6;
  
  if (isNotAvailable) {
    return (
      <div className={`relative group cursor-not-allowed overflow-hidden w-full h-full block bg-[#FFFCFC] ${className}`}>
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* "Not Available" overlay - center */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20">
          <div className="text-[#161212] text-lg">
            Not Available
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Link to={`/project/${id}`} className={`relative group cursor-pointer overflow-hidden w-full h-full block bg-[#FFFCFC] ${className}`}>
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#E8E8E8]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Title overlay - top left */}
      <div className="absolute top-2 left-2 text-[#CBBEFB] text-[24px] font-normal font-['Roboto'] px-3 py-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
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