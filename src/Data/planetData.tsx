import { Planets } from "@/types/types";

export const planetData: Planets = [
  {
    planetId: 1,
    planetName: "Kepler-442b",
    planetPrice: 15000,
    planetShortDescription:
      "A verdant jungle world known for its bioluminescent flora and unique, six-legged fauna.",
    planetTitleDescription: "Not just a planet, a new begining",
    planetInnterDescription: "lorem",
    planetRarity: "Rare",
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 90,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet1.webp",
    planetDescription: {
      paragraphs: [
        "Kepler-442b is an ecological marvel, with a dense, interconnected canopy that filters out the harsh light of its binary suns, creating a perpetual twilight on the forest floor. The planet's ecosystem is a symphony of life, where every organism plays a crucial role in maintaining its delicate balance.",
        "The air is thick with the scent of exotic blossoms, and the ground hums with the soft vibrations of unseen creatures. Navigating Kepler-442b is an adventure in itself, with hidden caves, cascading waterfalls, and ancient, towering trees that reach for the sky.",
      ],
      bulletPoints: [
        "Atmosphere: Breathable, with a high concentration of exotic pollens.",
        "Moons: Two, named 'Luna' and 'Selene,' which cast an ethereal glow during the night.",
        "Gravity: 1.1 G, slightly heavier than Earth.",
        "Known for: The Great Luminescent Forest and the Whisperfalls.",
        "Local Flora: Includes the 'Glimmerpetal' and the 'Sun-eater' vines.",
      ],
      images: [
        "https://example.com/images/kepler442b_desc1.jpg",
        "https://example.com/images/kepler442b_desc2.jpg",
      ],
      surfacePreviewImages: [
        "https://example.com/images/kepler442b_surface1.jpg",
        "https://example.com/images/kepler442b_surface2.jpg",
      ],
    },
    planetGallery: [
      "https://example.com/images/kepler442b_gallery1.jpg",
      "https://example.com/images/kepler442b_gallery2.jpg",
      "https://example.com/images/kepler442b_gallery3.jpg",
      "https://example.com/images/kepler442b_gallery4.jpg",
      "https://example.com/images/kepler442b_gallery5.jpg",
    ],
    peopleAlsoBought: [
      {
        productName: "Orbital Scanner Module",
        productDescription:
          "Enhance your ship's sensors to detect hidden resources and life forms on any planet.",
        productPrice: 750.0,
        productImg: "https://example.com/images/scanner_module.jpg",
      },
      {
        productName: "Terraforming Kit (Basic)",
        productDescription:
          "Start the process of making a hostile planet more hospitable with this starter kit.",
        productPrice: 15000.0,
        productImg: "https://example.com/images/terraforming_kit.jpg",
      },
    ],
  },
  {
    planetId: 2,
    planetName: "Zypheron-7",
    planetPrice: 18000,
    planetShortDescription:
      "A desert planet with crystalline dunes that resonate with harmonic vibrations under starlight.",
    planetRarity: "Epic",
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 0,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet15.webp",
    planetDescription: {
      paragraphs: [
        "Zypheron-7 is a mesmerizing world of endless crystalline deserts, where the sands sing under the light of its triple moons. The dunes, formed from ancient mineral deposits, create intricate patterns visible from orbit.",
        "Explorers are drawn to its underground oases, hidden beneath the surface, where rare luminescent algae thrive. The planet's stark beauty is matched by its harsh environment, requiring specialized gear for survival.",
      ],
      bulletPoints: [
        "Atmosphere: Thin, requiring oxygen supplements.",
        "Moons: Three, named 'Aether,' 'Vox,' and 'Lumin.'",
        "Gravity: 0.8 G, lighter than Earth.",
        "Known for: The Singing Dunes and Crystal Caverns.",
        "Local Fauna: Includes the elusive 'Starshade Lizard.'",
      ],
      images: [
        "https://example.com/images/zypheron7_desc1.jpg",
        "https://example.com/images/zypheron7_desc2.jpg",
      ],
      surfacePreviewImages: [
        "https://example.com/images/zypheron7_surface1.jpg",
        "https://example.com/images/zypheron7_surface2.jpg",
      ],
    },
    planetGallery: [
      "https://example.com/images/zypheron7_gallery1.jpg",
      "https://example.com/images/zypheron7_gallery2.jpg",
      "https://example.com/images/zypheron7_gallery3.jpg",
      "https://example.com/images/zypheron7_gallery4.jpg",
      "https://example.com/images/zypheron7_gallery5.jpg",
    ],
    peopleAlsoBought: [
      {
        productName: "Thermal Regulator Suit",
        productDescription:
          "Protects against extreme temperatures in harsh desert environments.",
        productPrice: 1200.0,
        productImg: "https://example.com/images/thermal_suit.jpg",
      },
      {
        productName: "Water Recycling Unit",
        productDescription:
          "Compact system for recycling and purifying water in arid conditions.",
        productPrice: 2000.0,
        productImg: "https://example.com/images/water_recycler.jpg",
      },
    ],
  },
  {
    planetId: 3,
    planetName: "Aquavion",
    planetPrice: 22000,
    planetShortDescription:
      "An ocean-covered planet with floating coral cities and bioluminescent marine life.",
    planetRarity: "Legendary",
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 15000,
    },
    planetInStock: false,
    planetThumbnailImg: "/planet/planet16.webp",
    planetDescription: {
      paragraphs: [
        "Aquavion is a waterworld where the entire surface is covered by a vast, deep ocean. Floating coral cities, built by an ancient aquatic civilization, drift across the waves, glowing with bioluminescent hues.",
        "The planet's depths hide mysterious ruins and colossal sea creatures, making exploration both thrilling and perilous. Submersible vehicles are essential for navigating its underwater realms.",
      ],
      bulletPoints: [
        "Atmosphere: High humidity, breathable with filtration.",
        "Moons: One, named 'Tidal,' influencing massive oceanic currents.",
        "Gravity: 1.0 G, equivalent to Earth.",
        "Known for: Coral Cities and the Abyssal Trenches.",
        "Local Fauna: Includes the 'Glowfin Leviathan' and 'Crystal Jelly.'",
      ],
      images: [
        "https://example.com/images/aquavion_desc1.jpg",
        "https://example.com/images/aquavion_desc2.jpg",
      ],
      surfacePreviewImages: [
        "https://example.com/images/aquavion_surface1.jpg",
        "https://example.com/images/aquavion_surface2.jpg",
      ],
    },
    planetGallery: [
      "https://example.com/images/aquavion_gallery1.jpg",
      "https://example.com/images/aquavion_gallery2.jpg",
      "https://example.com/images/aquavion_gallery3.jpg",
      "https://example.com/images/aquavion_gallery4.jpg",
      "https://example.com/images/aquavion_gallery5.jpg",
    ],
    peopleAlsoBought: [
      {
        productName: "Submersible Drone",
        productDescription:
          "Explore underwater environments with this advanced aquatic drone.",
        productPrice: 3000.0,
        productImg: "https://example.com/images/submersible_drone.jpg",
      },
      {
        productName: "Aqua-Respirator",
        productDescription:
          "Advanced breathing apparatus for extended underwater missions.",
        productPrice: 1800.0,
        productImg: "https://example.com/images/aqua_respirator.jpg",
      },
    ],
  },
  {
    planetId: 4,
    planetName: "Vulcanis-9",
    planetPrice: 12000,
    planetShortDescription:
      "A volcanic planet with rivers of molten lava and rare geothermal crystals.",
    planetRarity: "Uncommon",
    planetOfferDetails: {
      hasOffer: false,
      offerPrice: 0,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet17.webp",
    planetDescription: {
      paragraphs: [
        "Vulcanis-9 is a fiery world dominated by active volcanoes and rivers of molten lava. The planet's surface is a mosaic of blackened rock and glowing geothermal crystals, prized for their energy properties.",
        "Despite its hostile environment, Vulcanis-9 harbors unique microbial life adapted to extreme heat. Mining expeditions are common, but require advanced heat-resistant equipment.",
      ],
      bulletPoints: [
        "Atmosphere: Toxic, requiring sealed suits.",
        "Moons: None, resulting in stable but extreme conditions.",
        "Gravity: 0.9 G, slightly lighter than Earth.",
        "Known for: Lava Rivers and Crystal Spires.",
        "Local Flora: Heat-resistant 'Ember Moss.'",
      ],
      images: [
        "https://example.com/images/vulcanis9_desc1.jpg",
        "https://example.com/images/vulcanis9_desc2.jpg",
      ],
      surfacePreviewImages: [
        "https://example.com/images/vulcanis9_surface1.jpg",
        "https://example.com/images/vulcanis9_surface2.jpg",
      ],
    },
    planetGallery: [
      "https://example.com/images/vulcanis9_gallery1.jpg",
      "https://example.com/images/vulcanis9_gallery2.jpg",
      "https://example.com/images/vulcanis9_gallery3.jpg",
      "https://example.com/images/vulcanis9_gallery4.jpg",
      "https://example.com/images/vulcanis9_gallery5.jpg",
    ],
    peopleAlsoBought: [
      {
        productName: "Heat-Resistant Mining Rig",
        productDescription:
          "Heavy-duty equipment for extracting geothermal crystals in extreme conditions.",
        productPrice: 2500.0,
        productImg: "https://example.com/images/mining_rig.jpg",
      },
      {
        productName: "Thermal Shield Generator",
        productDescription:
          "Portable shield to protect against intense heat and radiation.",
        productPrice: 1000.0,
        productImg: "https://example.com/images/thermal_shield.jpg",
      },
    ],
  },
  {
    planetId: 5,
    planetName: "Glaciora",
    planetPrice: 16000,
    planetShortDescription:
      "An icy planet with frozen tundras and subterranean thermal springs.",
    planetRarity: "Rare",
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 11000,
    },
    planetInStock: true,
    planetThumbnailImg: "/planet/planet18.webp",
    planetDescription: {
      paragraphs: [
        "Glaciora is a frozen wonderland, its surface covered in vast ice sheets and towering glaciers. Beneath the ice, thermal springs create hidden pockets of warmth, supporting unique ecosystems of hardy flora and fauna.",
        "The planet's auroras light up the sky in dazzling displays, making it a prime destination for explorers seeking beauty and mystery. Ice caves and frozen lakes offer endless exploration opportunities.",
      ],
      bulletPoints: [
        "Atmosphere: Cold but breathable with proper insulation.",
        "Moons: Two, named 'Frost' and 'Glimmer,' enhancing auroral displays.",
        "Gravity: 1.0 G, equivalent to Earth.",
        "Known for: Aurora Skies and Thermal Ice Caves.",
        "Local Fauna: Includes the 'Frostwing Drake' and 'Iceborer Worm.'",
      ],
      images: [
        "https://example.com/images/glaciora_desc1.jpg",
        "https://example.com/images/glaciora_desc2.jpg",
      ],
      surfacePreviewImages: [
        "https://example.com/images/glaciora_surface1.jpg",
        "https://example.com/images/glaciora_surface2.jpg",
      ],
    },
    planetGallery: [
      "https://example.com/images/glaciora_gallery1.jpg",
      "https://example.com/images/glaciora_gallery2.jpg",
      "https://example.com/images/glaciora_gallery3.jpg",
      "https://example.com/images/glaciora_gallery4.jpg",
      "https://example.com/images/glaciora_gallery5.jpg",
    ],
    peopleAlsoBought: [
      {
        productName: "Insulated Exploration Suit",
        productDescription:
          "Keeps you warm in subzero temperatures while allowing full mobility.",
        productPrice: 1400.0,
        productImg: "https://example.com/images/insulated_suit.jpg",
      },
      {
        productName: "Thermal Core Drill",
        productDescription:
          "Drill through ice to access subterranean resources and springs.",
        productPrice: 2200.0,
        productImg: "https://example.com/images/thermal_drill.jpg",
      },
    ],
  },
];
