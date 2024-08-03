import { Meta } from '@storybook/react';
import { FormSignIn } from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
} as Meta;

export const Default = () => (
  <div className="mx-auto flex w-80 flex-col items-center justify-center">
    <FormSignIn />
  </div>
);
