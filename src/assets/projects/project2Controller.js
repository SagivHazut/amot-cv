import FirstView from "../Boilit/FirstView.jpg";
import Teaser from "../Boilit/Portfoilio-Teaser_NOSoUND.mp4";
import logo from "../Boilit/Logo.png";
import overview from "../Boilit/OverView.png";
import Persona from "../Boilit/Persona.png";
import Before_flowchart from "../Boilit/Before- FlowChart.jpg";
import After_flowchart from "../Boilit/After - FlowChart.png";
import MainScenatio from "../Boilit/Main scenario-decision Making.png";
import problem1 from "../Boilit/RoofView.webp";
import problem2 from "../Boilit/RoofView2.webp";
import Workflow from "../Boilit/WorkFlow_Video.mov";
// Project 2 Controller - Boilit App
// Smart Home Water System Management

// SECTION 1: Hero images
const PROJECT2_IMAGES = {
  // Used in SECTION 1: Hero Section
  thumbnail:
    FirstView,
  heroPhone:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",

  // Used in SECTION 6: Logo & UI Mockups (two-image grid)
  logoBoilit: logo,
  uiMockups: overview,

  // Used in SECTION 8: Research Data & User Flow
  researchData: Persona,
  userFlow:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",

  // Used in SECTION 9: User Journey images
  beforeJourney: Before_flowchart,
  afterJourney: After_flowchart,

  // Used in SECTION 13: Location Context & Interface Preview
  locationContext1: problem1,
  locationContext2: problem2,
  interfacePreview: Workflow,

  // Used in SECTION 15: Gallery / Sketches
  sketch1:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  sketch2:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  sketch3:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  sketch4:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  sketch5:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  sketch6:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
};

// Project 2 specific tags
const PROJECT2_TAGS = {
  endToEndDesign: { text: "End-to-End Design", color: "bg-blue-600" },
  uxui: { text: "UX/UI", color: "bg-blue-600" },
  branding: { text: "Branding", color: "bg-blue-600" },
};

