import { Logo } from "@/public/assets/images/logo";
import Link from "next/link";
import React from "react";

function HeaderLogo() {
  return (
    <Link href={"/"}>
      <div className="flex gap-1 items-center">
        <Logo />
        <h1 className="text-4xl font-bold">GIPHY</h1>
      </div>
    </Link>
  );
}

export default HeaderLogo;
