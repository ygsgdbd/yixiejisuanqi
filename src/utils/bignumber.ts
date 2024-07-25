import Decimal from "decimal.js";
import _ from "lodash";

import { DecimalValueOrNil } from "@/interface/base";
import { kCNYDecimalPlaces, kNumberPlaceholder } from "@/utils/constant";

export const formatCNY = (n: DecimalValueOrNil) => {
  return (
    DecimalOrUndefined(n)
      ?.toDP(kCNYDecimalPlaces, Decimal.ROUND_DOWN)
      .toString() ?? kNumberPlaceholder
  );
};

export const DecimalOrUndefined = (n: DecimalValueOrNil) => {
  if (_.isNil(n)) return undefined;
  if (_.isEmpty(n)) return undefined;
  try {
    const decimal = new Decimal(n);
    return decimal.isFinite() ? decimal : undefined;
  } catch (_) {
    return undefined;
  }
};

export const DecimalOr0 = (n: DecimalValueOrNil) => {
  return DecimalOrUndefined(n) ?? new Decimal(0);
};
