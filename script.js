const phone = "93991918587";

const planData = {
  P: [
    { name: "EssÃªncia", price: "R$217,00", items: ["1 BuquÃª por mÃªs", "Embalagem especial", "Design floral surpresa", "Flores frescas", "Entrega inclusa"] },
    { name: "Harmonia", price: "R$407,00", items: ["2 BuquÃªs por mÃªs", "Entrega quinzenal", "Embalagem especial", "Design floral surpresa", "Flores frescas", "Entrega inclusa"] },
    { name: "Encanto", price: "R$767,00", items: ["4 BuquÃªs por mÃªs", "Entrega semanal", "Embalagem especial", "Design floral surpresa", "Arranjos exclusivos", "Entrega inclusa"] },
  ],
  M: [
    { name: "EssÃªncia", price: "R$317,00", items: ["1 BuquÃª por mÃªs", "Embalagem especial", "Design floral surpresa", "Flores frescas", "Entrega inclusa"] },
    { name: "Harmonia", price: "R$597,00", items: ["2 BuquÃªs por mÃªs", "Entrega quinzenal", "Embalagem especial", "Design floral surpresa", "Flores frescas", "Entrega inclusa"] },
    { name: "Encanto", price: "R$1.117,00", items: ["4 BuquÃªs por mÃªs", "Entrega semanal", "Embalagem especial", "Design floral surpresa", "Arranjos exclusivos", "Entrega inclusa"] },
  ],
  G: [
    { name: "EssÃªncia", price: "R$417,00", items: ["1 BuquÃª por mÃªs", "Embalagem especial", "Design floral surpresa", "Flores frescas", "Entrega inclusa"] },
    { name: "Harmonia", price: "R$787,00", items: ["2 BuquÃªs por mÃªs", "Entrega quinzenal", "Embalagem especial", "Design floral surpresa", "Flores frescas", "Entrega inclusa"] },
    { name: "Encanto", price: "R$1.467,00", items: ["4 BuquÃªs por mÃªs", "Entrega semanal", "Embalagem especial", "Design floral surpresa", "Arranjos exclusivos", "Entrega inclusa"] },
  ],
};

const products = [
  {
    name: "Mix de Florais",
    theme: "green",
    image: "assets/catalogo/crops/mix-florais.jpg",
    description: "Flores nobres variadas e selecionadas de acordo com a paleta de cores escolhida pelo cliente.",
    prices: [["P", "R$239"], ["M", "R$349"], ["G", "R$459"]],
  },
  {
    name: "BuquÃª de Rosas",
    theme: "rose",
    image: "assets/bouquet-rosas.jpg",
    description: "Rosas vermelhas importadas em uma composiÃ§Ã£o exclusiva, intensa e majestosa.",
    prices: [["PÃ©tit", "R$450", "15 rosas"], ["P", "R$750", "25 rosas"], ["M", "R$980", "35 rosas"], ["G", "R$1500", "50 rosas"], ["GG", "R$3000", "100 rosas"]],
  },
  {
    name: "BuquÃª de GirassÃ³is",
    theme: "rose",
    image: "assets/bouquet-girassois.jpg",
    description: "GirassÃ³is luminosos em composiÃ§Ã£o vibrante para presentes marcantes.",
    prices: [["PÃ©tit", "R$450", "15 girassÃ³is"], ["P", "R$750", "25 girassÃ³is"], ["M", "R$980", "35 girassÃ³is"], ["G", "R$1400", "50 girassÃ³is"], ["GG", "R$2800", "100 girassÃ³is"]],
  },
  {
    name: "Box Floral",
    theme: "green",
    image: "assets/catalogo/crops/box-floral.jpg",
    description: "Box floral pronta para encantar, sem necessidade de vaso e com estÃ©tica impecÃ¡vel por mais tempo.",
    prices: [["P", "R$280"], ["G", "R$480"]],
  },
  {
    name: "ServiÃ§os Florais",
    theme: "green",
    image: "",
    placeholder: "Fotos de serviÃ§os sob encomenda",
    description: "Arranjos florais, buquÃª de noiva, assinatura floral e coroa fÃºnebre sob encomenda.",
    prices: [["Sob medida", "Consultar"]],
  },
];

