import { Planets } from "@/types/types";
// Example: your 14 banners
const banners = [
  "/banner/banner1.webp",
  "/banner/banner2.webp",
  "/banner/banner3.webp",
  "/banner/banner4.webp",
  "/banner/banner5.webp",
  "/banner/banner6.webp",
  "/banner/banner7.webp",
  "/banner/banner8.webp",
  "/banner/banner9.webp",
  "/banner/banner10.webp",
  "/banner/banner11.webp",
  "/banner/banner12.webp",
  "/banner/banner13.webp",
  "/banner/banner14.webp",
];

// Update planetData
let bannerIndex = 0;
const planetSquareCount = 48; // total planetSquare images
const planetSurfCount = 51; // total planetSurf images

let squareIndex = 1;
let surfIndex = 1;

export const planetData: Planets = [
  {
    planetId: 1,
    planetName: "Earth",
    planetPrice: 0,
    planetShortDescription:
      "Inhabited by 7 billion hostile, territorial creatures called humans. The only species that pays to live on their own planet. There’s a reason it’s free.",
    planetTitleDescription: "Not just a planet—an actual nightmare.",
    planetInnterDescription:
      "Inhabited by extremely territorial, invading, hostile species. Comes with free wars, rent payments for land you technically already own.Prone to natural disasters, political instability, and the occasional human who still thinks it’s flat. Air and water included, but supplies are running out fast.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 0,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 100,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet17.webp",
    planetDescription: {
      paragraphs: [
        "Kepler-442b is an ecological marvel, with a dense, interconnected canopy that filters out the harsh light of its binary suns, creating a perpetual twilight on the forest floor. The planet's ecosystem is a symphony of life, where every organism plays a crucial role in maintaining its delicate balance.",
        "The air is thick with the scent of exotic blossoms, and the ground hums with the soft vibrations of unseen creatures. Navigating Kepler-442b is an adventure in itself, with hidden caves, cascading waterfalls, and ancient, towering trees that reach for the sky.",
      ],
      bulletPoints: [
        "Comes with highly innovative managers who believe nine women can make a baby in one month.",
        "Offers a premium subscription service for breathing (oxygen not included).",
        "Ashamed of nothing, offended by everything.",
        "Home of the genius species that invented nuclear weapons… and then pointed them at themselves.",
        "A retirement plan where you work until your 60s and still die broke.",
      ],
      detailedDescription: [
        {
          title: "Bountiful Resources",
          para: "Earth comes preloaded with a wide array of natural resources: water, air, soil, rocks, and more. Sure, some of it is unevenly distributed, but who doesn’t love a little challenge in resource allocation?",
        },
        {
          title: "Human Ingenuity",
          para: "This planet’s inhabitants have mastered the art of turning everything into a product: forests into furniture, oceans into shipping lanes, and, of course, their own labor into a never-ending cycle of overwork and taxation. Efficiency at its finest!",
        },
        {
          title: " Exploitation of Earth to Extinction level Potential",
          para: "For the ambitious and morally flexible, Earth offers unlimited potential to extract, consume, and destroy. If you’re erick enough to ignore ethics, you can exploit this planet right down to extinction—match its resources to your greed and call it innovation.",
        },
      ],

      images: [
        {
          url: "/descriptiveImg/Earth/Product/product1.webp",
        },
        {
          url: "/descriptiveImg/Earth/Product/product2.webp",
        },
        { url: "/descriptiveImg/Earth/Product/product3.webp" },
      ],
      surfacePreviewImages: [
        "/descriptiveImg/Earth/surfacepreview/fc.webp",
        "/descriptiveImg/Earth/surfacepreview/sp.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/descriptiveImg/Earth/Banners/banner6.webp",
      "/descriptiveImg/Earth/Banners/banner5.webp",
      "/descriptiveImg/Earth/Banners/banner4.webp",
      "/descriptiveImg/Earth/Banners/banner3.webp",
      "/descriptiveImg/Earth/Banners/banner2.webp",
      "/descriptiveImg/Earth/Banners/banner1.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "How to Avoid Scams",
        productDescription:
          "Customers who got scammed by us usually buy this book to avoid getting scammed next time.",
        productPrice: 257.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab1.webp",
      },
      {
        productName: "How to Get Your Money Back",
        productDescription:
          "Impossible! We keep our money very safe. But hey, who can blame victims for trying?",
        productPrice: 399.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab2.webp",
      },
      {
        productName: "How to Get Away with Murder",
        productDescription:
          "Some angry customers struck back. This book teaches you how to get away with murder… good luck finding us!",
        productPrice: 499.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab3.webp",
      },
      {
        productName: "Antidepressants",
        productDescription:
          "99.99% of our customers are depressed after purchasing. Stay healthy for our next scheme—pop one daily.",
        productPrice: 150.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab4.webp",
      },
    ],
  },
  {
    planetId: 2,
    planetName: "Andromeda Galaxy",
    planetPrice: 99999,
    planetShortDescription:
      "2.5 million light years away. If you won’t visit Andromeda, it’ll visit you—just stay alive for 5 million light years.",
    planetTitleDescription: "She's coming for us, fast. 120 km/s.",
    planetInnterDescription:
      "A sprawling galaxy full of uncharted stars and cosmic mysteries. Beware rogue black holes, untested wormholes, and the occasional space debris on a collision course. Perfect for explorers—air is included, Wi-Fi not guaranteed.",
    planetRarity: "Rare",
    planetStars: 3,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet19.webp",
    planetDescription: {
      paragraphs: [
        "Kepler-442b is an ecological marvel, with a dense, interconnected canopy that filters out the harsh light of its binary suns, creating a perpetual twilight on the forest floor. The planet's ecosystem is a symphony of life, where every organism plays a crucial role in maintaining its delicate balance.",
        "The air is thick with the scent of exotic blossoms, and the ground hums with the soft vibrations of unseen creatures. Navigating Kepler-442b is an adventure in itself, with hidden caves, cascading waterfalls, and ancient, towering trees that reach for the sky.",
      ],
      bulletPoints: [
        "Atmosphere: Rarefied and slightly glowing, perfect for thrill-seekers and light-breathers.",
        "Moons: Three, mischievously named 'Blink,' 'Twirl,' and 'Shimmer,' which change positions unpredictably.",
        "Gravity: 0.9 G, lighter than Earth but enough to feel grounded.",
        "Known for: The Cosmic Vortexes and the Radiant Crystal Plains.",
        "Local Flora: Floating 'Starblossoms' and 'Nebula Ferns' that hum softly at night.",
      ],

      detailedDescription: [
        {
          title: "Cosmic Wonders",
          para: "Andromeda boasts breathtaking celestial phenomena at every turn. From shimmering nebulae to streaks of cosmic dust, your eyes will never be bored here.",
        },
        {
          title: "Danger & Adventure",
          para: "The galaxy comes with rogue black holes, unexpected meteor showers, and gravity quirks that keep even experienced explorers on their toes.",
        },
        {
          title: "Exploit at Your Own Risk",
          para: "If you’re daring—or reckless—you can harvest exotic minerals and rare flora, though beware: overdoing it might turn Andromeda into a cosmic wasteland.",
        },
      ],

      images: [
        {
          url: "/planet/planet19.webp",
        },
        { url: "/descriptiveImg/Andromeda/Product/product1.webp" },
        {
          url: "/descriptiveImg/Andromeda/Product/product2.webp",
        },
        { url: "/descriptiveImg/Andromeda/Product/product3.webp" },
      ],
      surfacePreviewImages: [
        "/figma/fig8.webp",
        "/figma/fig1.webp",
        "/figma/als1.webp",
      ],
    },
    planetGallery: [
      "/banner/banner1.webp",
      "/descriptiveImg/Andromeda/banner/banner2.jpg",
      "/descriptiveImg/Andromeda/banner/banner3.jpg",
      "/descriptiveImg/Andromeda/banner/banner4.jpg",
      "/descriptiveImg/Andromeda/banner/banner5.jpg",
    ],
    peopleAlsoBought: [
      {
        productName: "Quantum Space suit",
        productDescription:
          "Advanced protection for any environment—though not against stupidity. A helmet isn’t included, but luckily you won’t need one.",
        productPrice: 73459,
        productImg: "/pabm/suit.webp",
      },
      {
        productName: "SVT XL Cruiser",
        productDescription:
          "Fastest ship in the galaxy—though the service is painfully slow. Complimentary delays included, but you’ll get there… eventually.",
        productPrice: 500000,
        productImg: "/pabm/rock.webp",
      },
      {
        productName: "Oxygen Farm Pro",
        productDescription:
          "Sustained air for your colony—though freshness isn’t guaranteed. Comes slightly recycled, but hey, at least you’re breathing.",
        productPrice: 499.0,
        productImg: "/pabm/farm.webp",
      },
      {
        productName: "Alien Snack Pack",
        productDescription:
          "Exotic flavors from across the universe—personally hand-picked by our CEO, with questionable taste but undeniable commitment.",
        productPrice: 150.0,
        productImg: "/pabm/choc.webp",
      },
    ],
  },
  {
    planetId: 3,
    planetName: "Dark Matter",
    planetPrice: 15000,
    planetShortDescription:
      "Get hold of the thing that holds the universe together. Darker than your ex. Delivered in a biodegradable, totally-not-apocalyptic paper bag.",
    planetTitleDescription: "Not just matter, dark matter.",
    planetInnterDescription:
      "Invisible, untouchable, and mysteriously everywhere yet nowhere. Dark Matter won’t bother you, but it keeps the universe from falling apart—so don’t upset it.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet21.webp",
    planetDescription: {
      paragraphs: [
        "Kepler-442b is an ecological marvel, with a dense, interconnected canopy that filters out the harsh light of its binary suns, creating a perpetual twilight on the forest floor. The planet's ecosystem is a symphony of life, where every organism plays a crucial role in maintaining its delicate balance.",
        "The air is thick with the scent of exotic blossoms, and the ground hums with the soft vibrations of unseen creatures. Navigating Kepler-442b is an adventure in itself, with hidden caves, cascading waterfalls, and ancient, towering trees that reach for the sky.",
      ],

      bulletPoints: [
        "Atmosphere: Non-existent, perfect for introverts and theoretical physicists.",
        "Moons: Zero. Why bother? It’s invisible anyway.",
        "Gravity: Extremely low, but mysteriously influential on everything around it.",
        "Known for: Holding galaxies together and ruining every physics beginner’s life.",
        "Local Flora: Non-applicable. It’s mostly spooky nothingness.",
      ],

      detailedDescription: [
        {
          title: "Mysterious Nature",
          para: "Dark Matter is the ultimate cosmic prank. You can’t see it, touch it, or measure it directly, but it quietly shapes the fate of galaxies.",
        },
        {
          title: "Danger & Adventure",
          para: "Venturing near it is safe… if you’re a ghost. Scientists are still figuring out if interacting with it could lead to catastrophic existential crises.",
        },
        {
          title: "Exploit at Your Own Risk",
          para: "If you’re bold—or just very reckless—you might attempt to harness Dark Matter. Spoiler: even the bravest have only theoretical success. Overuse might destabilize nearby galaxies.",
        },
      ],
      images: [
        {
          url: "/planetsqare/planetsqaure1.webp",
        },
        { url: "/planetsurf/planet1.webp" },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        { url: "/documerica-x-EG-R-bUTI-unsplash.jpg" },
        { url: "/DG_FomMXoAA4OSI.jpeg" },
      ],
      surfacePreviewImages: [
        "/figma/fig2.webp",
        "/figma/fig8.webp",
        "/figma/als2.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape1.webp",
      "/alienlandscape/alienlandscape2.webp",
      "/alienlandscape/alienlandscape3.webp",
      "/alienlandscape/alienlandscape4.webp",
      "/alienlandscape/alienlandscape5.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "Alien artifact",
        productDescription:
          "Alien artifacts of unknown origin. Some website claim it's a cheap china toy, don't read those websites before buying.",
        productPrice: 750.0,
        productImg: "/figma/alar.webp",
      },
      {
        productName: "Energy Core",
        productDescription:
          "Very powerfull enery core. you can even wage wars with 4th diemnsion beings.",
        productPrice: 3000.0,
        productImg: "/figma/ener.webp",
      },
      {
        productName: "Alien Relic",
        productDescription:
          "Mysterious relics from an ancient alien civilization. Older than big bang itself.",
        productPrice: 3500000,
        productImg: "/figma/fig7.webp",
      },
      {
        productName: "Lab Equipment",
        productDescription:
          "State-of-the-art lab equipment for all your intergalactic research needs. Perfect for studying dark matter and other cosmic phenomena.",
        productPrice: 15000.0,
        productImg: "/figma/fig5.webp",
      },
    ],
  },
  {
    planetId: 4,
    planetName: "Sun",
    planetPrice: 15000,
    planetShortDescription:
      "Sun: About 15 million degrees hot. Perfect for cooking and all your energy needs. If it’s too hot to land, just land at night.",
    planetTitleDescription: "I'm White. I'm Hot. I am the Sun.",
    planetInnterDescription:
      "A massive ball of fire that’s been running hot for billions of years. Comes with endless light, extreme heat, and occasional solar tantrums.",

    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet22.webp",
    planetDescription: {
      paragraphs: [
        "Kepler-442b is an ecological marvel, with a dense, interconnected canopy that filters out the harsh light of its binary suns, creating a perpetual twilight on the forest floor. The planet's ecosystem is a symphony of life, where every organism plays a crucial role in maintaining its delicate balance.",
        "The air is thick with the scent of exotic blossoms, and the ground hums with the soft vibrations of unseen creatures. Navigating Kepler-442b is an adventure in itself, with hidden caves, cascading waterfalls, and ancient, towering trees that reach for the sky.",
      ],
      bulletPoints: [
        "Atmosphere: Plasma soup, mostly hydrogen and helium. Not for breathing.",
        "Moons: None. It’s the center of attention anyway.",
        "Gravity: Ridiculously strong, keeps planets in line—or fries them if they wander too close.",
        "Known for: Rising and setting every day, making mornings unavoidable.",
        "Local Flora: Non-applicable. Only flaming glory here.",
      ],

      detailedDescription: [
        {
          title: "Blazing Majesty",
          para: "The Sun doesn’t mess around. It provides life-giving light and energy, but approach too closely and you’ll be instantly incinerated.",
        },
        {
          title: "Temperamental Star",
          para: "Solar flares and sunspots are the Sun’s way of showing personality. It’s unpredictable, fiery, and impossible to ignore.",
        },
        {
          title: "Exploit at Your Own Risk",
          para: "If you think you can harness its power, remember: overexposure will literally vaporize you. But hey, unlimited solar energy for the brave—or stupid.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        { url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg" },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        { url: "/documerica-x-EG-R-bUTI-unsplash.jpg" },
        { url: "/DG_FomMXoAA4OSI.jpeg" },
      ],
      surfacePreviewImages: [
        "/figma/fig7.webp",
        "/figma/fig6.webp",
        "/figma/als3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape6.webp",
      "/alienlandscape/alienlandscape7.webp",
      "/alienlandscape/alienlandscape8.webp",
      "/alienlandscape/alienlandscape9.webp",
      "/alienlandscape/alienlandscape10.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "The Moon",
        productDescription:
          "Perfect for controlling tides, inspiring poets, and hosting alien landings. Grandma might even be cooking vadai up there.",
        productPrice: 750.0,
        productImg: "/figma/fig3.webp",
      },
      {
        productName: "The Jupiton",
        productDescription:
          "Perfect for protecting the inner planets from asteroids and providing a stunning view.",
        productPrice: 15.0,
        productImg: "/figma/fig4.webp",
      },
      {
        productName: "Cosmic Dust",
        productDescription:
          "Ideal for creating stunning nebulae and star systems. Sprinkle it around for a touch of cosmic magic.",
        productPrice: 750.0,
        productImg: "/figma/fig2.webp",
      },
      {
        productName: "Cosmic Byte",
        productDescription:
          "Not that shady keyboard brand—this one is where the gods themselves come to vacation.",
        productPrice: 350.0,
        productImg: "/figma/fig1.webp",
      },
    ],
  },
  {
    planetId: 5,
    planetName: "Kepler 114b",
    planetPrice: 27000,
    planetShortDescription:
      "Earth’s estranged second cousin twice removed, lurking 1,400 light years away. Rumored to have sentient trees that judge your life choices and monsters that eat regrets. Bring a therapist and a blaster—therapy not included.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "This rock is basically Earth's mid-life crisis: distant, mysterious, and probably hiding some dark secrets under its canopy. Perfect for starting over if 'over' means dodging laser-eyed squirrels.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet5.webp",
    planetDescription: {
      paragraphs: [
        "Kepler-114b boasts a tangled mess of foliage that's denser than your grandma's fruitcake, blocking out dual suns like nature's own blackout curtains. The ecosystem here is less 'symphony of life' and more 'chaotic mosh pit,' where every bug and beast is plotting your demise while pretending to be cute.",
        "The atmosphere reeks of overripe alien fruits and desperation, with ground vibrations from creatures that might be dancing or just earthquakes in disguise. Exploring means stumbling into traps disguised as scenic spots—think waterfalls that whisper insults and caves full of existential dread.",
      ],
      bulletPoints: [
        "Surface: Covered in liquid diamond seas.",
        "Tourism: Visitors come for zero-gravity surfing.",
        "Aliens: Known to host jellyfish-shaped sky nomads.",
        "Weather: Rain falls upward into orbit.",
        "Mystery: Signals detected, repeating every 42 minutes.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/figma/fig7.webp",
        "/figma/fig6.webp",
        "/figma/als4.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape11.webp",
      "/alienlandscape/alienlandscape12.webp",
      "/alienlandscape/alienlandscape13.webp",
      "/alienlandscape/alienlandscape14.webp",
      "/alienlandscape/alienlandscape15.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "How to Avoid Scams",
        productDescription:
          "Customers who got scammed by us usually buy this book to avoid getting scammed next time.",
        productPrice: 257.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab1.webp",
      },
      {
        productName: "How to Get Your Money Back",
        productDescription:
          "Impossible! We keep our money very safe. But hey, who can blame victims for trying?",
        productPrice: 399.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab2.webp",
      },
      {
        productName: "How to Get Away with Murder",
        productDescription:
          "Some angry customers struck back. This book teaches you how to get away with murder… good luck finding us!",
        productPrice: 499.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab3.webp",
      },
      {
        productName: "Antidepressants",
        productDescription:
          "99.99% of our customers are depressed after purchasing. Stay healthy for our next scheme—pop one daily.",
        productPrice: 150.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab4.webp",
      },
    ],
  },
  {
    planetId: 6,
    planetName: "Keplore Beta",
    planetPrice: 34999,
    planetShortDescription:
      "The unfinished demo version of a planet: bugs everywhere, literally. Bioluminescent plants that flicker like bad WiFi, and fauna with extra legs because why not? Early access pricing—updates may never come.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Think of it as software in perpetual beta: full of features that sound cool but crash your spaceship. Ideal for testers who enjoy debugging with a machete.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet6.webp",
    planetDescription: {
      paragraphs: [
        "Keplore Beta's jungle is a glitchy wonderland where trees clip through each other and animals respawn mid-meal. The dual suns cause rendering errors, turning day into a strobe light party no one asked for.",
        "Air smells like burnt code and unfinished dreams, with vibrations from underground servers humming error messages. Exploration? More like beta testing—watch out for invisible walls and game-breaking exploits by the local wildlife.",
      ],
      bulletPoints: [
        "Rings: Shimmer with frozen neon gases.",
        "Caves: Glow with naturally occurring bioluminescence.",
        "Sky: Changes color hourly from green to orange.",
        "Travel: Requires magnetic boots to stand upright.",
        "Local Drink: 'Plasma Tea' brewed in boiling geysers.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape16.webp",
      "/alienlandscape/alienlandscape17.webp",
      "/alienlandscape/alienlandscape18.webp",
      "/alienlandscape/alienlandscape19.webp",
      "/alienlandscape/alienlandscape20.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "Quantum Space suit",
        productDescription:
          "Advanced protection for any environment—though not against stupidity. A helmet isn’t included, but luckily you won’t need one.",
        productPrice: 73459,
        productImg: "/pabm/suit.webp",
      },
      {
        productName: "SVT XL Cruiser",
        productDescription:
          "Fastest ship in the galaxy—though the service is painfully slow. Complimentary delays included, but you’ll get there… eventually.",
        productPrice: 500000,
        productImg: "/pabm/rock.webp",
      },
      {
        productName: "Oxygen Farm Pro",
        productDescription:
          "Sustained air for your colony—though freshness isn’t guaranteed. Comes slightly recycled, but hey, at least you’re breathing.",
        productPrice: 499.0,
        productImg: "/pabm/farm.webp",
      },
      {
        productName: "Alien Snack Pack",
        productDescription:
          "Exotic flavors from across the universe—personally hand-picked by our CEO, with questionable taste but undeniable commitment.",
        productPrice: 150.0,
        productImg: "/pabm/choc.webp",
      },
    ],
  },
  {
    planetId: 7,
    planetName: "Trappist 69d",
    planetPrice: 4000,
    planetShortDescription:
      "The ultimate party planet: bioluminescent flora that lights up like a rave, and six-legged creatures that dance better than you. Warning: The number 69 isn't just in the name—expect awkward encounters.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "If planets had Tinder profiles, this one would be all winks and innuendos. Dense jungles perfect for hide-and-seek with amorous aliens. Swipe right at your own risk.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet7.webp",
    planetDescription: {
      paragraphs: [
        "Trappist 69d's canopy is a neon-lit love nest, filtering suns into mood lighting for interspecies mingling. Ecosystem? More like a singles bar where everything's trying to hook up.",
        "Air thick with pheromones and bad decisions, ground pulsing with rhythmic thumps from mating rituals. Navigation involves dodging flirtatious vines and waterfalls that sound like pickup lines.",
      ],
      bulletPoints: [
        "Nickname: The Library Planet, storing data in crystal spires.",
        "Travelers: Pilgrims visit to download forgotten histories.",
        "Surface: Smooth plains of glass-like basalt.",
        "Orbit: Tilts dramatically, causing 3-year-long summers.",
        "Phenomenon: Shooting stars rain daily like clockwork.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape21.webp",
      "/alienlandscape/alienlandscape22.webp",
      "/alienlandscape/alienlandscape23.webp",
      "/alienlandscape/alienlandscape24.webp",
      "/alienlandscape/alienlandscape25.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "Alien artifact",
        productDescription:
          "Alien artifacts of unknown origin. Some website claim it's a cheap china toy, don't read those websites before buying.",
        productPrice: 750.0,
        productImg: "/figma/alar.webp",
      },
      {
        productName: "Energy Core",
        productDescription:
          "Very powerfull enery core. you can even wage wars with 4th diemnsion beings.",
        productPrice: 3000.0,
        productImg: "/figma/ener.webp",
      },
      {
        productName: "Alien Relic",
        productDescription:
          "Mysterious relics from an ancient alien civilization. Older than big bang itself.",
        productPrice: 3500000,
        productImg: "/figma/fig7.webp",
      },
      {
        productName: "Lab Equipment",
        productDescription:
          "State-of-the-art lab equipment for all your intergalactic research needs. Perfect for studying dark matter and other cosmic phenomena.",
        productPrice: 15000.0,
        productImg: "/figma/fig5.webp",
      },
    ],
  },
  {
    planetId: 8,
    planetName: "Proxima 1337b",
    planetPrice: 200000,
    planetShortDescription:
      "Elite hacker's paradise: flora that codes in binary glow, fauna with firewall fur. 1337 light years of digital wilderness—bring your keyboard, leave your noobs behind.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "This world's ecosystem runs on code: plants hack sunlight, animals DDoS predators. Perfect for cyberpunks who want to unplug by plugging into nature's matrix.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet8.webp",
    planetDescription: {
      paragraphs: [
        "Proxima 1337b's jungle is a virtual reality sim gone wild, with canopies that buffer light like slow internet. Life forms here evolve via updates, balancing on the edge of blue screen of death.",
        "Air buzzes with data packets and electric pollen, ground vibrating from underground servers. Exploring means firewall breaches—caves full of encrypted treasures, waterfalls of cascading code.",
      ],
      bulletPoints: [
        "Inhabitants: Giant insect colonies with city-scale hives.",
        "Exports: Sweet resin used as interstellar fuel.",
        "Landscape: Towers of stone shaped like organ pipes.",
        "Events: Known for its week-long aurora festivals.",
        "Danger: Frequent meteor showers scrape the surface.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape26.webp",
      "/alienlandscape/alienlandscape27.webp",
      "/alienlandscape/alienlandscape28.webp",
      "/alienlandscape/alienlandscape29.webp",
      "/alienlandscape/alienlandscape30.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "The Moon",
        productDescription:
          "Perfect for controlling tides, inspiring poets, and hosting alien landings. Grandma might even be cooking vadai up there.",
        productPrice: 750.0,
        productImg: "/figma/fig3.webp",
      },
      {
        productName: "The Jupiton",
        productDescription:
          "Perfect for protecting the inner planets from asteroids and providing a stunning view.",
        productPrice: 15.0,
        productImg: "/figma/fig4.webp",
      },
      {
        productName: "Cosmic Dust",
        productDescription:
          "Ideal for creating stunning nebulae and star systems. Sprinkle it around for a touch of cosmic magic.",
        productPrice: 750.0,
        productImg: "/figma/fig2.webp",
      },
      {
        productName: "Cosmic Byte",
        productDescription:
          "Not that shady keyboard brand—this one is where the gods themselves come to vacation.",
        productPrice: 350.0,
        productImg: "/figma/fig1.webp",
      },
    ],
  },
  {
    planetId: 9,
    planetName: "Tau Ceti 12b",
    planetPrice: 43000,
    planetShortDescription:
      "Boring name, exciting dangers: Glowing plants that lure you in, six-legged beasts that chase you out. Like a bad blind date in space—charming at first, deadly later.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Generic sci-fi planet #12: All the tropes, none of the originality. Jungles that swallow ships, fauna that thinks humans are snacks. Yawn—until it eats you.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet9.webp",
    planetDescription: {
      paragraphs: [
        "Tau Ceti 12b's canopy is cliché central, blocking suns like every alien movie ever. Ecosystem balanced? Ha—it's a food chain where you're the appetizer.",
        "Air scented with predictable peril, ground shaking from stampedes of unoriginal critters. Explore if you must: Caves of doom, waterfalls of woe, trees taller than plot holes.",
      ],
      bulletPoints: [
        "Nickname: The Hollow Planet, echoing like a drum.",
        "Explorers: Claim to hear voices in the vibrations.",
        "Oceans: Made of liquid methane, home to crystal fish.",
        "Mountains: Float slightly above the crust.",
        "Time: One day lasts only 3 hours.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/figma/fig7.webp",
        "/figma/fig6.webp",
        "/figma/als3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape31.webp",
      "/alienlandscape/alienlandscape32.webp",
      "/alienlandscape/alienlandscape33.webp",
      "/alienlandscape/alienlandscape34.webp",
      "/alienlandscape/alienlandscape35.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "How to Avoid Scams",
        productDescription:
          "Customers who got scammed by us usually buy this book to avoid getting scammed next time.",
        productPrice: 257.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab1.webp",
      },
      {
        productName: "How to Get Your Money Back",
        productDescription:
          "Impossible! We keep our money very safe. But hey, who can blame victims for trying?",
        productPrice: 399.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab2.webp",
      },
      {
        productName: "How to Get Away with Murder",
        productDescription:
          "Some angry customers struck back. This book teaches you how to get away with murder… good luck finding us!",
        productPrice: 499.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab3.webp",
      },
      {
        productName: "Antidepressants",
        productDescription:
          "99.99% of our customers are depressed after purchasing. Stay healthy for our next scheme—pop one daily.",
        productPrice: 150.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab4.webp",
      },
    ],
  },
  {
    planetId: 10,
    planetName: "Wolf 420a",
    planetPrice: 72000,
    planetShortDescription:
      "Blaze it on this hazy world: Bioluminescent buds that get you higher than orbit, six-legged stoners lounging everywhere. 420-friendly atmosphere—munchies not included.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "The ultimate chill spot: Jungles where everything's mellow, fauna too baked to bite. Perfect for space hippies or anyone needing a cosmic timeout.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet10.webp",
    planetDescription: {
      paragraphs: [
        "Wolf 420a's canopy filters suns into a perpetual purple haze, ecosystem in eternal munch mode. Life here is slow, like really slow—blame the pollens.",
        "Air thick with good vibes and giggles, ground vibrating from laid-back landslides. Explore at your own pace: Caves of contemplation, waterfalls of wisdom (or just water).",
      ],
      bulletPoints: [
        "Tourism: Known as the galaxy’s biggest amusement park.",
        "Gravity: Fluctuates, making rides unpredictable.",
        "Attractions: Volcano roller coasters fueled by real magma.",
        "Sky: Filled with fireworks from unstable gases.",
        "Food: Vendors sell 'Comet Candy' that evaporates instantly.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape36.webp",
      "/alienlandscape/alienlandscape37.webp",
      "/alienlandscape/alienlandscape38.webp",
      "/alienlandscape/alienlandscape39.webp",
      "/alienlandscape/alienlandscape40.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "Quantum Space suit",
        productDescription:
          "Advanced protection for any environment—though not against stupidity. A helmet isn’t included, but luckily you won’t need one.",
        productPrice: 73459,
        productImg: "/pabm/suit.webp",
      },
      {
        productName: "SVT XL Cruiser",
        productDescription:
          "Fastest ship in the galaxy—though the service is painfully slow. Complimentary delays included, but you’ll get there… eventually.",
        productPrice: 500000,
        productImg: "/pabm/rock.webp",
      },
      {
        productName: "Oxygen Farm Pro",
        productDescription:
          "Sustained air for your colony—though freshness isn’t guaranteed. Comes slightly recycled, but hey, at least you’re breathing.",
        productPrice: 499.0,
        productImg: "/pabm/farm.webp",
      },
      {
        productName: "Alien Snack Pack",
        productDescription:
          "Exotic flavors from across the universe—personally hand-picked by our CEO, with questionable taste but undeniable commitment.",
        productPrice: 150.0,
        productImg: "/pabm/choc.webp",
      },
    ],
  },
  {
    planetId: 11,
    planetName: "HD 8675309d",
    planetPrice: 25000,
    planetShortDescription:
      "Jenny's cosmic hideout: Glowing plants playing '80s hits, six-legged fans moshing. Call the number—get a planet instead of a date.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "This world's vibe is pure Tommy Tutone: Jungles rocking to eternal earworms, fauna with rhythm. Perfect for music lovers or those haunted by one-hit wonders.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet11.webp",
    planetDescription: {
      paragraphs: [
        "HD 8675309d's canopy remixes sunlight into synth waves, ecosystem jamming like a never-ending concert. Life forms dance in harmony—or headbang.",
        "Air filled with melodies and pollen beats, ground thumping basslines. Explore the hits: Caves echoing choruses, waterfalls splashing solos.",
      ],
      bulletPoints: [
        "Surface: Made of compressed ice harder than steel.",
        "Volcanoes: Erupt with frozen ammonia instead of lava.",
        "Moons: Six icy companions orbit in perfect sync.",
        "Culture: Nomadic tribes sail on ice sheets.",
        "Phenomenon: Entire planet glows under starlight.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape41.webp",
      "/alienlandscape/alienlandscape42.webp",
      "/alienlandscape/alienlandscape43.webp",
      "/alienlandscape/alienlandscape44.webp",
      "/alienlandscape/alienlandscape45.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "Alien artifact",
        productDescription:
          "Alien artifacts of unknown origin. Some website claim it's a cheap china toy, don't read those websites before buying.",
        productPrice: 750.0,
        productImg: "/figma/alar.webp",
      },
      {
        productName: "Energy Core",
        productDescription:
          "Very powerfull enery core. you can even wage wars with 4th diemnsion beings.",
        productPrice: 3000.0,
        productImg: "/figma/ener.webp",
      },
      {
        productName: "Alien Relic",
        productDescription:
          "Mysterious relics from an ancient alien civilization. Older than big bang itself.",
        productPrice: 3500000,
        productImg: "/figma/fig7.webp",
      },
      {
        productName: "Lab Equipment",
        productDescription:
          "State-of-the-art lab equipment for all your intergalactic research needs. Perfect for studying dark matter and other cosmic phenomena.",
        productPrice: 15000.0,
        productImg: "/figma/fig5.webp",
      },
    ],
  },
  {
    planetId: 12,
    planetName: "Vallayam Konda Planet",
    planetPrice: 19000,
    planetShortDescription:
      "Exotic name, mundane mayhem: Glowing greens that promise paradise, six-leggers that deliver chaos. Like ordering curry in space—spicy surprises await.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Sounds fancy, but it's basically space India with aliens: Dense jungles of spice-scented doom, fauna currying favor before biting.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet12.webp",
    planetDescription: {
      paragraphs: [
        "Vallayam Konda's canopy spices up the suns, ecosystem a masala of life and death. Everything's interconnected—like a family reunion gone wrong.",
        "Air aromatic with peril, ground rumbling monsoons. Navigate the naan-sense: Caves of curry, waterfalls of vindaloo vengeance.",
      ],
      bulletPoints: [
        "History: Said to be an ancient interstellar battlefield.",
        "Craters: Still glow faintly with radiation scars.",
        "Ruins: Alien weapons half-buried in deserts.",
        "Tourism: Banned for safety, but smugglers sneak in.",
        "Orbit: Wobbles strangely, like it remembers trauma.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape46.webp",
      "/alienlandscape/alienlandscape47.webp",
      "/alienlandscape/alienlandscape48.webp",
      "/alienlandscape/alienlandscape49.webp",
      "/alienlandscape/alienlandscape50.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "The Moon",
        productDescription:
          "Perfect for controlling tides, inspiring poets, and hosting alien landings. Grandma might even be cooking vadai up there.",
        productPrice: 750.0,
        productImg: "/figma/fig3.webp",
      },
      {
        productName: "The Jupiton",
        productDescription:
          "Perfect for protecting the inner planets from asteroids and providing a stunning view.",
        productPrice: 15.0,
        productImg: "/figma/fig4.webp",
      },
      {
        productName: "Cosmic Dust",
        productDescription:
          "Ideal for creating stunning nebulae and star systems. Sprinkle it around for a touch of cosmic magic.",
        productPrice: 750.0,
        productImg: "/figma/fig2.webp",
      },
      {
        productName: "Cosmic Byte",
        productDescription:
          "Not that shady keyboard brand—this one is where the gods themselves come to vacation.",
        productPrice: 350.0,
        productImg: "/figma/fig1.webp",
      },
    ],
  },
  {
    planetId: 13,
    planetName: "Krypton",
    planetPrice: 1000000,
    planetShortDescription:
      "Home of superheroes—or villains? Glowing rocks that grant powers, six-legged Krypto the dogs. Explodes eventually—buy low, sell never.",
    planetTitleDescription: "Killing Superman: Ain’t cheap.",
    planetInnterDescription:
      "The planet that made Superman fly—and then blew up. Now yours for a fortune. Perfect for comic fans or doomsday preppers.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet13.webp",
    planetDescription: {
      paragraphs: [
        "Krypton's jungle is radioactive chic, filtering red suns into power boosts. Ecosystem? Heroes and zeros in balance—until the boom.",
        "Air charged with destiny, ground quaking prophecies. Explore legends: Caves of crystals, waterfalls of weakness.",
      ],
      bulletPoints: [
        "Atmosphere: Smells faintly like burnt sugar.",
        "Moons: One moon constantly rains sparks.",
        "Terrain: Forests of metallic redwood trees.",
        "Animals: Flying lizards feed on iron pollen.",
        "Known for: Meteor rodeo competitions.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape51.webp",
      "/alienlandscape/alienlandscape52.webp",
      "/alienlandscape/alienlandscape53.webp",
      "/alienlandscape/alienlandscape1.webp",
      "/alienlandscape/alienlandscape2.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "How to Avoid Scams",
        productDescription:
          "Customers who got scammed by us usually buy this book to avoid getting scammed next time.",
        productPrice: 257.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab1.webp",
      },
      {
        productName: "How to Get Your Money Back",
        productDescription:
          "Impossible! We keep our money very safe. But hey, who can blame victims for trying?",
        productPrice: 399.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab2.webp",
      },
      {
        productName: "How to Get Away with Murder",
        productDescription:
          "Some angry customers struck back. This book teaches you how to get away with murder… good luck finding us!",
        productPrice: 499.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab3.webp",
      },
      {
        productName: "Antidepressants",
        productDescription:
          "99.99% of our customers are depressed after purchasing. Stay healthy for our next scheme—pop one daily.",
        productPrice: 150.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab4.webp",
      },
    ],
  },
  {
    planetId: 14,
    planetName: "Keplore Kappa",
    planetPrice: 66000,
    planetShortDescription:
      "Frat house in space: Glowing kegs of flora, six-legged bros partying hard. Hazing includes alien initiations—bring your toga.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Greek letter vibes: Jungles of eternal rush week, fauna pledging loyalty or pranks. Ideal for bros and sorority space explorers.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet14.webp",
    planetDescription: {
      paragraphs: [
        "Keplore Kappa's canopy turns suns into strobe lights, ecosystem a non-stop kegger. Life forms chug and chug—balance is for nerds.",
        "Air beery and boisterous, ground pounding from frat stomps. Rush the risks: Caves of challenges, waterfalls of waterfalls (beer ones).",
      ],
      bulletPoints: [
        "Surface: Blanketed in perpetual snowfall.",
        "Rivers: Flow with liquid nitrogen.",
        "Phenomenon: Snowflakes ring like tiny bells.",
        "Inhabitants: Burrowers that hibernate for centuries.",
        "Myth: Said to hide a frozen alien king.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Here logic takes a vacation. You’ll find yourself debating with dodos who always think they’re right, and somehow losing heated arguments to potted plants that don’t even have mouths. Confidence here is optional, humility is mandatory.",
        },
        {
          title: "Overthink Overload",
          para: "Every choice feels like solving a cosmic riddle. Should you open the left door, or is the right door secretly judging you? By the time you decide, the opportunity has already grown legs and walked away laughing.",
        },
        {
          title: "Pricey Pondering",
          para: "Enlightenment is available, but it comes with a price tag larger than a small moon. You’ll gain profound insights into existence, but your wallet will achieve total emptiness faster than a black hole devouring starlight.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape3.webp",
      "/alienlandscape/alienlandscape4.webp",
      "/alienlandscape/alienlandscape5.webp",
      "/alienlandscape/alienlandscape6.webp",
      "/alienlandscape/alienlandscape7.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "Quantum Space suit",
        productDescription:
          "Advanced protection for any environment—though not against stupidity. A helmet isn’t included, but luckily you won’t need one.",
        productPrice: 73459,
        productImg: "/pabm/suit.webp",
      },
      {
        productName: "SVT XL Cruiser",
        productDescription:
          "Fastest ship in the galaxy—though the service is painfully slow. Complimentary delays included, but you’ll get there… eventually.",
        productPrice: 500000,
        productImg: "/pabm/rock.webp",
      },
      {
        productName: "Oxygen Farm Pro",
        productDescription:
          "Sustained air for your colony—though freshness isn’t guaranteed. Comes slightly recycled, but hey, at least you’re breathing.",
        productPrice: 499.0,
        productImg: "/pabm/farm.webp",
      },
      {
        productName: "Alien Snack Pack",
        productDescription:
          "Exotic flavors from across the universe—personally hand-picked by our CEO, with questionable taste but undeniable commitment.",
        productPrice: 150.0,
        productImg: "/pabm/choc.webp",
      },
    ],
  },
  {
    planetId: 15,
    planetName: "Keplore Lambda",
    planetPrice: 1300,
    planetShortDescription:
      "Budget bin special: Dimly glowing weeds, four-legged rejects (budget cuts). Like a dollar store planet—cheap thrills, cheaper quality.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Lambda means average in Greek—fitting for this meh world. Jungles on a shoestring, fauna phoning it in.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet15.webp",
    planetDescription: {
      paragraphs: [
        "Keplore Lambda's canopy barely blocks suns, ecosystem scraping by. Life? Meh—balanced on coupons.",
        "Air bland, ground mildly shaking. Explore the ordinary: Caves of nothing, waterfalls of whatever.",
      ],
      bulletPoints: [
        "Rings: Made of shattered satellites.",
        "Atmosphere: Permanently stormy, lightning arcs nonstop.",
        "Exports: Energy harvested from the storms.",
        "Events: Known for annual lightning-surf championships.",
        "Phenomenon: Night sky glows brighter than the day.",
      ],
      detailedDescription: [
        {
          title: "Bargain Boredom",
          para: "Nothing special— that's the special part.",
        },
        {
          title: "Low Expectations",
          para: "Won't disappoint if you expect nothing.",
        },
        {
          title: "Cheap Thrill",
          para: "Affordable apathy in space.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape8.webp",
      "/alienlandscape/alienlandscape9.webp",
      "/alienlandscape/alienlandscape10.webp",
      "/alienlandscape/alienlandscape11.webp",
      "/alienlandscape/alienlandscape12.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "Alien artifact",
        productDescription:
          "Alien artifacts of unknown origin. Some website claim it's a cheap china toy, don't read those websites before buying.",
        productPrice: 750.0,
        productImg: "/figma/alar.webp",
      },
      {
        productName: "Energy Core",
        productDescription:
          "Very powerfull enery core. you can even wage wars with 4th diemnsion beings.",
        productPrice: 3000.0,
        productImg: "/figma/ener.webp",
      },
      {
        productName: "Alien Relic",
        productDescription:
          "Mysterious relics from an ancient alien civilization. Older than big bang itself.",
        productPrice: 3500000,
        productImg: "/figma/fig7.webp",
      },
      {
        productName: "Lab Equipment",
        productDescription:
          "State-of-the-art lab equipment for all your intergalactic research needs. Perfect for studying dark matter and other cosmic phenomena.",
        productPrice: 15000.0,
        productImg: "/figma/fig5.webp",
      },
    ],
  },
  {
    planetId: 16,
    planetName: "Keplore Mu",
    planetPrice: 15000,
    planetShortDescription:
      "Cow-themed cosmos: Glowing pastures, six-legged moos. Milk the galaxy—literally, with alien udders.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Mu as in moo: Dairy dreams in space. Jungles of grass, fauna herding themselves.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet16.webp",
    planetDescription: {
      paragraphs: [
        "Keplore Mu's canopy grazes suns, ecosystem a pasture party. Life milks it for all it's worth.",
        "Air cheesy, ground stampeding. Herd the horizons: Caves of curd, waterfalls of whey.",
      ],
      bulletPoints: [
        "Nickname: The Clockwork Planet.",
        "Surface: Gigantic gears and mechanisms visible from orbit.",
        "Rumor: Entire world built by an ancient AI.",
        "Time: Days pass with audible ticking across continents.",
        "Mystery: No one knows who winds it up.",
      ],
      detailedDescription: [
        {
          title: "Dairy Dangers",
          para: "Beware sour milk beasts. Freshness not guaranteed.",
        },
        {
          title: "Farm Fresh Fiascos",
          para: "Herd or be herded. Space cowboys welcome.",
        },
        {
          title: "Moo Money",
          para: "Affordable for aspiring space farmers.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape13.webp",
      "/alienlandscape/alienlandscape14.webp",
      "/alienlandscape/alienlandscape15.webp",
      "/alienlandscape/alienlandscape16.webp",
      "/alienlandscape/alienlandscape17.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "The Moon",
        productDescription:
          "Perfect for controlling tides, inspiring poets, and hosting alien landings. Grandma might even be cooking vadai up there.",
        productPrice: 750.0,
        productImg: "/figma/fig3.webp",
      },
      {
        productName: "The Jupiton",
        productDescription:
          "Perfect for protecting the inner planets from asteroids and providing a stunning view.",
        productPrice: 15.0,
        productImg: "/figma/fig4.webp",
      },
      {
        productName: "Cosmic Dust",
        productDescription:
          "Ideal for creating stunning nebulae and star systems. Sprinkle it around for a touch of cosmic magic.",
        productPrice: 750.0,
        productImg: "/figma/fig2.webp",
      },
      {
        productName: "Cosmic Byte",
        productDescription:
          "Not that shady keyboard brand—this one is where the gods themselves come to vacation.",
        productPrice: 350.0,
        productImg: "/figma/fig1.webp",
      },
    ],
  },
  {
    planetId: 17,
    planetName: "Double Ring dodo",
    planetPrice: 98000,
    planetShortDescription:
      "Twice the rings, twice the bling: Glowing halos of doom, six-legged dodos too dumb to fly. Extinction event waiting to happen—again.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Dodo-themed disaster: Jungles where stupidity reigns, fauna evolving backwards. Perfect for Darwin award seekers.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet18.webp",
    planetDescription: {
      paragraphs: [
        "Double Ring Dodo's canopy doubles as debris fields, ecosystem dumbed down. Life? Doomed to repeat history.",
        "Air thick with idiocy, ground quaking facepalms. Explore extinction: Caves of clueless, waterfalls of whoops.",
      ],
      bulletPoints: [
        "Atmosphere: Thin, laced with glitter-like particles.",
        "Flora: Trees grow sideways, chasing starlight.",
        "Fauna: Worms that sing in chorus underground.",
        "Tourism: Glow festivals attract poets and artists.",
        "Phenomenon: Shadows appear hours before objects do.",
      ],
      detailedDescription: [
        {
          title: "Extinction Essentials",
          para: "Watch dodos die hilariously. Bring popcorn.",
        },
        {
          title: "Stupidity Safeguards",
          para: "Don't catch the dumb. Helmets recommended.",
        },
        {
          title: "Ring Price",
          para: "Expensive for endless entertainment.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/alienlandscape/alienlandscape18.webp",
      "/alienlandscape/alienlandscape19.webp",
      "/alienlandscape/alienlandscape20.webp",
      "/alienlandscape/alienlandscape21.webp",
      "/alienlandscape/alienlandscape22.webp",
    ],
    peopleAlsoBought: [
      {
        productName: "How to Avoid Scams",
        productDescription:
          "Customers who got scammed by us usually buy this book to avoid getting scammed next time.",
        productPrice: 257.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab1.webp",
      },
      {
        productName: "How to Get Your Money Back",
        productDescription:
          "Impossible! We keep our money very safe. But hey, who can blame victims for trying?",
        productPrice: 399.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab2.webp",
      },
      {
        productName: "How to Get Away with Murder",
        productDescription:
          "Some angry customers struck back. This book teaches you how to get away with murder… good luck finding us!",
        productPrice: 499.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab3.webp",
      },
      {
        productName: "Antidepressants",
        productDescription:
          "99.99% of our customers are depressed after purchasing. Stay healthy for our next scheme—pop one daily.",
        productPrice: 150.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab4.webp",
      },
    ],
  },
  {
    planetId: 18,
    planetName: "Keplore Nu",
    planetPrice: 113000,
    planetShortDescription:
      "Nude beach of the stars: Glowing skins, six-legged exhibitionists. Clothing optional—armor recommended.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Nu as in nude: Bare-all biosphere, jungles without shame. Fauna flaunts it all.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet1.webp",
    planetDescription: {
      paragraphs: [
        "Keplore Nu's canopy bares the suns, ecosystem stripped down. Life au naturel—raw and revealing.",
        "Air liberating, ground exposing secrets. Bare the basics: Caves of candor, waterfalls of wash-offs.",
      ],
      bulletPoints: [
        "Surface: Made entirely of rust-red deserts.",
        "Events: Dust devils grow as tall as skyscrapers.",
        "Exports: Rare iron crystals used in starship hulls.",
        "Moons: Cast triangular shadows instead of round.",
        "Inhabitants: Nomads survive on dew-collecting tents.",
      ],
      detailedDescription: [
        {
          title: "Bare Necessities",
          para: "Strip away inhibitions—or get stripped by vines.",
        },
        {
          title: "Exposure Risks",
          para: "Sunburns and stares. Sunscreen sold out.",
        },
        {
          title: "Premium Peel",
          para: "High price for high exposure.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
    ],
    peopleAlsoBought: [
      {
        productName: "Quantum Space suit",
        productDescription:
          "Advanced protection for any environment—though not against stupidity. A helmet isn’t included, but luckily you won’t need one.",
        productPrice: 73459,
        productImg: "/pabm/suit.webp",
      },
      {
        productName: "SVT XL Cruiser",
        productDescription:
          "Fastest ship in the galaxy—though the service is painfully slow. Complimentary delays included, but you’ll get there… eventually.",
        productPrice: 500000,
        productImg: "/pabm/rock.webp",
      },
      {
        productName: "Oxygen Farm Pro",
        productDescription:
          "Sustained air for your colony—though freshness isn’t guaranteed. Comes slightly recycled, but hey, at least you’re breathing.",
        productPrice: 499.0,
        productImg: "/pabm/farm.webp",
      },
      {
        productName: "Alien Snack Pack",
        productDescription:
          "Exotic flavors from across the universe—personally hand-picked by our CEO, with questionable taste but undeniable commitment.",
        productPrice: 150.0,
        productImg: "/pabm/choc.webp",
      },
    ],
  },
  {
    planetId: 19,
    planetName: "Obsidian Throne",
    planetPrice: 400000,
    planetShortDescription:
      "Game of Planets: Dark glowing rocks, six-legged schemers. Claim the throne—or die trying. Winter is always coming.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Fantasy epic in space: Jungles of intrigue, fauna plotting coups. Perfect for would-be kings or cannon fodder.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet2.webp",
    planetDescription: {
      paragraphs: [
        "Obsidian Throne's canopy shadows schemes, ecosystem of backstabs. Life plays the game—hard.",
        "Air heavy with betrayal, ground trembling treachery. Quest the quagmires: Caves of conspiracies, waterfalls of woe.",
      ],
      bulletPoints: [
        "Nickname: The Ocean in the Sky.",
        "Oceans: Suspended above the surface in giant bubbles.",
        "Travel: Boats float through the air instead of water.",
        "Animals: Fish leap between clouds like dolphins.",
        "Danger: Storms pop entire oceans in seconds.",
      ],
      detailedDescription: [
        {
          title: "Throne Games",
          para: "Ally with aliens—or get shanked. Valar morghulis.",
        },
        {
          title: "Betrayal Basics",
          para: "Trust no one. Especially the cute ones.",
        },
        {
          title: "Royal Ransom",
          para: "Pricey for power plays.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
    ],
    peopleAlsoBought: [
      {
        productName: "Alien artifact",
        productDescription:
          "Alien artifacts of unknown origin. Some website claim it's a cheap china toy, don't read those websites before buying.",
        productPrice: 750.0,
        productImg: "/figma/alar.webp",
      },
      {
        productName: "Energy Core",
        productDescription:
          "Very powerfull enery core. you can even wage wars with 4th diemnsion beings.",
        productPrice: 3000.0,
        productImg: "/figma/ener.webp",
      },
      {
        productName: "Alien Relic",
        productDescription:
          "Mysterious relics from an ancient alien civilization. Older than big bang itself.",
        productPrice: 3500000,
        productImg: "/figma/fig7.webp",
      },
      {
        productName: "Lab Equipment",
        productDescription:
          "State-of-the-art lab equipment for all your intergalactic research needs. Perfect for studying dark matter and other cosmic phenomena.",
        productPrice: 15000.0,
        productImg: "/figma/fig5.webp",
      },
    ],
  },
  {
    planetId: 20,
    planetName: "Blue Bamda 991",
    planetPrice: 2000,
    planetShortDescription:
      "Budget blue ball: Faintly glowing blues, six-legged blues singers. Depressing deals—sadness sold cheap.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "All shades of blue: Melancholy jungles, mopey fauna. For when you want space to cry in.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet3.webp",
    planetDescription: {
      paragraphs: [
        "Blue Bamda 991's canopy tints suns sad, ecosystem down in the dumps. Life sings the blues—literally.",
        "Air sorrowful, ground sobbing. Wallow in woes: Caves of cries, waterfalls of tears.",
      ],
      bulletPoints: [
        "Atmosphere: Denser than water, flying is easier than walking.",
        "Surface: Hidden under a permanent golden haze.",
        "Inhabitants: Sky cities built on platforms of balloons.",
        "Tourism: Famous for endless sky parades.",
        "Mystery: Surface never seen by outsiders.",
      ],
      detailedDescription: [
        {
          title: "Sad Songs",
          para: "Fauna croons heartbreak hits. Bring tissues.",
        },
        {
          title: "Depression Dangers",
          para: "Might make you blue. Antidepressants advised.",
        },
        {
          title: "Bargain Blues",
          para: "Cheap for cheerless charm.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
    ],
    peopleAlsoBought: [
      {
        productName: "The Moon",
        productDescription:
          "Perfect for controlling tides, inspiring poets, and hosting alien landings. Grandma might even be cooking vadai up there.",
        productPrice: 750.0,
        productImg: "/figma/fig3.webp",
      },
      {
        productName: "The Jupiton",
        productDescription:
          "Perfect for protecting the inner planets from asteroids and providing a stunning view.",
        productPrice: 15.0,
        productImg: "/figma/fig4.webp",
      },
      {
        productName: "Cosmic Dust",
        productDescription:
          "Ideal for creating stunning nebulae and star systems. Sprinkle it around for a touch of cosmic magic.",
        productPrice: 750.0,
        productImg: "/figma/fig2.webp",
      },
      {
        productName: "Cosmic Byte",
        productDescription:
          "Not that shady keyboard brand—this one is where the gods themselves come to vacation.",
        productPrice: 350.0,
        productImg: "/figma/fig1.webp",
      },
    ],
  },
  {
    planetId: 21,
    planetName: "cadbury cosmic candine",
    planetPrice: 5000,
    planetShortDescription:
      "Sweet space treat: Glowing candy canes, six-legged sugar rushes. Diabetic nightmares—delicious doom.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Chocolate cosmos: Jungles of junk food, fauna on sugar highs. For sweet tooths or crash dieters.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet4.webp",
    planetDescription: {
      paragraphs: [
        "Cadbury Cosmic Candine's canopy sugars suns, ecosystem hyperactive. Life bounces off walls—sweetly.",
        "Air candied, ground sticky. Indulge in indulgence: Caves of caramel, waterfalls of fudge.",
      ],
      bulletPoints: [
        "Geology: Entire crust is made of glass.",
        "Events: Earthquakes create dazzling light shows.",
        "Travel: Visitors wear tinted helmets to avoid blindness.",
        "Exports: Glass harvested for galactic art.",
        "Myth: Said to be the birthplace of starlight.",
      ],

      detailedDescription: [
        {
          title: "Sweet Spots",
          para: "Harvest hypers. Crash inevitable.",
        },
        {
          title: "Sugar Shocks",
          para: "Hyper fauna charges. Dentists on call.",
        },
        {
          title: "Candy Cost",
          para: "Cheap calories in cosmos.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
    ],
    peopleAlsoBought: [
      {
        productName: "How to Avoid Scams",
        productDescription:
          "Customers who got scammed by us usually buy this book to avoid getting scammed next time.",
        productPrice: 257.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab1.webp",
      },
      {
        productName: "How to Get Your Money Back",
        productDescription:
          "Impossible! We keep our money very safe. But hey, who can blame victims for trying?",
        productPrice: 399.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab2.webp",
      },
      {
        productName: "How to Get Away with Murder",
        productDescription:
          "Some angry customers struck back. This book teaches you how to get away with murder… good luck finding us!",
        productPrice: 499.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab3.webp",
      },
      {
        productName: "Antidepressants",
        productDescription:
          "99.99% of our customers are depressed after purchasing. Stay healthy for our next scheme—pop one daily.",
        productPrice: 150.0,
        productImg: "/descriptiveImg/Earth/peoplealsobought/pab4.webp",
      },
    ],
  },
  {
    planetId: 22,
    planetName: "Nebula oblangata",
    planetPrice: 1500099,
    planetShortDescription:
      "Brainy nebula nugget: Glowing neurons, six-legged thinkers. Overthink your purchase—philosophy included.",
    planetTitleDescription: "Not just a planet, a new beginning",
    planetInnterDescription:
      "Medulla of the milky way: Jungles of jargon, fauna debating existence. For intellectuals or insomniacs.",
    planetRarity: "Rare",
    planetStars: 5,
    deliveryIn: 3,
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet20.webp",
    planetDescription: {
      paragraphs: [
        "Nebula Oblangata's canopy synapses suns, ecosystem pondering profundities. Life questions everything—including you.",
        "Air intellectual, ground ruminating. Ponder the puzzles: Caves of cognition, waterfalls of wisdom.",
      ],
      bulletPoints: [
        "Atmosphere: Breathable, pollens spark epiphanies.",
        "Moons: Two thinkers 'Cogito' and 'Ergo,' glowing thoughtfully.",
        "Gravity: 1.1 G, grounding ideas.",
        "Known for: The Philosophical Forest and the Insight Inundations.",
        "Local Flora: 'Thought Thistles' and 'Idea Ivies'.",
      ],
      detailedDescription: [
        {
          title: "Brain Teasers",
          para: "Debate with dodos. Lose arguments to plants.",
        },
        {
          title: "Overthink Overload",
          para: "Paralysis by analysis. Action not guaranteed.",
        },
        {
          title: "Pricey Pondering",
          para: "Expensive enlightenment.",
        },
      ],
      images: [
        {
          url: "/test.jpg",
        },
        {
          url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg",
        },
        {
          url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
        },
        {
          url: "/documerica-x-EG-R-bUTI-unsplash.jpg",
        },
        {
          url: "/DG_FomMXoAA4OSI.jpeg",
        },
      ],
      surfacePreviewImages: [
        "/surfacePreview/surfacePreview1.webp",
        "/surfacePreview/surfacePreview2.webp",
        "/surfacePreview/surfacePreview3.webp",
      ],
    },
    planetGallery: [
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
      "/WEB BANNER 41.png",
    ],
    peopleAlsoBought: [
      {
        productName: "Quantum Space suit",
        productDescription:
          "Advanced protection for any environment—though not against stupidity. A helmet isn’t included, but luckily you won’t need one.",
        productPrice: 73459,
        productImg: "/pabm/suit.webp",
      },
      {
        productName: "SVT XL Cruiser",
        productDescription:
          "Fastest ship in the galaxy—though the service is painfully slow. Complimentary delays included, but you’ll get there… eventually.",
        productPrice: 500000,
        productImg: "/pabm/rock.webp",
      },
      {
        productName: "Oxygen Farm Pro",
        productDescription:
          "Sustained air for your colony—though freshness isn’t guaranteed. Comes slightly recycled, but hey, at least you’re breathing.",
        productPrice: 499.0,
        productImg: "/pabm/farm.webp",
      },
      {
        productName: "Alien Snack Pack",
        productDescription:
          "Exotic flavors from across the universe—personally hand-picked by our CEO, with questionable taste but undeniable commitment.",
        productPrice: 150.0,
        productImg: "/pabm/choc.webp",
      },
    ],
  },
];

planetData.forEach((planet, index) => {
  if (index === 0) return; // skip first
  planet.planetGallery = [];

  for (let i = 0; i < 5; i++) {
    planet.planetGallery.push(banners[bannerIndex]);
    bannerIndex = (bannerIndex + 1) % banners.length;
  }
});

planetData.forEach((planet, idx) => {
  if (idx < 2) return; // skip first 2 planets

  // first three images
  const images = [
    { url: planet.planetThumbnailImg }, // first = thumbnail
    { url: `/planetsqare/planetsqaure${squareIndex}.webp` },
    { url: `/planetsurf/planet${surfIndex}.webp` },
  ];

  // increment indices for next images
  squareIndex = (squareIndex % planetSquareCount) + 1;
  surfIndex = (surfIndex % planetSurfCount) + 1;

  // last two images (next in sequence)
  images.push(
    { url: `/planetsqare/planetsqaure${squareIndex}.webp` },
    { url: `/planetsurf/planet${surfIndex}.webp` }
  );

  // increment indices again for future planets
  squareIndex = (squareIndex % planetSquareCount) + 1;
  surfIndex = (surfIndex % planetSurfCount) + 1;

  planet.planetDescription.images = images;
});

// Stars
planetData.slice(1).forEach((planet) => {
  // Random planetStars between 1 and 4
  planet.planetStars = Math.floor(Math.random() * 4) + 1;

  // Random deliveryIn between 0 and 99
  planet.deliveryIn = Math.floor(Math.random() * 100);
});
