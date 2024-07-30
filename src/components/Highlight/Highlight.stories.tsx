import { Meta, StoryFn } from '@storybook/react';
import { Highlight, HighlightProps } from '.';
import { mock } from './mock';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<HighlightProps> = (args) => (
  <div className="mx-auto max-w-screen-lg">
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <div className="mx-auto max-w-screen-lg">
    <Highlight {...args} floatImage="/img/red-dead-float.png" />
  </div>
);

export const WithAlignmentLeft: StoryFn<HighlightProps> = (args) => (
  <div className="mx-auto max-w-screen-lg">
    <Highlight
      {...args}
      floatImage="/img/red-dead-float.png"
      alignment="left"
    />
  </div>
);
