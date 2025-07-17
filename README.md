# Text on Path Animation

A beautiful React application featuring animated text flowing along a custom SVG path, built with GSAP, TypeScript, and Tailwind CSS.

## ✨ Features

- **Smooth Text Animation**: Characters flow seamlessly along a custom SVG path using GSAP MotionPath
- **Interactive Controls**: Hover over the animation to pause/resume
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Paper Texture**: Authentic paper background with theme-specific blend modes
- **Performance Optimized**: Efficient character spacing and animation management

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **GSAP** (GreenSock Animation Platform)
  - MotionPathPlugin for path-based animations
  - SplitText for character manipulation
- **Tailwind CSS** for styling and responsive design
- **Vite** for fast development and building
- **Context API** for theme management

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd type-on-path
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Modifying the Text

Edit the text content in `src/components/TextOnPath.tsx`:

```typescript
<p ref={textRef}>
  Your custom text here...
</p>
```

### Changing the Path

The SVG path can be modified in the `<path>` element within `TextOnPath.tsx`. Use any SVG path editor or create custom paths programmatically.

### Adjusting Animation Speed

Modify the animation duration in the GSAP configuration:

```typescript
const animation = gsap.to(char, {
  duration: 200, // Adjust this value
  repeat: -1,
  ease: "none",
  // ... other properties
});
```

### Theme Customization

Update theme colors in `src/lib/theme.ts` and corresponding Tailwind classes throughout the components.

## 📁 Project Structure

```
src/
├── components/
│   ├── TextOnPath.tsx      # Main animation component
│   └── ThemeToggle.tsx     # Theme switcher
├── contexts/
│   └── ThemeContext.tsx    # Theme state management
├── lib/
│   └── theme.ts           # Theme utilities
├── styles/
│   └── grid.css           # Grid layout styles
├── assets/
│   ├── Texturelabs_Paper_154XL.jpg
│   └── yoga.png
└── App.tsx                # Main application component
```

## 🎯 Key Components

### TextOnPath Component

- Splits text into individual characters
- Animates each character along the SVG path
- Handles hover interactions for play/pause
- Manages animation cleanup

### Theme System

- Context-based theme management
- Smooth transitions between light/dark modes
- Theme-specific image treatments and blend modes

## 🔧 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💡 Inspiration

This project demonstrates advanced web animations and serves as an example of how to create engaging user experiences with modern web technologies.

---

Built with ❤️ using React, GSAP, and TypeScript
