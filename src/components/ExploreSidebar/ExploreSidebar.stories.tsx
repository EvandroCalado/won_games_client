import { Meta, StoryFn } from '@storybook/react';
import { ExploreSidebar, ExploreSidebarProps } from '.';
import { mock } from './mock';

export default {
  title: 'Components/ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: mock,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
);

export const WithInitialValues: StoryFn<ExploreSidebarProps> = (args) => (
  <ExploreSidebar
    {...args}
    initialValues={{ windows: true, sort_by: 'low-to-high' }}
  />
);
