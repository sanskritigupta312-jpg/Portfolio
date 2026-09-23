# Sanskriti Gupta - Interactive Portfolio

> A cursor-reactive React portfolio with a playful 3D character, smooth motion,
> and a clean project showcase.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=111111)

## About

This portfolio is built to feel responsive and personal rather than static.
The hero follows the pointer with a pre-rendered animation sequence, while the
rest of the page highlights skills, selected work, and contact links.

## Features

- Cursor-tracking hero interaction
- Canvas-based WebP frame rendering
- Responsive layout for desktop and mobile
- Project, skills, and contact sections
- Local placeholder character so the project works immediately
- Vite production build ready for deployment

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

Create a production build with:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   ├── character-placeholder.png
│   └── frames/
├── scripts/
│   └── extract_frames.py
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
└── package.json
```

## Character Animation

The project currently includes a ready-to-use placeholder character. To replace
it with a custom animation:

1. Add the source video at `public/character.mp4`.
2. Install OpenCV for Python.
3. Run the frame extraction script:

```bash
npm run extract
```

The script generates directional WebP frames in `public/frames/`.

## Personalization

Update `src/main.jsx` to change:

- Contact email and social links
- Project names, descriptions, and URLs
- Skills and portfolio content

Add a resume at `public/Sanskriti_Resume.pdf` if you want to include one in the
portfolio.

## Tech Stack

- React 19
- Vite
- JavaScript
- CSS
- Lucide React
- HTML Canvas

## License

This project is a personal portfolio. Replace the content and links with your
own details before deploying it publicly.
