import React, { FC, ReactNode, useContext, useState } from "react";
import AppContext from "./appContext";
import { IGif } from "@/types/IGif";

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [gifs, setGifs] = useState<IGif[]>([]);

  return (
    <AppContext.Provider value={{ gifs, setGifs }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
