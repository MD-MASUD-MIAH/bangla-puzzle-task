# The Tiny Site - Front-end Development Task
### Submission for Intern Front-end Developer Position at Bangla Puzzle Limited

A pixel-perfect, fully responsive landing page replica of [thetiny.site](https://thetiny.site) developed with modern React, Tailwind CSS, and Lucide Icons.

---

## 🚀 Live Demo & Features

- **Pixel-Perfect & Modern UI:** Designed meticulously matching the layout, typography, colors, badges, and card hierarchies of `thetiny.site`.
- **100% Mobile & Tablet Responsive:** Built using a mobile-first approach with flexible grids and adaptive typography.
- **Interactive URL Shortener Demo:** Live input form allowing users to test URL shortening with instant copy feedback.
- **Dynamic Popular Links Section:** Interactive copy button with live state feedback, plus a modal displaying a generated QR Code for any link.
- **Live Analytics Showcase:** Custom dashboard visual card with interactive metric bars and animations.
- **Transparent Pricing Section:** Responsive 3-tier pricing layout with the highlighted "Pro" plan card.
- **Interactive Modals:** Included QR code preview modal and authentication modal (Sign In / Sign Up).
- **Clean Component Architecture:** Cleanly organized inside `src/components/` and `src/data/` for maintainability.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG Icons
- **Typography:** Plus Jakarta Sans & Inter (via Google Fonts)

---

## 📁 Project Structure

```text
bangla-puzzle-task/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Brand logos & graphics
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx              # Responsive header & mobile menu
│   │   ├── HeroSection.jsx         # Hero title, badge & interactive shortener box
│   │   ├── StatsSection.jsx        # Metrics bar (100K+, 1M+, 180+, 99.9%)
│   │   ├── PopularLinks.jsx        # Clickable popular links list with copy & QR
│   │   ├── FeatureHighlight.jsx    # Feature bullets & live analytics dashboard
│   │   ├── PricingSection.jsx      # Free, Pro (featured), & Business plans
│   │   ├── TestimonialSection.jsx  # Customer reviews with 5-star rating
│   │   ├── WhyChooseUs.jsx         # 6-card grid with feature icons
│   │   ├── Footer.jsx              # 4-column footer & copyright
│   │   ├── QrModal.jsx             # Interactive QR code viewer modal
│   │   ├── AuthModal.jsx           # Sign In / Sign Up modal
│   │   └── SocialIcons.jsx         # Optimized vector social icons
│   ├── data/
│   │   └── mockData.js             # Structured data (links, pricing, stats, features)
│   ├── App.jsx                     # Root application container & modal states
│   ├── index.css                   # Tailwind CSS root imports
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML layout & typography imports
├── vite.config.js                  # Vite configuration with Tailwind plugin
└── package.json                    # Project metadata & dependencies
```

---

## 💻 How to Run Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## 📦 Submission Guidelines

Before sending:
1. Push to your GitHub repository or zip this directory.
2. If zipping, exclude `node_modules/` and `dist/` to keep the file lightweight.
3. Rename the zip file as requested:
   `YourName_ Intern Front-end Developer.zip`
