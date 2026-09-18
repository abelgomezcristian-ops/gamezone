  let currentCategory = "ps2";
  let currentSearch = "";
  let currentPage = 1;
  const GAMES_PER_PAGE = 12;
  let cart = [];

  const productsSection = document.getElementById("juegos");
  const offersSection = document.getElementById("ofertas");
  const paginationEl = document.getElementById("pagination");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const consoleBubbles = document.querySelectorAll(".console-bubble");

  function escapeHTML(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}
  
  function createProductCard(game){
    let badges=""; if(game.category==="oferta") badges+=`<span class="product-badge offer-badge">🔥 OFERTA</span>`; if(game.category==="destacado") badges+=`<span class="product-badge featured-badge">⭐ DESTACADO</span>`; if(game.top) badges+=`<span class="product-badge top-badge">🏆 TOP</span>`;
    const img = game.image? `<img src="${game.image}" alt="${escapeHTML(game.name)}" class="product-cover" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="product-placeholder" style="display:none"><span>🎮</span><small>PS2</small></div>` : `<div class="product-placeholder"><span>🎮</span><small>PS2</small></div>`;
    return `<article class="product-card" data-aos="fade-up"><div class="product-image"><div class="product-badges">${badges}</div>${img}</div><div class="product-info"><span class="product-genre">${escapeHTML(game.genre||'PS2')}</span><h3 class="product-title">${escapeHTML(game.name)}</h3><div class="product-bottom"><span style="font-size:11px;color:#9da3b5">Consultar</span><button class="add-cart-button" data-id="${game.id}">Consultar</button></div></div></article>`;
  }

  function getFiltered(){
    let f=games;
    if(currentCategory==="destacado") f=games.filter(g=>g.category==="destacado");
    else if(currentCategory==="oferta") f=games.filter(g=>g.category==="oferta");
    if(currentSearch){ const q=currentSearch.toLowerCase(); f=f.filter(g=>g.name.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q)); }
    return f;
  }

  function renderProducts(){
    const filtered=getFiltered();
    const totalPages = Math.ceil(filtered.length / GAMES_PER_PAGE);
    if(currentPage > totalPages) currentPage = 1;
    const start = (currentPage-1)*GAMES_PER_PAGE;
    const paginated = filtered.slice(start, start+GAMES_PER_PAGE);

    if(filtered.length===0){ productsGrid.innerHTML=""; emptyState.hidden=false; paginationEl.innerHTML=""; loadMoreBtn.style.display="none"; return; }
    emptyState.hidden=true;
    productsGrid.innerHTML=paginated.map(createProductCard).join("");
    
    // PAGINACIÓN 1-2-3
    let pagesHTML="";
    for(let i=1;i<=totalPages;i++){ pagesHTML+=`<button class="page-btn ${i===currentPage?'active':''}" data-page="${i}">${i}</button>`; }
    paginationEl.innerHTML=pagesHTML;
    
    // BOTON VER MAS
    if(currentPage < totalPages){ loadMoreBtn.style.display="inline-flex"; } else { loadMoreBtn.style.display="none"; }
    if(window.AOS) AOS.refresh();
    productsSection.scrollIntoView({behavior:"smooth"});
  }

  function renderOffers(){ offersGrid.innerHTML=games.filter(g=>g.category==="oferta").slice(0,8).map(createProductCard).join(""); }

  function updateCartUI(){ cartCount.textContent=cart.length; cartItems.innerHTML=cart.map(id=>{const g=games.find(x=>x.id===id); return `<div class="cart-item"><span>${escapeHTML(g.name)}</span><button data-del="${id}">x</button></div>`}).join(""); cartTotal.textContent=cart.length+" juegos"; cartEmpty.style.display=cart.length?"none":"block"; }
  function addToCart(id){ if(!cart.includes(id)) cart.push(id); updateCartUI(); cartPanel.classList.add("open"); overlay.hidden=false; }

  // EVENTO BOLITAS FLOTANTES
  consoleBubbles.forEach(bubble=>{
    bubble.addEventListener("click",()=>{
      const consoleType = bubble.dataset.console;
      consoleBubbles.forEach(b=>b.classList.remove("active"));
      bubble.classList.add("active");
      if(consoleType==="ps2"){
        productsSection.style.display="block";
        offersSection.style.display="block";
        currentCategory="ps2"; currentPage=1; currentSearch=""; searchInput.value="";
        renderProducts(); renderOffers();
      } else {
        productsSection.style.display="none"; offersSection.style.display="none";
        alert(consoleType.toUpperCase()+" próximamente! Estamos cargando el catálogo.");
      }
    });
  });

  // FILTROS Y BUSCADOR SOLO PS2
  document.querySelectorAll(".filter-button").forEach(btn=>{ btn.addEventListener("click",()=>{ document.querySelectorAll(".filter-button").forEach(b=>b.classList.remove("active")); btn.classList.add("active"); currentCategory=btn.dataset.category; currentPage=1; renderProducts(); }); });
  searchInput.addEventListener("input",(e)=>{ currentSearch=e.target.value.trim(); currentPage=1; renderProducts(); });
  document.getElementById("searchButton").addEventListener("click",()=>{ currentSearch=searchInput.value.trim(); currentPage=1; renderProducts(); });
  paginationEl.addEventListener("click",(e)=>{ if(e.target.dataset.page){ currentPage=Number(e.target.dataset.page); renderProducts(); } });
  loadMoreBtn.addEventListener("click",()=>{ currentPage++; renderProducts(); });

  productsGrid.addEventListener("click",(e)=>{ const b=e.target.closest(".add-cart-button"); if(b) addToCart(Number(b.dataset.id)); });
  offersGrid.addEventListener("click",(e)=>{ const b=e.target.closest(".add-cart-button"); if(b) addToCart(Number(b.dataset.id)); });
  cartItems.addEventListener("click",(e)=>{ if(e.target.dataset.del){ cart=cart.filter(x=>x!=e.target.dataset.del); updateCartUI(); } });
  cartButton.addEventListener("click",()=>{ cartPanel.classList.add("open"); overlay.hidden=false; });
  closeCartButton.addEventListener("click",()=>{ cartPanel.classList.remove("open"); overlay.hidden=true; });
  overlay.addEventListener("click",()=>{ cartPanel.classList.remove("open"); overlay.hidden=true; });
  checkoutButton.addEventListener("click",()=>{
    if(!cart.length) return;
    let msg="Hola GameZone Corrientes! Quiero consultar por:\n\n"; cart.forEach(id=>{const g=games.find(x=>x.id===id); msg+=`• ${g.name}\n`;}); msg+="\nPrecio y combos?";
    if(WHATSAPP_NUMBER==="TU_NUMERO_AQUI"){alert("Cambia tu número en script.js"); return;}
    window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),"_blank");
  });
  currentYear.textContent=new Date().getFullYear();
  renderOffers(); updateCartUI();
  // Auto abrir PS2 al inicio
  document.querySelector('.bubble-ps2').click();
