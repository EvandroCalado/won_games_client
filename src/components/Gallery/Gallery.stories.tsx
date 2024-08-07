import { Meta, StoryFn } from '@storybook/react';
import { Gallery, GalleryProps } from '.';
import { mock } from './mock';

export default {
  title: 'Game/Gallery',
  component: Gallery,
  args: {
    items: mock,
  },
} as Meta;

export const Default: StoryFn<GalleryProps> = (args) => (
  <div className="mx-auto max-w-7xl">
    <Gallery {...args} />
  </div>
);
