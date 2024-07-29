import { Meta, StoryFn } from '@storybook/react';
import { BannerSlider, BannerSliderProps } from '.';
import { mock } from './mock';

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: {
    items: mock,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BannerSliderProps> = (args) => (
  <div className="mx-auto max-w-screen-lg">
    <BannerSlider {...args} />
  </div>
);
