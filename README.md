# Speak Tutor Landing Page
A modern, interactive landing page featuring a unique 3D book page-turning animation effect. Built with React and Tailwind CSS, this project showcases smooth animations and responsive design inspired by Apple's minimalist philosophy.

##  Tech Stack
- **React 18** - Component-based UI library
- **Tailwind CSS v3** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Vite** - Fast build tool and dev server
- **CSS 3D Transforms** - For page-turning animations
- **Intersection Observer API** - For scroll-based animations
- **handlePageChange(direction)** - Manages page transitions with debouncing
- **useEffect hooks** - Set up event listeners for scroll, keyboard, and touch
- **Dynamic styling** - Calculates 3D transforms based on page position

### Component Features

1. **Page Management**: Array-based page system with dynamic content rendering
2. **Event Handling**: Multiple input methods (mouse, keyboard, touch)
3. **Animation Control**: Transition state management prevents overlapping animations
4. **Accessibility**: Keyboard navigation.

**Key Features**:
- **Perspective**: Creates 3D space (1000px depth)
- **Transform Origin**: Right edge for previous, left for next
- **Rotation**: 90-degree Y-axis rotation for page flip
- **Translation**: -100% or +100% horizontal movement

### Build the project
bash
npm run build


### Preview production build
bash
npm run preview


