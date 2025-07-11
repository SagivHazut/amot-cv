// Project 5 Controller - Web Platform
// Web Design Project

// Project 5 specific images (replace with actual project images)
const PROJECT5_IMAGES = {
  hero: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  thumbnail: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  process1: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  process2: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  process3: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery1: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery2: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery3: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery4: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery5: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  gallery6: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w"
};

// Project 5 specific tags
const PROJECT5_TAGS = {
  userExperience: { text: "User Experience", color: "bg-indigo-600" },
  userResearch: { text: "User Research", color: "bg-indigo-600" }
};

// Project 5 complete data
export const PROJECT5_DATA = {
  id: 5,
  title: "WEB PLATFORM",
  subtitle: "Web Design Project",
  shortTitle: "Web Platform",
  heroImage: PROJECT5_IMAGES.hero,
  thumbnailImage: PROJECT5_IMAGES.thumbnail,
  alt: "Web Platform Project",
  
  year: "2023",
  client: "SaaS Company",
  role: "Web Designer",
  duration: "4 months",
  
  processImages: [PROJECT5_IMAGES.process1, PROJECT5_IMAGES.process2, PROJECT5_IMAGES.process3],
  galleryImages: [PROJECT5_IMAGES.gallery1, PROJECT5_IMAGES.gallery2, PROJECT5_IMAGES.gallery3, PROJECT5_IMAGES.gallery4, PROJECT5_IMAGES.gallery5, PROJECT5_IMAGES.gallery6],
  
  overview: "Designed a modern web platform that provides powerful functionality with an intuitive user interface.",
  
  challenge: "The existing web platform was outdated and difficult to use, leading to low user engagement and high support requests.",
  
  solution: "Redesigned the platform with modern design principles, improved usability, and enhanced functionality.",
  
  process: {
    research: {
      title: "User Research",
      description: "Analyzed current user behavior and identified pain points in the existing platform.",
      details: [
        "User behavior analysis",
        "Usability testing sessions",
        "Analytics review",
        "Support ticket analysis"
      ]
    },
    design: {
      title: "Web Design",
      description: "Created modern web interfaces with focus on usability and visual appeal.",
      details: [
        "Information architecture redesign",
        "User interface design",
        "Interactive prototyping",
        "Responsive design implementation"
      ]
    },
    implementation: {
      title: "Development & Launch",
      description: "Collaborated with development team to implement the new design and ensure quality.",
      details: [
        "Design handoff to developers",
        "Quality assurance testing",
        "Performance optimization",
        "Gradual rollout strategy"
      ]
    }
  },
  
  results: {
    title: "Platform Transformation",
    description: "The redesigned platform significantly improved user experience and business metrics.",
    metrics: [
      "Increased user engagement by 45%",
      "Reduced support tickets by 30%",
      "Improved conversion rates",
      "Positive user feedback",
      "Successful platform launch"
    ]
  },
  
  tags: [PROJECT5_TAGS.userExperience, PROJECT5_TAGS.userResearch]
};

// Helper functions for Project 5
export const getProject5Thumbnail = () => ({
  id: PROJECT5_DATA.id,
  image: PROJECT5_DATA.thumbnailImage,
  alt: PROJECT5_DATA.alt,
  title: PROJECT5_DATA.shortTitle,
  tags: PROJECT5_DATA.tags
});

export { PROJECT5_IMAGES, PROJECT5_TAGS }; 