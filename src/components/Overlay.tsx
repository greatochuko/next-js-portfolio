import React from "react";

export default function Overlay({
  closeMobileNav,
}: {
  closeMobileNav: () => void;
}) {
  return (
    <div
      className="w-full h-full bg-black/50 fixed z-20 top-0 left-0 animate-fade-in lg:hidden"
      onClick={closeMobileNav}
    ></div>
  );
}
