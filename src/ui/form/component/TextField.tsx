import type { FormFieldProps } from "../model/FormFieldProps";

const TextField = ({ name, value, onChange }: FormFieldProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export { TextField };
