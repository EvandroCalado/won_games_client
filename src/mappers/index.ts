export * from './banner-mapper';
export * from './free-games-mapper';
export * from './most-popular-games-mapper';
export * from './new-games-mapper';
export * from './upcoming-games-mapper';

import { HighlighAlignment } from '@/components';
import { Games, Highlight } from '@/types';

export const highlightMapper = (highlight: Highlight) => ({
  title: highlight.title,
  subtitle: highlight.subtitle,
  buttonLabel: highlight.buttonLabel,
  buttonLink: highlight.buttonLink,
  backgroundImage: highlight.backgroundImage.data.attributes.url,
  floatImage: highlight.floatImage.data.attributes.url,
  alignment: highlight.alignment as HighlighAlignment,
});

export const gamesMapper = (games: Games) => {
  return games.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data.attributes.formats?.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.7,
  }));
};
