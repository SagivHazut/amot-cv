import React from 'react';

const HeroSection = ({ image, alt }) => (
  <section className="relative h-132 bg-gray-100 mb-20">
    <img src={image} alt={alt} className="w-full h-full object-cover" />
  </section>
);

export default HeroSection; 