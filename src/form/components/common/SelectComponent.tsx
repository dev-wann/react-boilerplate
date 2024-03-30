import { SelectProps } from '../../types/FormTypes';

export default function Select({
  register,
  name,
  label,
  options,
  required = false,
}: SelectProps) {
  const optionList = Object.entries(options);
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : <></>}
      <select {...register(name, { required })} id={name}>
        <option value="">---- select ----</option>
        {optionList.map(([option, optionText]) => (
          <option value={option.toLowerCase()} key={option}>
            {optionText}
          </option>
        ))}
      </select>
    </>
  );
}
