/**
 * FastLane Sarajevo — Main Application Interactivity
 * Handles Mobile Menu, Live Shop Status, Calculators, Service Filters,
 * FAQ Accordions, Form Validation, and LocalStorage Appointment Management.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initLiveShopStatus();
  initQuickEstimator();
  initServicesFilterAndCalculator();
  initFaqAccordion();
  initAppointmentsManager();
  initContactForm();

  // Re-render dynamic components when language changes
  window.addEventListener("fastlane:langchange", () => {
    initLiveShopStatus();
    renderSavedAppointments();
  });
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!isExpanded));
    mobileMenu.classList.toggle("hidden");

    const icon = menuBtn.querySelector("i");
    if (icon) {
      icon.className = isExpanded ? "fas fa-bars text-xl" : "fas fa-times text-xl";
    }
  });

  // Close mobile menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      const icon = menuBtn.querySelector("i");
      if (icon) icon.className = "fas fa-bars text-xl";
    }
  });
}

/* --------------------------------------------------------------------------
   2. Live Sarajevo Shop Status (Mon-Sat 08:00 - 19:00)
   -------------------------------------------------------------------------- */
function initLiveShopStatus() {
  const statusElements = document.querySelectorAll(".live-shop-status");
  if (!statusElements.length) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1..6 = Mon..Sat
  const hour = now.getHours();
  const isOpen = day >= 1 && day <= 6 && hour >= 8 && hour < 19;

  const t = (key) => (window.FastLaneApp ? window.FastLaneApp.t(key) : key);

  statusElements.forEach((el) => {
    const dot = el.querySelector(".status-dot");
    const text = el.querySelector(".status-text");
    if (dot) {
      dot.className = isOpen
        ? "status-dot w-2 h-2 rounded-full bg-emerald-500 pulse-dot"
        : "status-dot w-2 h-2 rounded-full bg-amber-500";
    }
    if (text) {
      text.textContent = isOpen ? t("status.open") : t("status.closed");
    }
  });
}

/* --------------------------------------------------------------------------
   3. Home Page Quick Price Estimator
   -------------------------------------------------------------------------- */
function initQuickEstimator() {
  const vehicleSelect = document.getElementById("est-vehicle");
  const rimSelect = document.getElementById("est-rim");
  const serviceSelect = document.getElementById("est-service");
  const totalDisplay = document.getElementById("est-total-price");
  const bookBtn = document.getElementById("est-book-btn");

  if (!vehicleSelect || !rimSelect || !serviceSelect || !totalDisplay) return;

  const calculateEstimate = () => {
    const vehicle = vehicleSelect.value;
    const rim = rimSelect.value;
    const service = serviceSelect.value;

    // Base price for 4 wheels in KM
    const rimBaseMap = {
      small: 40,   // 13"-15"
      medium: 50,  // 16"-17"
      large: 65,   // 18"-19"
      xlarge: 80   // 20"-22"
    };

    const vehicleAddonMap = {
      car: 0,
      suv: 10,
      van: 15
    };

    let total = (rimBaseMap[rim] || 50) + (vehicleAddonMap[vehicle] || 0);

    if (service === "swap_hotel") {
      total += 50; // Add 50 KM seasonal tire hotel
    } else if (service === "alignment") {
      total = 60 + (vehicle === "car" ? 0 : 10);
    }

    totalDisplay.textContent = `${total} KM`;

    if (bookBtn) {
      const srvParam =
        service === "swap_hotel"
          ? "hotel"
          : service === "alignment"
          ? "optika"
          : "zamjena";
      bookBtn.href = `appointments.html?service=${encodeURIComponent(
        srvParam
      )}&vehicle=${encodeURIComponent(vehicle)}&rim=${encodeURIComponent(
        rim
      )}&estimate=${encodeURIComponent(total + " KM")}`;
    }
  };

  vehicleSelect.addEventListener("change", calculateEstimate);
  rimSelect.addEventListener("change", calculateEstimate);
  serviceSelect.addEventListener("change", calculateEstimate);
  calculateEstimate();
}

/* --------------------------------------------------------------------------
   4. Services Page Category Filter & Interactive Cost Calculator
   -------------------------------------------------------------------------- */
