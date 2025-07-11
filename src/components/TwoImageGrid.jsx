import React from 'react';

const TwoImageGrid = ({ leftImage, rightImage, leftAlt = 'Left Image', rightAlt = 'Right Image' }) => (
  <section className="mb-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img src={leftImage} alt={leftAlt} className="w-full h-full object-cover" />
      </div>
      <div className="aspect-[8/10] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img src={rightImage} alt={rightAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

export default TwoImageGrid; 