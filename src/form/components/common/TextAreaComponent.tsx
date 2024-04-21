import { TextAreaProps } from '../../types/FormTypes';
import ErrorComponent from './ErrorComponent';
import styles from './InputStyle.module.scss';

export default function TextAreaComponent({
  register,
  error,
  name,
  label,
  validator,
}: TextAreaProps) {
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

      <textarea
        {...register(name, validator)}
        className={styles.input}
        id={name}
        name={name}
        aria-invalid={error ? true : false}
      />
      <ErrorComponent error={error} />
    </>
  );
}
