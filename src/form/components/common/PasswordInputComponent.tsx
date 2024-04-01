import { useState } from 'react';
import hide from '../../assets/eye-off.svg';
import show from '../../assets/eye.svg';
import { InputProps } from '../../types/FormTypes';
import styles from './InputStyle.module.scss';

export default function PasswordInputComponent({
  register,
  name,
  label,
  validator,
}: InputProps) {
  const [showPW, setShowPW] = useState(false);
  const toggleShow = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPW(!showPW);
    setTimeout(() => {
      const input = document.getElementById(name);
      if (input instanceof HTMLInputElement) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    });
  };

  return (
    <>
      <label
        className={`${styles.label} ${
          validator?.required ? styles.required : ''
        }`}
        htmlFor={name}
      >
        {label}
      </label>

      <div className={styles.pw}>
        <input
          className={styles.input}
          {...register(name, validator)}
          id={name}
          name={name}
          type={showPW ? 'text' : 'password'}
        />
        <button className={styles.showBtn} onClick={toggleShow}>
          <img src={showPW ? show : hide} />
        </button>
      </div>
    </>
  );
}
