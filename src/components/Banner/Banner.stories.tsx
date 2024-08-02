import { Meta, StoryFn } from '@storybook/react';
import { Banner, BannerProps } from '.';

export default {
  title: 'Components/Banner',
  component: Banner,
  args: {
    img: 'https://upload.wikimedia.org/wikipedia/en/0/08/Crashlands.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling',
    ribbonSize: 'md',
    ribbonColor: 'secondary',
  },

  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<BannerProps> = (args) => (
  <div className="mx-auto max-w-screen-lg p-4 md:px-8">
    <Banner {...args} />
  </div>
);

export const WithRibbon: StoryFn<BannerProps> = (args) => (
  <div className="mx-auto max-w-screen-lg p-4 md:px-8">
    <Banner
      {...args}
      ribbon="Bestselling"
      ribbonSize="md"
      ribbonColor="secondary"
    />
  </div>
);