function initServicesFilterAndCalculator() {
  // Category Filter
  const filterBtns = document.querySelectorAll(".service-filter-btn");
  const serviceCards = document.querySelectorAll(".service-card-item");

  if (filterBtns.length && serviceCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        filterBtns.forEach((b) => {
          b.classList.remove("bg-amber-500", "text-slate-950", "border-amber-500", "shadow-md");
          b.classList.add("bg-white", "dark:bg-slate-900", "text-slate-700", "dark:text-slate-300");
        });
        btn.classList.remove("bg-white", "dark:bg-slate-900", "text-slate-700", "dark:text-slate-300");
        btn.classList.add("bg-amber-500", "text-slate-950", "border-amber-500", "shadow-md");

        serviceCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // Interactive Calculator on Services Page
  const calcContainer = document.getElementById("service-calculator");
  if (!calcContainer) return;

  const rimRadios = calcContainer.querySelectorAll('input[name="calc-rim"]');
  const countRadios = calcContainer.querySelectorAll('input[name="calc-count"]');
  const addonChecks = calcContainer.querySelectorAll(".calc-addon");
  const baseCostEl = document.getElementById("calc-base-cost");
  const addonsCostEl = document.getElementById("calc-addons-cost");
  const totalCostEl = document.getElementById("calc-total-cost");
  const calcBookBtn = document.getElementById("calc-book-btn");

  const updateServiceCalculator = () => {
    let perWheelRate = 10; // default 15"-16"
    let selectedRimLabel = "15-16";

    rimRadios.forEach((r) => {
      if (r.checked) {
        perWheelRate = parseFloat(r.getAttribute("data-rate") || "10");
        selectedRimLabel = r.value;
      }
    });

    let wheelCount = 4;
    countRadios.forEach((c) => {
      if (c.checked) {
        wheelCount = parseInt(c.value, 10) || 4;
      }
    });

    const baseCost = perWheelRate * wheelCount;
    let addonsCost = 0;

    addonChecks.forEach((chk) => {
      if (chk.checked) {
        const price = parseFloat(chk.getAttribute("data-price") || "0");
        const isPerWheel = chk.getAttribute("data-per-wheel") === "true";
        addonsCost += isPerWheel ? price * wheelCount : price;
      }
    });

    const grandTotal = baseCost + addonsCost;

    if (baseCostEl) baseCostEl.textContent = `${baseCost} KM`;
    if (addonsCostEl) addonsCostEl.textContent = `${addonsCost} KM`;
    if (totalCostEl) totalCostEl.textContent = `${grandTotal} KM`;

    if (calcBookBtn) {
      calcBookBtn.href = `appointments.html?service=zamjena&rim=${encodeURIComponent(
        selectedRimLabel
      )}&estimate=${encodeURIComponent(grandTotal + " KM")}`;
    }
  };

  rimRadios.forEach((r) => r.addEventListener("change", updateServiceCalculator));
  countRadios.forEach((c) => c.addEventListener("change", updateServiceCalculator));
  addonChecks.forEach((chk) => chk.addEventListener("change", updateServiceCalculator));
  updateServiceCalculator();
}

/* --------------------------------------------------------------------------
   5. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach((other) => other.classList.remove("open"));
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Appointments Form & Saved Appointments Manager (localStorage)
   -------------------------------------------------------------------------- */
const STORAGE_KEY_APPOINTMENTS = "fastlane_appointments";

function getSavedAppointments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_APPOINTMENTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAppointments(list) {
  localStorage.setItem(STORAGE_KEY_APPOINTMENTS, JSON.stringify(list));
}

function renderSavedAppointments() {
  const listContainer = document.getElementById("saved-appointments-list");
  const clearBtn = document.getElementById("clear-appointments-btn");
  if (!listContainer) return;

  const t = (key) => (window.FastLaneApp ? window.FastLaneApp.t(key) : key);
  const appointments = getSavedAppointments();

  if (clearBtn) {
    clearBtn.classList.toggle("hidden", appointments.length === 0);
  }

  if (appointments.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-8 px-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm">
        <i class="far fa-calendar-check text-2xl mb-2 text-amber-500 block"></i>
        <span>${t("appt.saved.empty")}</span>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = appointments
    .map(
      (item) => `
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex flex-col gap-2 transition-all">
        <div class="flex items-center justify-between gap-2">
          <span class="font-mono-num text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            #${item.id}
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            ${t("appt.saved.status")}
          </span>
        </div>
        <div class="font-semibold text-slate-900 dark:text-white text-sm">
          ${escapeHtml(item.serviceLabel || item.service)}
        </div>
        <div class="text-xs text-slate-600 dark:text-slate-300 flex flex-wrap gap-x-4 gap-y-1">
          <span><i class="far fa-user mr-1 text-amber-500"></i>${escapeHtml(item.name)}</span>
          <span><i class="far fa-clock mr-1 text-amber-500"></i>${escapeHtml(item.formattedDate)}</span>
          ${
            item.rim
              ? `<span><i class="fas fa-compact-disc mr-1 text-amber-500"></i>${escapeHtml(item.rim)}</span>`
              : ""
          }
          ${
            item.plate
              ? `<span><i class="fas fa-car mr-1 text-amber-500"></i>${escapeHtml(item.plate)}</span>`
              : ""
          }
        </div>
        <div class="flex justify-end mt-1">
          <button
            type="button"
            data-cancel-id="${item.id}"
            class="cancel-appt-btn text-xs font-medium text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
          >
            <i class="fas fa-times-circle"></i> ${t("appt.saved.cancel")}
          </button>
        </div>
      </div>
    `
    )
    .join("");

  listContainer.querySelectorAll(".cancel-appt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-cancel-id");
      const updated = getSavedAppointments().filter((a) => a.id !== id);
      saveAppointments(updated);
      renderSavedAppointments();
    });
  });
}

