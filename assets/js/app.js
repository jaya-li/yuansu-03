(function () {
  var INTERESTS = [
    {
      key: "comicita",
      label: "Comicità",
      image: "./image/Comicita.png",
      imageFallbacks: ["./image/Comicità.png", "./image/Comicità.png"]
    },
    { key: "sport", label: "Sport", image: "./image/Sport.png" },
    { key: "cibo-bevande", label: "Cibo e Bevande", image: "./image/Cibo e Bevande.png" },
    { key: "intrattenimento-cultura", label: "Intrattenimento e Cultura", image: "./image/Intrattenimento e Cultura.png" },
    { key: "ballo", label: "Ballo", image: "./image/Ballo.png" },
    { key: "vita-quotidiana", label: "Vita Quotidiana", image: "./image/Vita Quotidiana.png" },
    { key: "musica", label: "Musica", image: "./image/Musica.png" },
    { key: "gioco", label: "Gioco", image: "./image/Gioco.png" },
    { key: "famiglia", label: "Famiglia", image: "./image/Famiglia.png" },
    { key: "scienza-educazione", label: "Scienza e Educazione", image: "./image/Scienza e Educazione.png" },
    { key: "fitness-salute", label: "Fitness e Salute", image: "./image/Fitness e Salute.png" },
    { key: "arte", label: "Arte", image: "./image/Arte.png" },
    { key: "bellezza-stile", label: "Bellezza e Stile", image: "./image/Bellezza e Stile.png" },
    { key: "casa-giardino", label: "Casa e Giardino", image: "./image/Casa e Giardino.png" },
    { key: "grottesco", label: "Grottesco", image: "./image/Grottesco.png" },
    { key: "viaggi", label: "Viaggi", image: "./image/Viaggi.png" },
    { key: "aria-aperta", label: "Aria aperta", image: "./image/Aria aperta.png" },
    { key: "trucchi-consigli", label: "Trucchi e consigli utili", image: "./image/Trucchi e consigli utili.png" },
    { key: "motivazione-consigli", label: "Motivazione e Consigli", image: "./image/Motivazione e Consigli.png" },
    { key: "fai-da-te", label: "Fai da Te", image: "./image/Fai da Te.png" },
    { key: "animali", label: "Animali", image: "./image/Animali.png" },
    { key: "anime-fumetti", label: "Anime e Fumetti", image: "./image/Anime e Fumetti.png" }
  ];

  var grid = document.getElementById("interestGrid");
  var btnNext = document.getElementById("btnNext");
  var btnSkip = document.getElementById("btnSkip");

  INTERESTS.forEach(function (item) {
    var card = window.createInterestCard(item);
    grid.appendChild(card);
  });

  var cards = Array.prototype.slice.call(document.querySelectorAll(".p1455__card"));

  function countSelected() {
    return cards.filter(function (c) {
      return c.classList.contains("is-selected");
    }).length;
  }

  function sync() {
    var n = countSelected();
    btnNext.textContent = "Avanti (" + n + ")";
    btnNext.disabled = n === 0;
    btnSkip.disabled = n > 0;
    if (btnSkip.disabled) {
      btnSkip.setAttribute("aria-disabled", "true");
    } else {
      btnSkip.removeAttribute("aria-disabled");
    }

    cards.forEach(function (card) {
      card.setAttribute("aria-pressed", card.classList.contains("is-selected") ? "true" : "false");
    });
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("is-selected");
      sync();
    });
  });

  var step3Url = new URL("./figma-onboarding-1647-533575.html", window.location.href).href;

  function goFlowStep(step, fallbackUrl) {
    if (window.parent !== window) {
      try {
        window.parent.postMessage({ type: "onboarding-flow", step: step }, "*");
        return;
      } catch (e) {
        // Ignore cross-domain parent access issues and fallback.
      }
    }
    window.location.href = fallbackUrl;
  }

  btnSkip.addEventListener("click", function () {
    if (btnSkip.disabled) return;
    goFlowStep(3, step3Url);
  });

  btnNext.addEventListener("click", function () {
    if (btnNext.disabled) return;
    goFlowStep(3, step3Url);
  });

  sync();
})();
