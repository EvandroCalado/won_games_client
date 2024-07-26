import { Meta, StoryFn } from '@storybook/react';
import { Ribbon, RibbonProps } from '.';

export default {
  title: 'Components/Ribbon',
  args: {
    children: 'Best Seller',
    color: 'primary',
    size: 'md',
  },
  argTypes: {
    children: { type: 'string' },
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  component: Ribbon,
} as Meta;

export const Default: StoryFn<RibbonProps> = (args) => (
  <>
    <div className="relative h-20 w-80 bg-lightGray">
      <Ribbon {...args} />
    </div>
  </>
);
