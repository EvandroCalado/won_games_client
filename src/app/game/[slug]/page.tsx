import { Platform, Rating } from '@/components';
import {
  QUERY_GAMES,
  QUERY_GAMES_BY_SLUG,
  QUERY_RECOMMENDED,
  QUERY_UPCOMING,
} from '@/graphql/queries';
import { getClient } from '@/lib/client';
import { gamesMapper, highlightMapper } from '@/mappers';
import { Game } from '@/templates';

export const generateStaticParams = async () => {
  const { data } = await getClient().query({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  return data.games.data.map((game) => ({
    slug: game.attributes.slug,
  }));
};

const GamePage = async ({ params }: { params: { slug: string } }) => {
  // games by slug
  const { data } = await getClient().query({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: params?.slug },
  });

  // recommended
  const { data: recommendedList } = await getClient().query({
    query: QUERY_RECOMMENDED,
  });

  //upcoming
  const today = new Date().toISOString().slice(0, 10);
  const { data: upcomingList } = await getClient().query({
    query: QUERY_UPCOMING,
    variables: { date: today },
  });

  const recommendedTitle =
    recommendedList.recommended.data.attributes.section.title;
  const recommendedGames =
    recommendedList.recommended.data.attributes.section.games;
  const upcomingTitle =
    upcomingList.showcase.data.attributes.upcomingGames.title;
  const upcomingGames = upcomingList.upcomingGames;
  const upcomingHighlight =
    upcomingList.showcase?.data.attributes.upcomingGames.highlight;

  const game = {
    cover: data.games.data[0].attributes.cover.data.attributes.src,
    gameInfo: {
      title: data.games.data[0].attributes.name,
      price: data.games.data[0].attributes.price,
      description: data.games.data[0].attributes.short_description,
    },
    gallery: data.games.data[0].attributes.gallery.data.map((img) => ({
      src: img.attributes.src,
      alt: img.attributes.label,
    })),
    description: data.games.data[0].attributes.description,
    details: {
      developer:
        data.games.data[0].attributes.developers.data[0].attributes.name,
      releaseDate: data.games.data[0].attributes.release_date,
      rating: data.games.data[0].attributes.rating as Rating,
      platforms: data.games.data[0].attributes.platforms.data.map(
        (platform) => platform.attributes.name,
      ) as Platform[],
      publisher: data.games.data[0].attributes.publisher.data.attributes.name,
      genres: data.games.data[0].attributes.categories.data.map(
        (category) => category.attributes.name,
      ),
    },
    upcomingTitle: upcomingTitle,
    upcomingGames: gamesMapper(upcomingGames),
    upcomingHighlight: highlightMapper(upcomingHighlight),
    recommendedTitle: recommendedTitle,
    recommendedGames: gamesMapper(recommendedGames),
  };

  return <Game {...game} />;
};

export default GamePage;
