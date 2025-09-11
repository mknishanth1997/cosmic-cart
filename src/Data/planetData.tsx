import { Planets } from "@/types/types";

export const planetData: Planets = [
  {
    planetId: 12345,
    planetName: "Xylos",
    planetPrice: 2500000.0,
    planetShortDescription:
      "A verdant jungle world known for its bioluminescent flora and unique, six-legged fauna.",
    planetRarity: "Rare",
    planetOfferDetails: {
      hasOffer: true,
      offerPrice: 2250000.0,
    },
    planetInStock: true,
    planetThumbnailImg: "https://example.com/images/xylos_thumb.jpg",
    planetDescription: {
      paragraphs: [
        "Xylos is an ecological marvel, with a dense, interconnected canopy that filters out the harsh light of its binary suns, creating a perpetual twilight on the forest floor. The planet's ecosystem is a symphony of life, where every organism plays a crucial role in maintaining its delicate balance.",
        "The air is thick with the scent of exotic blossoms, and the ground hums with the soft vibrations of unseen creatures. Navigating Xylos is an adventure in itself, with hidden caves, cascading waterfalls, and ancient, towering trees that reach for the sky.",
      ],
      bulletPoints: [
        "Atmosphere: Breathable, with a high concentration of exotic pollens.",
        "Moons: Two, named 'Luna' and 'Selene,' which cast an ethereal glow during the night.",
        "Gravity: 1.1 G, slightly heavier than Earth.",
        "Known for: The Great Luminescent Forest and the Whisperfalls.",
        "Local Flora: Includes the 'Glimmerpetal' and the 'Sun-eater' vines.",
      ],
      images: [
        "https://example.com/images/xylos_desc1.jpg",
        "https://example.com/images/xylos_desc2.jpg",
      ],
      surfacePreviewImages: [
        "https://example.com/images/xylos_surface1.jpg",
        "https://example.com/images/xylos_surface2.jpg",
      ],
    },
    planetGallery: [
      "https://example.com/images/xylos_gallery1.jpg",
      "https://example.com/images/xylos_gallery2.jpg",
      "https://example.com/images/xylos_gallery3.jpg",
      "https://example.com/images/xylos_gallery4.jpg",
      "https://example.com/images/xylos_gallery5.jpg",
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
];
