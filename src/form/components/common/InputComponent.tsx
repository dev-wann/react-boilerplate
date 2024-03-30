import { InputProps } from '../../types/FormTypes';
import styles from './InputStyle.module.scss';

export default function InputComponent({
  register,
  name,
  label,
  type = 'text',
  required = false,
}: InputProps) {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : <></>}
      <input
        className={styles.input}
        {...register(name, { required })}
        id={name}
        name={name}
        type={type}
      />
    </>
  );
}
