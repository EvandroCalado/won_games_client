import { Meta, StoryFn } from '@storybook/react';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  args: {
    size: 'md',
    as: 'button',
    className: '',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    icon: {
      type: 'function',
    },
    as: {
      options: ['button', 'a'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  component: Button,
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Buy now</Button>
);

export const WithIcon: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Buy now</Button>
);

WithIcon.args = {
  icon: <IconShoppingCartPlus />,
};

export const OnlyIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />;

OnlyIcon.args = {
  icon: <IconShoppingCartPlus />,
};

export const AsLink: StoryFn<ButtonProps> = (args) => (
  <Button {...args} as="a" href="/link">
    Buy now
  </Button>
);
