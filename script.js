"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // =========================================================
  // GAMEZONE — TIENDA DE VIDEOJUEGOS
  // =========================================================

  // ⚠️ PONÉ TU NÚMERO DE WHATSAPP ACÁ (código de país + número, sin + ni espacios)
  // Ejemplo Argentina: "5491123456789"
  const WHATSAPP_NUMBER = "5491100000000";

  // =========================================================
  // JUEGOS DE PS2 (tu catálogo actual — no se toca)
  // =========================================================

  const games = [
{id:1,name:"Grand Theft Auto: San Andreas",category:"destacado",price:2500,genre:"Mundo Abierto",top:true,image:"img/gta-san-andreas.jpg"},
    {id:2,name:"God of War",category:"destacado",price:2500,genre:"Hack and Slash",top:true,image:"img/god-of-war.jpg"},
    {id:3,name:"God of War II",category:"destacado",price:2500,genre:"Hack and Slash",top:true,image:"img/god-of-warII.jpg"},
    {id:4,name:"Shadow of the Colossus",category:"destacado",price:2500,genre:"Aventura",top:true,image:"img/shadow-of-the-colossus.jpg"},
    {id:5,name:"Metal Gear Solid 3: Snake Eater",category:"destacado",price:2500,genre:"Sigilo",top:false,image:"img/metal-gear-solid-3.jpg"},
    {id:6,name:"Gran Turismo 4",category:"destacado",price:2500,genre:"Carreras",top:true,image:"img/gran-turismo-4.jpg"},
    {id:7,name:"Final Fantasy X",category:"destacado",price:2500,genre:"RPG",top:true,image:"img/final-fantasy-x.jpg"},
    {id:8,name:"Resident Evil 4",category:"destacado",price:2500,genre:"Survival Horror",top:true,image:"img/resident-evil-4.jpg"},
    {id:9,name:"Grand Theft Auto: Vice City",category:"destacado",price:2500,genre:"Mundo Abierto",top:true,image:"img/gta-vice-city.jpg"},
    {id:10,name:"Kingdom Hearts II",category:"destacado",price:2500,genre:"RPG Acción",top:true,image:"img/kingdom-hearts-2.jpg"},
    {id:11,name:"Devil May Cry 3: Dante's Awakening",category:"destacado",price:2500,genre:"Hack and Slash",top:false,image:"img/devil-may-cry-3.jpg"},
    {id:12,name:"Dragon Ball Z: Budokai Tenkaichi 3",category:"destacado",price:2500,genre:"Lucha",top:true,image:"img/dragon-ball-z-budokai-tenkaichi-3.jpg"},
    {id:13,name:"Gran Turismo 3: A-Spec",category:"destacado",price:2500,genre:"Carreras",top:false,image:"img/gran-turismo-3.jpg"},
    {id:14,name:"Tekken 5",category:"destacado",price:2500,genre:"Lucha",top:true,image:"img/tekken-5.jpg"},
    {id:15,name:"Okami",category:"destacado",price:2500,genre:"Aventura",top:false,image:"img/okami.jpg"},
    {id:16,name:"Ratchet & Clank: Up Your Arsenal",category:"destacado",price:2500,genre:"Plataformas Shooter",top:false,image:"img/ratchet-clank-up-your-arsenal.jpg"},
    {id:17,name:"Jak and Daxter: The Precursor Legacy",category:"destacado",price:2500,genre:"Plataformas",top:false,image:"img/jak-and-daxter.jpg"},
    {id:18,name:"Sly Cooper and the Thievius Raccoonus",category:"destacado",price:2500,genre:"Plataformas Sigilo",top:false,image:"img/sly-cooper-1.jpg"},
    {id:19,name:"Sly 2: Band of Thieves",category:"destacado",price:2500,genre:"Plataformas Sigilo",top:false,image:"img/sly-cooper-2.jpg"},
    {id:20,name:"Sly 3: Honor Among Thieves",category:"destacado",price:2500,genre:"Plataformas Sigilo",top:false,image:"img/sly-cooper-3.jpg"},
    {id:21,name:"Kingdom Hearts",category:"destacado",price:2500,genre:"RPG Acción",top:false,image:"img/kingdom-hearts-1.jpg"},
    {id:22,name:"Persona 4",category:"destacado",price:2500,genre:"RPG",top:false,image:"img/persona-4.jpg"},
    {id:23,name:"Persona 3 FES",category:"destacado",price:2500,genre:"RPG",top:false,image:"img/persona-3-fes.jpg"},
    {id:24,name:"Final Fantasy XII",category:"destacado",price:2500,genre:"RPG",top:false,image:"img/final-fantasy-xii.jpg"},
    {id:25,name:"Dragon Quest VIII: Journey of the Cursed King",category:"destacado",price:2500,genre:"RPG",top:false,image:"img/dragon-quest-viii.jpg"},
    {id:26,name:"Ico",category:"destacado",price:2500,genre:"Aventura Puzzle",top:false,image:"img/ico.jpg"},
    {id:27,name:"Silent Hill 2",category:"destacado",price:2500,genre:"Survival Horror",top:false,image:"img/silent-hill-2.jpg"},
    {id:28,name:"Guitar Hero II",category:"destacado",price:2500,genre:"Musical",top:false,image:"img/guitar-hero-2.jpg"},
    {id:29,name:"Guitar Hero III: Legends of Rock",category:"destacado",price:2500,genre:"Musical",top:true,image:"img/guitar-hero-3.jpg"},
    {id:30,name:"Simpsons: Hit & Run",category:"destacado",price:2500,genre:"Mundo Abierto",top:true,image:"img/simpsons-hit-and-run.jpg"},
    {id:31,name:"Ratchet & Clank",category:"destacado",price:2500,genre:"Plataformas",top:false,image:"img/ratchet-clank-1.jpg"},
    {id:32,name:"Jak II",category:"destacado",price:2500,genre:"Plataformas Acción",top:false,image:"img/jak-2.jpg"},
    {id:33,name:"Jak 3",category:"destacado",price:2500,genre:"Plataformas Acción",top:false,image:"img/jak-3.jpg"},
    {id:34,name:"Devil May Cry",category:"destacado",price:2500,genre:"Hack and Slash",top:false,image:"img/devil-may-cry-1.jpg"},
    {id:35,name:"Silent Hill 3",category:"destacado",price:2500,genre:"Survival Horror",top:false,image:"img/silent-hill-3.jpg"},
    {id:36,name:"Grand Theft Auto III",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Mundo Abierto",top:true,image:"img/gta-3.jpg"},
    {id:37,name:"Bully",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Mundo Abierto",top:true,image:"img/bully.jpg"},
    {id:38,name:"Marvel vs. Capcom 2: New Age of Heroes",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Lucha",top:true,image:"img/marvel-vs-capcom-2.jpg"},
    {id:39,name:"SoulCalibur III",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Lucha",top:false,image:"img/soulcalibur-3.jpg"},
    {id:40,name:"Need for Speed: Most Wanted",category:"normal",price:2000,genre:"Carreras",top:true,image:"img/nfs-most-wanted.jpg"},
    {id:41,name:"Need for Speed: Underground 2",category:"normal",price:2000,genre:"Carreras",top:true,image:"img/nfs-underground-2.jpg"},
    {id:42,name:"Need for Speed: Underground",category:"normal",price:2000,genre:"Carreras",top:false,image:"img/nfs-underground-1.jpg"},
    {id:43,name:"Midnight Club 3: DUB Edition",category:"normal",price:2000,genre:"Carreras",top:false,image:"img/midnight-club-3.jpg"},
    {id:44,name:"Burnout 3: Takedown",category:"normal",price:2000,genre:"Carreras",top:true,image:"img/burnout-3.jpg"},
    {id:45,name:"Burnout Revenge",category:"normal",price:2000,genre:"Carreras",top:false,image:"img/burnout-revenge.jpg"},
    {id:46,name:"Colin McRae Rally 2005",category:"normal",price:2000,genre:"Carreras",top:false,image:"img/colin-mcrae-rally-2005.jpg"},
    {id:47,name:"Tourist Trophy",category:"normal",price:2000,genre:"Carreras Motos",top:false,image:"img/tourist-trophy.jpg"},
    {id:48,name:"Midnight Club II",category:"normal",price:2000,genre:"Carreras",top:false,image:"img/midnight-club-2.jpg"},
    {id:49,name:"Pro Evolution Soccer 6",category:"normal",price:2000,genre:"Deportes",top:true,image:"img/pes-6.jpg"},
    {id:50,name:"FIFA Street 2",category:"normal",price:2000,genre:"Deportes",top:false,image:"img/fifa-street-2.jpg"},
    {id:51,name:"NBA Street V3",category:"normal",price:2000,genre:"Deportes",top:false,image:"img/nba-street-v3.jpg"},
    {id:52,name:"Tony Hawk's Pro Skater 3",category:"normal",price:2000,genre:"Skate",top:false,image:"img/tony-hawk-pro-skater-3.jpg"},
    {id:53,name:"SSX 3",category:"normal",price:2000,genre:"Snowboard",top:false,image:"img/ssx-3.jpg"},
    {id:54,name:"WWE SmackDown! vs. Raw 2006",category:"normal",price:2000,genre:"Lucha Deportes",top:true,image:"img/wwe-smackdown-vs-raw-2006.jpg"},
    {id:55,name:"Def Jam: Fight For NY",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/def-jam-fight-for-ny.jpg"},
    {id:56,name:"Mortal Kombat: Shaolin Monks",category:"normal",price:2000,genre:"Aventura Lucha",top:true,image:"img/mk-shaolin-monks.jpg"},
    {id:57,name:"Mortal Kombat: Armageddon",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/mk-armageddon.jpg"},
    {id:58,name:"Mortal Kombat: Deception",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/mk-deception.jpg"},
    {id:59,name:"SoulCalibur II",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/soulcalibur-2.jpg"},
    {id:60,name:"Tekken Tag Tournament",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/tekken-tag-tournament.jpg"},
    {id:61,name:"Virtua Fighter 4: Evolution",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/virtua-fighter-4-evolution.jpg"},
    {id:62,name:"Street Fighter Anniversary Collection",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/street-fighter-anniversary-collection.jpg"},
    {id:63,name:"Dragon Ball Z: Budokai 3",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Lucha",top:true,image:"img/dbz-budokai-3.jpg"},
    {id:64,name:"Dragon Ball Z: Budokai 2",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/dbz-budokai-2.jpg"},
    {id:65,name:"Naruto: Ultimate Ninja 5",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/naruto-ultimate-ninja-5.jpg"},
    {id:66,name:"Naruto: Ultimate Ninja 4",category:"normal",price:2000,genre:"Lucha",top:false,image:"img/naruto-ultimate-ninja-4.jpg"},
    {id:67,name:"Black",category:"normal",price:2000,genre:"Shooter",top:false,image:"img/black.jpg"},
    {id:68,name:"Call of Duty 3",category:"normal",price:2000,genre:"Shooter",top:false,image:"img/call-of-duty-3.jpg"},
    {id:69,name:"Medal of Honor: Frontline",category:"normal",price:2000,genre:"Shooter",top:false,image:"img/medal-of-honor-frontline.jpg"},
    {id:70,name:"TimeSplitters 2",category:"normal",price:2000,genre:"Shooter",top:false,image:"img/timesplitters-2.jpg"},
    {id:71,name:"Killzone",category:"normal",price:2000,genre:"Shooter",top:false,image:"img/killzone.jpg"},
    {id:72,name:"SOCOM II: U.S. Navy SEALs",category:"normal",price:2000,genre:"Shooter Táctico",top:false,image:"img/socom-2.jpg"},
    {id:73,name:"Sniper Elite",category:"normal",price:2000,genre:"Shooter Sigilo",top:false,image:"img/sniper-elite.jpg"},
    {id:74,name:"Prince of Persia: The Sands of Time",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Aventura",top:true,image:"img/pop-sands-of-time.jpg"},
    {id:75,name:"Prince of Persia: Warrior Within",category:"normal",price:2000,genre:"Aventura Acción",top:false,image:"img/pop-warrior-within.jpg"},
    {id:76,name:"Prince of Persia: The Two Thrones",category:"normal",price:2000,genre:"Aventura Acción",top:false,image:"img/pop-two-thrones.jpg"},
    {id:77,name:"Beyond Good & Evil",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Aventura",top:false,image:"img/beyond-good-and-evil.jpg"},
    {id:78,name:"Psychonauts",category:"normal",price:2000,genre:"Plataformas",top:false},
    {id:79,name:"Katamari Damacy",category:"normal",price:2000,genre:"Puzzle",top:false},
    {id:80,name:"Viewtiful Joe",category:"normal",price:2000,genre:"Beat em Up",top:false},
    {id:81,name:"God Hand",category:"normal",price:2000,genre:"Beat em Up",top:false},
    {id:82,name:"The Warriors",category:"normal",price:2000,genre:"Beat em Up",top:false},
    {id:83,name:"Scarface: The World Is Yours",category:"normal",price:2000,genre:"Mundo Abierto",top:false},
    {id:84,name:"The Godfather: The Game",category:"normal",price:2000,genre:"Mundo Abierto",top:false},
    {id:85,name:"Manhunt",category:"normal",price:2000,genre:"Sigilo Horror",top:false},
    {id:86,name:"Hitman: Blood Money",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Sigilo",top:false},
    {id:87,name:"Splinter Cell: Chaos Theory",category:"normal",price:2000,genre:"Sigilo",top:false},
    {id:88,name:"Metal Slug Anthology",category:"normal",price:2000,genre:"Arcade",top:false},
    {id:89,name:"Contra: Shattered Soldier",category:"normal",price:2000,genre:"Run and Gun",top:false},
    {id:90,name:"Gradius V",category:"normal",price:2000,genre:"Naves",top:false},
    {id:91,name:"Resident Evil: Code Veronica X",category:"normal",price:2000,genre:"Survival Horror",top:false},
    {id:92,name:"Fatal Frame II: Crimson Butterfly",category:"normal",price:2000,genre:"Survival Horror",top:false},
    {id:93,name:"Onimusha 3: Demon Siege",category:"normal",price:2000,genre:"Acción Aventura",top:false},
    {id:94,name:"Onimusha: Warlords",category:"normal",price:2000,genre:"Acción Aventura",top:false},
    {id:95,name:"Shin Megami Tensei: Nocturne",category:"normal",price:2000,genre:"RPG",top:false},
    {id:96,name:"Xenosaga Episode I: Der Wille zur Macht",category:"normal",price:2000,genre:"RPG",top:false},
    {id:97,name:"Champions of Norrath",category:"normal",price:2000,genre:"RPG Acción",top:false},
    {id:98,name:"Baldur's Gate: Dark Alliance",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"RPG Acción",top:false},
    {id:99,name:"Kingdom Hearts: Re Chain of Memories",category:"normal",price:2000,genre:"RPG",top:false},
    {id:100,name:"Lego Star Wars II: The Original Trilogy",category:"normal",price:2000,genre:"Aventura Plataformas",top:true},
    {id:101,name:"Spider-Man 2",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Acción Mundo Abierto",top:true},
    {id:102,name:"Hulk: Ultimate Destruction",category:"normal",price:2000,genre:"Acción",top:false},
    {id:103,name:"Ben 10: Protector of Earth",category:"normal",price:2000,genre:"Aventura",top:false},
    {id:104,name:"Crash Bandicoot: The Wrath of Cortex",category:"normal",price:2000,genre:"Plataformas",top:true},
    {id:105,name:"Crash Nitro Kart",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Carreras",top:false},
    {id:106,name:"Spyro: Enter the Dragonfly",category:"normal",price:2000,genre:"Plataformas",top:false},
    {id:107,name:"Rayman 3: Hoodlum Havoc",category:"normal",price:2000,genre:"Plataformas",top:false},
    {id:108,name:"Klonoa 2: Lunatea's Veil",category:"normal",price:2000,genre:"Plataformas",top:false},
    {id:109,name:"Downhill Domination",category:"normal",price:2000,genre:"Carreras",top:false},
    {id:110,name:"FIFA 14",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Deportes",top:true},
    {id:111,name:"Winning Eleven 10",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Deportes",top:true},
    {id:112,name:"Karaoke Revolution Party",category:"normal",price:2000,genre:"Musical",top:false},
    {id:113,name:"SingStar Pop",category:"normal",price:2000,genre:"Musical",top:false},
    {id:114,name:"Ratchet & Clank: Deadlocked",category:"normal",price:2000,genre:"Plataformas Shooter",top:false},
    {id:115,name:"Urban Reign",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:116,name:"The Punisher",category:"normal",price:2000,genre:"Acción",top:false},
    {id:117,name:"True Crime: Streets of LA",category:"normal",price:2000,genre:"Mundo Abierto",top:false},
    {id:118,name:"FlatOut 2",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Carreras",top:false},
    {id:119,name:"Corvette",category:"normal",price:2000,genre:"Carreras",top:false},
    {id:120,name:"007: Nightfire",category:"normal",price:2000,genre:"Shooter",top:false}
  ];

  // =========================================================
  // JUEGOS DE SWITCH (subí las imágenes a la carpeta img-switch/)
  // =========================================================

  const switchGames = [
// ⚠️ ACÁ CARGÁS TUS JUEGOS DE SWITCH
    // Subí las imágenes a la carpeta "img-switch/" y agregalos así:
    // {id:201, name:"Mario Kart 8 Deluxe", price:45000, genre:"Carreras", top:true, image:"img-switch/mario-kart-8.jpg"},
    {id:201, name:"Mario Kart 8 Deluxe", price:45000, genre:"Carreras", top:true, image:"img-switch/mario-kart-8.jpg"},
    {id:202, name:"The Legend of Zelda: Breath of the Wild", price:55000, genre:"Aventura", top:true, image:"img-switch/zelda-botw.jpg"},
    {id:203, name:"Super Mario Odyssey", price:50000, genre:"Plataformas", top:true, image:"img-switch/mario-odyssey.jpg"},
    {id:204, name:"Super Smash Bros. Ultimate", price:48000, genre:"Lucha", top:false, image:"img-switch/smash-ultimate.jpg"},
    {id:205, name:"Animal Crossing: New Horizons", price:42000, genre:"Simulación", top:false, image:"img-switch/animal-crossing.jpg"}
  ];

  // =========================================================
  // COMBOS (editá nombres, precios y descripciones)
  // =========================================================

  const COMBOS = [
// ⚠️ EDITÁ TUS COMBOS ACÁ (nombre, precio, precio anterior, descripción)
  const COMBOS = [
    {
      icon: "🎮",
      name: "Combo Gamer PS2",
      description: "3 juegos de PS2 a elección del catálogo. ¡Ideal para arrancar tu colección!",
      price: 5000,
      oldPrice: 7500
    },
    {
      icon: "🏎️",
      name: "Pack Carreras",
      description: "2 juegos de carreras de PS2 a elección: Need for Speed, Burnout, Gran Turismo y más.",
      price: 3500,
      oldPrice: 5000
    },
    {
      icon: "👨‍👩‍👧‍👦",
      name: "Pack Familia",
      description: "2 juegos multijug/familiar de PS2 a elección: Mario-style, kart, deportes y más.",
      price: 3500,
      oldPrice: 5000
    },
    {
      icon: "🕹️",
      name: "Combo Switch",
      description: "2 juegos de Switch a elección del catálogo. ¡El mejor precio!",
      price: 80000,
      oldPrice: 95000
    }
  ];

  // =========================================================
  // PLATAFORMAS "PRÓXIMAMENTE"
  // =========================================================

  const platformInfo = {
    ps4: { icon: "🎮", name: "PS4" },
    ps5: { icon: "🎮", name: "PS5" }
  };


  // =========================================================
  // ELEMENTOS DE LA PÁGINA
  // =========================================================

  const productsGrid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const platformComing = document.getElementById("platformComing");
  const offersGrid = document.getElementById("offersGrid");
  const combosGrid = document.getElementById("combosGrid");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const filterButtons = document.querySelectorAll(".filter-button");

  const cartButton = document.getElementById("cartButton");
  const cartPanel = document.getElementById("cartPanel");
  const closeCartButton = document.getElementById("closeCartButton");
  const overlay = document.getElementById("overlay");
  const cartItems = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  const checkoutButton = document.getElementById("checkoutButton");
  const toast = document.getElementById("toast");

  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = new Date().getFullYear();


  // =========================================================
  // ESTADO
  // =========================================================

  let currentCategory = "ps2";
  let currentSearch = "";

  // Carrito guardado en el navegador (localStorage)
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("gamezone_cart")) || [];
  } catch (e) {
    cart = [];
  }


  // =========================================================
  // UTILIDADES
  // =========================================================

  function formatPrice(price) {
    return "$" + Number(price).toLocaleString("es-AR");
  }

  function getGameById(id) {
    return games.find(g => g.id === id) || switchGames.find(g => g.id === id);
  }

  function saveCart() {
    localStorage.setItem("gamezone_cart", JSON.stringify(cart));
  }


  // =========================================================
  // TOAST (aviso flotante)
  // =========================================================

  let toastTimer = null;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("mostrar");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("mostrar"), 2200);
  }


  // =========================================================
  // TARJETA DE PRODUCTO
  // =========================================================

  function createProductCard(game) {

    let badges = "";

    if (game.offerPrice) {
      badges += `<span class="product-badge offer-badge">🔥 OFERTA ${game.discount}% OFF</span>`;
    }
    if (game.category === "destacado") {
      badges += `<span class="product-badge featured-badge">⭐ DESTACADO</span>`;
    }
    if (game.top) {
      badges += `<span class="product-badge top-badge">🏆 TOP</span>`;
    }

    const priceHTML = game.offerPrice
      ? `<div class="product-price">
           <span class="old-price">${formatPrice(game.price)}</span>
           <strong>${formatPrice(game.offerPrice)}</strong>
         </div>`
      : `<div class="product-price"><strong>${formatPrice(game.price)}</strong></div>`;

    const imageHTML = game.image
      ? `<img src="${game.image}" alt="${game.name}" class="product-cover" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\'product-placeholder\'><span>🎮</span><small>${game.name}</small></div>'">`
      : `<div class="product-placeholder"><span>🎮</span><small>${game.name}</small></div>`;

    return `
      <article class="product-card">
        <div class="product-image">
          <div class="product-badges">${badges}</div>
          ${imageHTML}
        </div>
        <div class="product-info">
          <span class="product-genre">${game.genre}</span>
          <h3>${game.name}</h3>
          <div class="product-bottom">
            ${priceHTML}
            <button type="button" class="add-cart-button" data-id="${game.id}">
              🛒 Agregar
            </button>
          </div>
        </div>
      </article>
    `;
  }


  // =========================================================
  // MOSTRAR PRODUCTOS (según categoría)
  // =========================================================

  function renderProducts() {

    // PS4 y PS5 → Próximamente
    if (platformInfo[currentCategory]) {
      productsGrid.innerHTML = "";
      emptyState.hidden = true;
      const info = platformInfo[currentCategory];
      platformComing.innerHTML = `
        <div class="platform-coming-icon">${info.icon}</div>
        <h3>${info.name}</h3>
        <p>Estamos preparando el catálogo de esta plataforma.<br>¡Muy pronto vas a poder comprar acá!</p>
        <span class="coming-badge">🚀 Próximamente</span>
      `;
      platformComing.hidden = false;
      return;
    }

    platformComing.hidden = true;

    // Elegir el catálogo según la sección
    let catalogo = games;
    if (currentCategory === "switch") {
      catalogo = switchGames;
    }

    const search = currentSearch.trim().toLowerCase();

    const filtered = catalogo.filter(game => {
      const matchesCategory =
        currentCategory === "ps2" ||          // PS2 muestra TODO el catálogo PS2
        currentCategory === "switch" ||
        game.category === currentCategory;

      const matchesSearch =
        game.name.toLowerCase().includes(search) ||
        game.genre.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;
    productsGrid.innerHTML = filtered.map(createProductCard).join("");
  }


  // =========================================================
  // MOSTRAR OFERTAS
  // =========================================================

  function renderOffers() {
    const ofertas = games.filter(g => g.offerPrice);
    offersGrid.innerHTML = ofertas.map(createProductCard).join("");
  }


  // =========================================================
  // MOSTRAR COMBOS
  // =========================================================

  function renderCombos() {
    combosGrid.innerHTML = COMBOS.map((c, i) => `
      <article class="combo-card">
        <div class="combo-icon">${c.icon}</div>
        <h3>${c.name}</h3>
        <p>${c.description}</p>
        <div class="combo-prices">
          <span class="old-price">${formatPrice(c.oldPrice)}</span>
          <strong>${formatPrice(c.price)}</strong>
        </div>
        <button type="button" class="combo-button" data-combo="${i}">
          📱 Pedir por WhatsApp
        </button>
      </article>
    `).join("");

    combosGrid.querySelectorAll(".combo-button").forEach(btn => {
      btn.addEventListener("click", () => {
        const c = COMBOS[Number(btn.dataset.combo)];
        const mensaje = `Hola GameZone! 👋 Quiero comprar el *${c.name}* (${formatPrice(c.price)}).`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, "_blank");
      });
    });
  }


  // =========================================================
  // CARRITO
  // =========================================================

  function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, qty: 1 });
    }
    saveCart();
    renderCart();
    showToast("✅ ¡Agregado al carrito!");
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
  }

  function renderCart() {
    // Cantidad total
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCount.textContent = totalQty;

    if (cart.length === 0) {
      cartItems.innerHTML = "";
      cartEmpty.style.display = "flex";
      cartTotal.textContent = "$0";
      return;
    }

    cartEmpty.style.display = "none";

    let total = 0;

    cartItems.innerHTML = cart.map(item => {
      const game = getGameById(item.id);
      if (!game) return "";
      const precio = game.offerPrice || game.price;
      total += precio * item.qty;
      return `
        <div class="cart-item">
          ${game.image
            ? `<img src="${game.image}" alt="${game.name}" class="cart-item-image">`
            : `<div class="cart-item-image cart-item-placeholder">🎮</div>`}
          <div class="cart-item-info">
            <h3>${game.name}</h3>
            <p>${formatPrice(precio)} x${item.qty}</p>
          </div>
          <button type="button" class="remove-item" data-remove="${item.id}" aria-label="Quitar">🗑</button>
        </div>
      `;
    }).join("");

    cartTotal.textContent = formatPrice(total);

    cartItems.querySelectorAll(".remove-item").forEach(btn => {
      btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.remove)));
    });
  }

  function openCart() {
    cartPanel.classList.add("open");
    cartPanel.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
  }

  function closeCart() {
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
  }

  // Botón "Continuar con la compra" → arma el pedido por WhatsApp
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("🛒 Tu carrito está vacío");
      return;
    }

    let total = 0;
    const lineas = cart.map(item => {
      const game = getGameById(item.id);
      const precio = game.offerPrice || game.price;
      total += precio * item.qty;
      return `• ${game.name} x${item.qty} — ${formatPrice(precio * item.qty)}`;
    });

    const mensaje =
      `Hola GameZone! 👋 Quiero comprar:\n\n${lineas.join("\n")}\n\n*Total: ${formatPrice(total)}*`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, "_blank");
  });


  // =========================================================
  // EVENTOS: filtros, búsqueda, carrito
  // =========================================================

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  function doSearch() {
    currentSearch = searchInput.value;
    renderProducts();
  }

  searchButton.addEventListener("click", doSearch);
  searchInput.addEventListener("input", doSearch);
  searchInput.addEventListener("keyup", e => {
    if (e.key === "Enter") doSearch();
  });

  // Agregar al carrito (delegación de eventos)
  document.addEventListener("click", e => {
    const btn = e.target.closest(".add-cart-button");
    if (btn) {
      addToCart(Number(btn.dataset.id));
    }
  });

  cartButton.addEventListener("click", openCart);
  closeCartButton.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeCart();
  });


  // =========================================================
  // ARRANQUE
  // =========================================================

  renderProducts();
  renderOffers();
  renderCombos();
  renderCart();

});
