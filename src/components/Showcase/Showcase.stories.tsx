import { Meta, StoryFn } from '@storybook/react';
import { Showcase, ShowcaseProps } from '.';

import { mock as GameCardSliderMock } from '../GameCardSlider/mock';
import { mock as highlightMock } from '../Highlight/mock';

export default {
  title: 'Components/Showcase',
  component: Showcase,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: GameCardSliderMock,
};

export const WithoutTitle: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutTitle.args = {
  highlight: highlightMock,
  games: GameCardSliderMock,
};

export const WithoutHighlight: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutHighlight.args = {
  title: 'Most Popular',
  games: GameCardSliderMock,
};

export const WithoutGames: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};

export const IsSectionWhite: StoryFn<ShowcaseProps> = (args) => (
  <div className="my-36">
    <Showcase {...args} />
  </div>
);

IsSectionWhite.args = {
  title: 'Most Popular',
  games: GameCardSliderMock,
  isSectionWhite: true,
};
