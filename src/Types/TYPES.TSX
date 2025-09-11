export type CosmicCart = {
  cartItems: {
    planetId: number;
    priceAtTime: number;
    addedAt: Date;
  }[];
  wishListItems: {
    planetId: number;
    addedAt: Date;
  }[];
  orderHistory: {
    orderId: string;
    item: {
      planetId: number;
      priceAtPurchase: number;
    }[];
    totalAmount: number;
    date: Date;
  }[];
};

export type PlanetDetails = {
  planetId: number;
  planetName: string;
  planetPrice: number;
  planetShortDescription: string;
  planetRarity: string;
  planetOfferDetails: {
    hasOffer: boolean;
    offerPrice?: number;
  };
  planetInStock: boolean;
  planetThumbnailImg: string;
  planetDescription: {
    paragraphs: string[];
    bulletPoints: string[];
    images: string[];
    surfacePreviewImages: string[];
  };
  planetGallery: string[]; // replaces img1..img5 → better as array
  peopleAlsoBought: {
    productName: string;
    productDescription: string;
    productPrice: number;
    productImg: string;
  }[];
};

export type Planets = PlanetDetails[];
