import { Meta, StoryFn } from '@storybook/react';
import { Logo, LogoProps } from '.';

export default {
  title: 'Components/Logo',
  args: {
    color: 'black',
    size: 'normal',
    hideOnMobile: false,
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
    },
  },
  component: Logo,
} as Meta;

export const Default: StoryFn<LogoProps> = (args) => <Logo {...args} />;

export const Large: StoryFn<LogoProps> = (args) => <Logo {...args} />;

Large.args = {
  size: 'large',
};

export const Mobile: StoryFn<LogoProps> = (args) => <Logo {...args} />;

Mobile.args = {
  hideOnMobile: true,
};
