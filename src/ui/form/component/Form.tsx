import type { FormProps } from "../model/FormProps";
import { FormField } from "./FormField";

const Form = (props: FormProps): JSX.Element => {
  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    props.onSubmit(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <ul>
        {props.fields.map((field) => {
          return (
            <li key={field.name}>
              <FormField {...field} />
            </li>
          );
        })}
      </ul>

      <button type="submit">{props.submitText}</button>
    </form>
  );
};

export { Form };
