import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Most Populars',
    color: 'white',
    lineLeft: false,
    lineBottom: false,
  },
  argTypes: {
    children: { type: 'string' },
    color: {
      options: ['white', 'black'],
      control: {
        type: 'inline-radio',
      },
    },
    lineLeft: { control: { type: 'boolean' } },
    lineBottom: { control: { type: 'boolean' } },
  },
} as Meta;

export const Default: StoryFn<HeadingProps> = (args) => (
  <div className="flex h-28 w-full items-center justify-center bg-gray">
    <Heading {...args} />
  </div>
);
