import { Meta, StoryFn } from '@storybook/react';
import { Radio, RadioProps } from '.';

export default {
  title: 'Components/Radio',
  component: Radio,
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

export const Default: StoryFn<RadioProps> = (args) => (
  <div className="space-y-4">
    <div>
      <Radio
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div>
      <Radio
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
    </div>
    <div>
      <Radio
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        {...args}
      />
    </div>
  </div>
);
