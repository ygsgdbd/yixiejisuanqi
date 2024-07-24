import BigNumber from "bignumber.js";
import { useMemo } from "react";

import useAmountPromptFn from "@/hooks/currency/useAmountPromptFn";
import { BigNumberValueOrNil } from "@/interface/base";
import { Badge } from "@/shadcn/components/ui/badge";
import { BigNumberOrUndefined, formatCNY } from "@/utils/bignumber";

export default function AmountAndPrompt({ n }: { n: BigNumberValueOrNil }) {
  const amountPromptFn = useAmountPromptFn();

  const prompt = useMemo(() => {
    return amountPromptFn(n);
  }, [amountPromptFn, n]);

  return (
    <div className={"flex flex-col items-start gap-1"}>
      <div>{formatCNY(n)}</div>
      {prompt && <Badge variant={"default"}>{prompt}</Badge>}
    </div>
  );
}
