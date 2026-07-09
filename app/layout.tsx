declare module "*.css";

import type { Metadata } from "next";
import React from "react";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Syed Ali Novfal — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and Express.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return React.createElement(
    "html",
    { lang: "en" },
    React.createElement(
      "body",
      {
        className: `${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`,
      },
      children
    )
  );
}
