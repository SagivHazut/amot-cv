import React from 'react';

const SectionLayout = ({ title, children }) => (
  <section className="py-20 grid grid-cols-5 gap-12">
    <div className="col-span-1 flex items-start">
      <span className="text-lg font-bold text-[#161212]">{title}</span>
    </div>
    <div className="col-span-4 text-[#161212]">
      {children}
    </div>
  </section>
);

export default SectionLayout;