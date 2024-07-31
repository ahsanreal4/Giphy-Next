import { useEffect, useState } from "react";

function useVisitedLinks(getVisitedGif: boolean = true) {
  const KEY = "visited_links";
  const [visitedGifs, setVisitedGifs] = useState<string[]>([]);

  const addVisitedGifId = (id: string) => {
    let links;

    links = localStorage.getItem(KEY);

    let array;

    if (links) {
      array = JSON.parse(links);
    } else {
      array = [];
    }

    const isArray = array instanceof Array;

    if (!isArray) return;

    array.push(id);

    localStorage.setItem(KEY, JSON.stringify(array));
  };

  const isGifVisited = (id: string) =>
    visitedGifs.filter((gif: string) => gif == id).length > 0;

  const getVisitedGifs = () => {
    const links = localStorage.getItem(KEY);

    if (!links) return;

    const array = JSON.parse(links);

    const isArray = array instanceof Array;

    if (!isArray) return;

    setVisitedGifs(array);
  };

  useEffect(() => {
    if (getVisitedGif) getVisitedGifs();
  }, []);

  return { isGifVisited, addVisitedGifId };
}

export default useVisitedLinks;
