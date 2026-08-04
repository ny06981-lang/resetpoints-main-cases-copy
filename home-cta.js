(function () {
  var isEnglish = window.location.pathname.indexOf("/en") === 0 || window.location.pathname === "/";
  var copy = isEnglish
    ? {
        hero: "Plan your retreat",
        note: "Free consultation - no obligation.",
        final: "Plan your retreat"
      }
    : {
        hero: "Продумать выезд",
        note: "Бесплатная консультация - без обязательств.",
        final: "Продумать выезд"
      };

  function addNote(anchor, text, modifier) {
    if (!anchor || anchor.parentElement.querySelector(".rp-free-consult")) return;
    var note = document.createElement("p");
    note.className = "rp-free-consult" + (modifier ? " " + modifier : "");
    note.textContent = text;
    anchor.insertAdjacentElement("afterend", note);
  }

  function enhance() {
    var root = document.getElementById("root");
    if (!root) return;

    var hero = root.querySelector("main > section");
    var heroCta = hero && hero.querySelector('a[href*="t.me/chikhalov"]');
    if (heroCta) {
      if (heroCta.textContent.trim() !== copy.hero) heroCta.textContent = copy.hero;
      addNote(heroCta, copy.note, "rp-free-consult--hero");
    }

    var sections = root.querySelectorAll("main > section");
    var finalSection = sections[sections.length - 1];
    var finalCta = finalSection && finalSection.querySelector('a[href*="t.me/chikhalov"]');
    if (finalCta) {
      if (finalCta.textContent.trim() !== copy.final) finalCta.textContent = copy.final;
      addNote(finalCta, copy.note, "rp-free-consult--final");
    }
  }

  var observer = new MutationObserver(enhance);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  enhance();
})();
