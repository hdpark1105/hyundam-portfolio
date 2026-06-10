# Hyundam Park — Personal Portfolio

A personal portfolio website for Hyundam Park, undergraduate researcher at the Korea Institute of Energy Technology (KENTECH), showcasing research, publications, leadership experience, and technical skills.

**Live Site:** https://hyundampark.vercel.app  
**GitHub:** https://github.com/hyundampark/portfolio

---

## Features

- Responsive single-page design with smooth scroll navigation
- Animated scroll-reveal sections using IntersectionObserver
- Filterable research cards (All / Materials / AI / Education)
- Interactive timeline for leadership & service experience
- Client-side contact form with validation and success feedback
- Mobile-friendly hamburger navigation menu
- `prefers-reduced-motion` media query support
- Zero dependencies — plain HTML, CSS, and JavaScript

---

## Tech Stack

| Technology    | Purpose                          |
|---------------|----------------------------------|
| HTML5         | Semantic structure & content     |
| CSS3          | Custom properties, Grid, Flexbox |
| Vanilla JS    | Interactivity & scroll behavior  |
| Google Fonts  | IBM Plex Mono + IBM Plex Sans    |
| Vercel        | Hosting & deployment             |

---

## Running Locally

Open `index.html` directly in any modern browser, **or** serve it with Python:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## Project Structure

```
.
├── index.html   # All sections and markup
├── style.css    # Design system, layout, components
├── script.js    # Nav, filter, reveal, form logic
└── README.md    # This file
```

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Leave all settings as default and click **Deploy**.

> The site is static — no build step required.

---

## Notes

The contact form is **client-side only**. It simulates a submission (900 ms delay) and shows a success message, but does not send any data to a server or email address. To enable real email delivery, connect a backend service such as Formspree, Resend, or a Vercel serverless function.

---

## Assignment Info

| Field       | Value                                  |
|-------------|----------------------------------------|
| Course      | EF2039 — Introduction to AI           |
| Institution | Korea Institute of Energy Technology (KENTECH) |
| Semester    | 2026 Spring                            |
| Due Date    | 2026-06-14                             |
