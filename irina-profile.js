(function () {
  "use strict";

  var isRu = document.documentElement.lang === "ru";
  var copy = isRu
    ? {
        meta: ["20+ лет в digital", "CEO / CMO / COO", "Стратегический партнёр"],
        proofTitle: "Проверенный опыт",
        proofs: [
          ["20+ лет в digital и people-направлениях", "Роли CEO, CMO, COO и управляющего партнёра; работа с ростом, командами и трансформациями."],
          ["Системная работа с собственниками и топ-командами", "В независимой практике помогает принимать решения в моменты перехода, когда прежняя логика бизнеса больше не работает."]
        ],
        clientsTitle: "Знаковый опыт",
        clientsIntro: "Компании и профессиональные среды, в которых Ирина занимала управленческие роли и развивала свою практику. Это не список клиентских логотипов.",
        logos: [["LinguaLeo", "LINGUALEO"], ["Groupon", "GROUPON"], ["Rambler", "RAMBLER"], ["Kokoc Group", "KOKOC GROUP"], ["E-promo", "E-PROMO"], ["Московская школа управления СКОЛКОВО", "SKOLKOVO"]]
      }
    : {
        meta: ["20+ years in digital", "CEO / CMO / COO", "Strategic partner"],
        proofTitle: "Selected experience",
        proofs: [
          ["20+ years across digital and people leadership", "CEO, CMO, COO, and managing partner roles across growth, teams, and transformation."],
          ["Systemic work with founders and leadership teams", "In independent practice, she helps leaders make decisions at moments of transition, when the old business logic no longer works."]
        ],
        clientsTitle: "Selected experience",
        clientsIntro: "Companies and professional environments where Irina held leadership roles and developed her practice. This is not a list of facilitation clients.",
        logos: [["LinguaLeo", "LINGUALEO"], ["Groupon", "GROUPON"], ["Rambler", "RAMBLER"], ["Kokoc Group", "KOKOC GROUP"], ["E-promo", "E-PROMO"], ["Moscow School of Management SKOLKOVO", "SKOLKOVO"]]
      };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character];
    });
  }

  function wordmark(item) {
    var size = item[1].length > 11 ? 22 : 28;
    return '<div class="dm-logo" aria-label="' + escapeHtml(item[0]) + '"><svg class="dm-logo__wordmark" viewBox="0 0 220 48" role="img" aria-label="' + escapeHtml(item[0]) + '"><text x="0" y="32" font-size="' + size + '" font-family="Arial, Helvetica, sans-serif" font-weight="800" letter-spacing="1">' + escapeHtml(item[1]) + '</text></svg></div>';
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
