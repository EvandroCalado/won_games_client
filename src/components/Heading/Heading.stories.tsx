import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Most Populars',
    color: 'black',
    lineLeft: false,
    lineBottom: false,
    as: 'h2',
  },
  argTypes: {
    children: { type: 'string' },
    color: {
      control: {
        type: 'inline-radio',
      },
    },
    lineLeft: { control: { type: 'boolean' } },
    lineBottom: { control: { type: 'boolean' } },
    as: {
      control: {
        type: 'inline-radio',
      },
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
  lineBottom: false,
};

export const WithLineBottom: StoryFn<HeadingProps> = (args) => (
  <div className="space-y-2">
    <Heading {...args} as="h1" lineLeft={false} lineBottom />
    <Heading {...args} as="h2" lineLeft={false} lineBottom />
    <Heading {...args} as="h3" lineLeft={false} lineBottom />
    <Heading {...args} as="h4" lineLeft={false} lineBottom />
    <Heading {...args} as="h5" lineLeft={false} lineBottom />
    <Heading {...args} as="h6" lineLeft={false} lineBottom />
  </div>
);

WithLineBottom.args = {
  lineLeft: false,
  lineBottom: true,
};
