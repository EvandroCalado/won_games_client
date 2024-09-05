import { NewGames, Sections } from '@/types';

export const newGamesTitleMapper = (sections: Sections) =>
  sections.data.attributes.newGames.title;

export const newGamesMapper = (newGames: NewGames) => {
  return newGames.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data.attributes.formats.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.7,
  }));
};
