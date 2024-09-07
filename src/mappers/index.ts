import { HighlighAlignment, RibbonColor, RibbonSize } from '@/components';
import { Banners, Games, Highlight } from '@/types';

export const bannerMapper = (banners: Banners) => {
  return banners.data.map((banner) => ({
    img: banner.attributes.image.data.attributes.url,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle,
    buttonLabel: banner.attributes.button?.label,
    buttonLink: banner.attributes.button?.link,
    ribbon: banner.attributes.ribbon?.text,
    ribbonColor: banner.attributes.ribbon?.color as RibbonColor,
    ribbonSize: banner.attributes.ribbon?.size as RibbonSize,
  }));
};

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
