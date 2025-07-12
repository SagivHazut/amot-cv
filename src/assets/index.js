import pfpic from "../assets/PfPic.JPG";
// Assets configuration file - all static content managed from here
import { getProjectThumbnails } from './projectsController.js';

// Profile assets
const profileImage = pfpic;
const profileName = "AMIT BUHBUT";
const profileDescription = "I'm a product and user experience designer who uses design as a tool for asking questions, exploring systems, and turning abstract ideas into clear, human-centered solutions.";
const profileEmail = "AMITBUHBUT20@GMAIL.COM";
const contactTitle = "CONTACT ME";



// Theme colors
const backgroundColor = "#1a202c";
const textColor = "#cbd5e0";
const tagBackgroundColor = "#indigo-600";
const tagTextColor = "#white";

export const assets = {
  profileImage: profileImage,
  profileName: profileName,
  profileDescription: profileDescription,
  profileEmail: profileEmail,
  contactTitle: contactTitle,
  backgroundColor: backgroundColor,
  textColor: textColor,
  tagBackgroundColor: tagBackgroundColor,
  tagTextColor: tagTextColor,
  
  // Structured data for easier component consumption
  profile: {
    image: profileImage,
    name: profileName,
    description: profileDescription,
    email: profileEmail,
    contactTitle: contactTitle
  },
  
  // Get projects from the controller
  projects: getProjectThumbnails(),
  
  colors: {
    background: backgroundColor,
    text: textColor,
    tagBackground: tagBackgroundColor,
    tagText: tagTextColor
  }
}; 