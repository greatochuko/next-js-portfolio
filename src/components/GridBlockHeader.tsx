import Link from "next/link";
import React from "react";

export default function GridBlockHeader({
  children,
  linkText,
  linkAddress,
}: {
  children: React.ReactNode;
  linkText?: string;
  linkAddress?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-zinc-700 font-semibold text-[22px]">{children}</h2>
      {linkAddress && (
        <Link
          href={linkAddress}
          className="text-blue-400 border-b hover:border-blue-500 hover:text-blue-500 duration-300"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
