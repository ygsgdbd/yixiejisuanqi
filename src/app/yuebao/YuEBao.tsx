"use client";

import BigNumber from "bignumber.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSetState } from "react-use";

import AmountAndPrompt from "@/components/AmountAndPrompt";
import DescriptionList from "@/components/DescriptionList";
import useAmountPromptFn from "@/hooks/currency/useAmountPromptFn";
import { BigNumberValueOrNil } from "@/interface/base";
import { Badge } from "@/shadcn/components/ui/badge";
import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { BigNumberOr0, BigNumberOrUndefined } from "@/utils/bignumber";

export default function YuEBao() {
  const amountPromptFn = useAmountPromptFn();
  const [formData, setFormData] = useSetState<{
    principal?: string;
    rate?: string;
    days?: string;
  }>({
    principal: undefined,
    rate: undefined,
    days: undefined,
  });

  const totalIncome = useMemo(() => {
    const _principal = BigNumberOrUndefined(formData.principal);
    const _rate = BigNumberOrUndefined(formData.rate)?.div(100);
    const _days = BigNumberOrUndefined(formData.days)?.dp(0);
    if (_principal && _rate && _days) {
      return _rate.div(365).plus(1).pow(_days).times(_principal);
    }
  }, [formData]);

  const income = useMemo(() => {
    return totalIncome?.minus(BigNumberOr0(formData.principal));
  }, [formData.principal, totalIncome]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>余额宝计算器</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"grid gap-4"}>
          <div className={"flex flex-col gap-2"}>
            <Label>本金</Label>
            <Input
              onChange={(e) => setFormData({ principal: e.target.value })}
              value={formData.principal}
            />
            {amountPromptFn(formData.principal) && (
              <Badge className={"self-start"}>
                {amountPromptFn(formData.principal)}
              </Badge>
            )}
          </div>
          <div className={"grid gap-2"}>
            <Label>平均年化率 (%)</Label>
            <Input
              onChange={(e) => setFormData({ rate: e.target.value })}
              value={formData.rate}
            />
          </div>
          <div className={"grid gap-2"}>
            <Label>天数</Label>
            <Input
              onChange={(e) => setFormData({ days: e.target.value })}
              value={formData.days}
            />
            <div className={"grid grid-cols-3 gap-2"}>
              <Button
                onClick={() => setFormData({ days: "1" })}
                size={"sm"}
                variant={"secondary"}
              >
                1 天
              </Button>
              <Button
                onClick={() => setFormData({ days: "30" })}
                size={"sm"}
                variant={"secondary"}
              >
                30 天
              </Button>
              <Button
                onClick={() => setFormData({ days: "365" })}
                size={"sm"}
                variant={"secondary"}
              >
                1 年
              </Button>
            </div>
          </div>
          <DescriptionList
            items={[
              {
                team: "收益",
                detail: <AmountAndPrompt n={income} />,
              },
              {
                team: "本金 + 收益",
                detail: <AmountAndPrompt n={totalIncome} />,
              },
              {
                team: "收益率 (收益 / 本金)",
                detail: <AmountAndPrompt n={totalIncome} />,
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
