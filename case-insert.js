(function () {
  const isRu = window.location.pathname.includes("/ru") || !window.location.pathname.includes("/en");
  const repoPrefix = window.location.pathname.includes("/resetpoints-main-cases-copy")
    ? "/resetpoints-main-cases-copy/"
    : "/";
  const root = repoPrefix.endsWith("/") ? repoPrefix : `${repoPrefix}/`;
  const caseUrl = `${root}${isRu ? "ru/" : ""}cases/bank-offsite-summer-2026/`;
  const asset = (name) => `${root}case-assets/${name}`;

  const copy = isRu
    ? {
        label: "Кейсы",
        title: "Как это выглядит в реальных командах",
        intro:
          "Короткие истории о задачах, формате и эффекте. Без лишней героики: что собрали, зачем и что почувствовала команда.",
        featuredTitle: "Оффсайт для управленческой команды крупного банка",
        featuredText:
          "50 человек, летний загородный формат, мягкая официальная часть, командная игра, BBQ, музыка и свободное время без перегруженной повестки.",
        result: "Эффект: единение и ощущение, что встретились близкие люди.",
        link: "Посмотреть кейс",
        soon: "Развернутый кейс готовится",
        case2: "Командный выезд для product-команды",
        case2Text: "Грузия, смена контекста, живая коммуникация и сильное общее воспоминание.",
        case3: "Выезд-награда для команды роста",
        case3Text: "Празднование этапа, восстановление энергии и настрой на следующий цикл.",
      }
    : {
        label: "Case studies",
        title: "What this looks like for real teams",
        intro:
          "Short stories about the client context, format, and effect. No noise: what we built, why it mattered, and what changed for the team.",
        featuredTitle: "Leadership offsite for a large bank",
        featuredText:
          "50 participants, a summer countryside format, a light official part, team games, BBQ, music, and unforced time together.",
        result: "Effect: unity and the feeling that people met as humans again.",
        link: "View case",
        soon: "Full case coming soon",
        case2: "Team retreat for a product team",
        case2Text: "Georgia, context shift, live communication, and a shared team memory.",
        case3: "Reward retreat for a growth team",
        case3Text: "Celebrating a milestone, restoring energy, and preparing for the next cycle.",
      };

  function render() {
    if (document.querySelector(".rp-cases")) return true;

    const clients = document.querySelector("#clients");
    if (!clients) return false;

    const section = document.createElement("section");
    section.className = "rp-cases";
    section.id = "cases";
    section.innerHTML = `
      <div class="rp-cases__inner">
        <div class="rp-cases__head">
          <div>
            <p class="rp-cases__label">${copy.label}</p>
            <h2>${copy.title}</h2>
          </div>
          <p class="rp-cases__copy">${copy.intro}</p>
        </div>
        <div class="rp-cases__grid">
          <article class="rp-case rp-case--featured">
            <a class="rp-case__image" href="${caseUrl}" aria-label="${copy.link}: ${copy.featuredTitle}">
              <img src="${asset("case-bank-offsite-01-welcome.jpg")}" alt="Welcome-зона оффсайта для крупного банка" loading="lazy" />
            </a>
            <div class="rp-case__body">
              <div class="rp-case__meta">
                <span>${isRu ? "Крупный банк" : "Large bank"}</span>
                <span>${isRu ? "50 участников" : "50 participants"}</span>
                <span>${isRu ? "Лето 2026" : "Summer 2026"}</span>
              </div>
              <h3>${copy.featuredTitle}</h3>
              <p>${copy.featuredText}</p>
              <p>${copy.result}</p>
              <a class="rp-case__link" href="${caseUrl}">${copy.link} →</a>
            </div>
          </article>
          <div class="rp-cases__side">
            <article class="rp-case">
              <div class="rp-case__body">
                <span class="rp-case__tag">Team retreat</span>
                <h3>${copy.case2}</h3>
                <p>${copy.case2Text}</p>
                <span class="rp-case__pending">${copy.soon}</span>
              </div>
            </article>
            <article class="rp-case">
              <div class="rp-case__body">
                <span class="rp-case__tag">Reward offsite</span>
                <h3>${copy.case3}</h3>
                <p>${copy.case3Text}</p>
                <span class="rp-case__pending">${copy.soon}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    `;

    clients.insertAdjacentElement("afterend", section);
    return true;
  }

  if (render()) return;

  const observer = new MutationObserver(() => {
    if (render()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
