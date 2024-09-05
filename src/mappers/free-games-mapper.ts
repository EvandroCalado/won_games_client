import { HighlighAlignment, RibbonColor, RibbonSize } from '@/components';
import { Sections, UpcomingGames } from '@/types';

export const freeGamesTitleMapper = (sections: Sections) =>
  sections.data.attributes.freeGames.title;

export const freeGamesHighlightMapper = (sections: Sections) => ({
  title: sections.data.attributes.freeGames.highlight.title,
  subtitle: sections.data.attributes.freeGames.highlight.subtitle,
  buttonLabel: sections.data.attributes.freeGames.highlight.buttonLabel,
  buttonLink: sections.data.attributes.freeGames.highlight.buttonLink,
  backgroundImage:
    sections.data.attributes.freeGames.highlight.backgroundImage.data.attributes
      .url,
  floatImage:
    sections.data.attributes.freeGames.highlight.floatImage.data.attributes.url,
  alignment: sections.data.attributes.freeGames.highlight
    .alignment as HighlighAlignment,
});

export const freeGamesMapper = (freeGames: UpcomingGames) => {
  return freeGames.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data.attributes.formats?.small.url,
    price: game.attributes.price,
    ribbon: 'Free',
    ribbonColor: 'primary' as RibbonColor,
    ribbonSize: 'sm' as RibbonSize,
  }));
};
