import { useMemo } from "react";

import CNYCurrencyText from "@/components/CNYCurrencyText";
import useAmountTipsFn from "@/hooks/currency/useAmountTipsFn";
import { DecimalValueOrNil } from "@/interface/base";
import { Badge } from "@/shadcn/components/ui/badge";
import { formatCNY } from "@/utils/bignumber";

export default function AmountAndPrompt({ n }: { n: DecimalValueOrNil }) {
  const amountPromptFn = useAmountTipsFn();

  const prompt = useMemo(() => {
    return amountPromptFn(n);
  }, [amountPromptFn, n]);

  return (
    <div className={"flex flex-col items-start gap-1"}>
      <CNYCurrencyText n={n} />
      {prompt && <Badge>{prompt}</Badge>}
    </div>
  );
}
