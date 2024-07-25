import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Most Populars',
    color: 'black',
    lineLeft: false,
    lineBottomPrimary: false,
    lineBottomSecondary: false,
    as: 'h2',
    className: '',
  },
  argTypes: {
    children: { type: 'string' },
    color: {
      control: {
        type: 'inline-radio',
      },
      options: ['white', 'black'],
    },
    lineLeft: { control: { type: 'boolean' } },
    lineBottomPrimary: { control: { type: 'boolean' } },
    lineBottomSecondary: { control: { type: 'boolean' } },
    as: {
      control: {
        type: 'inline-radio',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} as Meta;

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const WithLineLeft: StoryFn<HeadingProps> = (args) => (
  <div className="space-y-2">
    <Heading {...args} as="h1" />
    <Heading {...args} as="h2" />
    <Heading {...args} as="h3" />
    <Heading {...args} as="h4" />
    <Heading {...args} as="h5" />
    <Heading {...args} as="h6" />
  </div>
);

WithLineLeft.args = {
  lineLeft: true,
};

export const WithLineBottomPrimary: StoryFn<HeadingProps> = (args) => (
  <div className="space-y-2">
    <Heading {...args} as="h1" />
    <Heading {...args} as="h2" />
    <Heading {...args} as="h3" />
    <Heading {...args} as="h4" />
    <Heading {...args} as="h5" />
    <Heading {...args} as="h6" />
  </div>
);

WithLineBottomPrimary.args = {
  lineBottomPrimary: true,
};

export const WithLineBottomSecondary: StoryFn<HeadingProps> = (args) => (
  <div className="space-y-2">
    <Heading {...args} as="h1" />
    <Heading {...args} as="h2" />
    <Heading {...args} as="h3" />
    <Heading {...args} as="h4" />
    <Heading {...args} as="h5" />
    <Heading {...args} as="h6" />
  </div>
);

WithLineBottomSecondary.args = {
  lineBottomSecondary: true,
};
