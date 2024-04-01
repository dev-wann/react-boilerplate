import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorComponent from '../components/common/ErrorComponent';
import InputComponent from '../components/common/InputComponent';
import PasswordInputComponent from '../components/common/PasswordInputComponent';
import RadioComponent from '../components/common/RadioComponent';
import SelectComponent from '../components/common/SelectComponent';
import TextAreaComponent from '../components/common/TextAreaComponent';
import {
  FormValues,
  InputProps,
  RadioProps,
  SelectProps,
  TextAreaProps,
} from '../types/FormTypes';

export default function useFormComponents(onSubmit: SubmitHandler<FormValues>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onTouched' });

  type omitProps = 'register';

  const Input = useCallback(
    (props: Omit<InputProps, omitProps>) => (
      <>
        <InputComponent register={register} {...props} />
        <ErrorComponent error={errors[props.name]} />
      </>
    ),
    [register, errors]
  );

  const PasswordInput = useCallback(
    (props: Omit<InputProps, omitProps>) => (
      <>
        <PasswordInputComponent register={register} {...props} />
        <ErrorComponent error={errors[props.name]} />
        <PasswordInputComponent
          register={register}
          name="confirm"
          label="Confirm Password"
          validator={{
            required: true,
            validate: (val) =>
              val ===
                (document?.getElementById(props.name) as HTMLInputElement)
                  ?.value || 'Must be same with the password.',
          }}
        />
        <ErrorComponent error={errors['confirm']} />
      </>
    ),
    [register, errors]
  );

  const Select = useCallback(
    (props: Omit<SelectProps, omitProps>) => (
      <>
        <SelectComponent register={register} {...props} />
        <ErrorComponent error={errors[props.name]} />
      </>
    ),
    [register, errors]
  );

  const TextArea = useCallback(
    (props: Omit<TextAreaProps, omitProps>) => (
      <>
        <TextAreaComponent register={register} {...props} />
        <ErrorComponent error={errors[props.name]} />
      </>
    ),
    [register, errors]
  );

  const Radio = useCallback(
    (props: Omit<RadioProps, omitProps>) => (
      <>
        <RadioComponent register={register} {...props} />
        <ErrorComponent error={errors[props.name]} />
      </>
    ),
    [register, errors]
  );

  return {
    Input,
    PasswordInput,
    Select,
    TextArea,
    Radio,
    onSubmit: handleSubmit(onSubmit),
  };
}
