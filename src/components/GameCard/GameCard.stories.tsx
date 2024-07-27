import { Meta, StoryFn } from '@storybook/react';
import { GameCard, GameCardProps } from '.';

export default {
  title: 'Components/GameCard',
  args: {
    title: 'Population Zero',
    developer: 'Other Ocean',
    img: '/img/card-image.png',
    price: 235,
    favorite: false,
  },
  argTypes: {
    img: {
      type: 'string',
    },
    onFav: {
      action: 'clicked',
    },
  },
  component: GameCard,
} as Meta;

export const Default: StoryFn<GameCardProps> = (args) => (
  <div className="w-[300px]">
    <GameCard {...args} />
  </div>
);

export const WithPromotionalPrice: StoryFn<GameCardProps> = (args) => (
  <div className="w-[300px]">
    <GameCard {...args} />
  </div>
);

WithPromotionalPrice.args = {
  promotionalPrice: 215,
};

export const WithCornerRibbon: StoryFn<GameCardProps> = (args) => (
  <div className="w-[300px]">
    <GameCard {...args} />
  </div>
);

WithCornerRibbon.args = {
  ribbon: 'Bestselling',
  ribbonColor: 'primary',
  ribbonSize: 'sm',
};
