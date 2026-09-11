// Real menu data sourced from the client's digital menu (menoo.eu).
// Nutritional values (nu) and official allergens (al) come from the client's
// own compiled nutrition document (La_Melania_Ayan_Valori_Nutritionale_Menu_Complet.pdf).
// Values are estimates per the source document — not fabricated by us.
// Items without official data (no `nu`/`al` fields) fall back to inferred allergens.
const MENU_GROUPS = [
  {
    id: "cafea",
    label: "Cafea & Ceai",
    icon: "☕",
    sub: "Preparată cu boabe Piacetto Tradizionale Caffè Crema",
    subcats: [
      {
        name: "Happy Hour 8⁰⁰–12³⁰",
        note: "Combinații espresso + băutură, cu preț redus în intervalul orar Happy Hour.",
        items: [
          { n: "Espresso & Apă Plată/Minerală 500ml", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 19, port: "530 ml", nu: { kcal: 2, prot: 0.1, carb: 0.4, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Espresso & Coca-Cola/Fanta/Sprite Doză", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 21, port: "360 ml", nu: { kcal: 145, prot: 0.1, carb: 36, fat: 0, sat: 0, sugar: 35, salt: 0.0 }, al: [] },
          { n: "Espresso & Hell Energy", d: "Energizantul se servește doar 18+", p: 20, port: "280 ml", nu: { kcal: 117, prot: 0.1, carb: 28, fat: 0, sat: 0, sugar: 27, salt: 0.1 }, al: [] },
          { n: "Espresso & Limonadă Naturală", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 24, port: "430 ml", nu: { kcal: 122, prot: 0.1, carb: 30, fat: 0, sat: 0, sugar: 28, salt: 0.0 }, al: [] },
          { n: "Espresso cu Lapte & Apă Plată/Minerală 500ml", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 20, port: "560 ml", nu: { kcal: 22, prot: 1, carb: 1.8, fat: 1.1, sat: 0.7, sugar: 1.5, salt: 0.0 }, al: ["Lapte"] },
          { n: "Espresso cu Lapte & Coca-Cola/Sprite/Fanta Doză", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 22, port: "390 ml", nu: { kcal: 165, prot: 1, carb: 38, fat: 1.1, sat: 0.7, sugar: 37, salt: 0.1 }, al: ["Lapte"] },
          { n: "Espresso cu Lapte & Hell Energy", d: "Energizantul se servește doar 18+", p: 22, port: "310 ml", nu: { kcal: 137, prot: 1, carb: 30, fat: 1.1, sat: 0.7, sugar: 29, salt: 0.2 }, al: ["Lapte"] },
          { n: "Espresso cu Lapte & Limonadă Naturală", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 25, port: "460 ml", nu: { kcal: 142, prot: 1, carb: 32, fat: 1.1, sat: 0.7, sugar: 30, salt: 0.1 }, al: ["Lapte"] },
        ],
      },
      {
        name: "Cafea & Ceai",
        items: [
          { n: "Espresso Scurt", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 15, port: "30 ml", nu: { kcal: 2, prot: 0.1, carb: 0.4, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Espresso Lung", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 15, port: "60 ml", nu: { kcal: 3, prot: 0.2, carb: 0.5, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Espresso Macchiato", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 15, port: "50 ml", nu: { kcal: 15, prot: 0.7, carb: 1, fat: 0.7, sat: 0.4, sugar: 1, salt: 0.0 }, al: ["Lapte"] },
          { n: "Cafea cu Lapte", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 16, port: "200 ml", nu: { kcal: 95, prot: 4.8, carb: 7.5, fat: 5, sat: 3.2, sugar: 7.2, salt: 0.1 }, al: ["Lapte"] },
          { n: "Latte Macchiato", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 16, port: "250 ml", nu: { kcal: 145, prot: 7.1, carb: 10.8, fat: 7.9, sat: 5, sugar: 10.3, salt: 0.2 }, al: ["Lapte"] },
          { n: "Cappuccino", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 17, port: "180 ml", nu: { kcal: 85, prot: 4, carb: 6.5, fat: 4.3, sat: 2.7, sugar: 6, salt: 0.1 }, al: ["Lapte"] },
          { n: "Cappuccino Vienez", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 17, port: "200 ml", nu: { kcal: 155, prot: 4.1, carb: 8, fat: 11.5, sat: 7.4, sugar: 7.5, salt: 0.1 }, al: ["Lapte"] },
          { n: "Irish Cappuccino", d: "Irish Coffee 🇮🇪", p: 17, port: "200 ml", nu: { kcal: 135, prot: 4, carb: 21, fat: 4.3, sat: 2.7, sugar: 19, salt: 0.1 }, al: ["Lapte"] },
          { n: "Latte Macchiato cu Arome", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 18, port: "270 ml", nu: { kcal: 175, prot: 7.2, carb: 23, fat: 7.9, sat: 5, sugar: 21, salt: 0.2 }, al: ["Lapte"] },
          { n: "Cappuccino cu Arome", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 18, port: "200 ml", nu: { kcal: 145, prot: 4, carb: 24, fat: 4.3, sat: 2.7, sugar: 22, salt: 0.1 }, al: ["Lapte"] },
          { n: "Irish Cappuccino cu Arome", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 18, port: "220 ml", nu: { kcal: 190, prot: 4.1, carb: 35, fat: 4.5, sat: 2.8, sugar: 32, salt: 0.1 }, al: ["Lapte"] },
          { n: "Ceaiuri Fructe", d: "", p: 15, port: "250 ml", nu: { kcal: 2, prot: 0, carb: 0.5, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
        ],
      },
      {
        name: "Specialități Băuturi Reci Cafea",
        items: [
          { n: "Frappe Clasic", d: "Cafea solubilă (Ness)", p: 20, port: "350 ml", nu: { kcal: 250, prot: 6, carb: 35, fat: 9.5, sat: 6, sugar: 32, salt: 0.2 }, al: ["Lapte"] },
          { n: "Frappe Viva Crunch", d: "Cu Viva Pernițe, sortimente diversificate", p: 22, port: "380 ml", nu: { kcal: 395, prot: 8, carb: 58, fat: 16, sat: 9, sugar: 44, salt: 0.3 }, al: ["Lapte", "Gluten", "Soia"] },
          { n: "Frappe Oreo Crunch", d: "Cu biscuiți Oreo", p: 22, port: "380 ml", nu: { kcal: 410, prot: 8, carb: 60, fat: 16, sat: 9, sugar: 46, salt: 0.4 }, al: ["Lapte", "Gluten", "Soia"] },
          { n: "Ice Coffee Clasic", d: "Piacetto Tradizionale Caffè Crema 🇮🇹", p: 20, port: "300 ml", nu: { kcal: 160, prot: 5, carb: 25, fat: 5, sat: 3.1, sugar: 23, salt: 0.2 }, al: ["Lapte"] },
          { n: "Ice Coffee Viva Crunch", d: "Cu Viva Pernițe diversificate", p: 23, port: "330 ml", nu: { kcal: 305, prot: 7, carb: 48, fat: 11.5, sat: 6, sugar: 35, salt: 0.3 }, al: ["Lapte", "Gluten", "Soia"] },
          { n: "Ice Coffee Oreo Crunch", d: "Cu biscuiți Oreo", p: 23, port: "330 ml", nu: { kcal: 320, prot: 7, carb: 50, fat: 11.5, sat: 6, sugar: 37, salt: 0.3 }, al: ["Lapte", "Gluten", "Soia"] },
        ],
      },
      {
        name: "Băuturi Calde Instant",
        note: "Marcă: La Festa",
        items: [
          { n: "Ciocolată Caldă", d: "", p: 15, port: "200 ml", nu: { kcal: 120, prot: 2.5, carb: 22, fat: 2.5, sat: 1.8, sugar: 18, salt: 0.2 }, al: ["Lapte"] },
          { n: "Ciocolată Albă", d: "", p: 15, port: "200 ml", nu: { kcal: 135, prot: 2.7, carb: 24, fat: 3.5, sat: 2.4, sugar: 21, salt: 0.2 }, al: ["Lapte"] },
          { n: "Cappuccino Cioco", d: "", p: 15, port: "200 ml", nu: { kcal: 100, prot: 2.5, carb: 18, fat: 2.2, sat: 1.5, sugar: 15, salt: 0.2 }, al: ["Lapte"] },
          { n: "Cappuccino Clasic", d: "", p: 15, port: "200 ml", nu: { kcal: 90, prot: 2.3, carb: 16, fat: 2, sat: 1.4, sugar: 13, salt: 0.2 }, al: ["Lapte"] },
          { n: "Ciocolată Caldă Vieneză", d: "", p: 16, port: "220 ml", nu: { kcal: 195, prot: 3, carb: 25, fat: 9.5, sat: 6.5, sugar: 21, salt: 0.2 }, al: ["Lapte"] },
          { n: "Ciocolată Caldă Albă Vieneză", d: "", p: 16, port: "220 ml", nu: { kcal: 210, prot: 3, carb: 27, fat: 10, sat: 6.8, sugar: 23, salt: 0.2 }, al: ["Lapte"] },
          { n: "Cappuccino Vienez", d: "", p: 16, port: "220 ml", nu: { kcal: 145, prot: 2.7, carb: 23, fat: 5, sat: 3.2, sugar: 20, salt: 0.2 }, al: ["Lapte"] },
          { n: "Cappuccino Cioco Vienez", d: "", p: 16, port: "220 ml", nu: { kcal: 160, prot: 2.9, carb: 26, fat: 6.2, sat: 4, sugar: 22, salt: 0.2 }, al: ["Lapte"] },
        ],
      },
    ],
  },
  {
    id: "apa",
    label: "Apă, Sucuri & Limonade",
    icon: "🍋",
    sub: "Reci și proaspete, direct din vitrină",
    subcats: [
      {
        name: "Apă & Sucuri",
        items: [
          { n: "Apă Plată Zizin", d: "", p: 15, port: "500 ml", nu: { kcal: 0, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Apă Carbogazoasă Zizin", d: "", p: 15, port: "500 ml", nu: { kcal: 0, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Apă Plată Borsec", d: "", p: 15, port: "500 ml", nu: { kcal: 0, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Apă Carbogazoasă Borsec", d: "", p: 15, port: "500 ml", nu: { kcal: 0, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Apă Plată Borsec Ciob", d: "", p: 20, port: "330 ml", nu: { kcal: 0, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Apă Carbogazoasă Borsec Ciob", d: "", p: 20, port: "330 ml", nu: { kcal: 0, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Apă Carbogazoasă Aqua Carpatica Forte PET", d: "", p: 18, port: "500 ml", nu: { kcal: 0, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "Coca-Cola Doză", d: "", p: 16, port: "330 ml", nu: { kcal: 139, prot: 0, carb: 35, fat: 0, sat: 0, sugar: 35, salt: 0.0 }, al: [] },
          { n: "Pepsi Doză", d: "", p: 16, port: "330 ml", nu: { kcal: 138, prot: 0, carb: 35, fat: 0, sat: 0, sugar: 35, salt: 0.0 }, al: [] },
          { n: "Fanta Doză", d: "", p: 16, port: "330 ml", nu: { kcal: 150, prot: 0, carb: 37, fat: 0, sat: 0, sugar: 37, salt: 0.0 }, al: [] },
          { n: "Sprite Doză", d: "", p: 16, port: "330 ml", nu: { kcal: 139, prot: 0, carb: 33, fat: 0, sat: 0, sugar: 33, salt: 0.0 }, al: [] },
          { n: "Pepsi Ciob", d: "", p: 19, port: "250 ml", nu: { kcal: 104, prot: 0, carb: 26, fat: 0, sat: 0, sugar: 26, salt: 0.0 }, al: [] },
          { n: "Coca-Cola Ciob", d: "100% import", p: 19, port: "250 ml", nu: { kcal: 105, prot: 0, carb: 26, fat: 0, sat: 0, sugar: 26, salt: 0.0 }, al: [] },
          { n: "Sprite Ciob", d: "100% import", p: 19, port: "250 ml", nu: { kcal: 105, prot: 0, carb: 25, fat: 0, sat: 0, sugar: 25, salt: 0.0 }, al: [] },
          { n: "Fanta Ciob", d: "100% import", p: 19, port: "250 ml", nu: { kcal: 114, prot: 0, carb: 28, fat: 0, sat: 0, sugar: 28, salt: 0.0 }, al: [] },
          { n: "Pepsi Zero Ciob", d: "100% import", p: 19, port: "250 ml", nu: { kcal: 1, prot: 0, carb: 0.3, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: [] },
          { n: "7up Lemon", d: "100% import", p: 19, port: "250 ml", nu: { kcal: 110, prot: 0, carb: 27, fat: 0, sat: 0, sugar: 27, salt: 0.0 }, al: [] },
          { n: "Timbark Vișine", d: "", p: 16, port: "250 ml", nu: { kcal: 110, prot: 0, carb: 27, fat: 0, sat: 0, sugar: 26, salt: 0.0 }, al: [] },
          { n: "Timbark Zmeură", d: "", p: 16, port: "250 ml", nu: { kcal: 110, prot: 0, carb: 27, fat: 0, sat: 0, sugar: 26, salt: 0.0 }, al: [] },
          { n: "Prigat Kiwi & Pere", d: "", p: 20, port: "250 ml", nu: { kcal: 135, prot: 0.2, carb: 33, fat: 0, sat: 0, sugar: 31, salt: 0.0 }, al: [] },
          { n: "Prigat Căpșuni & Banane", d: "", p: 20, port: "250 ml", nu: { kcal: 138, prot: 0.3, carb: 34, fat: 0.1, sat: 0, sugar: 32, salt: 0.0 }, al: [] },
        ],
      },
      {
        name: "Apă Tonică & Energizante",
        items: [
          { n: "Schweppes Kinley", d: "", p: 20, port: "250 ml", nu: { kcal: 88, prot: 0, carb: 21, fat: 0, sat: 0, sugar: 21, salt: 0.0 }, al: [] },
          { n: "Schweppes Mandarin", d: "", p: 19, port: "250 ml", nu: { kcal: 98, prot: 0, carb: 24, fat: 0, sat: 0, sugar: 24, salt: 0.0 }, al: [] },
          { n: "Evervess", d: "", p: 20, port: "250 ml", nu: { kcal: 90, prot: 0, carb: 22, fat: 0, sat: 0, sugar: 22, salt: 0.0 }, al: [] },
          { n: "Fi-Ga Fiori Di Guarana", d: "", p: 23, port: "250 ml", nu: { kcal: 115, prot: 0, carb: 28, fat: 0, sat: 0, sugar: 27, salt: 0.1 }, al: [] },
          { n: "Red Bull Energy", d: "Se servește doar 18+", p: 20, port: "250 ml", nu: { kcal: 113, prot: 0, carb: 27, fat: 0, sat: 0, sugar: 27, salt: 0.1 }, al: [] },
          { n: "Hell Energy", d: "Se servește doar 18+", p: 16, port: "250 ml", nu: { kcal: 112, prot: 0, carb: 26, fat: 0, sat: 0, sugar: 26, salt: 0.1 }, al: [] },
        ],
      },
      {
        name: "Limonade & Smoothie",
        items: [
          { n: "Limonadă Naturală Clasică", d: "", p: 20, port: "400 ml", nu: { kcal: 120, prot: 0.2, carb: 30, fat: 0, sat: 0, sugar: 28, salt: 0.0 }, al: [] },
          { n: "Limonadă Naturală Popping Boba", d: "Bilute Popping Boba, sortimente diversificate", p: 24, port: "450 ml", nu: { kcal: 170, prot: 0.2, carb: 42, fat: 0, sat: 0, sugar: 39, salt: 0.0 }, al: [] },
          { n: "Smoothie Fruit Mix cu Suc Natural de Mere", d: "Fructe congelate + suc natural de mere", p: 25, port: "400 ml", nu: { kcal: 185, prot: 1, carb: 45, fat: 0.5, sat: 0, sugar: 37, salt: 0.0 }, al: [] },
          { n: "Smoothie Fruit Mix Popping Boba", d: "Fructe congelate, bilute Popping Boba, suc de mere", p: 27, port: "450 ml", nu: { kcal: 225, prot: 1, carb: 55, fat: 0.5, sat: 0, sugar: 46, salt: 0.0 }, al: [] },
        ],
      },
    ],
  },
  {
    id: "bere",
    label: "Bere & Cidru",
    icon: "🍺",
    sub: "De la clasice la sortimente premium de import",
    subcats: [
      {
        name: "Bere & Cidru",
        items: [
          { n: "Heineken", d: "", p: 19, port: "330 ml", nu: { kcal: 138, prot: 1.3, carb: 10.6, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Amstel Beer", d: "", p: 18, port: "330 ml", nu: { kcal: 142, prot: 1.5, carb: 11, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Birra Moretti", d: "", p: 16, port: "330 ml", nu: { kcal: 138, prot: 1.1, carb: 10.4, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Birra Moretti Draught", d: "", p: 17, port: "400 ml", nu: { kcal: 170, prot: 1.3, carb: 12.5, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Ciucaș Sticlă", d: "", p: 16, port: "330 ml", nu: { kcal: 140, prot: 1.2, carb: 10.8, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Strongbow Fructe de Pădure", d: "", p: 18, port: "330 ml", nu: { kcal: 165, prot: 0, carb: 22, fat: 0, sat: 0, sugar: 20, salt: 0.0 }, al: ["Sulfiți"] },
        ],
      },
      {
        name: "Bere Premium & Import",
        items: [
          { n: "Saint Omer", d: "100% import Franța", p: 30, port: "330 ml", nu: { kcal: 145, prot: 1.4, carb: 11, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Kronenbourg Blondă 1664", d: "100% import Franța", p: 32, port: "330 ml", nu: { kcal: 146, prot: 1.3, carb: 11.2, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Alhambra Reserva 1925", d: "Blondă, 100% import Spania", p: 32, port: "330 ml", nu: { kcal: 175, prot: 1.5, carb: 12.5, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Alhambra Lager Singular", d: "Blondă, 100% import Spania", p: 32, port: "330 ml", nu: { kcal: 150, prot: 1.3, carb: 11.3, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Cruzcampo Especial", d: "Blondă lager, 100% import Spania", p: 32, port: "330 ml", nu: { kcal: 148, prot: 1.3, carb: 11.1, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Grolsch Lager", d: "Blondă lager, 100% import Olanda", p: 32, port: "330 ml", nu: { kcal: 147, prot: 1.2, carb: 11, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Warsteiner Premium", d: "Blondă, 100% import Germania", p: 32, port: "330 ml", nu: { kcal: 140, prot: 1.2, carb: 10.5, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Modelo Especial", d: "Blondă, 100% import Mexic", p: 32, port: "330 ml", nu: { kcal: 145, prot: 1.1, carb: 10.8, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
          { n: "Red Stripe Lager", d: "Blondă, 100% import Jamaica", p: 32, port: "330 ml", nu: { kcal: 150, prot: 1.2, carb: 11.4, fat: 0, sat: 0, sugar: 0, salt: 0.0 }, al: ["Gluten (orz)"] },
        ],
      },
    ],
  },
  {
    id: "vinuri",
    label: "Vinuri",
    icon: "🍷",
    sub: "Selecție de la trei crame românești",
    subcats: [
      {
        name: "Crama Hermeziu 🇷🇴",
        items: [
          { n: "Vin Pétillant Alb Madame Blue", d: "Spumant demisec", p: 160, port: "750 ml", nu: { kcal: 560, prot: 0.5, carb: 24, fat: 0, sat: 0, sugar: 20, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Pétillant Rosé Mademoiselle", d: "Spumant demisec", p: 160, port: "750 ml", nu: { kcal: 570, prot: 0.5, carb: 24, fat: 0, sat: 0, sugar: 20, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Scrisori Cuvée Alb", d: "Băricat sec", p: 160, port: "750 ml", nu: { kcal: 600, prot: 0.5, carb: 15, fat: 0, sat: 0, sugar: 6, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Scrisori Cuvée Rosé", d: "Băricat sec", p: 160, port: "750 ml", nu: { kcal: 600, prot: 0.5, carb: 12, fat: 0, sat: 0, sugar: 5, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Hermeziu Chardonnay", d: "Alb băricat premium, sec", p: 170, port: "750 ml", nu: { kcal: 605, prot: 0.5, carb: 14, fat: 0, sat: 0, sugar: 5, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Hermeziu Sauvignon Blanc", d: "Alb băricat premium, sec", p: 170, port: "750 ml", nu: { kcal: 605, prot: 0.5, carb: 14, fat: 0, sat: 0, sugar: 5, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Hermeziu Traminer", d: "Alb băricat premium, demisec", p: 170, port: "750 ml", nu: { kcal: 630, prot: 0.5, carb: 24, fat: 0, sat: 0, sugar: 18, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Moșanca Alb", d: "2025, sec", p: 140, port: "750 ml", nu: { kcal: 595, prot: 0.5, carb: 11, fat: 0, sat: 0, sugar: 4, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Moșanca Rosé", d: "2024, sec", p: 140, port: "750 ml", nu: { kcal: 600, prot: 0.5, carb: 12, fat: 0, sat: 0, sugar: 5, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Răvașe Chardonnay", d: "Alb demisec", p: 140, port: "750 ml", nu: { kcal: 620, prot: 0.5, carb: 22, fat: 0, sat: 0, sugar: 16, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Răvașe Sauvignon Blanc", d: "Alb demisec", p: 140, port: "750 ml", nu: { kcal: 620, prot: 0.5, carb: 22, fat: 0, sat: 0, sugar: 16, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Răvașe Traminer", d: "Alb demisec", p: 140, port: "750 ml", nu: { kcal: 620, prot: 0.5, carb: 22, fat: 0, sat: 0, sugar: 16, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Hruba Boierului Fetească Regală", d: "Alb demisec", p: 140, port: "750 ml", nu: { kcal: 595, prot: 0.5, carb: 11, fat: 0, sat: 0, sugar: 4, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin C'est Soir Traminer Rosé", d: "Băricat premium, demisec", p: 170 },
          { n: "Vin C'est Soir Busuioacă de Bohotin Rosé", d: "Băricat premium, sec", p: 170 },
          { n: "Vinul Casei Carafă Traminer", d: "Alb D.O.C.", p: 65, port: "500 ml", nu: { kcal: 405, prot: 0.4, carb: 11, fat: 0, sat: 0, sugar: 8, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vinul Casei Carafă Chardonnay", d: "Alb D.O.C.", p: 65, port: "500 ml", nu: { kcal: 405, prot: 0.4, carb: 11, fat: 0, sat: 0, sugar: 8, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vinul Casei Carafă Fetească Regală", d: "Alb D.O.C.", p: 65, port: "500 ml", nu: { kcal: 405, prot: 0.4, carb: 11, fat: 0, sat: 0, sugar: 8, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vinul Casei Carafă Rosé", d: "Rosé D.O.C.", p: 65, port: "500 ml", nu: { kcal: 410, prot: 0.4, carb: 12, fat: 0, sat: 0, sugar: 8, salt: 0.1 }, al: ["Sulfiți"] },
        ],
      },
      {
        name: "Crama Ostrov 🇷🇴",
        items: [
          { n: "Vin Noe Dry Muscat", d: "Alb sec, I.G. Terasele Dunării", p: 140, port: "750 ml", nu: { kcal: 605, prot: 0.5, carb: 12, fat: 0, sat: 0, sugar: 5, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Naiada Chardonnay", d: "Alb sec, D.O.C. Oltina", p: 140, port: "750 ml", nu: { kcal: 595, prot: 0.5, carb: 11, fat: 0, sat: 0, sugar: 4, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Naiada Sauvignon Blanc", d: "Alb sec, D.O.C. Oltina", p: 140, port: "750 ml", nu: { kcal: 595, prot: 0.5, carb: 11, fat: 0, sat: 0, sugar: 4, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Naiada Crâmpoșie", d: "Alb sec, I.G. Terasele Dunării", p: 140, port: "750 ml", nu: { kcal: 595, prot: 0.5, carb: 11, fat: 0, sat: 0, sugar: 4, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Naiada Cuvée Rosé", d: "Sec, cupaj Pinot Noir & Fetească Neagră", p: 140, port: "750 ml", nu: { kcal: 600, prot: 0.5, carb: 12, fat: 0, sat: 0, sugar: 5, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Naiada Fetească Neagră", d: "Roșu sec, D.O.C. Oltina", p: 140, port: "750 ml", nu: { kcal: 625, prot: 0.6, carb: 13, fat: 0, sat: 0, sugar: 4, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin Naiada Syrah", d: "Roșu sec, D.O.C. Oltina", p: 140, port: "750 ml", nu: { kcal: 625, prot: 0.6, carb: 13, fat: 0, sat: 0, sugar: 4, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vinul Casei Carafă Sauvignon Blanc", d: "Alb demisec, I.G.", p: 65, port: "500 ml", nu: { kcal: 410, prot: 0.4, carb: 13, fat: 0, sat: 0, sugar: 10, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vinul Casei Carafă Chardonnay", d: "Alb demisec, I.G.", p: 65, port: "500 ml", nu: { kcal: 410, prot: 0.4, carb: 13, fat: 0, sat: 0, sugar: 10, salt: 0.1 }, al: ["Sulfiți"] },
        ],
      },
      {
        name: "Crama Sarica Niculițel",
        items: [
          { n: "Vin 1958 Sauvignon Blanc & Fetească Albă", d: "Alb demisec", p: 70, port: "750 ml", nu: { kcal: 615, prot: 0.5, carb: 22, fat: 0, sat: 0, sugar: 16, salt: 0.1 }, al: ["Sulfiți"] },
          { n: "Vin 1958 Cuvée Rosé", d: "Rosé demisec", p: 70, port: "750 ml", nu: { kcal: 615, prot: 0.5, carb: 22, fat: 0, sat: 0, sugar: 16, salt: 0.1 }, al: ["Sulfiți"] },
        ],
      },
    ],
  },
  {
    id: "spirtoase",
    label: "Spirtoase Premium",
    icon: "🥃",
    sub: "Whisky, rom, brandy și alte etichete alese",
    subcats: [
      {
        name: "Single Malt Scotch Whisky",
        items: [{ n: "Glenfiddich 12 Ani", d: "", p: 37.5, port: "50 ml", nu: { kcal: 112, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] }],
      },
      {
        name: "Blended Scotch Whisky",
        items: [
          { n: "Dimple Golden Selection", d: "", p: 35 },
          { n: "Johnnie Walker Black Label 12 Ani", d: "", p: 35, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
        ],
      },
      {
        name: "Tennessee Whisky",
        items: [
          { n: "Jack Daniel's", d: "", p: 32.5, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
          { n: "Jack Daniel's Single Barrel", d: "", p: 37.5, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
          { n: "Jack Daniel's Gentleman Jack", d: "", p: 35, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
        ],
      },
      {
        name: "Rom",
        items: [
          { n: "Bumbu Original 40%", d: "100% import 🇦🇬", p: 35, port: "50 ml", nu: { kcal: 115, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
          { n: "Don Papa GBX 40%", d: "100% import 🇵🇭", p: 37.5, port: "50 ml", nu: { kcal: 116, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
        ],
      },
      {
        name: "Brandy",
        items: [
          { n: "Alexandrion 9*", d: "", p: 22.5, port: "50 ml", nu: { kcal: 112, prot: 0, carb: 0.4, fat: 0, sat: 0, sugar: 0.2, salt: 0 }, al: [] },
          { n: "Jidvei V.S.O.P", d: "", p: 19.5, port: "50 ml", nu: { kcal: 111, prot: 0, carb: 0.4, fat: 0, sat: 0, sugar: 0.2, salt: 0 }, al: [] },
          { n: "Vecchia Romagna", d: "", p: 19, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0.3, fat: 0, sat: 0, sugar: 0.2, salt: 0 }, al: [] },
          { n: "Alexandrion 5*", d: "", p: 16.5, port: "50 ml", nu: { kcal: 109, prot: 0, carb: 0.3, fat: 0, sat: 0, sugar: 0.2, salt: 0 }, al: [] },
          { n: "Cava D'oro", d: "", p: 14, port: "50 ml", nu: { kcal: 85, prot: 0, carb: 6, fat: 0, sat: 0, sugar: 6, salt: 0.0 }, al: ["Sulfiți"] },
        ],
      },
      {
        name: "Vodka",
        items: [
          { n: "Finlandia", d: "", p: 16, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
          { n: "Stalinskaya", d: "", p: 15, port: "50 ml", nu: { kcal: 108, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
        ],
      },
      {
        name: "Tequila",
        items: [
          { n: "Salitos Silver 38%", d: "100% import Mexic", p: 28, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
          { n: "Salitos Gold 38%", d: "100% import Mexic", p: 28, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
        ],
      },
      {
        name: "Gin",
        items: [
          { n: "Beefeater", d: "", p: 28, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
          { n: "Gilman's", d: "", p: 27, port: "50 ml", nu: { kcal: 110, prot: 0, carb: 0, fat: 0, sat: 0, sugar: 0, salt: 0 }, al: [] },
        ],
      },
      {
        name: "Aperitive & Vermuturi",
        items: [{ n: "Bitter Carpaten", d: "", p: 15, port: "50 ml", nu: { kcal: 103, prot: 0, carb: 4, fat: 0, sat: 0, sugar: 4, salt: 0.0 }, al: [] }],
      },
    ],
  },
  {
    id: "cocktailuri",
    label: "Cocktailuri",
    icon: "🍹",
    sub: "Amestecuri de casă, cu și fără alcool",
    subcats: [
      {
        name: "Long Drinks & Specialități",
        items: [
          { n: "Gin Tonic", d: "50ml gin · 150ml apă tonică · gheață · lămâie/lime", p: 40, port: "250 ml", nu: { kcal: 160, prot: 0, carb: 14, fat: 0, sat: 0, sugar: 13, salt: 0.0 }, al: [] },
          { n: "Mojito Premium", d: "50ml rom Bumbu Original · mentă proaspătă · lime · zahăr brun", p: 45, port: "300 ml", nu: { kcal: 195, prot: 0, carb: 20, fat: 0, sat: 0, sugar: 18, salt: 0.0 }, al: [] },
          { n: "Cuba Libre Premium", d: "50ml rom Bumbu/Don Papa · Coca-Cola · lămâie/lime", p: 45, port: "250 ml", nu: { kcal: 202, prot: 0, carb: 19, fat: 0, sat: 0, sugar: 18, salt: 0.0 }, al: [] },
          { n: "Tequila Beer Bomb ~ Submarino", d: "40ml tequila Salitos · 330ml bere blondă", p: 35, port: "400 ml", nu: { kcal: 255, prot: 1.2, carb: 15, fat: 0, sat: 0, sugar: 1, salt: 0.0 }, al: ["Gluten (bere)"] },
          { n: "Ice Tea Punch 0% Alcool", d: "Ceai rece · suc natural de mere · mix fructe congelate", p: 35, port: "400 ml", nu: { kcal: 170, prot: 0.5, carb: 40, fat: 0.2, sat: 0, sugar: 36, salt: 0.0 }, al: [] },
          { n: "Ice Tea Punch Rom", d: "40ml rom · ceai rece · suc de mere · fructe congelate", p: 40, port: "440 ml", nu: { kcal: 260, prot: 0.5, carb: 40, fat: 0.2, sat: 0, sugar: 36, salt: 0.0 }, al: [] },
          { n: "Ice Tea Punch Tequila", d: "40ml tequila · ceai rece · suc de mere · fructe congelate", p: 40, port: "440 ml", nu: { kcal: 258, prot: 0.5, carb: 40, fat: 0.2, sat: 0, sugar: 36, salt: 0.0 }, al: [] },
          { n: "Ice Tea Punch Vodka", d: "40ml vodka · ceai rece · suc de mere · fructe congelate", p: 40, port: "440 ml", nu: { kcal: 258, prot: 0.5, carb: 40, fat: 0.2, sat: 0, sugar: 36, salt: 0.0 }, al: [] },
          { n: "Sangria Punch Ice", d: "150ml vin roșu · suc de mere · 40ml brandy · fructe congelate", p: 40, port: "380 ml", nu: { kcal: 245, prot: 0.5, carb: 32, fat: 0, sat: 0, sugar: 28, salt: 0.0 }, al: ["Sulfiți"] },
        ],
      },
    ],
  },
  {
    id: "gustari",
    label: "Gustări & Aperitive",
    icon: "🥜",
    sub: "Perfecte alături de o bere sau un pahar de vin",
    subcats: [
      {
        name: "Snack-uri, Gustări & Aperitive Reci",
        items: [
          { n: "Fistic Prăjit și Sărat", d: "", p: 40 },
          { n: "Arahide Prăjite și Sărate", d: "", p: 32 },
          { n: "Popcorn Sare", d: "", p: 27 },
          { n: "Popcorn Unt", d: "", p: 27 },
          { n: "Popcorn Cașcaval/Brânză", d: "", p: 27 },
          { n: "Sărățele cu Cașcaval", d: "", p: 27 },
          { n: "Măsline Negre Sărate", d: "", p: 25 },
        ],
      },
    ],
  },
  {
    id: "diverse",
    label: "Diverse & Extra",
    icon: "🎲",
    sub: "Mici extra-uri și seri de jocuri de societate",
    subcats: [
      {
        name: "Diverse & Extra",
        items: [
          { n: "Lămâi Feliate", d: "", p: 13 },
          { n: "Portocale Feliate", d: "", p: 13 },
          { n: "Gheață Frapieră Mică", d: "", p: 13 },
          { n: "Lapte Condensat Cafea", d: "", p: 11 },
          { n: "Lapte UHT Cafea", d: "", p: 11 },
          { n: "Miere Plicuri Poliflora", d: "", p: 12 },
          { n: "Sifon Românesc", d: "", p: 20 },
          { n: "Jocuri de Societate", d: "Rummy, table, șah, jocuri de cărți — 20 lei/persoană/oră", p: 20 },
        ],
      },
    ],
  },
];
