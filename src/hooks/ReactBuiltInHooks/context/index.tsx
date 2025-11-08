import {createContext, useContext} from "react";
import type { TLevel } from "@/models-view";

export const LevelContext = createContext<TLevel>(1);

export const useLevelContext = () => useContext(LevelContext);


