# TireShop-Project

Software Management Tool for Tire Repair Shop

A multi-phase project developed for the IBU 061 - Foundations of Web Development course111111111. This repository will track progress from a static front-end (Assignment 1) to a fully dynamic Single Page Application (Assignment 3).

---

Project Overview

The goal of this project is to build a responsive, data-driven Software Management Tool for a Tire Repair Shop, starting with a client-side prototype and evolving into a Single Page Application (SPA).

Key FeaturesCustomer & Service Management:

1. User interfaces for tracking clients, inventory, and services.
2. Data Simulation: Using JavaScript and AJAX to fetch and manipulate data from local JSON/XML files, simulating a server-side database connection.
3. SPA Architecture: Implementing client-side routing for a seamless user experience.
4. Interactivity & Validation: Robust form validation, dynamic content toggles, and UI updates.

---

Technology Stack

This project strictly adheres to the course's requirements, focusing on front-end development and best practices.

1. HTML5: Structured using semantic tags (header, nav, section, article, footer)
2. CSS3 & SASS: Styling without external CSS libraries, utilizing Sass for variables, mixins, and nesting
3. JavaScript (Vanilla & jQuery): Core logic, interactivity, advanced form validation, and data handling via AJAX
4. Bootstrap: Incorporated for responsiveness and design, utilizing at least 6 components (e.g., carousel, cards, modals)
5. Tailwind CSS: Allowed for UI enhancement in Assignment 2 and onward6.

---

Development Roadmap (Semester Phases)

This project is structured around the three main assignments for the course.

Phase 1: Foundations & Static Content (Assignment 1)

- Objective: Build a responsive web application showcasing layout, styling, and responsiveness
- Structure: At least 4 different pages with proper HTML structure8.
- Navigation: Implement a responsive navigation bar.
- Core Elements: Include at least 3 types of headings, 3 different size images (with relative paths and fallback messages), 3 links (all opening in a new tab/window, one for email to amela.vatres@stu.ibu.edu.ba), 1 table, and 1 list10101010101010101010101010101010101010101010101010.
- Forms: Add a form with validation, at least 10 different elements, and submit it using a mock API (https://jsonplaceholder.typicode.com/posts) with GET/POST11.
- Styling: Use Sass, implement a footer (with course and author name), animations/transitions, and at least one modal/dialog.

Phase 2: Dynamic Content & Interactivity (Assignment 2)

- Objective: Enhance the application with dynamic content, interaction, and data handling using JavaScript/jQuery.
- Interactivity: Implement an Interactive Gallery (with JS modals), a Content Toggle, a Theme Switcher, and an Accordion Menu.
- Advanced Forms: Extend the form with detailed validation (e.g., date picker, password strength) and use AJAX for submission to show a success message.
- Data Handling: Load content (e.g., product listings) from JSON or XML files via AJAX, simulating a server fetch.
- Data Operations: Implement simulated Edit and Delete options for fetched entities, with UI updates and success messages.
- APIs: Integrate an External RESTful API (e.g., OpenWeatherMap) to fetch and display dynamic data.
- NotificationsUse toastr messages for success or error notifications.

Phase 3: Single Page Application (SPA) (Assignment 3)

- Objective: Transform the project into a functional SPA with client-side routing and state management.
- Routing: Implement client-side routing with at least 4 distinct routes that update the URL without a full page reload.
- Navigation: Dynamically highlight the active page in the navigation bar.
- State Management: Implement application state management to share data across routes.
- Persistence: Use localStorage and cookies to persist user data and login status.
- User Auth: Implement a login page and check credentials against a local JSON file; redirect the user and display a personalized "Hello, [USERNAME]" message upon successful login.
