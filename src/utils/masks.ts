import { Regex } from "lucide-react";

export const maskForNumeric = (
  integerLength: number,
  decimalLength: number = 0,
) => {
  if (decimalLength === 0) {
    return new RegExp(`^\\d{0,${integerLength}}$`);
  } else {
    return new RegExp(`^\\d{0,${integerLength}}(\\.\\d{0,${decimalLength}})?$`);
  }
};
