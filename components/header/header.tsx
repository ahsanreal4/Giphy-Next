"use client";

import HeaderActions from "./headerActions";
import HeaderLogo from "./headerLogo";
import HeaderLinks from "./headerLinks";
import HeaderSearch from "./headerSearch";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-100">
        <HeaderLogo />
        <HeaderLinks />
        <HeaderActions />
      </div>
      <HeaderSearch />
    </div>
  );
};

export default Header;
