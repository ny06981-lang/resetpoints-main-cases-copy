(function () {
  var page = window.location.pathname;
  var isEnglish = document.documentElement.lang === "en";
  var key = page.indexOf("dmitry-riman") > -1
    ? "dmitry"
    : page.indexOf("irina-shashkina") > -1
      ? "irina"
      : page.indexOf("elena-lensu") > -1
        ? "elena"
        : page.indexOf("max-rodin") > -1
          ? "max"
          : "";

  var data = {
    dmitry: {
      companiesRu: [
        ["Leroy Merlin", "Leroy", "leroy"], ["X5 Retail Group", "X5", "x5"], ["НК Роснефть", "РОСНЕФТЬ", "rosneft"],
        ["Ascott Deco Rus", "ASCOTT", "ascott"], ["Kempinski", "KEMPINSKI", "kempinski"], ["РусГидро", "РусГидро", "rushydro"],
        ["Polyana Group", "POLYANA", "polyana"], ["Наше Золото", "НАШЕ ЗОЛОТО", "gold"], ["Правительство Самарской области", "САМАРА", "samara"],
        ["ГК «Бизнес-Гарант»", "БИЗНЕС-ГАРАНТ", "business"]
      ],
      companiesEn: [
        ["Leroy Merlin", "Leroy", "leroy"], ["X5 Retail Group", "X5", "x5"], ["Rosneft", "ROSNEFT", "rosneft"],
        ["Ascott Deco Rus", "ASCOTT", "ascott"], ["Kempinski", "KEMPINSKI", "kempinski"], ["RusHydro", "RusHydro", "rushydro"],
        ["Polyana Group", "POLYANA", "polyana"], ["Nashe Zoloto", "NASHE ZOLOTO", "gold"], ["Samara Region Government", "SAMARA", "samara"],
        ["Business Garant", "BUSINESS GARANT", "business"]
      ],
      noteRu: "Более 150 стратегических и командных сессий в DreamTeam. Логотипы собраны по организациям, публично указанным на официальном сайте команды.",
      noteEn: "150+ strategy and team sessions through DreamTeam. The marks represent organizations named publicly by the team.",
      socials: [["DreamTeam", "https://dream-team.pro/"], ["Telegram", "https://t.me/RimanDm"]]
    },
    irina: {
      companiesRu: [["Kokoc Group", "KOKOC", "kokoc"], ["LinguaLeo", "LinguaLeo", "lingua"], ["Groupon", "GROUPON", "groupon"], ["Rambler", "Rambler", "rambler"], ["E-promo", "E-PROMO", "epromo"], ["Сколково", "СКОЛКОВО", "skolkovo"]],
      companiesEn: [["Kokoc Group", "KOKOC", "kokoc"], ["LinguaLeo", "LinguaLeo", "lingua"], ["Groupon", "GROUPON", "groupon"], ["Rambler", "Rambler", "rambler"], ["E-promo", "E-PROMO", "epromo"], ["Skolkovo", "SKOLKOVO", "skolkovo"]],
      noteRu: "Компании и типы команд, с которыми Ирина работала в стратегических и управленческих форматах. Конкретные проекты раскрываются только с разрешения заказчиков.",
      noteEn: "Companies and team contexts Irina has worked with in strategy and leadership formats. Specific projects are shared only with client permission.",
      socials: [["LinkedIn", "https://www.linkedin.com/in/irinashashkina/"], ["Telegram", "https://t.me/ishashkina"], ["Channel", "https://t.me/ShashkinaIrina"]]
    },
    elena: {
      companiesRu: [["Pravo.ru / Pravo.Tech", "Pravo.ru", "pravo"], ["Rocket10", "ROCKET10", "rocket"], ["OTUS", "OTUS", "otus"], ["Нетология", "НЕТОЛОГИЯ", "netology"], ["Skillbox", "SKILLBOX", "skillbox"], ["Topcareer", "TOPCAREER", "topcareer"]],
      companiesEn: [["Pravo.ru / Pravo.Tech", "Pravo.ru", "pravo"], ["Rocket10", "ROCKET10", "rocket"], ["OTUS", "OTUS", "otus"], ["Netology", "NETOLOGY", "netology"], ["Skillbox", "SKILLBOX", "skillbox"], ["Topcareer", "TOPCAREER", "topcareer"]],
      noteRu: "Компании и образовательные платформы, с которыми Елена работала в HR, консалтинге и программах развития команд.",
      noteEn: "Companies and education platforms Elena has worked with across HR leadership, consulting, and team development programs.",
      socials: [["LinkedIn", "https://ru.linkedin.com/in/%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0-%D0%BB%D0%B5%D0%BD%D1%81%D1%83-a6209b41"], ["Telegram", "https://t.me/lensu"], ["Profile", "https://synchronize.ru/elena-lensu"]]
    },
    max: {
      companiesRu: [["Avito", "AVITO", "avito", "facilitator-assets/logos/avito.svg"], ["Яндекс", "YANDEX", "yandex", "facilitator-assets/logos/yandex.svg"], ["МТС", "MTS", "mts", "facilitator-assets/logos/mts.svg"], ["Ростелеком", "ROSTELECOM", "rostelecom", "facilitator-assets/logos/rostelecom.svg"], ["QIWI", "QIWI", "qiwi", "facilitator-assets/logos/qiwi.svg"], ["KROK", "KROK", "krok", "facilitator-assets/logos/krok.svg"], ["PandaDoc", "PANDADOC", "pandadoc", "facilitator-assets/logos/pandadoc.svg"], ["СберМаркет", "SBERMARKET", "sbermarket", "facilitator-assets/logos/sbermarket.svg"]],
      companiesEn: [["Avito", "AVITO", "avito", "facilitator-assets/logos/avito.svg"], ["Yandex", "YANDEX", "yandex", "facilitator-assets/logos/yandex.svg"], ["MTS", "MTS", "mts", "facilitator-assets/logos/mts.svg"], ["Rostelecom", "ROSTELECOM", "rostelecom", "facilitator-assets/logos/rostelecom.svg"], ["QIWI", "QIWI", "qiwi", "facilitator-assets/logos/qiwi.svg"], ["KROK", "KROK", "krok", "facilitator-assets/logos/krok.svg"], ["PandaDoc", "PANDADOC", "pandadoc", "facilitator-assets/logos/pandadoc.svg"], ["SberMarket", "SBERMARKET", "sbermarket", "facilitator-assets/logos/sbermarket.svg"]],
      socials: [["LinkedIn", "https://www.linkedin.com/in/max-rodin-14115a79"], ["Telegram канал", "https://t.me/mindfulleadersrussia"], ["deep mind", "https://deepmindworld.vercel.app/"]]
    }
  }[key];

  if (!data) return;

  function addClients() {
    document.querySelectorAll(".facilitator-clients").forEach(function (section) { section.remove(); });
    var section = document.createElement("section");
    section.className = "facilitator-clients";
    var title = isEnglish ? "Clients" : "Клиенты";
    var items = isEnglish ? data.companiesEn : data.companiesRu;
    var note = isEnglish ? data.noteEn : data.noteRu;
    section.innerHTML = '<div class="facilitator-section"><h2>' + title + '</h2><div class="facilitator-section__content"><ul class="facilitator-clients__list">' + items.map(function (item) {
      var logoSrc = isEnglish ? '../../../' + item[3] : '../../../../' + item[3];
      return '<li class="facilitator-logo facilitator-logo--' + item[2] + '" aria-label="' + item[0] + '">' + (item[3] ? '<img src="' + logoSrc + '" alt="' + item[0] + '" loading="lazy">' : '<span>' + item[1] + '</span><small>' + item[0] + '</small>') + '</li>';
    }).join("") + '</ul>' + (note ? '<p class="facilitator-clients__note">' + note + '</p>' : '') + '</div></div>';
    var sections = Array.from(document.querySelectorAll(".facilitator-section"));
    var formatsSection = sections.find(function (candidate) {
      var heading = candidate.querySelector(":scope > h2");
      return heading && /формат|working format/i.test(heading.textContent);
    });
    if (formatsSection) formatsSection.parentNode.insertBefore(section, formatsSection);
  }

  function addConversion() {
    var oldResult = document.querySelector(".facilitator-result");
    if (!oldResult) return;
    var label = oldResult.querySelector(".facilitator-label")?.textContent.trim() || (isEnglish ? "Key result" : "Ключевой результат");
    var title = oldResult.querySelector("h2")?.textContent.trim() || "";
    var paragraph = oldResult.querySelector(".facilitator-section__content > p")?.textContent.trim() || "";
    var section = document.createElement("section");
    section.className = "facilitator-conversion";
    section.innerHTML = '<div class="facilitator-section"><div><p class="facilitator-label">' + label + '</p><h2>' + title + '</h2></div><div class="facilitator-section__content"><p>' + paragraph + '</p><a class="facilitator-cta" href="https://t.me/chikhalov" target="_blank" rel="noreferrer">' + (isEnglish ? "Discuss a retreat&nbsp;→" : "Обсудить ретрит&nbsp;→") + '</a></div></div>';
    oldResult.replaceWith(section);
    document.querySelectorAll(".facilitator-final-cta").forEach(function (cta) { cta.remove(); });
  }

  function addHeroSocials() {
    var portrait = document.querySelector(".facilitator-portrait");
    if (!portrait) return;
    portrait.querySelectorAll(".facilitator-hero-socials").forEach(function (nav) { nav.remove(); });
    var nav = document.createElement("nav");
    nav.className = "facilitator-hero-socials";
    nav.setAttribute("aria-label", isEnglish ? "Facilitator profiles" : "Профили фасилитатора");
    nav.innerHTML = data.socials.map(function (social) {
      return '<a href="' + social[1] + '" target="_blank" rel="noreferrer">' + social[0] + '</a>';
    }).join("");
    portrait.appendChild(nav);
  }

  addClients();
  addHeroSocials();
  addConversion();
}());
