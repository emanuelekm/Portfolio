document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTechnologies();
  setupProjectModal();
  setupTyping();
  setupNav();
  setupThemeToggle();
  setupReveal();
});

/* ---------------- reusable SVG icons ---------------- */

const ICONS = {
  arrowUpRight: '<svg class="icon-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  close: '<svg class="icon-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  external: '<svg class="icon-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
  csharp: `<svg class="brand-tech-svg csharp-logo" viewBox="0 0 64 64" aria-hidden="true"><rect x="5" y="5" width="54" height="54" rx="10"/><text x="32" y="41" text-anchor="middle">C#</text></svg>`,
  python: `<svg class="brand-tech-svg python-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6c-13 0-12 6-12 6v9h13v3H15S7 23 7 36s7 13 7 13h8v-7s0-6 7-6h13s7 0 7-7V18s0-12-17-12Zm-7 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><path d="M32 58c13 0 12-6 12-6v-9H31v-3h18s8 1 8-12-7-13-7-13h-8v7s0 6-7 6H22s-7 0-7 7v11s0 12 17 12Zm7-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>`,

  html: `<svg class="brand-tech-svg html-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 5h48l-5 48-19 6-19-6L8 5Z"/><path d="M19 16h27l-1 7H27l.5 6H44l-2 17-10 3-10-3-1-9h7l.5 4 3.5 1 3.5-1 .5-6H21l-2-19Z"/></svg>`,
  css: `<svg class="brand-tech-svg css-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 5h48l-5 48-19 6-19-6L8 5Z"/><path d="M19 16h28l-1 7H27l.5 5H45l-2 18-11 3-11-3-1-9h7l.5 4 4.5 1 4-1 .5-6H21l-2-19Z"/></svg>`,
  cpp: `<svg class="brand-tech-svg cpp-logo" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M22 39c-6-4-6-10 0-14 5-3 11-2 14 3l-5 4c-2-2-5-3-7-1-2 2-2 4 0 6 2 2 5 1 7-1l5 4c-3 5-9 6-14 3Zm20-12h3v4h4v3h-4v4h-3v-4h-4v-3h4v-4Zm-1-7h3v4h4v3h-4v4h-3v-4h-4v-3h4v-4Z"/></svg>`,
  mysql: `<svg class="brand-tech-svg mysql-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M10 45c8-2 13-8 15-17 2-10 9-17 19-17 5 0 9 2 12 5-4-1-7-1-10 1-4 2-6 5-7 9 5 1 9 4 12 8-5-2-9-2-13 0-4 2-8 6-12 11-4 3-9 4-16 0Z"/><path d="M45 16c4 3 6 7 6 11-3-3-6-5-10-6 1-2 2-4 4-5Z"/></svg>`,
  powerbi: `<svg class="brand-tech-svg powerbi-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M9 14h9v37H9zM22 24h9v27h-9zM35 34h9v17h-9zM48 8h7v43h-7z"/><path d="M13 10h38"/></svg>`,

  github: `<svg class="brand-tech-svg github-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6C17.6 6 6 17.7 6 32c0 11.5 7.5 21.2 17.9 24.6 1.3.2 1.8-.6 1.8-1.3v-4.8c-7.3 1.6-8.8-3.1-8.8-3.1-1.2-3-2.9-3.8-2.9-3.8-2.4-1.7.2-1.7.2-1.7 2.6.2 4 2.7 4 2.7 2.3 4 6 2.9 7.5 2.2.2-1.7.9-2.9 1.6-3.6-5.8-.7-11.9-2.9-11.9-12.8 0-2.8 1-5.1 2.7-6.9-.3-.7-1.2-3.5.3-6.9 0 0 2.2-.7 7.1 2.6 2.1-.6 4.3-.9 6.5-.9s4.4.3 6.5.9c4.9-3.3 7.1-2.6 7.1-2.6 1.5 3.4.6 6.2.3 6.9 1.7 1.8 2.7 4.1 2.7 6.9 0 9.9-6.1 12.1-11.9 12.8.9.8 1.7 2.4 1.7 4.9v7.3c0 .7.5 1.5 1.8 1.3C50.5 53.2 58 43.5 58 32 58 17.7 46.4 6 32 6Z"/></svg>`,


  javascript: `<svg class="brand-tech-svg javascript-logo" viewBox="0 0 64 64" aria-hidden="true"><rect x="5" y="5" width="54" height="54" rx="3"/><text x="47" y="50" text-anchor="end">JS</text></svg>`,
  sql: `<svg class="brand-tech-svg sql-logo" viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="15" rx="21" ry="8"/><path d="M11 15v26c0 4 9 8 21 8s21-4 21-8V15"/><path d="M11 28c0 4 9 8 21 8s21-4 21-8"/></svg>`,
  n8n: `<svg class="brand-tech-svg n8n-logo" viewBox="0 0 64 64" aria-hidden="true"><circle cx="16" cy="32" r="8"/><circle cx="48" cy="16" r="8"/><circle cx="48" cy="48" r="8"/><path d="M22 29 40 19M22 35l18 10"/></svg>`,


  vscode: `<svg class="brand-tech-svg vscode-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 12 6 19l15 13L6 45l8 7 21-20V32L14 12Z"/><path d="M36 13 55 7v50l-19-6V13Zm7 8v22l7 2V19l-7 2Z"/></svg>`,
};