function initAppointmentsManager() {
  const apptForm = document.getElementById("appointment-form");
  if (!apptForm) return;

  // Set default minimum datetime to current local time
  const dateInput = document.getElementById("appointmentDate");
  if (dateInput) {
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    tomorrow.setHours(10, 0, 0, 0);
    const tzOffset = tomorrow.getTimezoneOffset() * 60000;
    const localISOTime = new Date(tomorrow - tzOffset).toISOString().slice(0, 16);
    if (!dateInput.value) {
      dateInput.value = localISOTime;
    }
  }

  // Pre-fill from URL query parameters if navigated from Home Estimator or Services Calculator
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");
  const rimParam = params.get("rim");
  const vehicleParam = params.get("vehicle");
  const estimateParam = params.get("estimate");

  const serviceSelect = document.getElementById("service");
  const rimSelect = document.getElementById("rimSize");
  const vehicleSelect = document.getElementById("vehicleType");
  const notesInput = document.getElementById("notes");

  if (serviceParam && serviceSelect) {
    const optionExists = Array.from(serviceSelect.options).some((o) => o.value === serviceParam);
    if (optionExists) serviceSelect.value = serviceParam;
  }
  if (rimParam && rimSelect) {
    const optionExists = Array.from(rimSelect.options).some((o) => o.value === rimParam);
    if (optionExists) rimSelect.value = rimParam;
  }
  if (vehicleParam && vehicleSelect) {
    const optionExists = Array.from(vehicleSelect.options).some((o) => o.value === vehicleParam);
    if (optionExists) vehicleSelect.value = vehicleParam;
  }
  if (estimateParam && notesInput && !notesInput.value) {
    const lang = window.FastLaneApp ? window.FastLaneApp.getLang() : "bs";
    notesInput.value =
      lang === "en"
        ? `Estimated quote from calculator: ${estimateParam}`
        : `Okvirni obračun sa kalkulatora: ${estimateParam}`;
  }

  // Render existing saved appointments
  renderSavedAppointments();

  const clearBtn = document.getElementById("clear-appointments-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      saveAppointments([]);
      renderSavedAppointments();
    });
  }

  const errorBanner = document.getElementById("appt-error-banner");
  const successBanner = document.getElementById("appt-success-banner");

  apptForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const requiredInputs = apptForm.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );
    let isValid = true;

    requiredInputs.forEach((input) => {
      const val = input.value.trim();
      const emailInvalid =
        input.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

      if (!val || emailInvalid) {
        input.classList.add("is-invalid");
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (!isValid) {
      if (errorBanner) errorBanner.classList.remove("hidden");
      if (successBanner) successBanner.classList.add("hidden");
      return;
    }

    if (errorBanner) errorBanner.classList.add("hidden");

    const name = document.getElementById("name")?.value.trim() || "";
    const phone = document.getElementById("phone")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const plate = document.getElementById("plate")?.value.trim() || "";
    const rim = rimSelect ? rimSelect.options[rimSelect.selectedIndex]?.text : "";
    const serviceVal = serviceSelect?.value || "";
    const serviceLabel = serviceSelect
      ? serviceSelect.options[serviceSelect.selectedIndex]?.text
      : serviceVal;
    const rawDate = dateInput?.value || "";
    const formattedDate = rawDate ? rawDate.replace("T", " u ") : "";

    const newBooking = {
      id: "FL-" + Math.floor(1000 + Math.random() * 9000),
      name,
      phone,
      email,
      plate,
      rim,
      service: serviceVal,
      serviceLabel,
      formattedDate,
      createdAt: new Date().toISOString()
    };

    const existing = getSavedAppointments();
    existing.unshift(newBooking);
    saveAppointments(existing);
    renderSavedAppointments();

    if (successBanner) {
      successBanner.classList.remove("hidden");
      const codeEl = document.getElementById("appt-booking-code");
      if (codeEl) codeEl.textContent = `#${newBooking.id}`;
    }

    apptForm.reset();
    // Restore default tomorrow time after reset
    if (dateInput && rawDate) {
      dateInput.value = rawDate;
    }
  });
}

/* --------------------------------------------------------------------------
   7. Contact Form Validation & Feedback
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  const successAlert = document.getElementById("contact-success-alert");
  const errorAlert = document.getElementById("contact-error-alert");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const requiredInputs = contactForm.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );
    let isValid = true;

    requiredInputs.forEach((input) => {
      const val = input.value.trim();
      const emailInvalid =
        input.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

      if (!val || emailInvalid) {
        input.classList.add("is-invalid");
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (!isValid) {
      if (errorAlert) errorAlert.classList.remove("hidden");
      if (successAlert) successAlert.classList.add("hidden");
      return;
    }

    if (errorAlert) errorAlert.classList.add("hidden");
    if (successAlert) successAlert.classList.remove("hidden");
    contactForm.reset();
  });
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
