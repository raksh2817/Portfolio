# Portfolio Website

A modern, aesthetic portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Features

- 🎨 Modern aesthetic design with gradient color palette
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🚀 Optimized for performance
- 🌙 Dark theme with glassmorphism effects
- 📊 Showcases professional experience, projects, and skills

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects section
│   ├── Education.tsx   # Education section
│   └── Contact.tsx     # Contact section
└── public/             # Static assets
```

## Color Palette

The website uses a modern gradient color palette:
- **Primary**: Indigo/Purple (#6366f1)
- **Secondary**: Pink/Purple (#d946ef)
- **Accent**: Rose/Pink (#f43f5e)

## License

MIT License - feel free to use this template for your own portfolio!