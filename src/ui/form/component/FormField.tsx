import type { FormFieldProps } from "../model/FormFieldProps";
import { FieldType } from "../model/FieldType";

import { TextField } from "./TextField";
import { NumberField } from "./NumberField";
import { SelectField } from "./SelectField";

const FormField = (props: FormFieldProps): JSX.Element => {
  const formFieldLookup: Record<string, JSX.Element> = {
    [FieldType.TEXT.valueOf()]: <TextField {...props} />,
    [FieldType.NUMBER.valueOf()]: <NumberField {...props} />,
    [FieldType.SELECT.valueOf()]: <SelectField {...props} />,
  } as const;

  return formFieldLookup[props.type] ?? null;
};

export { FormField };
