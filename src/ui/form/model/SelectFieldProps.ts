import type { FormFieldProps } from "./FormFieldProps";

type Option = {
  label: string;
  value: string;
};

export interface SelectFieldProps extends FormFieldProps {
  options?: Option[];
}
