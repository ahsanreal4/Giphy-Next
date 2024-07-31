"use client";

import AppContextProvider from "@/context/appContextProvider";
import Gifs from "./gifs";

export default function Home() {
  return (
    <AppContextProvider>
      <Gifs />
    </AppContextProvider>
  );
}