const seasonalItems = [
  {
    name: "Box Floral",
    image: "assets/maes/page-0006.jpg",
    eyebrow: "PresenÃ§a para a casa",
    description: "Uma box delicada com flores nobres, acabamento especial e composiÃ§Ã£o pronta para encantar.",
    price: "R$280",
    prices: [["Tamanho P", "R$280"]],
  },
  {
    name: "BuquÃª Mix de Florais",
    image: "assets/maes/page-0004.jpg",
    eyebrow: "Aromas e texturas",
    description: "BuquÃª com flores selecionadas em tons suaves, criado para transmitir carinho, leveza e celebraÃ§Ã£o.",
    price: "A partir de R$280",
    prices: [["P", "R$280"], ["M", "R$420"], ["G", "R$580"]],
  },
  {
    name: "Envelope Floral",
    image: "assets/maes/page-0005.jpg",
    eyebrow: "Delicado e memorÃ¡vel",
    description: "Formato elegante para quem busca um presente diferente, com a estÃ©tica de um gesto escrito em flores.",
    price: "R$345",
    prices: [["Envelope floral", "R$345"]],
  },
  {
    name: "Flower Bag",
    image: "assets/maes/page-0009.jpg",
    eyebrow: "Presente que acompanha",
    description: "Flores em uma bag rÃºstica que permanece depois da entrega, unindo beleza e utilidade.",
    price: "R$425",
    prices: [["Flower Bag", "R$425"]],
  },
  {
    name: "Box Floral Dia das MÃ£es",
    image: "assets/maes/page-0007.jpg",
    eyebrow: "Cuidado e fÃ©",
    description: "Box floral em tamanho G com imagem religiosa em gesso, pensada como um presente de presenÃ§a, proteÃ§Ã£o e afeto.",
    price: "R$547",
    prices: [["Box G + imagem", "R$547"]],
  },
];

const themeMoments = {
  aniversario: {
    label: "AniversÃ¡rio",
    title: "Flores para celebrar a presenÃ§a de alguÃ©m.",
    description: "SugestÃµes alegres, delicadas ou exuberantes para transformar parabÃ©ns em memÃ³ria. Esta seÃ§Ã£o receberÃ¡ fotos reais de entregas feitas para aniversÃ¡rios.",
    photos: [
      { type: "image", src: "assets/catalogo/page-0011.jpg", alt: "Mix floral colorido para aniversÃ¡rio", label: "Mix alegre" },
      { type: "placeholder", label: "Box floral" },
      { type: "placeholder", label: "BuquÃª delicado" },
    ],
  },
  romance: {
    label: "Romance",
    title: "Gestos intensos, elegantes e inesquecÃ­veis.",
    description: "Rosas, tons profundos e composiÃ§Ãµes pensadas para declaraÃ§Ãµes, pedidos especiais e datas a dois.",
    photos: [
      { type: "image", src: "assets/bouquet-rosas.jpg", alt: "BuquÃª romÃ¢ntico de rosas", label: "Rosas importadas" },
      { type: "placeholder", label: "Pedido especial" },
      { type: "placeholder", label: "Surpresa romÃ¢ntica" },
    ],
  },
  agradecimento: {
    label: "Agradecimento",
    title: "Flores para dizer obrigada com beleza.",
    description: "Arranjos suaves, boxes e mix de florais para reconhecer cuidado, parceria, acolhimento e presenÃ§a.",
    photos: [
      { type: "image", src: "assets/catalogo/page-0006.jpg", alt: "Box floral para agradecimento", label: "Box floral" },
      { type: "placeholder", label: "Arranjo suave" },
      { type: "placeholder", label: "Paleta clara" },
    ],
  },
  datas: {
    label: "Datas especiais",
    title: "ComposiÃ§Ãµes sazonais para momentos marcantes.",
    description: "Dia das MÃ£es, Dia dos Namorados, formaturas, inauguraÃ§Ãµes e ocasiÃµes que pedem uma criaÃ§Ã£o com presenÃ§a.",
    photos: [
      { type: "image", src: "assets/bouquet-girassois.jpg", alt: "BuquÃª solar para data especial", label: "BuquÃª solar" },
      { type: "placeholder", label: "Datas sazonais" },
      { type: "placeholder", label: "ComposiÃ§Ã£o premium" },
    ],
  },
};

const planGrid = document.querySelector("#planGrid");
const productGrid = document.querySelector("#productGrid");
const productModal = document.querySelector("#productModal");
const modalContent = document.querySelector("#modalContent");
const seasonalTrack = document.querySelector("#seasonalTrack");
const seasonalDots = document.querySelector("#seasonalDots");
const seasonalPrev = document.querySelector(".seasonal-prev");
const seasonalNext = document.querySelector(".seasonal-next");
const seasonalMobileGrid = document.querySelector("#seasonalMobileGrid");
const themeAccordion = document.querySelector("#themeAccordion");
const mobileThemeQuery = window.matchMedia("(max-width: 640px)");
let seasonalIndex = 0;
let activeTheme = "";
const externalLinkRel = "noopener noreferrer";

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => escapeMap[char]);
}

