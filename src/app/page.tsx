import { HighlighAlignment, RibbonColor, RibbonSize } from '@/components';
import { GET_HOME } from '@/graphql/queries';
import { getClient } from '@/lib/client';
import { Home } from '@/templates';

const HomePage = async () => {
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await getClient().query({
    query: GET_HOME,
  });

  const bannersMap = banners.data.map((banner) => ({
    img: banner.attributes.image.data.attributes.url,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle,
    buttonLabel: banner.attributes.button?.label,
    buttonLink: banner.attributes.button?.link,
    ribbon: banner.attributes.ribbon?.text,
    ribbonColor: banner.attributes.ribbon?.color as RibbonColor,
    ribbonSize: banner.attributes.ribbon?.size as RibbonSize,
  }));

  const newGamesTitleMap = sections.data.attributes.newGames.title;

  const newGamesMap = newGames.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data.attributes.formats.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.7,
  }));

  const mostPopularGamesTitleMap = sections.data.attributes.popularGames.title;

  const mostPopularGamesHighlight = {
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

  const mostPopularGamesMap =
    sections.data.attributes.popularGames.games.data.map((game) => ({
      id: game.id,
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: game.attributes.cover.data.attributes.formats.small.url,
      price: game.attributes.price,
      promotionalPrice: game.attributes.price * 0.7,
    }));

  const upComingGamesTitleMap = sections.data.attributes.upcomingGames.title;

  const upcomingGamesHighlight = {
    title: sections.data.attributes.upcomingGames.highlight.title,
    subtitle: sections.data.attributes.upcomingGames.highlight.subtitle,
    buttonLabel: sections.data.attributes.upcomingGames.highlight.buttonLabel,
    buttonLink: sections.data.attributes.upcomingGames.highlight.buttonLink,
    backgroundImage:
      sections.data.attributes.upcomingGames.highlight.backgroundImage.data
        .attributes.url,
    floatImage:
      sections.data.attributes.upcomingGames.highlight.floatImage.data
        .attributes.url,
    alignment: sections.data.attributes.upcomingGames.highlight
      .alignment as HighlighAlignment,
  };

  const upcomingGamesMap = upcomingGames.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data.attributes.formats?.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.7,
  }));

  const freeGamesTitleMap = sections.data.attributes.freeGames.title;

  const freeGamesHighlight = {
    title: sections.data.attributes.freeGames.highlight.title,
    subtitle: sections.data.attributes.freeGames.highlight.subtitle,
    buttonLabel: sections.data.attributes.freeGames.highlight.buttonLabel,
    buttonLink: sections.data.attributes.freeGames.highlight.buttonLink,
    backgroundImage:
      sections.data.attributes.freeGames.highlight.backgroundImage.data
        .attributes.url,
    floatImage:
      sections.data.attributes.freeGames.highlight.floatImage.data.attributes
        .url,
    alignment: sections.data.attributes.freeGames.highlight
      .alignment as HighlighAlignment,
  };

  const freeGamesMap = freeGames.data.map((game) => ({
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

  return (
    <Home
      banners={bannersMap}
      newGamesTitle={newGamesTitleMap}
      newGames={newGamesMap}
      mostPopularGamesTitle={mostPopularGamesTitleMap}
      mostPopularHighlight={mostPopularGamesHighlight}
      mostPopularGames={mostPopularGamesMap}
      upComingGamesTitle={upComingGamesTitleMap}
      upComingHighlight={upcomingGamesHighlight}
      upComingGames={upcomingGamesMap}
      freeGamesTitle={freeGamesTitleMap}
      freeHighlight={freeGamesHighlight}
      freeGames={freeGamesMap}
    />
  );
};

export default HomePage;
