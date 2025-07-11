// Project 6 Controller - Brand Identity
// Branding Project

// Project 6 specific images (replace with actual project images)
const PROJECT6_IMAGES = {
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

// Project 6 specific tags (no tags for this project)
const PROJECT6_TAGS = {};

// Project 6 complete data
export const PROJECT6_DATA = {
  id: 6,
  title: "BRAND IDENTITY",
  subtitle: "Branding Project",
  shortTitle: "Brand Identity",
  heroImage: PROJECT6_IMAGES.hero,
  thumbnailImage: PROJECT6_IMAGES.thumbnail,
  alt: "Brand Identity Project",
  
  year: "2023",
  client: "Startup Company",
  role: "Brand Designer",
  duration: "3 months",
  
  processImages: [PROJECT6_IMAGES.process1, PROJECT6_IMAGES.process2, PROJECT6_IMAGES.process3],
  galleryImages: [PROJECT6_IMAGES.gallery1, PROJECT6_IMAGES.gallery2, PROJECT6_IMAGES.gallery3, PROJECT6_IMAGES.gallery4, PROJECT6_IMAGES.gallery5, PROJECT6_IMAGES.gallery6],
  
  overview: "Developed a comprehensive brand identity that reflects the company's values and resonates with their target audience.",
  
  challenge: "The startup needed a strong brand identity that would differentiate them in a competitive market and build trust with customers.",
  
  solution: "Created a cohesive brand system including logo, color palette, typography, and brand guidelines.",
  
  process: {
    research: {
      title: "Brand Research",
      description: "Conducted research to understand the company's values, target audience, and competitive landscape.",
      details: [
        "Company values and mission analysis",
        "Target audience research",
        "Competitive brand analysis",
        "Market positioning strategy"
      ]
    },
    design: {
      title: "Brand Design",
      description: "Developed visual elements that communicate the brand's personality and values.",
      details: [
        "Logo design and variations",
        "Color palette development",
        "Typography selection",
        "Visual style guidelines"
      ]
    },
    implementation: {
      title: "Brand Implementation",
      description: "Created comprehensive brand guidelines and implemented across all touchpoints.",
      details: [
        "Brand guidelines documentation",
        "Marketing materials design",
        "Digital asset creation",
        "Brand training for team"
      ]
    }
  },
  
  results: {
    title: "Brand Success",
    description: "The new brand identity successfully positioned the company and improved brand recognition.",
    metrics: [
      "Increased brand recognition by 60%",
      "Improved customer trust scores",
      "Positive market reception",
      "Successful brand launch",
      "Enhanced company credibility"
    ]
  },
  
  tags: []
};

// Helper functions for Project 6
export const getProject6Thumbnail = () => ({
  id: PROJECT6_DATA.id,
  image: PROJECT6_DATA.thumbnailImage,
  alt: PROJECT6_DATA.alt,
  title: PROJECT6_DATA.shortTitle,
  tags: PROJECT6_DATA.tags
});

export { PROJECT6_IMAGES, PROJECT6_TAGS }; 