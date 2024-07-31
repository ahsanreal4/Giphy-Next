import { IGif } from "@/types/IGif";
import { createContext, Dispatch, SetStateAction } from "react";

type ContextState = {
  gifs: IGif[];

  setGifs: Dispatch<SetStateAction<IGif[]>>;
};

const INITIAL_STATE: ContextState = {
  gifs: [],

  setGifs: () => {},
};

const AppContext = createContext(INITIAL_STATE);

export default AppContext;
