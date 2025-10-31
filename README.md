# Speak Tutor Landing Page
A modern, interactive landing page featuring a unique 3D book page-turning animation effect. Built with React and Tailwind CSS, this project showcases smooth animations and responsive design inspired by Apple's minimalist philosophy.

##  Tech Stack
- **React 18** - Component-based UI library
- **Tailwind CSS v3** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Vite** - Fast build tool and dev server
- **CSS 3D Transforms** - For page-turning animations
- **Intersection Observer API** - For scroll-based animations


## Component Structure
SpeakTutorLanding/
├── State Management
│   ├── currentPage - Tracks active page index
│   ├── isTransitioning - Prevents rapid page changes
│   └── touchStartY - Tracks touch gestures
│
├── Pages Array (4 sections)
│   ├── Stay Motivated - Goal tracking section
│   ├── Talk About Anything - Topic selection
│   ├── Build Relationship - Personalized curriculum
│   └── Hero - Testimonial section
│
├── Navigation System
│   ├── handlePageChange() - Core navigation logic
│   ├── Wheel event listener - Mouse scroll
│   ├── Keyboard event listener - Arrow keys
│   └── Touch event listeners - Swipe gestures
│
└── UI Elements
    ├── Page content renderer - Dynamic content display
    ├── Page indicators - Right-side navigation dots
    ├── Navigation hints - Bottom navigation UI
    └── Footer - Displayed on last pag

- **`handlePageChange(direction)`** - Manages page transitions with debouncing
- **`useEffect` hooks** - Set up event listeners for scroll, keyboard, and touch
- **Dynamic styling** - Calculates 3D transforms based on page position

### Component Features

1. **Page Management**: Array-based page system with dynamic content rendering
2. **Event Handling**: Multiple input methods (mouse, keyboard, touch)
3. **Animation Control**: Transition state management prevents overlapping animations
4. **Accessibility**: Keyboard navigation and ARIA labels

**Key Features**:
- **Perspective**: Creates 3D space (1000px depth)
- **Transform Origin**: Right edge for previous, left for next
- **Rotation**: 90-degree Y-axis rotation for page flip
- **Translation**: -100% or +100% horizontal moveme

speak-tutor/
├── public/
├── src/
│   ├── components/
│   │   └── SpeakTutorLanding.jsx  # Main component
│   ├── App.jsx                     # App entry point
│   ├── index.css                   # Tailwind directives
│   └── main.jsx                    # React entry point
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

### Build the project
```bash
npm run build


### Preview production build
```bash
npm run preview


