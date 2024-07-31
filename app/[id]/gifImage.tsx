import EmbedIcon from "@/public/assets/images/embedIcon";
import EyeIcon from "@/public/assets/images/eyeIcon";
import FlagIcon from "@/public/assets/images/flagIcon";
import HeartIcon from "@/public/assets/images/heartIcon";
import ShareIcon from "@/public/assets/images/shareIcon";
import { IGif } from "@/types/IGif";
import Image from "next/image";
import React from "react";

function GifImage({ gif }: { gif: IGif }) {
  return (
    <div className="flex max-sm:order-1 max-sm:w-full">
      <div className="flex flex-col gap-2 max-sm:w-full">
        <p className="text-gray-300 text-sm font-bold ">
          {gif.title} By {gif.user?.display_name}{" "}
        </p>
        <div className="flex gap-12 max-sm:w-full max-lg:flex-col">
          <Image
            src={gif.images.original.url}
            alt={gif.alt_text}
            width={500}
            height={500}
            className="gif_detail_image"
          />
          <div className="mt-2 flex flex-col justify-between max-lg:gap-4">
            <div className="flex flex-col gap-4 max-lg:flex-row">
              <div className="flex gap-3 items-center hover:cursor-pointer">
                <HeartIcon />
                <p className="font-bold">Favorite</p>
              </div>
              <div className="flex gap-3 items-center hover:cursor-pointer">
                <ShareIcon />
                <p className="font-bold">Share</p>
              </div>
              <div className="flex gap-3 items-center hover:cursor-pointer">
                <EmbedIcon />
                <p className="font-bold">Embed</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 max-lg:flex-row">
              <div className="flex gap-2 items-center">
                <EyeIcon />
                <p className="text-sm text-gray-300">90,509,470 Views</p>
              </div>
              <div className="flex gap-2 items-center hover:cursor-pointer">
                <FlagIcon />
                <p className="text-sm text-gray-300">Report this GIF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GifImage;