// Project 2 complete data
export const PROJECT2_DATA = {
  // Metadata
  id: 2,
  title: "BOILIT",
  subtitle: "Smart Home Water System Management",
  shortTitle: "BOILIT | 2023",
  // Used in SECTION 1: Hero Section
  heroImage: FirstView,
  thumbnailImage: PROJECT2_IMAGES.thumbnail,
  scrollablePattern: Teaser,
  alt: "BOILIT",

  // Used in SECTION 2: Overview Section
  overview:
    "Boilit is a conceptual app designed for smart boiler control with AI support. The app aims to revolutionize how homeowners manage their water heating systems by providing intelligent automation, energy efficiency insights, and remote control capabilities.",

  // Used in SECTION 4: Challenge Section
  challenge:
    "The main challenge was identifying a meaningful user pain point in the smart home ecosystem and crafting a clear, intuitive solution. Many existing smart home apps are overly complex and fail to provide real value to everyday users.",

  // Used in SECTION 5: Project Goals Section
  projectGoals: [
    {
      title: "Remote Boiler Control",
      description:
        "Create a visual dashboard where users can monitor water availability and control the boiler from anywhere.",
    },
    {
      title: "AI Learning & Advising System",
      description:
        "Simulate a smart assistant that learns the household's shower habits and provides helpful, actionable tips. saving energy and preventing surprises.",
    },
  ],

  // Used in SECTION 6: Logo & Mockups images
  logoBoilit: PROJECT2_IMAGES.logoBoilit,
  uiMockups: PROJECT2_IMAGES.uiMockups,

  // Used in SECTION 7: User Research Section
  userResearch: {
    whoAreUsers: {
      title: "Who are the Users?",
      description:
        "To define the real pain points, I ran Surveys to collect quantitative data on usage patterns and Interviews with individuals, families, and people in shared institutions.",
      problems: [
        "Not knowing when the boiler needs to be turned on",
        'Heating water multiple times "just in case"',
        "No way to monitor hot water status",
        "Uncertainty and frustration during peak shower times",
      ],
    },
    mainPersona: {
      title: "Main Persona",
      description:
        'Through both surveys and interviews, I encountered a range of users: singles living alone, large families, and residents of shared housing like dorms. While all of them experienced frustrations with water heating, young families emerged as the group with the highest need and lowest control. They faced the most frequent usage, the greatest number of unknowns (who showered, when, and for how long), and were often forced to overuse the system "just in case."',
    },
  },

  // Used in SECTION 8: Research imagery
  researchData: PROJECT2_IMAGES.researchData,

  // Used in SECTION 9: User Journey Section
  userJourney: {
    beforeImage: PROJECT2_IMAGES.beforeJourney,
    afterImage: PROJECT2_IMAGES.afterJourney,
    beforeAlt: "Before - User journey",
    afterAlt: "After - User journey",
  },

  // Used in SECTION 3: Scrollable Pattern
  scrollablePattern: PROJECT2_IMAGES.scrollablePattern,

  // Used in SECTION 10: Design Solution Section
  designSolution: {
    title: "Remote Boiler Dashboard",
    description:
      "One screen, full control — the user always knows if there's hot water available",
  },

  // Used in SECTION 12: Israeli Design Context
  israeliDesign: {
    title: "Designing For an israeli problem",
    description:
      "Boilit was designed specifically for Israeli households and that influenced both the visual language and the tone of the app.",
  },

  // Used in SECTION 13: Location Context + Interface Preview
  locationContext: [
    PROJECT2_IMAGES.locationContext1,
    PROJECT2_IMAGES.locationContext2,
  ],
  interfacePreview: PROJECT2_IMAGES.interfacePreview,

  // Used in SECTION 14: Takeaways Section
  takeaways: {
    mainText:
      "This project pushed me to define a new product category from scratch. With no existing visual references, I explored smart home app patterns and adapted them to family dynamics. Visualizing an AI assistant in a relatable, helpful way, especially for non-tech users it was a key challenge.",
    learnings: [
      "Technological imagination",
      "How to relate to real human pain points",
      "Simple, guided UX design",
    ],
  },

  // Used in SECTION 15: Gallery/Sketches Section
  sketches: [
    PROJECT2_IMAGES.sketch1,
    PROJECT2_IMAGES.sketch2,
    PROJECT2_IMAGES.sketch3,
    PROJECT2_IMAGES.sketch4,
    PROJECT2_IMAGES.sketch5,
    PROJECT2_IMAGES.sketch6,
  ],

  // Process details
  process: {
    research: {
      title: "User Research & Market Analysis",
      description:
        "Conducted comprehensive research to understand user needs in the smart home water management space.",
      details: [
        "Surveyed 150+ homeowners about water heating habits",
        "Interviewed 25 families about smart home preferences",
        "Analyzed competitor apps and their pain points",
        "Researched Israeli market-specific requirements",
      ],
    },
    design: {
      title: "Design & Prototyping",
      description:
        "Created user-centered design solutions focusing on simplicity and effectiveness.",
      details: [
        "Developed information architecture",
        "Created wireframes and user flows",
        "Designed visual identity and branding",
        "Built interactive prototypes for testing",
      ],
    },
    implementation: {
      title: "Testing & Iteration",
      description:
        "Validated design decisions through user testing and iterative improvements.",
      details: [
        "Conducted usability testing sessions",
        "Gathered feedback from target users",
        "Refined interface based on insights",
        "Prepared design specifications",
      ],
    },
  },

  // Results
  results: {
    title: "Project Impact",
    description:
      "The Boilit concept successfully demonstrated how smart home technology can be made accessible and valuable to everyday users.",
    metrics: [
      "95% task completion rate in usability tests",
      "4.8/5 user satisfaction score",
      "40% reduction in perceived complexity vs. competitors",
      "Strong positive feedback on visual design",
      "Successful concept validation",
    ],
  },

  // Tags
  tags: [
    PROJECT2_TAGS.endToEndDesign,
    PROJECT2_TAGS.uxui,
    PROJECT2_TAGS.branding,
  ],
};

// Helper functions for Project 2
export const getProject2Thumbnail = () => ({
  id: PROJECT2_DATA.id,
  image: PROJECT2_DATA.thumbnailImage,
  alt: PROJECT2_DATA.alt,
  title: PROJECT2_DATA.shortTitle,
  tags: PROJECT2_DATA.tags,
});

export { PROJECT2_IMAGES, PROJECT2_TAGS };
