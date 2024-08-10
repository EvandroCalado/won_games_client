import { Meta, StoryFn } from '@storybook/react';
import { Empty, EmptyProps } from '.';

export default {
  title: 'Components/Empty',
  component: Empty,
  args: {
    title: 'You wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true,
  },
} as Meta;

export const Default: StoryFn<EmptyProps> = (args) => <Empty {...args} />;
