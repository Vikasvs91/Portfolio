document.addEventListener('DOMContentLoaded', function () {
  // 1. Redirect on refresh if URL has a hash
  const navigationType = performance.getEntriesByType("navigation")[0].type;

  if (navigationType === "reload") {
    const hash = window.location.hash;
    const validHashes = ["#Home", "#aboutmain", "#skillsmain", "#Projectmain", "#contacts"];

    if (validHashes.includes(hash)) {
      // Instead of reloading file, reset to Home
      window.location.hash = "#Home";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // 2. Cursor logic
  const cursor = document.querySelector('.cursor');
  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  if (isMobile) {
    if (cursor) cursor.style.display = 'none';
  } else {
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
      }
    });
  }
  const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// 1. Toggle nav on hamburger click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open"); // optional for animation
});

// 2. Close menu when a nav link is clicked (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

// 3. Optional: close menu if user clicks outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  }
});

});
