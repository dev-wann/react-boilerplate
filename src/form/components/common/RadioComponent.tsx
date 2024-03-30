import { RadioProps } from '../../types/FormTypes';

export default function RadioComponent({
  register,
  name,
  label,
  options,
  required = false,
}: RadioProps) {
  const optionList = Object.entries(options);
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : <></>}
      <div>
        {optionList.map(([option, optionLabel]) => (
          <>
            <input
              {...register(name, { required })}
              type="radio"
              value={option}
              id={option}
            />
            <label htmlFor={option}>{optionLabel}</label>
          </>
        ))}
      </div>
    </>
  );
}
