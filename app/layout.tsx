import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { Inter, Roboto_Mono } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/Nick.png",
    apple: "/apple-touch-icon.png",
  },
  title: "Nick Bechtel - Software Engineer",
  description: "Nick Bechtel - Software Engineer - Portfolio - Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <div
        className={roboto.className}
        style={{ backgroundColor: "f4f4f4" }}
        // style={{backgroundImage: `url(/sisi.jpg)`, backgroundSize: 'cover'}}
      >
        <Navbar />
        <main className="children">{children}</main>
        <Footer />
      </div>
    </html>
  );
}
