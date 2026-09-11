document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".gallery-item"));
  if (!items.length) return;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Închide">✕</button>
    <button class="lightbox-nav lightbox-prev" aria-label="Anterior">‹</button>
    <img src="" alt="">
    <button class="lightbox-nav lightbox-next" aria-label="Următor">›</button>
  `;
  document.body.appendChild(lb);
  const imgEl = lb.querySelector("img");
  let idx = 0;

  function open(i) {
    idx = (i + items.length) % items.length;
    const img = items[idx].querySelector("img");
    imgEl.src = img.src;
    imgEl.alt = img.alt;
    lb.classList.add("is-open");
  }
  function close() {
    lb.classList.remove("is-open");
  }

  items.forEach((item, i) => item.addEventListener("click", () => open(i)));
  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.querySelector(".lightbox-prev").addEventListener("click", () => open(idx - 1));
  lb.querySelector(".lightbox-next").addEventListener("click", () => open(idx + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") open(idx - 1);
    if (e.key === "ArrowRight") open(idx + 1);
  });
});
