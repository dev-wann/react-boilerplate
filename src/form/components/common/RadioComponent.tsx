import { RadioProps } from '../../types/FormTypes';
import ErrorComponent from './ErrorComponent';
import styles from './InputStyle.module.scss';

export default function RadioComponent({
  register,
  error,
  name,
  label,
  validator,
  options,
}: RadioProps) {
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
      <div>
        {optionList.map(([option, optionLabel]) => (
          <span key={option}>
            <input
              {...register(name, validator)}
              type="radio"
              value={option}
              id={option}
            />
            <label htmlFor={option}>{optionLabel}</label>
          </span>
        ))}
      </div>
      <ErrorComponent error={error} />
    </>
  );
}
