import { InputProps } from '../../types/FormTypes';
import ErrorComponent from './ErrorComponent';
import styles from './InputStyle.module.scss';

export default function InputComponent({
  register,
  error,
  name,
  label,
  validator,
  type = 'text',
}: InputProps) {
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
      <input
        className={styles.input}
        {...register(name, validator)}
        id={name}
        name={name}
        type={type}
      />
      <ErrorComponent error={error} />
    </>
  );
}
