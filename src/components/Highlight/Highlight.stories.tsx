import { Meta, StoryFn } from '@storybook/react';
import { Highlight, HighlightProps } from '.';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    backgroundImage: '/img/red-dead-img.jpg',
  },
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
