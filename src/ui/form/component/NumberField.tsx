import type { NumberFieldProps } from "../model/NumberFieldProps";

const NumberField = ({
  name,
  value,
  onChange,
  step,
  min,
  max,
  pattern,
}: NumberFieldProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="number"
        id={name}
        name={name}
        onChange={onChange}
        step={step}
        min={min}
        max={max}
        pattern={pattern}
        value={value}
      />
    </>
  );
};

export { NumberField };
