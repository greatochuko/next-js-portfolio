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
    default: "Great Ogheneochuko - Portfolio",
    template: "%s - Great Ogheneochuko",
  },
  description:
    "Explore the innovative work and creative journey of Great Ochuko, a passionate Software developer specializing in Web development.",
  keywords: "Great Ogheneochuko, Portfolio, Projects, Skills, Web Developer",
  authors: [{ name: "Great Ogheneochuko" }],
  openGraph: {
    title: "Great Ogheneochuko - Portfolio",
    description:
      "Explore the innovative work and creative journey of Great Ochuko, a passionate Software developer specializing in Web development.",
    type: "website",
    url: "https://greatochuko.vercel.app",
    images: ["https://greatochuko.vercel.app/portfolio.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Ogheneochuko - Portfolio",
    description:
      "Explore the innovative work and creative journey of Great Ochuko, a passionate Software developer specializing in Web development.",
    images: ["https://greatochuko.vercel.app/portfolio.jpg"],
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
