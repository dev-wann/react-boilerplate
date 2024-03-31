import { FieldError } from 'react-hook-form';
import styles from './InputStyle.module.scss';

type Props = {
  error?: FieldError;
};

export default function ErrorComponent({ error }: Props) {
  // no error
  if (!error) return <></>;

  // custom error message
  if (error.message !== '') {
    return <p className={styles.errorMsg}>{error.message}</p>;
  }

  // default error message
  let msg = '';
  switch (error.type) {
    case 'required':
      msg = 'This field is required.';
      break;
    case 'pattern':
      msg = 'Field value does not fit the format.';
      break;
    case 'max':
    case 'min':
    case 'maxLength':
    case 'minLength':
      msg = 'Field value length is too long or short.';
      break;
    default:
      msg = 'Invalid field value. Please check again.';
  }
  return <p className={styles.errorMsg}>{msg}</p>;
}
