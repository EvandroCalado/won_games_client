import { Meta, StoryFn } from '@storybook/react';
import { CartDropdown, CartDropdownProps } from '.';
import { mock } from '../CartList/mock';

export default {
  title: 'Components/CartDropdown',
  component: CartDropdown,
  args: {
    items: mock,
    total: 300,
  },
} as Meta;

export const Default: StoryFn<CartDropdownProps> = (args) => (
  <div className="flex max-w-7xl justify-end">
    <CartDropdown {...args} />
  </div>
);

export const Empty: StoryFn<CartDropdownProps> = () => (
  <div className="flex max-w-7xl justify-end">
    <CartDropdown />
  </div>
);
