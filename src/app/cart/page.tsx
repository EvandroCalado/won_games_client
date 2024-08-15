import { mock as CartListMock } from '@/components/CartList/mock';
import { mock as recommendedMock } from '@/components/GameCardSlider/mock';
import { mock as recommendedHighlightMock } from '@/components/Highlight/mock';
import { mock as PaymentOptionsMock } from '@/components/PaymentOptions/mock';
import { Cart } from '@/templates';

const CartPage = () => {
  return (
    <Cart
      items={CartListMock}
      total={470}
      cards={PaymentOptionsMock}
      recommendedGames={recommendedMock}
      recommendedHighlight={recommendedHighlightMock}
    />
  );
};

export default CartPage;
