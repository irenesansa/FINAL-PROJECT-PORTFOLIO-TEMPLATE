# AI Development Documentation

**Project:** Professional Portfolio Website  
**Student:** Irene Sánchez Sara  
**Course:** Web Design 2025/2026 · WEB ATELIER (UDIT)  
**AI Tools:** GitHub Copilot Chat (Primary Assistant & Code Architect)  
**Period:** December 2025 - January 2026

---

## Overview

This project represents a **complete from-scratch development** of a professional portfolio website. Unlike refactoring workflows, I started with **zero existing code**—only design concepts, project images, and a vision for a minimalist editorial aesthetic.

I used AI as a **Strategic Planning Partner and Code Educator**. The AI helped me understand professional web development patterns, guided me through responsive design decisions, and taught me industry-standard practices like semantic HTML, CSS architecture, and accessibility compliance.

---

## How I Used AI

Since I was building from scratch with a 4-week timeline, I followed a **Plan → Structure → Implement → Refine** workflow.

---

### Week 1: Initial Structure & CSS Architecture

**My Prompt:**

> "I need to build a portfolio from scratch to showcase 4 design projects. Can you give me a semantic HTML5 structure and explain how to organize CSS files professionally using the barrel pattern?"

**AI Response:**

- Suggested semantic structure with `<header>`, `<section id="work">`, `<footer>`
- Explained barrel pattern: separate files (reset. css, base.css, layout. css, components.css) imported via index.css
- Recommended CSS custom properties for theming

**What I Did:**

- Built complete `index.html` with my content (hero, work grid, about me, accordion tabs, footer)
- Created 5 CSS files manually following barrel pattern
- Defined color variables for light/dark themes (`--color-bg`, `--color-dark`)
- Designed work card hover effects (blur + sliding labels) independently

**Files Created:** `index.html`, `reset.css`, `base.css`, `layout.css`, `components.css`, `index.css`

---

### Week 2: Responsive Design & Dark Mode

**My Prompt:**

> "How do I make my 2-column grid responsive? And how do I add a dark/light mode toggle that saves preference?"

**AI Response:**

- Taught media queries for breakpoints (768px, 480px, 320px)
- Showed `localStorage.getItem('theme')` pattern for persistence
- Explained `body.classList.toggle('dark-mode')` logic

**What I Did:**

- Implemented 5 responsive breakpoints manually (320px → 1920px)
- Built dark mode system with localStorage in `main.js`
- Designed custom star icon SVG with hover rotation
- Adjusted layouts for mobile (grid → 1 column, flex-direction changes)

**My Prompt:**

> "How do I make font sizes fluid across screen sizes without abrupt jumps?"

**AI Response:**

- Introduced `clamp()` syntax: `clamp(min, preferred, max)`
- Example: `clamp(60px, 10vw + 1rem, 200px)`

**What I Did:**

- Converted 6+ fixed font sizes to `clamp()` manually
- Tested on multiple devices to fine-tune min/max values

**Files Modified:** `main.js`, `layout.css`, `base.css`

---

### Week 3: JavaScript Interactivity

**My Prompt:**

> "I need modals that open when clicking project cards. Each project shows different images and descriptions. How do I structure this?"

**AI Response:**

- Suggested `projectData` object to centralize all project info
- Explained DOM manipulation: `getElementById()`, `textContent`, `style.backgroundImage`
- Showed how to prevent body scroll with `overflow: hidden`

**What I Did:**

- Created `projectData` object with 4 projects manually
- Built modal HTML structure with dynamic placeholders
- Wrote `openProject(id)` function and close button logic
- Implemented "Explore More" circular navigation (NOGUE → GREENO → Starbucks → Polydor → loop)

**My Prompt:**

> "How do I create accordion tabs where clicking one closes others with smooth animations?"

**AI Response:**

- Explained `max-height: 0` → `max-height: 500px` transition trick
- Showed `forEach()` loop to remove `.active` class from all tabs before adding to clicked

**What I Did:**

- Implemented accordion script manually for 5 tabs (Experience, Education, Skills, Languages, Others)
- Designed hover states and transition timings

**Files Modified:** `main.js` (~250 lines total)

---

### Week 4: Accessibility, Performance & Deployment

**My Prompt:**

> "How do I make my site accessible? I need reduced motion support, ARIA labels, and SEO meta tags."

**AI Response:**

- Taught `@media (prefers-reduced-motion: reduce)` to disable animations
- Explained Open Graph tags (`og:title`, `og:image`) for social sharing
- Recommended ARIA labels for icon-only buttons

**What I Did:**

- Added `prefers-reduced-motion` media query in `base.css`
- Wrote complete meta tags manually (description, OG, Twitter Cards, theme-color)
- Ensured all buttons have `aria-label` attributes
- Tested keyboard navigation and screen reader compatibility

**My Prompt:**

> "How do I optimize images and deploy to GitHub Pages? Also, how do I create a git tag v1.0.0?"

**AI Response:**

- Recommended ImageKit.io CDN for image optimization
- Explained GitHub Pages setup and git tag commands (`git tag -a v1.0.0`)
- Suggested creating README.md with live link

**What I Did:**

- Migrated 15+ images to ImageKit.io manually
- Configured GitHub Pages deployment
- Created comprehensive README.md and project.yaml
- Tagged release v1.0.0 with release notes
- Built custom 404.html page independently

**Files Created:** `README.md`, `project.yaml`, `404.html`, `PROJECT_BRIEF.md`, `plan.md`

---

## Features Built with AI Guidance

### Modular CSS Architecture (Barrel Pattern)

The AI explained how to organize CSS by function (reset → base → layout → components).  
**Files:** `assets/css/` directory (5 files)

### Dark/Light Mode with Persistence

AI taught me localStorage API for saving user preference across sessions.  
**Files:** `main.js`, `base.css`

### Dynamic Project Modals

AI suggested `projectData` object pattern to avoid duplicating HTML.  
**Files:** `main.js`, `index.html`

### Fluid Typography

AI introduced `clamp()` for responsive text scaling.  
**Files:** `layout.css`

### Accessibility Features

AI explained `prefers-reduced-motion`, ARIA labels, and semantic HTML importance.  
**Files:** `base.css`, `index.html`

---

## What I Built Independently

### Visual Identity

- Color palette: Warm cream (#f7ecd8), deep brown (#4b2424), navy (#061722)
- Typography: Instrument Serif + Inter
- Layout spacing, hover effects, dark mode aesthetics

### Content

- All project descriptions (NOGUE, GREENO, Starbucks, Polydor)
- About Me text and CV information
- Custom 404 page design

### Design Decisions

- Full-screen modal UX flow
- "Explore More" circular navigation concept
- Work card hover interactions (blur effect + sliding label)
- Theme toggle placement (bottom-right with star icon)
- Footer layout structure

### Image Assets

- All project photography and mockups
- Profile photo
- Custom GitHub icon SVG

---

## Reflection

Using AI as a **"Technical Mentor"** rather than just a **"Code Generator"** changed my perspective on web development. Initially, I felt intimidated starting from zero with no existing code. The AI didn't just give me copy-paste solutions; it taught me **why** things should be structured a certain way (e.g., why modular CSS is maintainable, why semantic HTML matters for accessibility, why localStorage persists data).

The hardest part was resisting the urge to just copy-paste examples. By forcing myself to understand the logic first—reading explanations, rewriting code with my own variable names—I transformed AI suggestions into genuine learning. This resulted in a project that is not only visually aligned with my design aesthetic but also technically sound and professionally structured.

**Irene Sánchez Sara**  
January · Web Design 2025/2026 · UDIT
