import { SubmitHandler, useForm } from 'react-hook-form';
import InputComponent from '../components/common/InputComponent';
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
  } = useForm<FormValues>();

  type omitProps = 'register';

  function Input(props: Omit<InputProps, omitProps>) {
    return <InputComponent register={register} {...props} />;
  }

  function Select(props: Omit<SelectProps, omitProps>) {
    return <SelectComponent register={register} {...props} />;
  }

  function TextArea(props: Omit<TextAreaProps, omitProps>) {
    return <TextAreaComponent register={register} {...props} />;
  }

  function Radio(props: Omit<RadioProps, omitProps>) {
    return <RadioComponent register={register} {...props} />;
  }

  return { Input, Select, TextArea, Radio, onSubmit: handleSubmit(onSubmit) };
}
