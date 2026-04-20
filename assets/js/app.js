(function () {
  var INTERESTS = [
    { key: "comedy", label: "Comedy" },
    { key: "music", label: "Music" },
    { key: "pets", label: "Pets" },
    { key: "daily", label: "Daily life" },
    { key: "food", label: "Food & Drink" },
    { key: "sports", label: "Sports" },
    { key: "art", label: "Art" },
    { key: "fitness", label: "Fitness & Health" },
    { key: "lifehacks", label: "Life Hacks" },
    { key: "science", label: "Science & Education" },
    { key: "animals", label: "Animals" },
    { key: "gaming", label: "Gaming" },
    { key: "beauty", label: "Beauty & Style" },
    { key: "fashion", label: "Fashion" },
    { key: "tech", label: "Tech" },
    { key: "travel", label: "Travel" },
    { key: "diy", label: "DIY & Home" },
    { key: "auto", label: "Auto & Vehicles" },
    { key: "dance", label: "Dance" },
    { key: "outdoors", label: "Outdoors" },
    { key: "anime", label: "Anime & Comics" },
    { key: "relationships", label: "Relationships" },
    { key: "finance", label: "Finance & Business" },
    { key: "movies", label: "Movies & TV" }
  ];

  var LOCAL_THUMBS = [
    "./nuj-figma-assets/0de7c2d69fff2f43315eb2c31ffdf553e4d7628a.png",
    "./nuj-figma-assets/290ef150dae7f4fc1103a57df3d2ffbc764312bb.png",
    "./nuj-figma-assets/324271ad51479895e9c8952e4b6e0ea64236e56f.png",
    "./nuj-figma-assets/5e2766520918df532d6a856db02c0c5ad421d057.png",
    "./nuj-figma-assets/85c047adf2cfa017c1a71885fddbe6e08dd8f699.png",
    "./nuj-figma-assets/a3e9688238256cc61b3f143aa02e901011735323.png",
    "./nuj-figma-assets/b2227e8210ad6816bd6f072bba325d571e2a5229.png",
    "./nuj-figma-assets/cf6bcf64315b57b83c914c35daf69013d09fcb22.png",
    "./nuj-figma-assets/ec61462893a3f6082b73845663486bed03d3a50b.png",
    "./nuj-figma-assets/ec9af10cb6a1dded0598e164d1dd85f825c40506.png",
    "./nuj-figma-assets/eda1a7331bbf37a070e6538f61b445fec3bbdd29.png"
  ];

  var grid = document.getElementById("interestGrid");
  var btnNext = document.getElementById("btnNext");
  var btnSkip = document.getElementById("btnSkip");

  INTERESTS.forEach(function (item, i) {
    var thumbSrc = LOCAL_THUMBS[i % LOCAL_THUMBS.length];
    var card = window.createInterestCard(item, thumbSrc);
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
    btnNext.textContent = "Next (" + n + ")";
    btnNext.disabled = n === 0;
    btnSkip.disabled = false;
    btnSkip.removeAttribute("aria-disabled");

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
