"use strict";

document.addEventListener("DOMContentLoaded", () => {

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
    {id:76,name:"Prince of Persia: The Two Thrones",category:"normal",price:2000,genre:"Aventura",top:false,image:"img/pop-two-thrones.jpg"},
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

  const platformInfo = {
    switch: { icon: "🕹️", name: "Nintendo Switch" },
    ps4: { icon: "🎮", name: "PlayStation 4" },
    ps5: { icon: "🎮", name: "PlayStation 5" }
  };

  const productsGrid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const platformComing = document.getElementById("platformComing");
  const offersGrid = document.getElementById("offersGrid");
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
  const currentYear = document.getElementById("currentYear");

  let currentCategory = "ps2";
  let currentSearch = "";
  let cart = [];

  function formatPrice(price) { return "$" + Number(price).toLocaleString("es-AR"); }
  function escapeHTML(text) {
    return String(text).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  }

  function createProductCard(game) {
    const finalPrice = game.offerPrice || game.price;
    let badges = "";
    if (game.category === "oferta") badges += `<span class="product-badge offer-badge">🔥 OFERTA ${game.discount || ''}% OFF</span>`;
    if (game.category === "destacado") badges += `<span class="product-badge featured-badge">⭐ DESTACADO</span>`;
    if (game.top) badges += `<span class="product-badge top-badge">🏆 TOP</span>`;
    
    const priceHTML = game.offerPrice
      ? `<div class="product-price"><span class="old-price">${formatPrice(game.price)}</span><strong>${formatPrice(game.offerPrice)}</strong></div>`
      : `<div class="product-price"><strong>${formatPrice(game.price)}</strong></div>`;

    const imageHTML = game.image
      ? `<img src="${game.image}" alt="${escapeHTML(game.name)}" class="product-cover" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="product-placeholder" style="display:none;"><span>🎮</span><small>PS2</small></div>`
      : `<div class="product-placeholder"><span>🎮</span><small>PS2</small></div>`;

    return `<article class="product-card"><div class="product-image"><div class="product-badges">${badges}</div>${imageHTML}</div><div class="product-info"><span class="product-genre">${escapeHTML(game.genre||'PS2')}</span><h3 class="product-title">${escapeHTML(game.name)}</h3><div class="product-bottom">${priceHTML}<button type="button" class="add-cart-button" data-id="${game.id}">🛒 Agregar</button></div></div></article>`;
  }

  // --- LOGICA CORREGIDA ---
  function getFilteredGames() {
    let filtered = games;

    // PS2 = muestra TODO (porque todos son de PS2)
    if (currentCategory === "ps2") {
      filtered = games;
    } else if (currentCategory === "destacado") {
      filtered = games.filter(g => g.category === "destacado");
    } else if (currentCategory === "oferta") {
      filtered = games.filter(g => g.category === "oferta");
    } else if (["switch","ps4","ps5"].includes(currentCategory)) {
      return []; // se maneja como proximamente
    }

    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(g => 
        g.name.toLowerCase().includes(q) ||
        (g.genre && g.genre.toLowerCase().includes(q)) ||
        g.category.toLowerCase().includes(q)
      );
    }
    return filtered;
  }

  function renderProducts() {
    const filtered = getFilteredGames();

    if (["switch","ps4","ps5"].includes(currentCategory)) {
      const info = platformInfo[currentCategory];
      productsGrid.innerHTML = "";
      emptyState.hidden = true;
      platformComing.hidden = false;
      platformComing.innerHTML = `<div class="coming-card"><div style="font-size:50px">${info.icon}</div><h3>${info.name} — Próximamente</h3><p>Estamos cargando el catálogo de ${info.name}. ¡Volvé pronto!</p><button class="secondary-button" onclick="document.querySelector('[data-category=ps2]').click()">Volver a PS2</button></div>`;
      return;
    }

    platformComing.hidden = true;

    if (filtered.length === 0) {
      productsGrid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;
    productsGrid.innerHTML = filtered.map(createProductCard).join("");
  }

  function renderOffers() {
    const ofertas = games.filter(g => g.category === "oferta");
    if (offersGrid) offersGrid.innerHTML = ofertas.map(createProductCard).join("");
  }

  function updateCartUI() {
    cartCount.textContent = cart.reduce((a,b)=>a+b.qty,0);
    cartItems.innerHTML = cart.map(item => {
      const game = games.find(g=>g.id===item.id);
      return `<div class="cart-item"><span>${escapeHTML(game.name)}</span><div><button data-dec="${item.id}">-</button> ${item.qty} <button data-inc="${item.id}">+</button> <button data-del="${item.id}">x</button></div></div>`;
    }).join("");
    const total = cart.reduce((sum,i)=>{
      const g=games.find(x=>x.id===i.id);
      return sum + (g.offerPrice||g.price)*i.qty;
    },0);
    cartTotal.textContent = formatPrice(total);
    cartEmpty.style.display = cart.length ? "none" : "block";
  }

  function addToCart(id) {
    const exist = cart.find(c=>c.id===id);
    if (exist) exist.qty++;
    else cart.push({id,qty:1});
    updateCartUI();
  }

  // EVENTOS
  filterButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      filterButtons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  searchInput.addEventListener("input",(e)=>{
    currentSearch = e.target.value.trim();
    renderProducts();
  });
  searchButton.addEventListener("click",()=>{
    currentSearch = searchInput.value.trim();
    renderProducts();
  });

  productsGrid.addEventListener("click",(e)=>{
    const btn = e.target.closest(".add-cart-button");
    if (btn) addToCart(Number(btn.dataset.id));
  });
  offersGrid.addEventListener("click",(e)=>{
    const btn = e.target.closest(".add-cart-button");
    if (btn) addToCart(Number(btn.dataset.id));
  });

  cartItems.addEventListener("click",(e)=>{
    if (e.target.dataset.inc) addToCart(Number(e.target.dataset.inc));
    if (e.target.dataset.dec) {
      const item = cart.find(c=>c.id==e.target.dataset.dec);
      if (item) { item.qty--; if (item.qty<=0) cart=cart.filter(c=>c.id!=item.id); }
      updateCartUI();
    }
    if (e.target.dataset.del) { cart=cart.filter(c=>c.id!=e.target.dataset.del); updateCartUI(); }
  });

  cartButton.addEventListener("click",()=>{ cartPanel.classList.add("open"); overlay.hidden=false; });
  closeCartButton.addEventListener("click",()=>{ cartPanel.classList.remove("open"); overlay.hidden=true; });
  overlay.addEventListener("click",()=>{ cartPanel.classList.remove("open"); overlay.hidden=true; });

  checkoutButton.addEventListener("click",()=>{
    if (!cart.length) return;
    let msg = "Hola GameZone! Quiero pedir:\n";
    cart.forEach(i=>{
      const g=games.find(x=>x.id===i.id);
      msg+=`- ${g.name} x${i.qty} = ${formatPrice((g.offerPrice||g.price)*i.qty)}\n`;
    });
    msg+=`Total: ${cartTotal.textContent}`;
    window.open("https://wa.me/5490000000000?text="+encodeURIComponent(msg), "_blank");
  });

  if (currentYear) currentYear.textContent = new Date().getFullYear();

  renderProducts();
  renderOffers();
  updateCartUI();
});
