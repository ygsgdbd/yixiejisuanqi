import BigNumber from "bignumber.js";
import _ from "lodash";

import { BigNumberValueOrNil } from "@/interface/base";
import { kCNYDecimalPlaces, kNumberPlaceholder } from "@/utils/constant";

export const BigNumberOrUndefined = (n: BigNumberValueOrNil) => {
  if (_.isNil(n)) return undefined;
  const _n = BigNumber(n);
  return _n.isFinite() ? _n : undefined;
};

export const BigNumberOr0 = (n: BigNumberValueOrNil) => {
  return BigNumberOrUndefined(n) ?? BigNumber(0);
};

export const formatCNY = (n: BigNumberValueOrNil) =>
  BigNumberOrUndefined(n)
    ?.dp(kCNYDecimalPlaces, BigNumber.ROUND_DOWN)
    .toFormat() ?? kNumberPlaceholder;
