import { ComponentType } from "react";
import { IMaskInput, IMaskInputProps, IMaskMixin } from "react-imask";

import { cn } from "@/lib/utils";

const InputMask: ComponentType<IMaskInputProps<HTMLInputElement>> = IMaskMixin(
  ({ inputRef, ...props }) => {
    const { className, ...rest } = props;
    return (
      <IMaskInput
        className={cn(className, "input-mask")}
        inputRef={inputRef}
        {...rest}
      />
    );
  },
);

export default InputMask;
