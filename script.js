// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle: follows the system setting until the visitor picks one
(() => {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const current = () => root.dataset.theme || (systemDark.matches ? "dark" : "light");

  btn.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();

// Gentle reveal as sections scroll into view
(() => {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
})();
