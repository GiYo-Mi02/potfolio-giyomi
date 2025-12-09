# Portfolio Website - GJG

A modern, minimalist portfolio website built with Next.js 14, React 18, TypeScript, and Framer Motion. Features a unique pastel light mode, smooth animations, and a sophisticated design system.

## ✨ Features

### Core Features

- 🎨 **Dual Theme System** - Beautiful pastel light mode & sleek dark mode
- ⚡ **Smooth Animations** - Blur-in text effects, count-up stats, floating elements
- 📱 **Fully Responsive** - Optimized for all devices
- 🎯 **Bento Grid Layout** - Modern project showcase
- 🎭 **Masonry Gallery** - Dynamic highlights with statistics
- 🚀 **Tech Stack Loop** - Infinite scrolling technology carousel
- 🎮 **Dock Navigation** - macOS-style navigation bar
- 💫 **Light Pillars** - Animated background effects
- 🎬 **Framer Motion** - Professional micro-interactions

### Design System

- **Typography**: Space Grotesk + JetBrains Mono
- **Colors**: HSL-based theme variables for consistency
- **Animations**: Custom keyframes (blur-in, fade-in, float, count-up)
- **Components**: Radix UI primitives + shadcn/ui

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.23
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Theme**: next-themes
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Image CDN**: DevIcons, Unsplash

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/GiYo-Mi02/potfolio-giyomi.git

# Navigate to project directory
cd giyomi

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & theme variables
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Main page composition
├── components/
│   ├── portfolio/
│   │   ├── Hero.tsx          # Hero section with blur-in animation
│   │   ├── BentoGrid.tsx     # Project grid with case studies
│   │   ├── PlaySection.tsx   # Side projects listing
│   │   ├── MasonryGallery.tsx # Highlights with count-up stats
│   │   ├── TechStackLoop.tsx  # Infinite tech logo carousel
│   │   ├── DockNav.tsx        # macOS-style navigation
│   │   ├── LightPillar.tsx    # Animated background pillars
│   │   └── Footer.tsx         # Footer with social links
│   └── ui/                    # shadcn/ui components
└── lib/
    └── utils.ts               # Utility functions
```

## 🎨 Key Features Explained

### Blur-In Text Animation

Headlines animate in with a blur effect for dramatic reveal:

```css
@keyframes blur-in {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
}
```

### Count-Up Statistics

Numbers animate from 0 to target value using `requestAnimationFrame`:

- 10K+ Active Users
- 7+ Projects Completed
- 40% Performance Boost
- 2025 Year of Innovation

### Infinite Tech Stack Loop

Seamless scrolling carousel with 18 technologies:

- React, Next.js, TypeScript, Node.js, Python, Java, C#
- MongoDB, PostgreSQL, MySQL, Redis
- Docker, Tailwind CSS, Bootstrap, HTML, CSS, Git, ChatGPT

### Light Pillar Background

Animated vertical light beams with pulsing glow effects using Framer Motion.

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Dynamic imports for modal components
- **CSS Variables**: Theme switching without JS overhead
- **Framer Motion**: Optimized animations with `viewport` detection
- **Font Loading**: Google Fonts with `display=swap`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Dock navigation hidden on mobile, shows on md+
- Bento grid adapts from 1 to 4 columns
- Masonry gallery from 1 to 4 columns

## 🎨 Theme Customization

Edit `src/app/globals.css` to customize theme colors:

```css
:root {
  --background: 330 100% 98%; /* Pinkish background */
  --primary: 262 83% 58%; /* Pastel purple */
  --accent: 180 50% 90%; /* Pastel cyan */
  --secondary: 310 50% 90%; /* Pastel pink */
}
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📊 Project Highlights

### Featured Projects

1. **Interactive DSA Learning Platform** - p5.js visualizations, GPT-4o, Redis
2. **SnapNotes AI** - OCR, AI summarization, quiz generation
3. **Mr. & Ms. UMak Tabulation System** - Real-time scoring
4. **Resume AI Analyzer** - AI-powered feedback
5. **Logistics Management** - Supply chain optimization
6. **Web-Based Photobooth** - Real-time photo capture
7. **CCIS Ticket Automation** - Event management

## 🎓 Skills Showcase

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, Python
- **Databases**: MongoDB, PostgreSQL, MySQL, Supabase, Redis
- **AI/ML**: OpenAI GPT-4o, Deepseek OCR, Puter.js
- **DevOps**: Docker, Git, Vercel
- **Design**: Figma, Responsive Design, Animation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [@GiYo-Mi02](https://github.com/GiYo-Mi02)
- **LinkedIn**: [Your LinkedIn]
- **Email**: [Your Email]

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**

_Available for freelance and full-time opportunities_
