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
    // keep the phone status bar in step with a manually chosen theme
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
      m.content = next === "dark" ? "#000000" : "#ffffff";
    });
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
