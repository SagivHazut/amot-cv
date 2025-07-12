import React from 'react';

const TwoImageGrid = ({ firstImage, secondImage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="aspect-square overflow-hidden">
        <img
          src={firstImage}
          alt="First grid image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square overflow-hidden">
        <img
          src={secondImage}
          alt="Second grid image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TwoImageGrid;