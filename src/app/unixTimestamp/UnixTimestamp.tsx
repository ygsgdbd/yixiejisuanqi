"use client";

import { divide } from "lodash";
import moment, { MomentInput } from "moment";
import { useCallback, useState } from "react";
import { useEffectOnce, useInterval, useList } from "react-use";

import DescriptionList from "@/components/DescriptionList";
import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function UnixTimestamp() {
  const [, setId] = useState<number>();

  useEffectOnce(() => {
    moment.locale("zh-CN");
  });

  useInterval(() => {
    setId(+new Date());
  }, 1000);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unix 时间戳工具</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"grid gap-4"}>
          <DescriptionList
            items={[
              {
                team: "时间戳（秒）",
                detail: (
                  <div>
                    <div>{moment().unix()}</div>
                  </div>
                ),
              },
              {
                team: "当前时间",
                detail: (
                  <div className={"flex justify-between gap-4"}>
                    <div>
                      {moment().format("YYYY 年 MM 月 DD 日 HH:mm:ss dddd")}
                    </div>
                    <Button size={"sm"} type={"button"}>
                      复制
                    </Button>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
