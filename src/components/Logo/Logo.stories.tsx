import { Meta, StoryFn } from '@storybook/react';
import { Logo, LogoProps } from '.';

export default {
  title: 'Components/Logo',
  args: {
    color: 'white',
    size: 'normal',
    hideOnMobile: false,
  },
  component: Logo,
} as Meta;

export const Default: StoryFn<LogoProps> = (args) => (
  <div className="flex h-28 w-full items-center justify-center bg-gray">
    <Logo {...args} />
  </div>
);
