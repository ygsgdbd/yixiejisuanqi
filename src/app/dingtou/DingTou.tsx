"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Decimal from "decimal.js";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AmountAndPrompt from "@/components/AmountAndPrompt";
import DescriptionList from "@/components/DescriptionList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { DecimalOr0, DecimalOrUndefined } from "@/utils/bignumber";

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

  const amountPerMonth = useMemo(
    () => DecimalOrUndefined(amountPerMonthWatch),
    [amountPerMonthWatch],
  );

  const months = useMemo(() => DecimalOrUndefined(monthsWatch), [monthsWatch]);

  const rate = useMemo(
    () => DecimalOrUndefined(rateWatch)?.div(100),
    [rateWatch],
  );

  const income = useMemo(() => {
    if (amountPerMonth && months && rate) {
      return new Decimal(1)
        .plus(rate.div(12))
        .pow(months)
        .minus(1)
        .div(rate.div(12))
        .times(amountPerMonth);
    }
  }, [amountPerMonth, months, rate]);

  const principal = useMemo(() => {
    if (amountPerMonthWatch && monthsWatch) {
      return DecimalOrUndefined(amountPerMonthWatch)?.times(
        DecimalOr0(monthsWatch),
      );
    }
  }, [amountPerMonthWatch, monthsWatch]);

  const totalIncome = useMemo(() => {
    if (income) {
      return DecimalOrUndefined(principal)?.plus(income);
    }
  }, [income, principal]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>年复利计算器</CardTitle>
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
                detail: <AmountAndPrompt n={principal} />,
              },
              {
                team: "收益",
                detail: <AmountAndPrompt n={income} />,
              },
              {
                team: "收益 + 本金",
                detail: <AmountAndPrompt n={totalIncome} />,
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
