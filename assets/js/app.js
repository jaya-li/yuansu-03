(function () {
  var INTERESTS = [
    { key: "ciencias-educacion", label: "Ciencias y educación", image: "./image/Ciencias y educación.png" },
    { key: "deportes", label: "Deportes", image: "./image/Deportes.png" },
    { key: "fitness-salud", label: "Fitness y salud", image: "./image/Fitness y salud.png" },
    { key: "musica", label: "Música", image: "./image/Música.png" },
    {
      key: "comedia",
      label: "Comedia",
      image: "./image/Comedia.png"
    },
    { key: "comida-bebida", label: "Comida y bebida", image: "./image/Comida y bebida.png" },
    { key: "automocion-vehiculos", label: "Automoción y vehículos", image: "./image/Automoción y vehículos.png" },
    { key: "diy", label: "DIY", image: "./image/DIY.png" },
    { key: "animales", label: "Animales", image: "./image/Animales.png" },
    { key: "belleza-estilo", label: "Belleza y estilo", image: "./image/Belleza y estilo.png" },
    { key: "viajes", label: "Viajes", image: "./image/Viajes.png" },
    { key: "motivacion-consejos", label: "Motivación y consejos", image: "./image/Motivación y consejos.png" },
    { key: "juegos", label: "Juegos", image: "./image/Juegos.png" },
    { key: "entretenimiento", label: "Entretenimiento", image: "./image/Entretenimiento.png" },
    { key: "arte", label: "Arte", image: "./image/Arte.png" },
    { key: "trucos-vida-cotidiana", label: "Trucos para la vida cotidiana", image: "./image/Trucos para la vida cotidiana.png" },
    { key: "actividades-aire-libre", label: "Actividades al aire libre", image: "./image/Actividades al aire libre.png" },
    { key: "hogar-jardin", label: "Hogar y jardín", image: "./image/Hogar y jardín.png" },
    { key: "vida-cotidiana", label: "Vida cotidiana", image: "./image/Vida cotidiana.png" },
    { key: "familia", label: "Familia", image: "./image/Familia.png" },
    { key: "animes-comics", label: "Animes y cómics", image: "./image/Animes y cómics.png" },
    { key: "extranamente-satisfactorio", label: "Extrañamente satisfactorio", image: "./image/Extrañamente satisfactorio.png" },
    { key: "baile", label: "Baile", image: "./image/Baile.png" }
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
    btnNext.textContent = "Siguiente (" + n + ")";
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
