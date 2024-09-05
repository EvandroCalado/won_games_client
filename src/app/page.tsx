import { GET_HOME } from '@/graphql/queries';
import { getClient } from '@/lib/client';
import {
  bannerMapper,
  freeGamesHighlightMapper,
  freeGamesMapper,
  freeGamesTitleMapper,
  mostPopularGamesHighlightMapper,
  mostPopularGamesMapper,
  mostPopularGamesTitleMapper,
  newGamesMapper,
  newGamesTitleMapper,
  upcomingGamesHighlightMapper,
  upcomingGamesMapper,
  upComingGamesTitleMapper,
} from '@/mappers';
import { Home } from '@/templates';

const HomePage = async () => {
  const today = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await getClient().query({
    query: GET_HOME,
    variables: { date: today },
  });

  return (
    <Home
      banners={bannerMapper(banners)}
      newGamesTitle={newGamesTitleMapper(sections)}
      newGames={newGamesMapper(newGames)}
      mostPopularGamesTitle={mostPopularGamesTitleMapper(sections)}
      mostPopularHighlight={mostPopularGamesHighlightMapper(sections)}
      mostPopularGames={mostPopularGamesMapper(sections)}
      upComingGamesTitle={upComingGamesTitleMapper(sections)}
      upComingHighlight={upcomingGamesHighlightMapper(sections)}
      upComingGames={upcomingGamesMapper(upcomingGames)}
      freeGamesTitle={freeGamesTitleMapper(sections)}
      freeHighlight={freeGamesHighlightMapper(sections)}
      freeGames={freeGamesMapper(freeGames)}
    />
  );
};

export default HomePage;
