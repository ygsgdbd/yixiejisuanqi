import { ComponentType } from "react";
import { IMaskInput, IMaskInputProps, IMaskMixin } from "react-imask";

import { cn } from "@/lib/utils";

const InputMask: ComponentType<IMaskInputProps<HTMLInputElement>> = IMaskMixin(
  ({ inputRef, ...props }) => {
    const { className, ...rest } = props;
    return (
      <IMaskInput
        className={cn(
          className,
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        )}
        inputRef={inputRef}
        {...rest}
      />
    );
  },
);

export default InputMask;
