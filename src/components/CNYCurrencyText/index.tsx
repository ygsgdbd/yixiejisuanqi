import _ from "lodash";
import { useMemo } from "react";

import { DecimalValueOrNil } from "@/interface/base";
import { DecimalOrUndefined } from "@/utils/bignumber";
import { kCNYDecimalPlaces, kNumberPlaceholder } from "@/utils/constant";

export default function CNYCurrencyText({ n }: { n: DecimalValueOrNil }) {
  const formatted = useMemo(() => {
    const str = DecimalOrUndefined(n)?.toDP(kCNYDecimalPlaces).toString();
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
