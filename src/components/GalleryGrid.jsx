import React from 'react';

const GalleryGrid = ({ images, columns = 3, aspect = 'aspect-[3/4]', gap = 'gap-8', rowClass = '' }) => {
  if (!images || images.length === 0) return null;
  const chunk = (arr, size) => arr.length ? [arr.slice(0, size), ...chunk(arr.slice(size), size)] : [];
  const rows = chunk(images, columns);
  return (
    <div className={`space-y-8 mb-20 ${rowClass}`}>
      {rows.map((row, i) => (
        <div key={i} className={`grid grid-cols-${row.length} ${gap}`}>
          {row.map((img, j) => (
            <div key={j} className={`${aspect} bg-gray-100 rounded-lg overflow-hidden shadow-lg`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid; 