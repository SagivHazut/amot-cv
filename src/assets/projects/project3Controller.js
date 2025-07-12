import FirstView from "../Gong_Magazine/1 - FirstView.jpg";
import MagaView1 from "../Gong_Magazine/2 - HoldMAgazine.png";
import MagaView2 from "../Gong_Magazine/3 - SideofMagazinr.png";
import MagaView3 from "../Gong_Magazine/4 MagazinPresent.png";
import WideView from "../Gong_Magazine/7 - Viewmagazine.jpg";
import Grid1 from "../Gong_Magazine/GridOrchid.png";
import Grid2 from "../Gong_Magazine/6 - GridContibuters.png";
// Project 3 Controller - Design System
// System Design Project

// SECTION 1: Hero & Thumbnails plus additional imagery mapped to UI sections
const PROJECT3_IMAGES = {
  // Used in SECTION 1 of the detail page
  hero: FirstView,
  thumbnail: FirstView,

  // Used in SECTION 6 (Full-width image)
  scrollablePattern: WideView,

  // Used in SECTION 4 (Two-image grid)
  process2: Grid2,
  process3: Grid1,
 

  // Used in SECTION 6 (Full-width images)
  interfacePreview: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  researchData: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  userFlow: "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",

  // Used in SECTION 3 (Gallery grid)
  gallery1: MagaView1,
  gallery2: MagaView2,
  gallery3: MagaView3,
  gallery4: "https://images.squarespace-cdn.com/content/v1/60f1a490/gallery4.jpeg",
  gallery5: "https://images.squarespace-cdn.com/content/v1/60f1a490/gallery5.jpeg",
  gallery6: "https://images.squarespace-cdn.com/content/v1/60f1a490/gallery6.jpeg"
};

// Project 3 specific tags
const PROJECT3_TAGS = {
  userExperience: { text: "Editorial Design", color: "bg-indigo-600" }
};

// Project 3 complete data
export const PROJECT3_DATA = {
  id: 3,
  title: "GONG MAGAZINE",
  subtitle: "System Design Project",
  shortTitle: "GONG MAGAZINE | 202",
  // Corresponds to SECTION 1 in the detail page view
  heroImage: PROJECT3_IMAGES.hero,
  thumbnailImage: PROJECT3_IMAGES.thumbnail,
  alt: "GONG MAGAZINE",
  
  year: "2023",
  client: "Enterprise Company",
  role: "Design System Lead",
  duration: "6 months",
  
  // Corresponds to SECTION 4 in the detail page view
  processImages: [PROJECT3_IMAGES.process1, PROJECT3_IMAGES.process2, PROJECT3_IMAGES.process3],
  // Corresponds to SECTION 3 in the detail page view
  galleryImages: [PROJECT3_IMAGES.gallery1, PROJECT3_IMAGES.gallery2, PROJECT3_IMAGES.gallery3, PROJECT3_IMAGES.gallery4, PROJECT3_IMAGES.gallery5, PROJECT3_IMAGES.gallery6],
  // Corresponds to SECTION 6 in the detail page view
  scrollablePattern: PROJECT3_IMAGES.scrollablePattern,

  // Corresponds to SECTION 2 in the detail page view
  overview: "Shared Campus is an international platform that brings together students from a wide range of academic fields including the arts, humanities, social sciences, and more across universities and colleges around the world. In this project, participants contributed written pieces, research, and visual content around a shared theme, collaboratively chosen by the group.Our college was invited to design and edit the final publication. I was first selected by the Head of the Visual Communication Department to develop the magazine’s grid system, and later appointed alongside my partner Shahar Ogalbo — as one of the lead editorial designers.Together, we curated and structured the content into a unified editorial experience that balances cultural diversity, visual clarity, and meaningful storytelling giving form to a truly global conversation.",
  
  // Corresponds to SECTION 5 in the detail page view
  buildingGrids: "Given the wide range of cultural backgrounds, content types, and personal voices submitted to Gong, we needed a flexible yet cohesive grid system—one that could adapt to each contribution while maintaining a unified visual language.We designed an 8-column variable grid, which allowed us to carefully tailor the layout of each article or visual piece. For every contribution, we considered how to present the content in a way that respects its tone, format, and meaning, while still aligning with the magazine’s overall structure and rhythm. This approach helped us create a publication where every voice feels seen, and every page feels connected.",
  
  solution: "Created a scalable design system with reusable components, clear guidelines, and comprehensive documentation.",
  
  process: {
    research: {
      title: "Audit & Analysis",
      description: "Conducted a comprehensive audit of existing design patterns and identified inconsistencies.",
      details: [
        "Audited existing design patterns",
        "Identified inconsistencies and gaps",
        "Analyzed user feedback and pain points",
        "Mapped current component usage"
      ]
    },
    design: {
      title: "System Design",
      description: "Designed a comprehensive system with clear principles and reusable components.",
      details: [
        "Established design principles",
        "Created component library",
        "Developed style guide",
        "Built interactive documentation"
      ]
    },
    implementation: {
      title: "Implementation & Adoption",
      description: "Implemented the design system across teams and provided training and support.",
      details: [
        "Rolled out to development teams",
        "Provided training and workshops",
        "Created implementation guidelines",
        "Established maintenance processes"
      ]
    }
  },
  
  results: {
    title: "System Impact",
    description: "The design system significantly improved consistency, efficiency, and user experience across all products.",
    metrics: [
      "Reduced design time by 60%",
      "Improved design consistency by 80%",
      "Faster development cycles",
      "Better user experience scores",
      "Increased team productivity"
    ]
  },
  
  tags: [PROJECT3_TAGS.userExperience]
};

// Helper functions for Project 3
export const getProject3Thumbnail = () => ({
  id: PROJECT3_DATA.id,
  image: PROJECT3_DATA.thumbnailImage,
  alt: PROJECT3_DATA.alt,
  title: PROJECT3_DATA.shortTitle,
  tags: PROJECT3_DATA.tags
});

export { PROJECT3_IMAGES, PROJECT3_TAGS }; 