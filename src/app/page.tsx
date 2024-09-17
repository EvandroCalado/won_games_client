import { GET_HOME } from '@/graphql/queries';
import { bannerMapper, gamesMapper, highlightMapper } from '@/mappers';
import { Home } from '@/templates';
import { getClient } from '@/utils/apollo-client';

const HomePage = async () => {
  const today = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await getClient().query({
    query: GET_HOME,
    variables: { date: today },
  });

  const newGamesTitle = sections.data.attributes.newGames.title;
  const mostPopularGamesTitle = sections.data.attributes.popularGames.title;
  const mostPopularHighlight = sections.data.attributes.popularGames.highlight;
  const mostPopularGames = sections.data.attributes.popularGames.games;
  const upComingGamesTitle = sections.data.attributes.upcomingGames.title;
  const upComingHighlight = sections.data.attributes.upcomingGames.highlight;
  const freeGamesTitle = sections.data.attributes.freeGames.title;
  const freeHighlight = sections.data.attributes.freeGames.highlight;

  return (
    <Home
      banners={bannerMapper(banners)}
      newGamesTitle={newGamesTitle}
      newGames={gamesMapper(newGames)}
      mostPopularGamesTitle={mostPopularGamesTitle}
      mostPopularHighlight={highlightMapper(mostPopularHighlight)}
      mostPopularGames={gamesMapper(mostPopularGames)}
      upComingGamesTitle={upComingGamesTitle}
      upComingHighlight={highlightMapper(upComingHighlight)}
      upComingGames={gamesMapper(upcomingGames)}
      freeGamesTitle={freeGamesTitle}
      freeHighlight={highlightMapper(freeHighlight)}
      freeGames={gamesMapper(freeGames)}
    />
  );
};

export default HomePage;
