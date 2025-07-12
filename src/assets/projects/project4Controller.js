import FirstView from "../Gamal_Archive/FirstView.png";
import TheElement from "../Gamal_Archive/The element.jpg";
import Bilboard1 from "../Gamal_Archive/Bilboard_Excitment_mkup.jpg";
import WebFlow from "../Gamal_Archive/electric-car-ecology-technology-save-energy-concept.mp4";
// Project 4 Controller - Mobile App
// Mobile Design Project

// Project 4 specific images (replace with actual project images)
const PROJECT4_IMAGES = {
  hero: FirstView,
  thumbnail: FirstView,
  process1: WebFlow,
  process2: Bilboard1,
  process3: TheElement,
  gallery1: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery2: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery3: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery4: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery5: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery6: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w"
};

// Project 4 specific tags
const PROJECT4_TAGS = {
  caseStudy: { text: "Branding", color: "bg-indigo-600" }, 
  Branding: { text: "Concept Design", color: "bg-indigo-600" }
};

// Project 4 complete data
export const PROJECT4_DATA = {
  id: 4,
  title: "Gamal Archive",
  subtitle: "Gamal Archive",
  shortTitle: "Gamal Archive | 2024",
  heroImage: PROJECT4_IMAGES.hero,
  thumbnailImage: PROJECT4_IMAGES.thumbnail,
  alt: "MGamal Archive",
  
  year: "2023",
  client: "Mobile Startup",
  role: "Mobile UX Designer",
  duration: "5 months",
  
  processImages: [PROJECT4_IMAGES.process1, PROJECT4_IMAGES.process2, PROJECT4_IMAGES.process3],
  galleryImages: [PROJECT4_IMAGES.gallery1, PROJECT4_IMAGES.gallery2, PROJECT4_IMAGES.gallery3, PROJECT4_IMAGES.gallery4, PROJECT4_IMAGES.gallery5, PROJECT4_IMAGES.gallery6],
  
  overview: "Designed a mobile application that provides seamless user experience across different devices and platforms.",
  
  challenge: "Users needed a mobile solution that could work offline, sync across devices, and provide a native app experience.",
  
  solution: "Created a mobile-first design with offline capabilities, cross-platform synchronization, and intuitive navigation.",
  
  process: {
    research: {
      title: "User Research",
      description: "Conducted extensive research to understand mobile user behavior and needs.",
      details: [
        "Mobile user behavior analysis",
        "Competitive mobile app review",
        "User interviews and surveys",
        "Usability testing on devices"
      ]
    },
    design: {
      title: "Mobile Design",
      description: "Designed mobile interfaces with focus on touch interactions and mobile-specific patterns.",
      details: [
        "Mobile wireframing and prototyping",
        "Touch interaction design",
        "Responsive design patterns",
        "Mobile accessibility considerations"
      ]
    },
    implementation: {
      title: "Development & Testing",
      description: "Worked closely with development team to ensure design fidelity and performance.",
      details: [
        "Collaborated with developers",
        "Conducted device testing",
        "Performance optimization",
        "App store optimization"
      ]
    }
  },
  
  results: {
    title: "Mobile Success",
    description: "The mobile application achieved high user adoption and positive feedback across all metrics.",
    metrics: [
      "4.8/5 app store rating",
      "500K+ downloads",
      "85% user retention rate",
      "Positive user feedback",
      "Successful app launch"
    ]
  },
  
  tags: [
    PROJECT4_TAGS.caseStudy,
    PROJECT4_TAGS.Branding
  ]
};

// Helper functions for Project 4
export const getProject4Thumbnail = () => ({
  id: PROJECT4_DATA.id,
  image: PROJECT4_DATA.thumbnailImage,
  alt: PROJECT4_DATA.alt,
  title: PROJECT4_DATA.shortTitle,
  tags: PROJECT4_DATA.tags
});

export { PROJECT4_IMAGES, PROJECT4_TAGS }; 