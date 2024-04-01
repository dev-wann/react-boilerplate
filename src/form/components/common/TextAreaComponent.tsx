import { TextAreaProps } from '../../types/FormTypes';
import styles from './InputStyle.module.scss';

export default function TextAreaComponent({
  register,
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
      <textarea {...register(name, validator)} id={name} name={name} />
    </>
  );
}
