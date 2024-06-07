import Link from "next/link";
import React from "react";
import { navLinks } from "./Header";

type NavLink = {
  title: string;
  href: string;
  icon: React.ReactNode;
};
export default function MobileNav({
  isOpen,
  closeMobileNav,
  pathname,
}: {
  isOpen: boolean;
  closeMobileNav?: () => void;
  pathname: string;
}) {
  return (
    <div
      className={`w-full h-full fixed bg-black/50 z-20 duration-300 top-0 left-0 transition-all ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } lg:hidden`}
      onClick={closeMobileNav}
    >
      <div
        className={`w-64 bg-white duration-300 h-full p-6 flex flex-col gap-8 ${
          isOpen ? "" : "-translate-x-[100%]"
        }`}
      >
        <h1 className="text-2xl font-semibold text-zinc-700">
          Great<span className="text-blue-500">Folio</span>
        </h1>

        <ul className="flex flex-col gap-3">
          {navLinks.map((link: NavLink) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "bg-zinc-100 text-zinc-800 "
                    : "text-zinc-700"
                } py-3 flex items-center gap-2 hover:bg-zinc-100 rounded-md hover:text-zinc-800 group duration-300`}
              >
                {link.icon}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={"/contact"}
          className="py-4 px-8 flex-center gap-2 bg-zinc-800/90 hover:bg-zinc-900 duration-300 text-white rounded-lg mt-auto"
        >
          Let&apos;s Talk
          <svg
            fill="#fff"
            viewBox="0 0 256 256"
            height={20}
            width={20}
            className="-rotate-45"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M235.93994,153.18652c-.01636.167-.04785.32862-.071.49366-.0315.22314-.05786.44628-.102.668-.03785.19141-.09107.37745-.13819.56543-.04761.1919-.09009.38428-.14721.57325-.05665.186-.12647.36523-.19141.54687-.0669.1875-.12891.37647-.20532.561-.07032.16992-.15308.332-.23072.49756-.08911.18994-.17382.38134-.27343.56689-.0835.15625-.179.3042-.269.45605-.10986.18457-.2146.3711-.3352.55127-.11011.16455-.23316.31934-.35132.478-.11523.15479-.22314.31348-.34692.46387-.22412.273-.46265.53271-.70948.78467-.02929.02978-.05371.0625-.08325.09228l-48,48a12.0001,12.0001,0,0,1-16.9707-16.9707L195.0293,164H128A108.12186,108.12186,0,0,1,20,56a12,12,0,0,1,24,0,84.09562,84.09562,0,0,0,84,84h67.0293l-27.51465-27.51465a12.0001,12.0001,0,0,1,16.9707-16.9707l48,48c.02954.02978.054.0625.08325.09228.24683.252.48536.51172.70948.78467.12378.15039.23169.30908.34692.46387.11816.15869.24121.31348.35132.478.1206.18017.22534.3667.3352.55127.09009.15185.18555.2998.269.45605.09961.18555.18408.37695.27319.56689.07788.16553.1604.32764.231.49708.07641.18505.13842.374.20532.56152.06518.18164.135.36084.19141.54639.05712.18945.0996.38183.14721.57373.04712.188.10034.374.13819.56543.04419.22168.07055.44482.102.668.02319.165.05468.32666.071.49366A12.042,12.042,0,0,1,235.93994,153.18652Z"></path>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
