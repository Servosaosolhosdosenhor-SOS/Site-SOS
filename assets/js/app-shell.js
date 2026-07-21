// Ajustes globais de navegação e identidade institucional.
(() => {
  if (!document.querySelector("#sos-site-updates")) {
    const style = document.createElement("style");
    style.id = "sos-site-updates";
    style.textContent = "\n/* Atualizações institucionais e biblioteca litúrgica — julho de 2026 */\n\n:root{\n  --lit-verde:#2f7d4a;\n  --lit-roxo:#6f4a8e;\n  --lit-vermelho:#a8323e;\n  --lit-dourado:#b08a24;\n  --lit-azul:#1e386b;\n}\n\n/* Cabeçalho: somente a identidade paroquial, com leitura melhor. */\n.church-identities.parish-only,\n.church-identities{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  min-width:74px;\n  margin-left:auto;\n  padding:4px 8px;\n  background:rgba(255,255,255,.96);\n  border:1px solid rgba(30,56,107,.12);\n  border-radius:16px;\n  box-shadow:0 8px 22px rgba(8,24,53,.10);\n}\n.church-identities .archdiocese-header-logo{display:none!important}\n.church-identities .parish-header-logo,\n.parish-header-logo{\n  width:64px!important;\n  height:64px!important;\n  object-fit:contain;\n  transform:none!important;\n}\n@media (max-width:760px){\n  .church-identities.parish-only,\n  .church-identities{min-width:58px;padding:3px 6px;border-radius:13px}\n  .church-identities .parish-header-logo,\n  .parish-header-logo{width:52px!important;height:52px!important}\n}\n@media (max-width:430px){\n  .app-brand span small{display:none}\n  .church-identities .parish-header-logo,\n  .parish-header-logo{width:46px!important;height:46px!important}\n}\n\n/* Texto e blocos institucionais. */\n.history-lead{\n  font-size:1.08rem;\n  line-height:1.8;\n  color:#34415b;\n}\n.identity-cards{margin-top:24px}\n.identity-card{\n  position:relative;\n  overflow:hidden;\n}\n.identity-card::after{\n  content:\"\";\n  position:absolute;\n  right:-22px;\n  bottom:-34px;\n  width:90px;\n  height:90px;\n  border-radius:50%;\n  background:rgba(242,223,57,.18);\n}\n.church-communion{\n  margin-top:34px;\n  display:grid;\n  grid-template-columns:120px 1fr;\n  gap:26px;\n  align-items:center;\n  padding:28px;\n  border:1px solid rgba(30,56,107,.12);\n  border-radius:22px;\n  background:linear-gradient(135deg,#fff,#f3f6fc);\n}\n.church-communion img{\n  width:105px;\n  max-height:130px;\n  object-fit:contain;\n  margin:auto;\n}\n.church-communion h3{margin-top:0}\n@media(max-width:620px){\n  .church-communion{grid-template-columns:1fr;text-align:center}\n}\n\n/* Cursos fechados, mas prontos para liberação. */\n.course-status{\n  display:inline-flex;\n  align-items:center;\n  gap:7px;\n  padding:6px 11px;\n  border-radius:999px;\n  background:#fff5c9;\n  color:#5e4c00;\n  font-size:.75rem;\n  font-weight:900;\n  text-transform:uppercase;\n  letter-spacing:.06em;\n}\n.course-status::before{content:\"●\";font-size:.55rem}\n.coming-soon-panel{\n  max-width:780px;\n  margin:0 auto;\n  text-align:center;\n  padding:52px 28px;\n  border-radius:28px;\n  border:1px solid rgba(30,56,107,.13);\n  background:\n    radial-gradient(circle at 50% 0,rgba(242,223,57,.25),transparent 35%),\n    linear-gradient(145deg,#fff,#f2f5fb);\n  box-shadow:0 24px 70px rgba(12,35,75,.12);\n}\n.coming-soon-panel .coming-icon{\n  width:82px;height:82px;display:grid;place-items:center;\n  margin:0 auto 18px;border-radius:24px;\n  background:var(--azul);color:var(--amarelo);font-size:2.2rem;\n}\n.coming-soon-panel h2{margin:0 0 10px;color:var(--azul-escuro)}\n.coming-soon-panel p{max-width:590px;margin:0 auto 24px;color:var(--muted)}\n.course-app-card .course-status{margin-top:auto;align-self:flex-start}\n.course-app-card.is-coming{cursor:default}\n\n/* Biblioteca das folhas. */\n.sheets-toolbar{\n  display:grid;\n  grid-template-columns:minmax(0,1fr) auto;\n  gap:12px;\n  margin-bottom:26px;\n}\n.sheets-toolbar input{\n  min-height:50px;\n  padding:0 16px;\n  border:1px solid var(--linha);\n  border-radius:14px;\n  background:#fff;\n  font:inherit;\n}\n.sheet-jump{\n  display:flex;\n  gap:8px;\n  flex-wrap:wrap;\n}\n.sheet-jump button{\n  border:0;border-radius:999px;padding:10px 14px;\n  background:#edf1f8;color:var(--azul);font-weight:850;cursor:pointer;\n}\n.sheet-jump button.active{background:var(--azul);color:#fff}\n.liturgical-library{display:grid;gap:28px}\n.liturgical-group{\n  --season-color:var(--lit-azul);\n  border:1px solid rgba(23,43,82,.11);\n  border-radius:24px;\n  overflow:hidden;\n  background:#fff;\n  box-shadow:0 16px 40px rgba(13,36,76,.08);\n}\n.liturgical-group[data-season=\"tempo-comum\"]{--season-color:var(--lit-verde)}\n.liturgical-group[data-season=\"advento\"],\n.liturgical-group[data-season=\"quaresma\"]{--season-color:var(--lit-roxo)}\n.liturgical-group[data-season=\"natal\"],\n.liturgical-group[data-season=\"tempo-pascal\"]{--season-color:var(--lit-dourado)}\n.liturgical-group[data-season=\"solenidades\"]{--season-color:var(--lit-vermelho)}\n.liturgical-group-header{\n  display:flex;gap:16px;align-items:center;\n  padding:21px 23px;\n  border-left:8px solid var(--season-color);\n  background:linear-gradient(90deg,color-mix(in srgb,var(--season-color) 12%,white),#fff);\n}\n.liturgical-dot{\n  width:18px;height:18px;border-radius:50%;\n  background:var(--season-color);\n  box-shadow:0 0 0 6px color-mix(in srgb,var(--season-color) 16%,transparent);\n}\n.liturgical-group-header h2{margin:0;color:var(--azul-escuro);font-size:1.3rem}\n.liturgical-group-header p{margin:3px 0 0;color:var(--muted);font-size:.9rem}\n.sheet-grid{\n  display:grid;\n  grid-template-columns:repeat(2,minmax(0,1fr));\n  gap:14px;\n  padding:18px;\n}\n.sheet-card{\n  display:flex;\n  flex-direction:column;\n  min-width:0;\n  padding:18px;\n  border:1px solid #e4e9f2;\n  border-top:4px solid var(--season-color);\n  border-radius:17px;\n  background:#fff;\n}\n.sheet-card h3{margin:0 0 7px;color:var(--azul-escuro)}\n.sheet-card p{margin:0 0 16px;color:var(--muted);font-size:.9rem}\n.sheet-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto}\n.sheet-actions button,\n.sheet-actions a{\n  display:inline-flex;align-items:center;justify-content:center;\n  min-height:40px;padding:0 13px;border-radius:10px;\n  border:0;text-decoration:none;font-weight:850;font-size:.84rem;cursor:pointer;\n}\n.sheet-actions .open-pdf{background:var(--azul);color:#fff}\n.sheet-actions .open-playlist{background:#f2df39;color:#18284a}\n.sheet-actions .disabled{background:#eef1f6;color:#7a8497;cursor:not-allowed}\n.sheet-empty{\n  grid-column:1/-1;\n  padding:25px;text-align:center;color:var(--muted);\n  border:1px dashed #cbd3e2;border-radius:16px;background:#f8f9fc;\n}\n.pdf-loading{\n  position:fixed;inset:0;z-index:9999;display:grid;place-items:center;\n  background:rgba(8,20,46,.82);color:#fff;text-align:center;padding:24px;\n}\n.pdf-loading div{background:#122b58;padding:25px;border-radius:20px;max-width:360px}\n.pdf-loading strong{display:block;font-size:1.05rem;margin-bottom:8px}\n@media(max-width:760px){\n  .sheets-toolbar{grid-template-columns:1fr}\n  .sheet-grid{grid-template-columns:1fr;padding:13px}\n  .liturgical-group-header{padding:18px 16px}\n}\n\n/* Sites e aplicativos. */\n.resources-intro{\n  max-width:760px;\n  margin:0 0 30px;\n}\n.external-resource-grid{\n  display:grid;\n  grid-template-columns:repeat(2,minmax(0,1fr));\n  gap:18px;\n}\n.external-resource{\n  padding:24px;\n  border:1px solid rgba(30,56,107,.12);\n  border-radius:22px;\n  background:linear-gradient(145deg,#fff,#f3f6fc);\n}\n.external-resource .resource-mark{\n  width:58px;height:58px;display:grid;place-items:center;\n  margin-bottom:16px;border-radius:17px;background:var(--azul);color:var(--amarelo);\n  font-weight:950;font-size:1.15rem;\n}\n.external-resource h3{margin:0 0 7px;color:var(--azul-escuro)}\n.external-resource p{color:var(--muted)}\n.external-resource a{margin-top:8px}\n.resource-note{\n  margin-top:24px;\n  padding:18px 20px;border-radius:16px;\n  background:#fff9dc;border:1px solid #f0dfa0;color:#5a4b0a;\n}\n@media(max-width:680px){.external-resource-grid{grid-template-columns:1fr}}\n\n/* Header menu ganha um item extra sem ficar espremido. */\n@media(min-width:981px){\n  .app-navbar .nav-links{gap:3px}\n  .app-navbar .nav-links a{padding-inline:9px;font-size:.82rem}\n}\n";
    document.head.appendChild(style);
  }

  // Correção visual da logo paroquial: recorte real, maior e sem caixa branca.
  const parishLogoStyle = document.createElement("style");
  parishLogoStyle.id = "sos-parish-logo-fix";
  parishLogoStyle.textContent = `
    .church-identities.parish-only,
    .church-identities{
      display:flex!important;
      align-items:center!important;
      justify-content:center!important;
      width:auto!important;
      min-width:92px!important;
      margin-left:auto!important;
      padding:0!important;
      background:transparent!important;
      border:0!important;
      border-radius:0!important;
      box-shadow:none!important;
    }
    .church-identities .archdiocese-header-logo{display:none!important}
    .church-identities .parish-header-logo,
    .parish-header-logo{
      width:auto!important;
      height:86px!important;
      max-width:112px!important;
      object-fit:contain!important;
      filter:drop-shadow(0 3px 7px rgba(0,0,0,.22));
      transform:none!important;
    }
    @media (max-width:760px){
      .app-navbar{min-height:86px!important}
      .church-identities.parish-only,
      .church-identities{min-width:74px!important}
      .church-identities .parish-header-logo,
      .parish-header-logo{height:70px!important;max-width:90px!important}
    }
    @media (max-width:430px){
      .app-brand span small{display:none}
      .church-identities.parish-only,
      .church-identities{min-width:64px!important}
      .church-identities .parish-header-logo,
      .parish-header-logo{height:62px!important;max-width:78px!important}
    }
  `;
  document.head.appendChild(parishLogoStyle);

  document.addEventListener("DOMContentLoaded", () => {
    // Cabeçalho: somente a logo da Paróquia, em destaque.
    document.querySelectorAll(".church-identities").forEach((box) => {
      box.classList.add("parish-only");
      box.setAttribute("aria-label", "Paróquia Nossa Senhora da Conceição Aparecida");
      box.innerHTML = '<img alt="Logo da Paróquia Nossa Senhora da Conceição Aparecida" class="church-identity-logo parish-header-logo" src="assets/img/logo-paroquia.png">';
    });

    // Garante o item Recursos nos menus antigos.
    document.querySelectorAll(".nav-links").forEach((nav) => {
      if (!nav.querySelector('a[href="recursos.html"]')) {
        const contact = nav.querySelector('a[href="contato.html"]')?.closest("li");
        const item = document.createElement("li");
        const active = (location.pathname.split("/").pop() || "index.html") === "recursos.html";
        item.innerHTML = `<a class="${active ? "active" : ""}" href="recursos.html">Recursos</a>`;
        if (contact) nav.insertBefore(item, contact);
        else nav.appendChild(item);
      }
    });

    // Atualiza textos antigos que falavam somente em jovens.
    document.querySelectorAll(".footer-identity p").forEach((node) => {
      node.textContent = "Formação musical, litúrgica e espiritual para pessoas que desejam servir com fé, responsabilidade e alegria.";
    });

    const page = location.pathname.split("/").pop() || "index.html";

    const bottomItems = [
      { href: "index.html", label: "Início", icon: "⌂", active: page === "index.html" || page === "" },
      { href: "formacao-musical.html", label: "Aulas", icon: "♫", active: ["formacao-musical.html","curso-violao.html","curso-canto.html","curso-teclado.html","aula.html"].includes(page) },
      { href: "formacao-liturgica.html", label: "Liturgia", icon: "IHS", active: ["formacao-liturgica.html","tempos-liturgicos.html"].includes(page) },
      { href: "folhas-missa.html", label: "Folhas", icon: "▤", active: page === "folhas-missa.html" },
    ];

    const bottom = document.createElement("nav");
    bottom.className = "mobile-bottom-nav";
    bottom.setAttribute("aria-label", "Navegação rápida");
    bottom.innerHTML = bottomItems.map(item => `
      <a href="${item.href}" class="${item.active ? "active" : ""}">
        <span class="bottom-icon">${item.icon}</span>
        <span>${item.label}</span>
      </a>
    `).join("") + `
      <button type="button" class="bottom-menu-button">
        <span class="bottom-icon">☰</span>
        <span>Menu</span>
      </button>
    `;
    document.body.appendChild(bottom);

    bottom.querySelector(".bottom-menu-button")?.addEventListener("click", () => {
      document.querySelector(".nav-toggle")?.click();
    });

    const verses = [
      ["“Servi ao Senhor com alegria.”", "Salmo 100,2"],
      ["“Cantai ao Senhor um cântico novo.”", "Salmo 96,1"],
      ["“Tudo o que fizerdes, fazei para a glória de Deus.”", "1Coríntios 10,31"],
      ["“Eis-me aqui, envia-me.”", "Isaías 6,8"],
      ["“Permanecei em mim e eu permanecerei em vós.”", "João 15,4"]
    ];
    const verseNode = document.querySelector("#dailyVerse");
    const refNode = document.querySelector("#dailyVerseRef");
    if (verseNode && refNode) {
      const dayIndex = Math.floor(Date.now() / 86400000) % verses.length;
      verseNode.textContent = verses[dayIndex][0];
      refNode.textContent = verses[dayIndex][1];
    }
  });
})();
