import { Meta, StoryFn } from '@storybook/react';
import { ProfileMenu, ProfileMenuProps } from '.';

export default {
  title: 'Components/ProfileMenu',
  component: ProfileMenu,
  argTypes: {
    activeLink: {
      options: ['/profile/me', '/profile/cards', '/profile/orders'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta;

export const Default: StoryFn<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
);
