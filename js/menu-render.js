const fmtRON = (p) => (Number.isInteger(p) ? p : p.toFixed(2)).toString().replace(".", ",");

function renderMenuGroup(group, filterText) {
  const q = (filterText || "").trim().toLowerCase();
  let html = `<div class="menu-group-head"><span class="menu-group-icon">${group.icon}</span><h2>${group.label}</h2></div>`;
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
          .map(
            (it) => `
          <div class="menu-item">
            <div class="menu-item-main">
              <span class="menu-item-name">${it.n}</span>
              ${it.d ? `<span class="menu-item-desc">${it.d}</span>` : ""}
            </div>
            <span class="menu-item-dots"></span>
            <span class="menu-item-price">${fmtRON(it.p)} <small>RON</small></span>
          </div>`
          )
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
