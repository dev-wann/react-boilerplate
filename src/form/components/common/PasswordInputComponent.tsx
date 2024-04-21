import { useState } from 'react';
import hide from '../../assets/eye-off.svg';
import show from '../../assets/eye.svg';
import { PWInputProps } from '../../types/FormTypes';
import ErrorComponent from './ErrorComponent';
import styles from './InputStyle.module.scss';

export default function PasswordInputComponent({
  register,
  errors,
  name,
  label,
  validator,
}: PWInputProps) {
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
      {/* password part*/}
      <label
        className={`${styles.label} ${
          validator?.required ? styles.required : ''
        }`}
        htmlFor={name}
      >
        {label}
      </label>

      <div
        className={`${styles.pw} ${styles.input}`}
        aria-invalid={errors['confirm'] ? true : false}
      >
        <input
          {...register(name, validator)}
          id={name}
          name={name}
          type={showPW ? 'text' : 'password'}
        />
        <button className={styles.showBtn} onClick={toggleShow}>
          <img src={showPW ? show : hide} />
        </button>
      </div>

      <ErrorComponent error={errors[name]} />

      {/* confirm part*/}
      <label
        className={`${styles.label} ${
          validator?.required ? styles.required : ''
        }`}
        htmlFor={'confirm'}
      >
        {'Confirm Password'}
      </label>

      <div
        className={`${styles.pw} ${styles.input}`}
        aria-invalid={errors['confirm'] ? true : false}
      >
        <input
          {...register('confirm', {
            required: true,
            validate: (val) =>
              val ===
                (document?.getElementById(name) as HTMLInputElement)?.value ||
              'Must be same with the password.',
          })}
          id={'confirm'}
          name={'confirm'}
          type={showPW ? 'text' : 'password'}
        />
        <button className={styles.showBtn} onClick={toggleShow}>
          <img src={showPW ? show : hide} />
        </button>
      </div>

      <ErrorComponent error={errors['confirm']} />
    </>
  );
}
