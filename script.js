"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // =========================================================
  // GAMEZONE — CATÁLOGO PS2
  // =========================================================

  const games = [
    {id:1,name:"Grand Theft Auto: San Andreas",category:"destacado",price:2500,genre:"Mundo Abierto",top:true,image:"img/gta-san-andreas.jpg"},
    {id:2,name:"God of War",category:"destacado",price:2500,genre:"Hack and Slash",top:true},
    {id:3,name:"God of War II",category:"destacado",price:2500,genre:"Hack and Slash",top:true},
    {id:4,name:"Shadow of the Colossus",category:"destacado",price:2500,genre:"Aventura",top:true},
    {id:5,name:"Metal Gear Solid 3: Snake Eater",category:"destacado",price:2500,genre:"Sigilo",top:false},
    {id:6,name:"Gran Turismo 4",category:"destacado",price:2500,genre:"Carreras",top:true},
    {id:7,name:"Final Fantasy X",category:"destacado",price:2500,genre:"RPG",top:true},
    {id:8,name:"Resident Evil 4",category:"destacado",price:2500,genre:"Survival Horror",top:true},
    {id:9,name:"Grand Theft Auto: Vice City",category:"destacado",price:2500,genre:"Mundo Abierto",top:true},
    {id:10,name:"Kingdom Hearts II",category:"destacado",price:2500,genre:"RPG Acción",top:true},
    {id:11,name:"Devil May Cry 3: Dante's Awakening",category:"destacado",price:2500,genre:"Hack and Slash",top:false},
    {id:12,name:"Dragon Ball Z: Budokai Tenkaichi 3",category:"destacado",price:2500,genre:"Lucha",top:true},
    {id:13,name:"Gran Turismo 3: A-Spec",category:"destacado",price:2500,genre:"Carreras",top:false},
    {id:14,name:"Tekken 5",category:"destacado",price:2500,genre:"Lucha",top:true},
    {id:15,name:"Okami",category:"destacado",price:2500,genre:"Aventura",top:false},
    {id:16,name:"Ratchet & Clank: Up Your Arsenal",category:"destacado",price:2500,genre:"Plataformas Shooter",top:false},
    {id:17,name:"Jak and Daxter: The Precursor Legacy",category:"destacado",price:2500,genre:"Plataformas",top:false},
    {id:18,name:"Sly Cooper and the Thievius Raccoonus",category:"destacado",price:2500,genre:"Plataformas Sigilo",top:false},
    {id:19,name:"Sly 2: Band of Thieves",category:"destacado",price:2500,genre:"Plataformas Sigilo",top:false},
    {id:20,name:"Sly 3: Honor Among Thieves",category:"destacado",price:2500,genre:"Plataformas Sigilo",top:false},
    {id:21,name:"Kingdom Hearts",category:"destacado",price:2500,genre:"RPG Acción",top:false},
    {id:22,name:"Persona 4",category:"destacado",price:2500,genre:"RPG",top:false},
    {id:23,name:"Persona 3 FES",category:"destacado",price:2500,genre:"RPG",top:false},
    {id:24,name:"Final Fantasy XII",category:"destacado",price:2500,genre:"RPG",top:false},
    {id:25,name:"Dragon Quest VIII: Journey of the Cursed King",category:"destacado",price:2500,genre:"RPG",top:false},
    {id:26,name:"Ico",category:"destacado",price:2500,genre:"Aventura Puzzle",top:false},
    {id:27,name:"Silent Hill 2",category:"destacado",price:2500,genre:"Survival Horror",top:false},
    {id:28,name:"Guitar Hero II",category:"destacado",price:2500,genre:"Musical",top:false},
    {id:29,name:"Guitar Hero III: Legends of Rock",category:"destacado",price:2500,genre:"Musical",top:true},
    {id:30,name:"Simpsons: Hit & Run",category:"destacado",price:2500,genre:"Mundo Abierto",top:true},
    {id:31,name:"Ratchet & Clank",category:"destacado",price:2500,genre:"Plataformas",top:false},
    {id:32,name:"Jak II",category:"destacado",price:2500,genre:"Plataformas Acción",top:false},
    {id:33,name:"Jak 3",category:"destacado",price:2500,genre:"Plataformas Acción",top:false},
    {id:34,name:"Devil May Cry",category:"destacado",price:2500,genre:"Hack and Slash",top:false},
    {id:35,name:"Silent Hill 3",category:"destacado",price:2500,genre:"Survival Horror",top:false},

    {id:36,name:"Grand Theft Auto III",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Mundo Abierto",top:true},
    {id:37,name:"Bully",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Mundo Abierto",top:true},
    {id:38,name:"Marvel vs. Capcom 2: New Age of Heroes",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Lucha",top:true},
    {id:39,name:"SoulCalibur III",category:"oferta",price:2500,offerPrice:2000,discount:20,genre:"Lucha",top:false},

    {id:40,name:"Need for Speed: Most Wanted",category:"normal",price:2000,genre:"Carreras",top:true},
    {id:41,name:"Need for Speed: Underground 2",category:"normal",price:2000,genre:"Carreras",top:true},
    {id:42,name:"Need for Speed: Underground",category:"normal",price:2000,genre:"Carreras",top:false},
    {id:43,name:"Midnight Club 3: DUB Edition",category:"normal",price:2000,genre:"Carreras",top:false},
    {id:44,name:"Burnout 3: Takedown",category:"normal",price:2000,genre:"Carreras",top:true},
    {id:45,name:"Burnout Revenge",category:"normal",price:2000,genre:"Carreras",top:false},
    {id:46,name:"Colin McRae Rally 2005",category:"normal",price:2000,genre:"Carreras",top:false},
    {id:47,name:"Tourist Trophy",category:"normal",price:2000,genre:"Carreras Motos",top:false},
    {id:48,name:"Midnight Club II",category:"normal",price:2000,genre:"Carreras",top:false},
    {id:49,name:"Pro Evolution Soccer 6",category:"normal",price:2000,genre:"Deportes",top:true},
    {id:50,name:"FIFA Street 2",category:"normal",price:2000,genre:"Deportes",top:false},
    {id:51,name:"NBA Street V3",category:"normal",price:2000,genre:"Deportes",top:false},
    {id:52,name:"Tony Hawk's Pro Skater 3",category:"normal",price:2000,genre:"Skate",top:false},
    {id:53,name:"SSX 3",category:"normal",price:2000,genre:"Snowboard",top:false},
    {id:54,name:"WWE SmackDown! vs. Raw 2006",category:"normal",price:2000,genre:"Lucha Deportes",top:true},
    {id:55,name:"Def Jam: Fight For NY",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:56,name:"Mortal Kombat: Shaolin Monks",category:"normal",price:2000,genre:"Aventura Lucha",top:true},
    {id:57,name:"Mortal Kombat: Armageddon",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:58,name:"Mortal Kombat: Deception",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:59,name:"SoulCalibur II",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:60,name:"Tekken Tag Tournament",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:61,name:"Virtua Fighter 4: Evolution",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:62,name:"Street Fighter Anniversary Collection",category:"normal",price:2000,genre:"Lucha",top:false},

    {id:63,name:"Dragon Ball Z: Budokai 3",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Lucha",top:true},
    {id:64,name:"Dragon Ball Z: Budokai 2",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:65,name:"Naruto: Ultimate Ninja 5",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:66,name:"Naruto: Ultimate Ninja 4",category:"normal",price:2000,genre:"Lucha",top:false},
    {id:67,name:"Black",category:"normal",price:2000,genre:"Shooter",top:false},
    {id:68,name:"Call of Duty 3",category:"normal",price:2000,genre:"Shooter",top:false},
    {id:69,name:"Medal of Honor: Frontline",category:"normal",price:2000,genre:"Shooter",top:false},
    {id:70,name:"TimeSplitters 2",category:"normal",price:2000,genre:"Shooter",top:false},
    {id:71,name:"Killzone",category:"normal",price:2000,genre:"Shooter",top:false},
    {id:72,name:"SOCOM II: U.S. Navy SEALs",category:"normal",price:2000,genre:"Shooter Táctico",top:false},
    {id:73,name:"Sniper Elite",category:"normal",price:2000,genre:"Shooter Sigilo",top:false},

    {id:74,name:"Prince of Persia: The Sands of Time",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Aventura",top:true},
    {id:75,name:"Prince of Persia: Warrior Within",category:"normal",price:2000,genre:"Aventura Acción",top:false},
    {id:76,name:"Prince of Persia: The Two Thrones",category:"normal",price:2000,genre:"Aventura",top:false},
    {id:77,name:"Beyond Good & Evil",category:"oferta",price:2000,offerPrice:1500,discount:25,genre:"Aventura",top:false},
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
  // ELEMENTOS DE LA PÁGINA
  // =========================================================

  const productsGrid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
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

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  // =========================================================
  // ESTADO
  // =========================================================

  let currentCategory = "todos";
  let currentSearch = "";
  let cart = [];


  // =========================================================
  // FORMATO DE PRECIO
  // =========================================================

  function formatPrice(price) {
    return "$" + price.toLocaleString("es-AR");
  }


  // =========================================================
  // TARJETA DE PRODUCTO
  // =========================================================

  function createProductCard(game) {

    const finalPrice = game.offerPrice || game.price;

    let badges = "";

    if (game.category === "oferta") {
      badges += `
        <span class="product-badge offer-badge">
          🔥 OFERTA ${game.discount}% OFF
        </span>
      `;
    }

    if (game.category === "destacado") {
      badges += `
        <span class="product-badge featured-badge">
          ⭐ DESTACADO
        </span>
      `;
    }

    if (game.top) {
      badges += `
        <span class="product-badge top-badge">
          🏆 TOP
        </span>
      `;
    }

    const priceHTML = game.offerPrice
      ? `
        <div class="product-price">
          <span class="old-price">${formatPrice(game.price)}</span>
          <strong>${formatPrice(game.offerPrice)}</strong>
        </div>
      `
      : `
        <div class="product-price">
          <strong>${formatPrice(game.price)}</strong>
        </div>
      `;

    return `
      <article class="product-card">

        <div class="product-image">

          <div class="product-badges">
            ${badges}
          </div>

          <div class="product-placeholder">
            <span>🎮</span>
            <small>PS2</small>
          </div>

        </div>

        <div class="product-info">

          <span class="product-genre">
            ${game.genre}
          </span>

          <h3>${game.name}</h3>

          <div class="product-bottom">

            ${priceHTML}

            <button
              type="button"
              class="add-cart-button"
              data-id="${game.id}"
            >
              🛒 Agregar
            </button>

          </div>

        </div>

      </article>
    `;
  }


  // =========================================================
  // MOSTRAR PRODUCTOS
  // =========================================================

  function renderProducts() {

    const search = currentSearch.trim().toLowerCase();

    const filteredGames = games.filter(game => {

      const matchesCategory =
        currentCategory === "todos" ||
        game.category === currentCategory;

      const matchesSearch =
        game.name.toLowerCase().includes(search) ||
        game.genre.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });

    productsGrid.innerHTML = "";

    if (filteredGames.length === 0) {
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;

    productsGrid.innerHTML = filteredGames
      .map(createProductCard)
      .join("");
  }


  // =========================================================
  // BUSCADOR
  // =========================================================

  function performSearch() {
    currentSearch = searchInput.value;
    renderProducts();
  }

  if (searchInput) {
    searchInput.addEventListener("input", performSearch);
  }

  if (searchButton) {
    searchButton.addEventListener("click", performSearch);
  }


  // =========================================================
  // FILTROS
  // =========================================================

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      currentCategory = button.dataset.category;

      renderProducts();
    });

  });


  // =========================================================
  // CARRITO
  // =========================================================

  function addToCart(gameId) {

    const game = games.find(item => item.id === gameId);

    if (!game) return;

    const existingItem = cart.find(item => item.id === gameId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: game.id,
        name: game.name,
        price: game.offerPrice || game.price,
        quantity: 1
      });
    }

    renderCart();
  }


  function removeFromCart(gameId) {

    cart = cart.filter(item => item.id !== gameId);

    renderCart();
  }


  function changeQuantity(gameId, change) {

    const item = cart.find(product => product.id === gameId);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(gameId);
      return;
    }

    renderCart();
  }


  // =========================================================
  // RENDER CARRITO
  // =========================================================

  function renderCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

      cartEmpty.hidden = false;

    } else {

      cartEmpty.hidden = true;

      cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
          <div class="cart-item-info">

            <strong>${item.name}</strong>

            <span>
              ${formatPrice(item.price)} c/u
            </span>

          </div>

          <div class="cart-item-actions">

            <button
              type="button"
              class="quantity-button"
              data-action="decrease"
              data-id="${item.id}"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              class="quantity-button"
              data-action="increase"
              data-id="${item.id}"
            >
              +
            </button>

            <button
              type="button"
              class="remove-button"
              data-action="remove"
              data-id="${item.id}"
              aria-label="Eliminar ${item.name}"
            >
              ×
            </button>

          </div>
        `;

        cartItems.appendChild(cartItem);
      });
    }

    let total = 0;
    let quantityTotal = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      quantityTotal += item.quantity;
    });

    cartTotal.textContent = formatPrice(total);
    cartCount.textContent = quantityTotal;
  }


  // =========================================================
  // BOTONES DEL CARRITO
  // =========================================================

  productsGrid.addEventListener("click", event => {

    const button = event.target.closest(".add-cart-button");

    if (!button) return;

    const gameId = Number(button.dataset.id);

    addToCart(gameId);

    openCart();
  });


  cartItems.addEventListener("click", event => {

    const button = event.target.closest("button");

    if (!button) return;

    const gameId = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "increase") {
      changeQuantity(gameId, 1);
    }

    if (action === "decrease") {
      changeQuantity(gameId, -1);
    }

    if (action === "remove") {
      removeFromCart(gameId);
    }

  });


  // =========================================================
  // ABRIR / CERRAR CARRITO
  // =========================================================

  function openCart() {

    cartPanel.classList.add("open");

    cartPanel.setAttribute("aria-hidden", "false");

    overlay.hidden = false;

    document.body.classList.add("cart-open");
  }


  function closeCart() {

    cartPanel.classList.remove("open");

    cartPanel.setAttribute("aria-hidden", "true");

    overlay.hidden = true;

    document.body.classList.remove("cart-open");
  }


  if (cartButton) {
    cartButton.addEventListener("click", openCart);
  }

  if (closeCartButton) {
    closeCartButton.addEventListener("click", closeCart);
  }

  if (overlay) {
    overlay.addEventListener("click", closeCart);
  }


  // =========================================================
  // ESC PARA CERRAR CARRITO
  // =========================================================

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeCart();
    }

  });


  // =========================================================
  // CONTINUAR CON LA COMPRA
  // =========================================================

  if (checkoutButton) {

    checkoutButton.addEventListener("click", () => {

      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      let message = "Hola, quiero comprar:%0A%0A";

      cart.forEach(item => {

        message +=
          `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}%0A`;

      });

      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      message += `%0ATotal: ${formatPrice(total)}`;

      // Más adelante vamos a poner acá el WhatsApp real de GameZone.
      alert(
        "La compra está preparada correctamente.%0A%0A" +
        "En el próximo paso vamos a conectar este botón con WhatsApp."
      );

    });

  }


  // =========================================================
  // INICIO
  // =========================================================

  renderProducts();
  renderCart();

});
