import { Meta, StoryFn } from '@storybook/react';
import { Dropdown, DropdownProps } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    title: 'Dropdown',
    children: 'content',
  },
} as Meta;

export const Default: StoryFn<DropdownProps> = (args) => (
  <div className="w-80">
    <Dropdown {...args} />
  </div>
);
