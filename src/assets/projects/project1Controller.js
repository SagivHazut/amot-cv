import FirstView from "../Rational_Design_Lab/FirstView.jpg";
import OverView from "../Rational_Design_Lab/portfolio exhibit.mp4";
import Experiments from "../Rational_Design_Lab/Experiment.mp4";
import LogoExplainer from "../Rational_Design_Lab/Logo motion_1.mp4";
import Poster1 from "../Rational_Design_Lab/A.Poster_Sacregicing 03-06.mp4";
import Poster2 from "../Rational_Design_Lab/A.Poster_Parllal 03-06.mp4";
import Webflow from "../Rational_Design_Lab/site video.mp4";
// Project 1 Controller - Academic Bridge
// A Bridge Gap Between Academia and Society

// Project 1 specific images (replace with actual project images)
const PROJECT1_IMAGES = {
  // Used in SECTION 1: Hero Section
  hero: FirstView,
  thumbnail: FirstView,
  // Used in SECTION 6 & 8: Process images and book spreads
  process1: OverView,
  process2:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  process3:
    "https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg?format=2500w",
  // Used in SECTION 3 & 12: Gallery sections
  gallery1: OverView,
};

// Project 1 specific tags
const PROJECT1_TAGS = {
  caseStudy: { text: "Case Study" },
  userResearch: { text: "Concept Design"},
};

