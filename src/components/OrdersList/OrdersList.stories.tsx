import { Meta, StoryFn } from '@storybook/react';
import { OrdersList, OrdersListProps } from '.';
import { mock } from './mock';

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: mock,
  },
} as Meta;

export const Default: StoryFn<OrdersListProps> = (args) => (
  <OrdersList {...args} />
);
