import { useMemo } from "react";

import useAmountTipsFn from "@/hooks/currency/useAmountTipsFn";
import { DecimalValueOrNil } from "@/interface/base";
import { Badge } from "@/shadcn/components/ui/badge";

export default function AmountTipsBadge(props: { n: DecimalValueOrNil }) {
  const amountTipsFn = useAmountTipsFn();
  const total = useMemo(() => {
    return amountTipsFn(props.n);
  }, [amountTipsFn, props.n]);

  return <>{total && <Badge className={"self-start"}>{total}</Badge>}</>;
}
