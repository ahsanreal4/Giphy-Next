import { API_URLS } from "@/constants/api";
import { useAppContext } from "@/context/appContextProvider";
import { IParam } from "@/types/IParam";
import {
  getFetchQueryUrl,
  getFetchRequestOptions,
} from "@/utils/getFetchQueryUrl";
import { useCallback, useState } from "react";

function useGetGiphsWithPagination() {
  const { setGifs } = useAppContext();
  const ITEMS_PER_PAGE = 15;

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const getGiphs = useCallback(async () => {
    try {
      setLoading(true);

      const params: IParam[] = [
        { key: "limit", value: ITEMS_PER_PAGE },
        { key: "offset", value: offset },
      ];

      const url = getFetchQueryUrl(API_URLS.GET_TRENDING, params);

      const requestOptions = getFetchRequestOptions();

      const res = await fetch(url, requestOptions);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const response = await res.json();

      setGifs((prev) => [...prev, ...response.data]);
      setOffset((prev) => prev + 1);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, [offset]);

  return { loading, getGiphs };
}

export default useGetGiphsWithPagination;
