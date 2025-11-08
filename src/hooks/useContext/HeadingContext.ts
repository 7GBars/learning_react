import {createContext} from "react";
import type {IHeadingContext} from "./types";

export const HeadingContext = createContext<IHeadingContext | null>(null);


