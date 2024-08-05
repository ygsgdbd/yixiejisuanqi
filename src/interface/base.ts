import Decimal from "decimal.js";

export type Nil = undefined | null;

export type DecimalValueOrNil = Decimal.Value | Nil;
