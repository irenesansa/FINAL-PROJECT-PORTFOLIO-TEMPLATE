# Project Brief

**Student:** Irene Sánchez Sara  
**Handle:** @isansa.design  
**Course:** Web Design 2025 · Fall  
**Date:** 08/01/2026

---

## Project Concept

### What are you building?

I am building a professional, responsive portfolio website to showcase my work in Graphic and Multimedia Design. The site features a minimalist yet impactful aesthetic with a dark/light mode toggle, interactive project modals, and smooth scroll-triggered animations to create an immersive user experience.

### Who is it for?

The target audience includes Creative Directors, Design Agencies (especially Branding and Advertising), HR Recruiters at creative studios, and potential clients looking for talent in Visual Identity, Editorial Design, App Design, and Creative Campaigns.

### Why does it matter?

This project serves as the digital centerpiece of my professional identity, demonstrating not only my design sensibility but also my ability to implement responsive, accessible web experiences. It provides a curated, high-performance platform to present my case studies (NOGUE Magazine, GREENO App, Starbucks Campaign, Polydor Rebranding) with a narrative flow that goes beyond static PDF portfolios or generic platforms like Behance.

---

## Technical Approach

### Core Technologies

- [x] HTML5 (semantic markup with `<header>`, `<nav>`, `<section>`, `<footer>`)
- [x] CSS3 (CSS Grid, Flexbox, Custom Properties, CSS Animations)
- [x] Vanilla JavaScript (modal system, accordion tabs, theme toggle with localStorage)

### Accessibility Goals

- [x] Semantic HTML structure
- [x] Proper heading hierarchy (single `<h1>` per page, logical h2→h3→h4)
- [x] Alt text for images (in progress)
- [x] Keyboard navigation support (tab-accessible buttons)
- [x] ARIA labels for icon buttons (`aria-label="Toggle dark mode"`)
- [x] `prefers-reduced-motion` support (implemented)
- [ ] Color contrast compliance (WCAG 2.1 AA) - to validate with tools

### Responsive Design Strategy

- [x] Mobile-first approach with progressive enhancement
- [x] CSS Grid adaptive layouts (2 columns → 1 column on mobile)
- [x] Fluid typography using `clamp()` for scalable text
- [x] Optimized images via ImageKit.io CDN
- [x] Touch-friendly interactions (hover states adapted for mobile)
- [x] Breakpoints: 320px, 480px, 768px, 1024px, 1920px

---

## Content Strategy

### Key Sections/Pages

1. **Home/Hero**: Full-screen introduction with animated welcome text, navigation, and dark mode toggle positioned elegantly.

2. **Selected Work**: Grid of 4 main projects (NOGUE, GREENO, Starbucks, Polydor) with hover-triggered labels and background blur effects.

3. **About Me**: Personal introduction with profile image, education focus, and design interests (branding, visual identity, creative direction).

4. **Info Tabs (Accordion)**: Expandable sections for Experience, Education, Habilities (Tools & Skills), Languages, and Others—allowing recruiters to scan CV information without leaving the page.

5. **Project Modals**: Full-screen overlays with hero image, project details, image galleries, and "Explore More" section suggesting next projects in a circular navigation.

6. **Footer/Contact**: Large "Let's talk" CTA with email link, social media (Instagram, LinkedIn), GitHub icon, and scroll-to-top button.

7. **Custom 404 Page**: Branded error page with gradient background and "Back to home" link.

### Content Sources

Content is derived from:

- Personal academic projects at UDIT (University)
- Internship experience at Interbrand and Borneo Agency
- Extracurricular activities (T4i Solidarity Race, Colegio Mayor Somosierra)
- Personal biography and professional interests
- All images hosted on ImageKit.io for optimized loading

### Multilingual Considerations

- **Primary language**: Spanish (with English content in uppercase for aesthetic consistency)
- **No translation feature**: Content is bilingual by design (interface in English, some descriptions in Spanish) but does not require dynamic switching
- **Future consideration**: Could implement a JavaScript-based translation system similar to reference project if client requests expand internationally

