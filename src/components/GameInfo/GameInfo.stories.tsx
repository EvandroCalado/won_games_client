import { Meta, StoryFn } from '@storybook/react';
import { GameInfo, GameInfoProps } from '.';

import { mock } from './mock';

export default {
  title: 'Components/GameInfo',
  component: GameInfo,
  args: mock,
} as Meta;

export const Default: StoryFn<GameInfoProps> = (args) => (
  <div className="mx-auto max-w-7xl">
    <GameInfo {...args} />
  </div>
);