/* ---------------- projects ---------------- */

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => `
    <article class="project-card-wrap reveal" style="transition-delay:${i * 90}ms">
      <button type="button" class="card-surface project-card project-card-button" data-project="${i}" aria-label="Abrir detalhes de ${p.title}">
        <div class="project-image-wrap">
          <img src="${p.image}" alt="Ilustração do projeto ${p.title}" class="project-image" loading="lazy">
          <span class="project-index">${p.index}</span>
          <span class="project-open">${ICONS.arrowUpRight}</span>
        </div>
        <div class="project-card-body">
          <span class="project-highlight">${p.shortDescription}</span>
          <h3 class="project-title">${p.title}</h3>
        </div>
      </button>
    </article>
  `).join("");
}

function setupProjectModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("projectModalClose");
  const modalIndex = document.getElementById("modalProjectIndex");
  const modalTitle = document.getElementById("modalProjectTitle");
  const modalDescription = document.getElementById("modalProjectDescription");
  const modalObjective = document.getElementById("modalProjectObjective");
  const modalTech = document.getElementById("modalProjectTech");
  const modalFeatures = document.getElementById("modalProjectFeatures");
  const modalLinks = document.getElementById("modalProjectLinks");

  if (!modal) return;

  const openModal = (index) => {
    const p = projects[index];
    if (!p) return;

    modalIndex.textContent = p.index;
    modalTitle.textContent = p.title;
    modalDescription.textContent = p.description;
    modalObjective.textContent = p.objective;
    modalTech.innerHTML = p.tech.map((t) => `<li>${t}</li>`).join("");
    modalFeatures.innerHTML = p.features.map((f) => `<li><span class="feature-dot bg-brand-gradient"></span>${f}</li>`).join("");

    const links = [];
    if (p.link) {
      links.push(`<a href="${p.link}" target="_blank" rel="noreferrer noopener" class="modal-link bg-brand-gradient">GitHub ${ICONS.external}</a>`);
    }
    if (p.demo) {
      links.push(`<a href="${p.demo}" target="_blank" rel="noreferrer noopener" class="modal-link gradient-border">Demonstração ${ICONS.external}</a>`);
    }
    modalLinks.innerHTML = links.length ? links.join("") : '<span class="modal-no-link">Links não disponíveis para este projeto.</span>';

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  document.getElementById("projectsGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-project]");
    if (card) openModal(Number(card.dataset.project));
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}

/* ---------------- technologies ---------------- */

function renderTechnologies() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = technologies.map((tech, i) => `
    <div class="reveal technology-item" style="transition-delay:${i * 45}ms">
      <div class="technology-card gradient-border" title="${tech.name}" tabindex="0" aria-label="${tech.name}">
        <span class="technology-icon">${ICONS[tech.icon] || '<span class="tech-glyph">?</span>'}</span>
        <span class="technology-name">${tech.name}</span>
      </div>
    </div>
  `).join("");
}

/* ---------------- typing effect ---------------- */

function setupTyping() {
  const target = document.getElementById("typingText");
  if (!target) return;

  const text = "Olá, eu sou Emanuele Kmiecik";
  let index = 0;

  const type = () => {
    target.textContent = text.slice(0, index);
    if (index < text.length) {
      index += 1;
      window.setTimeout(type, index === 1 ? 180 : 125);
    }
  };

  window.setTimeout(type, 500);
}

/* ---------------- nav: scroll state + mobile menu ---------------- */

function setupNav() {
  const nav = document.getElementById("siteNav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("menu-mobile");
  const iconMenu = document.getElementById("iconMenu");
  const iconX = document.getElementById("iconX");

  let open = false;
  menuToggle.addEventListener("click", () => {
    open = !open;
    mobileMenu.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    iconMenu.classList.toggle("hidden", open);
    iconX.classList.toggle("hidden", !open);
  });

  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      open = false;
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      iconMenu.classList.remove("hidden");
      iconX.classList.add("hidden");
    })
  );
}

/* ---------------- dark mode toggle ---------------- */

function setupThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const iconMoon = document.getElementById("iconMoon");
  const iconSun = document.getElementById("iconSun");
  let dark = false;

  btn.addEventListener("click", () => {
    dark = !dark;
    document.documentElement.classList.toggle("dark", dark);
    btn.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
    iconMoon.classList.toggle("hidden", dark);
    iconSun.classList.toggle("hidden", !dark);
  });
}

/* ---------------- reveal on scroll ---------------- */

function setupReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.setAttribute("data-visible", "true"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}
