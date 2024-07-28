import { Meta, StoryFn } from '@storybook/react';
import { GameCardSlider, GameCardSliderProps } from '.';
import { mock } from './mock';

export default {
  title: 'Components/GameCardSlider',
  component: GameCardSlider,
  args: {
    items: mock,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: StoryFn<GameCardSliderProps> = (args) => (
  <div className="mx-auto max-w-7xl">
    <GameCardSlider {...args} />
  </div>
);
