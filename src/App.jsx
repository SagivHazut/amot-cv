import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { assets } from './assets';
import { ProfileSection, PortfolioGallery } from './components';
import Project1 from './components/Project1.jsx';
import Project2 from './components/Project2.jsx';
import Project3 from './components/Project3.jsx';
import Project4 from './components/Project4.jsx';

function App() {
  return (
    <div className="font-sans p-8 bg-gray-800 text-gray-300 h-screen w-full">
      <div className="h-full w-full">
        <div className="grid grid-cols-5 gap-8 h-full">
          {/* Static Sidebar - always visible */}
          <ProfileSection profile={assets.profile} />
          
          {/* Main Content Area */}
          <div className="col-span-4 h-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<PortfolioGallery projects={assets.projects} />} />
              <Route path="/project/1" element={<Project1 />} />
              <Route path="/project/2" element={<Project2 />} />
              <Route path="/project/3" element={<Project3 />} />
              <Route path="/project/4" element={<Project4 />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
