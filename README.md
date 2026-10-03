# Michael Lee - Software Developer Portfolio

A portfolio with working demos for IT support, hospitality operations, tutoring workflows, and reusable writing templates.

## 🎯 Purpose

This portfolio is built to help win interviews by demonstrating:
- **Real product thinking** - Projects are framed as business solutions, not just code exercises
- **Professional presentation** - Clean, modern design that matches industry standards
- **Practical skills** - Focus on business tools, dashboards, and AI-assisted applications
- **Full-stack capability** - Complete applications from database to user interface

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS Variables
- **Design System**: Professional color palette, typography scale, and spacing system
- **Animations**: CSS animations and transitions
- **Icons**: Inline SVG icons
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
saleem-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with smooth scrolling
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero section with animated cards
│   │   ├── Hero.css
│   │   ├── About.jsx           # Professional bio and highlights
│   │   ├── About.css
│   │   ├── Skills.jsx          # Categorized skills display
│   │   ├── Skills.css
│   │   ├── Projects.jsx        # Featured projects section
│   │   ├── Projects.css
│   │   ├── ProjectCard.jsx     # Reusable premium project card
│   │   ├── ProjectCard.css
│   │   ├── Services.jsx        # Services offered
│   │   ├── Services.css
│   │   ├── Contact.jsx         # Contact information and CTA
│   │   ├── Contact.css
│   │   ├── Footer.jsx          # Footer with links
│   │   └── Footer.css
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and design system
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Philosophy

### Visual Design
- **Modern & Minimal**: Clean layouts with intentional whitespace
- **Professional Color Palette**: Blue primary color (#2563eb) with neutral grays
- **Typography**: Inter font family with clear hierarchy
- **Consistent Spacing**: CSS variables for uniform spacing throughout
- **Subtle Animations**: Smooth transitions and hover effects

### Content Strategy
- **Business-Focused Copy**: Projects framed as solutions to real problems
- **Recruiter-Friendly**: Easy to scan, clear value propositions
- **Professional Tone**: Grounded, specific language without generic phrases
- **Case Study Format**: Projects presented with problem, solution, and features

### User Experience
- **Smooth Navigation**: Anchor links with smooth scrolling
- **Responsive Design**: Fully responsive across all device sizes
- **Fast Loading**: Optimized with Vite for quick load times
- **Accessible**: Semantic HTML and proper ARIA labels

## 🛠️ Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Connect Live Project Demos

RallyTab and SkillBridge AI point to their verified Vercel deployments by default. ResolveIT and Seamless have runnable web demos on GitHub Pages:

- `#/demos/resolveit`: diagnostics, remote-action simulation, resolution gating, technician notes, and employee updates.
- `#/demos/seamless`: template search, folder filters, favorites, variable filling, and draft insertion.

Both embedded demos save only local browser state, support reset, and remain usable if browser storage is unavailable. Seamless also links to its Chrome Web Store listing.

Optional deployment overrides belong in `.env.local`:

```bash
VITE_RALLYTAB_DEMO_URL=https://rally-tab.vercel.app
VITE_RESOLVEIT_DEMO_URL=
VITE_SKILLBRIDGE_DEMO_URL=https://skillbridge-ai-cyan.vercel.app
```

ResolveIT's external deployment must expose `/workspace` and `/employee`. With no override, its card opens the embedded support workflow. GitHub Pages builds do not depend on a developer's untracked `.env` file.

Pushing `main` runs `.github/workflows/deploy-pages.yml`, builds the site, and publishes it to https://michaelleethedev.github.io/Portfolio-Website-/.

## 📋 Featured Projects

### 1. ResolveIT
Interactive IT support operations demo for triaging incidents, inspecting device health, running guided VPN diagnostics, and verifying employee-facing support updates.

### 2. RallyTab
Sports-bar ordering and operations platform with guest mobile ordering, staff dashboards, kitchen tickets, service requests, and table-aware workflows.

### 3. SkillBridge AI
EdTech dashboard concept for reviewing fictional student progress, identifying learning gaps, and generating practical tutoring plans.

### 4. Seamless
Live Chrome extension for organizing, searching, favoriting, and inserting reusable writing templates directly in the browser.

## 🎯 Key Features

- **Sticky Navigation**: Always accessible navigation with smooth scrolling
- **Animated Hero Section**: Eye-catching hero with floating cards
- **Premium Project Cards**: Case-study style project presentation
- **Project Detail Pages**: Shareable case studies for each main project
- **Recruiter CTA Bar**: Sticky Resume, GitHub, LinkedIn, and Email actions
- **Skills Categorization**: Organized by Frontend, Backend, Tools, and Focus Areas
- **Services Section**: Clear positioning for both employment and freelance
- **Contact Integration**: Multiple contact methods with clear CTAs
- **Mobile Responsive**: Optimized for all screen sizes
- **Professional Copy**: No lorem ipsum, all realistic content

## 🔧 Customization

### Update Personal Information

1. **Contact Details** (`src/components/Contact.jsx`):
   - Update email, GitHub, LinkedIn, and Fiverr links
   - Modify contact message

2. **Projects** (`src/components/Projects.jsx`):
   - Update GitHub repository links
   - Add live demo URLs when available
   - Customize project descriptions

3. **Skills** (`src/components/Skills.jsx`):
   - Add or remove skills in each category
   - Adjust skill categories as needed

4. **About Section** (`src/components/About.jsx`):
   - Customize the professional bio
   - Update highlight cards

### Update Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-secondary: #0f172a;
  /* ... other colors */
}
```

### Add Resume

Place your resume PDF in the `public/` folder as `resume.pdf` for the download buttons to work.

## 🚀 Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist/` folder to an S3 bucket

## 📈 Future Improvements

- [ ] Add blog section for technical writing
- [ ] Implement dark mode toggle
- [ ] Add more project screenshots as each demo matures
- [ ] Integrate contact form with backend service
- [ ] Add testimonials section
- [ ] Implement analytics tracking
- [ ] Add more interactive animations
- [x] Create case study pages for each project

## 📄 License

This project is open source and available for personal use. Feel free to use this as a template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

**Built with React & Vite** | Designed for impact | Optimized for recruiters
