import {
  FieldError,
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export type FormValues = {
  id: string;
  password: string;
  confirm: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  message: string;
  agreement: boolean;
};

export type RegisterType = UseFormRegister<FormValues>;

export type InputProps = {
  register: RegisterType;
  error?: FieldError;
  name: keyof FormValues;
  label?: string;
  validator?: RegisterOptions<FormValues, keyof FormValues>;
  type?: string;
};

export type PWInputProps = Omit<InputProps, 'error'> & {
  errors: FieldErrors<FormValues>;
};

export type TextAreaProps = Omit<InputProps, 'type'>;

type Options = { options: { [key: string]: string } };

export type SelectProps = Omit<InputProps & Options, 'type'>;

export type RadioProps = Omit<InputProps & Options, 'type'>;
