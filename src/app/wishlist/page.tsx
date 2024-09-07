import { mock as recommendedMock } from '@/components/GameCardSlider/mock';
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended';
import { getClient } from '@/lib/client';
import { gamesMapper, highlightMapper } from '@/mappers';
import { Wishlist } from '@/templates';

const WishlistPage = async () => {
  const { data } = await getClient().query({
    query: QUERY_RECOMMENDED,
  });

  const recommendedTitle = data.recommended.data.attributes.section.title;
  const recommendedGames = data.recommended.data.attributes.section.games;
  const recommendedHighlight =
    data.recommended.data.attributes.section.highlight;

  return (
    <Wishlist
      games={recommendedMock}
      recommendedTitle={recommendedTitle}
      recommendedGames={gamesMapper(recommendedGames)}
      recommendedHighlight={highlightMapper(recommendedHighlight)}
    />
  );
};

export default WishlistPage;
