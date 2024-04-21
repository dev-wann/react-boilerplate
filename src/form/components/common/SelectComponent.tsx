import { SelectProps } from '../../types/FormTypes';
import ErrorComponent from './ErrorComponent';
import styles from './InputStyle.module.scss';

export default function SelectComponent({
  register,
  error,
  name,
  label,
  validator,
  options,
}: SelectProps) {
  const optionList = Object.entries(options);
  return (
    <>
      {label ? (
        <label
          className={`${styles.label} ${
            validator?.required ? styles.required : ''
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      ) : (
        <></>
      )}
      <select {...register(name, validator)} id={name}>
        <option value="">---- select ----</option>
        {optionList.map(([option, optionText]) => (
          <option value={option.toLowerCase()} key={option}>
            {optionText}
          </option>
        ))}
      </select>
      <ErrorComponent error={error} />
    </>
  );
}
