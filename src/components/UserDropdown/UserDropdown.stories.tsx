import { Meta, StoryFn } from '@storybook/react';
import { UserDropdown, UserDropdownProps } from '.';

export default {
  title: 'Components/UserDropdown',
  component: UserDropdown,
  args: {
    username: 'username',
  },
} as Meta;

export const Default: StoryFn<UserDropdownProps> = (args) => (
  <div className="flex max-w-7xl justify-end">
    <UserDropdown {...args} />
  </div>
);
