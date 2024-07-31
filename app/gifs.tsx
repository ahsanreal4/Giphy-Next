import { useAppContext } from "@/context/appContextProvider";
import { IGif } from "@/types/IGif";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/loader";
import TopBar from "./topBar";
import useGetGiphsWithPagination from "@/hooks/api/useGetGiphsWithPagination";
import useHandleScroll from "@/hooks/useHandleScroll";
import { BLUR_PLACE_HOLDER } from "@/constants/blurPlaceHolder";
import useVisitedLinks from "@/hooks/useVisitedLinks";

function Gifs() {
  const { loading, getGiphs } = useGetGiphsWithPagination();

  const { gifs } = useAppContext();

  useHandleScroll(getGiphs, loading);
  const { isGifVisited } = useVisitedLinks();

  useEffect(() => {
    getGiphs();
  }, []);

  return (
    <div className="mt-6 w-full">
      <TopBar />
      <div className="custom-grid mt-4 max-sm:gap-4 max-sm:place-items-center">
        {gifs.map((gif: IGif) => (
          <Link href={"/" + gif.id} className="relative">
            <Image
              key={gif.id}
              src={gif.images.original.url}
              alt={gif.alt_text}
              // @ts-ignore
              width={251}
              // @ts-ignore
              height={251}
              unoptimized
              className="hover:cursor-pointer rounded gif-image"
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_PLACE_HOLDER}
            />
            {isGifVisited(gif.id) ? (
              <div
                className="absolute bg-black w-10 top-2 px-2 py-1 rounded"
                style={{ width: "fit-content", left: "40%" }}
              >
                Visited
              </div>
            ) : null}
          </Link>
        ))}
      </div>
      {loading ? <Loader /> : null}
    </div>
  );
}

export default Gifs;
