import { RegisterOptions } from 'react-hook-form';
import { FormValues } from '../types/FormTypes';

export const idValidator = {
  required: true,
  minLength: {
    value: 5,
    message: 'ID should be at least 5 characters long.',
  },
  maxLength: {
    value: 20,
    message: 'ID should be up to 20 charaters.',
  },
};

export const pwValidator: RegisterOptions<FormValues, keyof FormValues> = {
  required: true,
  minLength: {
    value: 5,
    message: 'Password should be at least 5 characters long.',
  },
  maxLength: {
    value: 20,
    message: 'Password should be up to 20 charaters.',
  },
  validate: {
    lowerCase: (val) =>
      (typeof val === 'string' && /[a-z]/.test(val)) ||
      'Must contain lowercase character.',
    upperCase: (val) =>
      (typeof val === 'string' && /[A-Z]/.test(val)) ||
      'Must contain uppercase character.',
    number: (val) =>
      (typeof val === 'string' && /[0-9]/.test(val)) || 'Must contain number.',
    special: (val) =>
      (typeof val === 'string' && /[!-\/:-@[-`{-~]/.test(val)) ||
      'Must contain special character.',
  },
};

export const emailValidator: RegisterOptions<FormValues, keyof FormValues> = {
  required: true,
  validate: (val) =>
    (typeof val === 'string' && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)) ||
    'Invalid email adddress',
};

export const phoneValidator: RegisterOptions<FormValues, keyof FormValues> = {
  required: true,
  validate: (val) =>
    (typeof val === 'string' && /^\+?[\d\s\-.()]+$/.test(val)) ||
    'Invalid phone number',
};
