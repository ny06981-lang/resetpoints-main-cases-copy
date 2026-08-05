(function () {
  "use strict";

  var root = document.getElementById("root");
  if (!root) return;
  var sectionObserver = null;
  var observedSections = {};

  function track(name, payload) {
    if (window.dataLayer && Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event: name }, payload));
    if (typeof window.gtag === "function") window.gtag("event", name, payload);
  }

  function assignAnchors() {
    var sections = Array.prototype.slice.call(root.querySelectorAll("main > section"));
    if (!sections.length) return false;
    if (!sections[0].id) sections[0].id = "home";
    sections.forEach(function (section, index) {
      if (section.id) return;
      var content = (section.textContent || "").toLowerCase();
      if (/видео|video/.test(content)) section.id = "videos";
      else if (/b2b-задач|b2b outcomes|эффективност|great results/.test(content)) section.id = "outcomes";
      else if (index === sections.length - 1) section.id = "contact";
    });
    var geography = root.querySelector(".rp-countries");
    if (geography && !geography.id) geography.id = "geography";
    var cases = root.querySelector(".rp-cases");
    if (cases && !cases.id) cases.id = "cases";
    var facilitators = root.querySelector(".rp-facilitators");
    if (facilitators && !facilitators.id) facilitators.id = "facilitators";
    root.querySelectorAll("[id]").forEach(function (element) { element.style.scrollMarginTop = "96px"; });
    return true;
  }

  function bindTracking() {
    root.querySelectorAll('a[href^="#"]').forEach(function (link) {
      if (link.dataset.rpTrackingBound === "true") return;
      link.dataset.rpTrackingBound = "true";
      link.addEventListener("click", function () { track("anchor_click", { anchor_id: link.hash.slice(1), anchor_label: link.textContent.trim() }); });
    });
  }

  function observeSections() {
    if (!window.IntersectionObserver) return;
    if (!sectionObserver) sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.id;
        if (!id || !entry.isIntersecting || entry.target.dataset.rpViewed === "true") return;
        entry.target.dataset.rpViewed = "true";
        track("anchor_view", { anchor_id: id });
      });
    }, { threshold: 0.45 });
    root.querySelectorAll("main > section[id], .rp-countries[id], .rp-cases[id], .rp-facilitators[id]").forEach(function (section) {
      if (observedSections[section.id]) return;
      observedSections[section.id] = true;
      sectionObserver.observe(section);
    });
  }

  function enhance() {
    if (!assignAnchors()) return false;
    bindTracking();
    observeSections();
    return true;
  }

  var observer = new MutationObserver(enhance);
  observer.observe(root, { childList: true, subtree: true });
  enhance();
}());
