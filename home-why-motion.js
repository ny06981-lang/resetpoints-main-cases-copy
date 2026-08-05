(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var raf = 0;

  function enhance() {
    var section = document.getElementById("why");
    var graphic = section && section.querySelector(".w-full.max-w-lg");
    var svg = graphic && graphic.querySelector("svg");
    if (!svg || svg.dataset.rpMotionReady === "true") return;

    svg.dataset.rpMotionReady = "true";
    svg.classList.add("rp-why-motion");
    svg.setAttribute("aria-hidden", "true");
    svg.querySelectorAll("path").forEach(function (path, index) {
      path.classList.add("rp-why-motion__line", "rp-why-motion__line--" + index);
    });

    if (prefersReducedMotion) return;

    function move(event) {
      var rect = graphic.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      var y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        svg.style.setProperty("--rp-pointer-x", (x * 9).toFixed(2) + "px");
        svg.style.setProperty("--rp-pointer-y", (y * 9).toFixed(2) + "px");
        svg.style.setProperty("--rp-pointer-rotate", (x * 2.2).toFixed(2) + "deg");
      });
    }

    function reset() {
      svg.style.setProperty("--rp-pointer-x", "0px");
      svg.style.setProperty("--rp-pointer-y", "0px");
      svg.style.setProperty("--rp-pointer-rotate", "0deg");
    }

    graphic.addEventListener("pointermove", move, { passive: true });
    graphic.addEventListener("pointerleave", reset, { passive: true });
  }

  var observer = new MutationObserver(enhance);
  observer.observe(document.body, { childList: true, subtree: true });
  enhance();
}());
