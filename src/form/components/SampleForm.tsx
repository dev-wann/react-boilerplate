import { SubmitHandler } from 'react-hook-form';
import useFormComponents from '../hooks/useFormComponents';
import { FormValues } from '../types/FormTypes';
import styles from './SampleForm.module.scss';

export default function SampleForm() {
  const logData: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  const { Input, PasswordInput, Select, TextArea, Radio, onSubmit } =
    useFormComponents(logData);

  return (
    <>
      <h1>Form test</h1>

      {/* form */}
      <form className={styles.form} onSubmit={onSubmit}>
        {/* ID */}
        <Input
          name="id"
          label="ID"
          validator={{
            required: true,
            minLength: {
              value: 5,
              message: 'ID should be at least 5 characters long.',
            },
            maxLength: {
              value: 20,
              message: 'ID should be up to 20 charaters.',
            },
          }}
        />

        {/* password */}
        <PasswordInput
          name="password"
          label="Password"
          validator={{
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
                (typeof val === 'string' && /[0-9]/.test(val)) ||
                'Must contain number.',
              special: (val) =>
                (typeof val === 'string' && /[!-\/:-@[-`{-~]/.test(val)) ||
                'Must contain special character.',
            },
          }}
        />

        {/* first name */}
        <Input
          name="firstName"
          label="First Name"
          validator={{ required: true }}
        />

        {/* last name */}
        <Input
          name="lastName"
          label="Last Name"
          validator={{ required: true }}
        />

        {/* gender */}
        <Select
          name="gender"
          label="Gender"
          validator={{ required: true }}
          options={{
            male: 'Male',
            female: 'Female',
            'non-binary': 'Non-binary',
            'not-respond': 'Prefer not to respond',
          }}
        />

        {/* email */}
        <Input
          name="email"
          label="Email"
          validator={{
            required: true,
            validate: (val) =>
              (typeof val === 'string' &&
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)) ||
              'Invalid email adddress',
          }}
        />

        {/* phone */}
        <Input
          name="phone"
          label="Phone Number"
          validator={{
            required: true,
            validate: (val) =>
              (typeof val === 'string' && /^\+?[\d\s\-.()]+$/.test(val)) ||
              'Invalid phone number',
          }}
        />

        {/* agreement */}
        <Radio
          name="agreement"
          label="Do you agree?"
          validator={{ required: true }}
          options={{ agree: 'Agree', disagree: 'Disagree' }}
        />

        {/* message */}
        <TextArea name="message" label="Message" />

        {/* buttons */}
        <div className={styles.buttons}>
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </>
  );
}
