# Portfolio Website

A modern, aesthetic portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Features

- 🎨 Modern aesthetic design with gradient color palette
- 📱 Fully responsive design with mobile menu
- ✨ Smooth animations with Framer Motion
- 🚀 Optimized for performance
- 🌙 Dark theme with glassmorphism effects
- 📊 Showcases professional experience, projects, skills, and certifications
- 📧 Working contact form with API integration
- ⬆️ Scroll-to-top button
- 🎯 Active section highlighting in navigation

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
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts  # Contact form API endpoint
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar with mobile menu
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects section
│   ├── Education.tsx   # Education section
│   ├── Certifications.tsx  # Certifications section
│   ├── Contact.tsx     # Contact section with form
│   └── ScrollToTop.tsx # Scroll to top button
└── public/             # Static assets
```

## Color Palette

The website uses a modern gradient color palette:
- **Primary**: Indigo/Purple (#6366f1)
- **Secondary**: Pink/Purple (#d946ef)
- **Accent**: Rose/Pink (#f43f5e)

## Contact Form Setup

The contact form stores all submissions in a **Supabase database**.

### Quick Setup

1. Create `.env.local` with your Supabase credentials (see `SUPABASE_SETUP.md`)
2. **Run the SQL** from `supabase-setup.sql` in your Supabase SQL Editor to create the table
3. **Install dependencies**: `npm install`

**For Production (Vercel):** Set `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`. Remove the old paused `db_portfolio_rs` integration if deploys fail at provisioning.

For detailed setup instructions, see `SUPABASE_SETUP.md`.

### Features

- ✅ All submissions stored in database
- ✅ Secure with Row Level Security
- ✅ View submissions in Supabase dashboard
- ✅ Track read/replied status
- ✅ No third-party email service needed

**Note**: Make sure to set up the Supabase table and environment variables before deploying.

## Recent Enhancements

- ✅ Updated with LinkedIn profile information
- ✅ Added working contact form with validation
- ✅ Added Certifications section
- ✅ Enhanced navigation with mobile menu
- ✅ Improved animations and hover effects
- ✅ Added scroll-to-top button
- ✅ Enhanced project cards with better visuals
- ✅ Improved accessibility features
- ✅ Better responsive design

## License

MIT License - feel free to use this template for your own portfolio!