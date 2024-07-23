import { useCallback } from "react";

import { BigNumberValueOrNil } from "@/interface/base";
import { BigNumberOrUndefined } from "@/utils/bignumber";

export default function useAmountPromptFn() {
  return useCallback((n: BigNumberValueOrNil) => {
    const num = BigNumberOrUndefined(n);
    if (num?.gte(100000 * 10000 * 10000)) return undefined;
    if (num?.gte(10000 * 10000 * 10000)) return "兆";
    if (num?.gte(1000 * 10000 * 10000)) return "千亿";
    if (num?.gte(100 * 10000 * 10000)) return "百亿";
    if (num?.gte(10 * 10000 * 10000)) return "十亿";
    if (num?.gte(10000 * 10000)) return "亿";
    if (num?.gte(1000 * 10000)) return "千万";
    if (num?.gte(100 * 10000)) return "百万";
    if (num?.gte(10 * 10000)) return "十万";
    if (num?.gte(10000)) return "万";
    if (num?.gte(1000)) return "千";
    if (num?.gte(100)) return "百";
    if (num?.gte(10)) return "十";
  }, []);
}
