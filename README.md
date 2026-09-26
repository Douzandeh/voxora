# Voxora

A modern, animated e-commerce landing page built with React, Vite, and Bootstrap. Voxora showcases a hero product carousel, category browsing, promotional banners, and a best-seller product grid — all wrapped in smooth Framer Motion transitions.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Animated hero slider** — auto-rotating product carousel with crossfading backgrounds, staggered text reveals, and image transitions (`react-bootstrap` Carousel + Framer Motion)
- **Category showcase** — scroll-triggered reveal animations with subtle parallax on category artwork
- **Promotional banners** — sequenced text/image entrance animations with an idle floating effect
- **Product grid** — best-seller cards with hover-revealed "Add to Cart" actions
- **Responsive layout** — Bootstrap grid with custom breakpoints for mobile, tablet, and desktop
- **Offcanvas navigation** — collapsible mobile nav via `react-bootstrap`

## 🛠 Tech Stack

| Category         | Technology                          |
| ----------------- | ------------------------------------ |
| Framework          | React 19                            |
| Build tool         | Vite 8                              |
| UI components      | React Bootstrap 2 / Bootstrap 5     |
| Animation          | Framer Motion 13                    |
| Icons              | Bootstrap Icons                     |
| Fonts              | Poppins, Nunito, Roboto (Google Fonts) |
| Linting            | ESLint 10 (flat config)             |

## 📁 Project Structure

```
src/
├── assets/
│   └── images/
│       ├── banners/
│       ├── categories/
│       ├── products/
│       └── sliders/
├── components/
│   ├── layout/
│   │   ├── banner/          # Banner.jsx, banner.css
│   │   ├── cards/           # CategoryCard.jsx, ProductCard.jsx, cards.css
│   │   └── Hero/             # HeroSlider.jsx, hero-slider.css
│   └── navigation/
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── navigation.css
├── constants/
│   └── data.js               # Static content: categories, products, hero slides, banners
├── pages/
│   └── Home/
│       └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css                 # Global styles, CSS variables, Bootstrap import
```

> Note: paths above reflect the intended source layout (`src/...`). Adjust if your local tree differs.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone <repository-url>
cd voxora
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement, typically at `http://localhost:5173`.

### Build

```bash
npm run build
```

Outputs a production-ready bundle to `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📜 Available Scripts

| Script            | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`       | Start local dev server with HMR          |
| `npm run build`     | Build for production                     |
| `npm run preview`   | Preview the production build locally     |
| `npm run lint`      | Run ESLint across the project             |

## 🎨 Styling & Theming

Global design tokens live in `src/index.css` as CSS custom properties:

```css
:root {
  --color-primary: #f42c37;
  --color-secondary: #cfcfcf;
  --color-text: #000;
  --color-accent: #e2e2e2;
  --font-family: "Poppins", sans-serif;
}
```

Component-level styles are colocated with their components (e.g., `cards.css`, `banner.css`, `hero-slider.css`, `navigation.css`) rather than centralized, keeping each UI piece self-contained.

## 📦 Content & Data

All static content (categories, products, hero slides, banner copy) is centralized in `src/constants/data.js`, making it straightforward to swap in real product/API data later without touching component logic.

## 🗺 Roadmap Ideas

- [ ] Wire up product data to a real API/CMS
- [ ] Add cart state management (Context API or a lightweight store)
- [ ] Implement search functionality (nav search icon is currently static)
- [ ] Add unit/integration tests (Vitest + React Testing Library)
- [ ] Add TypeScript for stronger type safety

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Run `npm run lint` before pushing
5. Open a pull request

## 📄 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.

---

Built with ❤️ by Hossein Douzandeh
