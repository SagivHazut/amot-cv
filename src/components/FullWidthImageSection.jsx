import React from 'react';

const FullWidthImageSection = ({ image, alt }) => {
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

export default FullWidthImageSection;