import { Meta } from '@storybook/react';
import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

export const Default = () => (
  <div className="mx-auto max-w-screen-xl">
    <Footer />
  </div>
);
