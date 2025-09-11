import { ReactNode } from "react";
import { createContext } from "vm";

// Context Creation:
const DataContext = createContext();

// Context Provider:

export function DataProvider(props: { children: ReactNode }) {}
