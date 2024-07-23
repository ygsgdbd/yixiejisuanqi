"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import BigNumber from "bignumber.js";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import DescriptionList from "@/components/DescriptionList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { BigNumberOr0, BigNumberOrUndefined } from "@/utils/bignumber";

export default function DingTou() {
  const scheme = z.object({
    amountPerMonth: z.coerce.number().optional(),
    months: z.coerce.number().optional(),
    rate: z.coerce.number().optional(),
  });

  const { register, handleSubmit, watch } = useForm<z.infer<typeof scheme>>({
    resolver: zodResolver(scheme),
  });

  const amountPerMonthWatch = watch("amountPerMonth");
  const monthsWatch = watch("months");
  const rateWatch = watch("rate");

  const income = useMemo(() => {
    const amountPerYear = BigNumberOrUndefined(amountPerMonthWatch)?.times(12);
    const year = BigNumberOrUndefined(monthsWatch)?.dp(0)?.div(12);
    const rate = BigNumberOrUndefined(rateWatch)?.div(100);
    if (amountPerYear && year && rate) {
      return amountPerYear
        .times(rate.plus(1))
        .times(rate.plus(1).pow(year).minus(1))
        .div(rate);
    }
  }, [amountPerMonthWatch, monthsWatch, rateWatch]);

  const principal = useMemo(() => {
    return BigNumberOrUndefined(amountPerMonthWatch)?.times(
      BigNumberOr0(monthsWatch),
    );
  }, [amountPerMonthWatch, monthsWatch]);

  const totalIncome = useMemo(() => {
    if (income) {
      return BigNumberOrUndefined(principal)?.plus(income);
    }
  }, [income, principal]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>定投计算器</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"grid gap-4"}>
          <form className={"grid gap-4"}>
            <div className={"flex flex-col gap-2"}>
              <Label>每月投资金额</Label>
              <Input {...register("amountPerMonth")} />
            </div>
            <div className={"flex flex-col gap-2"}>
              <Label>投资月数</Label>
              <Input {...register("months")} />
            </div>
            <div className={"flex flex-col gap-2"}>
              <Label>平均年化率 (%)</Label>
              <Input {...register("rate")} />
            </div>
          </form>
          <DescriptionList
            items={[
              {
                team: "本金",
                detail: principal?.dp(2, BigNumber.ROUND_DOWN).toFormat(),
              },
              {
                team: "收益",
                detail: income?.dp(2, BigNumber.ROUND_DOWN).toFormat(),
              },
              {
                team: "收益 + 本金",
                detail: totalIncome?.dp(2, BigNumber.ROUND_DOWN).toFormat(),
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
