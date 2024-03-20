import type { FormFieldProps } from "./FormFieldProps";

export interface NumberFieldProps extends FormFieldProps {
  step?: string;
  min?: string;
  max?: string;
  pattern?: string;
}
