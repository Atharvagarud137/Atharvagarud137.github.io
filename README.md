# Atharva Garud's Portfolio
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Atharvagarud137/Atharvagarud137.github.io)
This repository contains the source code for my personal portfolio website, built with React and TypeScript, and hosted on GitHub Pages. The live site can be viewed at [atharvagarud137.github.io](https://atharvagarud137.github.io/).

## Features

*   **Modern Single-Page Design:** A clean, single-page application with smooth-scrolling navigation between sections.
*   **Interactive & Animated:** Implements subtle animations and transitions using Framer Motion, including scroll-reveal effects and interactive 3D card tilts.
*   **Data-Driven Content:** All portfolio content (experience, projects, skills) is managed in `src/data/portfolio.ts` for easy maintenance and updates.
*   **Component-Based Architecture:** Structured into reusable React components for sections like Hero, About, Experience, Skills, Projects, and Contact.
*   **Responsive:** Features a mobile-friendly navigation overlay to ensure a seamless experience on all devices.

## Branding

*   **Portfolio logo:** The custom AG monogram is used as the sole brand mark in the navigation bar and as the browser favicon.
*   **Logo assets:** `atharva-mark.png` is the root-level asset used by the GitHub Pages deployment. The matching `public/atharva-mark.png` copy is included for Vite's public asset pipeline.
*   **Navbar behavior:** The navigation bar displays the logo without a separate text wordmark, keeping the brand identity compact and consistent across desktop and mobile layouts.

## Resume

*   **LaTeX source:** [resume/Atharva_Garud_Resume.tex](resume/Atharva_Garud_Resume.tex)
*   The source is formatted for a one-page A4 resume and includes direct links to the portfolio and featured project repositories.
*   To generate the PDF locally, run `pdflatex resume/Atharva_Garud_Resume.tex` from the repository root (with a LaTeX distribution installed).
*   Keep the downloadable resume file and the source in sync whenever experience, project metrics, or certifications change.

## Tech Stack

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
*   **Styling:** CSS Modules & Inline Styles

## Directory Structure

The project is organized into the following key directories:

```
.
├── src
│   ├── components
│   │   ├── layout      # Navbar, Footer
│   │   ├── sections    # Individual portfolio sections (Hero, About, etc.)
│   │   └── ui          # Reusable UI elements like SectionHeader
│   ├── data            # Centralized portfolio data (experience, projects)
│   ├── hooks           # Custom React hooks for UI logic
│   └── types           # TypeScript type definitions
├── index.html          # Main HTML entry point
└── vite.config.ts      # Vite configuration
```

## Running Locally

To run the portfolio website on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Atharvagarud137/atharvagarud137.github.io.git
    cd atharvagarud137.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This command generates the static files in the `dist` directory, ready for deployment.
