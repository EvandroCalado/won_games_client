import { mock as mockSidebar } from '@/components/ExploreSidebar/mock';
import { QUERY_GAMES } from '@/graphql/queries';
import { getClient } from '@/lib/client';
import { Games } from '@/templates';

const GamesPage = async () => {
  const { data } = await getClient().query({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  const games = data.games.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data?.attributes.formats.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.75,
  }));

  return <Games games={games} filterItems={mockSidebar} />;
};

export default GamesPage;
