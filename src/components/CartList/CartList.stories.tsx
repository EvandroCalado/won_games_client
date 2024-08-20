import { Meta, StoryFn } from '@storybook/react';
import { CartList, CartListProps } from '.';
import { mock } from './mock';

export default {
  title: 'Components/CartList',
  component: CartList,
  args: {
    items: mock,
    total: 470,
    hasButton: false,
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

export const WithButton: StoryFn<CartListProps> = (args) => (
  <div className="mx-auto max-w-7xl">
    <CartList {...args} hasButton />
  </div>
);

export const Empty: StoryFn<CartListProps> = () => (
  <div className="mx-auto max-w-7xl">
    <CartList />
  </div>
);
