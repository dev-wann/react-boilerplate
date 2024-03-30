import { TextAreaProps } from '../../types/FormTypes';

export default function TextAreaComponent({
  register,
  name,
  label,
  required = false,
}: TextAreaProps) {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : <></>}
      <textarea {...register(name, { required })} id={name} name={name} />
    </>
  );
}
