"use client";

import Loader from "@/components/loader";
import useGetGipByID from "@/hooks/api/useGetGifById";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import UserInfo from "./userInfo";
import GifImage from "./gifImage";
import useVisitedLinks from "@/hooks/useVisitedLinks";

export default function Home() {
  const { id } = useParams();
  const { data, loading, getGifById } = useGetGipByID();
  const { addVisitedGifId } = useVisitedLinks(false);

  useEffect(() => {
    getGifById(id as string);
    addVisitedGifId(id as string);
  }, []);

  return (
    <div className="mt-12 max-sm:w-min">
      {data ? (
        <div className="flex justify-between max-md:justify-around max-sm:flex-col max-sm:gap-16">
          {data.user ? <UserInfo gif={data} /> : null}
          <GifImage gif={data} />
        </div>
      ) : null}
      {loading ? <Loader /> : null}
    </div>
  );
}
