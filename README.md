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

The contact form is functional and ready to use. To enable email sending:

1. **Option 1: Use Resend (Recommended)**
   - Sign up at [Resend](https://resend.com)
   - Get your API key
   - Install: `npm install resend`
   - Update `app/api/contact/route.ts` with Resend integration (see comments in file)

2. **Option 2: Use SendGrid**
   - Sign up at [SendGrid](https://sendgrid.com)
   - Get your API key
   - Install: `npm install @sendgrid/mail`
   - Update the API route accordingly

3. **Option 3: Use Nodemailer with SMTP**
   - Install: `npm install nodemailer`
   - Configure with your SMTP settings
   - Update the API route

Currently, the form logs submissions to the console. Replace the TODO section in `app/api/contact/route.ts` with your preferred email service.

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