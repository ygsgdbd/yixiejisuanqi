"use client";

import { Url } from "node:url";

import Fuse from "fuse.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/shadcn/components/ui/badge";
import { Button } from "@/shadcn/components/ui/button";

interface ISidebarCell {
  title: string;
  link: string;
  desc?: string;
  tags?: string[];
}

export default function Sidebar() {
  const cells = useMemo<ISidebarCell[]>(() => {
    return [
      {
        title: "余额宝计算器",
        desc: "余额宝计算器咯",
        link: "/yuebao",
        tags: ["余额宝", "日复利"],
      },
      {
        title: "JWT Payload 解析器",
        link: "/jwtParser",
        tags: ["Token"],
      },
      {
        title: "Just My Socket 订阅地址编辑器",
        link: "/jmsUrlEdit",
        tags: ["Proxy", "URL", "订阅"],
      },
      {
        title: "Fire 财务计算器",
        link: "/fireJiSuan",
        tags: ["Fire"],
      },
      {
        title: "一些假数据",
        link: "/fakeData",
        tags: ["Lorem", "FakeData"],
      },
    ];
  }, []);

  return (
    <div className={"scrollbar-hidden flex w-72 flex-col gap-2"}>
      {cells.map((x, idx) => (
        <Cell cell={x} key={idx} />
      ))}
    </div>
  );
}

const Cell = (props: { cell: ISidebarCell }) => {
  const pathname = usePathname();

  return (
    <Link href={props.cell.link} prefetch replace>
      <div
        className={cn(
          "flex flex-col gap-2 rounded-lg border p-3 transition-colors",
          pathname === props.cell.link && "bg-secondary",
        )}
      >
        <div className={"text-sm font-medium"}>{props.cell.title}</div>
        <div className={"line-clamp-2 text-xs text-muted-foreground"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error
          est facere fuga illo ipsam magnam quis! Atque consequatur eum ipsam
          ipsum labore maxime minima, odio quam. Aperiam, debitis expedita?
        </div>
        {props.cell.tags?.length && (
          <div className={"flex flex-wrap gap-1"}>
            {props.cell.tags?.map((x) => <Badge key={x}>{x}</Badge>)}
          </div>
        )}
      </div>
    </Link>
  );
};
