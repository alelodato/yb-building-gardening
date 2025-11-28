# YB Property Services

YB Property Services is a responsive multi-page website built for a freelance tradesman based in Cambridge (UK), offering building, maintenance and gardening services.

The site is designed as a clean, modern showcase to help potential clients quickly understand what Yassin offers, view his core services, and contact him easily via form, phone or WhatsApp.

---

## Live Site

- **Production URL:** https://ybpropertyservices.com

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
  - [Home](#home)
  - [Services](#services)
  - [Contact](#contact)
  - [Cookies & Privacy](#cookies--privacy)
- [Layout & UX](#layout--ux)
- [Contact & Web3Forms Integration](#contact--web3forms-integration)
- [Dynamic Service Selection](#dynamic-service-selection)
- [Lottie Animation](#lottie-animation)
- [SEO & Sitemap](#seo--sitemap)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Future Improvements](#future-improvements)

---

## Overview

YB Property Services is a small business site for a multi-service tradesman working in the Cambridge area.  
The site focuses on:

- presenting Yassin as a **reliable one-person contact** for multiple types of work  
- explaining clearly **what services he offers** (dry lining, roofing & waterproofing, flooring, gardening, small repairs)  
- making it easy to **request a quote** through a simple, modern contact form.

The design takes inspiration from the previously built personal portfolio, but adapts the layout, hero and sections to match the brand and target audience.

---

## Key Features

- **Responsive multi-page layout** (Home, Services, Contact, Cookies, Privacy)
- **Hero section** highlighting the “one person, many services” concept
- **Service cards** on Home and Services pages, with deeper descriptions
- **Dynamic navigation between pages** using `react-router-dom`
- **Service cards → Contact form pre-filled** (service and message suggestion)
- **Sticky info banner** under the navbar with operating area and clickable phone / WhatsApp link
- **Contact form integrated with Web3Forms** (no backend required)
- **Lottie animation** (hammer hitting a nail) on load, to reinforce the “hands-on” identity
- **Cookie banner** + dedicated Cookies and Privacy pages
- **Basic SEO setup** with meta tags and XML sitemap
- **Deployed on Vercel** with a custom domain (`ybpropertyservices.com`)

---

## Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS (custom config for fonts & palette)
- **Routing:** `react-router-dom`
- **Forms / Email:** [Web3Forms](https://web3forms.com/)
- **Animation:** Lottie (hammer & nail animation on load)
- **Icons:** Font Awesome (social icons, UI icons)
- **Deployment:** Vercel (with custom domain)

---

## Pages

### Home

The homepage introduces Yassin, his services and why working with a multi-service tradesman is valuable.

Key sections:

- **Hero section**
  - Headline focused on practical help at home (building, gardening, repairs)
  - Subheading explaining that YB can manage multiple tasks from one point of contact
  - Primary call-to-action to request a free quote

- **“Why Choose YB” section**
  - Paragraph explaining the benefit of having a single, reliable person who can handle different kinds of jobs (instead of coordinating multiple companies)
  - Cards or bullet points reinforcing:
    - reliability and communication
    - flexibility with small to medium projects
    - multi-service approach

- **Service teaser cards**
  - Short cards for each main area:
    - Dry Lining
    - Flooring
    - Roofing & Waterproofing
    - Gardening & Outdoor Care
    - Furniture Assembly & Small Repairs
    - Multiple Services / Custom Projects
  - Each card links to the **Services** page and is also wired to pre-fill the **Contact** form (see [Dynamic Service Selection](#dynamic-service-selection)).

- **Operating Area banner**
  - Narrow banner just under the navbar:
    - Text like: “Operating in the Cambridge area”  
    - Phone number shown and clickable (including WhatsApp redirection on mobile)

---

### Services

The Services page goes into more detail for each service.

- **Responsive card layout**
  - **Desktop / large screens:**  
    - Horizontal card: text on the left, image on the right
  - **Mobile:**  
    - Vertical card: service title → image → description

- **Services included**
  - Dry Lining
  - Flooring Installation & Repair
  - Roofing & Waterproofing
  - Gardening & Outdoor Care
  - Furniture Assembly & Small Repairs
  - Building Maintenance / Multi-service & Custom Projects

Each card includes:

- a short label / title
- a more detailed paragraph describing exactly what’s included
- an image relevant to the service
- click interaction:
  - clicking a service card can send the user to the **Contact** page with:
    - the service pre-selected in the `<select>`  
    - a suggested placeholder in the message textarea

- **Area coverage section**
  - Split section with:
    - Left: embedded **Google Maps iframe** showing Cambridge  
    - Right: text explaining that YB is **based in Cambridge** but also operates in surrounding areas / nearby towns

---

### Contact

The Contact page allows users to request a free quote.

- Background image with a dark gradient overlay for readability
- Centered heading and supporting paragraph
- **Form fields:**
  - Name
  - Email
  - Phone (optional)
  - Service (select field)
  - Project details (textarea with dynamic placeholder)

- The form is integrated with **Web3Forms**, so submissions are sent directly via their API without needing a custom backend.

---

### Cookies & Privacy

- **Cookies page**
  - Explains basic cookie usage for the site
  - Linked from the footer and possibly the cookie banner

- **Privacy Policy page**
  - Describes how contact form data is used (quote request, follow-up communication)
  - Clarifies that data is not sold to third parties
  - Linked from the footer

---

## Layout & UX

- Built with Tailwind utility classes and custom config for:
  - **Fonts:**
    - `Montserrat` (semibold) for headings
    - `Inter` (regular) for body text
  - **Custom colors:**
    - Brand neutrals (light background, dark text)
    - Accent colors consistent with the brand and hero design

- **Navigation bar**
  - Simple and clean, with links to Home, Services, Contact
  - Sticky behaviour, with a banner directly underneath on larger screens

- **Footer**
  - Left side: logo + email + phone
  - Center: horizontal links to Cookies and Privacy pages
  - Bottom or right area: social icons
  - “Website by Alessio Lodato” credit

- Fully **responsive**:
  - Typography and spacing scale up on larger screens
  - Cards and grids adapt between single-column and multi-column layouts

---

## Contact & Web3Forms Integration

The contact form uses **Web3Forms** for submissions.

General idea of the form configuration:

- The form element posts to the Web3Forms endpoint
- An `access_key` is included as a hidden field
- The rest of the fields map to what you want to receive by email:

- Name  
- Email  
- Phone  
- Service selected  
- Project details

The solution is fully client-side and works without a custom backend, which is ideal for a small business static site.

---

## Dynamic Service Selection

When a user clicks a service card (on Home or Services page), they are redirected to the Contact page with **React Router state**, for example:

- `selectedService` → sets the default `<option>` in the `select`
- `messagePreset` → custom placeholder text in the `<textarea>`

On the Contact page:

- `useLocation()` reads the state
- `defaultValue` is set on the select
- `placeholder` is set on the textarea

This makes the experience smoother: the user feels like the form is already “prepared” for the kind of work they’re interested in.

---

## Lottie Animation

A short Lottie animation of a **hammer hitting a nail** plays on load.

- Used to support the identity of YB as a hands-on tradesman
- Loaded via a Lottie React component
- The JSON animation file is stored in the project and imported
- Carefully integrated to avoid performance issues and React warnings

---

## SEO & Sitemap

Basic SEO work has been set up to improve discoverability:

- **Meta tags** in `index.html`:
  - `<title>` with business name and core services
  - `<meta name="description">` summarising what YB offers
- **Custom domain**: `ybpropertyservices.com`
- **Sitemap XML** (`/sitemap.xml`) with URLs for:
  - `/`
  - `/services`
  - `/contact`
- Sitemap submitted via **Google Search Console** to help indexing

Search engines may take some time to index a new site, but the structure is prepared for that process (clean URLs, simple routing, sitemap).

---

## Folder Structure

Approximate structure of the project:

```bash
yb-property-services/
├─ public/
│  ├─ contact-bg.webp
│  ├─ hammer-animation.json
│  ├─ sitemap.xml
│  └─ favicon.ico
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ ServiceCard.jsx
│  │  ├─ CookieBanner.jsx
│  │  └─ HammerAnimation.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Services.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Cookies.jsx
│  │  └─ Privacy.jsx
│  ├─ router/
│  │  └─ AppRouter.jsx
│  ├─ assets/
│  │  ├─ images/   # service images, textures, etc.
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ tailwind.config.cjs
├─ postcss.config.cjs
├─ package.json
└─ README.md

## Getting Started

### Prerequisites

-   Node.js (LTS recommended)
    
-   npm or yarn
    

### Installation

1.  Clone the repository:
    

`git clone <repo-url> cd yb-property-services`

1.  Install dependencies:
    

`npm install # or yarn`

1.  Start the development server:
    

`npm run dev # or yarn dev`

1.  Open the local dev URL printed in the terminal (usually `http://localhost:5173` for Vite).
    

## Available Scripts

In the project directory, you can run:

`npm run dev`

Runs the app in development mode (Vite dev server).

`npm run build`

Builds the app for production to the `dist` folder.

`npm run preview`

Serves the production build locally for preview.

## Future Improvements

Some possible extensions for the project:

-   Add a small **gallery / portfolio** section with before & after photos
    
-   Add **testimonials** from past clients
    
-   Add a simple **FAQ** section on the Services or Contact page
    
-   Implement basic **form validation feedback** (success/error states)
    
-   Add more advanced **SEO** (Open Graph tags, structured data, etc.)
    
-   Integrate a simple **CMS** (or at least a JSON config) to manage services and content more easily
    

Made with care for Yassin’s business by **Alessio Lodato**.