"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import AmountAndPrompt from "@/components/AmountAndPrompt";
import AmountTipsBadge from "@/components/AmountTipsBadge";
import DescriptionList from "@/components/DescriptionList";
import InputMask from "@/components/InputMask";
import useAmountTipsFn from "@/hooks/currency/useAmountTipsFn";
import { Badge } from "@/shadcn/components/ui/badge";
import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Label } from "@/shadcn/components/ui/label";
import { DecimalOr1, DecimalOrUndefined } from "@/utils/bignumber";
import { maskForNumeric } from "@/utils/masks";

export default function FireJiSuan() {
  const amountPromptFn = useAmountTipsFn();
  const scheme = z.object({
    /*
     * 每月消费
     * */
    monthly: z.coerce.number().optional(),
    /*
     * 年化率
     * */
    rate: z.coerce.number().optional(),
  });

  const { control, register, setValue, handleSubmit, watch } = useForm<
    z.infer<typeof scheme>
  >({
    resolver: zodResolver(scheme),
    defaultValues: {
      rate: 4,
    },
  });

  const [monthly, rate] = watch(["monthly", "rate"]);

  const principal = useMemo(() => {
    if (rate) {
      return DecimalOrUndefined(monthly)
        ?.times(12)
        .div(DecimalOr1(rate).div(100));
    }
  }, [monthly, rate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fire 财务自由计算器</CardTitle>
      </CardHeader>
      <CardContent>
        <form className={"grid gap-4"} onSubmit={handleSubmit(() => {})}>
          <div className={"flex flex-col gap-2"}>
            <Label>预计每月消费</Label>
            <Controller
              control={control}
              name={"monthly"}
              render={({ field }) => (
                <InputMask
                  mask={maskForNumeric(16, 2)}
                  {...field}
                  onAccept={field.onChange}
                  value={field.value?.toString()}
                />
              )}
            />
            <AmountTipsBadge n={monthly} />
          </div>
          <div className={"grid gap-2"}>
            <Label>年化率 (%)</Label>
            <Controller
              control={control}
              name={"rate"}
              render={({ field }) => (
                <InputMask
                  mask={maskForNumeric(8, 2)}
                  step={0.01}
                  type={"number"}
                  {...field}
                  onAccept={field.onChange}
                  value={field.value?.toString()}
                />
              )}
            />
          </div>
          <DescriptionList
            items={[
              {
                team: "Fire 起点",
                detail: <AmountAndPrompt n={principal} />,
              },
            ]}
          />
        </form>
      </CardContent>
    </Card>
  );
}
