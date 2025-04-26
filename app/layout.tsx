import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/NavBar";
const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
  fallback: ["cursive"],
  preload: true,
  adjustFontFallback: true});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Ecommerce App [please use name of the commerce app name]",
  description: "write a description of the commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lobster.variable}${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
