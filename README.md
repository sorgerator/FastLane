# FastLane Sarajevo — Tire Shop & Auto Service Web Application

A modern, mobile-first, bilingual (**Bosnian & English**) web application with **Bright & Dark Mode** built for **FastLane Sarajevo** (*Vulkanizer & Auto Servis Sarajevo*, Džemala Bijedića 160), developed as a University Capstone Project for the **Frontend Web Programming** course at International Burch University (IBU).

---

## Tech Stack

Strictly built using only the allowed frontend technologies:
- **HTML5**: Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), accessible ARIA attributes, and `data-i18n` localization hooks.
- **CSS3** (`css/styles.css`): Custom properties (CSS variables) for Light/Dark theme polarity, glassmorphism navigation, smooth micro-interactions, carbon-grid patterns, and responsive utilities.
- **Tailwind CSS**: Utility-first mobile-first responsive layout (`sm:`, `md:`, `lg:`, `xl:`) and class-based dark mode (`dark:`).
- **Vanilla JavaScript (ES6+)** (`js/theme.js` & `js/main.js`):
  - Zero-reload **Bosnian (`BS`) / English (`EN`)** language switcher persisted in `localStorage`.
  - **Bright / Dark Mode** theme switcher persisted in `localStorage`.
  - **Live Sarajevo Shop Status** indicator checking local operating hours (Mon–Sat, 08:00–19:00).
  - **Instant Service Price Estimator** on the Home page & **Interactive Cost Calculator** on the Services page (passing quotes directly into the booking form via URL parameters).
  - **Category Filter & FAQ Accordion** on the Services page.
  - **Online Appointment Booking & LocalStorage Appointment Manager** (`Moji Zakazani Termini` / `My Upcoming Appointments`) with booking reference codes (`#FL-XXXX`) and cancellation support.

---

## Pages Included

1. **`index.html` (Početna / Home)** — Hero section with Instant Service Price Estimator, Sarajevo workshop stats, Why Choose FastLane, Core Services preview, Goodyear Tire & B&H Winter Equipment Law (Nov 1 – Apr 1) reminder, and Sarajevo driver reviews.
2. **`services.html` (Usluge / Services)** — Filterable 6-service catalog, Interactive Service Cost Calculator, Rim Diameter Price Table in `KM` (BAM), and FAQ accordion.
3. **`appointments.html` (Termini / Appointments)** — Online booking form with vehicle/rim/service selectors, inline validation, and persistent "My Upcoming Appointments" panel.
4. **`location.html` (Lokacija / Location)** — Sarajevo address (`Džemala Bijedića 160, Stup`), live open/closed hours card, embedded interactive OpenStreetMap & Google Maps link, and directions from Centar, Ilidža, and Highway A1.
5. **`about.html` (O nama / About Us)** — FastLane Sarajevo story, Hunter HawkEye Elite® & Corghi robotic equipment showcase, and Master Technicians team profiles.
6. **`contact.html` (Kontakt / Contact)** — Direct phone, 24/7 Mobile Tire Van emergency contact, email cards, and validated bilingual inquiry form.
7. **`privacy.html` (Politika Privatnosti / Privacy Policy)** — Comprehensive data protection policy aligned with Bosnia & Herzegovina's Personal Data Protection Law (ZZLP) and GDPR principles.
