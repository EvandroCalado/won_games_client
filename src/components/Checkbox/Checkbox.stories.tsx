import { Meta, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    labelFor: 'check',
    labelColor: 'black',
  },
  argTypes: {
    labelColor: {
      options: ['white', 'black'],
      control: {
        type: 'inline-radio',
      },
    },
    onCheck: {
      action: 'checked',
    },
  },
} as Meta;

export const Default: StoryFn<CheckboxProps> = (args) => (
  <div className="space-y-4">
    <div>
      <Checkbox
        {...args}
        name="category"
        label="Action"
        labelFor="action"
        isCheked
      />
    </div>
    <div>
      <Checkbox {...args} name="category" label="Rpg" labelFor="rpg" />
    </div>
    <div>
      <Checkbox
        {...args}
        name="category"
        label="Adventure"
        labelFor="adventure"
      />
    </div>
  </div>
);
