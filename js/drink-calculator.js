// Simple party drink calculator.
// Consumption assumption: ~0.7 standard drinks per person per hour (moderate pace).
// Bottle conversions: wine 750ml ≈ 5 glasses (150ml), beer bottle ≈ 1 drink (330ml),
// spirits bottle 700ml ≈ 14 shots (50ml). These are common hospitality rules of thumb,
// not client-specific data — used only to size a rough estimate.
document.addEventListener("DOMContentLoaded", () => {
  const guestsEl = document.getElementById("calcGuests");
  const hoursEl = document.getElementById("calcHours");
  const wineSlider = document.getElementById("calcWine");
  const beerSlider = document.getElementById("calcBeer");
  const spiritSlider = document.getElementById("calcSpirit");
  if (!guestsEl || !hoursEl || !wineSlider) return;

  const wineVal = document.getElementById("calcWineVal");
  const beerVal = document.getElementById("calcBeerVal");
  const spiritVal = document.getElementById("calcSpiritVal");
  const outWine = document.getElementById("calcOutWine");
  const outBeer = document.getElementById("calcOutBeer");
  const outSpirit = document.getElementById("calcOutSpirit");
  const orderBtn = document.getElementById("calcOrderBtn");

  const sliders = [wineSlider, beerSlider, spiritSlider];

  function rebalance(changed) {
    const others = sliders.filter((s) => s !== changed);
    const changedVal = Number(changed.value);
    const remaining = 100 - changedVal;
    const othersSum = others.reduce((a, s) => a + Number(s.value), 0) || 1;
    others.forEach((s) => {
      const ratio = Number(s.value) / othersSum;
      s.value = Math.round(remaining * ratio);
    });
    // fix rounding drift on the last slider
    const total = sliders.reduce((a, s) => a + Number(s.value), 0);
    if (total !== 100) {
      others[others.length - 1].value = Number(others[others.length - 1].value) + (100 - total);
    }
  }

  function update() {
    wineVal.textContent = wineSlider.value + "%";
    beerVal.textContent = beerSlider.value + "%";
    spiritVal.textContent = spiritSlider.value + "%";
    calculate();
  }

  sliders.forEach((s) =>
    s.addEventListener("input", () => {
      rebalance(s);
      update();
    })
  );

  function calculate() {
    const guests = Math.max(0, Number(guestsEl.value) || 0);
    const hours = Math.max(0, Number(hoursEl.value) || 0);
    const totalDrinks = guests * hours * 0.7;

    const wineDrinks = totalDrinks * (Number(wineSlider.value) / 100);
    const beerDrinks = totalDrinks * (Number(beerSlider.value) / 100);
    const spiritDrinks = totalDrinks * (Number(spiritSlider.value) / 100);

    const bottlesWine = Math.ceil(wineDrinks / 5);
    const bottlesBeer = Math.ceil(beerDrinks / 1);
    const bottlesSpirit = Math.ceil(spiritDrinks / 14);

    outWine.textContent = bottlesWine;
    outBeer.textContent = bottlesBeer;
    outSpirit.textContent = bottlesSpirit;

    if (orderBtn) {
      const msg = `Bună, organizez un eveniment pentru ${guests} persoane, ${hours} ore. Aș avea nevoie de aproximativ ${bottlesWine} sticle de vin, ${bottlesBeer} sticle de bere și ${bottlesSpirit} sticle de spirtoase. Puteți să-mi trimiteți o ofertă?`;
      orderBtn.href = "https://wa.me/40751778967?text=" + encodeURIComponent(msg);
    }
  }

  guestsEl.addEventListener("input", calculate);
  hoursEl.addEventListener("input", calculate);
  update();
});
