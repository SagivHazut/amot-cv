import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSection = ({ profile }) => {
  const { image, name, description, email, contactTitle } = profile;
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  const handleProfileClick = () => {
    navigate('/');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };
  
  return (
    <div className="relative h-full border-r-2 border-[#161212]">
      <div className="col-span-1 flex flex-col h-full bg-[#F4F4F4] px-8 py-16">
        <div className="flex items-start mb-4">
          <img 
            src={image} 
            alt="Profile" 
            className="w-full max-w-[120px] h-24 object-cover mr-4 rounded-[8px]"
            onClick={handleProfileClick}
            style={{ cursor: 'pointer' }}
          />
          <h2 className="text-[20px] font-normal text-[#161212] font-['Roboto'] pt-1">{name}</h2>
        </div>
        <p className="text-[26px] font-bold text-[#161212] mb-8 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <h3 className="text-[20px] font-normal text-[#161212] font-['Roboto'] mb-1">{contactTitle}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="text-[#161212] hover:text-[#161212]/80 transition-colors duration-200"
              title="Copy email to clipboard"
            >
              {copied ? (
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              )}
            </button>
            <p className="text-[18px] font-normal text-[#161212]">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;