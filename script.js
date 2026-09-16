/* =========================================================
   GAMEZONE - CATÁLOGO, BÚSQUEDA, FILTROS Y CARRITO
   ========================================================= */

// Número de WhatsApp de GameZone
const WHATSAPP_NUMBER = "5493795118415";

/* =========================================================
   CATÁLOGO DE JUEGOS
   ========================================================= */

const games = [
  {
    id: 1,
    name: "Grand Theft Auto: San Andreas",
    category: "destacado",
    price: 2500,
    genre: "Mundo abierto",
    top: true,
    image: "img/gta-san-andreas.jpg",
    description: "Explorá San Andreas, completá misiones y viví una de las aventuras más recordadas de PlayStation 2."
  },
  {
    id: 2,
    name: "Grand Theft Auto: Vice City",
    category: "destacado",
    price: 2500,
    genre: "Mundo abierto",
    top: true,
    image: "",
    description: "Una aventura criminal ambientada en una ciudad inspirada en Miami durante los años 80."
  },
  {
    id: 3,
    name: "Grand Theft Auto III",
    category: "normal",
    price: 2000,
    genre: "Mundo abierto",
    image: "",
    description: "Recorré Liberty City y construí tu camino dentro del mundo criminal."
  },
  {
    id: 4,
    name: "Shadow of the Colossus",
    category: "destacado",
    price: 2500,
    genre: "Aventura",
    top: true,
    image: "",
    description: "Enfrentá enormes colosos en una aventura épica llena de misterio y exploración."
  },
  {
    id: 5,
    name: "God of War",
    category: "destacado",
    price: 2500,
    genre: "Acción",
    top: true,
    image: "",
    description: "Acompañá a Kratos en una aventura mitológica llena de combates y desafíos."
  },
  {
    id: 6,
    name: "God of War II",
    category: "destacado",
    price: 2500,
    genre: "Acción",
    top: true,
    image: "",
    description: "Kratos continúa su guerra contra los dioses en una aventura llena de acción."
  },
  {
    id: 7,
    name: "Resident Evil 4",
    category: "destacado",
    price: 2500,
    genre: "Terror / Acción",
    top: true,
    image: "",
    description: "Leon Kennedy debe rescatar a la hija del presidente en una peligrosa misión."
  },
  {
    id: 8,
    name: "Resident Evil Code: Veronica X",
    category: "normal",
    price: 2000,
    genre: "Terror",
    image: "",
    description: "Una aventura de supervivencia con misterios, enemigos y escenarios oscuros."
  },
  {
    id: 9,
    name: "Resident Evil Outbreak",
    category: "normal",
    price: 2000,
    genre: "Terror",
    image: "",
    description: "Intentá sobrevivir a un brote zombi junto a distintos personajes."
  },
  {
    id: 10,
    name: "Resident Evil Outbreak File 2",
    category: "normal",
    price: 2000,
    genre: "Terror",
    image: "",
    description: "Más escenarios y desafíos de supervivencia dentro del universo Resident Evil."
  },
  {
    id: 11,
    name: "Silent Hill 2",
    category: "destacado",
    price: 2500,
    genre: "Terror psicológico",
    top: true,
    image: "",
    description: "Una experiencia de terror psicológico ambientada en el misterioso pueblo de Silent Hill."
  },
  {
    id: 12,
    name: "Silent Hill 3",
    category: "destacado",
    price: 2500,
    genre: "Terror psicológico",
    image: "",
    description: "Heather Mason se enfrenta a una historia oscura llena de secretos."
  },
  {
    id: 13,
    name: "Silent Hill 4: The Room",
    category: "normal",
    price: 2000,
    genre: "Terror psicológico",
    image: "",
    description: "Una habitación misteriosa se convierte en el centro de una pesadilla."
  },
  {
    id: 14,
    name: "Metal Gear Solid 2",
    category: "destacado",
    price: 2500,
    genre: "Acción / Sigilo",
    image: "",
    description: "Infiltración, espionaje y una historia compleja en una de las grandes sagas de Konami."
  },
  {
    id: 15,
    name: "Metal Gear Solid 3: Snake Eater",
    category: "destacado",
    price: 2500,
    genre: "Acción / Sigilo",
    top: true,
    image: "",
    description: "Una misión de espionaje en plena Guerra Fría con supervivencia y sigilo."
  },
  {
    id: 16,
    name: "Black",
    category: "destacado",
    price: 2500,
    genre: "Disparos",
    top: true,
    image: "",
    description: "Shooter de acción con intensos tiroteos, explosiones y armamento pesado."
  },
  {
    id: 17,
    name: "Call of Duty 2: Big Red One",
    category: "normal",
    price: 2000,
    genre: "Disparos",
    image: "",
    description: "Viví distintas batallas de la Segunda Guerra Mundial."
  },
  {
    id: 18,
    name: "Call of Duty 3",
    category: "normal",
    price: 2000,
    genre: "Disparos",
    image: "",
    description: "Combates intensos en distintos escenarios de la Segunda Guerra Mundial."
  },
  {
    id: 19,
    name: "Medal of Honor: Frontline",
    category: "normal",
    price: 2000,
    genre: "Disparos",
    image: "",
    description: "Participá en misiones militares durante la Segunda Guerra Mundial."
  },
  {
    id: 20,
    name: "Medal of Honor: Rising Sun",
    category: "normal",
    price: 2000,
    genre: "Disparos",
    image: "",
    description: "Una campaña de acción ambientada en el frente del Pacífico."
  },
  {
    id: 21,
    name: "Medal of Honor: European Assault",
    category: "normal",
    price: 2000,
    genre: "Disparos",
    image: "",
    description: "Enfrentá distintas operaciones militares contra las fuerzas enemigas."
  },
  {
    id: 22,
    name: "The Warriors",
    category: "destacado",
    price: 2500,
    genre: "Acción",
    top: true,
    image: "",
    description: "Basado en la película, enfrentá bandas callejeras en una ciudad peligrosa."
  },
  {
    id: 23,
    name: "Bully",
    category: "destacado",
    price: 2500,
    genre: "Mundo abierto",
    top: true,
    image: "",
    description: "Viví la vida de Jimmy Hopkins dentro de una escuela llena de conflictos."
  },
  {
    id: 24,
    name: "Manhunt",
    category: "destacado",
    price: 2500,
    genre: "Acción / Suspenso",
    image: "",
    description: "Un juego oscuro de supervivencia, sigilo y persecución."
  },
  {
    id: 25,
    name: "Manhunt 2",
    category: "destacado",
    price: 2500,
    genre: "Acción / Suspenso",
    image: "",
    description: "Una historia de misterio y supervivencia con una ambientación intensa."
  },
  {
    id: 26,
    name: "Max Payne",
    category: "normal",
    price: 2000,
    genre: "Acción",
    image: "",
    description: "Un policial oscuro con tiroteos y el famoso efecto de tiempo bala."
  },
  {
    id: 27,
    name: "Max Payne 2",
    category: "normal",
    price: 2000,
    genre: "Acción",
    image: "",
    description: "Max Payne regresa con una historia de crimen, acción y misterio."
  },
  {
    id: 28,
    name: "Baldur's Gate: Dark Alliance",
    category: "normal",
    price: 2000,
    genre: "Rol / Acción",
    image: "",
    description: "Aventura de rol con combates, mazmorras y exploración."
  },
  {
    id: 29,
    name: "Champions of Norrath",
    category: "normal",
    price: 2000,
    genre: "Rol / Acción",
    image: "",
    description: "Creá tu personaje y luchá contra criaturas en un mundo fantástico."
  },
  {
    id: 30,
    name: "Dragon Ball Z: Budokai",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Combates de Dragon Ball Z con distintos personajes y técnicas."
  },
  {
    id: 31,
    name: "Dragon Ball Z: Budokai 2",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Más combates, transformaciones y personajes del universo Dragon Ball."
  },
  {
    id: 32,
    name: "Dragon Ball Z: Budokai 3",
    category: "destacado",
    price: 2500,
    genre: "Lucha",
    top: true,
    image: "",
    description: "Uno de los juegos de lucha más completos de Dragon Ball Z."
  },
  {
    id: 33,
    name: "Dragon Ball Z: Infinite World",
    category: "destacado",
    price: 2500,
    genre: "Lucha",
    image: "",
    description: "Combates y desafíos con una gran variedad de personajes."
  },
  {
    id: 34,
    name: "Dragon Ball Z: Sparking! Neo",
    category: "destacado",
    price: 2500,
    genre: "Lucha",
    top: true,
    image: "",
    description: "Combates en escenarios amplios con muchos personajes de Dragon Ball."
  },
  {
    id: 35,
    name: "Dragon Ball Z: Sparking! Meteor",
    category: "destacado",
    price: 2500,
    genre: "Lucha",
    top: true,
    image: "",
    description: "Una enorme selección de personajes, transformaciones y combates."
  },
  {
    id: 36,
    name: "Naruto: Ultimate Ninja",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Combates ninja basados en el popular anime Naruto."
  },
  {
    id: 37,
    name: "Naruto: Ultimate Ninja 2",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Más personajes, técnicas y modos de combate ninja."
  },
  {
    id: 38,
    name: "Naruto: Ultimate Ninja 3",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Aventura y combates con una gran variedad de ninjas."
  },
  {
    id: 39,
    name: "Naruto: Uzumaki Chronicles",
    category: "normal",
    price: 2000,
    genre: "Acción",
    image: "",
    description: "Aventura de acción protagonizada por Naruto y sus compañeros."
  },
  {
    id: 40,
    name: "Naruto: Uzumaki Chronicles 2",
    category: "normal",
    price: 2000,
    genre: "Acción",
    image: "",
    description: "Una nueva aventura ninja con combates y misiones."
  },
  {
    id: 41,
    name: "Tekken 4",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Combates uno contra uno con grandes luchadores."
  },
  {
    id: 42,
    name: "Tekken 5",
    category: "destacado",
    price: 2500,
    genre: "Lucha",
    top: true,
    image: "",
    description: "Una de las entregas más populares de la saga Tekken."
  },
  {
    id: 43,
    name: "Tekken Tag Tournament",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Combates por equipos con personajes clásicos de Tekken."
  },
  {
    id: 44,
    name: "Mortal Kombat: Deadly Alliance",
    category: "normal",
    price: 2000,
    genre: "Lucha",
    image: "",
    description: "Combates intensos con luchadores y estilos diferentes."
  },
  {
    id: 45,
    name: "Mortal Kombat: Deception",
    category: "destacado",
    price: 2500,
    genre: "Lucha",
    image: "",
    description: "Una entrega con nuevos modos, escenarios y personajes."
  },
  {
    id: 46,
    name: "Mortal Kombat: Armageddon",
    category: "destacado",
    price: 2500,
    genre: "Lucha",
    top: true,
    image: "",
    description: "Una gran reunión de luchadores y contenido de la saga Mortal Kombat."
  },
  {
    id: 47,
    name: "WWE SmackDown! Here Comes the Pain",
    category: "destacado",
    price: 2500,
    genre: "Lucha libre",
    top: true,
    image: "",
    description: "Luchas de wrestling con grandes estrellas y distintos modos."
  },
  {
    id: 48,
    name: "WWE SmackDown vs. Raw 2006",
    category: "normal",
    price: 2000,
    genre: "Lucha libre",
    image: "",
    description: "Combates de WWE con modos de carrera y enfrentamientos."
  },
  {
    id: 49,
    name: "WWE SmackDown vs. Raw 2007",
    category: "normal",
    price: 2000,
    genre: "Lucha libre",
    image: "",
    description: "Una nueva entrega de lucha libre con más opciones y luchadores."
  },
  {
    id: 50,
    name: "WWE SmackDown vs. Raw 2008",
    category: "normal",
    price: 2000,
    genre: "Lucha libre",
    image: "",
    description: "Disfrutá de combates y modos de juego de WWE."
  },
  {
    id: 51,
    name: "Need for Speed Underground",
    category: "normal",
    price: 2000,
    genre: "Carreras",
    image: "",
    description: "Personalizá autos y competí en carreras urbanas."
  },
  {
    id: 52,
    name: "Need for Speed Underground 2",
    category: "destacado",
    price: 2500,
    genre: "Carreras",
    top: true,
    image: "",
    description: "Explorá una ciudad abierta y modificá tus autos de competición."
  },
  {
    id: 53,
    name: "Need for Speed Most Wanted",
    category: "destacado",
    price: 2500,
    genre: "Carreras",
    top: true,
    image: "",
    description: "Escapá de la policía y competí para llegar a la cima de la lista negra."
  },
  {
    id: 54,
    name: "Need for Speed Carbon",
    category: "destacado",
    price: 2500,
    genre: "Carreras",
    image: "",
    description: "Competí en carreras nocturnas y conquistá territorios."
  },
  {
    id: 55,
    name: "Need for Speed ProStreet",
    category: "normal",
    price: 2000,
    genre: "Carreras",
    image: "",
    description: "Carreras profesionales con autos modificados y diferentes circuitos."
  },
  {
    id: 56,
    name: "Burnout 3: Takedown",
    category: "destacado",
    price: 2500,
    genre: "Carreras",
    top: true,
    image: "",
    description: "Carreras rápidas, choques espectaculares y mucha adrenalina."
  },
  {
    id: 57,
    name: "Burnout Revenge",
    category: "destacado",
    price: 2500,
    genre: "Carreras",
    image: "",
    description: "Competí agresivamente y provocá accidentes para ganar."
  },
  {
    id: 58,
    name: "Gran Turismo 4",
    category: "destacado",
    price: 2500,
    genre: "Carreras / Simulación",
    top: true,
    image: "",
    description: "Una amplia experiencia de conducción con cientos de vehículos y circuitos."
  },
  {
    id: 59,
    name: "Midnight Club 3: DUB Edition",
    category: "destacado",
    price: 2500,
    genre: "Carreras",
    image: "",
    description: "Carreras callejeras con autos, motos y mucha personalización."
  },
  {
    id: 60,
    name: "Midnight Club 3: DUB Edition Remix",
    category: "destacado",
    price: 2500,
    genre: "Carreras",
    image: "",
    description: "Una versión ampliada con más vehículos, carreras y contenido."
  },
  {
    id: 61,
    name: "FIFA 14",
    category: "normal",
    price: 2000,
    genre: "Fútbol",
    image: "",
    description: "Disfrutá del fútbol con equipos, torneos y partidos."
  },
  {
    id: 62,
    name: "FIFA 15",
    category: "normal",
    price: 2000,
    genre: "Fútbol",
    image: "",
    description: "Una de las últimas entregas de FIFA disponibles para PS2."
  },
  {
    id: 63,
    name: "Winning Eleven 10",
    category: "destacado",
    price: 2500,
    genre: "Fútbol",
    top: true,
    image: "",
    description: "Fútbol clásico con partidos intensos y gran jugabilidad."
  },
  {
    id: 64,
    name: "Pro Evolution Soccer 6",
    category: "destacado",
    price: 2500,
    genre: "Fútbol",
    image: "",
    description: "Una de las entregas más recordadas de Pro Evolution Soccer."
  },
  {
    id: 65,
    name: "Pro Evolution Soccer 2014",
    category: "normal",
    price: 2000,
    genre: "Fútbol",
    image: "",
    description: "Disfrutá de partidos y torneos de fútbol en PS2."
  },
  {
    id: 66,
    name: "NBA Street Vol. 2",
    category: "destacado",
    price: 2500,
    genre: "Deportes",
    top: true,
    image: "",
    description: "Básquet callejero con movimientos espectaculares y partidos intensos."
  },
  {
    id: 67,
    name: "NBA Street V3",
    category: "normal",
    price: 2000,
    genre: "Deportes",
    image: "",
    description: "Básquet urbano con equipos, trucos y desafíos."
  },
  {
    id: 68,
    name: "Tony Hawk's Underground",
    category: "normal",
    price: 2000,
    genre: "Deportes / Skate",
    image: "",
    description: "Skateboarding con trucos, desafíos y una historia propia."
  },
  {
    id: 69,
    name: "Tony Hawk's Underground 2",
    category: "normal",
    price: 2000,
    genre: "Deportes / Skate",
    image: "",
    description: "Realizá trucos y desafíos en distintos lugares del mundo."
  },
  {
    id: 70,
    name: "Tony Hawk's American Wasteland",
    category: "normal",
    price: 2000,
    genre: "Deportes / Skate",
    image: "",
    description: "Recorré escenarios urbanos y realizá trucos de skate."
  },
  {
    id: 71,
    name: "Crash Twinsanity",
    category: "normal",
    price: 2000,
    genre: "Plataformas",
    image: "",
    description: "Crash y Neo Cortex deben colaborar en una aventura llena de humor."
  },
  {
    id: 72,
    name: "Crash Nitro Kart",
    category: "normal",
    price: 2000,
    genre: "Carreras",
    image: "",
    description: "Carreras de karts con Crash y sus amigos."
  },
  {
    id: 73,
    name: "Crash Tag Team Racing",
    category: "normal",
    price: 2000,
    genre: "Carreras",
    image: "",
    description: "Carreras y exploración en un parque lleno de desafíos."
  },
  {
    id: 74,
    name: "Crash of the Titans",
    category: "normal",
    price: 2000,
    genre: "Acción / Plataformas",
    image: "",
    description: "Crash se enfrenta a nuevos enemigos y utiliza sus habilidades."
  },
  {
    id: 75,
    name: "Jak and Daxter: The Precursor Legacy",
    category: "normal",
    price: 2000,
    genre: "Aventura / Plataformas",
    image: "",
    description: "Una aventura de plataformas con exploración y acción."
  },
  {
    id: 76,
    name: "Jak II",
    category: "normal",
    price: 2000,
    genre: "Aventura / Acción",
    image: "",
    description: "Jak vuelve con una aventura más oscura y llena de acción."
  },
  {
    id: 77,
    name: "Jak 3",
    category: "normal",
    price: 2000,
    genre: "Aventura / Acción",
    image: "",
    description: "Explorá nuevos territorios y enfrentá grandes desafíos."
  },
  {
    id: 78,
    name: "Ratchet & Clank",
    category: "normal",
    price: 2000,
    genre: "Acción / Plataformas",
    image: "",
    description: "Aventura de acción con armas, planetas y mucho humor."
  },
  {
    id: 79,
    name: "Ratchet & Clank 2",
    category: "normal",
    price: 2000,
    genre: "Acción / Plataformas",
    image: "",
    description: "Una nueva aventura interplanetaria con más armas y desafíos."
  },
  {
    id: 80,
    name: "Ratchet & Clank 3",
    category: "destacado",
    price: 2500,
    genre: "Acción / Plataformas",
    image: "",
    description: "Ratchet y Clank regresan con una aventura repleta de acción."
  },
  {
    id: 81,
    name: "Sly Cooper and the Thievius Raccoonus",
    category: "normal",
    price: 2000,
    genre: "Aventura / Sigilo",
    image: "",
    description: "Una aventura de sigilo protagonizada por un mapache ladrón."
  },
  {
    id: 82,
    name: "Sly 2: Band of Thieves",
    category: "normal",
    price: 2000,
    genre: "Aventura / Sigilo",
    image: "",
    description: "Sly y su equipo realizan nuevos robos y misiones."
  },
  {
    id: 83,
    name: "Sly 3: Honor Among Thieves",
    category: "normal",
    price: 2000,
    genre: "Aventura / Sigilo",
    image: "",
    description: "Una aventura con robos, sigilo y distintos personajes jugables."
  },
  {
    id: 84,
    name: "The Simpsons: Hit & Run",
    category: "destacado",
    price: 2500,
    genre: "Mundo abierto",
    top: true,
    image: "",
    description: "Recorré Springfield, manejá vehículos y completá misiones con Los Simpson."
  },
  {
    id: 85,
    name: "The Simpsons Game",
    category: "normal",
    price: 2000,
    genre: "Aventura",
    image: "",
    description: "Una aventura divertida con los personajes de Los Simpson."
  },
  {
    id: 86,
    name: "Scooby-Doo! Night of 100 Frights",
    category: "normal",
    price: 2000,
    genre: "Aventura",
    image: "",
    description: "Scooby y Shaggy recorren escenarios misteriosos y enfrentan desafíos."
  },
  {
    id: 87,
    name: "Ben 10: Protector of Earth",
    category: "normal",
    price: 2000,
    genre: "Acción",
    image: "",
    description: "Usá los poderes alienígenas de Ben 10 para salvar el mundo."
  },
  {
    id: 8