function whatsAppLink(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function productMedia(product, variant = "card") {
  if (product.image) {
    const loadingAttrs = variant === "modal" ? "" : ' loading="lazy" decoding="async"';
    return `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"${loadingAttrs} />`;
  }

  const className = variant === "modal" ? "modal-placeholder" : "product-placeholder";
  return `<div class="${className}"><span>${escapeHtml(product.placeholder)}</span></div>`;
}

function priceRows(prices) {
  return prices
    .map((price) => `<tr><td>${escapeHtml(price[0])}</td><td>${escapeHtml(price[1])}</td><td>${escapeHtml(price[2] || "")}</td></tr>`)
    .join("");
}

function miniPriceItems(prices) {
  return prices
    .slice(0, 3)
    .map((price) => `<li><span>${escapeHtml(price[0])}</span><strong>${escapeHtml(price[1])}</strong></li>`)
    .join("");
}

function openModal(html) {
  modalContent.innerHTML = html;
  productModal.showModal();
  document.body.classList.add("modal-open");
}

function renderThemePhoto(photo) {
  if (photo.type === "image") {
    return `
      <article class="theme-photo filled">
        <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy" decoding="async" />
        <span>${escapeHtml(photo.label)}</span>
      </article>
    `;
  }

  return `<article class="theme-photo placeholder"><span>${escapeHtml(photo.label)}</span></article>`;
}

function themePanelMarkup(theme) {
  return `
    <article class="theme-panel">
      <div class="theme-copy">
        <p class="label">${escapeHtml(theme.label)}</p>
        <h2>${escapeHtml(theme.title)}</h2>
        <p>${escapeHtml(theme.description)}</p>
      </div>
      <div class="theme-gallery">
        ${theme.photos.map(renderThemePhoto).join("")}
      </div>
    </article>
  `;
}

function renderPlans(size = "P") {
  planGrid.innerHTML = planData[size]
    .map(
      (plan) => `
        <article class="plan-card">
          <h3>${escapeHtml(plan.name)}</h3>
          <ul>${plan.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <a class="price-badge" href="${whatsAppLink(`OlÃ¡, quero saber mais sobre o plano ${plan.name} tamanho ${size}`)}" target="_blank" rel="${externalLinkRel}">${escapeHtml(plan.price)}</a>
        </article>
      `,
    )
    .join("");
}

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product, index) => `
        <article class="product-card ${product.theme === "rose" ? "rose-card" : ""}" data-index="${index}" tabindex="0" role="button" aria-label="Ver ${escapeHtml(product.name)}">
          ${productMedia(product)}
          <div class="product-card-body">
            <h3>${escapeHtml(product.name)}</h3>
            <ul class="mini-prices">
              ${miniPriceItems(product.prices)}
            </ul>
            <span class="pill light">Ver opÃ§Ãµes</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSeasonalItems() {
  if (!seasonalTrack || !seasonalDots) return;

  seasonalTrack.innerHTML = seasonalItems
    .map(
      (item, index) => `
        <article class="seasonal-slide">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async" />
          <div class="seasonal-slide-copy">
            <p class="label">${escapeHtml(item.eyebrow)}</p>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <strong>${escapeHtml(item.price)}</strong>
            <button class="pill rose" type="button" data-seasonal-index="${index}">Ver detalhes</button>
          </div>
        </article>
      `,
    )
    .join("");

  seasonalDots.innerHTML = seasonalItems
    .map((item, index) => `<button type="button" aria-label="Ver ${escapeHtml(item.name)}" data-seasonal-dot="${index}"></button>`)
    .join("");

  if (seasonalMobileGrid) {
    seasonalMobileGrid.innerHTML = seasonalItems
      .map(
        (item, index) => `
          <article class="seasonal-card" data-seasonal-index="${index}" tabindex="0" role="button" aria-label="Ver ${escapeHtml(item.name)}">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async" />
            <div>
              <p class="label">${escapeHtml(item.eyebrow)}</p>
              <h3>${escapeHtml(item.name)}</h3>
              <strong>${escapeHtml(item.price)}</strong>
            </div>
          </article>
        `,
      )
      .join("");
  }

  setSeasonalSlide(0);
}

function setThemeMoment(themeId) {
  if (!themeAccordion) return;

  const theme = themeMoments[themeId];
  if (mobileThemeQuery.matches) {
    const button = document.querySelector(`[data-theme-trigger="${themeId}"]`);
    const panel = document.querySelector(`[data-theme-panel="${themeId}"]`);
    if (!theme || !button || !panel) return;

    const isOpen = panel.classList.toggle("open");
    button.classList.toggle("active", isOpen);
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    panel.innerHTML = isOpen ? themePanelMarkup(theme) : "";
    return;
  }

  const isClosing = activeTheme === themeId;
  activeTheme = isClosing ? "" : themeId;

  document.querySelectorAll("[data-theme-trigger]").forEach((button) => {
    const isActive = button.dataset.themeTrigger === activeTheme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-expanded", isActive ? "true" : "false");
  });

  if (!activeTheme || !theme) {
    themeAccordion.innerHTML = "";
    themeAccordion.classList.remove("open");
    return;
  }

  themeAccordion.classList.add("open");
  themeAccordion.innerHTML = themePanelMarkup(theme);
}

function resetThemeMoments() {
  activeTheme = "";
  themeAccordion.innerHTML = "";
  themeAccordion.classList.remove("open");
  document.querySelectorAll("[data-theme-trigger]").forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll("[data-theme-panel]").forEach((panel) => {
    panel.innerHTML = "";
    panel.classList.remove("open");
  });
}

function setSeasonalSlide(index) {
  if (!seasonalTrack || !seasonalDots) return;

  seasonalIndex = (index + seasonalItems.length) % seasonalItems.length;
  seasonalTrack.style.transform = `translateX(-${seasonalIndex * 100}%)`;
  seasonalDots.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === seasonalIndex);
    dot.setAttribute("aria-current", dotIndex === seasonalIndex ? "true" : "false");
  });
}

function openProduct(index) {
  const product = products[index];
  openModal(`
    <div class="modal-layout">
      ${productMedia(product, "modal")}
      <div class="modal-copy">
        <p class="label">Donna Flor</p>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description)}</p>
        <table>
          <tbody>
            ${priceRows(product.prices)}
          </tbody>
        </table>
        <a class="pill rose" href="${whatsAppLink(`OlÃ¡, quero fazer um pedido de ${product.name}`)}" target="_blank" rel="${externalLinkRel}">Pedir pelo WhatsApp</a>
      </div>
    </div>
  `);
}

function openSeasonalProduct(index) {
  const product = seasonalItems[index];
  openModal(`
    <div class="modal-layout seasonal-modal">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
      <div class="modal-copy">
        <p class="label">Especial Dia das MÃ£es</p>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description)}</p>
        <table>
          <tbody>
            ${priceRows(product.prices)}
          </tbody>
        </table>
        <a class="pill rose" href="${whatsAppLink(`OlÃ¡, quero reservar ${product.name} da coleÃ§Ã£o Dia das MÃ£es`)}" target="_blank" rel="${externalLinkRel}">Reservar pelo WhatsApp</a>
      </div>
    </div>
  `);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".size-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".size-switch button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPlans(button.dataset.size);
  });
});

document.querySelectorAll("[data-theme-trigger]").forEach((button) => {
  button.setAttribute("aria-controls", "themeAccordion");
  button.setAttribute("aria-expanded", "false");
  button.addEventListener("click", () => setThemeMoment(button.dataset.themeTrigger));
});

mobileThemeQuery.addEventListener("change", resetThemeMoments);

productGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (!card) return;
  openProduct(Number(card.dataset.index));
});

productGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".product-card");
  if (!card) return;
  event.preventDefault();
  openProduct(Number(card.dataset.index));
});

seasonalPrev?.addEventListener("click", () => setSeasonalSlide(seasonalIndex - 1));
seasonalNext?.addEventListener("click", () => setSeasonalSlide(seasonalIndex + 1));

seasonalDots?.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-seasonal-dot]");
  if (!dot) return;
  setSeasonalSlide(Number(dot.dataset.seasonalDot));
});

seasonalTrack?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-seasonal-index]");
  if (!button) return;
  openSeasonalProduct(Number(button.dataset.seasonalIndex));
});

seasonalMobileGrid?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-seasonal-index]");
  if (!card) return;
  openSeasonalProduct(Number(card.dataset.seasonalIndex));
});

seasonalMobileGrid?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-seasonal-index]");
  if (!card) return;
  event.preventDefault();
  openSeasonalProduct(Number(card.dataset.seasonalIndex));
});

document.querySelector(".modal-close").addEventListener("click", () => productModal.close());
productModal.addEventListener("close", () => document.body.classList.remove("modal-open"));

renderPlans();
renderProducts();
renderSeasonalItems();

