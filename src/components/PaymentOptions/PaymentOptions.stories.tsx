import { Meta, StoryFn } from '@storybook/react';
import { PaymentOptions, PaymentOptionsProps } from '.';
import { mock } from './mock';

export default {
  title: 'Components/PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mock,
  },
  argTypes: {
    handlePayment: {
      action: 'clicked',
    },
  },
} as Meta;

export const Default: StoryFn<PaymentOptionsProps> = (args) => (
  <div className="max-w-sm">
    <PaymentOptions {...args} />
  </div>
);
