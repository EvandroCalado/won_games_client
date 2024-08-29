import { Platform, Rating } from '@/components';
import { mock as gameMock } from '@/components/GameCardSlider/mock';
import { mock as highlightMock } from '@/components/Highlight/mock';
import { GET_GAMES, GET_GAMES_BY_SLUG } from '@/graphql/queries';
import { getClient } from '@/lib/client';
import { Game } from '@/templates';

export const generateStaticParams = async () => {
  const { data } = await getClient().query({
    query: GET_GAMES,
    variables: { limit: 9 },
  });

  return data.games.data.map((game) => ({
    slug: game.attributes.slug,
  }));
};

const GamePage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getClient().query({
    query: GET_GAMES_BY_SLUG,
    variables: { slug: params?.slug },
  });

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
    upcomingGames: gameMock,
    upcomingHighlight: highlightMock,
    recommendedGames: gameMock,
  };

  return <Game {...game} />;
};

export default GamePage;
