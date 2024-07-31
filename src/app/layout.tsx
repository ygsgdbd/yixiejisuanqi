import "./globals.css";

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Inter } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import { useEffectOnce } from "react-use";

import { cn } from "@/lib/utils";
import { Button } from "@/shadcn/components/ui/button";
import Sidebar from "@/views/Sidebar";

export const metadata: Metadata = {
  title: "一些计算器",
};

const nextFont = IBM_Plex_Mono({
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
      <body className={cn(nextFont.className)}>
        <div className={"flex h-screen flex-col overflow-hidden bg-background"}>
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
          <div className={"relative flex-1"}>
            <div
              className={
                "absolute inset-0 grid grid-cols-[auto_1fr] gap-4 p-4 *:overflow-y-auto"
              }
            >
              <Sidebar />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
