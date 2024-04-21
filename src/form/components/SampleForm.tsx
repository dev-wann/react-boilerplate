import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../types/FormTypes';
import {
  emailValidator,
  idValidator,
  phoneValidator,
  pwValidator,
} from '../utils/validators';
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
          validator={idValidator}
        />

        {/* password */}
        <PasswordInputComponent
          register={register}
          errors={errors}
          name="password"
          label="Password"
          validator={pwValidator}
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
          validator={emailValidator}
        />

        {/* phone */}
        <InputComponent
          register={register}
          error={errors['phone']}
          name="phone"
          label="Phone Number"
          validator={phoneValidator}
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
