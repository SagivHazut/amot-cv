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
    <div className="col-span-1 flex flex-col h-full">
      <div className="flex items-center mb-4 ">
        <img 
          src={image} 
          alt="Profile" 
          className=" w-24 h-24 mr-4"
          onClick={handleProfileClick}
          style={{ cursor: 'pointer' }}
        />
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <p className="text-sm mb-8 flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        <h3 className="text-sm font-semibold mb-1">{contactTitle}</h3>
        <div className="flex items-center gap-2">
        <button
            onClick={handleCopyEmail}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
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
          <p className="text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection; 