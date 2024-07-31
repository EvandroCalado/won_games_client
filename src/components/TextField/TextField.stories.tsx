import { Meta, StoryFn } from '@storybook/react';
import { IconMail } from '@tabler/icons-react';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: '',
    name: 'email',
    initialValue: '',
    placeholder: 'test@email.com',
    disabled: false,
    error: '',
  },
  argTypes: {
    labe: {
      type: 'string',
    },
    onInput: {
      action: 'changed',
    },
    icon: {
      type: 'function',
    },
    iconPosition: {
      options: ['left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta;

export const Default: StoryFn<TextFieldProps> = (args) => (
  <div className="max-w-80">
    <TextField {...args} />
  </div>
);

export const WithLabel: StoryFn<TextFieldProps> = (args) => (
  <div className="max-w-80">
    <TextField {...args} />
  </div>
);

WithLabel.args = {
  label: 'Email',
};

export const WithIcon: StoryFn<TextFieldProps> = (args) => (
  <div className="flex max-w-4xl items-center gap-4">
    <TextField {...args} />
    <TextField {...args} iconPosition="right" />
  </div>
);

WithIcon.args = {
  label: 'Email',
  icon: <IconMail />,
};

export const WithError: StoryFn<TextFieldProps> = (args) => (
  <div className="max-w-80">
    <TextField {...args} />
  </div>
);

WithError.args = {
  label: 'Email',
  icon: <IconMail />,
  error: 'Invalid email',
};

export const Disabled: StoryFn<TextFieldProps> = (args) => (
  <div className="max-w-80">
    <TextField {...args} />
  </div>
);

Disabled.args = {
  label: 'Email',
  icon: <IconMail />,
  disabled: true,
};
