import { useCallback } from "react";

import { DecimalValueOrNil } from "@/interface/base";
import { DecimalOrUndefined } from "@/utils/bignumber";

export default function useAmountPromptFn() {
  return useCallback((n: DecimalValueOrNil) => {
    const num = DecimalOrUndefined(n);
    if (num?.gte(100000000 * 10000 * 10000)) return "😓";
    if (num?.gte(10000000 * 10000 * 10000)) return "千万亿";
    if (num?.gte(1000000 * 10000 * 10000)) return "百万亿";
    if (num?.gte(100000 * 10000 * 10000)) return "十万亿";
    if (num?.gte(10000 * 10000 * 10000)) return "万亿";
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
    if (num?.gte(1)) return "元";
  }, []);
}
