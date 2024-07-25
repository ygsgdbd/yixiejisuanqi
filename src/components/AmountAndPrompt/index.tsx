import { useMemo } from "react";

import CNYCurrencyText from "@/components/CNYCurrencyText";
import useAmountPromptFn from "@/hooks/currency/useAmountPromptFn";
import { DecimalValueOrNil } from "@/interface/base";
import { Badge } from "@/shadcn/components/ui/badge";
import { formatCNY } from "@/utils/bignumber";

export default function AmountAndPrompt({ n }: { n: DecimalValueOrNil }) {
  const amountPromptFn = useAmountPromptFn();

  const prompt = useMemo(() => {
    return amountPromptFn(n);
  }, [amountPromptFn, n]);

  return (
    <div className={"flex flex-col items-start gap-1"}>
      <CNYCurrencyText n={n} />
      {prompt && <Badge variant={"default"}>{prompt}</Badge>}
    </div>
  );
}
