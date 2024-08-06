import { Meta, StoryFn } from '@storybook/react';
import { GameDetails, GameDetailsProps } from '.';
import { mock } from './mock';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: mock,
  argTypes: {
    platforms: {
      control: 'inline-check',
      options: ['windows', 'linux', 'mac'],
    },
    rating: {
      control: {
        type: 'inline-radio',
        options: ['BR0', 'BR10', 'BR12', 'BR14', 'BR16', 'BR18'],
      },
    },
    genres: {
      control: 'inline-check',
      options: ['Action', 'Adventure', 'Rpg', 'Simulation', 'Strategy'],
    },
  },
} as Meta;

export const Default: StoryFn<GameDetailsProps> = (args) => (
  <div className="mx-auto max-w-7xl">
    <GameDetails {...args} />
  </div>
);
