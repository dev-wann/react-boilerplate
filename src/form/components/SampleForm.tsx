import { SubmitHandler } from 'react-hook-form';
import useFormComponents from '../hooks/useFormComponents';
import { FormValues } from '../types/FormTypes';
import styles from './SampleForm.module.scss';

export default function SampleForm() {
  const logData: SubmitHandler<FormValues> = (data) => console.log(data);
  const { Input, Select, TextArea, Radio, onSubmit } =
    useFormComponents(logData);

  return (
    <>
      <h1>Form test</h1>

      {/* form inputs */}
      <form className={styles.form} onSubmit={onSubmit}>
        <Input name="id" label="ID" required />
        <Input name="password" label="Password" required type="password" />
        <Input
          name="confirm"
          label="Confirm Password"
          required
          type="password"
        />
        <Input name="firstName" label="First Name" required />
        <Input name="lastName" label="Last Name" required />
        <Select
          name="gender"
          label="Gender"
          options={{
            male: 'Male',
            female: 'Female',
            'non-binary': 'Non-binary',
            'not-respond': 'Prefer not to respond',
          }}
          required
        />
        <Input name="email" label="Email" required />
        <Input name="phone" label="Phone Number" required />
        <TextArea name="message" label="Message" />
        <Radio
          name="agreement"
          label="Do you agree?"
          options={{ agree: 'Agree', disagree: 'Disagree' }}
          required
        />

        {/* buttons */}
        <div className={styles.buttons}>
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </>
  );
}
