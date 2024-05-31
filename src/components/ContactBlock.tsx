import Link from "next/link";
import React from "react";

export default function ContactBlock() {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-6 flex flex-col justify-between">
      <p className="p-4 rounded-lg bg-blue-100 text-blue-900/80 font-semibold text-lg">
        Available for hire 🚀
      </p>
      <p className="text-[2.5rem] leading-[3rem] font-semibold text-zinc-700">
        Let's 👋
        <br />
        Work <span className="text-blue-500">Together</span>
      </p>
      <Link
        href={"/contact"}
        className="text-blue-400 border-b w-fit hover:border-blue-500 hover:text-blue-500 duration-300 flex gap-2 items-center"
      >
        Let's Talk
        <svg
          fill="#fff"
          viewBox="0 0 256 256"
          height={20}
          width={20}
          className="-rotate-45 fill-blue-400 hover:fill-blue-500 duration-300"
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
  );
}
