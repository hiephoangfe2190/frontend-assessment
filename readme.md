
# MindArc Frontend Assessment – React Implementation

This repository contains my solution for the MindArc Frontend Technical Assessment.

The project was implemented using **React (Vite)** with a modular component structure and responsive UI that follows the requirements described in the assessment.

---

## Live Demo

Vercel Deployment:

https://your-vercel-demo-link.vercel.app

---

## Repository

GitHub Repository:

https://github.com/hiephoangfe2190/frontend-assessment

---

## Tech Stack

- React
- Vite
- SCSS
- React Router
- Responsive layout with custom hooks

---

## Project Structure

src
│
├── App.jsx
├── app-layout.scss
├── main.jsx
│
├── styles
│   └── global.css
│
├── assets
│   └── react.svg
│
├── data
│   └── data.json
│
├── hooks
│   └── useResponsiveView.jsx
│
├── routes
│   └── AppRoutes.jsx
│
├── components
│   │
│   ├── common
│   │   └── back-button
│   │       ├── BackButton.jsx
│   │       └── back-button.scss
│   │
│   ├── exercise-one
│   │   ├── hero-banner
│   │   │   ├── HeroBanner.jsx
│   │   │   └── hero-banner.scss
│   │   │
│   │   └── content-card
│   │       ├── ContentCard.jsx
│   │       └── content-card.scss
│   │
│   └── exercise-two
│       ├── tabs-desktop
│       │   ├── TabsDesktop.jsx
│       │   └── tabs-desktop.scss
│       │
│       └── accordion-mobile
│           ├── AccordionMobile.jsx
│           └── accordion-mobile.scss
│
└── pages
    ├── home-page
    │   ├── HomePage.jsx
    │   └── home-page.scss
    │
    ├── exercise-one-page
    │   ├── ExerciseOnePage.jsx
    │   └── exercise-one-page.scss
    │
    └── exercise-two-page
        ├── ExerciseTwoPage.jsx

---

# Installation & Running the Project

Clone the repository:

git clone https://github.com/hiephoangfe2190/frontend-assessment.git

Navigate to the project folder:

cd frontend-assessment

Install dependencies:

npm install

Start the development server:

npm run dev

The app will run at:

http://localhost:5173

---

# Exercise 1

Implemented a fully responsive page based on the provided designs.

Features:

- Responsive layout
- Reusable components
- Clean SCSS structure
- Desktop and mobile banner support

Components used:

- HeroBanner
- ContentCard

---

# Exercise 2

Reads data.json and renders the UI differently depending on screen size.

Desktop:
- Displayed as Tabs

Mobile:
- Displayed as Accordion

Features implemented:

- Only one tab/accordion open at a time
- First tab automatically open on page load
- Clicking an open accordion closes it
- Responsive detection using useResponsiveView hook

Components used:

- TabsDesktop
- AccordionMobile

---

# Responsive Strategy

A custom hook is used to detect screen width:

useResponsiveView()

This determines whether to render:

- Tabs (desktop)
- Accordion (mobile)

---

# Bonus Question

Explain why:

('b' + 'a' + + 'a' + 'a').toLowerCase()

returns:

"banana"

Step-by-step explanation:

1. 'b' + 'a' = "ba"
2. +'a' attempts to convert "a" into a number → NaN
3. Expression becomes: "ba" + NaN + "a"
4. During string concatenation NaN becomes "NaN"
5. Result: "baNaNa"
6. toLowerCase() → "banana"

---

# Improvements & UX Enhancements

- Smooth accordion expand/collapse animations
- Modular component structure
- SCSS naming following BEM-style conventions
- Reusable layout and routing system

---

# Author

Hiep Hoang
Frontend Developer
