import { Meta, StoryFn } from '@storybook/react';
import { CartIcon, CartIconProps } from '.';

export default {
  title: 'Components/CartIcon',
  component: CartIcon,
  args: {
    quantity: 0,
  },
} as Meta;

export const Default: StoryFn<CartIconProps> = (args) => <CartIcon {...args} />;

export const WithItems: StoryFn<CartIconProps> = (args) => (
  <CartIcon {...args} quantity={3} />
);
