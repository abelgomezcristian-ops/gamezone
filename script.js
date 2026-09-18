"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // ================== PONÉ TU NÚMERO ACÁ ==================
  const WHATSAPP_NUMBER = "TU_NUMERO_AQUI"; // Ej: 5493794123456
  // ======================================================

  const games = [
    {id:1,name:"Grand Theft Auto: San Andreas",category:"destacado",genre:"Mundo Abierto",top:true,image:"img/gta-san-andreas.jpg"},
    {id:2,name:"God of War",category:"destacado",genre:"Hack and Slash",top:true,image:"img/god-of-war.jpg"},
    {id:3,name:"God of War II",category:"destacado",genre:"Hack and Slash",top:true,image:"img/god-of-warII.jpg"},
    {id:4,name:"Shadow of the Colossus",category:"destacado",genre:"Aventura",top:true,image:"img/shadow-of-the-colossus.jpg"},
    {id:5,name:"Metal Gear Solid 3: Snake Eater",category:"destacado",genre:"Sigilo",top:false,image:"img/metal-gear-solid-3.jpg"},
    {id:6,name:"Gran Turismo 4",category:"destacado",genre:"Carreras",top:true,image:"img/gran-turismo-4.jpg"},
    {id:7,name:"Final Fantasy X",category:"destacado",genre:"RPG",top:true,image:"img/final-fantasy-x.jpg"},
    {id:8,name:"Resident Evil 4",category:"destacado",genre:"Survival Horror",top:true,image:"img/resident-evil-4.jpg"},
    {id:9,name:"Grand Theft Auto: Vice City",category:"destacado",genre:"Mundo Abierto",top:true,image:"img/gta-vice-city.jpg"},
    {id:10,name:"Kingdom Hearts II",category:"destacado",genre:"RPG Acción",top:true,image:"img/kingdom-hearts-2.jpg"},
    {id:11,name:"Devil May Cry 3: Dante's Awakening",category:"destacado",genre:"Hack and Slash",top:false,image:"img/devil-may-cry-3.jpg"},
    {id:12,name:"Dragon Ball Z: Budokai Tenkaichi 3",category:"destacado",genre:"Lucha",top:true,image:"img/dragon-ball-z-budokai-tenkaichi-3.jpg"},
    {id:13,name:"Gran Turismo 3: A-Spec",category:"destacado",genre:"Carreras",top:false,image:"img/gran-turismo-3.jpg"},
    {id:14,name:"Tekken 5",category:"destacado",genre:"Lucha",top:true,image:"img/tekken-5.jpg"},
    {id:15,name:"Okami",category:"destacado",genre:"Aventura",top:false,image:"img/okami.jpg"},
    {id:16,name:"Ratchet & Clank: Up Your Arsenal",category:"destacado",genre:"Plataformas Shooter",top:false,image:"img/ratchet-clank-up-your-arsenal.jpg"},
    {id:17,name:"Jak and Daxter: The Precursor Legacy",category:"destacado",genre:"Plataformas",top:false,image:"img/jak-and-daxter.jpg"},
    {id:18,name:"Sly Cooper and the Thievius Raccoonus",category:"destacado",genre:"Plataformas Sigilo",top:false,image:"img/sly-cooper-1.jpg"},
    {id:19,name:"Sly 2: Band of Thieves",category:"destacado",genre:"Plataformas Sigilo",top:false,image:"img/sly-cooper-2.jpg"},
    {id:20,name:"Sly 3: Honor Among Thieves",category:"destacado",genre:"Plataformas Sigilo",top:false,image:"img/sly-cooper-3.jpg"},
    {id:21,name:"Kingdom Hearts",category:"destacado",genre:"RPG Acción",top:false,image:"img/kingdom-hearts-1.jpg"},
    {id:22,name:"Persona 4",category:"destacado",genre:"RPG",top:false,image:"img/persona-4.jpg"},
    {id:23,name:"Persona 3 FES",category:"destacado",genre:"RPG",top:false,image:"img/persona-3-fes.jpg"},
    {id:24,name:"Final Fantasy XII",category:"destacado",genre:"RPG",top:false,image:"img/final-fantasy-xii.jpg"},
    {id:25,name:"Dragon Quest VIII: Journey of the Cursed King",category:"destacado",genre:"RPG",top:false,image:"img/dragon-quest-viii.jpg"},
    {id:26,name:"Ico",category:"destacado",genre:"Aventura Puzzle",top:false,image:"img/ico.jpg"},
    {id:27,name:"Silent Hill 2",category:"destacado",genre:"Survival Horror",top:false,image:"img/silent-hill-2.jpg"},
    {id:28,name:"Guitar Hero II",category:"destacado",genre:"Musical",top:false,image:"img/guitar-hero-2.jpg"},
    {id:29,name:"Guitar Hero III: Legends of Rock",category:"destacado",genre:"Musical",top:true,image:"img/guitar-hero-3.jpg"},
    {id:30,name:"Simpsons: Hit & Run",category:"destacado",genre:"Mundo Abierto",top:true,image:"img/simpsons-hit-and-run.jpg"},
    {id:31,name:"Ratchet & Clank",category:"destacado",genre:"Plataformas",top:false,image:"img/ratchet-clank-1.jpg"},
    {id:32,name:"Jak II",category:"destacado",genre:"Plataformas Acción",top:false,image:"img/jak-2.jpg"},
    {id:33,name:"Jak 3",category:"destacado",genre:"Plataformas Acción",top:false,image:"img/jak-3.jpg"},
    {id:34,name:"Devil May Cry",category:"destacado",genre:"Hack and Slash",top:false,image:"img/devil-may-cry-1.jpg"},
    {id:35,name:"Silent Hill 3",category:"destacado",genre:"Survival Horror",top:false,image:"img/silent-hill-3.jpg"},
    {id:36,name:"Grand Theft Auto III",category:"oferta",genre:"Mundo Abierto",top:true,image:"img/gta-3.jpg"},
    {id:37,name:"Bully",category:"oferta",genre:"Mundo Abierto",top:true,image:"img/bully.jpg"},
    {id:38,name:"Marvel vs. Capcom 2: New Age of Heroes",category:"oferta",genre:"Lucha",top:true,image:"img/marvel-vs-capcom-2.jpg"},
    {id:39,name:"SoulCalibur III",category:"oferta",genre:"Lucha",top:false,image:"img/soulcalibur-3.jpg"},
    {id:40,name:"Need for Speed: Most Wanted",category:"normal",genre:"Carreras",top:true,image:"img/nfs-most-wanted.jpg"},
    {id:41,name:"Need for Speed: Underground 2",category:"normal",genre:"Carreras",top:true,image:"img/nfs-underground-2.jpg"},
    {id:42,name:"Need for Speed: Underground",category:"normal",genre:"Carreras",top:false,image:"img/nfs-underground-1.jpg"},
    {id:43,name:"Midnight Club 3: DUB Edition",category:"normal",genre:"Carreras",top:false,image:"img/midnight-club-3.jpg"},
    {id:44,name:"Burnout 3: Takedown",category:"normal",genre:"Carreras",top:true,image:"img/burnout-3.jpg"},
    {id:45,name:"Burnout Revenge",category:"normal",genre:"Carreras",top:false,image:"img/burnout-revenge.jpg"},
    {id:46,name:"Colin McRae Rally 2005",category:"normal",genre:"Carreras",top:false,image:"img/colin-mcrae-rally-2005.jpg"},
    {id:47,name:"Tourist Trophy",category:"normal",genre:"Carreras Motos",top:false,image:"img/tourist-trophy.jpg"},
    {id:48,name:"Midnight Club II",category:"normal",genre:"Carreras",top:false,image:"img/midnight-club-2.jpg"},
    {id:49,name:"Pro Evolution Soccer 6",category:"normal",genre:"Deportes",top:true,image:"img/pes-6.jpg"},
    {id:50,name:"FIFA Street 2",category:"normal",genre:"Deportes",top:false,image:"img/fifa-street-2.jpg"},
    {id:51,name:"NBA Street V3",category:"normal",genre:"Deportes",top:false,image:"img/nba-street-v3.jpg"},
    {id:52,name:"Tony Hawk's Pro Skater 3",category:"normal",genre:"Skate",top:false,image:"img/tony-hawk-pro-skater-3.jpg"},
    {id:53,name:"SSX 3",category:"normal",genre:"Snowboard",top:false,image:"img/ssx-3.jpg"},
    {id:54,name:"WWE SmackDown! vs. Raw 2006",category:"normal",genre:"Lucha Deportes",top:true,image:"img/wwe-smackdown-vs-raw-2006.jpg"},
    {id:55,name:"Def Jam: Fight For NY",category:"normal",genre:"Lucha",top:false,image:"img/def-jam-fight-for-ny.jpg"},
    {id:56,name:"Mortal Kombat: Shaolin Monks",category:"normal",genre:"Aventura Lucha",top:true,image:"img/mk-shaolin-monks.jpg"},
    {id:57,name:"Mortal Kombat: Armageddon",category:"normal",genre:"Lucha",top:false,image:"img/mk-armageddon.jpg"},
    {id:58,name:"Mortal Kombat: Deception",category:"normal",genre:"Lucha",top:false,image:"img/mk-deception.jpg"},
    {id:59,name:"SoulCalibur II",category:"normal",genre:"Lucha",top:false,image:"img/soulcalibur-2.jpg"},
    {id:60,name:"Tekken Tag Tournament",category:"normal",genre:"Lucha",top:false,image:"img/tekken-tag-tournament.jpg"},
    {id:61,name:"Virtua Fighter 4: Evolution",category:"normal",genre:"Lucha",top:false,image:"img/virtua-fighter-4-evolution.jpg"},
    {id:62,name:"Street Fighter Anniversary Collection",category:"normal",genre:"Lucha",top:false,image:"img/street-fighter-anniversary-collection.jpg"},
    {id:63,name:"Dragon Ball Z: Budokai 3",category:"oferta",genre:"Lucha",top:true,image:"img/dbz-budokai-3.jpg"},
    {id:64,name:"Dragon Ball Z: Budokai 2",category:"normal",genre:"Lucha",top:false,image:"img/dbz-budokai-2.jpg"},
    {id:65,name:"Naruto: Ultimate Ninja 5",category:"normal",genre:"Lucha",top:false,image:"img/naruto-ultimate-ninja-5.jpg"},
    {id:66,name:"Naruto: Ultimate Ninja 4",category:"normal",genre:"Lucha",top:false,image:"img/naruto-ultimate-ninja-4.jpg"},
    {id:67,name:"Black",category:"normal",genre:"Shooter",top:false,image:"img/black.jpg"},
    {id:68,name:"Call of Duty 3",category:"normal",genre:"Shooter",top:false,image:"img/call-of-duty-3.jpg"},
    {id:69,name:"Medal of Honor: Frontline",category:"normal",genre:"Shooter",top:false,image:"img/medal-of-honor-frontline.jpg"},
    {id:70,name:"TimeSplitters 2",category:"normal",genre:"Shooter",top:false,image:"img/timesplitters-2.jpg"},
    {id:71,name:"Killzone",category:"normal",genre:"Shooter",top:false,image:"img/killzone.jpg"},
    {id:72,name:"SOCOM II: U.S. Navy SEALs",category:"normal",genre:"Shooter Táctico",top:false,image:"img/socom-2.jpg"},
    {id:73,name:"Sniper Elite",category:"normal",genre:"Shooter Sigilo",top:false,image:"img/sniper-elite.jpg"},
    {id:74,name:"Prince of Persia: The Sands of Time",category:"oferta",genre:"Aventura",top:true,image:"img/pop-sands-of-time.jpg"},
    {id:75,name:"Prince of Persia: Warrior Within",category:"normal",genre:"Aventura Acción",top:false,image:"img/pop-warrior-within.jpg"},
    {id:76,name:"Prince of Persia: The Two Thrones",category:"normal",genre:"Aventura",top:false,image:"img/pop-two-thrones.jpg"},
    {id:77,name:"Beyond Good & Evil",category:"oferta",genre:"Aventura",top:false,image:"img/beyond-good-and-evil.jpg"},
    {id:78,name:"Psychonauts",category:"normal",genre:"Plataformas",top:false,image:""},
    {id:79,name:"Katamari Damacy",category:"normal",genre:"Puzzle",top:false,image:""},
    {id:80,name:"Viewtiful Joe",category:"normal",genre:"Beat em Up",top:false,image:""},
    {id:81,name:"God Hand",category:"normal",genre:"Beat em Up",top:false,image:""},
    {id:82,name:"The Warriors",category:"normal",genre:"Beat em Up",top:false,image:""},
    {id:83,name:"Scarface: The World Is Yours",category:"normal",genre:"Mundo Abierto",top:false,image:""},
    {id:84,name:"The Godfather: The Game",category:"normal",genre:"Mundo Abierto",top:false,image:""},
    {id:85,name:"Manhunt",category:"normal",genre:"Sigilo Horror",top:false,image:""},
    {id:86,name:"Hitman: Blood Money",category:"oferta",genre:"Sigilo",top:false,image:""},
    {id:87,name:"Splinter Cell: Chaos Theory",category:"normal",genre:"Sigilo",top:false,image:""},
    {id:88,name:"Metal Slug Anthology",category:"normal",genre:"Arcade",top:false,image:""},
    {id:89,name:"Contra: Shattered Soldier",category:"normal",genre:"Run and Gun",top:false,image:""},
    {id:90,name:"Gradius V",category:"normal",genre:"Naves",top:false,image:""},
    {id:91,name:"Resident Evil: Code Veronica X",category:"normal",genre:"Survival Horror",top:false,image:""},
    {id:92,name:"Fatal Frame II: Crimson Butterfly",category:"normal",genre:"Survival Horror",top:false,image:""},
    {id:93,name:"Onimusha 3: Demon Siege",category:"normal",genre:"Acción Aventura",top:false,image:""},
    {id:94,name:"Onimusha: Warlords",category:"normal",genre:"Acción Aventura",top:false,image:""},
    {id:95,name:"Shin Megami Tensei: Nocturne",category:"normal",genre:"RPG",top:false,image:""},
    {id:96,name:"Xenosaga Episode I: Der Wille zur Macht",category:"normal",genre:"RPG",top:false,image:""},
    {id:97,name:"Champions of Norrath",category:"normal",genre:"RPG Acción",top:false,image:""},
    {id:98,name:"Baldur's Gate: Dark Alliance",category:"oferta",genre:"RPG Acción",top:false,image:""},
    {id:99,name:"Kingdom Hearts: Re Chain of Memories",category:"normal",genre:"RPG",top:false,image:""},
    {id:100,name:"Lego Star Wars II: The Original Trilogy",category:"normal",genre:"Aventura Plataformas",top:true,image:""},
    {id:101,name:"Spider-Man 2",category:"oferta",genre:"Acción Mundo Abierto",top:true,image:""},
    {id:102,name:"Hulk: Ultimate Destruction",category:"normal",genre:"Acción",top:false,image:""},
    {id:103,name:"Ben 10: Protector of Earth",category:"normal",genre:"Aventura",top:false,image:""},
    {id:104,name:"Crash Bandicoot: The Wrath of Cortex",category:"normal",genre:"Plataformas",top:true,image:""},
    {id:105,name:"Crash Nitro Kart",category:"oferta",genre:"Carreras",top:false,image:""},
    {id:106,name:"Spyro: Enter the Dragonfly",category:"normal",genre:"Plataformas",top:false,image:""},
    {id:107,name:"Rayman 3: Hoodlum Havoc",category:"normal",genre:"Plataformas",top:false,image:""},
    {id:108,name:"Klonoa 2: Lunatea's Veil",category:"normal",genre:"Plataformas",top:false,image:""},
    {id:109,name:"Downhill Domination",category:"normal",genre:"Carreras",top:false,image:""},
    {id:110,name:"FIFA 14",category:"oferta",genre:"Deportes",top:true,image:""},
    {id:111,name:"Winning Eleven 10",category:"oferta",genre:"Deportes",top:true,image:""},
    {id:112,name:"Karaoke Revolution Party",category:"normal",genre:"Musical",top:false,image:""},
    {id:113,name:"SingStar Pop",category:"normal",genre:"Musical",top:false,image:""},
    {id:114,name:"Ratchet & Clank: Deadlocked",category:"normal",genre:"Plataformas Shooter",top:false,image:""},
    {id:115,name:"Urban Reign",category:"normal",genre:"Lucha",top:false,image:""},
    {id:116,name:"The Punisher",category:"normal",genre:"Acción",top:false,image:""},
    {id:117,name:"True Crime: Streets of LA",category:"normal",genre:"Mundo Abierto",top:false,image:""},
    {id:118,name:"FlatOut 2",category:"oferta",genre:"Carreras",top:false,image:""},
    {id:119,name:"Corvette",category:"normal",genre:"Carreras",top:false,image:""},
    {id:120,name:"007: Nightfire",category:"normal",genre:"Shooter",top:false,image:""}
  ];

  const platformInfo = { switch:{icon:"🕹️",name:"Nintendo Switch"}, ps4:{icon:"🎮",name:"PlayStation 4"}, ps5:{icon:"🎮",name:"PlayStation 5"} };
  const productsGrid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const platformComing = document.getElementById("platformComing");
  const offersGrid = document.getElementById("offersGrid");
  const searchInput = document.getElementById("searchInput");
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

  function escapeHTML(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}

  function createProductCard(game){
    let badges="";
    if(game.category==="oferta") badges+=`<span class="product-badge offer-badge">🔥 OFERTA</span>`;
    if(game.category==="destacado") badges+=`<span class="product-badge featured-badge">⭐ DESTACADO</span>`;
    if(game.top) badges+=`<span class="product-badge top-badge">🏆 TOP</span>`;
    const img = game.image? `<img src="${game.image}" alt="${escapeHTML(game.name)}" class="product-cover" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="product-placeholder" style="display:none"><span>🎮</span><small>PS2</small></div>` : `<div class="product-placeholder"><span>🎮</span><small>PS2</small></div>`;
    return `<article class="product-card" data-aos="fade-up"><div class="product-image"><div class="product-badges">${badges}</div>${img}</div><div class="product-info"><span class="product-genre">${escapeHTML(game.genre||'PS2')}</span><h3 class="product-title">${escapeHTML(game.name)}</h3><div class="product-bottom"><span style="font-size:11px;color:#9da3b5">Consultar stock</span><button class="add-cart-button" data-id="${game.id}">Consultar</button></div></div></article>`;
  }

  function getFiltered(){
    let f=games;
    if(currentCategory==="destacado") f=games.filter(g=>g.category==="destacado");
    else if(currentCategory==="oferta") f=games.filter(g=>g.category==="oferta");
    else if(["switch","ps4","ps5"].includes(currentCategory)) return [];
    if(currentSearch){ const q=currentSearch.toLowerCase(); f=f.filter(g=>g.name.toLowerCase().includes(q) || (g.genre&&g.genre.toLowerCase().includes(q))); }
    return f;
  }

  function renderProducts(){
    const filtered=getFiltered();
    if(["switch","ps4","ps5"].includes(currentCategory)){
      const info=platformInfo[currentCategory];
      productsGrid.innerHTML=""; emptyState.hidden=true; platformComing.hidden=false;
      platformComing.innerHTML=`<div><div style="font-size:50px">${info.icon}</div><h3>${info.name} — Próximamente</h3><p>Estamos cargando el catálogo de ${info.name}.</p><button class="secondary-button" onclick="document.querySelector('[data-category=ps2]').click()">Volver a PS2</button></div>`;
      return;
    }
    platformComing.hidden=true;
    if(filtered.length===0){productsGrid.innerHTML=""; emptyState.hidden=false; return;}
    emptyState.hidden=true; productsGrid.innerHTML=filtered.map(createProductCard).join(""); if(window.AOS) AOS.refresh();
  }

  function renderOffers(){ if(offersGrid){ offersGrid.innerHTML=games.filter(g=>g.category==="oferta").map(createProductCard).join(""); } }

  function updateCartUI(){
    cartCount.textContent=cart.length;
    cartItems.innerHTML=cart.map(id=>{ const g=games.find(x=>x.id===id); return `<div class="cart-item"><span>${escapeHTML(g.name)}</span><button data-del="${id}" style="background:#222;border:0;color:#fff;width:24px;height:24px;border-radius:50%">x</button></div>`; }).join("");
    cartTotal.textContent=cart.length + " juegos";
    cartEmpty.style.display=cart.length?"none":"block";
  }

  function addToCart(id){
    if(!cart.includes(id)) cart.push(id);
    updateCartUI();
    cartPanel.classList.add("open"); overlay.hidden=false;
  }

  filterButtons.forEach(btn=>{ btn.addEventListener("click",()=>{ filterButtons.forEach(b=>b.classList.remove("active")); btn.classList.add("active"); currentCategory=btn.dataset.category; renderProducts(); }); });
  searchInput.addEventListener("input",(e)=>{ currentSearch=e.target.value.trim(); renderProducts(); });
  document.getElementById("searchButton").addEventListener("click",()=>{ currentSearch=searchInput.value.trim(); renderProducts(); });
  productsGrid.addEventListener("click",(e)=>{ const b=e.target.closest(".add-cart-button"); if(b) addToCart(Number(b.dataset.id)); });
  if(offersGrid) offersGrid.addEventListener("click",(e)=>{ const b=e.target.closest(".add-cart-button"); if(b) addToCart(Number(b.dataset.id)); });
  cartItems.addEventListener("click",(e)=>{ if(e.target.dataset.del){ cart=cart.filter(x=>x!=e.target.dataset.del); updateCartUI(); } });
  cartButton.addEventListener("click",()=>{ cartPanel.classList.add("open"); overlay.hidden=false; });
  closeCartButton.addEventListener("click",()=>{ cartPanel.classList.remove("open"); overlay.hidden=true; });
  overlay.addEventListener("click",()=>{ cartPanel.classList.remove("open"); overlay.hidden=true; });
  checkoutButton.addEventListener("click",()=>{
    if(!cart.length){ alert("Agregá juegos primero"); return; }
    let msg="Hola GameZone Corrientes! 👋 Quiero consultar por estos juegos:\n\n";
    cart.forEach(id=>{ const g=games.find(x=>x.id===id); msg+=`• ${g.name}\n`; });
    msg+="\n¿Me pasás precio? ¿Hay combos? 🎮";
    if(WHATSAPP_NUMBER==="TU_NUMERO_AQUI"){ alert("⚠️ Cambiá TU_NUMERO_AQUI por tu número en la línea 3 del script.js. Ej: 5493794123456"); return; }
    window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),"_blank");
  });
  if(currentYear) currentYear.textContent=new Date().getFullYear();
  renderProducts(); renderOffers(); updateCartUI();
});
