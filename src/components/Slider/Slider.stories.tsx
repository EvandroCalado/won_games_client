import { Meta, StoryFn } from '@storybook/react';
import { Slider, SliderProps } from '.';

export default {
  title: 'Components/Slider',
  component: Slider,
  args: {
    children: [
      <div
        key={1}
        className="h-52 w-72 border bg-gray py-2 text-center text-white"
      >
        <h1>Item 1</h1>
      </div>,
      <div
        key={2}
        className="h-52 w-72 border bg-gray py-2 text-center text-white"
      >
        <h1>Item 2</h1>
      </div>,
      <div
        key={3}
        className="h-52 w-72 border bg-gray py-2 text-center text-white"
      >
        <h1>Item 3</h1>
      </div>,
      <div
        key={4}
        className="h-52 w-72 border bg-gray py-2 text-center text-white"
      >
        <h1>Item 4</h1>
      </div>,
    ],
  },
  argTypes: {
    settings: {
      type: 'function',
    },
    children: { type: 'function' },
  },
} as Meta;

export const Horizontal: StoryFn<SliderProps> = (args) => <Slider {...args} />;

Horizontal.args = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};
export const Vertical: StoryFn<SliderProps> = (args) => <Slider {...args} />;

Vertical.args = {
  settings: {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};
