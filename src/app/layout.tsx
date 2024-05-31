import type { Metadata } from "next";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  weight: ["600", "300", "400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Great Ogheneochuko - Full stack developer",
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
          openSans.className +
          " bg-gradient-radial bg-no-repeat from-purple-800/20 to-white"
        }
      >
        <Header />
        <main>{children}</main>
        <footer className="mx-auto w-fit my-6 text-sm font-semibold text-zinc-500">
          &copy; {new Date().getFullYear()}, Great Ogheneochuko
        </footer>
      </body>
    </html>
  );
}