// Project 1 complete data
export const PROJECT1_DATA = {
  id: 1,
  title: "Rational Desing Lab",
  subtitle: "Design Case Study",
  shortTitle: "Rational Desing Lab | 2025",
  // Used in SECTION 1: Hero Section
  heroImage: PROJECT1_IMAGES.hero,
  thumbnailImage: PROJECT1_IMAGES.thumbnail,
  video: OverView, // Assuming this is the video for the hero section
  Experiments: Experiments, // Assuming this is the video for experiments
  LogoExplainer: LogoExplainer, // Assuming this is the video for logo explainer
  Poster1: Poster1, // Assuming this is the video for poster 1
  Poster2: Poster2, // Assuming this is the video for poster 2
  Webflow: Webflow, // Assuming this is the video for webflow
  alt: "Rational Desing Lab",

  // Project metadata
  year: "2023",
  client: "Academic Institution",
  role: "UX Designer, Researcher",
  duration: "4 months",

  // Used in SECTION 6 & 8: Process images and book spreads
  processImages: [
    PROJECT1_IMAGES.process1,
    PROJECT1_IMAGES.process2,
    PROJECT1_IMAGES.process3,
  ],
  // Used in SECTION 3 & 12: Gallery sections
  galleryImages: [
    PROJECT1_IMAGES.gallery1,
    PROJECT1_IMAGES.gallery2,
    PROJECT1_IMAGES.gallery3,
    PROJECT1_IMAGES.gallery4,
    PROJECT1_IMAGES.gallery5,
    PROJECT1_IMAGES.gallery6,
  ],

  // Used in SECTION 2: Overview Section
  overview:
    "This project explores the intersection between academic research and real-world application. Through careful analysis and user-centered design, we created a bridge that connects theoretical knowledge with practical implementation.",

  // Used in SECTION 4: The Challenge Section
  challenge:
    "This project challenged me personally. I chose a topic that wasn't close to my hobbies or comfort zone. I developed a concept that explores systems-thinking, interdisciplinary collaboration, and the abstract relationship between research and the public. At first, the topic felt intimidating far from my comfort zone. But that discomfort pushed me to think differently and take creative risks. In the end, that challenge became the reason the project was so meaningful.",

  // Used in SECTION 7: Design Solution Section
  solution:
    "We developed a comprehensive platform that translates complex academic research into actionable insights for practitioners, policymakers, and the general public. The solution includes interactive visualizations, simplified explanations, and practical implementation guides.",

  // Used in SECTION 5: Core Values Section
  coreValues: {
    title: "The lab is grounded in three principles:",
    values: [
      {
        title: "Experimentation",
        description:
          "A safe space for testing ideas and taking creative risks.",
      },
      {
        title: "Collaboration",
        description: "True partnership between designers and scientists",
      },
      {
        title: "Accessibility",
        description:
          "Translating complex knowledge into public-facing experiences.",
      },
    ],
  },

  // Used in SECTION 7: Design Solution Section
  designSolution: {
    sections: [
      {
        title: "Visualise an idea",
        description:
          "Rather than focus on a logo or brand identity, I chose to visualize the lab as a institution. An experimental environment full of potential. These elements aim to communicate the experience of the lab - not just its structure.",
      },
      {
        title: "Methods Motion Posters",
        description:
          'As part of the lab\'s identity, I created a series of animated "Methods Posters": short, looping motion pieces that each visualize a method of collaboration between designers and researchers. The goal was to express process, not outcome to show that design methods are living, evolving tools that help bridge gaps between fields. By using motion and typography together, the posters communicate ideas emotionally and rhythmically, much like field notes or lab sketches brought to life.',
      },
    ],
  },

  // Used in SECTION 9: Description Block
  conceptWebsite: {
    title: "Concept Website",
    description:
      "Instead of designing a traditional site with clean menus and hierarchy, I designed the lab's digital interface to feel like a researcher's desk: scattered, exploratory, and nonlinear. This format invites curiosity and supports the lab's core values: it's experimental in structure, collaborative in tone (feels like you're co-researching), and accessible by using familiar metaphors. The design encourages users to become participants (not just viewers) in the academic-design dialogue.",
  },

  // Used in SECTION 11: Takeaways Section
  takeaways: {
    content: [
      "This project pushed me to rethink the role of design. I began with branding and presentation frameworks, but soon realized they didn't reflect the complexity of the subject. Designing the lab itself as the outcome allowed me to explore new formats like motion posters, interactive simulations, and conceptual identity. It showed me how design can operate as a research strategy, not just a form of output.",
      "The Process Prove me that design isn't always about the final product, sometimes, it's about shaping the space where ideas can grow. By turning the lab into an experience, not just a brand, I learned to think beyond form and create tools for dialogue, access, and collaboration.",
    ],
  },

  // Process details
  process: {
    research: {
      title: "Research & Analysis",
      description:
        "Conducted extensive user research to understand the gap between academic theory and practical application. We interviewed researchers, practitioners, and end-users to identify key pain points and opportunities.",
      details: [
        "Interviewed 25+ stakeholders across academia and industry",
        "Analyzed existing research dissemination methods",
        "Identified key barriers to knowledge transfer",
        "Created user personas and journey maps",
      ],
    },
    design: {
      title: "Design & Prototyping",
      description:
        "Developed comprehensive design solutions that address user needs while maintaining academic rigor. Created wireframes, prototypes, and user interfaces that simplify complex information.",
      details: [
        "Created information architecture",
        "Designed intuitive user interfaces",
        "Developed interactive prototypes",
        "Conducted usability testing sessions",
      ],
    },
    implementation: {
      title: "Implementation & Testing",
      description:
        "Built and tested the platform with real users, iterating based on feedback to ensure effectiveness and usability.",
      details: [
        "Developed MVP with core features",
        "Conducted beta testing with target users",
        "Implemented feedback and improvements",
        "Launched final platform",
      ],
    },
  },

  // Results
  results: {
    title: "Results & Impact",
    description:
      "The project successfully created a meaningful connection between academic research and practical application, resulting in improved user engagement and better understanding of complex theoretical concepts.",
    metrics: [
      "Increased user engagement by 40%",
      "Improved comprehension of academic content by 35%",
      "Enhanced accessibility for diverse audiences",
      "Positive feedback from 90% of users",
      "Reduced time to find relevant research by 50%",
    ],
  },

  // Tags
  tags: [PROJECT1_TAGS.caseStudy, PROJECT1_TAGS.userResearch],
};

// Helper functions for Project 1
export const getProject1Thumbnail = () => ({
  id: PROJECT1_DATA.id,
  image: PROJECT1_DATA.thumbnailImage,
  alt: PROJECT1_DATA.alt,
  title: PROJECT1_DATA.shortTitle,
  tags: PROJECT1_DATA.tags,
});

export { PROJECT1_IMAGES, PROJECT1_TAGS };
