# EasySoft – Smart Software Solutions

A modern Next.js 14 website for EasySoft, a software development agency. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn. 

### Installation 

```bash
# Clone or unzip the project
cd easysoft

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
easysoft/
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # 404 page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── projects/
│   │   ├── page.tsx            # Projects list (with filter)
│   │   └── [id]/
│   │       └── page.tsx        # Dynamic project detail
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── dashboard/
│   │   └── page.tsx            # Admin dashboard
│   └── login/
│       └── page.tsx            # Login page
├── components/
│   ├── Header.tsx              # Navbar with dark mode + responsive menu
│   ├── Footer.tsx              # Footer with links
│   ├── ProjectCard.tsx         # Project card with animations
│   ├── ServiceCard.tsx         # Service card with hover effects
│   ├── ContactForm.tsx         # Form with validation + loading state
│   └── Sidebar.tsx             # Collapsible dashboard sidebar
├── data/
│   ├── projects.ts             # Sample project data (6 projects)
│   └── services.ts             # Sample services data (6 services)
├── styles/
│   └── globals.css             # Global styles + Tailwind imports
├── public/
│   └── images/                 # Static images directory
├── tailwind.config.ts          # Tailwind config with brand colors
├── next.config.js              # Next.js config
└── tsconfig.json               # TypeScript config
```

---

## 🎨 Brand Colors

| Name | Hex |
|------|-----|
| Brand Green | `#4ADE80` |
| Green Dark | `#16A34A` |
| Background Dark | `#0c2501` |
| Card Background | `#0F2318` |

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home – Hero, Services, Projects, Testimonials, FAQ |
| `/about` | About – Story, Values, Timeline, Team |
| `/services` | Services – All 6 services + Process steps |
| `/projects` | Projects – Filterable project grid |
| `/projects/[id]` | Project Detail – Dynamic page with full case study |
| `/contact` | Contact – Contact form + info |
| `/dashboard` | Admin Dashboard – Stats, projects table, activity |
| `/login` | Login – Admin login form |

---

## 🛠️ Tech Stack

- **Next.js 14** – App Router, SSG, dynamic routes
- **React 18** – Client & server components
- **TypeScript** – Fully typed
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Smooth animations on scroll + hover
- **Lucide React** – Icon library

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌙 Dark Mode

Dark mode is enabled by default and uses the `class` strategy. Toggle button is in the Header. Preference is saved to `localStorage`.

---

© 2024 EasySoft. All rights reserved.
