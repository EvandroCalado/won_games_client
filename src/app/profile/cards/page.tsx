import { CardsList } from '@/components';
import { mock } from '@/components/PaymentOptions/mock';
import { Profile } from '@/templates';

const CardsPage = () => {
  return (
    <Profile>
      <CardsList cards={mock} />
    </Profile>
  );
};

export default CardsPage;
