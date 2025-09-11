import { planetData } from "@/Data/planetData";
import { CosmicCart, Planets } from "@/types/types";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

type DataContextType = {
  allPlanetData: Planets;
  cosmicShop: CosmicCart;
  setCosmicShop: React.Dispatch<React.SetStateAction<CosmicCart>>;
  saveCosmicCart: (data: CosmicCart) => void;
  clearCosmicCart: () => void;
};
// Context Creation:
const DataContext = createContext<DataContextType | undefined>(undefined);

// Context Provider:

export function DataProvider(props: { children: ReactNode }) {
  const allPlanetData = planetData;
  // Initialize an empty cart with the correct structure
  const initialCart: CosmicCart = {
    cartItems: [],
    wishListItems: [],
    orderHistory: [],
  };
  //   State Variable
  const [cosmicShop, setCosmicShop] = useState<CosmicCart>(initialCart);

  //  Loading the Initial Data
  function loadInitialData() {
    const a = localStorage.getItem("cosmicCartData");
    if (a) {
      setCosmicShop(JSON.parse(a) as CosmicCart);
    }
  }

  //   Run once on mount
  useEffect(loadInitialData, []);

  //   Save the cosmicShop to the local storage

  function saveCosmicCart(data: CosmicCart) {
    localStorage.setItem("cosmicCartData", JSON.stringify(data));
    setCosmicShop(data);
  }

  //   Clear the cosmicShop from the local Storage
  function clearCosmicCart() {
    localStorage.removeItem("cosmicCartData");
    setCosmicShop(initialCart);
  }

  return (
    <DataContext.Provider
      value={{
        allPlanetData,
        cosmicShop,
        setCosmicShop,
        saveCosmicCart,
        clearCosmicCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

// Context Usage:
export function useData(): DataContextType {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used inside a <DataProvider>");
  }
  return context;
}
