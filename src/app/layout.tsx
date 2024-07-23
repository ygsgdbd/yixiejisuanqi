import "./globals.css";

import BigNumber from "bignumber.js";
import type { Metadata } from "next";
import { Head } from "next/document";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { useEffectOnce } from "react-use";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "各种计算器",
};

import { IBM_Plex_Sans } from "next/font/google";
import { undefined } from "zod";

const nextFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={cn(nextFont.className, "min-h-screen bg-background p-6")}
      >
        {children}
      </body>
    </html>
  );
}
