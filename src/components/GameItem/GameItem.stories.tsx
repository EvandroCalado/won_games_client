import { Meta, StoryFn } from '@storybook/react';
import { GameItem, GameItemProps } from '.';

export default {
  title: 'Components/GameItem',
  component: GameItem,
  args: {
    img: '/img/card-image.png',
    title: 'Population Zero',
    price: 235,
    downloadLink: '',
    paymentInfo: {
      number: '**** **** **** 4326',
      img: '/img/master.svg',
      flag: 'mastercard',
      purchaseDate: 'Purchase made on 07/20/2024 at 20:32',
    },
  },
} as Meta;

export const Default: StoryFn<GameItemProps> = (args) => <GameItem {...args} />;

export const WithPayment: StoryFn<GameItemProps> = (args) => (
  <GameItem {...args} downloadLink="https://link" />
);
