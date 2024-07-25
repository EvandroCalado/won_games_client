import { Meta, StoryFn } from '@storybook/react';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    fullWidth: { control: { type: 'boolean' } },
    icon: {
      type: 'function',
    },
  },
  component: Button,
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Buy now</Button>
);

Default.args = {
  fullWidth: false,
};

export const WithIcon: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Buy now</Button>
);

WithIcon.args = {
  children: 'Buy now',
  fullWidth: false,
  icon: <IconShoppingCartPlus />,
};

export const WithIconAndFullWidth: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Buy now</Button>
);

WithIconAndFullWidth.args = {
  children: 'Buy now',
  fullWidth: true,
  icon: <IconShoppingCartPlus />,
};

export const OnlyIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />;

OnlyIcon.args = {
  children: null,
  fullWidth: false,
  icon: <IconShoppingCartPlus />,
};
