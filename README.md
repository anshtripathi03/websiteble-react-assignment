# Elementum Studio

A pixel-perfect, production-ready React application built with Vite, TypeScript, Tailwind CSS, and Framer Motion, matching the exact specifications of the provided Figma design.

## 🚀 Teck Stack

- **React 19** with **Vite**
- **TypeScript** (Strict Mode)
- **Tailwind CSS v4** (Modern CSS-first approach)
- **Framer Motion** (Professional animations & micro-interactions)
- **Lucide React** (Consistent iconography)

## ✨ Key Features

- **Pixel-Perfect UI**: Precisely implemented design system based on Figma tokens (colors, typography, spacing).
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop viewports.
- **Advanced Skeleton Loading**: Robust shimmer-effect skeletons for all sections, matching the actual content layouts.
- **Dynamic Animations**: Scroll-triggered fade-ins, floating decorative elements, and smooth interactions.
- **Lazy Loading**: High performance with code-split sections using `React.lazy` and `Suspense`.
- **Production-Ready**: Multi-stage Docker setup and clean, modular architecture.

## 🛠️ Project Structure

```text
/src
├── components/   # Reusable UI atoms (Button, Card, Skeleton)
├── sections/     # Main page sections (Hero, Intro, Services, etc.)
├── hooks/        # Custom utility hooks (InView, ScrollSpy)
├── utils/        # Constants and helpers
├── types/        # TypeScript interfaces
└── assets/       # Static assets and images
```

## 🏁 Getting Started

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```

### Docker Usage

1. **Build the image**:
   ```bash
   docker build -t app .
   ```

2. **Run the container**:
   ```bash
   docker run -p 3000:3000 app
   ```

The application will be accessible at `http://localhost:3000`.

## 🎨 Design System

- **Colors**:
  - Background: `#F8F9FA`
  - Primary Text: `#000000`
  - Highlights: Yellow (`#FFB703`), Pink (`#FF8AB2`), Mint (`#D1FFD7`), Purple (`#9B51E0`)
- **Typography**:
  - Headings: Outfit (Modern rounded display)
  - Body: Inter (Clean sans-serif)

---
Built with ❤️ by Antigravity
