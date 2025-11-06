import {createContext, useContext} from "react";

export const LevelContext = createContext<TLevel>(1);

export const useLevelContext = () => useContext(LevelContext);

export type TLevel = 1 | 2 | 3 | 4 | 5 | 6;
