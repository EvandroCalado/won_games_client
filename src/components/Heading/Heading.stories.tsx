import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Most Populars',
    color: 'white',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />;