---

## Design Direction

### Visual Style

The design follows a **Contemporary Editorial / Minimalist** aesthetic. It emphasizes high contrast, oversized serif typography for titles (Instrument Serif), clean sans-serif body text (Inter), and generous negative space. The interface relies on subtle micro-interactions (hover states, scroll animations, theme transitions) to create sophistication without overwhelming the content.

### Color Palette

**Light Mode:**

- Background: Warm Cream `#f7ecd8`
- Primary Dark: Deep Brown `#4b2424`
- Accent: Muted Taupe `#cbbfb0`
- Card Background: Light Blue-Grey `#bec8dd`

**Dark Mode:**

- Background: Deep Navy `#061722`
- Hero/Footer: Muted Blue `#516796`
- Text: Off-White `#f0f0f0`
- Accent: Warm Cream `#f7ecd8`

### Typography

**Headings (Display):** Instrument Serif – Used for hero titles ("Welcome!"), footer CTA ("Let's talk"), and project titles to give an elegant, editorial magazine feel.

**Body/UI:** Inter – Used for navigation, body paragraphs, buttons, and tab content for optimal readability and modern neutrality.

**Type Scale:**

- Hero Title: `clamp(60px, 10vw + 1rem, 200px)`
- Section Titles: `clamp(1.75rem, 5vw + 1rem, 50px)`
- Body Text: `clamp(0.85rem, 2vw + 0.5rem, 1.1rem)`

### Inspiration/References

- Awwwards portfolios (editorial-style case studies)
- Swiss Design principles (grid systems, typography hierarchy)
- Contemporary design studio websites (minimalism with impact)
- Pinterest boards for editorial layout inspiration

---

## Success Metrics

### Week 4 Goals

- [x] Functional homepage with hero and navigation
- [x] Basic responsive layout (mobile/tablet/desktop)
- [x] Core content in place (About Me, Selected Work, Footer)
- [x] Accessible markup (semantic HTML, ARIA labels)

### Final Project Goals

- [x] Fully responsive across devices (320px → 1920px)
- [x] Dark/Light mode with localStorage persistence
- [x] Interactive project modals with dynamic galleries
- [x] Accordion tabs for CV information
- [x] Smooth CSS animations with `prefers-reduced-motion` support
- [x] Fast loading performance (images on CDN)
- [ ] Meets WCAG 2.1 AA standards (validation pending)
- [x] Complete content (4 projects with detailed galleries)
- [x] Polished visual design with hover states and transitions
- [x] Custom 404 page
- [x] Git tag v1.0.0 and GitHub Release
- [x] Complete meta tags (SEO, Open Graph, Twitter Cards)
- [x] Professional README.md with live deployment link

---

## Reflection Questions

### What excites you most about this project?

I am most excited about the **project modal system** and the **"Explore More" circular navigation**. Clicking a project opens a full-screen experience with a curated gallery, and users can seamlessly discover other projects without returning to the homepage. The **dark mode toggle** with smooth CSS transitions also adds a layer of personalization and sophistication that makes the portfolio feel premium and user-centric.

### What challenges do you anticipate?

The main challenge was achieving **fluid responsiveness** without breaking the visual hierarchy. Managing the modal's complex structure (hero image + title + details + gallery + explore section + footer) required careful CSS Grid and Flexbox orchestration. Another challenge was ensuring **animations performed smoothly** (60fps) while respecting accessibility with `prefers-reduced-motion`. Finally, organizing the **CSS architecture** using the barrel pattern (index.css imports reset → base → layout → components) was initially complex but made the codebase scalable.

### How does this project connect to your learning goals?

This project validates my ability to **translate design vision into functional code**. As a graphic design student focused on branding and visual identity, understanding frontend web development gives me a competitive edge when collaborating with developers or pitching digital campaigns. It also demonstrates my technical versatility beyond static mockups—showing I can build **responsive, accessible, and performant** web experiences that meet professional industry standards (WCAG, semantic HTML, SEO optimization).

---
