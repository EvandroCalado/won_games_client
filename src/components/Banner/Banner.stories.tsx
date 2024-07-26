import { Meta, StoryFn } from '@storybook/react';
import { Banner, BannerProps } from '.';

export default {
  title: 'Components/Banner',
  args: {
    img: 'https://upload.wikimedia.org/wikipedia/en/0/08/Crashlands.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  parameters: {
    layout: 'fullscreen',
  },
  component: Banner,
} as Meta;

export const Default: StoryFn<BannerProps> = (args) => <Banner {...args} />;
