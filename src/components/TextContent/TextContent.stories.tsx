import { Meta, StoryFn } from '@storybook/react';
import { TextContent, TextContentProps } from '.';
import { mock } from './mock';

export default {
  title: 'Game/TextContent',
  component: TextContent,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<TextContentProps> = (args) => (
  <div className="mx-auto max-w-7xl">
    <TextContent {...args} />
  </div>
);
