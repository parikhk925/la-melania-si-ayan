// Allergens are inferred from each item's actual stated ingredients/name —
// not invented. Precise nutritional values (kcal, macros) are intentionally
// NOT fabricated; see the disclaimer rendered under the menu instead.
function inferAllergens(item) {
  const text = `${item.n} ${item.d || ""}`.toLowerCase();
  const tags = new Set();

  const has = (...words) => words.some((w) => text.includes(w));

  if (
    has(
      "lapte",
      "cappuccino",
      "latte",
      "macchiat",
      "cioco",
      "ciocolat",
      "frappe",
      "ice coffee",
      "irish cappuccino"
    )
  )
    tags.add("Lapte");

  if (has("oreo", "sărățele", "saratele", "cașcaval", "cascaval")) {
    tags.add("Gluten");
    tags.add("Soia");
  }

  if (has("fistic", "arahide")) tags.add("Fructe cu coajă / Arahide");

  if (has("vin ", "vinul", "pétillant", "petiant")) tags.add("Sulfiți");

  if (has("bere", "birra", "cidru")) tags.add("Gluten");

  if (has("popping boba", "smoothie")) tags.add("Poate conține urme de fructe");

  if (has("miere")) tags.add("Poate conține urme de polen");

  return Array.from(tags);
}

function renderMenuGroup(group, filterText) {
  const q = (filterText || "").trim().toLowerCase();
  let html = `<div class="menu-group-head">
    <span class="menu-group-icon">${group.icon}</span>
    <h2>${group.label}</h2>
    ${group.sub ? `<p class="menu-group-sub">${group.sub}</p>` : ""}
  </div>`;
  let anyItems = false;

  group.subcats.forEach((sub) => {
    const items = sub.items.filter(
      (it) => !q || it.n.toLowerCase().includes(q) || (it.d && it.d.toLowerCase().includes(q))
    );
    if (!items.length) return;
    anyItems = true;
    html += `<div class="menu-subcat">
      <h3>${sub.name}</h3>
      ${sub.note ? `<p class="menu-subnote">${sub.note}</p>` : ""}
      <div class="menu-items">
        ${items
          .map((it) => {
            const allergens = inferAllergens(it);
            return `
          <div class="menu-item">
            <div class="menu-item-main">
              <span class="menu-item-name">${it.n}</span>
              ${it.d ? `<span class="menu-item-desc">${it.d}</span>` : ""}
              ${allergens.length ? `<span class="menu-item-allergens">Conține: ${allergens.join(", ")}</span>` : ""}
            </div>
          </div>`;
          })
          .join("")}
      </div>
    </div>`;
  });

  return anyItems ? html : "";
}

function initMenuUI({ tabsEl, panelEl, searchEl }) {
  if (!tabsEl || !panelEl || tabsEl.dataset.initialized) return;
  tabsEl.dataset.initialized = "true";

  function render(activeId, filterText) {
    let html = "";
    MENU_GROUPS.forEach((group) => {
      if (activeId !== "toate" && group.id !== activeId) return;
      html += renderMenuGroup(group, filterText);
    });
    panelEl.innerHTML =
      html || `<p style="padding:40px 0;color:var(--ink-soft);">Niciun produs găsit. Încearcă alt termen de căutare.</p>`;
  }

  const allTab = document.createElement("button");
  allTab.className = "pill-tab is-active";
  allTab.textContent = "Tot Meniul";
  allTab.dataset.id = "toate";
  tabsEl.appendChild(allTab);

  MENU_GROUPS.forEach((group) => {
    const btn = document.createElement("button");
    btn.className = "pill-tab";
    btn.textContent = `${group.icon} ${group.label}`;
    btn.dataset.id = group.id;
    tabsEl.appendChild(btn);
  });

  let activeId = "toate";
  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".pill-tab").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeId = btn.dataset.id;
    render(activeId, searchEl ? searchEl.value : "");
  });

  if (searchEl) {
    searchEl.addEventListener("input", () => render(activeId, searchEl.value));
  }

  render(activeId, "");
}

document.addEventListener("DOMContentLoaded", () => {
  const tabsEl = document.getElementById("menuTabs");
  const panelEl = document.getElementById("menuPanel");
  const searchEl = document.getElementById("menuSearch");
  if (tabsEl && panelEl) initMenuUI({ tabsEl, panelEl, searchEl });
});
