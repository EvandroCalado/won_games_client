import { mock as CartListMock } from '@/components/CartList/mock';
import { mock as PaymentOptionsMock } from '@/components/PaymentOptions/mock';
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended';
import { getClient } from '@/lib/client';
import { gamesMapper, highlightMapper } from '@/mappers';
import { Cart } from '@/templates';

const CartPage = async () => {
  const { data } = await getClient().query({
    query: QUERY_RECOMMENDED,
  });

  const recommendedTitle = data.recommended.data.attributes.section.title;
  const recommendedGames = data.recommended.data.attributes.section.games;
  const recommendedHighlight =
    data.recommended.data.attributes.section.highlight;

  return (
    <Cart
      items={CartListMock}
      total={470}
      cards={PaymentOptionsMock}
      recommendedTitle={recommendedTitle}
      recommendedGames={gamesMapper(recommendedGames)}
      recommendedHighlight={highlightMapper(recommendedHighlight)}
    />
  );
};

export default CartPage;
