import { Meta } from '@storybook/react';
import { FormSignUp } from '.';

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
} as Meta;

export const Default = () => (
  <div className="mx-auto flex w-80 flex-col items-center justify-center">
    <FormSignUp />
  </div>
);
