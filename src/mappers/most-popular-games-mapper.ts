import { HighlighAlignment } from '@/components';
import { Sections } from '@/types';

export const mostPopularGamesTitleMapper = (sections: Sections) =>
  sections.data.attributes.popularGames.title;

export const mostPopularGamesHighlightMapper = (sections: Sections) => {
  return {
    title: sections.data.attributes.popularGames.highlight.title,
    subtitle: sections.data.attributes.popularGames.highlight.subtitle,
    buttonLabel: sections.data.attributes.popularGames.highlight.buttonLabel,
    buttonLink: sections.data.attributes.popularGames.highlight.buttonLink,
    backgroundImage:
      sections.data.attributes.popularGames.highlight.backgroundImage.data
        .attributes.url,
    floatImage:
      sections.data.attributes.popularGames.highlight.floatImage.data.attributes
        .url,
    alignment: sections.data.attributes.popularGames.highlight
      .alignment as HighlighAlignment,
  };
};

export const mostPopularGamesMapper = (sections: Sections) => {
  return sections.data.attributes.popularGames.games.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data.attributes.formats.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.7,
  }));
};
