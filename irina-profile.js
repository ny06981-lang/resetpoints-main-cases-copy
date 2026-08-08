(function () {
  "use strict";

  var isRu = document.documentElement.lang === "ru";
  var copy = isRu
    ? {
        meta: ["20+ лет в digital", "CEO / CMO / COO", "Стратегический партнёр"],
        proofTitle: "Проверенный опыт",
        proofs: [],
        clientsTitle: "Клиенты",
        clientsIntro: "Компании, с которыми связан профессиональный опыт Ирины в управленческих, стратегических и командных задачах.",
        logos: [["LinguaLeo", "LINGUALEO"], ["Groupon", "GROUPON"], ["Rambler", "RAMBLER"], ["Kokoc Group", "KOKOC GROUP", "https://www.linkedin.com/company/10512098/"], ["E-promo", "E-PROMO"], ["Московская школа управления СКОЛКОВО", "SKOLKOVO", "https://www.linkedin.com/school/206407/"], ["City Business School", "CITY BUSINESS SCHOOL", "https://www.linkedin.com/school/1188296/"]]
      }
    : {
        meta: ["20+ years in digital", "CEO / CMO / COO", "Strategic partner"],
        proofTitle: "Selected experience",
        proofs: [],
        clientsTitle: "Clients",
        clientsIntro: "Companies connected to Irina's professional experience across leadership, strategy, and team work.",
        logos: [["LinguaLeo", "LINGUALEO"], ["Groupon", "GROUPON"], ["Rambler", "RAMBLER"], ["Kokoc Group", "KOKOC GROUP", "https://www.linkedin.com/company/10512098/"], ["E-promo", "E-PROMO"], ["Moscow School of Management SKOLKOVO", "SKOLKOVO", "https://www.linkedin.com/school/206407/"], ["City Business School", "CITY BUSINESS SCHOOL", "https://www.linkedin.com/school/1188296/"]]
      };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character];
    });
  }

  function wordmark(item) {
    var size = item[1].length > 11 ? 22 : 28;
    var tag = item[2] ? '<a class="dm-logo" href="' + escapeHtml(item[2]) + '" target="_blank" rel="noreferrer" aria-label="' + escapeHtml(item[0]) + '">' : '<div class="dm-logo" aria-label="' + escapeHtml(item[0]) + '">';
    var close = item[2] ? '</a>' : '</div>';
    return tag + '<svg class="dm-logo__wordmark" viewBox="0 0 220 48" role="img" aria-label="' + escapeHtml(item[0]) + '"><text x="0" y="32" font-size="' + size + '" font-family="Arial, Helvetica, sans-serif" font-weight="800" letter-spacing="1">' + escapeHtml(item[1]) + '</text></svg>' + close;
  }

  function render() {
    var hero = document.querySelector(".dm-hero");
    var proofs = document.querySelector(".dm-proofs");
    var clients = document.querySelector(".dm-clients");
    if (!hero || !proofs || !clients || document.body.dataset.irinaProfileReady === "true") return;

    hero.querySelectorAll(".dm-meta span").forEach(function (node, index) {
      if (copy.meta[index]) node.textContent = copy.meta[index];
    });
    proofs.querySelector("h2").textContent = copy.proofTitle;
    proofs.querySelector(".dm-proof-grid").innerHTML = copy.proofs.map(function (item) {
      return '<article class="dm-proof"><p class="dm-eyebrow">' + escapeHtml(item[0]) + '</p><p>' + escapeHtml(item[1]) + '</p></article>';
    }).join("");
    clients.querySelector("h2").textContent = copy.clientsTitle;
    clients.querySelector(".dm-section__content > p").textContent = copy.clientsIntro;
    clients.querySelector(".dm-logo-grid").innerHTML = copy.logos.map(wordmark).join("");
    document.body.dataset.irinaProfileReady = "true";
  }

  var observer = new MutationObserver(render);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  render();
}());
