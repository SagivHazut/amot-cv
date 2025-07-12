import React from 'react';

const TagBadge = ({ text, color }) => {
  return (
    <span className="bg-[#CbbEFB] text-[#161212] px-4 py-2 mr-1 text-[18px] font-normal font-['Roboto'] rounded-[38px]">
      {text}
    </span>
  );
};

export default TagBadge;