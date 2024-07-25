import BigNumber from "bignumber.js";
import _ from "lodash";
import { useMemo } from "react";

import { BigNumberValueOrNil } from "@/interface/base";
import { BigNumberOrUndefined } from "@/utils/bignumber";
import { kCNYDecimalPlaces, kNumberPlaceholder } from "@/utils/constant";

export default function CNYCurrencyText({ n }: { n: BigNumberValueOrNil }) {
  const formatted = useMemo(() => {
    const str = BigNumberOrUndefined(n)
      ?.dp(kCNYDecimalPlaces, BigNumber.ROUND_DOWN)
      .toFormat();
    return [str?.split(".")?.[0], str?.split(".")?.[1]];
  }, [n]);

  if (formatted?.[0]) {
    return (
      <span>
        <span>{formatted?.[0]}</span>
        {formatted?.[1] && <small>.{formatted?.[1]}</small>}
      </span>
    );
  } else {
    return kNumberPlaceholder;
  }
}
