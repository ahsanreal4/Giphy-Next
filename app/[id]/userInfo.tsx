import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/public/assets/images/socialMediaIcons";
import VerifiedTick from "@/public/assets/images/verifiedTick";
import { IGif } from "@/types/IGif";
import React from "react";

function UserInfo({ gif }: { gif: IGif }) {
  const ProfileInfo = () => (
    <div className="flex gap-2">
      <img
        src={gif.user?.avatar_url}
        alt="Avatar"
        style={{ width: 50, height: 50 }}
      />
      <div className="flex flex-col">
        <p className="font-bold capitalize">{gif.user?.display_name}</p>
        <div className="flex items-center gap-1">
          <p className="text-gray-300 font-bold text-sm">
            @{gif.user?.username}
          </p>
          {gif.user?.is_verified ? (
            <div className="mt-1">
              <VerifiedTick />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  const SocialInfo = () => (
    <div className="mt-8">
      <p className="text-gray-300 text-sm font-bold">Follow on:</p>
      <div className="flex gap-3 mt-2 hover:cursor-pointer">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <TiktokIcon />
        <YoutubeIcon />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-2 w-1/5 max-sm:w-full max-sm:order-2">
      <ProfileInfo />
      <p className="text-gray-300 text-sm mt-6">{gif.user?.description}</p>
      <SocialInfo />
      <div className="mt-16 truncate">
        <p className="font-bold text-gray-300 text-sm">Source</p>
        <a className="text-xs font-extrabold" href={gif.user?.website_url}>
          {gif.user?.website_url}
        </a>
      </div>
    </div>
  );
}

export default UserInfo;
