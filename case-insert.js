(function () {
  const isRu = window.location.pathname.includes("/ru") || !window.location.pathname.includes("/en");
  const repoPrefix = window.location.pathname.includes("/resetpoints-main-cases-copy")
    ? "/resetpoints-main-cases-copy/"
    : "/";
  const root = repoPrefix.endsWith("/") ? repoPrefix : `${repoPrefix}/`;
  const bankCaseUrl = `${root}${isRu ? "ru/" : ""}cases/bank-offsite-summer-2026/`;
  const fintechCaseUrl = `${root}${isRu ? "ru/" : ""}cases/fintech-strategy-retreat-georgia/`;
  const asset = (name) => `${root}case-assets/${name}`;

  const copy = isRu
    ? {
        label: "Примеры корпоративных эвентов",
        prev: "Предыдущий кейс",
        next: "Следующий кейс",
        link: "Посмотреть кейс",
        soon: "Скоро",
        goalsLabel: "Цели",
        formatLabel: "Формат",
      }
    : {
        label: "Corporate event examples",
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
          title: "Оффсайт для команды международного банка",
          image: "case-bank-offsite-01-welcome.jpg",
          alt: "Welcome-зона оффсайта для крупного банка",
          href: bankCaseUrl,
          badges: ["Крупный банк", "Reward offsite", "50 участников", "Лето 2026"],
          goals:
            "Празднование пройденного этапа, восстановление энергии и вдохновение команды на следующий цикл.",
          format:
            "Летний загородный формат, мягкая официальная часть, азартные олимпийские игры, торжественный BBQ-ужин, живая музыка, покатушки на квадроциклах и заплыв на сапах.",
          status: "ready",
        },
        {
          title: "Стратегический ретрит для топ-команды финтех-стартапа",
          image: "case-fintech-georgia-01-kakheti.jpg",
          alt: "Вид на Кахетию во время стратегического ретрита",
          href: fintechCaseUrl,
          badges: ["Финтех-стартап", "Strategy Retreat", "3 дня", "Грузия"],
          goals: "Сформулировать видение следующего цикла, синхронизировать топ-команду и вернуть энергию для новых проектов.",
          format:
            "Кахетия, стратегическая сессия, созвоны с расширенной командой, ужины, костер, виноградники, кулинарный воркшоп и гала-ужин на винодельне.",
          status: "ready",
        },
      ]
    : [
        {
          title: "Offsite for an international bank team",
          image: "case-bank-offsite-01-welcome.jpg",
          alt: "Welcome area at a corporate offsite for an international bank",
          href: bankCaseUrl,
          badges: ["Large bank", "Reward offsite", "50 participants", "Summer 2026"],
          goals: "Celebrate a completed stage, restore energy, and inspire the team for the next cycle.",
          format:
            "A summer countryside format with a light official part, energetic team games, a ceremonial BBQ dinner, live music, quad biking, and SUP.",
          status: "ready",
        },
        {
          title: "Strategy retreat for a fintech startup leadership team",
          image: "case-fintech-georgia-01-kakheti.jpg",
          alt: "View of Kakheti during a strategy retreat in Georgia",
          href: fintechCaseUrl,
          badges: ["Fintech startup", "Strategy Retreat", "3 days", "Georgia"],
          goals: "Shape the next-cycle vision, align the leadership team, and restore energy for new projects.",
          format:
            "Kakheti, facilitated strategy work, calls with the extended team, dinners, a campfire, vineyards, a culinary workshop, and a gala dinner at a winery.",
          status: "ready",
        },
      ];

  const countriesLabel = isRu ? "География выездов" : "Retreat geography";
  const countries = [
    { flag: "🇬🇪", name: "Georgia" },
    { flag: "🇦🇲", name: "Armenia" },
    { flag: "🇷🇸", name: "Serbia" },
    { flag: "🇺🇿", name: "Uzbekistan" },
    { flag: "🇲🇪", name: "Montenegro" },
    { flag: "🇦🇪", name: "UAE, Dubai" },
    { flag: "🇹🇷", name: "Turkey" },
    { flag: "🇪🇬", name: "Egypt" },
    { flag: "🇲🇦", name: "Morocco" },
    { flag: "🇹🇳", name: "Tunisia" },
    { flag: "🇮🇩", name: "Bali" },
    { flag: "🇵🇹", name: "Portugal" },
    { flag: "🇪🇸", name: "Spain" },
    { flag: "🇳🇱", name: "Netherlands" },
    { flag: "🇸🇮", name: "Slovenia" },
    { flag: "🇦🇱", name: "Albania" },
    { flag: "🇹🇭", name: "Thailand" },
    { flag: "🇻🇳", name: "Vietnam" },
  ];

  const facilitatorCopy = isRu
    ? {
        label: "Ведущие и фасилитаторы",
        title: "Люди, которые помогают команде думать и действовать вместе",
        intro: "Подбираем ведущего под задачу команды, уровень разговора и нужное состояние группы.",
        profile: "Открыть профиль",
      }
    : {
        label: "Facilitators and hosts",
        title: "People who help teams think and act together",
        intro: "We match the right facilitator to the team’s challenge, conversation, and desired energy.",
        profile: "Open profile",
      };

  const facilitators = isRu
    ? [
        {
          name: "Дмитрий Риман",
          slug: "dmitry-riman",
          role: "Организационный консультант · фасилитатор стратегических сессий",
          description: "Помогает управленческим командам договориться о важном, увидеть общую картину и превратить разговор в следующий шаг.",
          tags: ["Стратегические сессии", "Командные сессии", "Коучинг руководителей"],
          stats: ["20 лет в бизнесе", "150+ сессий", "600+ часов коучинга"],
          image: "dmitry-riman.jpg",
          alt: "Дмитрий Риман, организационный консультант и фасилитатор",
        },
        {
          name: "Ирина Шашкина",
          slug: "irina-shashkina",
          role: "Стратегический партнёр · архитектор логики бизнеса",
          description: "Помогает собственникам и топ-командам принимать системные решения, когда прежняя логика бизнеса больше не работает.",
          tags: ["Стратегические ретриты", "Системный взгляд", "Топ-команды"],
          stats: ["20+ лет опыта", "Fortune 500", "Работа со сложностью"],
          image: "irina-shashkina.jpg",
          alt: "Ирина Шашкина, стратегический партнёр и архитектор логики бизнеса",
        },
        {
          name: "Елена Ленсу",
          slug: "elena-lensu",
          role: "Эксперт по человеческому функционированию в сложной рабочей среде",
          description: "Помогает руководителям и командам сохранять ясность, зрелое взаимодействие и эффективность под нагрузкой.",
          tags: ["Командные сессии", "Development Lab", "Сложные среды"],
          stats: ["Гештальт-терапевт", "ex-HRD", "IT и продуктовые команды"],
          image: "elena-lensu.jpg",
          alt: "Елена Ленсу, эксперт по человеческому функционированию в сложной рабочей среде",
        },
        {
          name: "Макс Родин",
          slug: "max-rodin",
          role: "Фасилитатор трансформации · основатель deep mind consulting",
          description: "Работает с состоянием, осознанностью и групповыми процессами, помогая командам действовать в сложном меняющемся мире.",
          tags: ["Теория U", "Осознанность", "Трансформация команд"],
          stats: ["Founder deep mind consulting", "Групповые процессы", "B2B и B2C"],
          image: "max-rodin.jpg",
          alt: "Макс Родин, фасилитатор трансформации и основатель deep mind consulting",
        },
      ]
    : [
        {
          name: "Dmitry Riman",
          slug: "dmitry-riman",
          role: "Organizational consultant · strategy session facilitator",
          description: "Helps leadership teams align on what matters, see the bigger picture, and turn a meaningful conversation into the next step.",
          tags: ["Strategy sessions", "Team sessions", "Executive coaching"],
          stats: ["20 years in business", "150+ sessions", "600+ coaching hours"],
          image: "dmitry-riman.jpg",
          alt: "Dmitry Riman, organizational consultant and facilitator",
        },
        {
          name: "Irina Shashkina",
          slug: "irina-shashkina",
          role: "Strategic partner · business logic architect",
          description: "Helps owners and leadership teams make systemic decisions when the old business logic no longer works.",
          tags: ["Strategy retreats", "Systems thinking", "Leadership teams"],
          stats: ["20+ years of experience", "Fortune 500", "Complexity work"],
          image: "irina-shashkina.jpg",
          alt: "Irina Shashkina, strategic partner and business logic architect",
        },
        {
          name: "Elena Lensu",
          slug: "elena-lensu",
          role: "Human functioning expert in complex work environments",
          description: "Helps leaders and teams preserve clarity, mature interaction, and effectiveness under pressure.",
          tags: ["Team sessions", "Development Lab", "Complex environments"],
          stats: ["Gestalt therapist", "ex-HRD", "Product and IT teams"],
          image: "elena-lensu.jpg",
          alt: "Elena Lensu, human functioning expert in complex work environments",
        },
        {
          name: "Max Rodin",
          slug: "max-rodin",
          role: "Transformation facilitator · founder of deep mind consulting",
          description: "Works with presence, awareness, and group processes to help teams act in a complex and changing world.",
          tags: ["Theory U", "Awareness", "Team transformation"],
          stats: ["Founder, deep mind consulting", "Group processes", "B2B and B2C"],
          image: "max-rodin.jpg",
          alt: "Max Rodin, transformation facilitator and founder of deep mind consulting",
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

  const renderCountryItems = () =>
    [...countries, ...countries]
      .map(
        (item, index) => `
          <span class="rp-country-item" aria-hidden="${index >= countries.length ? "true" : "false"}">
            <span class="rp-country-item__flag">${item.flag}</span>
            <span>${item.name}</span>
          </span>
        `,
      )
      .join("");

  function renderCases() {
    if (document.querySelector(".rp-cases")) return true;

    const clients = document.querySelector("#clients");
    if (!clients) return false;

    const section = document.createElement("section");
    section.className = "rp-cases";
    section.id = "cases";
    section.innerHTML = `
      <div class="rp-cases__inner">
        <div class="rp-cases__head">
          <p class="rp-cases__label">${copy.label}</p>
          <div class="rp-cases__controls" aria-label="${copy.label} navigation">
            <button class="rp-cases__arrow" type="button" data-case-prev aria-label="${copy.prev}">‹</button>
            <span class="rp-cases__count" data-case-count aria-live="polite">01 / ${String(cases.length).padStart(2, "0")}</span>
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
        </div>
        <div class="rp-cases__carousel" data-case-carousel role="region" aria-label="${copy.label}" tabindex="0">
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
    const count = section.querySelector("[data-case-count]");
    const carousel = section.querySelector("[data-case-carousel]");
    const viewport = section.querySelector(".rp-cases__viewport");
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
      count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
      section.dataset.activeCase = String(activeIndex);
    };
    section.querySelector("[data-case-prev]").addEventListener("click", () => {
      setActive(Number(section.dataset.activeCase || 0) - 1);
    });
    section.querySelector("[data-case-next]").addEventListener("click", () => {
      setActive(Number(section.dataset.activeCase || 0) + 1);
    });
    dots.forEach((dot, index) => dot.addEventListener("click", () => setActive(index)));
    carousel.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      setActive(Number(section.dataset.activeCase || 0) + (event.key === "ArrowRight" ? 1 : -1));
    });
    const startSwipe = (clientX, clientY) => {
      startX = clientX;
      startY = clientY;
      didSwipe = false;
    };
    const finishSwipe = (clientX, clientY) => {
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      if (Math.abs(deltaX) < 46 || Math.abs(deltaX) < Math.abs(deltaY)) return;
      const now = Date.now();
      if (now - lastSwipeAt < 320) return;
      lastSwipeAt = now;
      didSwipe = true;
      setActive(Number(section.dataset.activeCase || 0) + (deltaX < 0 ? 1 : -1));
    };
    let startX = 0;
    let startY = 0;
    let didSwipe = false;
    let lastSwipeAt = 0;
    viewport.addEventListener("pointerdown", (event) => {
      startSwipe(event.clientX, event.clientY);
    });
    viewport.addEventListener("pointerup", (event) => {
      finishSwipe(event.clientX, event.clientY);
    });
    viewport.addEventListener("mousedown", (event) => startSwipe(event.clientX, event.clientY));
    viewport.addEventListener("mouseup", (event) => finishSwipe(event.clientX, event.clientY));
    viewport.addEventListener("touchstart", (event) => {
      const touch = event.touches[0];
      startSwipe(touch.clientX, touch.clientY);
    }, { passive: true });
    viewport.addEventListener("touchend", (event) => {
      const touch = event.changedTouches[0];
      finishSwipe(touch.clientX, touch.clientY);
    }, { passive: true });
    viewport.addEventListener(
      "click",
      (event) => {
        if (!didSwipe) return;
        event.preventDefault();
        event.stopPropagation();
        didSwipe = false;
      },
      true,
    );
    section.dataset.activeCase = "0";
    return true;
  }

  function renderCountries() {
    if (document.querySelector(".rp-countries")) return true;

    const details = document.querySelector("#details");
    if (!details) return false;

    const section = document.createElement("section");
    section.className = "rp-countries";
    section.setAttribute("aria-label", countriesLabel);
    section.innerHTML = `
      <div class="rp-countries__head">
        <h2>${countriesLabel}</h2>
        <div></div>
      </div>
      <div class="rp-countries__marquee">
        <div class="rp-countries__fade rp-countries__fade--left"></div>
        <div class="rp-countries__fade rp-countries__fade--right"></div>
        <div class="rp-countries__track">
          ${renderCountryItems()}
        </div>
      </div>
    `;

    details.insertAdjacentElement("afterend", section);
    return true;
  }

  function renderFacilitators() {
    if (document.querySelector(".rp-facilitators")) return true;

    const countriesSection = document.querySelector(".rp-countries");
    if (!countriesSection) return false;

    const section = document.createElement("section");
    section.className = "rp-facilitators";
    section.id = "facilitators";
    section.setAttribute("aria-label", facilitatorCopy.label);
    section.innerHTML = `
      <div class="rp-facilitators__inner">
        <div class="rp-facilitators__head">
          <div>
            <p class="rp-facilitators__label">${facilitatorCopy.label}</p>
            <h2>${facilitatorCopy.title}</h2>
          </div>
          <p class="rp-facilitators__intro">${facilitatorCopy.intro}</p>
        </div>
        <div class="rp-facilitators__carousel" data-facilitator-carousel>
          <button class="rp-facilitators__arrow rp-facilitators__arrow--prev" type="button" data-facilitator-prev aria-label="${isRu ? "Предыдущий ведущий" : "Previous facilitator"}">&#8592;</button>
          <div class="rp-facilitators__viewport" data-facilitator-viewport>
            <div class="rp-facilitators__track" data-facilitator-track>
              ${facilitators
            .map((item, index) => {
              const href = `${root}${isRu ? "ru/" : ""}facilitators/${item.slug}/`;
              return `
                <article class="rp-facilitator-card" data-facilitator-slide="${index}">
                  <a class="rp-facilitator-card__photo" href="${href}" aria-label="${facilitatorCopy.profile}: ${item.name}">
                    <img src="${root}facilitator-assets/${item.image}" alt="${item.alt}" loading="lazy" />
                  </a>
                  <div class="rp-facilitator-card__body">
                    <div class="rp-facilitator-card__topline">
                      <span class="rp-facilitator-card__index">${String(index + 1).padStart(2, "0")}</span>
                      <div class="rp-facilitator-card__tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                    </div>
                    <h3>${item.name}</h3>
                    <p class="rp-facilitator-card__role">${item.role}</p>
                    <p class="rp-facilitator-card__description">${item.description}</p>
                    <div class="rp-facilitator-card__stats">${item.stats.map((stat) => `<span>${stat}</span>`).join("")}</div>
                    <a class="rp-facilitator-card__link" href="${href}">${facilitatorCopy.profile} →</a>
                  </div>
                </article>
              `;
            })
            .join("")}
            </div>
          </div>
          <button class="rp-facilitators__arrow rp-facilitators__arrow--next" type="button" data-facilitator-next aria-label="${isRu ? "Следующий ведущий" : "Next facilitator"}">&#8594;</button>
        </div>
        <div class="rp-facilitators__pagination" data-facilitator-pagination aria-label="${isRu ? "Навигация по ведущим" : "Facilitator navigation"}">
          ${facilitators.map((item, index) => `<button type="button" class="rp-facilitators__dot${index === 0 ? " is-active" : ""}" data-facilitator-dot="${index}" aria-label="${isRu ? "Открыть профиль " : "Open profile "}${item.name}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("")}
        </div>
      </div>
    `;

    countriesSection.insertAdjacentElement("afterend", section);

    const viewport = section.querySelector("[data-facilitator-viewport]");
    const slides = Array.from(section.querySelectorAll("[data-facilitator-slide]"));
    const dots = Array.from(section.querySelectorAll("[data-facilitator-dot]"));
    const prev = section.querySelector("[data-facilitator-prev]");
    const next = section.querySelector("[data-facilitator-next]");
    const setActive = () => {
      const center = viewport.scrollLeft + viewport.clientWidth / 2;
      let active = 0;
      slides.forEach((slide, index) => {
        if (Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center) < Math.abs(slides[active].offsetLeft + slides[active].offsetWidth / 2 - center)) active = index;
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === active);
        dot.setAttribute("aria-current", index === active ? "true" : "false");
      });
    };
    const move = (direction) => viewport.scrollBy({ left: direction * viewport.clientWidth * 0.88, behavior: "smooth" });
    prev.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => slides[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })));
    viewport.addEventListener("scroll", setActive, { passive: true });
    setActive();
    return true;
  }

  function render() {
    const casesReady = renderCases();
    const countriesReady = renderCountries();
    const facilitatorsReady = renderFacilitators();
    return casesReady && countriesReady && facilitatorsReady;
  }

  if (render()) return;

  const observer = new MutationObserver(() => {
    if (render()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
