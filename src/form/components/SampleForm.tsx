import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../types/FormTypes';
import styles from './SampleForm.module.scss';
import InputComponent from './common/InputComponent';
import PasswordInputComponent from './common/PasswordInputComponent';
import RadioComponent from './common/RadioComponent';
import SelectComponent from './common/SelectComponent';
import TextAreaComponent from './common/TextAreaComponent';

export default function SampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onTouched' });

  const logData: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Form test</h1>

      {/* form */}
      <form className={styles.form} onSubmit={handleSubmit(logData)}>
        {/* ID */}
        <InputComponent
          register={register}
          error={errors['id']}
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
        <PasswordInputComponent
          register={register}
          errors={errors}
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
        <InputComponent
          register={register}
          error={errors['firstName']}
          name="firstName"
          label="First Name"
          validator={{ required: true }}
        />

        {/* last name */}
        <InputComponent
          register={register}
          error={errors['lastName']}
          name="lastName"
          label="Last Name"
          validator={{ required: true }}
        />

        {/* gender */}
        <SelectComponent
          register={register}
          error={errors['gender']}
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
        <InputComponent
          register={register}
          error={errors['email']}
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
        <InputComponent
          register={register}
          error={errors['phone']}
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
        <RadioComponent
          register={register}
          error={errors['agreement']}
          name="agreement"
          label="Do you agree?"
          validator={{ required: true }}
          options={{ agree: 'Agree', disagree: 'Disagree' }}
        />

        {/* message */}
        <TextAreaComponent register={register} name="message" label="Message" />

        {/* buttons */}
        <div className={styles.buttons}>
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </>
  );
}
