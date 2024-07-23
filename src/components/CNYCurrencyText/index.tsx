import BigNumber from "bignumber.js";
import { useMemo } from "react";

import { BigNumberValueOrNil } from "@/interface/base";
import { BigNumberOrUndefined } from "@/utils/bignumber";

export default function CNYCurrencyText({ n }: { n: BigNumberValueOrNil }) {
  const num = BigNumberOrUndefined(n)?.toFixed();

  if (num) {
    return (
      <span>
        {BigNumberOrUndefined(n)?.integerValue(BigNumber.ROUND_DOWN).toFormat()}
      </span>
    );
  } else {
    return "--";
  }
}
