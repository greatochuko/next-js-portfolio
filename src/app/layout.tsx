import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Great Ogheneochuko - Full Stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-gradient-radial min-h-[2000px] bg-no-repeat from-purple-800/20 to-white"
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
