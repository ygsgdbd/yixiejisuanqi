"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { useSetState } from "react-use";
import { z } from "zod";

import AmountAndPrompt from "@/components/AmountAndPrompt";
import DescriptionList from "@/components/DescriptionList";
import InputMask from "@/components/InputMask";
import useAmountPromptFn from "@/hooks/currency/useAmountPromptFn";
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
import { DecimalOrUndefined } from "@/utils/bignumber";
import { maskForNumeric } from "@/utils/masks";

export default function YuEBao() {
  const amountPromptFn = useAmountPromptFn();

  const scheme = z.object({
    principal: z.coerce.number().optional(),
    rate: z.coerce.number().optional(),
    days: z.coerce.number().optional(),
  });

  const { control, register, setValue, handleSubmit, watch } = useForm<
    z.infer<typeof scheme>
  >({
    resolver: zodResolver(scheme),
  });

  const [principal, rate, days] = watch(["principal", "rate", "days"]);

  const totalIncome = useMemo(() => {
    const _principal = DecimalOrUndefined(principal);
    const _rate = DecimalOrUndefined(rate)?.div(100);
    const _days = DecimalOrUndefined(days)?.toDP(0);
    if (_principal && _rate && _days) {
      return _rate.div(365).plus(1).pow(_days).times(_principal);
    }
  }, [principal, rate, days]);

  const income = useMemo(() => {
    return totalIncome?.minus(DecimalOrUndefined(principal) ?? 0);
  }, [totalIncome]);

  const submit = (data: z.infer<typeof scheme>) => {
    console.log(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>余额宝计算器</CardTitle>
      </CardHeader>
      <CardContent>
        <form className={"grid gap-4"} onSubmit={handleSubmit(submit)}>
          <div className={"flex flex-col gap-2"}>
            <Label>本金</Label>
            <Controller
              control={control}
              name={"principal"}
              render={({ field }) => (
                <InputMask
                  mask={maskForNumeric(16, 2)}
                  {...field}
                  onAccept={field.onChange}
                  value={field.value?.toString()}
                />
              )}
            />
            {amountPromptFn(principal) && (
              <Badge className={"self-start"}>
                {amountPromptFn(principal)}
              </Badge>
            )}
          </div>
          <div className={"grid gap-2"}>
            <Label>年化率 (%)</Label>
            <Controller
              control={control}
              name={"rate"}
              render={({ field }) => (
                <InputMask
                  mask={maskForNumeric(16, 2)}
                  {...field}
                  onAccept={field.onChange}
                  value={field.value?.toString()}
                />
              )}
            />
          </div>
          <div className={"grid gap-2"}>
            <Label>天</Label>
            <Controller
              control={control}
              name={"days"}
              render={({ field }) => (
                <InputMask
                  mask={maskForNumeric(8)}
                  {...field}
                  onAccept={field.onChange}
                  value={field.value?.toString()}
                />
              )}
            />
            <div className={"grid grid-cols-3 gap-2"}>
              <Button
                onClick={() => setValue("days", 1)}
                size={"sm"}
                variant={"secondary"}
              >
                1 天
              </Button>
              <Button
                onClick={() => setValue("days", 30)}
                size={"sm"}
                variant={"secondary"}
              >
                30 天
              </Button>
              <Button
                onClick={() => setValue("days", 365)}
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
            ]}
          />
        </form>
      </CardContent>
    </Card>
  );
}
