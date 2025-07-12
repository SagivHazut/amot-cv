import React from 'react';

const HeroSection = ({ image, alt }) => {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;