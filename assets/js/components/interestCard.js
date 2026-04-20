(function () {
  function makeCheckSvg() {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 12 10");
    svg.setAttribute("fill", "none");

    var path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M1 5l3.5 4L11 1");
    path.setAttribute("stroke", "#ffffff");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    svg.appendChild(path);
    return svg;
  }

  function createInterestCard(item, thumbSrc) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "p1455__card";
    btn.setAttribute("data-interest", item.key);
    btn.setAttribute("aria-pressed", "false");

    var thumb = document.createElement("div");
    thumb.className = "p1455__thumb";
    var img = document.createElement("img");
    img.src = thumbSrc;
    img.alt = "";
    img.draggable = false;
    thumb.appendChild(img);

    var row = document.createElement("div");
    row.className = "p1455__row";
    var label = document.createElement("span");
    label.className = "p1455__label";
    label.textContent = item.label;
    var checkWrap = document.createElement("span");
    checkWrap.className = "p1455__check";
    checkWrap.setAttribute("aria-hidden", "true");
    checkWrap.appendChild(makeCheckSvg());

    row.appendChild(label);
    row.appendChild(checkWrap);
    btn.appendChild(thumb);
    btn.appendChild(row);

    return btn;
  }

  window.createInterestCard = createInterestCard;
})();
