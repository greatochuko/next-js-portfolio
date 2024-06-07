import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const openSans = Open_Sans({
  weight: ["600", "300", "400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Great Ogheneochuko",
    absolute: "Great Ogheneochuko - Full stack developer",
  },
  openGraph: {
    images: ["https://greatochuko.vercel.app/portfolio.jpg"],
    description:
      "Explore the innovative work and creative journey of Great Ochuko, a passionate Software developer specializing in Web development.",
  },
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
          " bg-gradient-radial bg-no-repeat from-purple-800/20 to-white flex flex-col min-h-screen"
        }
      >
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="mx-auto w-fit my-6 text-sm font-semibold text-zinc-500">
          &copy; {new Date().getFullYear()}, Great Ogheneochuko
        </footer>
      </body>
    </html>
  );
}
