document.addEventListener("DOMContentLoaded", () => {
  // Form Validation
  const contactForm = document.querySelector('form[data-netlify="true"]');
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const inputs = contactForm.querySelectorAll(
        "input[required], select[required], textarea[required]",
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.classList.add("is-invalid");
          isValid = false;
        } else {
          input.classList.remove("is-invalid");
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert("Molimo popunite sva obavezna polja.");
      }
    });
  }
});
