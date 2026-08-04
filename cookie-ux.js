(function () {
  var isRu = document.documentElement.lang === "ru";
  var consentKey = "yury-event-cookie-consent";

  function findBanner() {
    return Array.from(document.querySelectorAll("div")).find(function (element) {
      var style = window.getComputedStyle(element);
      return style.position === "fixed" && element.querySelector("button") && /cookies/i.test(element.textContent || "");
    });
  }

  function hideBanner(banner) {
    if (banner) banner.remove();
  }

  function renderSettings(banner, actions) {
    if (banner.querySelector(".rp-cookie-settings")) return;
    var settings = document.createElement("div");
    settings.className = "rp-cookie-settings";
    settings.innerHTML = '<div class="rp-cookie-setting"><span><strong>' + (isRu ? "Необходимые cookies" : "Essential cookies") + '</strong><small>' + (isRu ? "Нужны для работы сайта и сохранения выбора." : "Required for the website and your choice to work.") + '</small></span><input type="checkbox" checked disabled></div><div class="rp-cookie-setting"><span><strong>' + (isRu ? "Функциональные cookies" : "Functional cookies") + '</strong><small>' + (isRu ? "Помогают запоминать настройки и улучшать интерфейс." : "Help remember settings and improve the interface.") + '</small></span><input type="checkbox" data-functional-cookie checked></div><button type="button" class="rp-cookie-save">' + (isRu ? "Сохранить выбор" : "Save choice") + '</button>';
    banner.insertBefore(settings, actions);
    settings.querySelector(".rp-cookie-save").addEventListener("click", function () {
      var functional = settings.querySelector("[data-functional-cookie]").checked;
      localStorage.setItem(consentKey, functional ? "accepted" : "rejected");
      hideBanner(banner);
    });
  }

  function enhanceBanner() {
    var banner = findBanner();
    if (!banner || banner.dataset.cookieUx === "ready") return;
    banner.dataset.cookieUx = "ready";
    if (localStorage.getItem(consentKey) === "rejected") {
      hideBanner(banner);
      return;
    }
    banner.classList.add("rp-cookie-banner");
    var accept = Array.from(banner.querySelectorAll("button")).find(function (button) { return /хорошо|accept/i.test(button.textContent); });
    if (!accept) return;
    accept.textContent = isRu ? "Принять" : "Accept";
    accept.classList.add("rp-cookie-primary");
    var actions = accept.parentElement;
    actions.classList.add("rp-cookie-actions");
    var reject = document.createElement("button");
    reject.type = "button";
    reject.className = "rp-cookie-secondary";
    reject.textContent = isRu ? "Отклонить" : "Reject";
    reject.addEventListener("click", function () {
      localStorage.setItem(consentKey, "rejected");
      hideBanner(banner);
    });
    var settingsButton = document.createElement("button");
    settingsButton.type = "button";
    settingsButton.className = "rp-cookie-secondary";
    settingsButton.textContent = isRu ? "Настроить" : "Settings";
    settingsButton.addEventListener("click", function () { renderSettings(banner, actions); });
    actions.insertBefore(reject, accept);
    actions.insertBefore(settingsButton, accept);
  }

  var observer = new MutationObserver(enhanceBanner);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  enhanceBanner();
}());
