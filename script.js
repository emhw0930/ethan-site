/* ------------------------------------------------------------
   Meng-Han Ethan Wu — site interactions
   Vanilla JS, no dependencies.
------------------------------------------------------------ */
(function () {
  "use strict";

  /* ---- Scroll-reveal via IntersectionObserver ---- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Atlanta clock (America/New_York) ---- */
  var clockEl = document.getElementById("clock");
  function tick() {
    if (!clockEl) return;
    var now = new Date();
    var s = now.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    clockEl.textContent = s;
  }
  tick();
  setInterval(tick, 1000);

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Back to top ---- */
  var toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Tab title flips when you leave ---- */
  var original = document.title;
  document.addEventListener("visibilitychange", function () {
    document.title = document.hidden ? "Come back — Ethan Wu" : original;
  });
})();
