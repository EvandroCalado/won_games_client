import { HighlighAlignment } from '@/components';
import { Sections, UpcomingGames } from '@/types';

export const upComingGamesTitleMapper = (sections: Sections) =>
  sections.data.attributes.upcomingGames.title;

export const upcomingGamesHighlightMapper = (sections: Sections) => ({
  title: sections.data.attributes.upcomingGames.highlight.title,
  subtitle: sections.data.attributes.upcomingGames.highlight.subtitle,
  buttonLabel: sections.data.attributes.upcomingGames.highlight.buttonLabel,
  buttonLink: sections.data.attributes.upcomingGames.highlight.buttonLink,
  backgroundImage:
    sections.data.attributes.upcomingGames.highlight.backgroundImage.data
      .attributes.url,
  floatImage:
    sections.data.attributes.upcomingGames.highlight.floatImage.data.attributes
      .url,
  alignment: sections.data.attributes.upcomingGames.highlight
    .alignment as HighlighAlignment,
});

export const upcomingGamesMapper = (upcomingGames: UpcomingGames) => {
  return upcomingGames.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data.attributes.formats?.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.7,
  }));
};
