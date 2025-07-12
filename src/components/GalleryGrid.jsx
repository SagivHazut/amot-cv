import React from 'react';

const GalleryGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;