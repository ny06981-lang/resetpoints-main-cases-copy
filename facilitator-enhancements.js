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
      clientsRu: ["Leroy Merlin", "X5 Retail Group", "Роснефть", "РусГидро", "Kempinski", "Polyana Group", "Наше Золото", "Правительство Самарской области"],
      clientsEn: ["Leroy Merlin", "X5 Retail Group", "Rosneft", "RusHydro", "Kempinski", "Polyana Group", "Nashe Zoloto", "Samara Region Government"],
      noteRu: "Более 150 стратегических и командных сессий в DreamTeam. В список включены организации, публично указанные на официальном сайте команды.",
      noteEn: "150+ strategy and team sessions through DreamTeam. The list reflects organizations named publicly by the team.",
      socials: [["DreamTeam", "https://dream-team.pro/"], ["Telegram project", "https://t.me/brave_heart6"]]
    },
    irina: {
      clientsRu: ["Fortune 500", "Российские корпорации", "Технологические стартапы", "Трансформация бизнеса", "Новые направления", "Лидерские команды"],
      clientsEn: ["Fortune 500", "Russian corporations", "Technology startups", "Business transformation", "New ventures", "Leadership teams"],
      noteRu: "Ирина публично описывает опыт работы с Fortune 500, российскими корпорациями и технологическими стартапами. Конкретные названия клиентов на странице не раскрываются.",
      noteEn: "Irina describes public experience with Fortune 500 companies, Russian corporations, and technology startups. Specific client names are not disclosed on the page.",
      socials: [["LinkedIn", "https://www.linkedin.com/in/irinashashkina/"], ["Telegram", "https://t.me/ishashkina"], ["Channel", "https://t.me/ShashkinaIrina"]]
    },
    elena: {
      clientsRu: ["Pravo.ru / Pravo.Tech", "Rocket10", "OTUS", "Нетология", "Skillbox", "Topcareer"],
      clientsEn: ["Pravo.ru / Pravo.Tech", "Rocket10", "OTUS", "Netology", "Skillbox", "Topcareer"],
      noteRu: "Елена работала как HRD и бизнес-эксперт в технологических компаниях, а также вела образовательные программы. Это контекст её практики, а не рекламный список логотипов.",
      noteEn: "Elena has worked as an HRD and business expert in technology companies and has led education programs. This is professional context, not a logo wall.",
      socials: [["LinkedIn", "https://ru.linkedin.com/in/%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0-%D0%BB%D0%B5%D0%BD%D1%81%D1%83-a6209b41"], ["Telegram", "https://t.me/lensu"], ["Profile", "https://synchronize.ru/elena-lensu"]]
    },
    max: {
      clientsRu: ["Яндекс", "deep mind", "Pink Elephant Group", "Theory U", "Лидерские программы"],
      clientsEn: ["Yandex", "deep mind", "Pink Elephant Group", "Theory U", "Leadership programs"],
      noteRu: "В открытых источниках упомянуты лидерская трансформационная программа для Яндекса и проекты deep mind. Список отражает публичный профессиональный контекст, а не закрытые клиентские проекты.",
      noteEn: "Public sources mention a leadership transformation program for Yandex and deep mind projects. This reflects public professional context, not confidential client work.",
      socials: [["LinkedIn", "https://www.linkedin.com/in/max-rodin-14115a79"], ["Telegram", "https://t.me/mindfulleadersrussia"], ["deep mind", "https://deepmindworld.vercel.app"]]
    }
  }[key];

  if (!data) return;

  function addClients() {
    if (document.querySelector(".facilitator-clients")) return;
    var section = document.createElement("section");
    section.className = "facilitator-clients";
    var title = isEnglish ? "Selected experience" : key === "dmitry" ? "С кем работал" : key === "max" ? "Публичный контекст" : "Профессиональный контекст";
    var items = isEnglish ? data.clientsEn : data.clientsRu;
    var note = isEnglish ? data.noteEn : data.noteRu;
    section.innerHTML = '<div class="facilitator-section"><h2>' + title + '</h2><div class="facilitator-section__content"><ul class="facilitator-clients__list">' + items.map(function (item) { return '<li>' + item + '</li>'; }).join("") + '</ul><p class="facilitator-clients__note">' + note + '</p></div></div>';
    var formats = document.querySelector(".facilitator-section h2");
    var formatsSection = formats && formats.closest(".facilitator-section");
    if (formatsSection) formatsSection.parentNode.insertBefore(section, formatsSection);
  }

  function addSocials() {
    var contact = document.querySelector(".facilitator-contact");
    if (!contact || document.querySelector(".facilitator-socials")) return;
    var nav = document.createElement("nav");
    nav.className = "facilitator-socials";
    nav.setAttribute("aria-label", isEnglish ? "Public profiles" : "Публичные профили");
    nav.innerHTML = data.socials.map(function (social) {
      return '<a href="' + social[1] + '" target="_blank" rel="noreferrer">' + social[0] + '</a>';
    }).join("");
    contact.parentNode.appendChild(nav);
  }

  function addFinalCta() {
    if (document.querySelector(".facilitator-final-cta")) return;
    var section = document.createElement("section");
    section.className = "facilitator-final-cta";
    section.innerHTML = isEnglish
      ? '<div class="facilitator-section"><div><p class="facilitator-label">Next step</p><h2>Let’s shape the right format for your team</h2></div><div class="facilitator-section__content"><p>Tell us what is happening in the team and what outcome you need. We will suggest the right facilitator and build a focused format.</p><a class="facilitator-cta" href="https://t.me/chikhalov" target="_blank" rel="noreferrer">Discuss a session&nbsp;→</a></div></div>'
      : '<div class="facilitator-section"><div><p class="facilitator-label">Следующий шаг</p><h2>Соберём формат под вашу команду</h2></div><div class="facilitator-section__content"><p>Расскажите, что происходит в команде и какой результат нужен. Мы предложим подходящего ведущего и соберём рабочий формат.</p><a class="facilitator-cta" href="https://t.me/chikhalov" target="_blank" rel="noreferrer">Обсудить сессию&nbsp;→</a></div></div>';
    document.querySelector(".facilitator-main").appendChild(section);
  }

  addClients();
  addSocials();
  addFinalCta();
}());
