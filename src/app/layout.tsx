import "./globals.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Inter } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import { useEffectOnce } from "react-use";

import { cn } from "@/lib/utils";
import { Button } from "@/shadcn/components/ui/button";

export const metadata: Metadata = {
  title: "各种计算器、各种工具",
};

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
      <body className={cn(nextFont.className, "min-h-screen bg-background")}>
        <div className={"grid"}>
          <nav
            className={
              "flex items-center gap-4 border border-b border-secondary px-6 py-4"
            }
          >
            <Link href={"/"}>
              <Button className={"text-2xl font-bold"} variant={"ghost"}>
                一些计算器
              </Button>
            </Link>
          </nav>
          <div className={"container p-6"}>{children}</div>
        </div>
      </body>
    </html>
  );
}
