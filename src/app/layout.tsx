import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--bellefair-font",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

export const metadata: Metadata = {
  title: "Space Travel Website",
  description: "Brought to you by Kelompok 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlow.variable} bg-primary `}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
