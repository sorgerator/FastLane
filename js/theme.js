document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // Initialize Theme
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-bs-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      htmlElement.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
});
