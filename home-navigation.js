(function () {
  "use strict";

  var isEnglish = window.location.pathname.indexOf("/en") === 0 || window.location.pathname === "/";
  var labels = isEnglish
    ? [["#cases", "Case studies"], ["#facilitators", "Facilitators"], ["#formats", "Formats"], ["#details", "How we work"], ["#reviews", "Reviews"], ["#team", "About us"], ["#contact", "Discuss a retreat"]]
    : [["#cases", "Кейсы"], ["#facilitators", "Фасилитаторы"], ["#formats", "Форматы"], ["#details", "Как работаем"], ["#reviews", "Отзывы"], ["#team", "О нас"], ["#contact", "Обсудить выезд"]];

  function getMenu() {
    var close = document.querySelector('button[aria-label="' + (isEnglish ? "Close menu" : "Закрыть меню") + '"]');
    if (!close) return null;
    var overlay = close.closest("div.fixed.inset-0");
    if (!overlay) return null;
    var panel = Array.prototype.find.call(overlay.querySelectorAll("div"), function (node) {
      return typeof node.className === "string" && node.className.indexOf("flex flex-col gap-8") > -1;
    });
    return panel ? { close: close, panel: panel } : null;
  }

  function render() {
    var menu = getMenu();
    if (!menu || menu.panel.dataset.rpNavigationReady === "true") return;
    var languageSwitcher = menu.panel.lastElementChild;
    menu.panel.replaceChildren();
    menu.panel.dataset.rpNavigationReady = "true";

    labels.forEach(function (item) {
      var link = document.createElement("a");
      link.href = item[0];
      link.textContent = item[1];
      link.className = "hover:opacity-60 transition-transform hover:scale-105";
      link.addEventListener("click", function () {
        if (window.dataLayer && Array.isArray(window.dataLayer)) window.dataLayer.push({ event: "anchor_click", anchor_id: item[0].slice(1), anchor_label: item[1] });
        menu.close.click();
      });
      menu.panel.appendChild(link);
    });
    if (languageSwitcher) {
      languageSwitcher.className = "pt-2";
      menu.panel.appendChild(languageSwitcher);
    }
  }

  var observer = new MutationObserver(render);
  observer.observe(document.body, { childList: true, subtree: true });
  render();
}());
