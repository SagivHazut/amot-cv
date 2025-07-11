# Amit Buhbut - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing Amit's design work with a clean, professional layout.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with a 4-column grid layout
- **Dark Theme**: Professional dark color scheme
- **Component-Based Architecture**: Modular, reusable React components
- **Centralized Asset Management**: All assets managed from a single configuration file
- **Modern UI**: Clean typography and intuitive navigation

## 📁 Project Structure

```
src/
├── components/
│   ├── index.js              # Component exports
│   ├── ProfileSection.js     # Profile information sidebar
│   ├── PortfolioGallery.js   # Main portfolio grid
│   ├── ProjectItem.js        # Individual project component
│   └── TagBadge.js           # Tag/label component
├── assets/
│   └── index.js              # Centralized asset management
├── App.js                    # Main application component
├── App.css                   # Application styles
└── index.css                 # Global styles with Tailwind
```

## 🎨 Components

### ProfileSection
- Displays profile image, name, description, and contact information
- Fully responsive sidebar layout
- Configurable via assets file

### PortfolioGallery
- Grid-based portfolio display
- Responsive 2-column layout
- Supports any number of projects

### ProjectItem
- Individual project display with image
- Optional tag overlay support
- Hover effects and responsive behavior

### TagBadge
- Reusable tag/label component
- Customizable colors and text
- Used for project categorization

## 🔧 Asset Management

All static content is managed through `src/assets/index.js`:

```javascript
export const ASSETS = {
  profile: {
    image: "...",
    name: "...",
    description: "...",
    email: "...",
    contactTitle: "..."
  },
  projects: [
    {
      id: 1,
      image: "...",
      alt: "...",
      tags: [...] // Optional tags
    }
  ],
  colors: {
    background: "#1a202c",
    text: "#cbd5e0",
    // ... other theme colors
  }
};
```

### Benefits of Centralized Assets:
- **Easy Updates**: Change all content from one location
- **Consistency**: Ensures uniform styling across components
- **Maintainability**: Simple to add/remove projects or update information
- **Version Control**: Track changes to content easily

## 🎯 Customization

### Adding New Projects
1. Open `src/assets/index.js`
2. Add new project object to the `projects` array:
```javascript
{
  id: 7,
  image: "your-image-url",
  alt: "Project Description",
  tags: [
    { text: "Tag Name", color: "bg-blue-600" }
  ]
}
```

### Updating Profile Information
1. Modify the `profile` object in `src/assets/index.js`
2. All profile components will automatically update

### Customizing Colors
1. Update the `colors` object in assets
2. Modify Tailwind classes in components as needed

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

## 🎨 Styling

This project uses:
- **Tailwind CSS**: Utility-first CSS framework
- **Dark Theme**: Professional color scheme
- **Responsive Design**: Mobile-first approach
- **Modern Typography**: Clean, readable fonts

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout
- **Tablet**: Adjusted grid spacing
- **Desktop**: Full 4-column layout with sidebar

## 🔄 Future Enhancements

- Add project detail pages
- Implement image lazy loading
- Add animation transitions
- Include contact form
- Add project filtering by tags
- Implement dark/light theme toggle

## 📄 License

This project is created for Amit Buhbut's portfolio. All rights reserved.

---

Built with ❤️ using React and Tailwind CSS
# amot-cv
