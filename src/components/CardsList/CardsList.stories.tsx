import { Meta, StoryFn } from '@storybook/react';
import { CardsList, CardsListProps } from '.';
import { mock } from '../PaymentOptions/mock';

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: mock,
  },
} as Meta;

export const Default: StoryFn<CardsListProps> = (args) => (
  <CardsList {...args} />
);
