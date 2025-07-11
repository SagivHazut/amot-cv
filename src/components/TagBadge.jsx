import React from 'react';

const TagBadge = ({ text, color = "bg-indigo-600" }) => {
  return (
    <span className={`${color} text-white rounded-full px-2 py-1 mr-1 text-m`}>
      {text}
    </span>
  );
};

export default TagBadge; 