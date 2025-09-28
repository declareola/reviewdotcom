# ReviewDotCom - Nigeria's #1 Review Platform

Welcome to the official repository for ReviewDotCom, Nigeria's most trusted platform for transparent feedback on businesses, services, and institutions.

## 📜 Project Overview

ReviewDotCom is a modern, AI-enhanced web application built with React and TypeScript. Our mission is to empower Nigerians with the information they need to make better decisions by providing a platform for sharing honest, user-generated reviews. The platform features a rich taxonomy of reviewable entities, from local restaurants to federal government agencies, and leverages Google's Gemini AI to provide intelligent summaries, content moderation, and grounded search results.

### Key Features
-   **Comprehensive Review System:** Users can rate, review, and upload photos for thousands of businesses and services.
-   **AI-Powered Summaries:** Gemini AI automatically generates concise summaries of all reviews for a business, giving users a quick, balanced overview.
-   **AI-Powered Grounded Search:** Natural language search queries are enhanced with Google Search grounding to provide relevant, up-to-date results.
-   **AI Content Moderation:** New reviews are automatically checked for policy violations to ensure a safe and trustworthy platform.
-   **User Profiles & Saved Lists:** Registered users can build a public profile, track their reviews, and save businesses for later.
-   **Admin Panel:** A dedicated dashboard for moderators to manage reported reviews and ensure platform integrity.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

This project is designed to run in a specific web-based development environment that uses an in-browser transpiler and an `importmap` for dependencies. No local `npm install` is required.

### Setup & Installation

1.  **Environment:** Ensure you are in a development environment that supports `index.html` with ES modules and an import map.
2.  **API Key:** The application requires a Google Gemini API key. This key must be available as an environment variable named `API_KEY`. The application is hard-coded to look for `process.env.API_KEY`.
3.  **Run:** Simply serve the `index.html` file using a local web server.

---

## 📁 Project Structure

The project follows a standard feature-based structure to keep the codebase organized, scalable, and easy to navigate.

```
/
├── components/         # Reusable React components (Button, ReviewCard, etc.)
│   ├── icons/          # SVG icon components
│   └── ...
├── contexts/           # React Context providers for global state (AuthContext, etc.)
├── pages/              # Top-level page components for each route (HomePage, BusinessPage, etc.)
├── services/           # Modules for external interactions (mockApi.ts, aiService.ts)
├── types.ts            # Global TypeScript type definitions
├── App.tsx             # Main application component with routing logic
├── index.html          # The HTML entry point with import maps
├── index.tsx           # The application's JavaScript entry point
├── metadata.json       # Application metadata
└── *.md                # Documentation files
```

---

## 📚 Documentation

For a deeper understanding of the project's architecture, data models, and strategic goals, please refer to the following documents:

-   **[System Taxonomy & Data Models](./SYSTEM_DESIGN.md):** A detailed breakdown of the platform's data structures and reviewable categories.
-   **[AI Integration Roadmap](./AI_INTEGRATION_TODO.md):** Our strategic plan for integrating cutting-edge AI features.
-   **[Contribution Guidelines](./CONTRIBUTING.md):** How to contribute to the project.
-   **[Code of Conduct](./CODE_OF_CONDUCT.md):** Our commitment to a positive and inclusive community.
