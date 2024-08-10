import { mock as recommendedMock } from '@/components/GameCardSlider/mock';
import { mock as highlightMock } from '@/components/Highlight/mock';
import { Wishlist } from '@/templates';

const WishlistPage = () => {
  return (
    <Wishlist
      // games={recommendedMock}s
      recommendedGames={recommendedMock}
      recommendedHighlight={highlightMock}
    />
  );
};

export default WishlistPage;
