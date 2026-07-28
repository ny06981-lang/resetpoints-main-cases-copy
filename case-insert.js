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
        title: "Опыт, который собирается под задачу команды",
        intro: "Реальные форматы Resetpoints: от камерных leadership offsite до больших выездов-наград.",
        prev: "Предыдущий кейс",
        next: "Следующий кейс",
        link: "Посмотреть кейс",
        soon: "Скоро",
        goalsLabel: "Цели",
        formatLabel: "Формат",
      }
    : {
        label: "Case studies",
        title: "Experiences designed around the team context",
        intro: "Real Resetpoints formats: from intimate leadership offsites to large reward retreats.",
        prev: "Previous case",
        next: "Next case",
        link: "View case",
        soon: "Soon",
        goalsLabel: "Goals",
        formatLabel: "Format",
      };

  const cases = isRu
    ? [
        {
          title: "Оффсайт для управленческой команды крупного банка",
          image: "case-bank-offsite-01-welcome.jpg",
          alt: "Welcome-зона оффсайта для крупного банка",
          href: caseUrl,
          badges: ["Крупный банк", "Reward offsite", "50 участников", "Лето 2026"],
          goals:
            "Празднование пройденного этапа, восстановление энергии и вдохновение команды на следующий цикл.",
          format:
            "Летний загородный формат, мягкая официальная часть, азартные олимпийские игры, торжественный BBQ-ужин, живая музыка, покатушки на квадроциклах и заплыв на сапах.",
          result: "Эффект: команда выдохнула, сблизилась и уехала с ощущением сильного общего момента.",
          status: "ready",
        },
        {
          title: "Кейс 2",
          image: "case-bank-offsite-03-outdoor-circle.jpg",
          alt: "Участники на открытой площадке во время командного выезда",
          badges: ["Team retreat", "До 40 участников", "В работе"],
          goals: "Описание будет добавлено после согласования деталей и фото.",
          format: "Заглушка для следующего корпоративного кейса.",
          status: "soon",
        },
        {
          title: "Кейс 3",
          image: "case-bank-offsite-05-evening.jpg",
          alt: "Вечерняя часть корпоративного выезда",
          badges: ["Reward offsite", "60+ участников", "В работе"],
          goals: "Описание будет добавлено после согласования деталей и фото.",
          format: "Заглушка для следующего корпоративного кейса.",
          status: "soon",
        },
      ]
    : [
        {
          title: "Leadership offsite for a large bank",
          image: "case-bank-offsite-01-welcome.jpg",
          alt: "Welcome area at a corporate offsite for a large bank",
          href: caseUrl,
          badges: ["Large bank", "Reward offsite", "50 participants", "Summer 2026"],
          goals: "Celebrate a completed stage, restore energy, and inspire the team for the next cycle.",
          format:
            "A summer countryside format with a light official part, energetic team games, a ceremonial BBQ dinner, live music, quad biking, and SUP.",
          result: "Effect: the team exhaled, reconnected, and left with a strong shared moment.",
          status: "ready",
        },
        {
          title: "Case 2",
          image: "case-bank-offsite-03-outdoor-circle.jpg",
          alt: "Participants outdoors during a team retreat",
          badges: ["Team retreat", "Up to 40 participants", "In progress"],
          goals: "Description will be added after details and photos are approved.",
          format: "Placeholder for the next corporate case.",
          status: "soon",
        },
        {
          title: "Case 3",
          image: "case-bank-offsite-05-evening.jpg",
          alt: "Evening part of a corporate offsite",
          badges: ["Reward offsite", "60+ participants", "In progress"],
          goals: "Description will be added after details and photos are approved.",
          format: "Placeholder for the next corporate case.",
          status: "soon",
        },
      ];

  const renderBadges = (items) => items.map((item) => `<span>${item}</span>`).join("");
  const renderSlide = (item, index) => `
    <article class="rp-case-slide${index === 0 ? " is-active" : ""}" data-case-slide="${index}" aria-hidden="${index === 0 ? "false" : "true"}">
      <a class="rp-case-slide__image" ${item.href ? `href="${item.href}"` : ""} aria-label="${item.href ? `${copy.link}: ${item.title}` : item.title}">
        <img src="${asset(item.image)}" alt="${item.alt}" loading="lazy" />
      </a>
      <div class="rp-case-slide__body">
        <div class="rp-case-slide__meta">${renderBadges(item.badges)}</div>
        <h3>${item.title}</h3>
        <dl class="rp-case-slide__details">
          <div>
            <dt>${copy.goalsLabel}</dt>
            <dd>${item.goals}</dd>
          </div>
          <div>
            <dt>${copy.formatLabel}</dt>
            <dd>${item.format}</dd>
          </div>
        </dl>
        ${item.result ? `<p class="rp-case-slide__result">${item.result}</p>` : ""}
        ${
          item.href
            ? `<a class="rp-case-slide__link" href="${item.href}">${copy.link} →</a>`
            : `<span class="rp-case-slide__pending">${copy.soon}</span>`
        }
      </div>
    </article>
  `;

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
        <div class="rp-cases__carousel" data-case-carousel>
          <div class="rp-cases__controls" aria-label="${copy.label}">
            <button class="rp-cases__arrow" type="button" data-case-prev aria-label="${copy.prev}">‹</button>
            <div class="rp-cases__dots">
              ${cases
                .map(
                  (_, index) =>
                    `<button class="rp-cases__dot${index === 0 ? " is-active" : ""}" type="button" data-case-dot="${index}" aria-label="${copy.label} ${index + 1}"></button>`,
                )
                .join("")}
            </div>
            <button class="rp-cases__arrow" type="button" data-case-next aria-label="${copy.next}">›</button>
          </div>
          <div class="rp-cases__viewport">
            <div class="rp-cases__track">
              ${cases.map(renderSlide).join("")}
            </div>
          </div>
        </div>
      </div>
    `;

    clients.insertAdjacentElement("afterend", section);
    const slides = [...section.querySelectorAll("[data-case-slide]")];
    const dots = [...section.querySelectorAll("[data-case-dot]")];
    const setActive = (nextIndex) => {
      const activeIndex = ((nextIndex % slides.length) + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        const isActive = index === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
        dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
      });
      section.dataset.activeCase = String(activeIndex);
    };
    section.querySelector("[data-case-prev]").addEventListener("click", () => {
      setActive(Number(section.dataset.activeCase || 0) - 1);
    });
    section.querySelector("[data-case-next]").addEventListener("click", () => {
      setActive(Number(section.dataset.activeCase || 0) + 1);
    });
    dots.forEach((dot, index) => dot.addEventListener("click", () => setActive(index)));
    section.dataset.activeCase = "0";
    return true;
  }

  if (render()) return;

  const observer = new MutationObserver(() => {
    if (render()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
