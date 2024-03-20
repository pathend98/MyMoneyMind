import type { FieldType } from "./FieldType";

export interface FormFieldProps {
  name: string;
  type: FieldType;
  value: string;
  onChange: <T>(event: React.ChangeEvent<T>) => void;
}
