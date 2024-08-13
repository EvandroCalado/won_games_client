import { Meta, StoryFn } from '@storybook/react';
import { CartList, CartListProps } from '.';
import { mock } from './mock';

export default {
  title: 'Components/CartList',
  component: CartList,
  args: {
    items: mock,
    total: 470,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CartListProps> = (args) => (
  <div className="mx-auto max-w-7xl">
    <CartList {...args} />
  </div>
);
