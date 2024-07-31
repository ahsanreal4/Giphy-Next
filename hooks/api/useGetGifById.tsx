import { API_URLS } from "@/constants/api";
import { IGif } from "@/types/IGif";
import { IParam } from "@/types/IParam";
import {
  getFetchQueryUrl,
  getFetchRequestOptions,
} from "@/utils/getFetchQueryUrl";
import { useState } from "react";

function useGetGipByID() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IGif | null>(null);

  const getGifById = async (gifId: string) => {
    try {
      setLoading(true);

      const params: IParam[] = [
        {
          key: "gif_id",
          value: gifId,
        },
      ];

      const url = getFetchQueryUrl(API_URLS.GET_GIF_DETAIL, params, gifId);

      const requestOptions = getFetchRequestOptions();

      const res = await fetch(url, requestOptions);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const response = await res.json();

      if (!response) return;

      setData(response.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, getGifById };
}

export default useGetGipByID;
