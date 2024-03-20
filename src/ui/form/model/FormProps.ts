import type { FormField } from "./FormFieldProps";

export interface FormProps {
  fields: FormField[];
  onSubmit: (event: React.SyntheticEvent) => void;
  submitText: string;
}
