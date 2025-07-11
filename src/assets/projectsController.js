// Main Projects Controller - Imports and manages all individual project controllers
// This file serves as the central hub for all project data

// Import all individual project controllers
import { PROJECT1_DATA, getProject1Thumbnail } from './projects/project1Controller.js';
import { PROJECT2_DATA, getProject2Thumbnail } from './projects/project2Controller.js';
import { PROJECT3_DATA, getProject3Thumbnail } from './projects/project3Controller.js';
import { PROJECT4_DATA, getProject4Thumbnail } from './projects/project4Controller.js';
import { PROJECT5_DATA, getProject5Thumbnail } from './projects/project5Controller.js';
import { PROJECT6_DATA, getProject6Thumbnail } from './projects/project6Controller.js';


// All Projects Data - Centralized object
export const PROJECTS_DATA = {
  1: PROJECT1_DATA,
  2: PROJECT2_DATA,
  3: PROJECT3_DATA,
  4: PROJECT4_DATA,
  5: PROJECT5_DATA,
  6: PROJECT6_DATA
};

// Helper functions
export const getAllProjects = () => {
  return Object.values(PROJECTS_DATA);
};

export const getProjectById = (id) => {
  console.log('getProjectById called with ID:', id);
  console.log('Available projects:', Object.keys(PROJECTS_DATA));
  const project = PROJECTS_DATA[id] || null;
  console.log('Returning project:', project);
  return project;
};

export const getProjectThumbnails = () => {
  return [
    getProject1Thumbnail(),
    getProject2Thumbnail(),
    getProject3Thumbnail(),
    getProject4Thumbnail(),
    getProject5Thumbnail(),
    getProject6Thumbnail()
  ];
};

// Common tag definitions for reference
export const TAGS = {
  caseStudy: { text: "Case Study", color: "bg-indigo-600" },
  userExperience: { text: "User Experience", color: "bg-indigo-600" },
  userResearch: { text: "User Research", color: "bg-indigo-600" },
  productDesign: { text: "Product Design", color: "bg-indigo-600" },
  branding: { text: "Branding", color: "bg-indigo-600" },
  mobileApp: { text: "Mobile App", color: "bg-indigo-600" },
  webDesign: { text: "Web Design", color: "bg-indigo-600" },
  innovation: { text: "Innovation", color: "bg-indigo-600" }
}; 