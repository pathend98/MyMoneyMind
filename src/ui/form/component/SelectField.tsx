import type { SelectFieldProps } from "../model/SelectFieldProps";

const SelectField = ({
  name,
  value,
  onChange,
  options,
}: SelectFieldProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <select value={value} onChange={onChange}>
        {options?.map((option) => (
          <option key={`select-${name}:${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export { SelectField };
